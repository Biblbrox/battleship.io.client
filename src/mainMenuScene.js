let MainMenuLayer = cc.Layer.extend({

    sprite: null,
    backgroundSprite: null,

    ctor: function () {

        this._super();
        this.backgroundSprite  = new cc.Sprite(res.backgroundSprite.src);

        const size = cc.winSize;

        this.backgroundSprite.setAnchorPoint(0, 0);
        const scale = Math.max(size.width / this.backgroundSprite.getContentSize().width,
            size.height / this.backgroundSprite.getContentSize().height);
        this.backgroundSprite.setScale(scale);

        this.addChild(this.backgroundSprite);

        // Create the main menu

        let itemNewGameLabel = new cc.LabelTTF("Start Game", "GameFont", 26);
        itemNewGameLabel.enableShadow(cc.color(50, 100, 100, 255), cc.size(4, 4), 0);

        let itemNewGame =  new cc.MenuItemLabel(itemNewGameLabel, play);

        itemNewGame.setPosition(cc.p(size.width / 2, (size.height / 6) * 4));

        let mainMenu = new cc.Menu(itemNewGame);
        mainMenu.setPosition(cc.p(0, 0));
        this.addChild(mainMenu);

        return true;
    }
});

let play = function() {
    cc.log("Play button");
    cc.director.runScene(new cc.TransitionFade(0.5, new GameScene(), cc.Color(1, 1, 1, 1)));
};

let MainMenuScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let layer = new MainMenuLayer();
        this.addChild(layer);
    }
});

