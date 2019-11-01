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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/WebServer.js":
/*!*********************************!*\
  !*** ./src/server/WebServer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ \"uuid/v1\");\n/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! connect-mongo */ \"connect-mongo\");\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(connect_mongo__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _libraries_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./libraries/database */ \"./src/server/libraries/database.js\");\n/* harmony import */ var _libraries_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./libraries/logger */ \"./src/server/libraries/logger.js\");\n/* harmony import */ var _routes_indexRouter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/indexRouter */ \"./src/server/routes/indexRouter.js\");\n/* harmony import */ var _routes_sessionRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/sessionRouter */ \"./src/server/routes/sessionRouter.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_13__);\n/* global process */\n// Native Packages\n // Framework\n\n\n\n // NPM Packages\n\n\n\n\n // Middleware\n\n // Libraries\n\n\n // Routes\n\n\n // Local Files\n\n\n\nfunction start() {\n  _libraries_logger__WEBPACK_IMPORTED_MODULE_10__[\"logger\"].info('Starting Server'); // Baseline\n\n  var app = express__WEBPACK_IMPORTED_MODULE_5___default()();\n  var server = http__WEBPACK_IMPORTED_MODULE_0___default.a.Server(app);\n  var io = socket_io__WEBPACK_IMPORTED_MODULE_7___default()(server);\n  var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_13___default.a); // Configuration\n\n  var PORT = process.env.PORT || 3000; // Middleware\n\n  var MongoStore = connect_mongo__WEBPACK_IMPORTED_MODULE_8___default()(express_session__WEBPACK_IMPORTED_MODULE_6___default.a);\n  app.use(express_session__WEBPACK_IMPORTED_MODULE_6___default()({\n    secret: uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()(),\n    resave: false,\n    saveUninitialized: true,\n    store: new MongoStore({\n      mongooseConnection: _libraries_database__WEBPACK_IMPORTED_MODULE_9__[\"default\"].connection\n    })\n  }));\n  app.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n    publicPath: _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_13___default.a.output.publicPath\n  }));\n  app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  app.use(function (req, res, next) {\n    _libraries_logger__WEBPACK_IMPORTED_MODULE_10__[\"http\"].info(\"HTTP \".concat(req.method, \" \").concat(req.url));\n    next();\n  });\n  app.use('/', Object(_routes_indexRouter__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(compiler));\n  app.use('/session', Object(_routes_sessionRouter__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(compiler));\n  io.on('connection', function (socket) {\n    // Do something with the session?\n    // socket.handshake.session.data = { blah }\n    socket.on('*', function (message) {\n      message = JSON.stringify(message);\n      _libraries_logger__WEBPACK_IMPORTED_MODULE_10__[\"logger\"].info(\"SOCK \".concat(message));\n    });\n    socket.on('message', function (data) {\n      socket.emit('message', data);\n    });\n    socket.on('database', function (data) {\n      var user = new _libraries_database__WEBPACK_IMPORTED_MODULE_9__[\"default\"].models.User(data);\n      user.save().then(function () {\n        return _libraries_database__WEBPACK_IMPORTED_MODULE_9__[\"default\"].models.User.find(function (err, cats) {\n          socket.emit('database', JSON.stringify(cats));\n        });\n      });\n    });\n    socket.on('session', function (data) {\n      if (data) {\n        for (var item in data) {\n          socket.handshake.session.data.item = data[item];\n        }\n\n        socket.handshake.session.save();\n      }\n\n      socket.emit('session', socket.handshake.session);\n    });\n    io.emit('message', 'Hi there!');\n  });\n  server.listen(PORT, function () {\n    _libraries_logger__WEBPACK_IMPORTED_MODULE_10__[\"logger\"].info('Web Server Started');\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (start);\n\n//# sourceURL=webpack:///./src/server/WebServer.js?");

/***/ }),

/***/ "./src/server/libraries/database.js":
/*!******************************************!*\
  !*** ./src/server/libraries/database.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/users */ \"./src/server/libraries/models/users.js\");\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect('mongodb://localhost:27017/test', {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', _models_users__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n//# sourceURL=webpack:///./src/server/libraries/database.js?");

/***/ }),

/***/ "./src/server/libraries/logger.js":
/*!****************************************!*\
  !*** ./src/server/libraries/logger.js ***!
  \****************************************/
