/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/helper/audioEngine.js":
/*!**************************************!*\
  !*** ./source/helper/audioEngine.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet AudioEngine = {\n\n    audioEngine: cc.audioEngine,\n    soundEnabled: true,\n\n    playEffect: function(url, loop) {\n        if (this.soundEnabled) {\n            this.audioEngine.playEffect(url, loop);\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AudioEngine);\n\n\n//# sourceURL=webpack:///./source/helper/audioEngine.js?");

/***/ }),

/***/ "./source/helper/constants.js":
/*!************************************!*\
  !*** ./source/helper/constants.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Constants = {\n    SERVER_NAME: \"ws://192.168.42.243:2346\",\n    SUBMARINE_TYPE: \"s\",\n    BATTLESHIP_TYPE: \"b\",\n    DESTROYER_TYPE: \"d\",\n    CRUISER_TYPE: \"c\",\n\n    GID_FIRE: 1,\n    GID_WATER: 2,\n    GID_SHIP: 3,\n    GID_FALL: 4,\n    GID_INJURED: 5\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Constants);\n\n\n\n\n\n//# sourceURL=webpack:///./source/helper/constants.js?");

/***/ }),

/***/ "./source/helper/gameBoard.js":
/*!************************************!*\
  !*** ./source/helper/gameBoard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameBoard; });\nclass GameBoard extends cc.TMXTiledMap {\n\n    /**\n     *\n     * @param tmxFile\n     */\n    constructor(tmxFile) {\n        super();\n        this.initWithTMXFile(tmxFile);\n        this.mainLayer = this.getLayer(\"Tile Layer 1\");\n        // this.width     = this.mainLayer.getContentSize().width;\n        // this.height    = this.mainLayer.getContentSize().height;\n    }\n\n    getRect() {\n        return new cc.Rect(this.getPositionX() - Math.floor(this.mainLayer.getContentSize().width / 2),\n                           this.getPositionY() - Math.floor(this.mainLayer.getContentSize().height / 2),\n                           Math.floor(this.mainLayer.getContentSize().width), Math.floor(this.mainLayer.getContentSize().height));\n    }\n}\n\n\n//# sourceURL=webpack:///./source/helper/gameBoard.js?");

/***/ }),

/***/ "./source/helper/player.js":
/*!*********************************!*\
  !*** ./source/helper/player.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nclass Player {\n\n    constructor(id = null) {\n        this.id         = id;\n        this.ownBoard   = null;\n        this.enemyBoard = null;\n        this.enemyId    = null;\n    }\n\n}\n\n//# sourceURL=webpack:///./source/helper/player.js?");

/***/ }),

/***/ "./source/helper/score.js":
/*!********************************!*\
  !*** ./source/helper/score.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Score = {\n    _instance: null,\n\n    get instance() {\n        if (!this._instance) {\n            this._instance = {\n                hits:  0,\n                misses:  0,\n                result: \"\",\n            };\n        }\n\n        return this._instance;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Score);\n\n//# sourceURL=webpack:///./source/helper/score.js?");

/***/ }),

/***/ "./source/helper/server.js":
/*!*********************************!*\
  !*** ./source/helper/server.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Server; });\nclass Server  {\n\n    constructor(serverName) {\n        this.serverName = serverName;\n        this.webSocket = new WebSocket(serverName);\n    }\n\n    findRoom() {\n        const request = JSON.stringify({\n            msg: \"findRoom\"\n        });\n\n        this.webSocket.send(request);\n    }\n\n    hit(row, column, userId) {\n        const request = JSON.stringify({\n            msg: \"hit\",\n            row: row,\n            column: column,\n            userId: userId\n        });\n\n        this.webSocket.send(request);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./source/helper/server.js?");

/***/ }),

