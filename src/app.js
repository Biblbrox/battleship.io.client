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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar AudioEngine = {\n\n    audioEngine: cc.audioEngine,\n    soundEnabled: true,\n\n    playEffect: function playEffect(url, loop) {\n        if (this.soundEnabled) {\n            this.audioEngine.playEffect(url, loop);\n        }\n    }\n};\n\nexports.default = AudioEngine;\n\n//# sourceURL=webpack:///./source/helper/audioEngine.js?");

/***/ }),

/***/ "./source/helper/constants.js":
/*!************************************!*\
  !*** ./source/helper/constants.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar Constants = {\n    SERVER_NAME: \"ws://0.0.0.0:2346\",\n    SUBMARINE_TYPE: \"s\",\n    BATTLESHIP_TYPE: \"b\",\n    DESTROYER_TYPE: \"d\",\n    CRUISER_TYPE: \"c\",\n\n    GID_FIRE: 1,\n    GID_WATER: 2,\n    GID_SHIP: 3,\n    GID_FALL: 4,\n    GID_INJURED: 5\n};\n\nexports.default = Constants;\n\n//# sourceURL=webpack:///./source/helper/constants.js?");

/***/ }),

/***/ "./source/helper/gameBoard.js":
/*!************************************!*\
  !*** ./source/helper/gameBoard.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar GameBoard = function (_cc$TMXTiledMap) {\n    _inherits(GameBoard, _cc$TMXTiledMap);\n\n    /**\n     *\n     * @param tmxFile\n     */\n    function GameBoard(tmxFile) {\n        _classCallCheck(this, GameBoard);\n\n        var _this = _possibleConstructorReturn(this, (GameBoard.__proto__ || Object.getPrototypeOf(GameBoard)).call(this));\n\n        _this.initWithTMXFile(tmxFile);\n        _this.mainLayer = _this.getLayer(\"Tile Layer 1\");\n        _this.width = _this.mainLayer.getContentSize().width;\n        _this.height = _this.mainLayer.getContentSize().height;\n        return _this;\n    }\n\n    _createClass(GameBoard, [{\n        key: \"getRect\",\n        value: function getRect() {\n            return new cc.Rect(this.getPositionX() - Math.floor(this.width / 2), this.getPositionY() - Math.floor(this.height / 2), Math.floor(this.width), Math.floor(this.height));\n        }\n    }]);\n\n    return GameBoard;\n}(cc.TMXTiledMap);\n\nexports.default = GameBoard;\n\n//# sourceURL=webpack:///./source/helper/gameBoard.js?");

/***/ }),

/***/ "./source/helper/player.js":
/*!*********************************!*\
  !*** ./source/helper/player.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Player = function Player() {\n    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n    _classCallCheck(this, Player);\n\n    this.id = id;\n    this.ownBoard = null;\n    this.enemyBoard = null;\n    this.enemyId = null;\n};\n\nexports.default = Player;\n\n//# sourceURL=webpack:///./source/helper/player.js?");

/***/ }),

/***/ "./source/helper/score.js":
/*!********************************!*\
  !*** ./source/helper/score.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar Score = {\n    _instance: null,\n\n    get instance() {\n        if (!this._instance) {\n            this._instance = {\n                hits: 0,\n                misses: 0,\n                result: \"\"\n            };\n        }\n\n        return this._instance;\n    }\n};\n\nexports.default = Score;\n\n//# sourceURL=webpack:///./source/helper/score.js?");

/***/ }),

