import res from "./resource";
import MainMenuScene from "./scene/mainMenuScene";

const g_resources = [];
for (let i in res) {
    g_resources.push(res[i]);
}

window.app = {};

window.app.start = function() {
    let sys = cc.sys;
    if(!sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(sys.os === sys.OS_IOS);

    // Disable auto full screen on baidu and wechat, you might also want to eliminate sys.BROWSER_TYPE_MOBILE_QQ
    if (sys.isMobile &&
        sys.browserType !== sys.BROWSER_TYPE_BAIDU &&
        sys.browserType !== sys.BROWSER_TYPE_WECHAT) {
        cc.view.enableAutoFullScreen(true);
    }

    document.getElementById("Cocos2dGameContainer").style.backgroundColor = "#000000";

    // Adjust viewport meta
    cc.view.adjustViewPort(true);

    // Uncomment the following line to set a fixed orientation for your game
    cc.view.setOrientation(cc.ORIENTATION_LANDSCAPE);

    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(1024, 768, cc.ResolutionPolicy.FIXED_HEIGHT);
    // cc.view.setDesignResolutionSize(cc.view.getFrameSize().width, cc.view.getFrameSize().height, cc.ResolutionPolicy.FIXED_HEIGHT);

    cc.view.enableAutoFullScreen(true);

    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);
    cc.view.setResizeCallback(() => {
        const frameSize = cc.view.getFrameSize();
        if(frameSize.width < frameSize.height)
        {
            // cc.view.setDesignResolutionSize(width,height, cc.ResolutionPolicy.FIXED_HEIGHT);
        }
        else
        {
            // cc.view.setDesignResolutionSize(height,width, cc.ResolutionPolicy.FIXED_HEIGHT);
        }
    });

    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MainMenuScene());
    }, this);
};