/***/ "./source/init.js":
/*!************************!*\
  !*** ./source/init.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ \"./source/resource.js\");\n/* harmony import */ var _scene_mainMenuScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene/mainMenuScene */ \"./source/scene/mainMenuScene.js\");\n\n\n\nconst g_resources = [];\nfor (let i in _resource__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    g_resources.push(_resource__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i]);\n}\n\nwindow.app = {};\n\nwindow.app.start = function() {\n    let sys = cc.sys;\n    if(!sys.isNative && document.getElementById(\"cocosLoading\")) //If referenced loading.js, please remove it\n        document.body.removeChild(document.getElementById(\"cocosLoading\"));\n\n    // Pass true to enable retina display, on Android disabled by default to improve performance\n    cc.view.enableRetina(sys.os === sys.OS_IOS);\n\n    // Disable auto full screen on baidu and wechat, you might also want to eliminate sys.BROWSER_TYPE_MOBILE_QQ\n    if (sys.isMobile &&\n        sys.browserType !== sys.BROWSER_TYPE_BAIDU &&\n        sys.browserType !== sys.BROWSER_TYPE_WECHAT) {\n        cc.view.enableAutoFullScreen(true);\n    }\n\n    document.getElementById(\"Cocos2dGameContainer\").style.backgroundColor = \"#000000\";\n\n    // Adjust viewport meta\n    cc.view.adjustViewPort(true);\n\n    // Uncomment the following line to set a fixed orientation for your game\n    cc.view.setOrientation(cc.ORIENTATION_LANDSCAPE);\n\n    const designSize = cc.size(1280, 720);\n\n    // Setup the resolution policy and design resolution size\n    cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.FIXED_HEIGHT);\n\n    cc.view.enableAutoFullScreen(true);\n\n    window.scaleFactor = cc.director.getVisibleSize().height / designSize.height;\n\n    cc.director.setContentScaleFactor(scaleFactor);\n\n    // The game will be resized when browser size change\n    cc.view.resizeWithBrowserSize(true);\n\n    // window.size = cc.director.getVisibleSize();\n    window.size = cc.winSize;\n\n    //load resources\n    cc.LoaderScene.preload(g_resources, function () {\n        cc.director.runScene(new _scene_mainMenuScene__WEBPACK_IMPORTED_MODULE_1__[\"default\"]());\n    }, this);\n};\n\n\n//# sourceURL=webpack:///./source/init.js?");

/***/ }),

/***/ "./source/resource.js":
/*!****************************!*\
  !*** ./source/resource.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst res = {\n    battleShipField: { type: \"tmx\", src: \"res/battleship.tmx\"},\n    backgroundSprite: { type: \"jpg\", src: \"res/backgrounds/mainBackground.jpg\"},\n    backgroundOnWin: { type: \"jpg\", src: \"res/backgrounds/on_win.jpg\"},\n    backgroundOnLost: { type: \"jpg\", src: \"res/backgrounds/on_lost.jpg\"},\n    GameFont: {\n        type:\"font\",\n        name:\"GameFont\",\n        srcs:[\"res/fonts/8-BIT_WONDER.ttf\", \"res/fonts/8-BIT_WONDER.ttf\"]\n    },\n    battleship_4: { type: \"png\", src: \"res/battleship_4.png\"},\n    fallSound: { type: \"wav\", src: \"res/sounds/watersplash2.wav\"},\n    hitSound: { type: \"wav\", src: \"res/sounds/DeathFlash.wav\"},\n    clickSound: { type: \"wav\", src: \"res/sounds/click.wav\"},\n    audioIcon: { type: \"png\", src: \"res/sound_icon.png\"},\n    audioDisableIcon: { type: \"png\", src: \"res/sound_disable_icon.png\"}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (res);\n\n\n//# sourceURL=webpack:///./source/resource.js?");

/***/ }),

