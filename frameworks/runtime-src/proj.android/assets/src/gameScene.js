
let GameLayer = cc.Layer.extend({

    sprite: null,
    backgroundSprite: null,

    ctor: function () {

        this._super();
        let size = cc.winSize;

        let myField = new GameBoard(res.battleShipField);
        let enemyField = new GameBoard(res.battleShipField);

        enemyField.field.setAnchorPoint(cc.p(0.5, 0.5));
        enemyField.field.setPosition(cc.p(size.width / 2, size.height / 2 + size.height / 4));

        myField.field.setAnchorPoint(cc.p(0.5, 0.5));
        myField.field.setPosition(cc.p(size.width / 2, size.height / 2 - size.height / 4));

        let myLayer = myField.field.getLayer("Tile Layer 1");

        // enemyBoardField.field.setScale(0.9, 0.9);
        // ownBoardField.field.setScale(0.9, 0.9);

        let webSocket = new WebSocket("wss://0.0.0.0:2346");

        webSocket.onmessage = (msg) => {
            cc.log("Connection has been established. The board is: ");

            const data = JSON.parse(msg.data).msg;
            cc.log(data);

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    let cell = data[j + i * 10];
                    if (cell === "s" || cell === "b" || cell === "d" || cell === "c") {
                        myLayer.setTileGID(3, cc.p(i, j));
                    }
                }
            }

        };

        this.addChild(enemyField.field);
        this.addChild(myField.field);

        return true;
    }
});

let GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let layer = new GameLayer();
        this.addChild(layer);
    }
});