/***/ "./source/helper/server.js":
/*!*********************************!*\
  !*** ./source/helper/server.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Server = function () {\n    function Server(serverName) {\n        _classCallCheck(this, Server);\n\n        this.serverName = serverName;\n        this.webSocket = new WebSocket(serverName);\n    }\n\n    _createClass(Server, [{\n        key: \"findRoom\",\n        value: function findRoom() {\n            var request = JSON.stringify({\n                msg: \"findRoom\"\n            });\n\n            this.webSocket.send(request);\n        }\n    }, {\n        key: \"hit\",\n        value: function hit(row, column, userId) {\n            var request = JSON.stringify({\n                msg: \"hit\",\n                row: row,\n                column: column,\n                userId: userId\n            });\n\n            this.webSocket.send(request);\n        }\n    }]);\n\n    return Server;\n}();\n\nexports.default = Server;\n\n//# sourceURL=webpack:///./source/helper/server.js?");

/***/ }),

/***/ "./source/init.js":
/*!************************!*\
  !*** ./source/init.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _resource = __webpack_require__(/*! ./resource */ \"./source/resource.js\");\n\nvar _resource2 = _interopRequireDefault(_resource);\n\nvar _mainMenuScene = __webpack_require__(/*! ./scene/mainMenuScene */ \"./source/scene/mainMenuScene.js\");\n\nvar _mainMenuScene2 = _interopRequireDefault(_mainMenuScene);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar g_resources = [];\nfor (var i in _resource2.default) {\n    g_resources.push(_resource2.default[i]);\n}\n\nwindow.app = {};\n\nwindow.app.start = function () {\n    var sys = cc.sys;\n    if (!sys.isNative && document.getElementById(\"cocosLoading\")) //If referenced loading.js, please remove it\n        document.body.removeChild(document.getElementById(\"cocosLoading\"));\n\n    // Pass true to enable retina display, on Android disabled by default to improve performance\n    cc.view.enableRetina(sys.os === sys.OS_IOS);\n\n    // Disable auto full screen on baidu and wechat, you might also want to eliminate sys.BROWSER_TYPE_MOBILE_QQ\n    if (sys.isMobile && sys.browserType !== sys.BROWSER_TYPE_BAIDU && sys.browserType !== sys.BROWSER_TYPE_WECHAT) {\n        cc.view.enableAutoFullScreen(true);\n    }\n\n    document.getElementById(\"Cocos2dGameContainer\").style.backgroundColor = \"#000000\";\n\n    // Adjust viewport meta\n    cc.view.adjustViewPort(true);\n\n    // Uncomment the following line to set a fixed orientation for your game\n    // cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);\n\n    // Setup the resolution policy and design resolution size\n    cc.view.setDesignResolutionSize(960, 640, cc.ResolutionPolicy.FIXED_HEIGHT);\n\n    cc.view.enableAutoFullScreen(true);\n\n    // The game will be resized when browser size change\n    cc.view.resizeWithBrowserSize(true);\n\n    //load resources\n    cc.LoaderScene.preload(g_resources, function () {\n        cc.director.runScene(new _mainMenuScene2.default());\n    }, this);\n};\n\n//# sourceURL=webpack:///./source/init.js?");

/***/ }),

/***/ "./source/resource.js":
/*!****************************!*\
  !*** ./source/resource.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar res = {\n    battleShipField: { type: \"tmx\", src: \"res/battleship.tmx\" },\n    backgroundSprite: { type: \"jpg\", src: \"res/backgrounds/mainBackground.jpg\" },\n    backgroundOnWin: { type: \"jpg\", src: \"res/backgrounds/on_win.jpg\" },\n    backgroundOnLost: { type: \"jpg\", src: \"res/backgrounds/on_lost.jpg\" },\n    GameFont: {\n        type: \"font\",\n        name: \"GameFont\",\n        srcs: [\"res/fonts/8-BIT_WONDER.ttf\", \"res/fonts/8-BIT_WONDER.ttf\"]\n    },\n    battleship_4: { type: \"png\", src: \"res/battleship_4.png\" },\n    fallSound: { type: \"wav\", src: \"res/sounds/watersplash2.wav\" },\n    hitSound: { type: \"wav\", src: \"res/sounds/DeathFlash.wav\" },\n    audioIcon: { type: \"png\", src: \"res/sound_icon.png\" },\n    audioDisableIcon: { type: \"png\", src: \"res/sound_disable_icon.png\" }\n};\n\nexports.default = res;\n\n//# sourceURL=webpack:///./source/resource.js?");

/***/ }),

