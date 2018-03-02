let GameLayer = cc.Layer.extend({

    backgroundSprite: null,
    ownBoardLayer: null,
    enemyBoardLayer: null,
    player: null,
    walkingUserId: null,
    ownBoardLabel: null,
    enemyBoardLabel: null,
    topBoardLabel: null,
    score: null,
    labelOnError: null,
    exitOneEnemyDissconect: false,
    waitEnemyLabel: false,

    ctor: function () {
        this._super();
        this.player            = new Player();
        this.player.enemyBoard = new GameBoard(res.battleShipField.src);
        this.player.ownBoard   = new GameBoard(res.battleShipField.src);
        this.ownBoardLayer     = this.player.ownBoard.getLayer("Tile Layer 1");
        this.enemyBoardLayer   = this.player.enemyBoard.getLayer("Tile Layer 1");
        this.backgroundSprite  = new cc.Sprite(res.backgroundSprite.src);
        this.ownBoardLabel     = new cc.LabelTTF("Your board", "GameFont", 20);
        this.enemyBoardLabel   = new cc.LabelTTF("Enemy board", "GameFont", 20);
        this.topBoardLabel     = new cc.LabelTTF("", "GameFont", 21);
        this.audioEngine       = new AudioEngine();
        this.audioIcon         = new ccui.Button();
        this.waitEnemyLabel    = new cc.LabelTTF("Searching game...", "GameFont", 20);
        this.score             = Score.instance;
        this.labelOnError      = new cc.LabelTTF("The enemy disconnected", "GameFont", 16);
        this.audioIcon.loadTextures(res.audioIcon.src, res.audioDisableIcon.src, res.audioDisableIcon.src);

        this.ownBoardLabel.enableShadow(cc.color(100, 50, 50, 255), cc.size(4, 4), 0);
        this.enemyBoardLabel.enableShadow(cc.color(100, 50, 50, 255), cc.size(4, 4), 0);

        const size = cc.winSize;

        this.size = size;

        this.backgroundSprite.setAnchorPoint(0, 0);
        const scale = Math.max(size.width / this.backgroundSprite.getContentSize().width,
            size.height / this.backgroundSprite.getContentSize().height);
        this.backgroundSprite.setScale(scale);

        this.addChild(this.backgroundSprite);

        this.waitEnemyLabel.setFontFillColor(cc.color(0, 50, 255, 200));
        this.waitEnemyLabel.setAnchorPoint(cc.p(0.5, 0.5));
        this.waitEnemyLabel.setPosition(cc.p(size.width / 2, size.height - size.height / 8));
        this.addChild(this.waitEnemyLabel);

        const margin = 30;

        const enemyBoardScale = (size.height / 2) / this.player.enemyBoard.height;
        this.player.enemyBoard.setAnchorPoint(cc.p(0.5, 0.5));
        this.enemyBoardLayer.setScale(enemyBoardScale);
        this.player.enemyBoard.setPosition(cc.p(size.width / 3 + 2 * size.width / 3 - size.width / 6 - margin, size.height / 2));
        this.player.enemyBoard.width  = this.player.enemyBoard.width  * enemyBoardScale;
        this.player.enemyBoard.height = this.player.enemyBoard.height * enemyBoardScale;

        const ownBoardScale = (size.height / 2) / this.player.ownBoard.height;
        this.player.ownBoard.setAnchorPoint(cc.p(0.5, 0.5));
        this.ownBoardLayer.setScale(ownBoardScale);
        this.player.ownBoard.setPosition(cc.p(size.width / 3 - size.width / 6 + margin, size.height / 2));
        this.player.ownBoard.width  = this.player.ownBoard.width  * ownBoardScale;
        this.player.ownBoard.height = this.player.ownBoard.height * ownBoardScale;

        this.ownBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));
        this.ownBoardLabel.setPosition(cc.p(size.width / 3 - size.width / 6 + margin,
            size.height / 2 + this.player.ownBoard.height / 2 + margin));
        this.addChild(this.ownBoardLabel);

        this.enemyBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));
        this.enemyBoardLabel.setPosition(cc.p(size.width / 3 + 2 * size.width / 3 - size.width / 6 - margin,
            size.height / 2 + this.player.enemyBoard.height / 2 + margin));
        this.addChild(this.enemyBoardLabel);

        this.topBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));
        this.topBoardLabel.setPosition(cc.p(size.width / 2, size.height - size.height / 8));
        this.addChild(this.topBoardLabel);

        this.exitButtonLabel = new cc.LabelTTF("Cancel game", "GameFont", 20);
        this.exitButtonMenuItem = new cc.MenuItemLabel(this.exitButtonLabel, () => {
            this.server.webSocket.close();
            this.score.result = this.exitOneEnemyDissconect ? "win" : "lost";
            cc.director.runScene(new cc.TransitionFade(0.5, new ScoreScene(), cc.Color(1, 1, 1, 1)));
        });
        this.exitButtonMenuItem.setAnchorPoint(cc.p(0, 0));
        this.exitButtonMenuItem.setPosition(size.width / 12, size.height - size.height / 12);
        this.menuExit = new cc.Menu(this.exitButtonMenuItem);
        this.menuExit.setPosition(cc.p(0, 0));
        this.addChild(this.menuExit);

        this.addChild(this.player.enemyBoard);
        this.addChild(this.player.ownBoard);

        this.audioIcon.touchEnabled = true;
        this.audioIcon._scale9Enabled = true;

        const audioIconPos = new cc.Point(size.width - size.width / 12, size.height - size.height / 12);
        this.audioIcon.setPosition(audioIconPos);

        this.addChild(this.audioIcon);

        this.server = new Server(SERVER_NAME);
        this.server.webSocket.onmessage = (data) => {
            const msg = JSON.parse(data.data);
            switch (msg.msg) {
                case "onConnection":
                    this.onConnection(msg);
                    break;
                case "enemyFound":
                    this.onEnemyFound(msg);
                    break;
                case "win":
                    this.onWin(msg);
                    break;
                case "lost":
                    this.onLost(msg);
                    break;
                case "enemyInjured":
                    this.enemyInjured(msg);
                    break;
                case "youInjured":
                    this.youInjured(msg);
                    break;
                case "youFall":
                    this.youFall(msg);
                    break;
                case "enemyFall":
                    this.enemyFall(msg);
                    break;
                case "enemyDisconnect":
                    this.enemyDisconnect(msg);
                    break;
                default:
                    this.onUnknown(msg);
                    break;
            }
        };

        let that = this;
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,

            onMouseDown: function (event) {
                const x = event.getLocationX();
                const y = event.getLocationY();

                let fieldRect = that.player.enemyBoard.getRect();

                if (cc.rectContainsPoint(fieldRect, cc.p(Math.floor(x), Math.floor(y)))) {
                    for (let i = 0; i < 10; i++) {
                        for (let j = 0; j < 10; j++) {
                            let currentTile = that.enemyBoardLayer.getTileAt(cc.p(i, j));
                            const tileX = that.enemyBoardLayer.getPositionAt(cc.p(i, j)).x
                                + that.player.enemyBoard.getPositionX()
                                - that.player.enemyBoard.width / 2;
                            const tileY = that.enemyBoardLayer.getPositionAt(cc.p(i, j)).y
                                + that.player.enemyBoard.getPositionY()
                                - that.player.enemyBoard.height / 2;
                            let tileRect = new cc.Rect(tileX, tileY, currentTile.width, currentTile.height);

                            if (cc.rectContainsPoint(tileRect, cc.p(x, y)) && that.walkingUserId === that.player.id) {
                                that.server.hit(i, j, that.player.enemyId);
                            }
                        }
                    }
                    cc.log("Clicked on enemyBoardField");
                }

                let soundButtonRect = new cc.Rect(Math.floor(audioIconPos.x - that.audioIcon._buttonNormalSpriteFrame.getRect().width / 2),
                                                  Math.floor(audioIconPos.y - that.audioIcon._buttonNormalSpriteFrame.getRect().height / 2),
                                                  that.audioIcon._buttonNormalSpriteFrame.getRect().width,
                                                  that.audioIcon._buttonNormalSpriteFrame.getRect().height);
                if (cc.rectContainsPoint(soundButtonRect, cc.p(Math.floor(x), Math.floor(y)))) {
                    that.toggleSound();
                }
            }
        }, this);

        return true;
    },

    enemyDisconnect: function (msg) {
        this.labelOnError.setAnchorPoint(cc.p(0.5, 0.5));
        this.exitOneEnemyDissconect = true;
        this.labelOnError.setFontFillColor(cc.color(200, 0, 0));
        this.labelOnError.setPosition(cc.p(this.size.width / 2, this.size.height - this.size.height / 14));
        this.addChild(this.labelOnError);
    },

    onConnection: function(msg) {
        cc.log("Connection has been established");

        this.board = msg.board;

        cc.log(this.board);

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let cell = this.board[j + i * 10];
                if (cell === SUBMARINE_TYPE || cell === BATTLESHIP_TYPE || cell === DESTROYER_TYPE || cell === CRUISER_TYPE) {
                    this.ownBoardLayer.setTileGID(GID_SHIP, cc.p(i, j));
                    cc.log(this.ownBoardLayer.getTileGIDAt(cc.p(i, j)));
                }
            }
        }

        this.player.id = msg.id;
        this.server.findRoom();
    },

    toggleSound: function() {
        this.audioEngine.soundEnabled = !this.audioEngine.soundEnabled;
        if (this.audioIcon.isEnabled()) {
            this.audioIcon.setEnabled(false);
        } else {
            this.audioIcon.setEnabled(true);
            this.audioIcon._onPressStateChangedToNormal();
        }
    },

    onEnemyFound: function (msg) {
        this.removeChild(this.waitEnemyLabel);
        this.player.enemyId = msg.enemyId;
        this.walkingUserId = msg.walkingUserId;
        if (this.walkingUserId === this.player.id) {
            this.topBoardLabel.string = "Your action";
        } else {
            this.topBoardLabel.string = "Enemy action";
        }
        cc.log("Enemy found. EnemyId = " + this.player.enemyId);
        cc.log("Walking user id = " + this.walkingUserId);
    },

    onWin: function (msg) {
        cc.log("You win!");
        this.topBoardLabel.string = "You win";
        this.score.result = "win";
        this.server.webSocket.close();
        cc.director.runScene(new cc.TransitionFade(0.5, new ScoreScene(), cc.Color(1, 1, 1, 1)));
    },

    onLost: function (msg) {
        cc.log("You lost");
        this.topBoardLabel.string = "You lost";
        this.score.result = "lost";
        this.server.webSocket.close();
        cc.director.runScene(new cc.TransitionFade(0.5, new ScoreScene(), cc.Color(1, 1, 1, 1)));
    },

    onUnknown: function (msg) {
        cc.log(msg.msg);
    },

    enemyInjured: function (msg) {
        this.enemyBoardLayer.setTileGID(GID_INJURED, cc.p(msg.row, msg.column));
        this.audioEngine.playEffect(res.hitSound.src, false);
        this.score.hits++;
    },

    youInjured: function (msg) {
        cc.log("You injured at " + msg.row + " " + msg.column);
        this.ownBoardLayer.setTileGID(GID_INJURED, cc.p(msg.row, msg.column));
        this.audioEngine.playEffect(res.hitSound.src, false);
    },

    youFall: function (msg) {
        this.enemyBoardLayer.setTileGID(GID_FALL, cc.p(msg.row, msg.column));
        this.walkingUserId = this.player.enemyId;
        this.topBoardLabel.string = "Enemy action";
        this.audioEngine.playEffect(res.fallSound.src, false);
        this.score.misses++;
    },

    enemyFall: function (msg) {
        cc.log("Enemy fall at " + msg.row + " " + msg.column);
        this.ownBoardLayer.setTileGID(GID_FALL, cc.p(msg.row, msg.column));
        this.walkingUserId = this.player.id;
        this.topBoardLabel.string = "Your action";
        this.audioEngine.playEffect(res.fallSound.src, false);
    },
});

let GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let layer = new GameLayer();
        this.addChild(layer);
    }
});