/***/ "./source/scene/gameScene.js":
/*!***********************************!*\
  !*** ./source/scene/gameScene.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scoreScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scoreScene */ \"./source/scene/scoreScene.js\");\n/* harmony import */ var _helper_audioEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/audioEngine */ \"./source/helper/audioEngine.js\");\n/* harmony import */ var _helper_score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/score */ \"./source/helper/score.js\");\n/* harmony import */ var _helper_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/constants */ \"./source/helper/constants.js\");\n/* harmony import */ var _helper_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/server */ \"./source/helper/server.js\");\n/* harmony import */ var _helper_gameBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/gameBoard */ \"./source/helper/gameBoard.js\");\n/* harmony import */ var _helper_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/player */ \"./source/helper/player.js\");\n/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resource */ \"./source/resource.js\");\n\n\n\n\n\n\n\n\n\nlet GameLayer = cc.Layer.extend({\n\n    backgroundSprite: null,\n    ownBoardLayer: null,\n    enemyBoardLayer: null,\n    player: null,\n    walkingUserId: null,\n    topBoardLabel: null,\n    score: null,\n    labelOnError: null,\n    exitOneEnemyDisconnect: false,\n    waitEnemyLabel: null,\n\n    ctor: function () {\n        this._super();\n        this.player            = new _helper_player__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n        this.player.enemyBoard = new _helper_gameBoard__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_resource__WEBPACK_IMPORTED_MODULE_7__[\"default\"].battleShipField.src);\n        this.player.ownBoard   = new _helper_gameBoard__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_resource__WEBPACK_IMPORTED_MODULE_7__[\"default\"].battleShipField.src);\n        this.ownBoardLayer     = this.player.ownBoard.getLayer(\"Tile Layer 1\");\n        this.enemyBoardLayer   = this.player.enemyBoard.getLayer(\"Tile Layer 1\");\n        this.topBoardLabel     = new cc.LabelTTF(\"\", \"GameFont\", 21);\n        this.audioIcon         = new ccui.Button();\n        this.waitEnemyLabel    = new cc.LabelTTF(\"Searching game...\", \"GameFont\", 20);\n        this.score             = _helper_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"].instance;\n        this.labelOnError      = new cc.LabelTTF(\"The enemy disconnected\", \"GameFont\", 16);\n        this.audioIcon.loadTextures(_resource__WEBPACK_IMPORTED_MODULE_7__[\"default\"].audioIcon.src, _resource__WEBPACK_IMPORTED_MODULE_7__[\"default\"].audioDisableIcon.src, _resource__WEBPACK_IMPORTED_MODULE_7__[\"default\"].audioDisableIcon.src);\n\n        this.initSprites();\n\n        this.addChildrenToLayer();\n\n        this.server = new _helper_server__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_helper_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SERVER_NAME);\n        this.server.webSocket.onmessage = (data) => {\n            const msg = JSON.parse(data.data);\n            switch (msg.msg) {\n                case \"onConnection\":\n                    this.onConnection(msg);\n                    break;\n                case \"enemyFound\":\n                    this.onEnemyFound(msg);\n                    break;\n                case \"win\":\n                    this.onWin(msg);\n                    break;\n                case \"lost\":\n                    this.onLost(msg);\n                    break;\n                case \"enemyInjured\":\n                    this.enemyInjured(msg);\n                    break;\n                case \"youInjured\":\n                    this.youInjured(msg);\n                    break;\n                case \"youFall\":\n                    this.youFall(msg);\n                    break;\n                case \"enemyFall\":\n                    this.enemyFall(msg);\n                    break;\n                case \"enemyDisconnect\":\n                    this.enemyDisconnect(msg);\n                    break;\n                default:\n                    this.onUnknown(msg);\n                    break;\n            }\n        };\n\n        let that = this;\n        cc.eventManager.addListener({\n            event: cc.EventListener.TOUCH_ONE_BY_ONE,\n\n            onTouchBegan: function (event) {\n                let t0 = performance.now();\n                const x = event.getLocationX();\n                const y = event.getLocationY();\n\n                cc.log(that.player.enemyBoard.getRect());\n                cc.log(cc.p(x, y));\n\n                if (that.walkingUserId === that.player.id\n                    && cc.rectContainsPoint(that.player.enemyBoard.getRect(), cc.p(Math.floor(x), Math.floor(y)))) {\n                    let enemyWasHit = false;\n                    for (let i = 0; i < 10 && !enemyWasHit; i++) {\n                        for (let j = 0; j < 10 && !enemyWasHit; j++) {\n                            let currentTile = that.enemyBoardLayer.getTileAt(cc.p(i, j));\n                            currentTile.setAnchorPoint(cc.p(0, 0));\n                            const tileX = currentTile.getPositionX()\n                                + that.player.enemyBoard.getPositionX()\n                                - that.player.enemyBoard.getContentSize().width / 2;\n                            const tileY = currentTile.getPositionY()\n                                + that.player.enemyBoard.getPositionY()\n                                - that.player.enemyBoard.getContentSize().height / 2;\n                            let tileRect = cc.rect(tileX, tileY, currentTile.getContentSize().width, currentTile.getContentSize().height);\n\n                            if (cc.rectContainsPoint(tileRect, cc.p(x, y))) {\n                                cc.log(\"tileX = %d, tileY = %d\", tileX, tileY);\n                                that.server.hit(i, j, that.player.enemyId);\n                                enemyWasHit = true;\n                            }\n                        }\n                    }\n                    cc.log(\"Clicked on enemyBoardField\");\n                } else {\n                    let soundButtonRect = new cc.rect(Math.floor(that.audioIconPos.x - that.audioIcon._buttonNormalSpriteFrame.getRect().width / 2),\n                        Math.floor(that.audioIconPos.y - that.audioIcon._buttonNormalSpriteFrame.getRect().height / 2),\n                        that.audioIcon._buttonNormalSpriteFrame.getRect().width,\n                        that.audioIcon._buttonNormalSpriteFrame.getRect().height);\n                    if (cc.rectContainsPoint(soundButtonRect, cc.p(Math.floor(x), Math.floor(y)))) {\n                        that.toggleSound();\n                    }\n                }\n\n                let t1 = performance.now();\n\n                cc.log(\"Performance: \" + (t1 - t0) + \" milliseconds\");\n            }\n        }, this);\n\n        return true;\n    },\n\n    addChildrenToLayer: function() {\n        this.addChild(this.backgroundSprite);\n        this.addChild(this.waitEnemyLabel);\n        this.addChild(this.ownBoardLabel);\n        this.addChild(this.enemyBoardLabel);\n        this.addChild(this.topBoardLabel);\n        this.addChild(this.exitButtonLabel);\n        this.addChild(this.player.enemyBoard);\n        this.addChild(this.player.ownBoard);\n        this.addChild(this.audioIcon);\n    },\n\n    initSprites: function() {\n        this.backgroundSprite  = new cc.Sprite(_resource__WEBPACK_IMPORTED_MODULE_7__[\"default\"].backgroundSprite.src);\n        this.backgroundSprite.setAnchorPoint(0, 0);\n        const scale = Math.max(size.width / this.backgroundSprite.getContentSize().width,\n            size.height / this.backgroundSprite.getContentSize().height);\n        this.backgroundSprite.setScale(scale);\n\n        this.waitEnemyLabel.setFontFillColor(cc.color(0, 50, 255, 200));\n        this.waitEnemyLabel.setAnchorPoint(cc.p(0.5, 0.5));\n        this.waitEnemyLabel.setPosition(cc.p(size.width / 2, size.height - size.height / 8));\n\n        const margin = 70;\n\n        this.player.enemyBoard.setAnchorPoint(cc.p(0.5, 0.5));\n        this.player.enemyBoard.setPosition(cc.p(size.width / 3 + 2 * size.width / 3 - size.width / 6 - margin, this.player.enemyBoard.getContentSize().height / 2 + 30));\n\n        this.player.ownBoard.setAnchorPoint(cc.p(0.5, 0.5));\n        this.player.ownBoard.setPosition(cc.p(size.width / 3 - size.width / 6 + margin, this.player.ownBoard.getContentSize().height / 2 + 30));\n\n        this.ownBoardLabel     = new cc.LabelTTF(\"Your board\", \"GameFont\", 20);\n        this.enemyBoardLabel   = new cc.LabelTTF(\"Enemy board\", \"GameFont\", 20);\n\n        this.ownBoardLabel.enableShadow(cc.color(100, 50, 50, 255), cc.size(4, 4), 0);\n        this.enemyBoardLabel.enableShadow(cc.color(100, 50, 50, 255), cc.size(4, 4), 0);\n\n        this.ownBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));\n        this.ownBoardLabel.setPosition(cc.p(size.width / 3 - size.width / 6 + margin,\n            this.player.ownBoard.getPositionY() + this.player.enemyBoard.getContentSize().height / 2 + 20));\n\n        this.enemyBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));\n        this.enemyBoardLabel.setPosition(cc.p(size.width / 3 + 2 * size.width / 3 - size.width / 6 - margin,\n            this.player.enemyBoard.getPositionY() + this.player.enemyBoard.getContentSize().height / 2 + 20));\n\n        this.topBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));\n        this.topBoardLabel.setPosition(cc.p(size.width / 2, size.height - size.height / 8));\n\n        this.exitButtonLabel = new ccui.Button();\n        this.exitButtonLabel.setTitleText(\"Exit\");\n        this.exitButtonLabel.setTitleFontSize(30);\n        this.exitButtonLabel.setTitleFontName(\"GameFont\");\n        this.exitButtonLabel.addTouchEventListener((sender, event) => {\n        this.server.webSocket.close();\n            _helper_audioEngine__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playEffect(_resource__WEBPACK_IMPORTED_MODULE_7__[\"default\"].clickSound.src, false);\n            this.score.result = this.exitOneEnemyDisconnect ? \"win\" : \"lost\";\n            cc.director.runScene(new cc.TransitionFade(0.5, new _scoreScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), cc.color(1, 1, 1, 1)));\n        }, this);\n\n        this.exitButtonLabel.setAnchorPoint(cc.p(0, 0));\n        this.exitButtonLabel.setPosition(size.width / 16, size.height - size.height / 12);\n\n        // this.audioIcon.setScale(3);\n        this.audioIcon.touchEnabled = true;\n        this.audioIcon._scale9Enabled = true;\n\n        this.audioIconPos = new cc.Point(size.width - size.width / 12, size.height - size.height / 12);\n        this.audioIcon.setPosition(this.audioIconPos);\n    },\n\n    enemyDisconnect: function (msg) {\n        this.labelOnError.setAnchorPoint(cc.p(0.5, 0.5));\n        this.exitOneEnemyDisconnect = true;\n        this.labelOnError.setFontFillColor(cc.color(200, 0, 0));\n        this.labelOnError.setPosition(cc.p(size.width / 2, size.height - size.height / 14));\n        this.addChild(this.labelOnError);\n    },\n\n    onConnection: function(msg) {\n        cc.log(\"Connection has been established\");\n\n        this.board = msg.board;\n\n        cc.log(this.board);\n\n        for (let i = 0; i < 10; i++) {\n            for (let j = 0; j < 10; j++) {\n                let cell = this.board[j + i * 10];\n                if (   cell === _helper_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SUBMARINE_TYPE || cell === _helper_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].BATTLESHIP_TYPE\n                    || cell === _helper_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DESTROYER_TYPE || cell === _helper_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].CRUISER_TYPE) {\n                    this.ownBoardLayer.setTileGID(_helper_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].GID_SHIP, cc.p(i, j));\n                    cc.log(this.ownBoardLayer.getTileGIDAt(cc.p(i, j)));\n                }\n            }\n        }\n\n        this.player.id = msg.id;\n        this.server.findRoom();\n    },\n\n    toggleSound: function() {\n        _helper_audioEngine__WEBPACK_IMPORTED_MODULE_1__[\"default\"].soundEnabled = !_helper_audioEngine__WEBPACK_IMPORTED_MODULE_1__[\"default\"].soundEnabled;\n        if (this.audioIcon.isEnabled()) {\n            this.audioIcon.setEnabled(false);\n        } else {\n            this.audioIcon.setEnabled(true);\n            this.audioIcon._onPressStateChangedToNormal();\n        }\n    },\n\n    onEnemyFound: function (msg) {\n        this.removeChild(this.waitEnemyLabel);\n        this.player.enemyId = msg.enemyId;\n        this.walkingUserId = msg.walkingUserId;\n        if (this.walkingUserId === this.player.id) {\n            this.topBoardLabel.string = \"Your action\";\n        } else {\n            this.topBoardLabel.string = \"Enemy action\";\n        }\n        cc.log(\"Enemy found. EnemyId = \" + this.player.enemyId);\n        cc.log(\"Walking user id = \" + this.walkingUserId);\n    },\n\n    onWin: function (msg) {\n        cc.log(\"You win!\");\n        this.topBoardLabel.string = \"You win\";\n        this.score.result = \"win\";\n        this.server.webSocket.close();\n        cc.director.runScene(new cc.TransitionFade(0.5, new _scoreScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), cc.color(1, 1, 1, 1)));\n    },\n\n    onLost: function (msg) {\n        cc.log(\"You lost\");\n        this.topBoardLabel.string = \"You lost\";\n        this.score.result = \"lost\";\n        this.server.webSocket.close();\n        cc.director.runScene(new cc.TransitionFade(0.5, new _scoreScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), cc.color(1, 1, 1, 1)));\n    },\n\n    onUnknown: function (msg) {\n        cc.log(msg.msg);\n    },\n\n    enemyInjured: function (msg) {\n        this.enemyBoardLayer.setTileGID(_helper_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].GID_INJURED, cc.p(msg.row, msg.column));\n        _helper_audioEngine__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playEffect(_resource__WEBPACK_IMPORTED_MODULE_7__[\"default\"].hitSound.src, false);\n        this.score.hits++;\n    },\n\n    youInjured: function (msg) {\n        cc.log(\"You injured at \" + msg.row + \" \" + msg.column);\n        this.ownBoardLayer.setTileGID(_helper_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].GID_INJURED, cc.p(msg.row, msg.column));\n        _helper_audioEngine__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playEffect(_resource__WEBPACK_IMPORTED_MODULE_7__[\"default\"].hitSound.src, false);\n    },\n\n    youFall: function (msg) {\n        this.enemyBoardLayer.setTileGID(_helper_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].GID_FALL, cc.p(msg.row, msg.column));\n        this.walkingUserId = this.player.enemyId;\n        this.topBoardLabel.string = \"Enemy action\";\n        _helper_audioEngine__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playEffect(_resource__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fallSound.src, false);\n        this.score.misses++;\n    },\n\n    enemyFall: function (msg) {\n        cc.log(\"Enemy fall at \" + msg.row + \" \" + msg.column);\n        this.ownBoardLayer.setTileGID(_helper_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].GID_FALL, cc.p(msg.row, msg.column));\n        this.walkingUserId = this.player.id;\n        this.topBoardLabel.string = \"Your action\";\n        _helper_audioEngine__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playEffect(_resource__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fallSound.src, false);\n    },\n});\n\nlet GameScene = cc.Scene.extend({\n    onEnter: function () {\n        this._super();\n        let layer = new GameLayer();\n        this.addChild(layer);\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameScene);\n\n\n//# sourceURL=webpack:///./source/scene/gameScene.js?");