/***/ "./source/scene/gameScene.js":
/*!***********************************!*\
  !*** ./source/scene/gameScene.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _scoreScene = __webpack_require__(/*! ./scoreScene */ \"./source/scene/scoreScene.js\");\n\nvar _scoreScene2 = _interopRequireDefault(_scoreScene);\n\nvar _audioEngine = __webpack_require__(/*! ../helper/audioEngine */ \"./source/helper/audioEngine.js\");\n\nvar _audioEngine2 = _interopRequireDefault(_audioEngine);\n\nvar _score = __webpack_require__(/*! ../helper/score */ \"./source/helper/score.js\");\n\nvar _score2 = _interopRequireDefault(_score);\n\nvar _constants = __webpack_require__(/*! ../helper/constants */ \"./source/helper/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _server = __webpack_require__(/*! ../helper/server */ \"./source/helper/server.js\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _gameBoard = __webpack_require__(/*! ../helper/gameBoard */ \"./source/helper/gameBoard.js\");\n\nvar _gameBoard2 = _interopRequireDefault(_gameBoard);\n\nvar _player = __webpack_require__(/*! ../helper/player */ \"./source/helper/player.js\");\n\nvar _player2 = _interopRequireDefault(_player);\n\nvar _resource = __webpack_require__(/*! ../resource */ \"./source/resource.js\");\n\nvar _resource2 = _interopRequireDefault(_resource);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GameLayer = cc.Layer.extend({\n\n    backgroundSprite: null,\n    ownBoardLayer: null,\n    enemyBoardLayer: null,\n    player: null,\n    walkingUserId: null,\n    topBoardLabel: null,\n    score: null,\n    labelOnError: null,\n    exitOneEnemyDisconnect: false,\n    waitEnemyLabel: null,\n\n    ctor: function ctor() {\n        var _this = this;\n\n        this._super();\n        this.player = new _player2.default();\n        this.player.enemyBoard = new _gameBoard2.default(_resource2.default.battleShipField.src);\n        this.player.ownBoard = new _gameBoard2.default(_resource2.default.battleShipField.src);\n        this.ownBoardLayer = this.player.ownBoard.getLayer(\"Tile Layer 1\");\n        this.enemyBoardLayer = this.player.enemyBoard.getLayer(\"Tile Layer 1\");\n        this.topBoardLabel = new cc.LabelTTF(\"\", \"GameFont\", 21);\n        this.audioIcon = new ccui.Button();\n        this.waitEnemyLabel = new cc.LabelTTF(\"Searching game...\", \"GameFont\", 20);\n        this.score = _score2.default.instance;\n        this.labelOnError = new cc.LabelTTF(\"The enemy disconnected\", \"GameFont\", 16);\n        this.audioIcon.loadTextures(_resource2.default.audioIcon.src, _resource2.default.audioDisableIcon.src, _resource2.default.audioDisableIcon.src);\n\n        var size = cc.winSize;\n\n        this.size = size;\n\n        var backgroundSprite = new cc.Sprite(_resource2.default.backgroundSprite.src);\n        backgroundSprite.setAnchorPoint(0, 0);\n        var scale = Math.max(size.width / backgroundSprite.getContentSize().width, size.height / backgroundSprite.getContentSize().height);\n        backgroundSprite.setScale(scale);\n\n        this.addChild(backgroundSprite);\n\n        this.waitEnemyLabel.setFontFillColor(cc.color(0, 50, 255, 200));\n        this.waitEnemyLabel.setAnchorPoint(cc.p(0.5, 0.5));\n        this.waitEnemyLabel.setPosition(cc.p(size.width / 2, size.height - size.height / 8));\n        this.addChild(this.waitEnemyLabel);\n\n        var margin = size.width / 14;\n\n        var enemyBoardScale = size.height / 2 / this.player.enemyBoard.height;\n        this.player.enemyBoard.setAnchorPoint(cc.p(0.5, 0.5));\n        this.enemyBoardLayer.setScale(enemyBoardScale);\n        this.player.enemyBoard.setPosition(cc.p(size.width / 3 + 2 * size.width / 3 - size.width / 6 - margin, size.height / 2));\n        this.player.enemyBoard.width = this.player.enemyBoard.width * enemyBoardScale;\n        this.player.enemyBoard.height = this.player.enemyBoard.height * enemyBoardScale;\n\n        var ownBoardScale = size.height / 2 / this.player.ownBoard.height;\n        this.player.ownBoard.setAnchorPoint(cc.p(0.5, 0.5));\n        this.ownBoardLayer.setScale(ownBoardScale);\n        this.player.ownBoard.setPosition(cc.p(size.width / 3 - size.width / 6 + margin, size.height / 2));\n        this.player.ownBoard.width = this.player.ownBoard.width * ownBoardScale;\n        this.player.ownBoard.height = this.player.ownBoard.height * ownBoardScale;\n\n        var ownBoardLabel = new cc.LabelTTF(\"Your board\", \"GameFont\", 20);\n        var enemyBoardLabel = new cc.LabelTTF(\"Enemy board\", \"GameFont\", 20);\n\n        ownBoardLabel.enableShadow(cc.color(100, 50, 50, 255), cc.size(4, 4), 0);\n        enemyBoardLabel.enableShadow(cc.color(100, 50, 50, 255), cc.size(4, 4), 0);\n\n        ownBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));\n        ownBoardLabel.setPosition(cc.p(size.width / 3 - size.width / 6 + margin, size.height / 2 + this.player.ownBoard.height / 2 + margin));\n        this.addChild(ownBoardLabel);\n\n        enemyBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));\n        enemyBoardLabel.setPosition(cc.p(size.width / 3 + 2 * size.width / 3 - size.width / 6 - margin, size.height / 2 + this.player.enemyBoard.height / 2 + margin));\n        this.addChild(enemyBoardLabel);\n\n        this.topBoardLabel.setAnchorPoint(cc.p(0.5, 0.5));\n        this.topBoardLabel.setPosition(cc.p(size.width / 2, size.height - size.height / 8));\n        this.addChild(this.topBoardLabel);\n\n        var exitButtonLabel = new cc.LabelTTF(\"Exit\", \"GameFont\", 20);\n        var exitButtonMenuItem = new cc.MenuItemLabel(exitButtonLabel, function () {\n            _this.server.webSocket.close();\n            _this.score.result = _this.exitOneEnemyDisconnect ? \"win\" : \"lost\";\n            cc.director.runScene(new cc.TransitionFade(0.5, new _scoreScene2.default(), cc.color(1, 1, 1, 1)));\n        });\n        exitButtonMenuItem.setAnchorPoint(cc.p(0, 0));\n        exitButtonMenuItem.setPosition(size.width / 16, size.height - size.height / 12);\n\n        var menuExit = new cc.Menu(exitButtonMenuItem);\n        menuExit.setPosition(cc.p(0, 0));\n        this.addChild(menuExit);\n\n        this.addChild(this.player.enemyBoard);\n        this.addChild(this.player.ownBoard);\n\n        this.audioIcon.touchEnabled = true;\n        this.audioIcon._scale9Enabled = true;\n\n        var audioIconPos = new cc.Point(size.width - size.width / 12, size.height - size.height / 12);\n        this.audioIcon.setPosition(audioIconPos);\n\n        this.addChild(this.audioIcon);\n\n        this.server = new _server2.default(_constants2.default.SERVER_NAME);\n        this.server.webSocket.onmessage = function (data) {\n            var msg = JSON.parse(data.data);\n            switch (msg.msg) {\n                case \"onConnection\":\n                    _this.onConnection(msg);\n                    break;\n                case \"enemyFound\":\n                    _this.onEnemyFound(msg);\n                    break;\n                case \"win\":\n                    _this.onWin(msg);\n                    break;\n                case \"lost\":\n                    _this.onLost(msg);\n                    break;\n                case \"enemyInjured\":\n                    _this.enemyInjured(msg);\n                    break;\n                case \"youInjured\":\n                    _this.youInjured(msg);\n                    break;\n                case \"youFall\":\n                    _this.youFall(msg);\n                    break;\n                case \"enemyFall\":\n                    _this.enemyFall(msg);\n                    break;\n                case \"enemyDisconnect\":\n                    _this.enemyDisconnect(msg);\n                    break;\n                default:\n                    _this.onUnknown(msg);\n                    break;\n            }\n        };\n\n        var that = this;\n        cc.eventManager.addListener({\n            event: cc.EventListener.MOUSE,\n\n            onMouseDown: function onMouseDown(event) {\n                var t0 = performance.now();\n                var x = event.getLocationX();\n                var y = event.getLocationY();\n\n                if (that.walkingUserId === that.player.id && cc.rectContainsPoint(that.player.enemyBoard.getRect(), cc.p(Math.floor(x), Math.floor(y)))) {\n                    for (var i = 0; i < 10; i++) {\n                        for (var j = 0; j < 10; j++) {\n                            var currentTile = that.enemyBoardLayer.getTileAt(cc.p(i, j));\n                            var tileX = that.enemyBoardLayer.getPositionAt(cc.p(i, j)).x + that.player.enemyBoard.getPositionX() - that.player.enemyBoard.width / 2;\n                            var tileY = that.enemyBoardLayer.getPositionAt(cc.p(i, j)).y + that.player.enemyBoard.getPositionY() - that.player.enemyBoard.height / 2;\n                            var tileRect = new cc.rect(tileX, tileY, currentTile.width, currentTile.height);\n\n                            if (cc.rectContainsPoint(tileRect, cc.p(x, y))) {\n                                that.server.hit(i, j, that.player.enemyId);\n                            }\n                        }\n                    }\n                    cc.log(\"Clicked on enemyBoardField\");\n                } else {\n                    var soundButtonRect = new cc.rect(Math.floor(audioIconPos.x - that.audioIcon._buttonNormalSpriteFrame.getRect().width / 2), Math.floor(audioIconPos.y - that.audioIcon._buttonNormalSpriteFrame.getRect().height / 2), that.audioIcon._buttonNormalSpriteFrame.getRect().width, that.audioIcon._buttonNormalSpriteFrame.getRect().height);\n                    if (cc.rectContainsPoint(soundButtonRect, cc.p(Math.floor(x), Math.floor(y)))) {\n                        that.toggleSound();\n                    }\n                }\n\n                var t1 = performance.now();\n\n                cc.log(\"Performance: \" + (t1 - t0) + \" milliseconds\");\n            }\n        }, this);\n\n        return true;\n    },\n\n    enemyDisconnect: function enemyDisconnect(msg) {\n        this.labelOnError.setAnchorPoint(cc.p(0.5, 0.5));\n        this.exitOneEnemyDisconnect = true;\n        this.labelOnError.setFontFillColor(cc.color(200, 0, 0));\n        this.labelOnError.setPosition(cc.p(this.size.width / 2, this.size.height - this.size.height / 14));\n        this.addChild(this.labelOnError);\n    },\n\n    onConnection: function onConnection(msg) {\n        cc.log(\"Connection has been established\");\n\n        this.board = msg.board;\n\n        cc.log(this.board);\n\n        for (var i = 0; i < 10; i++) {\n            for (var j = 0; j < 10; j++) {\n                var cell = this.board[j + i * 10];\n                if (cell === _constants2.default.SUBMARINE_TYPE || cell === _constants2.default.BATTLESHIP_TYPE || cell === _constants2.default.DESTROYER_TYPE || cell === _constants2.default.CRUISER_TYPE) {\n                    this.ownBoardLayer.setTileGID(_constants2.default.GID_SHIP, cc.p(i, j));\n                    cc.log(this.ownBoardLayer.getTileGIDAt(cc.p(i, j)));\n                }\n            }\n        }\n\n        this.player.id = msg.id;\n        this.server.findRoom();\n    },\n\n    toggleSound: function toggleSound() {\n        _audioEngine2.default.soundEnabled = !_audioEngine2.default.soundEnabled;\n        if (this.audioIcon.isEnabled()) {\n            this.audioIcon.setEnabled(false);\n        } else {\n            this.audioIcon.setEnabled(true);\n            this.audioIcon._onPressStateChangedToNormal();\n        }\n    },\n\n    onEnemyFound: function onEnemyFound(msg) {\n        this.removeChild(this.waitEnemyLabel);\n        this.player.enemyId = msg.enemyId;\n        this.walkingUserId = msg.walkingUserId;\n        if (this.walkingUserId === this.player.id) {\n            this.topBoardLabel.string = \"Your action\";\n        } else {\n            this.topBoardLabel.string = \"Enemy action\";\n        }\n        cc.log(\"Enemy found. EnemyId = \" + this.player.enemyId);\n        cc.log(\"Walking user id = \" + this.walkingUserId);\n    },\n\n    onWin: function onWin(msg) {\n        cc.log(\"You win!\");\n        this.topBoardLabel.string = \"You win\";\n        this.score.result = \"win\";\n        this.server.webSocket.close();\n        cc.director.runScene(new cc.TransitionFade(0.5, new _scoreScene2.default(), cc.color(1, 1, 1, 1)));\n    },\n\n    onLost: function onLost(msg) {\n        cc.log(\"You lost\");\n        this.topBoardLabel.string = \"You lost\";\n        this.score.result = \"lost\";\n        this.server.webSocket.close();\n        cc.director.runScene(new cc.TransitionFade(0.5, new _scoreScene2.default(), cc.color(1, 1, 1, 1)));\n    },\n\n    onUnknown: function onUnknown(msg) {\n        cc.log(msg.msg);\n    },\n\n    enemyInjured: function enemyInjured(msg) {\n        this.enemyBoardLayer.setTileGID(_constants2.default.GID_INJURED, cc.p(msg.row, msg.column));\n        _audioEngine2.default.playEffect(_resource2.default.hitSound.src, false);\n        this.score.hits++;\n    },\n\n    youInjured: function youInjured(msg) {\n        cc.log(\"You injured at \" + msg.row + \" \" + msg.column);\n        this.ownBoardLayer.setTileGID(_constants2.default.GID_INJURED, cc.p(msg.row, msg.column));\n        _audioEngine2.default.playEffect(_resource2.default.hitSound.src, false);\n    },\n\n    youFall: function youFall(msg) {\n        this.enemyBoardLayer.setTileGID(_constants2.default.GID_FALL, cc.p(msg.row, msg.column));\n        this.walkingUserId = this.player.enemyId;\n        this.topBoardLabel.string = \"Enemy action\";\n        _audioEngine2.default.playEffect(_resource2.default.fallSound.src, false);\n        this.score.misses++;\n    },\n\n    enemyFall: function enemyFall(msg) {\n        cc.log(\"Enemy fall at \" + msg.row + \" \" + msg.column);\n        this.ownBoardLayer.setTileGID(_constants2.default.GID_FALL, cc.p(msg.row, msg.column));\n        this.walkingUserId = this.player.id;\n        this.topBoardLabel.string = \"Your action\";\n        _audioEngine2.default.playEffect(_resource2.default.fallSound.src, false);\n    }\n});\n\nvar GameScene = cc.Scene.extend({\n    onEnter: function onEnter() {\n        this._super();\n        var layer = new GameLayer();\n        this.addChild(layer);\n    }\n});\n\nexports.default = GameScene;\n\n//# sourceURL=webpack:///./source/scene/gameScene.js?");

