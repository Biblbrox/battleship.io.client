import ScoreScene from "./scoreScene";
import AudioEngine from "../helper/audioEngine";
import Score from "../helper/score";
import Constants from "../helper/constants";
import Server from "../helper/server";
import GameBoard from "../helper/gameBoard";
import Player from "../helper/player";
import res from "../resource";

let GameLayer = cc.Layer.extend({

    backgroundSprite: null,
    ownBoardLayer: null,
    enemyBoardLayer: null,
    player: null,
    walkingUserId: null,
    topBoardLabel: null,
    score: null,
    labelOnError: null,
    exitOneEnemyDisconnect: false,
    waitEnemyLabel: null,

    ctor: function () {
        this._super();
        this.player            = new Player();
        this.player.enemyBoard = new GameBoard(res.battleShipField.src);
        this.player.ownBoard   = new GameBoard(res.battleShipField.src);
        this.ownBoardLayer     = this.player.ownBoard.getLayer("Tile Layer 1");
        this.enemyBoardLayer   = this.player.enemyBoard.getLayer("Tile Layer 1");
        this.topBoardLabel     = new cc.LabelTTF("", "GameFont", 21);
        this.audioIcon         = new ccui.Button();
        this.waitEnemyLabel    = new cc.LabelTTF("Searching game...", "GameFont", 20);
        this.score             = Score.instance;
        this.labelOnError      = new cc.LabelTTF("The enemy disconnected", "GameFont", 16);
        this.audioIcon.loadTextures(res.audioIcon.src, res.audioDisableIcon.src, res.audioDisableIcon.src);

        this.initSprites();

        this.addChildrenToLayer();

        this.server = new Server(Constants.SERVER_NAME);
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
            event: cc.EventListener.TOUCH_ONE_BY_ONE,

            onTouchBegan: function (event) {
                let t0 = performance.now();
                const x = event.getLocationX();
                const y = event.getLocationY();

                cc.log(that.player.enemyBoard.getRect());
                cc.log(cc.p(x, y));

                if (that.walkingUserId === that.player.id
                    && cc.rectContainsPoint(that.player.enemyBoard.getRect(), cc.p(Math.floor(x), Math.floor(y)))) {
                    let enemyWasHit = false;
                    for (let i = 0; i < 10 && !enemyWasHit; i++) {
                        for (let j = 0; j < 10 && !enemyWasHit; j++) {
                            let currentTile = that.enemyBoardLayer.getTileAt(cc.p(i, j));
                            currentTile.setAnchorPoint(cc.p(0, 0));
                            const tileX = currentTile.getPositionX()
                                + that.player.enemyBoard.getPositionX()
                                - that.player.enemyBoard.getContentSize().width / 2;
                            const tileY = currentTile.getPositionY()
                                + that.player.enemyBoard.getPositionY()
                                - that.player.enemyBoard.getContentSize().height / 2;
                            let tileRect = cc.rect(tileX, tileY, currentTile.getContentSize().width, currentTile.getContentSize().height);

                            if (cc.rectContainsPoint(tileRect, cc.p(x, y))) {
                                cc.log("tileX = %d, tileY = %d", tileX, tileY);
                                that.server.hit(i, j, that.player.enemyId);
                                enemyWasHit = true;
                            }
                        }
                    }
                    cc.log("Clicked on enemyBoardField");
                } else {
                    let soundButtonRect = new cc.rect(Math.floor(that.audioIconPos.x - that.audioIcon._buttonNormalSpriteFrame.getRect().width / 2),
                        Math.floor(that.audioIconPos.y - that.audioIcon._buttonNormalSpriteFrame.getRect().height / 2),
                        that.audioIcon._buttonNormalSpriteFrame.getRect().width,
                        that.audioIcon._buttonNormalSpriteFrame.getRect().height);
                    if (cc.rectContainsPoint(soundButtonRect, cc.p(Math.floor(x), Math.floor(y)))) {
                        that.toggleSound();
                    }
                }

                let t1 = performance.now();

                cc.log("Performance: " + (t1 - t0) + " milliseconds");
            }
        }, this);

        return true;
    },

    addChildrenToLayer: function() {
        this.addChild(this.backgroundSprite);
        this.addChild(this.waitEnemyLabel);
        this.addChild(this.ownBoardLabel);
        this.addChild(this.enemyBoardLabel);
        this.addChild(this.topBoardLabel);
        this.addChild(this.exitButtonLabel);
        this.addChild(this.player.enemyBoard);
        this.addChild(this.player.ownBoard);
        this.addChild(this.audioIcon);
    },

    initSprites: function() {
        this.backgroundSprite  = new cc.Sprite(res.backgroundSprite.src);
        this.backgroundSprite.setAnchorPoint(0, 0);
        const scale = Math.max(size.width / this.backgroundSprite.getContentSize().width,
            size.height / this.backgroundSprite.getContentSize().height);
        this.backgroundSprite.setScale(scale);

        this.waitEnemyLabel.setFontFillColor(cc.color(0, 50, 255, 200));
        this.waitEnemyLabel.setAnchorPoint(cc.p(0.5, 0.5));
        this.waitEnemyLabel.setPosition(cc.p(size.width / 2, size.height - size.height / 8));

        const margin = 70;

        this.player.enemyBoard.setAnchorPoint(cc.p(0.5, 0.5));
        this.player.enemyBoard.setPosition(cc.p(size.width / 3 + 2 * size.width / 3 - size.width / 6 - margin, this.player.enemyBoard.getContentSize().height / 2 + 30));

        this.player.ownBoard.setAnchorPoint(cc.p(0.5, 0.5));
        this.player.ownBoard.setPosition(cc.p(size.width / 3 - size.width / 6 + margin, this.player.ownBoard.getContentSize().height / 2 + 30));

        this.ownBoardLabel     = new cc.LabelTTF("Your board", "GameFont", 20);
        this.enemyBoardLabel   = new cc.LabelTTF("Enemy board", "GameFont", 20);

        this.ownBoardLabel.enableShadow(cc.color(100, 50, 50, 255), cc.size(4, 4), 0);
        this.enemyBoardLabel.enableShadow(cc.color(100, 50, 50, 255), cc.size(4, 4), 0);

        this.ownBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));
        this.ownBoardLabel.setPosition(cc.p(size.width / 3 - size.width / 6 + margin,
            this.player.ownBoard.getPositionY() + this.player.enemyBoard.getContentSize().height / 2 + 20));

        this.enemyBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));
        this.enemyBoardLabel.setPosition(cc.p(size.width / 3 + 2 * size.width / 3 - size.width / 6 - margin,
            this.player.enemyBoard.getPositionY() + this.player.enemyBoard.getContentSize().height / 2 + 20));

        this.topBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));
        this.topBoardLabel.setPosition(cc.p(size.width / 2, size.height - size.height / 8));

        this.exitButtonLabel = new ccui.Button();
        this.exitButtonLabel.setTitleText("Exit");
        this.exitButtonLabel.setTitleFontSize(30);
        this.exitButtonLabel.setTitleFontName("GameFont");
        this.exitButtonLabel.addTouchEventListener((sender, event) => {
        this.server.webSocket.close();
            AudioEngine.playEffect(res.clickSound.src, false);
            this.score.result = this.exitOneEnemyDisconnect ? "win" : "lost";
            cc.director.runScene(new cc.TransitionFade(0.5, new ScoreScene(), cc.color(1, 1, 1, 1)));
        }, this);

        this.exitButtonLabel.setAnchorPoint(cc.p(0, 0));
        this.exitButtonLabel.setPosition(size.width / 16, size.height - size.height / 12);

        // this.audioIcon.setScale(3);
        this.audioIcon.touchEnabled = true;
        this.audioIcon._scale9Enabled = true;

        this.audioIconPos = new cc.Point(size.width - size.width / 12, size.height - size.height / 12);
        this.audioIcon.setPosition(this.audioIconPos);
    },

    enemyDisconnect: function (msg) {
        this.labelOnError.setAnchorPoint(cc.p(0.5, 0.5));
        this.exitOneEnemyDisconnect = true;
        this.labelOnError.setFontFillColor(cc.color(200, 0, 0));
        this.labelOnError.setPosition(cc.p(size.width / 2, size.height - size.height / 14));
        this.addChild(this.labelOnError);
    },

    onConnection: function(msg) {
        cc.log("Connection has been established");

        this.board = msg.board;

        cc.log(this.board);

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let cell = this.board[j + i * 10];
                if (   cell === Constants.SUBMARINE_TYPE || cell === Constants.BATTLESHIP_TYPE
                    || cell === Constants.DESTROYER_TYPE || cell === Constants.CRUISER_TYPE) {
                    this.ownBoardLayer.setTileGID(Constants.GID_SHIP, cc.p(i, j));
                    cc.log(this.ownBoardLayer.getTileGIDAt(cc.p(i, j)));
                }
            }
        }

        this.player.id = msg.id;
        this.server.findRoom();
    },

    toggleSound: function() {
        AudioEngine.soundEnabled = !AudioEngine.soundEnabled;
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
        cc.director.runScene(new cc.TransitionFade(0.5, new ScoreScene(), cc.color(1, 1, 1, 1)));
    },

    onLost: function (msg) {
        cc.log("You lost");
        this.topBoardLabel.string = "You lost";
        this.score.result = "lost";
        this.server.webSocket.close();
        cc.director.runScene(new cc.TransitionFade(0.5, new ScoreScene(), cc.color(1, 1, 1, 1)));
    },

    onUnknown: function (msg) {
        cc.log(msg.msg);
    },

    enemyInjured: function (msg) {
        this.enemyBoardLayer.setTileGID(Constants.GID_INJURED, cc.p(msg.row, msg.column));
        AudioEngine.playEffect(res.hitSound.src, false);
        this.score.hits++;
    },

    youInjured: function (msg) {
        cc.log("You injured at " + msg.row + " " + msg.column);
        this.ownBoardLayer.setTileGID(Constants.GID_INJURED, cc.p(msg.row, msg.column));
        AudioEngine.playEffect(res.hitSound.src, false);
    },

    youFall: function (msg) {
        this.enemyBoardLayer.setTileGID(Constants.GID_FALL, cc.p(msg.row, msg.column));
        this.walkingUserId = this.player.enemyId;
        this.topBoardLabel.string = "Enemy action";
        AudioEngine.playEffect(res.fallSound.src, false);
        this.score.misses++;
    },

    enemyFall: function (msg) {
        cc.log("Enemy fall at " + msg.row + " " + msg.column);
        this.ownBoardLayer.setTileGID(Constants.GID_FALL, cc.p(msg.row, msg.column));
        this.walkingUserId = this.player.id;
        this.topBoardLabel.string = "Your action";
        AudioEngine.playEffect(res.fallSound.src, false);
    },
});

let GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let layer = new GameLayer();
        this.addChild(layer);
    }
});

export default GameScene;