/***/ }),

/***/ "./source/scene/mainMenuScene.js":
/*!***************************************!*\
  !*** ./source/scene/mainMenuScene.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resource */ \"./source/resource.js\");\n/* harmony import */ var _gameScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameScene */ \"./source/scene/gameScene.js\");\n/* harmony import */ var _helper_audioEngine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/audioEngine */ \"./source/helper/audioEngine.js\");\n\n\n\n\nlet MainMenuLayer = cc.Layer.extend({\n\n    backgroundSprite: null,\n\n    ctor: function () {\n        this._super();\n        this.backgroundSprite  = new cc.Sprite(_resource__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backgroundSprite.src);\n\n        let backgroundSprite  = new cc.Sprite(_resource__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backgroundSprite.src);\n        backgroundSprite.setAnchorPoint(0, 0);\n        backgroundSprite.getTexture().setAntiAliasTexParameters();\n        const scale = Math.max(size.width / backgroundSprite.getContentSize().width,\n            size.height / backgroundSprite.getContentSize().height);\n        backgroundSprite.setScale(scale);\n\n        this.addChild(backgroundSprite, -1);\n\n        // Create the main menu\n\n        let itemNewGameLabel = new cc.LabelTTF(\"Start Game\", \"GameFont\", 34);\n        itemNewGameLabel.enableShadow(cc.color(50, 100, 100, 255), cc.size(4, 4), 0);\n\n        let itemNewGame = new cc.MenuItemLabel(itemNewGameLabel, () => {\n            cc.log(\"Play button\");\n            _helper_audioEngine__WEBPACK_IMPORTED_MODULE_2__[\"default\"].playEffect(_resource__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clickSound.src, false);\n            cc.director.runScene(new cc.TransitionFade(0.5, new _gameScene__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), cc.color(1, 1, 1, 1)));\n        });\n\n        itemNewGame.setPosition(cc.p(size.width / 2, (size.height / 6) * 4));\n\n        let mainMenu = new cc.Menu(itemNewGame);\n        mainMenu.setPosition(cc.p(0, 0));\n        this.addChild(mainMenu);\n\n        let descLabel = new cc.LabelTTF(\"Welcome to the battleship game.\" +\n            \" Click on start game to begin and you'll find own enemy.\\n\" +\n            \"You may discover the battleship rules there: \", \"Dejavu Serif\", 28 * scaleFactor);\n        descLabel.setScale(1 / scaleFactor);\n        descLabel.getTexture().setAntiAliasTexParameters();\n\n        descLabel.setPosition(cc.p(size.width / 2, size.height / 2.2));\n        this.addChild(descLabel);\n\n        let rulesButtonLabel = new cc.LabelTTF(\"rules\", \"Arial\", 29);\n        let rulesButtonItem = new cc.MenuItemLabel(rulesButtonLabel, () => {\n            openInNewTab(\"https://en.wikipedia.org/wiki/Battleship_(game)\");\n        });\n        let rulesMenu = new cc.Menu(rulesButtonItem);\n        rulesMenu.setPosition(cc.p(size.width / 2, size.height / 2.6));\n        this.addChild(rulesMenu);\n\n        let underline = new cc.LabelTTF(\"_____\", \"Arial\", 29);\n        underline.setPosition(rulesMenu.getPosition());\n        this.addChild(underline);\n\n        return true;\n    }\n});\n\nfunction openInNewTab(url) {\n    let win = window.open(url, '_blank');\n    win.focus();\n}\n\nlet MainMenuScene = cc.Scene.extend({\n    onEnter: function () {\n        this._super();\n        let layer = new MainMenuLayer();\n        this.addChild(layer);\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainMenuScene);\n\n\n//# sourceURL=webpack:///./source/scene/mainMenuScene.js?");

