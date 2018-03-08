import GameScene from "./gameScene";
import Score from "../helper/score";
import res from "../resource";
import AudioEngine from "../helper/audioEngine";

let ScoreLayer = cc.Layer.extend({

    resultLabel: null,
    hits: null,
    misses: null,
    score: null,
    playAgain: null,
    playAgainMenu: null,
    backgroundSprite: null,

    ctor: function() {
        this._super();
        this.score            = Score.instance;
        this.resultLabel      = new cc.LabelTTF(this.score.result === "win" ? "You win" : "You lost",
            "GameFont", 28);
        this.hits             = new cc.LabelTTF("Hits: " + this.score.hits, "GameFont", 20);
        this.misses           = new cc.LabelTTF("Misses: " + this.score.misses, "GameFont", 20);
        this.playAgain        = new cc.LabelTTF("Play again", "GameFont", 26);
        this.playAgainMenu    = new cc.MenuItemLabel(this.playAgain, this.restart);
        this.backgroundSprite = new cc.Sprite(this.score.result === "win" ? res.backgroundOnWin.src : res.backgroundOnLost.src);

        this.backgroundSprite.setAnchorPoint(0, 0);
        const scale = Math.max(size.width / this.backgroundSprite.getContentSize().width,
            size.height / this.backgroundSprite.getContentSize().height);
        this.backgroundSprite.setScale(scale);

        this.resultLabel.setAnchorPoint(cc.p(0.5, 0.5));
        this.hits.setAnchorPoint(cc.p(0.5, 0.5));
        this.misses.setAnchorPoint(cc.p(0.5, 0.5));
        this.playAgainMenu.setAnchorPoint(cc.p(0.5, 0.5));

        this.resultLabel.setPosition(cc.p(size.width / 2, size.height - size.height / 12));
        this.hits.setPosition(cc.p(size.width / 2, size.height / 1.8));
        this.misses.setPosition(cc.p(size.width / 2, size.height / 2.8));
        this.playAgainMenu.setPosition(cc.p(size.width / 2, size.height / 10));

        this.menu = new cc.Menu(this.playAgainMenu);
        this.menu.setPosition(cc.p(0, 0));

        this.addChild(this.backgroundSprite);
        this.addChild(this.resultLabel);
        this.addChild(this.hits);
        this.addChild(this.misses);
        this.addChild(this.menu);
    },

    restart: function() {
        AudioEngine.playEffect(res.clickSound.src, false);
        cc.director.runScene(new cc.TransitionFade(0.5, new GameScene(), cc.Color(1, 1, 1, 1)));
    }
});

let ScoreScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        let layer = new ScoreLayer();
        this.addChild(layer);
    }
});

export default ScoreScene;