/*! exports provided: logger, http, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logger\", function() { return logger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"http\", function() { return http; });\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n/* global process */\n\nvar logger = winston__WEBPACK_IMPORTED_MODULE_0___default.a.createLogger({\n  level: 'info',\n  format: winston__WEBPACK_IMPORTED_MODULE_0___default.a.format.json(),\n  defaultMeta: {\n    service: 'user-service'\n  },\n  transports: [new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({\n    filename: './logs/error.log',\n    level: 'error'\n  }), new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({\n    filename: './logs/combined.log'\n  })]\n});\nvar http = winston__WEBPACK_IMPORTED_MODULE_0___default.a.createLogger({\n  level: 'info',\n  format: winston__WEBPACK_IMPORTED_MODULE_0___default.a.format.json(),\n  defaultMeta: {\n    service: 'user-service'\n  },\n  transports: [new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({\n    filename: './logs/http.error.log',\n    level: 'error'\n  }), new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({\n    filename: './logs/http.combined.log'\n  })]\n});\n\nif (true) {\n  logger.add(new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.Console({\n    format: winston__WEBPACK_IMPORTED_MODULE_0___default.a.format.simple()\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (logger);\n\n//# sourceURL=webpack:///./src/server/libraries/logger.js?");

/***/ }),

/***/ "./src/server/libraries/models/users.js":
/*!**********************************************!*\
  !*** ./src/server/libraries/models/users.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    first: String,\n    last: String,\n    bio: String,\n    user: {\n      type: String,\n      lowercase: true,\n      required: [true, \"can't be blank\"],\n      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],\n      index: true\n    }\n  },\n  email: {\n    type: String,\n    lowercase: true,\n    required: [true, \"can't be blank\"],\n    match: [/\\S+@\\S+\\.\\S+/, 'is invalid'],\n    index: true\n  },\n  id: {\n    type: String,\n    required: [true, \"can't be blank\"],\n    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],\n    index: true\n  },\n  password: {\n    type: String,\n    required: [true, \"can't be blank\"]\n  }\n});\nUserSchema.plugin(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  message: 'is already taken.'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserSchema);\n\n//# sourceURL=webpack:///./src/server/libraries/models/users.js?");

/***/ }),

/***/ "./src/server/routes/indexRouter.js":
/*!******************************************!*\
  !*** ./src/server/routes/indexRouter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* globals __dirname */\n// Native Packages\n\n // Middleware\n\nvar router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router(); // Configuration\n\nvar DIST_DIR = __dirname;\nvar HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, 'index.html');\n\nfunction indexRouter(compiler) {\n  router.get('/', function (req, res, next) {\n    compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {\n      if (err) {\n        return next(err);\n      }\n\n      res.set('content-type', 'text/html');\n      res.send(result);\n      res.end();\n    });\n  });\n  return router;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (indexRouter);\n\n//# sourceURL=webpack:///./src/server/routes/indexRouter.js?");

/***/ }),

/***/ "./src/server/routes/sessionRouter.js":
/*!********************************************!*\
  !*** ./src/server/routes/sessionRouter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* globals */\n// Native Packages\n // Middleware\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nfunction indexRouter() {\n  router.post('/session', function (req, res, next) {\n    req.session.data = req.body;\n    req.session.save();\n    res.set('content-type', 'text/html');\n    res.end('ok');\n    next();\n  });\n  router.get('/session', function (req, res, next) {\n    res.set('content-type', 'text/html');\n    res.send(req.session.data);\n    res.end();\n    next();\n  });\n  return router;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (indexRouter);\n\n//# sourceURL=webpack:///./src/server/routes/sessionRouter.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WebServer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebServer */ \"./src/server/WebServer.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_1__);\n/* globals */\n\n\nObject(_WebServer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // const port = process.env.PORT || 80;\n// const Server = new WebServer();\n// Server.on('started', (err, msg) => {\n//     if (err) {\n//         console.error(err);\n//     } else {\n//         console.log(msg)\n//     }\n// });\n// Server.on('stopped', (err, msg) => {\n//     if (err) {\n//         console.error(err);\n//     } else {\n//         console.log(msg)\n//     }\n// });\n// Server.start({ port, config }, () => {\n//     console.log(`App listening on ${ port }`);\n//     console.log('Press Ctrl+C to quit.');\n// });\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* globals __dirname module require */\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']\n  },\n  output: {\n    path: path.join(__dirname, '..', 'public'),\n    publicPath: '/',\n    filename: '[name].js'\n  },\n  mode: 'development',\n  target: 'web',\n  devtool: 'source-map',\n  module: {\n    rules: [{\n      enforce: 'pre',\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'eslint-loader',\n      options: {\n        emitError: false,\n        emitwarning: false,\n        failOnError: false,\n        failOnWarning: false\n      }\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      use: 'babel-loader'\n    }, {\n      test: /\\.html$/,\n      use: [{\n        loader: 'html-loader'\n      }]\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n    }, {\n      test: /\\.(png|svg|jpg|gif|ico|webmanifest)$/,\n      use: ['file-loader']\n    }]\n  },\n  plugins: [new HtmlWebPackPlugin({\n    template: './src/html/index.html',\n    filename: './index.html',\n    favicon: './src/assets/favicon.ico',\n    excludeChunks: ['server']\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-mongo\");\n\n//# sourceURL=webpack:///external_%22connect-mongo%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose-unique-validator\");\n\n//# sourceURL=webpack:///external_%22mongoose-unique-validator%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v1\");\n\n//# sourceURL=webpack:///external_%22uuid/v1%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });