let MainMenuLayer = cc.Layer.extend({

    sprite: null,
    backgroundSprite: null,

    ctor: function () {

        this._super();

        let size = cc.winSize;

        // this.backgroundSprite = new cc.Sprite("res/background.jpeg");
        // this.backgroundSprite.setAnchorPoint(cc.p(0.5, 0.5));
        // this.backgroundSprite.setPosition(cc.p(screen.width / 2, size.height / 2));
        //
        // this.addChild(this.backgroundSprite, 0);

        // Create the main menu

        let itemNewGame = new cc.MenuItemFont("New Game", play);
        let itemScores = new cc.MenuItemFont("Scores", scores);
        let itemSettings = new cc.MenuItemFont("Settings", settings);
        let itemExit = new cc.MenuItemFont("Exit", exit);

        itemNewGame.setPosition(cc.p(size.width / 2, (size.height / 6) * 4));
        itemScores.setPosition(cc.p(size.width / 2, (size.height / 6) * 3));
        itemSettings.setPosition(cc.p(size.width / 2, (size.height / 6) * 2));
        itemExit.setPosition(cc.p(size.width / 2, (size.height / 6) * 1));

        let mainMenu = new cc.Menu(itemNewGame, itemScores, itemSettings, itemExit);
        mainMenu.setPosition(cc.p(0, 0));
        this.addChild(mainMenu);

        return true;
    }
});

let play = function() {
    cc.log("Play button");
    cc.director.runScene(new cc.TransitionFade(0.5, new GameScene(), cc.Color(1, 1, 1, 1)));
};

let settings = () => {
    cc.log("Settings button");
    cc.director.runScene(new cc.TransitionFade(0.5, new GameScene(), cc.Color(1, 1, 1, 1)));
};

let scores = () => {
    cc.log("Scores button");
    cc.director.runScene(new cc.TransitionFade(0.5, new GameScene(), cc.Color(1, 1, 1, 1)));
};

let exit = () => {
    cc.log("Exit button");
    cc.exit();
};

let MainMenuScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let layer = new MainMenuLayer();
        this.addChild(layer);
    }
});