/***/ }),

/***/ "./source/scene/scoreScene.js":
/*!************************************!*\
  !*** ./source/scene/scoreScene.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameScene */ \"./source/scene/gameScene.js\");\n/* harmony import */ var _helper_score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/score */ \"./source/helper/score.js\");\n/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource */ \"./source/resource.js\");\n/* harmony import */ var _helper_audioEngine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/audioEngine */ \"./source/helper/audioEngine.js\");\n\n\n\n\n\nlet ScoreLayer = cc.Layer.extend({\n\n    resultLabel: null,\n    hits: null,\n    misses: null,\n    score: null,\n    playAgain: null,\n    playAgainMenu: null,\n    backgroundSprite: null,\n\n    ctor: function() {\n        this._super();\n        this.score            = _helper_score__WEBPACK_IMPORTED_MODULE_1__[\"default\"].instance;\n        this.resultLabel      = new cc.LabelTTF(this.score.result === \"win\" ? \"You win\" : \"You lost\",\n            \"GameFont\", 28);\n        this.hits             = new cc.LabelTTF(\"Hits: \" + this.score.hits, \"GameFont\", 20);\n        this.misses           = new cc.LabelTTF(\"Misses: \" + this.score.misses, \"GameFont\", 20);\n        this.playAgain        = new cc.LabelTTF(\"Play again\", \"GameFont\", 26);\n        this.playAgainMenu    = new cc.MenuItemLabel(this.playAgain, this.restart);\n        this.backgroundSprite = new cc.Sprite(this.score.result === \"win\" ? _resource__WEBPACK_IMPORTED_MODULE_2__[\"default\"].backgroundOnWin.src : _resource__WEBPACK_IMPORTED_MODULE_2__[\"default\"].backgroundOnLost.src);\n\n        this.backgroundSprite.setAnchorPoint(0, 0);\n        const scale = Math.max(size.width / this.backgroundSprite.getContentSize().width,\n            size.height / this.backgroundSprite.getContentSize().height);\n        this.backgroundSprite.setScale(scale);\n\n        this.resultLabel.setAnchorPoint(cc.p(0.5, 0.5));\n        this.hits.setAnchorPoint(cc.p(0.5, 0.5));\n        this.misses.setAnchorPoint(cc.p(0.5, 0.5));\n        this.playAgainMenu.setAnchorPoint(cc.p(0.5, 0.5));\n\n        this.resultLabel.setPosition(cc.p(size.width / 2, size.height - size.height / 12));\n        this.hits.setPosition(cc.p(size.width / 2, size.height / 1.8));\n        this.misses.setPosition(cc.p(size.width / 2, size.height / 2.8));\n        this.playAgainMenu.setPosition(cc.p(size.width / 2, size.height / 10));\n\n        this.menu = new cc.Menu(this.playAgainMenu);\n        this.menu.setPosition(cc.p(0, 0));\n\n        this.addChild(this.backgroundSprite);\n        this.addChild(this.resultLabel);\n        this.addChild(this.hits);\n        this.addChild(this.misses);\n        this.addChild(this.menu);\n    },\n\n    restart: function() {\n        _helper_audioEngine__WEBPACK_IMPORTED_MODULE_3__[\"default\"].playEffect(_resource__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clickSound.src, false);\n        cc.director.runScene(new cc.TransitionFade(0.5, new _gameScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), cc.Color(1, 1, 1, 1)));\n    }\n});\n\nlet ScoreScene = cc.Scene.extend({\n    onEnter: function() {\n        this._super();\n        let layer = new ScoreLayer();\n        this.addChild(layer);\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoreScene);\n\n//# sourceURL=webpack:///./source/scene/scoreScene.js?");

/***/ })

/******/ });