import res from "../resource";
import GameScene from "./gameScene";
import AudioEngine from "../helper/audioEngine";

let MainMenuLayer = cc.Layer.extend({

    backgroundSprite: null,

    ctor: function () {
        this._super();
        this.backgroundSprite  = new cc.Sprite(res.backgroundSprite.src);

        let backgroundSprite  = new cc.Sprite(res.backgroundSprite.src);
        backgroundSprite.setAnchorPoint(0, 0);
        backgroundSprite.getTexture().setAntiAliasTexParameters();
        const scale = Math.max(size.width / backgroundSprite.getContentSize().width,
            size.height / backgroundSprite.getContentSize().height);
        backgroundSprite.setScale(scale);

        this.addChild(backgroundSprite, -1);

        // Create the main menu

        let itemNewGameLabel = new cc.LabelTTF("Start Game", "GameFont", 34);
        itemNewGameLabel.enableShadow(cc.color(50, 100, 100, 255), cc.size(4, 4), 0);

        let itemNewGame = new cc.MenuItemLabel(itemNewGameLabel, () => {
            cc.log("Play button");
            AudioEngine.playEffect(res.clickSound.src, false);
            cc.director.runScene(new cc.TransitionFade(0.5, new GameScene(), cc.color(1, 1, 1, 1)));
        });

        itemNewGame.setPosition(cc.p(size.width / 2, (size.height / 6) * 4));

        let mainMenu = new cc.Menu(itemNewGame);
        mainMenu.setPosition(cc.p(0, 0));
        this.addChild(mainMenu);

        let descLabel = new cc.LabelTTF("Welcome to the battleship game." +
            " Click on start game to begin and you'll find own enemy.\n" +
            "You may discover the battleship rules there: ", "Dejavu Serif", 28 * scaleFactor);
        descLabel.setScale(1 / scaleFactor);
        descLabel.getTexture().setAntiAliasTexParameters();

        descLabel.setPosition(cc.p(size.width / 2, size.height / 2.2));
        this.addChild(descLabel);

        let rulesButtonLabel = new cc.LabelTTF("rules", "Arial", 29);
        let rulesButtonItem = new cc.MenuItemLabel(rulesButtonLabel, () => {
            openInNewTab("https://en.wikipedia.org/wiki/Battleship_(game)");
        });
        let rulesMenu = new cc.Menu(rulesButtonItem);
        rulesMenu.setPosition(cc.p(size.width / 2, size.height / 2.6));
        this.addChild(rulesMenu);

        let underline = new cc.LabelTTF("_____", "Arial", 29);
        underline.setPosition(rulesMenu.getPosition());
        this.addChild(underline);

        return true;
    }
});

function openInNewTab(url) {
    let win = window.open(url, '_blank');
    win.focus();
}

let MainMenuScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let layer = new MainMenuLayer();
        this.addChild(layer);
    }
});

export default MainMenuScene;