/***/ }),

/***/ "./source/scene/mainMenuScene.js":
/*!***************************************!*\
  !*** ./source/scene/mainMenuScene.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _resource = __webpack_require__(/*! ../resource */ \"./source/resource.js\");\n\nvar _resource2 = _interopRequireDefault(_resource);\n\nvar _gameScene = __webpack_require__(/*! ./gameScene */ \"./source/scene/gameScene.js\");\n\nvar _gameScene2 = _interopRequireDefault(_gameScene);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MainMenuLayer = cc.Layer.extend({\n\n    backgroundSprite: null,\n\n    ctor: function ctor() {\n        this._super();\n        this.backgroundSprite = new cc.Sprite(_resource2.default.backgroundSprite.src);\n\n        var size = cc.winSize;\n\n        var visibleSize = cc.director.getVisibleSize();\n        var origin = cc.director.getVisibleOrigin();\n\n        this.backgroundSprite.setPosition(cc.p(visibleSize.width / 2 + origin.x, visibleSize.height / 2 + origin.y));\n\n        this.addChild(this.backgroundSprite, -1);\n        var rX = visibleSize.width / this.backgroundSprite.getContentSize().width;\n        var rY = visibleSize.height / this.backgroundSprite.getContentSize().height;\n\n        this.backgroundSprite.setScale(rX, rY);\n\n        // Create the main menu\n\n        var itemNewGameLabel = new cc.LabelTTF(\"Start Game\", \"GameFont\", 26);\n        itemNewGameLabel.enableShadow(cc.color(50, 100, 100, 255), cc.size(4, 4), 0);\n\n        var itemNewGame = new cc.MenuItemLabel(itemNewGameLabel, function () {\n            cc.log(\"Play button\");\n            cc.director.runScene(new cc.TransitionFade(0.5, new _gameScene2.default(), cc.color(1, 1, 1, 1)));\n        });\n\n        itemNewGame.setPosition(cc.p(size.width / 2, size.height / 6 * 4));\n\n        var mainMenu = new cc.Menu(itemNewGame);\n        mainMenu.setPosition(cc.p(0, 0));\n        this.addChild(mainMenu);\n\n        var descLabel = new cc.LabelTTF(\"Welcome to the battleship game.\" + \" Click on start game to begin and you'll find own enemy.\\n\" + \"You may discover the battleship rules there: \", \"Arial\", 20);\n\n        descLabel.setPosition(cc.p(size.width / 2, size.height / 2.2));\n        this.addChild(descLabel);\n\n        var rulesButtonLabel = new cc.LabelTTF(\"rules\", \"Arial\", 21);\n        var rulesButtonItem = new cc.MenuItemLabel(rulesButtonLabel, function () {\n            openInNewTab(\"https://en.wikipedia.org/wiki/Battleship_(game)\");\n        });\n        var rulesMenu = new cc.Menu(rulesButtonItem);\n        rulesMenu.setPosition(cc.p(size.width / 2, size.height / 2.6));\n        this.addChild(rulesMenu);\n\n        var underline = new cc.LabelTTF(\"_____\", \"Arial\", 21);\n        underline.setPosition(rulesMenu.getPosition());\n        this.addChild(underline);\n\n        return true;\n    }\n});\n\nfunction openInNewTab(url) {\n    var win = window.open(url, '_blank');\n    win.focus();\n}\n\nvar MainMenuScene = cc.Scene.extend({\n    onEnter: function onEnter() {\n        this._super();\n        var layer = new MainMenuLayer();\n        this.addChild(layer);\n    }\n});\n\nexports.default = MainMenuScene;\n\n//# sourceURL=webpack:///./source/scene/mainMenuScene.js?");

/***/ }),

/***/ "./source/scene/scoreScene.js":
/*!************************************!*\
  !*** ./source/scene/scoreScene.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _gameScene = __webpack_require__(/*! ./gameScene */ \"./source/scene/gameScene.js\");\n\nvar _gameScene2 = _interopRequireDefault(_gameScene);\n\nvar _score = __webpack_require__(/*! ../helper/score */ \"./source/helper/score.js\");\n\nvar _score2 = _interopRequireDefault(_score);\n\nvar _resource = __webpack_require__(/*! ../resource */ \"./source/resource.js\");\n\nvar _resource2 = _interopRequireDefault(_resource);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ScoreLayer = cc.Layer.extend({\n\n    resultLabel: null,\n    hits: null,\n    misses: null,\n    score: null,\n    playAgain: null,\n    playAgainMenu: null,\n    backgroundSprite: null,\n\n    ctor: function ctor() {\n        this._super();\n        this.score = _score2.default.instance;\n        this.resultLabel = new cc.LabelTTF(this.score.result === \"win\" ? \"You win\" : \"You lost\", \"GameFont\", 28);\n        this.hits = new cc.LabelTTF(\"Hits: \" + this.score.hits, \"GameFont\", 20);\n        this.misses = new cc.LabelTTF(\"Misses: \" + this.score.misses, \"GameFont\", 20);\n        this.playAgain = new cc.LabelTTF(\"Play again\", \"GameFont\", 26);\n        this.playAgainMenu = new cc.MenuItemLabel(this.playAgain, this.restart);\n        this.backgroundSprite = new cc.Sprite(this.score.result === \"win\" ? _resource2.default.backgroundOnWin.src : _resource2.default.backgroundOnLost.src);\n\n        var size = cc.winSize;\n\n        this.backgroundSprite.setAnchorPoint(0, 0);\n        var scale = Math.max(size.width / this.backgroundSprite.getContentSize().width, size.height / this.backgroundSprite.getContentSize().height);\n        this.backgroundSprite.setScale(scale);\n\n        this.resultLabel.setAnchorPoint(cc.p(0.5, 0.5));\n        this.hits.setAnchorPoint(cc.p(0.5, 0.5));\n        this.misses.setAnchorPoint(cc.p(0.5, 0.5));\n        this.playAgainMenu.setAnchorPoint(cc.p(0.5, 0.5));\n\n        this.resultLabel.setPosition(cc.p(size.width / 2, size.height - size.height / 12));\n        this.hits.setPosition(cc.p(size.width / 2, size.height / 1.8));\n        this.misses.setPosition(cc.p(size.width / 2, size.height / 2.8));\n        this.playAgainMenu.setPosition(cc.p(size.width / 2, size.height / 10));\n\n        this.menu = new cc.Menu(this.playAgainMenu);\n        this.menu.setPosition(cc.p(0, 0));\n\n        this.addChild(this.backgroundSprite);\n        this.addChild(this.resultLabel);\n        this.addChild(this.hits);\n        this.addChild(this.misses);\n        this.addChild(this.menu);\n    },\n\n    restart: function restart() {\n        cc.director.runScene(new cc.TransitionFade(0.5, new _gameScene2.default(), cc.Color(1, 1, 1, 1)));\n    }\n});\n\nvar ScoreScene = cc.Scene.extend({\n    onEnter: function onEnter() {\n        this._super();\n        var layer = new ScoreLayer();\n        this.addChild(layer);\n    }\n});\n\nexports.default = ScoreScene;\n\n//# sourceURL=webpack:///./source/scene/scoreScene.js?");

/***/ })

/******/ });