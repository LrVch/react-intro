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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/asset-manifest.json":
/*!***********************************!*\
  !*** ./build/asset-manifest.json ***!
  \***********************************/
/*! exports provided: files, default */
/***/ (function(module) {

eval("module.exports = {\"files\":{\"static/js/0.0c3ccdc3.chunk.js\":\"/static/js/0.0c3ccdc3.chunk.js\",\"static/js/0.0c3ccdc3.chunk.js.map\":\"/static/js/0.0c3ccdc3.chunk.js.map\",\"auth.css\":\"/static/css/auth.a8de17bc.chunk.css\",\"auth.js\":\"/static/js/auth.98a3d2e0.chunk.js\",\"auth.js.map\":\"/static/js/auth.98a3d2e0.chunk.js.map\",\"checkOut.css\":\"/static/css/checkOut.5e2a5289.chunk.css\",\"checkOut.js\":\"/static/js/checkOut.97389192.chunk.js\",\"checkOut.js.map\":\"/static/js/checkOut.97389192.chunk.js.map\",\"logout.js\":\"/static/js/logout.5bb1ed5b.chunk.js\",\"logout.js.map\":\"/static/js/logout.5bb1ed5b.chunk.js.map\",\"main.css\":\"/static/css/main.68075998.chunk.css\",\"main.js\":\"/static/js/main.f6079136.chunk.js\",\"main.js.map\":\"/static/js/main.f6079136.chunk.js.map\",\"notFound.js\":\"/static/js/notFound.bc27f40a.chunk.js\",\"notFound.js.map\":\"/static/js/notFound.bc27f40a.chunk.js.map\",\"orders.css\":\"/static/css/orders.ceb9e290.chunk.css\",\"orders.js\":\"/static/js/orders.ba639480.chunk.js\",\"orders.js.map\":\"/static/js/orders.ba639480.chunk.js.map\",\"profile.css\":\"/static/css/profile.3076217f.chunk.css\",\"profile.js\":\"/static/js/profile.91be938c.chunk.js\",\"profile.js.map\":\"/static/js/profile.91be938c.chunk.js.map\",\"runtime~main.js\":\"/static/js/runtime~main.46e885f2.js\",\"runtime~main.js.map\":\"/static/js/runtime~main.46e885f2.js.map\",\"static/js/9.60bc74c8.chunk.js\":\"/static/js/9.60bc74c8.chunk.js\",\"static/js/9.60bc74c8.chunk.js.map\":\"/static/js/9.60bc74c8.chunk.js.map\",\"static/css/10.7ec49fcd.chunk.css\":\"/static/css/10.7ec49fcd.chunk.css\",\"static/js/10.4449763e.chunk.js\":\"/static/js/10.4449763e.chunk.js\",\"static/js/10.4449763e.chunk.js.map\":\"/static/js/10.4449763e.chunk.js.map\",\"index.html\":\"/index.html\",\"precache-manifest.c8808384ceed10996a5a4c77fc4f3222.js\":\"/precache-manifest.c8808384ceed10996a5a4c77fc4f3222.js\",\"service-worker.js\":\"/service-worker.js\",\"static/css/10.7ec49fcd.chunk.css.map\":\"/static/css/10.7ec49fcd.chunk.css.map\",\"static/css/auth.a8de17bc.chunk.css.map\":\"/static/css/auth.a8de17bc.chunk.css.map\",\"static/css/checkOut.5e2a5289.chunk.css.map\":\"/static/css/checkOut.5e2a5289.chunk.css.map\",\"static/css/main.68075998.chunk.css.map\":\"/static/css/main.68075998.chunk.css.map\",\"static/css/orders.ceb9e290.chunk.css.map\":\"/static/css/orders.ceb9e290.chunk.css.map\",\"static/css/profile.3076217f.chunk.css.map\":\"/static/css/profile.3076217f.chunk.css.map\",\"static/media/burger-logo.png\":\"/static/media/burger-logo.b8503d26.png\",\"static/media/sad-burger.jpg\":\"/static/media/sad-burger.bd6901e2.jpg\"}};\n\n//# sourceURL=webpack:///./build/asset-manifest.json?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (originalModule) {\n  if (!originalModule.webpackPolyfill) {\n    var module = Object.create(originalModule); // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function () {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function () {\n        return module.i;\n      }\n    });\n    Object.defineProperty(module, \"exports\", {\n      enumerable: true\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./server/controllers/index.js":
/*!*************************************!*\
  !*** ./server/controllers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleware_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/renderer */ \"./server/middleware/renderer.js\");\n/* harmony import */ var _src_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/configureStore */ \"./src/configureStore.js\");\n/* harmony import */ var _src_store_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/store/actions/auth */ \"./src/store/actions/auth.js\");\n/* harmony import */ var _src_store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/store/actions */ \"./src/store/actions/index.js\");\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst actionIndex = (req, res, next) => {\n  const {\n    store\n  } = Object(_src_configureStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const language = req.cookies.lang || 'en'; // console.log('language from controller', language);\n\n  if (req.cookies.au) {\n    store.dispatch(_src_store_actions_auth__WEBPACK_IMPORTED_MODULE_3__[\"authServerIsFullLogged\"]());\n  }\n\n  store.dispatch(Object(_src_store_actions__WEBPACK_IMPORTED_MODULE_4__[\"settingsChangeLanguage\"])(language));\n  Object(_middleware_renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(store)(req, res, next);\n}; // root (/) should always serve our server rendered page\n\n\nrouter.use('^/$', actionIndex); // other static resources should just be served as they are\n\nrouter.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path.resolve(__dirname, '..', '..', 'build'), {\n  maxAge: '30d'\n})); // any other route should be handled by react-router, so serve the index page\n\nrouter.use('*', actionIndex);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n/* WEBPACK VAR INJECTION */}.call(this, \"server\\\\controllers\"))\n\n//# sourceURL=webpack:///./server/controllers/index.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var i18next_express_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18next-express-middleware */ \"i18next-express-middleware\");\n/* harmony import */ var i18next_express_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(i18next_express_middleware__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! i18next-node-fs-backend */ \"i18next-node-fs-backend\");\n/* harmony import */ var i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _controllers_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/index */ \"./server/controllers/index.js\");\n\n\n\n\n\n\n\n\n\nconst PORT = 3005;\ni18next__WEBPACK_IMPORTED_MODULE_4___default.a.use(i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_6___default.a).init({\n  fallbackLng: 'en',\n  // debug: true,\n  load: 'languageOnly',\n  interpolation: {\n    escapeValue: false\n  },\n  backend: {\n    loadPath: path__WEBPACK_IMPORTED_MODULE_7___default.a.resolve(__dirname, \"../public/locales/{{lng}}/{{ns}}.json\")\n  },\n  react: {\n    useSuspense: false\n  }\n});\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(i18next_express_middleware__WEBPACK_IMPORTED_MODULE_5___default.a.handle(i18next__WEBPACK_IMPORTED_MODULE_4___default.a));\napp.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(_controllers_index__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.disable('x-powered-by'); // start the app\n\nreact_loadable__WEBPACK_IMPORTED_MODULE_0___default.a.preloadAll().then(() => {\n  console.log('all preloaded');\n  app.listen(PORT, error => {\n    if (error) {\n      return console.log('something bad happened', error);\n    }\n\n    console.log(\"listening on \" + PORT + \"...\");\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"server\"))\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/middleware/renderer.js":
/*!***************************************!*\
  !*** ./server/middleware/renderer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/App */ \"./src/App.js\");\n/* harmony import */ var _build_asset_manifest_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../build/asset-manifest.json */ \"./build/asset-manifest.json\");\nvar _build_asset_manifest_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../build/asset-manifest.json */ \"./build/asset-manifest.json\", 1);\n\n\n\n\n\n\n\n\n // import our main App component\n\n // import the manifest generated with the create-react-app build\n\n // function to extract js assets from the manifest\n\nconst extractJsAssets = (assets, chunks) => Object.keys(assets).filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1).map(k => assets[k]);\n\nconst extractCssAssets = (assets, chunks) => Object.keys(assets).filter(asset => chunks.indexOf(asset.replace('.css', '')) > -1).map(k => assets[k]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (store => async (req, res) => {\n  const language = req.cookies.lang || 'en';\n  await req.i18n.loadLanguages(language);\n  req.i18n.changeLanguage(language);\n  const i18nState = {};\n  i18nState[language] = req.i18n.services.resourceStore.data[language]; // console.log(i18nState)\n  // console.log('req.i18n', req.i18n.options)\n  // get the html file created with the create-react-app build\n\n  const filePath = path__WEBPACK_IMPORTED_MODULE_7___default.a.resolve(__dirname, '..', '..', 'build', 'index.html');\n  fs__WEBPACK_IMPORTED_MODULE_8___default.a.readFile(filePath, 'utf8', (err, htmlData) => {\n    if (err) {\n      console.error('err', err);\n      return res.status(404).end();\n    }\n\n    const modules = [];\n    const routerContext = {}; // render the app as a string\n\n    const html = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_2___default.a.Capture, {\n      report: m => modules.push(m)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n      store: store\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n      location: req.baseUrl,\n      context: routerContext\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_6__[\"I18nextProvider\"], {\n      i18n: req.i18n\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)))))); // console.log(modules)\n    // get the stringified state\n\n    const reduxState = JSON.stringify(store.getState()); // map required assets to script tags\n\n    const extraJsChunks = extractJsAssets(_build_asset_manifest_json__WEBPACK_IMPORTED_MODULE_10__.files, modules).map(c => \"<script custom type=\\\"text/javascript\\\" src=\\\"\".concat(c, \"\\\"></script>\")).join('\\n');\n    const extraCssChunks = extractCssAssets(_build_asset_manifest_json__WEBPACK_IMPORTED_MODULE_10__.files, modules).map(c => \"<link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"\".concat(c, \"\\\"></link>\")).join('\\n'); // get HTML headers\n\n    const helmet = react_helmet__WEBPACK_IMPORTED_MODULE_5__[\"Helmet\"].renderStatic(); // now inject the rendered app into our html and send it to the client\n\n    return res.send(htmlData.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(html, \"</div> \").concat(extraCssChunks + extraJsChunks)).replace('__REDUX_STATE__={}', \"__REDUX_STATE__=\".concat(reduxState)).replace('__i18n_INIT_STATE__={}', \"__i18n_INIT_STATE__=\".concat(JSON.stringify(i18nState))).replace('__i18n_INIT_LANG__={}', \"__i18n_INIT_LANG__='\".concat(language, \"'\")).replace('<title></title>', helmet.title.toString() + helmet.meta.toString()));\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"server\\\\middleware\"))\n\n//# sourceURL=webpack:///./server/middleware/renderer.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoc/Layout/Layout */ \"./src/hoc/Layout/Layout.js\");\n/* harmony import */ var _containers_BurgerBuilder_BurgerBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/BurgerBuilder/BurgerBuilder */ \"./src/containers/BurgerBuilder/BurgerBuilder.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/selectors */ \"./src/store/selectors/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Navigation_AuthRoute_AuthRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Navigation/AuthRoute/AuthRoute */ \"./src/components/Navigation/AuthRoute/AuthRoute.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_indicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/indicator */ \"./src/context/indicator.js\");\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\n\n\n\n\n\n\n\n\n\nconst Auth = react_loadable__WEBPACK_IMPORTED_MODULE_7___default()({\n  loader: () => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! ./containers/Auth/Auth */ \"./src/containers/Auth/Auth.js\"))),\n  loading: _context_indicator__WEBPACK_IMPORTED_MODULE_8__[\"ProgressFallback\"],\n  modules: ['auth'],\n  webpack: () => [/*require.resolve*/(/*! ./containers/Auth/Auth */ \"./src/containers/Auth/Auth.js\")]\n});\nconst NotFound = react_loadable__WEBPACK_IMPORTED_MODULE_7___default()({\n  loader: () => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! ./components/UI/NotFound/NotFound */ \"./src/components/UI/NotFound/NotFound.js\"))),\n  loading: _context_indicator__WEBPACK_IMPORTED_MODULE_8__[\"ProgressFallback\"],\n  modules: ['notFound'],\n  webpack: () => [/*require.resolve*/(/*! ./components/UI/NotFound/NotFound */ \"./src/components/UI/NotFound/NotFound.js\")]\n});\nconst Profile = react_loadable__WEBPACK_IMPORTED_MODULE_7___default()({\n  loader: () => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! ./containers/Profile/Profile */ \"./src/containers/Profile/Profile.js\"))),\n  loading: _context_indicator__WEBPACK_IMPORTED_MODULE_8__[\"ProgressFallback\"],\n  modules: ['profile'],\n  webpack: () => [/*require.resolve*/(/*! ./containers/Profile/Profile */ \"./src/containers/Profile/Profile.js\")]\n});\nconst Orders = react_loadable__WEBPACK_IMPORTED_MODULE_7___default()({\n  loader: () => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! ./containers/Orders/Orders */ \"./src/containers/Orders/Orders.js\"))),\n  loading: _context_indicator__WEBPACK_IMPORTED_MODULE_8__[\"ProgressFallback\"],\n  modules: ['orders'],\n  webpack: () => [/*require.resolve*/(/*! ./containers/Orders/Orders */ \"./src/containers/Orders/Orders.js\")]\n});\nconst Logout = react_loadable__WEBPACK_IMPORTED_MODULE_7___default()({\n  loader: () => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! ./containers/Auth/Logout/Logout */ \"./src/containers/Auth/Logout/Logout.js\"))),\n  loading: _context_indicator__WEBPACK_IMPORTED_MODULE_8__[\"ProgressFallback\"],\n  modules: ['logout'],\n  webpack: () => [/*require.resolve*/(/*! ./containers/Auth/Logout/Logout */ \"./src/containers/Auth/Logout/Logout.js\")]\n});\nconst CheckOut = react_loadable__WEBPACK_IMPORTED_MODULE_7___default()({\n  loader: () => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! ./containers/CheckOut/CheckOut */ \"./src/containers/CheckOut/CheckOut.js\"))),\n  loading: _context_indicator__WEBPACK_IMPORTED_MODULE_8__[\"ProgressFallback\"],\n  modules: ['checkOut'],\n  webpack: () => [/*require.resolve*/(/*! ./containers/CheckOut/CheckOut */ \"./src/containers/CheckOut/CheckOut.js\")]\n});\n\nfunction App({\n  isFullLoggedIn\n}) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_indicator__WEBPACK_IMPORTED_MODULE_8__[\"IndicatorProvider\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/\",\n    exact: true,\n    component: _containers_BurgerBuilder_BurgerBuilder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation_AuthRoute_AuthRoute__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    authenticated: isFullLoggedIn,\n    path: \"/checkout\",\n    component: CheckOut\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation_AuthRoute_AuthRoute__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    authenticated: isFullLoggedIn,\n    path: \"/orders\",\n    component: Orders\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation_AuthRoute_AuthRoute__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    authenticated: isFullLoggedIn,\n    path: \"/profile\",\n    component: Profile\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/login\",\n    component: Auth\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/signup\",\n    component: Auth\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation_AuthRoute_AuthRoute__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    authenticated: isFullLoggedIn,\n    path: \"/logout\",\n    component: Logout\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    component: NotFound\n  }))));\n}\n\nconst matStateToProps = state => ({\n  isFullLoggedIn: Object(_store_selectors__WEBPACK_IMPORTED_MODULE_4__[\"isFullLoggedIn\"])(state)\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(matStateToProps)(App));\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/assets/images/burger-logo.png":
/*!*******************************************!*\
  !*** ./src/assets/images/burger-logo.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/media/burger-logo.b8503d26.png\";\n\n//# sourceURL=webpack:///./src/assets/images/burger-logo.png?");

/***/ }),

/***/ "./src/assets/images/sad-burger.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/sad-burger.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/media/sad-burger.bd6901e2.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/sad-burger.jpg?");

/***/ }),

/***/ "./src/axios/error.js":
/*!****************************!*\
  !*** ./src/axios/error.js ***!
  \****************************/
/*! exports provided: error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony import */ var axios_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios-observable */ \"axios-observable\");\n/* harmony import */ var axios_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_observable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\nconst error = axios_observable__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: _config__WEBPACK_IMPORTED_MODULE_1__[\"BASE_URL\"]\n});\n\n//# sourceURL=webpack:///./src/axios/error.js?");

/***/ }),

/***/ "./src/components/Burger/BuildControls/BuildControl/BuildControl.js":
/*!**************************************************************************!*\
  !*** ./src/components/Burger/BuildControls/BuildControl/BuildControl.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BuildControl_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuildControl.module.scss */ \"./src/components/Burger/BuildControls/BuildControl/BuildControl.module.scss\");\n/* harmony import */ var _BuildControl_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BuildControl_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n // import PropTypes from 'prop-types'\n\n // class BuildControl extends PureComponent {\n//   render() {\n//     return (\n//       <div className={styles.BuildControl}>\n//         <div className={styles.Label}>{this.props.label}</div>\n//         <button\n//           className={styles.Less + ' '}\n//           disabled={this.props.disabled}\n//           onClick={this.props.removeIngrediend}\n//         >Less</button>\n//         <button\n//           className={styles.More}\n//           onClick={this.props.addIngrediend}\n//         >More</button>\n//       </div>\n//     )\n//   }\n// }\n\nconst BuildControl = ({\n  label,\n  addIngrediend,\n  removeIngrediend,\n  disabled\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _BuildControl_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.BuildControl\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _BuildControl_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Label\n  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: _BuildControl_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Less + ' ',\n    disabled: disabled,\n    onClick: removeIngrediend\n  }, \"Less\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: _BuildControl_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.More,\n    onClick: addIngrediend\n  }, \"More\"));\n}; // BuildControl.propTypes = {\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BuildControl);\n\n//# sourceURL=webpack:///./src/components/Burger/BuildControls/BuildControl/BuildControl.js?");

/***/ }),

/***/ "./src/components/Burger/BuildControls/BuildControl/BuildControl.module.scss":
/*!***********************************************************************************!*\
  !*** ./src/components/Burger/BuildControls/BuildControl/BuildControl.module.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"BuildControl\": \"BuildControl_BuildControl__18U_L\",\n\t\"Label\": \"BuildControl_Label__2owY7\",\n\t\"Less\": \"BuildControl_Less__1aPiH\",\n\t\"More\": \"BuildControl_More__2RnY6\"\n};\n\n//# sourceURL=webpack:///./src/components/Burger/BuildControls/BuildControl/BuildControl.module.scss?");

/***/ }),

/***/ "./src/components/Burger/BuildControls/BuildControls.js":
/*!**************************************************************!*\
  !*** ./src/components/Burger/BuildControls/BuildControls.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BuildControl_BuildControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuildControl/BuildControl */ \"./src/components/Burger/BuildControls/BuildControl/BuildControl.js\");\n/* harmony import */ var _BuildControls_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuildControls.module.scss */ \"./src/components/Burger/BuildControls/BuildControls.module.scss\");\n/* harmony import */ var _BuildControls_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BuildControls_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst BuildControls = ({\n  addIngrediend,\n  removeIngrediend,\n  controls,\n  disabledState,\n  price,\n  purchasable,\n  purchaseHandler,\n  loggedIn\n}) => {\n  const {\n    t\n  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _BuildControls_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.BuildControls\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, t('price'), \" : \", price, \" $\"), controls.map((c, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BuildControl_BuildControl__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    disabled: disabledState[c.type],\n    key: c.label + i,\n    label: c.label,\n    addIngrediend: () => addIngrediend(c.type),\n    removeIngrediend: () => removeIngrediend(c.type)\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: purchaseHandler,\n    disabled: !purchasable,\n    className: _BuildControls_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.OrderButton\n  }, loggedIn ? 'Order now' : 'SIGNIN TO ORDER')));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BuildControls);\n\n//# sourceURL=webpack:///./src/components/Burger/BuildControls/BuildControls.js?");

/***/ }),

/***/ "./src/components/Burger/BuildControls/BuildControls.module.scss":
/*!***********************************************************************!*\
  !*** ./src/components/Burger/BuildControls/BuildControls.module.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"BuildControls\": \"BuildControls_BuildControls__1HLXB\",\n\t\"OrderButton\": \"BuildControls_OrderButton__1WS2o\",\n\t\"enable\": \"BuildControls_enable__2NN4B\"\n};\n\n//# sourceURL=webpack:///./src/components/Burger/BuildControls/BuildControls.module.scss?");

/***/ }),

/***/ "./src/components/Burger/Burger.js":
/*!*****************************************!*\
  !*** ./src/components/Burger/Burger.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Burger_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Burger.module.scss */ \"./src/components/Burger/Burger.module.scss\");\n/* harmony import */ var _Burger_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Burger_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BurgerIngredients_BurgerIngredients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BurgerIngredients/BurgerIngredients */ \"./src/components/Burger/BurgerIngredients/BurgerIngredients.js\");\n // import PropTypes from 'prop-types'\n\n\n\n\nclass Burger extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    const {\n      ingredients\n    } = this.props;\n    const keys = Object.keys(ingredients);\n    const transormedIngredients = keys.map(key => {\n      return [...Array(ingredients[key])].map((_, i) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BurgerIngredients_BurgerIngredients__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          key: key + i,\n          type: key\n        });\n      });\n    }).reduce((arr, el) => {\n      return [...arr, ...el];\n    }, []);\n    const message = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Please start adding engridients\");\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _Burger_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Burger\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BurgerIngredients_BurgerIngredients__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      type: \"bread-top\"\n    }), !!transormedIngredients.length ? transormedIngredients : message, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BurgerIngredients_BurgerIngredients__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      type: \"bread-bottom\"\n    }));\n  }\n\n} // const Burger = ({ ingredients }) => {\n//   const keys = Object.keys(ingredients);\n//   const transormedIngredients = keys.map(key => {\n//     return [...Array(ingredients[key])]\n//       .map((_, i) => {\n//         return <BurgerIngredients key={key + i} type={key} />\n//       })\n//   })\n//     .reduce((arr, el) => {\n//       return [...arr, ...el]\n//     }, [])\n//   const message = <p>Please start adding engridients</p>\n//   return (\n//     <div className={styles.Burger}>\n//       <BurgerIngredients type=\"bread-top\" />\n//       {!!transormedIngredients.length ? transormedIngredients : message}\n//       <BurgerIngredients type=\"bread-bottom\" />\n//     </div>\n//   )\n// }\n// Burger.propTypes = {\n//   ingredients: PropTypes.Object\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Burger);\n\n//# sourceURL=webpack:///./src/components/Burger/Burger.js?");

/***/ }),

/***/ "./src/components/Burger/Burger.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Burger/Burger.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Burger\": \"Burger_Burger__1zc2x\"\n};\n\n//# sourceURL=webpack:///./src/components/Burger/Burger.module.scss?");

/***/ }),

/***/ "./src/components/Burger/BurgerIngredients/BurgerIngredients.js":
/*!**********************************************************************!*\
  !*** ./src/components/Burger/BurgerIngredients/BurgerIngredients.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BurgerIngredients_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BurgerIngredients.module.scss */ \"./src/components/Burger/BurgerIngredients/BurgerIngredients.module.scss\");\n/* harmony import */ var _BurgerIngredients_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BurgerIngredients_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst BurgerIngredients = ({\n  type\n}) => {\n  let ingredient = null;\n\n  switch (type) {\n    case 'bread-bottom':\n      ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _BurgerIngredients_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"BreadBottom\"]\n      });\n      break;\n\n    case 'bread-top':\n      ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _BurgerIngredients_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"BreadTop\"]\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _BurgerIngredients_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"Seeds1\"]\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _BurgerIngredients_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"Seeds2\"]\n      }));\n      break;\n\n    case 'meat':\n      ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _BurgerIngredients_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"Meat\"]\n      });\n      break;\n\n    case 'cheese':\n      ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _BurgerIngredients_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"Cheese\"]\n      });\n      break;\n\n    case 'salad':\n      ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _BurgerIngredients_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"Salad\"]\n      });\n      break;\n\n    case 'bacon':\n      ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _BurgerIngredients_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"Bacon\"]\n      });\n      break;\n\n    default:\n      ingredient = null;\n  }\n\n  return ingredient;\n};\n\nBurgerIngredients.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BurgerIngredients);\n\n//# sourceURL=webpack:///./src/components/Burger/BurgerIngredients/BurgerIngredients.js?");

/***/ }),

/***/ "./src/components/Burger/BurgerIngredients/BurgerIngredients.module.scss":
/*!*******************************************************************************!*\
  !*** ./src/components/Burger/BurgerIngredients/BurgerIngredients.module.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"BreadBottom\": \"BurgerIngredients_BreadBottom__1TPxs\",\n\t\"BreadTop\": \"BurgerIngredients_BreadTop__26z5l\",\n\t\"Seeds1\": \"BurgerIngredients_Seeds1__3X7wO\",\n\t\"Seeds2\": \"BurgerIngredients_Seeds2__2PHzI\",\n\t\"Meat\": \"BurgerIngredients_Meat__H7mPH\",\n\t\"Cheese\": \"BurgerIngredients_Cheese__1S8l9\",\n\t\"Salad\": \"BurgerIngredients_Salad__3NiW0\",\n\t\"Bacon\": \"BurgerIngredients_Bacon__MYjVj\"\n};\n\n//# sourceURL=webpack:///./src/components/Burger/BurgerIngredients/BurgerIngredients.module.scss?");

/***/ }),

/***/ "./src/components/Burger/OrderSummary/OrderSummary.js":
/*!************************************************************!*\
  !*** ./src/components/Burger/OrderSummary/OrderSummary.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderSummary.module.scss */ \"./src/components/Burger/OrderSummary/OrderSummary.module.scss\");\n/* harmony import */ var _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Button/Button */ \"./src/components/UI/Button/Button.js\");\n\n\n\n\nconst OrderSummary = ({\n  ingredients,\n  total,\n  cancel,\n  nextStep\n}) => {\n  const summary = Object.keys(ingredients).map((key, i) => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: key + i\n    }, key, \" : \", ingredients[key]);\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.OrderSummary\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Your order\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"A delicious burger with the following ingredients\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, summary), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Total: \", total, \" $\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Continue to checkout?\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onclick: cancel,\n    type: \"danger\"\n  }, \"CANCEL\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onclick: nextStep,\n    type: \"success\"\n  }, \"CONTINUE\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderSummary);\n\n//# sourceURL=webpack:///./src/components/Burger/OrderSummary/OrderSummary.js?");

/***/ }),

/***/ "./src/components/Burger/OrderSummary/OrderSummary.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/Burger/OrderSummary/OrderSummary.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"OrderSummary\": \"OrderSummary_OrderSummary__UsSUe\"\n};\n\n//# sourceURL=webpack:///./src/components/Burger/OrderSummary/OrderSummary.module.scss?");

/***/ }),

/***/ "./src/components/DeleteProfile/DeleteProfile.js":
/*!*******************************************************!*\
  !*** ./src/components/DeleteProfile/DeleteProfile.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DeleteProfile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteProfile.module.scss */ \"./src/components/DeleteProfile/DeleteProfile.module.scss\");\n/* harmony import */ var _DeleteProfile_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DeleteProfile_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Button/Button */ \"./src/components/UI/Button/Button.js\");\n/* harmony import */ var _UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Modal/Modal */ \"./src/components/UI/Modal/Modal.js\");\n/* harmony import */ var _UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Input/ErrorMessage/ErrorMessage */ \"./src/components/UI/Input/ErrorMessage/ErrorMessage.js\");\n\n\n\n\n\n\nconst DeleteProfile = ({\n  confirmDelete,\n  loading,\n  errors,\n  onClearErrors\n}) => {\n  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const toggleModal = () => {\n    setIsOpen(isOpen => !isOpen);\n\n    if (!isOpen) {\n      onClearErrors();\n    }\n  };\n\n  const errorMessages = errors => errors.map((error, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '10px 0'\n    },\n    key: i\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    center: true\n  }, error.message.toLowerCase().replace(/_/gi, ' '))));\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _DeleteProfile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.DeleteProfile\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Delete your profile\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    type: \"success\",\n    onclick: toggleModal\n  }, \"DELETE\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    show: isOpen\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, errors && errorMessages(errors), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Are you sure?\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    disabled: loading,\n    type: \"success\",\n    onclick: confirmDelete\n  }, \"CONFIRM\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    disabled: loading,\n    type: \"danger\",\n    onclick: toggleModal\n  }, \"CANCEL\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(DeleteProfile));\n\n//# sourceURL=webpack:///./src/components/DeleteProfile/DeleteProfile.js?");

/***/ }),

/***/ "./src/components/DeleteProfile/DeleteProfile.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/DeleteProfile/DeleteProfile.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"DeleteProfile\": \"DeleteProfile_DeleteProfile__2Qc26\"\n};\n\n//# sourceURL=webpack:///./src/components/DeleteProfile/DeleteProfile.module.scss?");

/***/ }),

/***/ "./src/components/ErrorHandlers/ErrorBoundary.js":
/*!*******************************************************!*\
  !*** ./src/components/ErrorHandlers/ErrorBoundary.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_errorNotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/errorNotify.service */ \"./src/services/errorNotify.service.js\");\n\n\n\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      hasError: false\n    };\n  }\n\n  static getDerivedStateFromError(error) {\n    return {\n      hasError: true\n    };\n  }\n\n  componentDidCatch(error, info) {\n    _services_errorNotify_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sendErrorDetails({\n      module: this.props.module,\n      errorMessage: error.toString(),\n      info\n    });\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return this.props.spareUi ? this.props.spareUi : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"\\u0427\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A.\");\n    }\n\n    return this.props.children;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorBoundary);\n\n//# sourceURL=webpack:///./src/components/ErrorHandlers/ErrorBoundary.js?");

/***/ }),

/***/ "./src/components/Logo/Logo.js":
/*!*************************************!*\
  !*** ./src/components/Logo/Logo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Logo_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.module.scss */ \"./src/components/Logo/Logo.module.scss\");\n/* harmony import */ var _Logo_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Logo_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_burger_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/burger-logo.png */ \"./src/assets/images/burger-logo.png\");\n/* harmony import */ var _assets_images_burger_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_burger_logo_png__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // import PropTypes from 'prop-types'\n\nconst Logo = props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'Logo ' + _Logo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Logo\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _assets_images_burger_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"logo\"\n  }));\n}; // Logo.propTypes = {\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\n\n//# sourceURL=webpack:///./src/components/Logo/Logo.js?");

/***/ }),

/***/ "./src/components/Logo/Logo.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Logo/Logo.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Logo\": \"Logo_Logo__2BAII\"\n};\n\n//# sourceURL=webpack:///./src/components/Logo/Logo.module.scss?");

/***/ }),

/***/ "./src/components/Navigation/AuthRoute/AuthRoute.js":
/*!**********************************************************!*\
  !*** ./src/components/Navigation/AuthRoute/AuthRoute.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst AuthRoute = ({\n  component: Component,\n  authenticated,\n  to = '/',\n  ...rest\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, rest, {\n  render: props => !authenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n    to: to\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props)\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthRoute);\n\n//# sourceURL=webpack:///./src/components/Navigation/AuthRoute/AuthRoute.js?");

/***/ }),

/***/ "./src/components/Navigation/LazeRoute/LazeRoute.js":
/*!**********************************************************!*\
  !*** ./src/components/Navigation/LazeRoute/LazeRoute.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst LazeRoute = ({\n  component: Component,\n  fallback = null,\n  ...rest\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, rest, {\n  render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props)\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LazeRoute);\n\n//# sourceURL=webpack:///./src/components/Navigation/LazeRoute/LazeRoute.js?");

/***/ }),

/***/ "./src/components/Navigation/NavigationItem/NavigationItem.js":
/*!********************************************************************!*\
  !*** ./src/components/Navigation/NavigationItem/NavigationItem.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavigationItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationItem.module.scss */ \"./src/components/Navigation/NavigationItem/NavigationItem.module.scss\");\n/* harmony import */ var _NavigationItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavigationItem_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n // import className from 'classnames/bind'\n\n // const cx = className.bind(styles);\n\nconst NavigationItem = ({\n  url,\n  children,\n  active,\n  exact,\n  onClick\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: _NavigationItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavigationItem\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    onClick: onClick,\n    activeClassName: _NavigationItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active,\n    exact: exact,\n    to: url\n  }, children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationItem);\n\n//# sourceURL=webpack:///./src/components/Navigation/NavigationItem/NavigationItem.js?");

/***/ }),

/***/ "./src/components/Navigation/NavigationItem/NavigationItem.module.scss":
/*!*****************************************************************************!*\
  !*** ./src/components/Navigation/NavigationItem/NavigationItem.module.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"NavigationItem\": \"NavigationItem_NavigationItem__3lvwq\",\n\t\"active\": \"NavigationItem_active__2H774\"\n};\n\n//# sourceURL=webpack:///./src/components/Navigation/NavigationItem/NavigationItem.module.scss?");

/***/ }),

/***/ "./src/components/Navigation/NavigationItems/NavigationItems.js":
/*!**********************************************************************!*\
  !*** ./src/components/Navigation/NavigationItems/NavigationItems.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavigationItems_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationItems.module.scss */ \"./src/components/Navigation/NavigationItems/NavigationItems.module.scss\");\n/* harmony import */ var _NavigationItems_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavigationItems_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavigationItem/NavigationItem */ \"./src/components/Navigation/NavigationItem/NavigationItem.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst NavigationItems = ({\n  auth,\n  onClick,\n  items = [{\n    active: true,\n    url: '/',\n    text: 'navigation.burgerBuilder',\n    exact: true\n  }, {\n    url: '/orders',\n    text: 'navigation.orders',\n    auth: true\n  }, {\n    url: '/profile',\n    text: 'navigation.profile',\n    auth: true\n  }, {\n    url: '/logout',\n    text: 'navigation.logout',\n    auth: true\n  }, {\n    url: '/login',\n    text: 'navigation.singIn',\n    auth: false\n  }, {\n    url: '/signup',\n    text: 'navigation.signUp',\n    auth: false\n  }]\n}) => {\n  const {\n    t\n  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])();\n\n  const authed = item => item.auth === true || item.auth === undefined;\n\n  const notAuthed = item => item.auth === undefined || !item.auth;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: _NavigationItems_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavigationItems\n  }, items.filter(auth ? authed : notAuthed).map((item, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onClick: onClick,\n    exact: item.exact,\n    key: item.text + i,\n    active: item.active,\n    url: item.url\n  }, t(item.text))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationItems);\n\n//# sourceURL=webpack:///./src/components/Navigation/NavigationItems/NavigationItems.js?");

/***/ }),

/***/ "./src/components/Navigation/NavigationItems/NavigationItems.module.scss":
/*!*******************************************************************************!*\
  !*** ./src/components/Navigation/NavigationItems/NavigationItems.module.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"NavigationItems\": \"NavigationItems_NavigationItems__1N3z9\"\n};\n\n//# sourceURL=webpack:///./src/components/Navigation/NavigationItems/NavigationItems.module.scss?");

/***/ }),

/***/ "./src/components/Navigation/SideDrawer/SideDrawer.js":
/*!************************************************************!*\
  !*** ./src/components/Navigation/SideDrawer/SideDrawer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Logo/Logo */ \"./src/components/Logo/Logo.js\");\n/* harmony import */ var _NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavigationItems/NavigationItems */ \"./src/components/Navigation/NavigationItems/NavigationItems.js\");\n/* harmony import */ var _SideDrawer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideDrawer.module.scss */ \"./src/components/Navigation/SideDrawer/SideDrawer.module.scss\");\n/* harmony import */ var _SideDrawer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SideDrawer_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames/bind */ \"classnames/bind\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/Backdrop/Backdrop */ \"./src/components/UI/Backdrop/Backdrop.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_4___default.a.bind(_SideDrawer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);\n\nconst SideDrawer = ({\n  loggedIn,\n  dropClick,\n  isOpened\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    click: dropClick,\n    show: isOpened\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: cx('SideDrawer', {\n      Open: isOpened,\n      Close: !isOpened\n    })\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onClick: dropClick,\n    auth: loggedIn\n  }))));\n};\n\nSideDrawer.propTypes = {\n  dropClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,\n  isOpened: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideDrawer);\n\n//# sourceURL=webpack:///./src/components/Navigation/SideDrawer/SideDrawer.js?");

/***/ }),

/***/ "./src/components/Navigation/SideDrawer/SideDrawer.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/Navigation/SideDrawer/SideDrawer.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"SideDrawer\": \"SideDrawer_SideDrawer__1IdT8\",\n\t\"Open\": \"SideDrawer_Open__11nSB\",\n\t\"Close\": \"SideDrawer_Close__x0Nbb\"\n};\n\n//# sourceURL=webpack:///./src/components/Navigation/SideDrawer/SideDrawer.module.scss?");

/***/ }),

/***/ "./src/components/Navigation/ToggleButton/ToggleButton.js":
/*!****************************************************************!*\
  !*** ./src/components/Navigation/ToggleButton/ToggleButton.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ToggleButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleButton.module.scss */ \"./src/components/Navigation/ToggleButton/ToggleButton.module.scss\");\n/* harmony import */ var _ToggleButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ToggleButton_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst ToggleButton = ({\n  click\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _ToggleButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ToggleButton,\n    onClick: click\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null));\n};\n\nToggleButton.propTypes = {\n  click: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleButton);\n\n//# sourceURL=webpack:///./src/components/Navigation/ToggleButton/ToggleButton.js?");

/***/ }),

/***/ "./src/components/Navigation/ToggleButton/ToggleButton.module.scss":
/*!*************************************************************************!*\
  !*** ./src/components/Navigation/ToggleButton/ToggleButton.module.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"ToggleButton\": \"ToggleButton_ToggleButton__1uBlX\"\n};\n\n//# sourceURL=webpack:///./src/components/Navigation/ToggleButton/ToggleButton.module.scss?");

/***/ }),

/***/ "./src/components/Navigation/Toolbar/Toolbar.js":
/*!******************************************************!*\
  !*** ./src/components/Navigation/Toolbar/Toolbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Toolbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.module.scss */ \"./src/components/Navigation/Toolbar/Toolbar.module.scss\");\n/* harmony import */ var _Toolbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Toolbar_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Logo/Logo */ \"./src/components/Logo/Logo.js\");\n/* harmony import */ var _NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavigationItems/NavigationItems */ \"./src/components/Navigation/NavigationItems/NavigationItems.js\");\n/* harmony import */ var _ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ToggleButton/ToggleButton */ \"./src/components/Navigation/ToggleButton/ToggleButton.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _UI_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../UI/Avatar/Avatar */ \"./src/components/UI/Avatar/Avatar.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames/bind */ \"classnames/bind\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _context_indicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../context/indicator */ \"./src/context/indicator.js\");\n/* harmony import */ var _UI_Input_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../UI/Input/Input */ \"./src/components/UI/Input/Input.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_8___default.a.bind(_Toolbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);\n\nconst Toolbar = ({\n  currentLang,\n  languages,\n  loggedIn,\n  toggleClick,\n  name,\n  onLangChange,\n  url\n}) => {\n  const [lang, setLang] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(currentLang);\n\n  const handleLang = event => {\n    const {\n      value\n    } = event.target;\n    setLang(value);\n    onLangChange(value);\n  };\n\n  const options = languages.map(lang => ({\n    displayName: lang,\n    value: lang\n  }));\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: _Toolbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Toolbar\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    click: toggleClick\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n    to: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: cx('DesktopOnly', 'Nav')\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    auth: loggedIn\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Toolbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.User\n  }, loggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n    className: _Toolbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Avatar,\n    to: \"/profile\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    url: url,\n    name: name\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    onBlur: () => {},\n    onChange: handleLang,\n    value: lang,\n    elementConfig: {\n      config: {\n        name: 'lang'\n      },\n      options: options\n    },\n    elementType: \"select\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_indicator__WEBPACK_IMPORTED_MODULE_9__[\"Progress\"], {\n    className: cx('Progress')\n  })));\n};\n\nToolbar.propTypes = {\n  toggleClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(Toolbar));\n\n//# sourceURL=webpack:///./src/components/Navigation/Toolbar/Toolbar.js?");

/***/ }),

/***/ "./src/components/Navigation/Toolbar/Toolbar.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/Navigation/Toolbar/Toolbar.module.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Toolbar\": \"Toolbar_Toolbar__3o0ds\",\n\t\"DesktopOnly\": \"Toolbar_DesktopOnly__3Qqwk\",\n\t\"Nav\": \"Toolbar_Nav__2JQlj\",\n\t\"Progress\": \"Toolbar_Progress__2Td3R\",\n\t\"User\": \"Toolbar_User__3cacl\",\n\t\"Avatar\": \"Toolbar_Avatar__1tq9B\"\n};\n\n//# sourceURL=webpack:///./src/components/Navigation/Toolbar/Toolbar.module.scss?");

/***/ }),

/***/ "./src/components/Order/CheckOutSummary/CheckOutSummary.js":
/*!*****************************************************************!*\
  !*** ./src/components/Order/CheckOutSummary/CheckOutSummary.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CheckOutSummary_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckOutSummary.module.scss */ \"./src/components/Order/CheckOutSummary/CheckOutSummary.module.scss\");\n/* harmony import */ var _CheckOutSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CheckOutSummary_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Burger_Burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Burger/Burger */ \"./src/components/Burger/Burger.js\");\n/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Button/Button */ \"./src/components/UI/Button/Button.js\");\n\n\n\n\n\nconst CheckOutSummary = ({\n  ingredients,\n  onCheckOutCancel,\n  onCheckOutContinue,\n  to\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _CheckOutSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CheckOutSummary\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"We hope it tastes well!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      width: '100%',\n      margin: 'auto'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Burger_Burger__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    ingredients: ingredients\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onclick: onCheckOutCancel,\n    type: \"danger\"\n  }, \"CANCEL\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    elem: \"link\",\n    to: to,\n    type: \"success\"\n  }, \"CONTINUE\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckOutSummary);\n\n//# sourceURL=webpack:///./src/components/Order/CheckOutSummary/CheckOutSummary.js?");

/***/ }),

/***/ "./src/components/Order/CheckOutSummary/CheckOutSummary.module.scss":
/*!**************************************************************************!*\
  !*** ./src/components/Order/CheckOutSummary/CheckOutSummary.module.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"CheckOutSummary\": \"CheckOutSummary_CheckOutSummary__JqIVi\"\n};\n\n//# sourceURL=webpack:///./src/components/Order/CheckOutSummary/CheckOutSummary.module.scss?");

/***/ }),

/***/ "./src/components/Order/Order.js":
/*!***************************************!*\
  !*** ./src/components/Order/Order.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Order_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.module.scss */ \"./src/components/Order/Order.module.scss\");\n/* harmony import */ var _Order_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Order_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Order = ({\n  ingredients,\n  price,\n  date\n}) => {\n  const keys = Object.keys(ingredients);\n  const ingredientsArr = keys.map(ing => ({\n    title: ing,\n    value: ingredients[ing]\n  })).map((ing, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    key: ing.title + i\n  }, ing.title, \" \", ing.value, i !== keys.length - 1 ? ', ' : '.'));\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Order_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Order\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Ingredients\"), \": \", ingredientsArr), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Price\"), \": \", price, \" USD\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      fontSize: '12px'\n    }\n  }, date));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Order);\n\n//# sourceURL=webpack:///./src/components/Order/Order.js?");

/***/ }),

/***/ "./src/components/Order/Order.module.scss":
/*!************************************************!*\
  !*** ./src/components/Order/Order.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Order\": \"Order_Order__1EfoZ\"\n};\n\n//# sourceURL=webpack:///./src/components/Order/Order.module.scss?");

/***/ }),

/***/ "./src/components/UI/Alert/Alert.js":
/*!******************************************!*\
  !*** ./src/components/UI/Alert/Alert.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Alert_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.module.scss */ \"./src/components/UI/Alert/Alert.module.scss\");\n/* harmony import */ var _Alert_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Alert_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Alert = ({\n  children,\n  center\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      textAlign: center ? 'center' : 'left'\n    },\n    className: _Alert_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Alert\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Alert);\n\n//# sourceURL=webpack:///./src/components/UI/Alert/Alert.js?");

/***/ }),

/***/ "./src/components/UI/Alert/Alert.module.scss":
/*!***************************************************!*\
  !*** ./src/components/UI/Alert/Alert.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Alert\": \"Alert_Alert__2-5xT\"\n};\n\n//# sourceURL=webpack:///./src/components/UI/Alert/Alert.module.scss?");

/***/ }),

/***/ "./src/components/UI/Avatar/Avatar.js":
/*!********************************************!*\
  !*** ./src/components/UI/Avatar/Avatar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar.module.scss */ \"./src/components/UI/Avatar/Avatar.module.scss\");\n/* harmony import */ var _Avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Avatar = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(({\n  url,\n  name\n}) => {\n  const defaul = 'https://png.pngtree.com/svg/20161027/631929649c.svg';\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Avatar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Avatar\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    alt: name || 'anonymous',\n    src: url || defaul,\n    title: name || 'anonymous'\n  }));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\n\n//# sourceURL=webpack:///./src/components/UI/Avatar/Avatar.js?");

/***/ }),

/***/ "./src/components/UI/Avatar/Avatar.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/UI/Avatar/Avatar.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Avatar\": \"Avatar_Avatar__3d74K\"\n};\n\n//# sourceURL=webpack:///./src/components/UI/Avatar/Avatar.module.scss?");

/***/ }),

/***/ "./src/components/UI/Backdrop/Backdrop.js":
/*!************************************************!*\
  !*** ./src/components/UI/Backdrop/Backdrop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Backdrop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Backdrop.module.scss */ \"./src/components/UI/Backdrop/Backdrop.module.scss\");\n/* harmony import */ var _Backdrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Backdrop_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n // import PropTypes from 'prop-types'\n\nconst Backdrop = ({\n  show,\n  click\n}) => {\n  return show ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: click,\n    className: _Backdrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Backdrop\n  }) : null;\n}; // Backdrop.propTypes = {\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Backdrop);\n\n//# sourceURL=webpack:///./src/components/UI/Backdrop/Backdrop.js?");

/***/ }),

/***/ "./src/components/UI/Backdrop/Backdrop.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/UI/Backdrop/Backdrop.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Backdrop\": \"Backdrop_Backdrop__2ZkaI\"\n};\n\n//# sourceURL=webpack:///./src/components/UI/Backdrop/Backdrop.module.scss?");

/***/ }),

/***/ "./src/components/UI/Button/Button.js":
/*!********************************************!*\
  !*** ./src/components/UI/Button/Button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.scss */ \"./src/components/UI/Button/Button.module.scss\");\n/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ \"classnames/bind\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);\n\nconst Button = ({\n  children,\n  btnType,\n  type,\n  onclick,\n  disabled,\n  elem = 'button',\n  to,\n  hidden\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, elem === 'button' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    hidden: hidden,\n    type: btnType,\n    disabled: disabled,\n    className: cx('Button', {\n      Success: type === 'success',\n      Danger: type === 'danger'\n    }),\n    onClick: onclick\n  }, children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    hidden: hidden,\n    className: cx('Button', {\n      Success: type === 'success',\n      Danger: type === 'danger'\n    }),\n    to: to\n  }, children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(Button));\n\n//# sourceURL=webpack:///./src/components/UI/Button/Button.js?");

/***/ }),

/***/ "./src/components/UI/Button/Button.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/UI/Button/Button.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Button\": \"Button_Button__p7b6z\",\n\t\"Success\": \"Button_Success__1pV9E\",\n\t\"Danger\": \"Button_Danger__bhD_u\"\n};\n\n//# sourceURL=webpack:///./src/components/UI/Button/Button.module.scss?");

/***/ }),

/***/ "./src/components/UI/Input/ErrorMessage/ErrorMessage.js":
/*!**************************************************************!*\
  !*** ./src/components/UI/Input/ErrorMessage/ErrorMessage.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst ErrorMessage = ({\n  children,\n  center\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      fontSize: '12px',\n      color: 'red',\n      textAlign: center ? 'center' : 'left'\n    }\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorMessage);\n\n//# sourceURL=webpack:///./src/components/UI/Input/ErrorMessage/ErrorMessage.js?");

/***/ }),

/***/ "./src/components/UI/Input/Input.js":
/*!******************************************!*\
  !*** ./src/components/UI/Input/Input.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.module.scss */ \"./src/components/UI/Input/Input.module.scss\");\n/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Input_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ \"classnames/bind\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_Input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);\n\nconst Input = ({\n  elementType,\n  validate,\n  label,\n  onChange,\n  onBlur,\n  value,\n  name,\n  invalid,\n  ...props\n}) => {\n  let inputElement = null;\n  const id = Math.random().toString(32).slice(2);\n  const classes = cx('InputElement', {\n    Invalid: invalid\n  });\n\n  switch (elementType) {\n    case 'inputFormik':\n      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], _extends({\n        validate: validate,\n        name: name,\n        id: id,\n        className: classes\n      }, props.elementConfig));\n      break;\n\n    case 'input':\n      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n        value: value,\n        id: id,\n        onBlur: onBlur,\n        onChange: onChange,\n        className: classes\n      }, props.elementConfig));\n      break;\n\n    case 'textarea':\n      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", _extends({\n        vallue: value,\n        id: id,\n        onBlur: onBlur,\n        onChange: onChange,\n        className: classes\n      }, props.elementConfig));\n      break;\n\n    case 'select':\n      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n        value: value,\n        id: id,\n        onBlur: onBlur,\n        onChange: onChange,\n        name: props.elementConfig.config.name,\n        className: classes\n      }, props.elementConfig.options.map((opt, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        key: opt.value + i,\n        value: opt.value\n      }, opt.displayName)));\n      break;\n\n    default:\n      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n        vallue: value,\n        id: id,\n        onBlur: onBlur,\n        onChange: onChange,\n        className: classes\n      }, props.elementConfig));\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Input\n  }, label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: id,\n    className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Label\n  }, label), inputElement);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(Input));\n\n//# sourceURL=webpack:///./src/components/UI/Input/Input.js?");

/***/ }),

/***/ "./src/components/UI/Input/Input.module.scss":
/*!***************************************************!*\
  !*** ./src/components/UI/Input/Input.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Input\": \"Input_Input__294Lf\",\n\t\"Label\": \"Input_Label__OSzFb\",\n\t\"InputElement\": \"Input_InputElement__2Zs6h\",\n\t\"Invalid\": \"Input_Invalid__3KGQk\"\n};\n\n//# sourceURL=webpack:///./src/components/UI/Input/Input.module.scss?");

/***/ }),

/***/ "./src/components/UI/Loader/Loader.js":
/*!********************************************!*\
  !*** ./src/components/UI/Loader/Loader.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.module.scss */ \"./src/components/UI/Loader/Loader.module.scss\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Loader = ({\n  center,\n  hidden\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: center ? '0 auto' : ''\n    },\n    hidden: hidden,\n    className: _Loader_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['Lds-ellipsis']\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\n\n//# sourceURL=webpack:///./src/components/UI/Loader/Loader.js?");

/***/ }),

/***/ "./src/components/UI/Loader/Loader.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/UI/Loader/Loader.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Lds-ellipsis\": \"Loader_Lds-ellipsis__2M-Jp\",\n\t\"lds-ellipsis1\": \"Loader_lds-ellipsis1__1RX8C\",\n\t\"lds-ellipsis2\": \"Loader_lds-ellipsis2__3Gpb5\",\n\t\"lds-ellipsis3\": \"Loader_lds-ellipsis3__3b6Oh\"\n};\n\n//# sourceURL=webpack:///./src/components/UI/Loader/Loader.module.scss?");

/***/ }),

/***/ "./src/components/UI/Modal/Modal.js":
/*!******************************************!*\
  !*** ./src/components/UI/Modal/Modal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.module.scss */ \"./src/components/UI/Modal/Modal.module.scss\");\n/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Backdrop/Backdrop */ \"./src/components/UI/Backdrop/Backdrop.js\");\n\n\n\n\nconst Modal = ({\n  show,\n  children,\n  dropClick\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Modal_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Modal,\n    style: {\n      transform: show ? 'translate(0)' : 'translate(-100vh)',\n      opacity: show ? '1' : '0'\n    }\n  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    click: dropClick,\n    show: show\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(Modal));\n\n//# sourceURL=webpack:///./src/components/UI/Modal/Modal.js?");

/***/ }),

/***/ "./src/components/UI/Modal/Modal.module.scss":
/*!***************************************************!*\
  !*** ./src/components/UI/Modal/Modal.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Modal\": \"Modal_Modal__1MtGn\"\n};\n\n//# sourceURL=webpack:///./src/components/UI/Modal/Modal.module.scss?");

/***/ }),

/***/ "./src/components/UI/NotFound/NotFound.js":
/*!************************************************!*\
  !*** ./src/components/UI/NotFound/NotFound.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst styles = {\n  flexGrow: 1,\n  display: 'flex'\n};\n\nconst NotFound = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: styles\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    style: {\n      margin: 'auto'\n    }\n  }, \"404\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/components/UI/NotFound/NotFound.js?");

/***/ }),

/***/ "./src/components/UI/SpareUi/SpareUi.js":
/*!**********************************************!*\
  !*** ./src/components/UI/SpareUi/SpareUi.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_sad_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/sad-burger.jpg */ \"./src/assets/images/sad-burger.jpg\");\n/* harmony import */ var _assets_images_sad_burger_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_sad_burger_jpg__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst stylesWrap = {\n  maxWidth: '300px',\n  margin: 'auto'\n};\nconst stylesImg = {\n  maxWidth: '100%'\n};\n\nconst SpareUi = ({\n  message,\n  onClick\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: stylesWrap\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      textAlign: 'center'\n    }\n  }, message ? message : 'Something went wrong :(', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), onClick && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: onClick\n  }, \"Retry\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    style: stylesImg,\n    src: _assets_images_sad_burger_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,\n    alt: \"Sad burger\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpareUi);\n\n//# sourceURL=webpack:///./src/components/UI/SpareUi/SpareUi.js?");

/***/ }),

/***/ "./src/components/UI/Spiner/Spiner.js":
/*!********************************************!*\
  !*** ./src/components/UI/Spiner/Spiner.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Spiner_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spiner.module.scss */ \"./src/components/UI/Spiner/Spiner.module.scss\");\n/* harmony import */ var _Spiner_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spiner_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Spiner = props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Spiner_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loader\n  }, \"Loading...\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spiner);\n\n//# sourceURL=webpack:///./src/components/UI/Spiner/Spiner.js?");

/***/ }),

/***/ "./src/components/UI/Spiner/Spiner.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/UI/Spiner/Spiner.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"loader\": \"Spiner_loader__CTxlD\",\n\t\"load1\": \"Spiner_load1__2LGZD\"\n};\n\n//# sourceURL=webpack:///./src/components/UI/Spiner/Spiner.module.scss?");

/***/ }),

/***/ "./src/components/UserInfo/UserInfo.js":
/*!*********************************************!*\
  !*** ./src/components/UserInfo/UserInfo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInfo.module.scss */ \"./src/components/UserInfo/UserInfo.module.scss\");\n/* harmony import */ var _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Input/Input */ \"./src/components/UI/Input/Input.js\");\n/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Button/Button */ \"./src/components/UI/Button/Button.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Input/ErrorMessage/ErrorMessage */ \"./src/components/UI/Input/ErrorMessage/ErrorMessage.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ \"yup\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _UI_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/Loader/Loader */ \"./src/components/UI/Loader/Loader.js\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared */ \"./src/shared/index.js\");\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! debounce */ \"debounce\");\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _UI_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../UI/Avatar/Avatar */ \"./src/components/UI/Avatar/Avatar.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst UserInfo = ({\n  errors,\n  displayName,\n  loading,\n  photoUrl,\n  onSubmit,\n  wasChanged\n}) => {\n  const initState = {\n    displayName: displayName || '',\n    photoUrl: photoUrl || ''\n  };\n  const userSchema = yup__WEBPACK_IMPORTED_MODULE_6__[\"object\"]().shape({\n    displayName: yup__WEBPACK_IMPORTED_MODULE_6__[\"string\"]().min(2, 'At least 2 chars').required('Name is required')\n  });\n  const validatePhotoUrl = debounce__WEBPACK_IMPORTED_MODULE_9___default()(value => {\n    if (!value) {\n      return '';\n    }\n\n    let image = new Image();\n    image.src = value;\n    return Object(_shared__WEBPACK_IMPORTED_MODULE_8__[\"loadImageValidator\"])(image).then(() => {\n      image = null;\n    }).catch(() => {\n      image = null; // eslint-disable-next-line no-throw-literal\n\n      throw 'Image url is invalid';\n    });\n  }, 100);\n\n  const errorMessages = errors => errors.map((error, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '10px 0'\n    },\n    key: i\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    center: true\n  }, error.message.toLowerCase().replace(/_/gi, ' '))));\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.UserInfo\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"User info\"), errors && errorMessages(errors), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Formik\"], {\n    enableReinitialize: true,\n    initialValues: initState,\n    validationSchema: userSchema,\n    onSubmit: (values, actions) => {\n      onSubmit(values, actions);\n    }\n  }, ({\n    values,\n    errors,\n    touched,\n    handleChange,\n    handleBlur,\n    isSubmitting,\n    isValidating,\n    validateForm\n  }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"fieldset\", {\n    disabled: isSubmitting\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onBlur: handleBlur,\n    onChange: handleChange,\n    label: \"Name\",\n    value: values.displayName,\n    invalid: errors.displayName && touched.displayName,\n    elementConfig: {\n      name: 'displayName',\n      placeholder: 'Your name',\n      type: 'text'\n    },\n    elementType: \"input\"\n  }), errors.displayName && touched.displayName && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, errors.displayName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    label: \"Image url\",\n    validate: validatePhotoUrl,\n    name: \"photoUrl\",\n    invalid: errors.photoUrl && touched.photoUrl,\n    elementConfig: {\n      name: 'photoUrl',\n      placeholder: 'Your avatar url',\n      type: 'text'\n    },\n    elementType: \"inputFormik\"\n  }), errors.photoUrl && touched.photoUrl && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, errors.photoUrl), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    name: values.displayName,\n    url: errors.photoUrl ? null : values.photoUrl\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    hidden: loading,\n    disabled: isSubmitting,\n    btnType: \"submit\",\n    type: \"success\"\n  }, \"UPDATE\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    hidden: !loading\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserInfo);\n\n//# sourceURL=webpack:///./src/components/UserInfo/UserInfo.js?");

/***/ }),

/***/ "./src/components/UserInfo/UserInfo.module.scss":
/*!******************************************************!*\
  !*** ./src/components/UserInfo/UserInfo.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"UserInfo\": \"UserInfo_UserInfo__2i3SH\"\n};\n\n//# sourceURL=webpack:///./src/components/UserInfo/UserInfo.module.scss?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: BASE_URL, TOKEN_URL, AUTH_BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BASE_URL\", function() { return BASE_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOKEN_URL\", function() { return TOKEN_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_BASE_URL\", function() { return AUTH_BASE_URL; });\nconst BASE_URL = 'https://burger-builder-super.firebaseio.com';\nconst TOKEN_URL = 'https://securetoken.googleapis.com/v1/token?key=';\nconst AUTH_BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/configureStore.js":
/*!*******************************!*\
  !*** ./src/configureStore.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-observable */ \"redux-observable\");\n/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reducers */ \"./src/store/reducers/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middleware_init_state_from_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/init-state-from-cookie */ \"./src/middleware/init-state-from-cookie.js\");\n\n\n\n\n\nconst REACT_APP_SERVER_RENDER = true;\nfunction configureStore(initialState = {}) {\n  const epicMiddleware = Object(redux_observable__WEBPACK_IMPORTED_MODULE_1__[\"createEpicMiddleware\"])();\n  const middlewares = [epicMiddleware];\n\n  if (!REACT_APP_SERVER_RENDER) {\n    middlewares.push(_middleware_init_state_from_cookie__WEBPACK_IMPORTED_MODULE_4__[\"initStateFromCookie\"]);\n  }\n\n  return {\n    store: Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_store_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middlewares))),\n    epicMiddleware\n  };\n}\n\n//# sourceURL=webpack:///./src/configureStore.js?");

/***/ }),

/***/ "./src/containers/Auth/Auth.js":
/*!*************************************!*\
  !*** ./src/containers/Auth/Auth.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AuthForm_AuthForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthForm/AuthForm */ \"./src/containers/Auth/AuthForm/AuthForm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions/index.js\");\n/* harmony import */ var _store_selectors_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/selectors/auth */ \"./src/store/selectors/auth.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_selectors_burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/selectors/burger */ \"./src/store/selectors/burger.js\");\n/* harmony import */ var _components_UI_Alert_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Alert/Alert */ \"./src/components/UI/Alert/Alert.js\");\n/* harmony import */ var _components_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/UI/Input/ErrorMessage/ErrorMessage */ \"./src/components/UI/Input/ErrorMessage/ErrorMessage.js\");\n\n\n\n\n\n\n\n\n\nconst authForm = {\n  email: {\n    elementConfig: {\n      name: 'email',\n      placeholder: 'Your email',\n      type: 'email'\n    },\n    elementType: 'input',\n    label: 'Email',\n    value: '',\n    validationSchema: {\n      type: 'string',\n      validators: [{\n        name: 'email',\n        message: 'Not valid email'\n      }, {\n        name: 'required',\n        message: 'Email is Required'\n      }]\n    }\n  },\n  name: {\n    elementConfig: {\n      name: 'name',\n      placeholder: 'Your name',\n      type: 'text'\n    },\n    elementType: 'input',\n    label: 'Name',\n    value: '',\n    validationSchema: {\n      type: 'string',\n      validators: [{\n        name: 'min',\n        value: 2,\n        message: 'At least 2 chars'\n      }, {\n        name: 'max',\n        value: 20,\n        message: 'Max 20 chars'\n      }, {\n        name: 'required',\n        message: 'Name is Required'\n      }]\n    }\n  },\n  password: {\n    elementConfig: {\n      name: 'password',\n      placeholder: 'Your password',\n      type: 'password'\n    },\n    elementType: 'input',\n    label: 'Password',\n    value: '',\n    validationSchema: {\n      type: 'string',\n      validators: [{\n        name: 'min',\n        value: 6,\n        message: 'At least 6 chars'\n      }, {\n        name: 'max',\n        value: 20,\n        message: 'Max 20 chars'\n      }, {\n        name: 'required',\n        message: 'Password is Required'\n      }]\n    }\n  }\n};\n\nconst Auth = ({\n  authErrors,\n  autErrorsClear,\n  confirmed,\n  confirmEmailError,\n  isConfirmMessageShow,\n  ingredients,\n  isFullLoggedIn,\n  history,\n  loading,\n  loggedIn,\n  match,\n  onAuthHideConfirmMessage,\n  onLeaveLoginPage,\n  onLogin,\n  onRequestConfirmEmail\n}) => {\n  const handleSubmit = (values, actions) => {\n    onLogin(match.url, values, actions, history);\n  };\n\n  const handleOnInit = type => {\n    autErrorsClear();\n\n    if (type === '/signup' && isConfirmMessageShow) {\n      onAuthHideConfirmMessage();\n    }\n  };\n\n  const handleRequestConfirmEmail = e => {\n    e.preventDefault();\n    onRequestConfirmEmail();\n  };\n\n  const handleLeavePage = type => {\n    if (type === '/login' && !confirmed) {\n      onLeaveLoginPage();\n    }\n  };\n\n  const isLoginUrl = match.url === '/login';\n  const isBuilding = !!Object.values(ingredients).reduce((prev, next) => {\n    return prev + next;\n  }, 0);\n  const redirect = isBuilding ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Redirect\"], {\n    to: \"/checkout\"\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Redirect\"], {\n    to: \"/\"\n  });\n\n  const errorMessages = errors => errors.map((error, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '10px 0'\n    },\n    key: i\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    center: true\n  }, error.message.toLowerCase().replace(/_/gi, ' '))));\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isFullLoggedIn && redirect, isConfirmMessageShow && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Redirect\"], {\n    to: \"/login\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: 'auto',\n      padding: '20px, 0'\n    }\n  }, loggedIn && !confirmed && isLoginUrl && isConfirmMessageShow && !confirmEmailError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Alert_Alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    center: true\n  }, \"We have sent you a confirmation email\"), loggedIn && !confirmed && isLoginUrl && isConfirmMessageShow && confirmEmailError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Alert_Alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    center: true\n  }, \"We couldn't send you a confirmation email\", errorMessages(confirmEmailError)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthForm_AuthForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    loading: loading,\n    onInit: handleOnInit,\n    onDestroy: handleLeavePage,\n    formType: match.url,\n    authForm: authForm,\n    errors: authErrors,\n    onSubmit: handleSubmit\n  }), loggedIn && !confirmed && isLoginUrl && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      textAlign: 'center',\n      paddingTop: '20px'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    onClick: handleRequestConfirmEmail,\n    style: {\n      fontSize: '14px',\n      color: 'blue',\n      textAlign: 'center'\n    },\n    href: \"/\"\n  }, \"send confirmaion email\"))));\n};\n\nconst mapStateToProps = state => ({\n  authErrors: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_4__[\"authErrors\"])(state),\n  confirmed: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_4__[\"confirmed\"])(state),\n  confirmEmailError: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_4__[\"confirmEmailError\"])(state),\n  ingredients: Object(_store_selectors_burger__WEBPACK_IMPORTED_MODULE_6__[\"ingredients\"])(state),\n  isFullLoggedIn: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_4__[\"isFullLoggedIn\"])(state),\n  loading: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_4__[\"loading\"])(state),\n  loggedIn: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_4__[\"loggedIn\"])(state),\n  isConfirmMessageShow: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_4__[\"isConfirmMessageShow\"])(state)\n});\n\nconst mapDispatchToProps = dispatch => ({\n  onLogin: (authType, credentials, actions, history) => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"authRequest\"])(authType, credentials, actions, history)),\n  autErrorsClear: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"autErrorsClear\"])()),\n  onAuthHideConfirmMessage: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"authHideNotConfirmedMessage\"])()),\n  onRequestConfirmEmail: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"authVerifyEmailRequest\"])()),\n  onLeaveLoginPage: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"authLeaveLgin\"])())\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Auth));\n\n//# sourceURL=webpack:///./src/containers/Auth/Auth.js?");

/***/ }),

/***/ "./src/containers/Auth/AuthForm/AuthForm.js":
/*!**************************************************!*\
  !*** ./src/containers/Auth/AuthForm/AuthForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/UI/Button/Button */ \"./src/components/UI/Button/Button.js\");\n/* harmony import */ var _AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthForm.module.scss */ \"./src/containers/Auth/AuthForm/AuthForm.module.scss\");\n/* harmony import */ var _AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/UI/Input/Input */ \"./src/components/UI/Input/Input.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/UI/Input/ErrorMessage/ErrorMessage */ \"./src/components/UI/Input/ErrorMessage/ErrorMessage.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ \"yup\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_UI_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Loader/Loader */ \"./src/components/UI/Loader/Loader.js\");\n\n\n\n\n\n\n\n\n\n\nconst AuthForm = ({\n  authForm,\n  errors,\n  formType,\n  loading,\n  onInit,\n  onDestroy,\n  onSubmit\n}) => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    onInit(formType);\n    return () => {\n      onDestroy(formType);\n    }; // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [formType]);\n  const isLogin = formType === '/login';\n  const initState = Object.keys(authForm).reduce((state, key) => {\n    if (isLogin && key === 'name') {\n      return state;\n    }\n\n    return { ...state,\n      [key]: authForm[key].value\n    };\n  }, {});\n  let formElementsArr = Object.keys(authForm).filter(key => {\n    return isLogin ? !(key === 'name') : true;\n  }).map(key => authForm[key]);\n\n  const createField = validationSchema => {\n    const {\n      type,\n      validators\n    } = validationSchema;\n    let schema = yup__WEBPACK_IMPORTED_MODULE_6__[type]();\n    schema = validators.reduce((schema, validator) => {\n      const {\n        name,\n        value,\n        message\n      } = validator;\n      const field = value ? schema[name](value, message) : schema[name](message);\n      return field;\n    }, schema);\n    return schema;\n  };\n\n  const schemaFields = Object.keys(initState).reduce((schema, name) => {\n    const {\n      validationSchema\n    } = authForm[name];\n    return { ...schema,\n      [name]: createField(validationSchema)\n    };\n  }, {});\n\n  const errorMessages = errors => errors.map((error, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '10px 0'\n    },\n    key: i\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    center: true\n  }, error.message.toLowerCase().replace(/_/gi, ' '))));\n\n  const authSchema = yup__WEBPACK_IMPORTED_MODULE_6__[\"object\"]().shape(schemaFields);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.AuthForm\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, isLogin ? 'SingIn' : 'SingUp'), isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Link\"], {\n    className: _AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.AuthFormLink,\n    to: \"/signup\"\n  }, \"Need an account?\") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Link\"], {\n    className: _AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.AuthFormLink,\n    to: \"/login\"\n  }, \"Have an account?\"), errors && errorMessages(errors), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Formik\"], {\n    enableReinitialize: true,\n    initialValues: initState,\n    validationSchema: authSchema,\n    onSubmit: (values, actions) => {\n      onSubmit(values, actions);\n    }\n  }, ({\n    values,\n    errors,\n    status,\n    touched,\n    handleChange,\n    handleBlur,\n    handleSubmit,\n    isSubmitting,\n    isValidating,\n    validateForm,\n    setErrors,\n    setTouched,\n    resetForm\n  }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"fieldset\", {\n    disabled: isSubmitting\n  }, formElementsArr.map((elem, i) => {\n    const name = elem.elementConfig.name;\n    const invalid = errors[name] && touched[name] && errors[name];\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: name + i\n    }, values[name] !== undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onBlur: handleBlur,\n      onChange: handleChange,\n      label: elem.label,\n      value: values[name],\n      invalid: invalid,\n      elementConfig: elem.elementConfig,\n      elementType: elem.elementType\n    }), invalid && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, errors[name]));\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    hidden: loading,\n    disabled: isSubmitting,\n    btnType: \"submit\",\n    type: \"success\"\n  }, \"SUBMIT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    center: true,\n    hidden: !loading\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(AuthForm));\n\n//# sourceURL=webpack:///./src/containers/Auth/AuthForm/AuthForm.js?");

/***/ }),

/***/ "./src/containers/Auth/AuthForm/AuthForm.module.scss":
/*!***********************************************************!*\
  !*** ./src/containers/Auth/AuthForm/AuthForm.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"AuthForm\": \"AuthForm_AuthForm__3f85G\",\n\t\"AuthFormLink\": \"AuthForm_AuthFormLink__3f-Pt\"\n};\n\n//# sourceURL=webpack:///./src/containers/Auth/AuthForm/AuthForm.module.scss?");

/***/ }),

/***/ "./src/containers/Auth/Logout/Logout.js":
/*!**********************************************!*\
  !*** ./src/containers/Auth/Logout/Logout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions */ \"./src/store/actions/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Logout = ({\n  authLogout\n}) => {\n  authLogout();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Redirect\"], {\n    to: \"/\"\n  }));\n};\n\nconst mapDispathToProps = dispatch => ({\n  authLogout: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[\"authLogout\"])())\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(null, mapDispathToProps)(Logout));\n\n//# sourceURL=webpack:///./src/containers/Auth/Logout/Logout.js?");

/***/ }),

/***/ "./src/containers/BurgerBuilder/BurgerBuilder.js":
/*!*******************************************************!*\
  !*** ./src/containers/BurgerBuilder/BurgerBuilder.js ***!
  \*******************************************************/
/*! exports provided: BurgerBuilder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BurgerBuilder\", function() { return BurgerBuilder; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Burger_Burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Burger/Burger */ \"./src/components/Burger/Burger.js\");\n/* harmony import */ var _components_Burger_BuildControls_BuildControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Burger/BuildControls/BuildControls */ \"./src/components/Burger/BuildControls/BuildControls.js\");\n/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ \"./src/components/UI/Modal/Modal.js\");\n/* harmony import */ var _components_Burger_OrderSummary_OrderSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Burger/OrderSummary/OrderSummary */ \"./src/components/Burger/OrderSummary/OrderSummary.js\");\n/* harmony import */ var _components_UI_Spiner_Spiner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UI/Spiner/Spiner */ \"./src/components/UI/Spiner/Spiner.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions/index.js\");\n/* harmony import */ var _hoc_withErrorBoundary_withErrorBoundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hoc/withErrorBoundary/withErrorBoundary */ \"./src/hoc/withErrorBoundary/withErrorBoundary.js\");\n/* harmony import */ var _components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/UI/SpareUi/SpareUi */ \"./src/components/UI/SpareUi/SpareUi.js\");\n/* harmony import */ var _store_selectors_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/selectors/burger */ \"./src/store/selectors/burger.js\");\n/* harmony import */ var _store_selectors_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/selectors/auth */ \"./src/store/selectors/auth.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst BurgerBuilder = ({\n  errorLoadingInitState,\n  initStateRequest,\n  ingredients,\n  isFullLoggedIn,\n  history,\n  loadingInitState,\n  onIngredientAdd,\n  onIngredientRemove,\n  restoreInitState,\n  retryInitState,\n  totalPrice\n}) => {\n  const [purchasing, setPurchasing] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    initStateRequest();\n    restoreInitState(); // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n\n  const purchaseContinueHandler = () => {\n    history.push('/checkout');\n  };\n\n  const purchaseOpenHandler = () => {\n    if (isFullLoggedIn) {\n      setPurchasing(true);\n    } else {\n      history.push('/login');\n    }\n  };\n\n  const purchaseCloseHandler = () => {\n    setPurchasing(false);\n  };\n\n  const controls = Object.keys(ingredients).map(i => ({\n    label: i[0].toUpperCase() + i.slice(1),\n    type: i\n  }));\n  const isIngredients = Object.keys(ingredients).length;\n  const disabledState = { ...ingredients\n  };\n\n  for (let key in disabledState) {\n    disabledState[key] = disabledState[key] <= 0;\n  }\n\n  const spiner = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Spiner_Spiner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null);\n  const error = errorLoadingInitState && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onClick: retryInitState,\n    message: errorLoadingInitState.message\n  });\n  const orderSummary = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Burger_OrderSummary_OrderSummary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    cancel: purchaseCloseHandler,\n    nextStep: purchaseContinueHandler,\n    total: totalPrice,\n    ingredients: ingredients\n  });\n  const purchasable = !!Object.values(ingredients).reduce((prev, next) => {\n    return prev + next;\n  }, 0);\n  const burger = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Burger_Burger__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    ingredients: ingredients\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Burger_BuildControls_BuildControls__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    loggedIn: isFullLoggedIn,\n    price: totalPrice,\n    controls: controls,\n    disabledState: disabledState,\n    purchasable: purchasable,\n    addIngrediend: onIngredientAdd,\n    removeIngrediend: onIngredientRemove,\n    purchaseHandler: purchaseOpenHandler\n  }));\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loadingInitState ? spiner : errorLoadingInitState ? error : isIngredients ? burger : null, ingredients && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    dropClick: purchaseCloseHandler,\n    show: purchasing\n  }, orderSummary));\n};\n\nconst mapStateToProps = state => {\n  return {\n    ingredients: Object(_store_selectors_burger__WEBPACK_IMPORTED_MODULE_10__[\"ingredients\"])(state),\n    totalPrice: Object(_store_selectors_burger__WEBPACK_IMPORTED_MODULE_10__[\"totalPrice\"])(state),\n    loadingInitState: Object(_store_selectors_burger__WEBPACK_IMPORTED_MODULE_10__[\"loadingInitState\"])(state),\n    errorLoadingInitState: Object(_store_selectors_burger__WEBPACK_IMPORTED_MODULE_10__[\"errorLoadingInitState\"])(state),\n    isFullLoggedIn: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_11__[\"isFullLoggedIn\"])(state)\n  };\n};\n\nconst mapStateDispatchToProps = dispatch => ({\n  onIngredientAdd: ingredient => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_7__[\"addIngredient\"])(ingredient)),\n  onIngredientRemove: ingredient => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_7__[\"removeIngredient\"])(ingredient)),\n  restoreInitState: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_7__[\"restoreInitState\"])()),\n  retryInitState: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_7__[\"initStateRetry\"])()),\n  initStateRequest: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_7__[\"initStateRequest\"])())\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps, mapStateDispatchToProps)(Object(_hoc_withErrorBoundary_withErrorBoundary__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(BurgerBuilder, {\n  module,\n  spareUi: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)\n})));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/containers/BurgerBuilder/BurgerBuilder.js?");

/***/ }),

/***/ "./src/containers/CheckOut/CheckOut.js":
/*!*********************************************!*\
  !*** ./src/containers/CheckOut/CheckOut.js ***!
  \*********************************************/
/*! exports provided: CheckOut, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CheckOut\", function() { return CheckOut; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Order_CheckOutSummary_CheckOutSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Order/CheckOutSummary/CheckOutSummary */ \"./src/components/Order/CheckOutSummary/CheckOutSummary.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hoc_withErrorBoundary_withErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hoc/withErrorBoundary/withErrorBoundary */ \"./src/hoc/withErrorBoundary/withErrorBoundary.js\");\n/* harmony import */ var _components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UI/SpareUi/SpareUi */ \"./src/components/UI/SpareUi/SpareUi.js\");\n/* harmony import */ var _store_selectors_burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/selectors/burger */ \"./src/store/selectors/burger.js\");\n/* harmony import */ var _components_Navigation_LazeRoute_LazeRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Navigation/LazeRoute/LazeRoute */ \"./src/components/Navigation/LazeRoute/LazeRoute.js\");\n/* harmony import */ var _context_indicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/indicator */ \"./src/context/indicator.js\");\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\n\n\n\n\n\n\n\n\n\nconst ContactData = react_loadable__WEBPACK_IMPORTED_MODULE_3___default()({\n  loader: () => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! ./ContactData/ContactData */ \"./src/containers/CheckOut/ContactData/ContactData.js\"))),\n  modules: ['./ContactData/ContactData'],\n  webpack: () => [/*require.resolve*/(/*! ./ContactData/ContactData */ \"./src/containers/CheckOut/ContactData/ContactData.js\")],\n  loading: _context_indicator__WEBPACK_IMPORTED_MODULE_8__[\"ProgressFallback\"]\n});\nconst CheckOut = ({\n  ingredients,\n  history,\n  match\n}) => {\n  const purchasable = !!Object.values(ingredients).reduce((prev, next) => {\n    return prev + next;\n  }, 0);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!purchasable) {\n      history.push('/');\n    } // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  }, []);\n\n  const checkOutHandler = () => {\n    history.goBack();\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, purchasable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Order_CheckOutSummary_CheckOutSummary__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onCheckOutCancel: checkOutHandler,\n    to: \"\".concat(match.url, \"/contactdata\"),\n    ingredients: ingredients\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation_LazeRoute_LazeRoute__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    path: \"\".concat(match.path, \"/:id\"),\n    component: ContactData\n  })));\n};\n\nconst mapStateToProps = state => {\n  return {\n    ingredients: Object(_store_selectors_burger__WEBPACK_IMPORTED_MODULE_6__[\"ingredients\"])(state),\n    totalPrice: Object(_store_selectors_burger__WEBPACK_IMPORTED_MODULE_6__[\"totalPrice\"])(state)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(Object(_hoc_withErrorBoundary_withErrorBoundary__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CheckOut, {\n  module: module,\n  spareUi: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n})));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/containers/CheckOut/CheckOut.js?");

/***/ }),

/***/ "./src/containers/CheckOut/ContactData/ContactData.js":
/*!************************************************************!*\
  !*** ./src/containers/CheckOut/ContactData/ContactData.js ***!
  \************************************************************/
/*! exports provided: ContactData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactData\", function() { return ContactData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hoc_withErrorBoundary_withErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/withErrorBoundary/withErrorBoundary */ \"./src/hoc/withErrorBoundary/withErrorBoundary.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/UI/SpareUi/SpareUi */ \"./src/components/UI/SpareUi/SpareUi.js\");\n/* harmony import */ var _ContactDataForm_ContactDataForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContactDataForm/ContactDataForm */ \"./src/containers/CheckOut/ContactData/ContactDataForm/ContactDataForm.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/actions */ \"./src/store/actions/index.js\");\n/* harmony import */ var _components_UI_Spiner_Spiner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/UI/Spiner/Spiner */ \"./src/components/UI/Spiner/Spiner.js\");\n/* harmony import */ var _store_selectors_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/selectors/order */ \"./src/store/selectors/order.js\");\n/* harmony import */ var _store_selectors_burger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/selectors/burger */ \"./src/store/selectors/burger.js\");\n/* harmony import */ var _store_selectors_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/selectors/auth */ \"./src/store/selectors/auth.js\");\n\n\n\n\n\n\n\n\n\n\nconst ContactData = ({\n  ingredients,\n  localId,\n  history,\n  orderForm,\n  orderFormConfigRequest,\n  orderFormErrors,\n  orderFormLoading,\n  orderFormLoadingError,\n  sendOrder,\n  totalPrice\n}) => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    orderFormConfigRequest(); // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n\n  const handleSubmit = (values, actions) => {\n    const order = {\n      ingredients: ingredients,\n      price: totalPrice,\n      orderData: values,\n      createdAt: new Date(),\n      localId: localId\n    };\n    sendOrder(order, actions, history);\n  };\n\n  const spiner = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Spiner_Spiner__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null);\n  const error = orderFormLoadingError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    message: orderFormLoadingError.message\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, orderFormLoading ? spiner : orderFormLoadingError ? error : orderForm && Object.keys(orderForm).length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactDataForm_ContactDataForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    error: orderFormErrors,\n    orderForm: orderForm,\n    onSubmit: handleSubmit\n  }));\n};\n\nconst mapStateToProps = state => {\n  return {\n    ingredients: Object(_store_selectors_burger__WEBPACK_IMPORTED_MODULE_8__[\"ingredients\"])(state),\n    totalPrice: Object(_store_selectors_burger__WEBPACK_IMPORTED_MODULE_8__[\"totalPrice\"])(state),\n    orderForm: Object(_store_selectors_order__WEBPACK_IMPORTED_MODULE_7__[\"orderForm\"])(state),\n    orderFormErrors: Object(_store_selectors_order__WEBPACK_IMPORTED_MODULE_7__[\"orderFormErrors\"])(state),\n    orderFormLoading: Object(_store_selectors_order__WEBPACK_IMPORTED_MODULE_7__[\"orderFormLoading\"])(state),\n    orderFormLoadingError: Object(_store_selectors_order__WEBPACK_IMPORTED_MODULE_7__[\"orderFormLoadingError\"])(state),\n    localId: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_9__[\"localId\"])(state)\n  };\n};\n\nconst mapDispatchToProps = dispatch => ({\n  orderFormConfigRequest: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_5__[\"orderFormRequest\"])()),\n  sendOrder: (order, actions, history) => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_5__[\"orderRequest\"])(order, actions, history))\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_hoc_withErrorBoundary_withErrorBoundary__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ContactData, {\n  module: module,\n  spareUi: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n})));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/containers/CheckOut/ContactData/ContactData.js?");

/***/ }),

/***/ "./src/containers/CheckOut/ContactData/ContactDataForm/ContactDataForm.js":
/*!********************************************************************************!*\
  !*** ./src/containers/CheckOut/ContactData/ContactDataForm/ContactDataForm.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContactDataForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactDataForm.module.scss */ \"./src/containers/CheckOut/ContactData/ContactDataForm/ContactDataForm.module.scss\");\n/* harmony import */ var _ContactDataForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ContactDataForm_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/UI/Input/Input */ \"./src/components/UI/Input/Input.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/UI/Button/Button */ \"./src/components/UI/Button/Button.js\");\n/* harmony import */ var _components_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/UI/Input/ErrorMessage/ErrorMessage */ \"./src/components/UI/Input/ErrorMessage/ErrorMessage.js\");\n/* harmony import */ var _components_UI_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/UI/Loader/Loader */ \"./src/components/UI/Loader/Loader.js\");\n\n\n\n\n\n\n\n\nconst ContactDataForm = ({\n  orderForm,\n  onSubmit,\n  error\n}) => {\n  const initState = Object.keys(orderForm).reduce((state, key) => {\n    return { ...state,\n      [key]: orderForm[key].value\n    };\n  }, {});\n  let formElementsArr = Object.keys(orderForm).map(key => orderForm[key]);\n  formElementsArr = formElementsArr.map(elem => {\n    return elem.elementType !== 'select' ? elem : { ...elem,\n      elementConfig: { ...elem.elementConfig,\n        options: Object.keys(elem.elementConfig.options).map(option => {\n          return elem.elementConfig.options[option];\n        })\n      }\n    };\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _ContactDataForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ContactData\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Enter you contact data\"), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: _ContactDataForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ErrorMessage\n  }, error.message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n    initialValues: initState,\n    validate: values => {\n      let errors = {};\n\n      if (!values.name.trim()) {\n        errors.name = {\n          required: true\n        };\n      }\n\n      if (!values.country.trim()) {\n        errors.country = {\n          required: true\n        };\n      }\n\n      if (!values.street.trim()) {\n        errors.street = {\n          required: true\n        };\n      }\n\n      if (!values.deliveryMethod.trim()) {\n        errors.deliveryMethod = {\n          required: true\n        };\n      }\n\n      if (!values.zipCode.trim()) {\n        errors.zipCode = {\n          required: true\n        };\n      } else if (values.zipCode.length < 5) {\n        errors.zipCode = {\n          minLenght: {\n            value: 5,\n            actulaValue: values.zipCode.length\n          }\n        };\n      } else if (values.zipCode.length > 5) {\n        errors.zipCode = {\n          maxLenght: {\n            value: 5,\n            actulaValue: values.zipCode.length\n          }\n        };\n      }\n\n      if (!values.email.trim()) {\n        errors.email = {\n          required: true\n        };\n      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n        errors.email = {\n          notMatched: true\n        };\n      }\n\n      return errors;\n    },\n    onSubmit: (values, actions) => {\n      onSubmit(values, actions);\n    }\n  }, ({\n    values,\n    errors,\n    status,\n    touched,\n    handleChange,\n    handleBlur,\n    handleSubmit,\n    isSubmitting,\n    isValidating,\n    validateForm,\n    setErrors,\n    setTouched\n  }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    noValidate: true,\n    onSubmit: handleSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"fieldset\", {\n    disabled: isSubmitting\n  }, formElementsArr.map((elem, i) => {\n    const name = elem.elementConfig.name || elem.elementConfig.config.name;\n    const invalid = errors[name] && touched[name] && errors[name];\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: elem.elementType + i\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      onBlur: handleBlur,\n      onChange: handleChange,\n      label: elem.label,\n      value: values[name],\n      invalid: invalid,\n      elementConfig: elem.elementConfig,\n      elementType: elem.elementType\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, invalid && errors[name].required && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, \"This field is required\"), invalid && errors[name].minLenght && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, \"Min length should be \", errors[name].minLenght.value, \", but actual value is \", errors[name].minLenght.actulaValue), invalid && errors[name].maxLenght && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, \"maxLenght length should be \", errors[name].maxLenght.value, \", but actual value is \", errors[name].maxLenght.actulaValue), invalid && errors[name].notMatched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, \"Wrong \", name)));\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    hidden: isSubmitting,\n    disabled: isSubmitting,\n    type: \"success\"\n  }, \"ORDER\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    center: true,\n    hidden: !isSubmitting\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactDataForm);\n\n//# sourceURL=webpack:///./src/containers/CheckOut/ContactData/ContactDataForm/ContactDataForm.js?");

/***/ }),

/***/ "./src/containers/CheckOut/ContactData/ContactDataForm/ContactDataForm.module.scss":
/*!*****************************************************************************************!*\
  !*** ./src/containers/CheckOut/ContactData/ContactDataForm/ContactDataForm.module.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"ContactData\": \"ContactDataForm_ContactData__2rKxQ\",\n\t\"Input\": \"ContactDataForm_Input__1pny_\",\n\t\"ErrorMessage\": \"ContactDataForm_ErrorMessage__3nRKY\"\n};\n\n//# sourceURL=webpack:///./src/containers/CheckOut/ContactData/ContactDataForm/ContactDataForm.module.scss?");

/***/ }),

/***/ "./src/containers/OrderDetails/OrderDetails.js":
/*!*****************************************************!*\
  !*** ./src/containers/OrderDetails/OrderDetails.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors */ \"./src/store/selectors/index.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions/index.js\");\n\n\n\n\n\n\nconst OrderDetails = ({\n  match,\n  returUrl,\n  order = {},\n  setSelectedOrder\n}) => {\n  const id = match.params.id;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setSelectedOrder(id);\n    return () => {\n      setSelectedOrder(null);\n    }; // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n  const {\n    country,\n    deliveryMethod,\n    email,\n    name,\n    zipCode,\n    street\n  } = order.orderData || {};\n  const date = new Date(order.createdAt).toDateString();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, order && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '10px auto',\n      maxWidth: '500px',\n      padding: '10px',\n      boxShadow: '0 2px 3px #ccc'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"date: \"), date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"name: \"), name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"country: \"), country), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"zipCode: \"), zipCode), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"street: \"), street), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"email: \"), email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"deliveryMethod: \"), deliveryMethod), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"email: \"), email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: returUrl\n  }, \"Close\"))));\n};\n\nconst mapStateToProps = state => ({\n  order: Object(_store_selectors__WEBPACK_IMPORTED_MODULE_3__[\"getOrder\"])(state)\n});\n\nconst mapDistapthToProps = dispatch => ({\n  setSelectedOrder: id => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__[\"ordersSetSelected\"])(id))\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDistapthToProps)(OrderDetails));\n\n//# sourceURL=webpack:///./src/containers/OrderDetails/OrderDetails.js?");

/***/ }),

/***/ "./src/containers/Orders/Orders.js":
/*!*****************************************!*\
  !*** ./src/containers/Orders/Orders.js ***!
  \*****************************************/
/*! exports provided: Orders, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Orders\", function() { return Orders; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Order_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Order/Order */ \"./src/components/Order/Order.js\");\n/* harmony import */ var _components_UI_Spiner_Spiner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UI/Spiner/Spiner */ \"./src/components/UI/Spiner/Spiner.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _OrderDetails_OrderDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OrderDetails/OrderDetails */ \"./src/containers/OrderDetails/OrderDetails.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hoc_withErrorBoundary_withErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hoc/withErrorBoundary/withErrorBoundary */ \"./src/hoc/withErrorBoundary/withErrorBoundary.js\");\n/* harmony import */ var _components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/SpareUi/SpareUi */ \"./src/components/UI/SpareUi/SpareUi.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions/index.js\");\n/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/selectors */ \"./src/store/selectors/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\n\nconst Orders = ({\n  errorLoadingOrders,\n  orders,\n  selectedOrder,\n  loadingOrders,\n  requestOrders,\n  abortOrdersRequest,\n  match,\n  retryOrders\n}) => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    requestOrders();\n    return () => {\n      abortOrdersRequest();\n    }; // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n  const sortedOrders = orders.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));\n  const spinner = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Spiner_Spiner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null);\n  const error = errorLoadingOrders && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onClick: retryOrders,\n    message: errorLoadingOrders.message\n  });\n  const ordersRender = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, sortedOrders.length > 0 ? sortedOrders.map(order => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    style: {\n      textDecoration: \"none\"\n    },\n    key: order.createdAt,\n    to: \"\".concat(match.url, \"/\").concat(order.id)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Order_Order__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    date: order.createdAt,\n    price: order.price,\n    ingredients: order.ingredients\n  }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      textAlign: 'center'\n    }\n  }, \"There is no orders yet.\"));\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"\".concat(match.path, \"/:id\"),\n    render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrderDetails_OrderDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _extends({\n      returUrl: match.url\n    }, props))))\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"\".concat(match.path),\n    exact: true,\n    render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, loadingOrders ? spinner : errorLoadingOrders ? error : !selectedOrder && ordersRender)\n  })));\n};\n\nconst mapStateToProps = state => ({\n  orders: Object(_store_selectors__WEBPACK_IMPORTED_MODULE_9__[\"getOrders\"])(state),\n  loadingOrders: Object(_store_selectors__WEBPACK_IMPORTED_MODULE_9__[\"loadingOrders\"])(state),\n  errorLoadingOrders: Object(_store_selectors__WEBPACK_IMPORTED_MODULE_9__[\"errorLoadingOrders\"])(state),\n  selectedOrder: Object(_store_selectors__WEBPACK_IMPORTED_MODULE_9__[\"selectedOrder\"])(state)\n});\n\nconst matDispathToProps = dispatch => ({\n  requestOrders: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_8__[\"ordersRequest\"])()),\n  retryOrders: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_8__[\"ordersRetry\"])()),\n  abortOrdersRequest: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_8__[\"ordersRequestAbort\"])())\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(mapStateToProps, matDispathToProps)(Object(_hoc_withErrorBoundary_withErrorBoundary__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Orders, {\n  module: module,\n  spareUi: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)\n})));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/containers/Orders/Orders.js?");

/***/ }),

/***/ "./src/containers/Profile/Profile.js":
/*!*******************************************!*\
  !*** ./src/containers/Profile/Profile.js ***!
  \*******************************************/
/*! exports provided: Profile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Profile\", function() { return Profile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_DeleteProfile_DeleteProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DeleteProfile/DeleteProfile */ \"./src/components/DeleteProfile/DeleteProfile.js\");\n/* harmony import */ var _store_selectors_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors/profile */ \"./src/store/selectors/profile.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions/index.js\");\n/* harmony import */ var _store_selectors_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/selectors/auth */ \"./src/store/selectors/auth.js\");\n/* harmony import */ var _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UserInfo/UserInfo */ \"./src/components/UserInfo/UserInfo.js\");\n/* harmony import */ var _hoc_withErrorBoundary_withErrorBoundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hoc/withErrorBoundary/withErrorBoundary */ \"./src/hoc/withErrorBoundary/withErrorBoundary.js\");\n/* harmony import */ var _components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/UI/SpareUi/SpareUi */ \"./src/components/UI/SpareUi/SpareUi.js\");\n\n\n\n\n\n\n\n\n\nconst Profile = ({\n  isDeleting,\n  isInfoUpdating,\n  deleteProfileErrors,\n  displayName,\n  photoUrl,\n  onDeleteRequest,\n  onProfileClearDeleteErrors,\n  onUpdateUserInfo,\n  updateUserError\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    displayName: displayName,\n    photoUrl: photoUrl,\n    errors: updateUserError,\n    loading: isInfoUpdating,\n    onSubmit: onUpdateUserInfo\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DeleteProfile_DeleteProfile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onClearErrors: onProfileClearDeleteErrors,\n    errors: deleteProfileErrors,\n    loading: isDeleting,\n    confirmDelete: onDeleteRequest\n  }));\n};\n\nconst mapStateToProps = state => ({\n  isDeleting: Object(_store_selectors_profile__WEBPACK_IMPORTED_MODULE_3__[\"isDeleting\"])(state),\n  deleteProfileErrors: Object(_store_selectors_profile__WEBPACK_IMPORTED_MODULE_3__[\"deleteProfileErrors\"])(state),\n  displayName: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_5__[\"displayName\"])(state),\n  photoUrl: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_5__[\"photoUrl\"])(state),\n  updateUserError: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_5__[\"updateUserError\"])(state),\n  isInfoUpdating: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_5__[\"isInfoUpdating\"])(state)\n});\n\nconst mapDispathToProps = dispatch => ({\n  onDeleteRequest: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__[\"profileDeleteRequest\"])()),\n  onProfileClearDeleteErrors: () => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__[\"profileClearDeleteErrors\"])()),\n  onUpdateUserInfo: ({\n    displayName,\n    photoUrl\n  }, actions) => dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__[\"authUpdateUserRequest\"])(displayName, photoUrl, actions))\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispathToProps)(Object(_hoc_withErrorBoundary_withErrorBoundary__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Profile, {\n  module,\n  spareUi: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_SpareUi_SpareUi__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)\n})));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/containers/Profile/Profile.js?");

/***/ }),

/***/ "./src/context/indicator.js":
/*!**********************************!*\
  !*** ./src/context/indicator.js ***!
  \**********************************/
/*! exports provided: IndicatorContext, IndicatorProvider, Progress, ProgressFallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IndicatorContext\", function() { return IndicatorContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IndicatorProvider\", function() { return IndicatorProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Progress\", function() { return Progress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProgressFallback\", function() { return ProgressFallback; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ \"@material-ui/core/LinearProgress\");\n/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst IndicatorContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst IndicatorProvider = ({\n  children\n}) => {\n  const [active, setActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const value = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => ({\n    active,\n    setActive\n  }), [active, setActive]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorContext.Provider, {\n    value: value\n  }, children);\n};\nconst Progress = props => {\n  const {\n    active\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(IndicatorContext);\n  return active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_1___default.a, props) : null;\n};\nconst ProgressFallback = () => {\n  const {\n    setActive\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(IndicatorContext);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setActive(true);\n    return () => setActive(false);\n  });\n  return null;\n};\n\n//# sourceURL=webpack:///./src/context/indicator.js?");

/***/ }),

/***/ "./src/hoc/Layout/Layout.js":
/*!**********************************!*\
  !*** ./src/hoc/Layout/Layout.js ***!
  \**********************************/
/*! exports provided: Layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.module.scss */ \"./src/hoc/Layout/Layout.module.scss\");\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navigation/Toolbar/Toolbar */ \"./src/components/Navigation/Toolbar/Toolbar.js\");\n/* harmony import */ var _components_Navigation_SideDrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Navigation/SideDrawer/SideDrawer */ \"./src/components/Navigation/SideDrawer/SideDrawer.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_selectors_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/selectors/auth */ \"./src/store/selectors/auth.js\");\n/* harmony import */ var _store_selectors_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/selectors/settings */ \"./src/store/selectors/settings.js\");\n/* harmony import */ var _store_actions_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/settings */ \"./src/store/actions/settings.js\");\n\n\n\n\n\n\n\n\nconst Layout = ({\n  isFullLoggedIn,\n  children,\n  currentLang,\n  displayName: name,\n  languages,\n  onLangChange,\n  photoUrl: url\n}) => {\n  const [isOpened, setIsOpened] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const dropClickHandler = () => {\n    setIsOpened(false);\n  };\n\n  const toggleClickHandler = () => {\n    setIsOpened(state => !state.isOpened);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    languages: languages,\n    onLangChange: onLangChange,\n    currentLang: currentLang,\n    name: name,\n    url: url,\n    loggedIn: isFullLoggedIn,\n    toggleClick: toggleClickHandler\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation_SideDrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    loggedIn: isFullLoggedIn,\n    isOpened: isOpened,\n    dropClick: dropClickHandler\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"content\"]\n  }, children));\n};\n\nconst mapStateToProps = state => ({\n  isFullLoggedIn: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_5__[\"isFullLoggedIn\"])(state),\n  displayName: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_5__[\"displayName\"])(state),\n  photoUrl: Object(_store_selectors_auth__WEBPACK_IMPORTED_MODULE_5__[\"photoUrl\"])(state),\n  currentLang: Object(_store_selectors_settings__WEBPACK_IMPORTED_MODULE_6__[\"currentLanguage\"])(state),\n  languages: Object(_store_selectors_settings__WEBPACK_IMPORTED_MODULE_6__[\"languages\"])(state)\n});\n\nconst mapStateToDispatch = dispatch => ({\n  onLangChange: lang => dispatch(Object(_store_actions_settings__WEBPACK_IMPORTED_MODULE_7__[\"settingsChangeLanguage\"])(lang))\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, mapStateToDispatch)(Layout));\n\n//# sourceURL=webpack:///./src/hoc/Layout/Layout.js?");

/***/ }),

/***/ "./src/hoc/Layout/Layout.module.scss":
/*!*******************************************!*\
  !*** ./src/hoc/Layout/Layout.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"Layout_content__17ViS\"\n};\n\n//# sourceURL=webpack:///./src/hoc/Layout/Layout.module.scss?");

/***/ }),

/***/ "./src/hoc/withErrorBoundary/withErrorBoundary.js":
/*!********************************************************!*\
  !*** ./src/hoc/withErrorBoundary/withErrorBoundary.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ErrorHandlers_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ErrorHandlers/ErrorBoundary */ \"./src/components/ErrorHandlers/ErrorBoundary.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((WrappedComponent, {\n  module = {},\n  spareUi\n} = {}) => {\n  const hocComponent = class extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ErrorHandlers_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        spareUi: spareUi,\n        module: module\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props));\n    }\n\n  };\n  return hocComponent;\n});\n\n//# sourceURL=webpack:///./src/hoc/withErrorBoundary/withErrorBoundary.js?");

/***/ }),

/***/ "./src/middleware/init-state-from-cookie.js":
/*!**************************************************!*\
  !*** ./src/middleware/init-state-from-cookie.js ***!
  \**************************************************/
/*! exports provided: initStateFromCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStateFromCookie\", function() { return initStateFromCookie; });\n/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cookie.service */ \"./src/services/cookie.service.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions */ \"./src/store/actions/index.js\");\n\n\nlet initialized = false;\nconst initStateFromCookie = store => next => action => {\n  if (initialized) {\n    return next(action);\n  }\n\n  initialized = true;\n  const currentLanguage = _services_cookie_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCookie('lang');\n  store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_1__[\"settingsInitStateFromCookie\"])({\n    currentLanguage: currentLanguage || ''\n  }));\n  return next(action);\n};\n\n//# sourceURL=webpack:///./src/middleware/init-state-from-cookie.js?");

/***/ }),

/***/ "./src/services/cookie.service.js":
/*!****************************************!*\
  !*** ./src/services/cookie.service.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass CookieService {\n  static getCookie(name) {\n    let matches = document.cookie.match(new RegExp( // eslint-disable-next-line no-useless-escape\n    \"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"));\n    return matches ? decodeURIComponent(matches[1]) : undefined;\n  }\n\n  static setCookie(name, value, options = {}) {\n    options = {\n      path: '/',\n      ...options\n    };\n\n    if (options.expires && options.expires.toUTCString) {\n      options.expires = options.expires.toUTCString();\n    }\n\n    let updatedCookie = encodeURIComponent(name) + \"=\" + encodeURIComponent(value);\n\n    for (let optionKey in options) {\n      updatedCookie += \"; \" + optionKey;\n      let optionValue = options[optionKey];\n\n      if (optionValue !== true) {\n        updatedCookie += \"=\" + optionValue;\n      }\n    }\n\n    document.cookie = updatedCookie;\n  }\n\n  static deleteCookie(name) {\n    CookieService.setCookie(name, \"\", {\n      'max-age': -1\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CookieService);\n\n//# sourceURL=webpack:///./src/services/cookie.service.js?");

/***/ }),

/***/ "./src/services/errorNotify.service.js":
/*!*********************************************!*\
  !*** ./src/services/errorNotify.service.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _axios_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axios/error */ \"./src/axios/error.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst retryCount = 2;\n\nclass ErrorNotifyService {\n  static sendNetworkErrorDetails(e) {\n    _axios_error__WEBPACK_IMPORTED_MODULE_0__[\"error\"].post('/app-network-errors.json', { ...e,\n      date: new Date()\n    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"retry\"])(retryCount)).subscribe();\n  }\n\n  static sendErrorDetails(e) {\n    _axios_error__WEBPACK_IMPORTED_MODULE_0__[\"error\"].post('/app-errors.json', { ...e,\n      date: new Date()\n    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"retry\"])(retryCount)).subscribe();\n  }\n\n  static sendNetworkErrors(e) {\n    _axios_error__WEBPACK_IMPORTED_MODULE_0__[\"error\"].post('/network-errors.json', {\n      error: e,\n      date: new Date()\n    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"retry\"])(retryCount)).subscribe();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorNotifyService);\n\n//# sourceURL=webpack:///./src/services/errorNotify.service.js?");

/***/ }),

/***/ "./src/shared/index.js":
/*!*****************************!*\
  !*** ./src/shared/index.js ***!
  \*****************************/
/*! exports provided: debounce, loadImageValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/shared/utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__[\"debounce\"]; });\n\n/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validators */ \"./src/shared/validators.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loadImageValidator\", function() { return _validators__WEBPACK_IMPORTED_MODULE_1__[\"loadImageValidator\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/shared/index.js?");

/***/ }),

/***/ "./src/shared/utils.js":
/*!*****************************!*\
  !*** ./src/shared/utils.js ***!
  \*****************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\nconst debounce = (func, wait, immediate) => {\n  var timeout;\n  return function () {\n    var context = this,\n        args = arguments;\n\n    var later = function () {\n      timeout = null;\n      if (!immediate) return func.apply(context, args);\n    };\n\n    var callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n    if (callNow) return func.apply(context, args);\n  };\n};\n\n//# sourceURL=webpack:///./src/shared/utils.js?");

/***/ }),

/***/ "./src/shared/validators.js":
/*!**********************************!*\
  !*** ./src/shared/validators.js ***!
  \**********************************/
/*! exports provided: loadImageValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImageValidator\", function() { return loadImageValidator; });\nconst loadImageValidator = image => new Promise((resolve, reject) => {\n  image.addEventListener('load', function me() {\n    if ('naturalHeight' in image) {\n      if (image.naturalHeight === 1 || image.naturalWidth === 1) {\n        image.removeEventListener('load', me);\n        reject();\n      }\n    }\n\n    image.removeEventListener('load', me);\n    resolve();\n  });\n  image.addEventListener('error', function me() {\n    image.removeEventListener('error', me);\n    reject();\n  });\n});\n\n//# sourceURL=webpack:///./src/shared/validators.js?");

/***/ }),

/***/ "./src/store/actions/auth.js":
/*!***********************************!*\
  !*** ./src/store/actions/auth.js ***!
  \***********************************/
/*! exports provided: AUTH_REQUEST, AUTH_SUCCESS, AUTH_NOT_CONFIRMED, AUTH_SHOW_NOT_CONFIRMED_MESSAGE, AUTH_HIDE_NOT_CONFIRMED_MESSAGE, AUTH_FAIL, AUTH_ERRORS_CLEAR, AUTH_REFRESH_TOKEN, AUTH_LOGOUT, AUTH_LOGGEG_LOCAL, AUTH_GET_USER_REQUEST, AUTH_GET_USER_SUCCESS, AUTH_GET_USER_FAIL, AUTH_REFRESH_TOKEN_REQUEST, AUTH_REFRESH_TOKEN_SUCCESS, AUTH_REFRESH_TOKEN_FAIL, AUTH_UPDATE_USER_REQUEST, AUTH_UPDATE_USER_SUCCESS, AUTH_UPDATE_USER_FAIL, AUTH_VERIFY_EMAIL_REQUEST, AUTH_VERIFY_EMAIL_SUCCESS, AUTH_VERIFY_EMAIL_FAIL, AUTH_LEAVE_LOGIN, AUTH_SERVER_IS_FULL_LOGGED, authLeaveLgin, authRequest, authSuccess, authFail, authNotConfirmed, authShowNotConfirmedMessage, authHideNotConfirmedMessage, autErrorsClear, authRefreshToken, authLogout, authLoggedLocal, authGetUserRequest, authGetUserSuccess, authGetUserFail, authRefreshTokenRequest, authRefreshTokenSuccess, authRefreshTokenFail, authUpdateUserRequest, authUpdateUserSuccess, authUpdateUserFail, authVerifyEmailRequest, authVerifyEmailSuccess, authVerifyEmailFail, authServerIsFullLogged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_REQUEST\", function() { return AUTH_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_SUCCESS\", function() { return AUTH_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_NOT_CONFIRMED\", function() { return AUTH_NOT_CONFIRMED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_SHOW_NOT_CONFIRMED_MESSAGE\", function() { return AUTH_SHOW_NOT_CONFIRMED_MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_HIDE_NOT_CONFIRMED_MESSAGE\", function() { return AUTH_HIDE_NOT_CONFIRMED_MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_FAIL\", function() { return AUTH_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_ERRORS_CLEAR\", function() { return AUTH_ERRORS_CLEAR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_REFRESH_TOKEN\", function() { return AUTH_REFRESH_TOKEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_LOGOUT\", function() { return AUTH_LOGOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_LOGGEG_LOCAL\", function() { return AUTH_LOGGEG_LOCAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_GET_USER_REQUEST\", function() { return AUTH_GET_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_GET_USER_SUCCESS\", function() { return AUTH_GET_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_GET_USER_FAIL\", function() { return AUTH_GET_USER_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_REFRESH_TOKEN_REQUEST\", function() { return AUTH_REFRESH_TOKEN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_REFRESH_TOKEN_SUCCESS\", function() { return AUTH_REFRESH_TOKEN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_REFRESH_TOKEN_FAIL\", function() { return AUTH_REFRESH_TOKEN_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_UPDATE_USER_REQUEST\", function() { return AUTH_UPDATE_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_UPDATE_USER_SUCCESS\", function() { return AUTH_UPDATE_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_UPDATE_USER_FAIL\", function() { return AUTH_UPDATE_USER_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_VERIFY_EMAIL_REQUEST\", function() { return AUTH_VERIFY_EMAIL_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_VERIFY_EMAIL_SUCCESS\", function() { return AUTH_VERIFY_EMAIL_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_VERIFY_EMAIL_FAIL\", function() { return AUTH_VERIFY_EMAIL_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_LEAVE_LOGIN\", function() { return AUTH_LEAVE_LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_SERVER_IS_FULL_LOGGED\", function() { return AUTH_SERVER_IS_FULL_LOGGED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authLeaveLgin\", function() { return authLeaveLgin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authRequest\", function() { return authRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authSuccess\", function() { return authSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authFail\", function() { return authFail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authNotConfirmed\", function() { return authNotConfirmed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authShowNotConfirmedMessage\", function() { return authShowNotConfirmedMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authHideNotConfirmedMessage\", function() { return authHideNotConfirmedMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"autErrorsClear\", function() { return autErrorsClear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authRefreshToken\", function() { return authRefreshToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authLogout\", function() { return authLogout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authLoggedLocal\", function() { return authLoggedLocal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authGetUserRequest\", function() { return authGetUserRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authGetUserSuccess\", function() { return authGetUserSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authGetUserFail\", function() { return authGetUserFail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authRefreshTokenRequest\", function() { return authRefreshTokenRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authRefreshTokenSuccess\", function() { return authRefreshTokenSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authRefreshTokenFail\", function() { return authRefreshTokenFail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authUpdateUserRequest\", function() { return authUpdateUserRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authUpdateUserSuccess\", function() { return authUpdateUserSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authUpdateUserFail\", function() { return authUpdateUserFail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authVerifyEmailRequest\", function() { return authVerifyEmailRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authVerifyEmailSuccess\", function() { return authVerifyEmailSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authVerifyEmailFail\", function() { return authVerifyEmailFail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authServerIsFullLogged\", function() { return authServerIsFullLogged; });\nconst AUTH_REQUEST = 'AUTH_REQUEST';\nconst AUTH_SUCCESS = 'AUTH_SUCCESS';\nconst AUTH_NOT_CONFIRMED = 'AUTH_NOT_CONFIRMED';\nconst AUTH_SHOW_NOT_CONFIRMED_MESSAGE = 'AUTH_SHOW_NOT_CONFIRMED_MESSAGE';\nconst AUTH_HIDE_NOT_CONFIRMED_MESSAGE = 'AUTH_HIDE_NOT_CONFIRMED_MESSAGE';\nconst AUTH_FAIL = 'AUTH_FAIL';\nconst AUTH_ERRORS_CLEAR = 'AUTH_ERRORS_CLEAR';\nconst AUTH_REFRESH_TOKEN = 'AUTH_REFRESH_TOKEN';\nconst AUTH_LOGOUT = 'AUTH_LOGOUT';\nconst AUTH_LOGGEG_LOCAL = 'AUTH_LOGGEG_LOCAL';\nconst AUTH_GET_USER_REQUEST = 'AUTH_GET_USER_REQUEST';\nconst AUTH_GET_USER_SUCCESS = 'AUTH_GET_USER_SUCCESS';\nconst AUTH_GET_USER_FAIL = 'AUTH_GET_USER_FAIL';\nconst AUTH_REFRESH_TOKEN_REQUEST = 'AUTH_REFRESH_TOKEN_REQUEST';\nconst AUTH_REFRESH_TOKEN_SUCCESS = 'AUTH_REFRESH_TOKEN_SUCCESS';\nconst AUTH_REFRESH_TOKEN_FAIL = 'AUTH_REFRESH_TOKEN_FAIL';\nconst AUTH_UPDATE_USER_REQUEST = 'AUTH_UPDATE_USER_REQUEST';\nconst AUTH_UPDATE_USER_SUCCESS = 'AUTH_UPDATE_USER_SUCCESS';\nconst AUTH_UPDATE_USER_FAIL = 'AUTH_UPDATE_USER_FAIL';\nconst AUTH_VERIFY_EMAIL_REQUEST = 'AUTH_VERIFY_EMAIL_REQUEST';\nconst AUTH_VERIFY_EMAIL_SUCCESS = 'AUTH_VERIFY_EMAIL_SUCCESS';\nconst AUTH_VERIFY_EMAIL_FAIL = 'AUTH_VERIFY_EMAIL_FAIL';\nconst AUTH_LEAVE_LOGIN = 'AUTH_LEAVE_LOGIN';\nconst AUTH_SERVER_IS_FULL_LOGGED = 'AUTH_SERVER_IS_FULL_LOGGED';\nconst authLeaveLgin = () => ({\n  type: AUTH_LEAVE_LOGIN\n});\nconst authRequest = (authType, credentials, actions, history) => ({\n  type: AUTH_REQUEST,\n  payload: {\n    authType,\n    credentials,\n    actions,\n    history\n  }\n});\nconst authSuccess = (email, idToken, expiresIn, refreshToken, localId) => ({\n  type: AUTH_SUCCESS,\n  payload: {\n    email,\n    idToken,\n    expiresIn,\n    refreshToken,\n    localId\n  }\n});\nconst authFail = error => ({\n  type: AUTH_FAIL,\n  payload: {\n    error\n  }\n});\nconst authNotConfirmed = (email, idToken, expiresIn, refreshToken, localId, authType) => ({\n  type: AUTH_NOT_CONFIRMED,\n  payload: {\n    email,\n    idToken,\n    expiresIn,\n    refreshToken,\n    localId,\n    authType\n  }\n});\nconst authShowNotConfirmedMessage = () => ({\n  type: AUTH_SHOW_NOT_CONFIRMED_MESSAGE\n});\nconst authHideNotConfirmedMessage = () => ({\n  type: AUTH_HIDE_NOT_CONFIRMED_MESSAGE\n});\nconst autErrorsClear = () => ({\n  type: AUTH_ERRORS_CLEAR\n});\nconst authRefreshToken = () => ({\n  type: AUTH_REFRESH_TOKEN\n});\nconst authLogout = () => ({\n  type: AUTH_LOGOUT\n});\nconst authLoggedLocal = (email, idToken, localId) => ({\n  type: AUTH_LOGGEG_LOCAL,\n  payload: {\n    email,\n    idToken,\n    localId\n  }\n});\nconst authGetUserRequest = idToken => ({\n  type: AUTH_GET_USER_REQUEST,\n  payload: {\n    idToken\n  }\n});\nconst authGetUserSuccess = user => ({\n  type: AUTH_GET_USER_SUCCESS,\n  payload: {\n    user\n  }\n});\nconst authGetUserFail = error => ({\n  type: AUTH_GET_USER_FAIL,\n  payload: {\n    error\n  }\n});\nconst authRefreshTokenRequest = idToken => ({\n  type: AUTH_REFRESH_TOKEN_REQUEST,\n  payload: {\n    idToken\n  }\n});\nconst authRefreshTokenSuccess = (idToken, refreshToken, expiresIn) => ({\n  type: AUTH_REFRESH_TOKEN_SUCCESS,\n  payload: {\n    idToken,\n    refreshToken,\n    expiresIn\n  }\n});\nconst authRefreshTokenFail = error => ({\n  type: AUTH_REFRESH_TOKEN_FAIL,\n  payload: {\n    error\n  }\n});\nconst authUpdateUserRequest = (displayName, photoUrl, actions) => ({\n  type: AUTH_UPDATE_USER_REQUEST,\n  payload: {\n    displayName,\n    photoUrl,\n    actions\n  }\n});\nconst authUpdateUserSuccess = (displayName, photoUrl) => ({\n  type: AUTH_UPDATE_USER_SUCCESS,\n  payload: {\n    displayName,\n    photoUrl\n  }\n});\nconst authUpdateUserFail = error => ({\n  type: AUTH_UPDATE_USER_FAIL,\n  payload: {\n    error\n  }\n});\nconst authVerifyEmailRequest = payload => ({\n  type: AUTH_VERIFY_EMAIL_REQUEST\n});\nconst authVerifyEmailSuccess = payload => ({\n  type: AUTH_VERIFY_EMAIL_SUCCESS\n});\nconst authVerifyEmailFail = error => ({\n  type: AUTH_VERIFY_EMAIL_FAIL,\n  payload: {\n    error\n  }\n});\nconst authServerIsFullLogged = () => ({\n  type: AUTH_SERVER_IS_FULL_LOGGED\n});\n\n//# sourceURL=webpack:///./src/store/actions/auth.js?");

/***/ }),

/***/ "./src/store/actions/burger.js":
/*!*************************************!*\
  !*** ./src/store/actions/burger.js ***!
  \*************************************/
/*! exports provided: ADD_INGREDIENT, REMOVE_INGREDIENT, RESTORE_INIT_STATE, INIT_STATE_REQUEST, INIT_STATE_SUCCESS, INIT_STATE_FAIL, INIT_STATE_RETRY, INIT_STATE_LOADED, initStateRequest, initStateSuccess, initStateLoaded, initStateFail, initStateRetry, addIngredient, removeIngredient, restoreInitState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_INGREDIENT\", function() { return ADD_INGREDIENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_INGREDIENT\", function() { return REMOVE_INGREDIENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESTORE_INIT_STATE\", function() { return RESTORE_INIT_STATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE_REQUEST\", function() { return INIT_STATE_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE_SUCCESS\", function() { return INIT_STATE_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE_FAIL\", function() { return INIT_STATE_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE_RETRY\", function() { return INIT_STATE_RETRY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE_LOADED\", function() { return INIT_STATE_LOADED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStateRequest\", function() { return initStateRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStateSuccess\", function() { return initStateSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStateLoaded\", function() { return initStateLoaded; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStateFail\", function() { return initStateFail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStateRetry\", function() { return initStateRetry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addIngredient\", function() { return addIngredient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeIngredient\", function() { return removeIngredient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restoreInitState\", function() { return restoreInitState; });\nconst ADD_INGREDIENT = 'ADD_INGREDIENT';\nconst REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';\nconst RESTORE_INIT_STATE = 'RESTORE_INIT_STATE';\nconst INIT_STATE_REQUEST = 'INIT_STATE_REQUEST';\nconst INIT_STATE_SUCCESS = 'INIT_STATE_SUCCESS';\nconst INIT_STATE_FAIL = 'INIT_STATE_FAIL';\nconst INIT_STATE_RETRY = 'INIT_STATE_RETRY';\nconst INIT_STATE_LOADED = 'INIT_STATE_LOADED';\nconst initStateRequest = () => ({\n  type: INIT_STATE_REQUEST\n});\nconst initStateSuccess = ({\n  config,\n  ingredients,\n  price\n}) => ({\n  type: INIT_STATE_SUCCESS,\n  payload: {\n    config,\n    ingredients,\n    price\n  }\n});\nconst initStateLoaded = () => ({\n  type: INIT_STATE_LOADED\n});\nconst initStateFail = error => ({\n  type: INIT_STATE_FAIL,\n  payload: {\n    error\n  }\n});\nconst initStateRetry = () => ({\n  type: INIT_STATE_RETRY\n});\nconst addIngredient = ingredient => ({\n  type: ADD_INGREDIENT,\n  payload: {\n    ingredient\n  }\n});\nconst removeIngredient = ingredient => ({\n  type: REMOVE_INGREDIENT,\n  payload: {\n    ingredient\n  }\n});\nconst restoreInitState = () => ({\n  type: RESTORE_INIT_STATE\n});\n\n//# sourceURL=webpack:///./src/store/actions/burger.js?");

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/*! exports provided: AUTH_REQUEST, AUTH_SUCCESS, AUTH_NOT_CONFIRMED, AUTH_SHOW_NOT_CONFIRMED_MESSAGE, AUTH_HIDE_NOT_CONFIRMED_MESSAGE, AUTH_FAIL, AUTH_ERRORS_CLEAR, AUTH_REFRESH_TOKEN, AUTH_LOGOUT, AUTH_LOGGEG_LOCAL, AUTH_GET_USER_REQUEST, AUTH_GET_USER_SUCCESS, AUTH_GET_USER_FAIL, AUTH_REFRESH_TOKEN_REQUEST, AUTH_REFRESH_TOKEN_SUCCESS, AUTH_REFRESH_TOKEN_FAIL, AUTH_UPDATE_USER_REQUEST, AUTH_UPDATE_USER_SUCCESS, AUTH_UPDATE_USER_FAIL, AUTH_VERIFY_EMAIL_REQUEST, AUTH_VERIFY_EMAIL_SUCCESS, AUTH_VERIFY_EMAIL_FAIL, AUTH_LEAVE_LOGIN, AUTH_SERVER_IS_FULL_LOGGED, authLeaveLgin, authRequest, authSuccess, authFail, authNotConfirmed, authShowNotConfirmedMessage, authHideNotConfirmedMessage, autErrorsClear, authRefreshToken, authLogout, authLoggedLocal, authGetUserRequest, authGetUserSuccess, authGetUserFail, authRefreshTokenRequest, authRefreshTokenSuccess, authRefreshTokenFail, authUpdateUserRequest, authUpdateUserSuccess, authUpdateUserFail, authVerifyEmailRequest, authVerifyEmailSuccess, authVerifyEmailFail, authServerIsFullLogged, ADD_INGREDIENT, REMOVE_INGREDIENT, RESTORE_INIT_STATE, INIT_STATE_REQUEST, INIT_STATE_SUCCESS, INIT_STATE_FAIL, INIT_STATE_RETRY, INIT_STATE_LOADED, initStateRequest, initStateSuccess, initStateLoaded, initStateFail, initStateRetry, addIngredient, removeIngredient, restoreInitState, ORDER_FORM_REQUEST, ORDER_FORM_SUCCESS, ORDER_FORM_FAIL, ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAIL, orderFormRequest, orderFormSuccess, orderFormFail, orderRequest, orderSuccess, orderFail, ORDERS_REQUEST, ORDERS_SUCCESS, ORDERS_FAIL, ORDERS_RETRY, ORDERS_SET_SELECTED, ORDERS_REQUES_ABORT, ordersRequest, ordersSuccess, ordersFail, ordersRetry, ordersRequestAbort, ordersSetSelected, PROFILE_DELETE_REQUEST, PROFILE_DELETE_SUCCESS, PROFILE_DELETE_FAIL, PROFILE_CLEAR_DELETE_ERRORS, profileDeleteRequest, profileDeleteSuccess, profileDeleteFail, profileClearDeleteErrors, SETTINGS_CHANGE_LANGUAGE, SETTINGS_INIT_STATE_FROM_COOKIE, settingsChangeLanguage, settingsInitStateFromCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ \"./src/store/actions/auth.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_REQUEST\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_REQUEST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_SUCCESS\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_NOT_CONFIRMED\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_NOT_CONFIRMED\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_SHOW_NOT_CONFIRMED_MESSAGE\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_SHOW_NOT_CONFIRMED_MESSAGE\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_HIDE_NOT_CONFIRMED_MESSAGE\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_HIDE_NOT_CONFIRMED_MESSAGE\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_FAIL\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_FAIL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_ERRORS_CLEAR\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_ERRORS_CLEAR\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_REFRESH_TOKEN\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_REFRESH_TOKEN\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_LOGOUT\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_LOGOUT\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_LOGGEG_LOCAL\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_LOGGEG_LOCAL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_GET_USER_REQUEST\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_GET_USER_REQUEST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_GET_USER_SUCCESS\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_GET_USER_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_GET_USER_FAIL\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_GET_USER_FAIL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_REFRESH_TOKEN_REQUEST\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_REFRESH_TOKEN_REQUEST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_REFRESH_TOKEN_SUCCESS\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_REFRESH_TOKEN_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_REFRESH_TOKEN_FAIL\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_REFRESH_TOKEN_FAIL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_UPDATE_USER_REQUEST\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_UPDATE_USER_REQUEST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_UPDATE_USER_SUCCESS\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_UPDATE_USER_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_UPDATE_USER_FAIL\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_UPDATE_USER_FAIL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_VERIFY_EMAIL_REQUEST\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_VERIFY_EMAIL_REQUEST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_VERIFY_EMAIL_SUCCESS\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_VERIFY_EMAIL_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_VERIFY_EMAIL_FAIL\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_VERIFY_EMAIL_FAIL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_LEAVE_LOGIN\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_LEAVE_LOGIN\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AUTH_SERVER_IS_FULL_LOGGED\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_SERVER_IS_FULL_LOGGED\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authLeaveLgin\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authLeaveLgin\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authRequest\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authSuccess\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authSuccess\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authFail\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authFail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authNotConfirmed\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authNotConfirmed\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authShowNotConfirmedMessage\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authShowNotConfirmedMessage\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authHideNotConfirmedMessage\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authHideNotConfirmedMessage\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"autErrorsClear\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"autErrorsClear\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authRefreshToken\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authRefreshToken\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authLogout\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authLogout\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authLoggedLocal\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authLoggedLocal\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authGetUserRequest\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authGetUserRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authGetUserSuccess\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authGetUserSuccess\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authGetUserFail\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authGetUserFail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authRefreshTokenRequest\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authRefreshTokenRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authRefreshTokenSuccess\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authRefreshTokenSuccess\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authRefreshTokenFail\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authRefreshTokenFail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authUpdateUserRequest\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authUpdateUserRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authUpdateUserSuccess\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authUpdateUserSuccess\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authUpdateUserFail\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authUpdateUserFail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authVerifyEmailRequest\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authVerifyEmailRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authVerifyEmailSuccess\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authVerifyEmailSuccess\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authVerifyEmailFail\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authVerifyEmailFail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authServerIsFullLogged\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authServerIsFullLogged\"]; });\n\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger */ \"./src/store/actions/burger.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ADD_INGREDIENT\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"ADD_INGREDIENT\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_INGREDIENT\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"REMOVE_INGREDIENT\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RESTORE_INIT_STATE\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"RESTORE_INIT_STATE\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE_REQUEST\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"INIT_STATE_REQUEST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE_SUCCESS\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"INIT_STATE_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE_FAIL\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"INIT_STATE_FAIL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE_RETRY\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"INIT_STATE_RETRY\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE_LOADED\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"INIT_STATE_LOADED\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initStateRequest\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"initStateRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initStateSuccess\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"initStateSuccess\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initStateLoaded\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"initStateLoaded\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initStateFail\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"initStateFail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initStateRetry\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"initStateRetry\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addIngredient\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"addIngredient\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"removeIngredient\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"removeIngredient\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"restoreInitState\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"restoreInitState\"]; });\n\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ \"./src/store/actions/order.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDER_FORM_REQUEST\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"ORDER_FORM_REQUEST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDER_FORM_SUCCESS\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"ORDER_FORM_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDER_FORM_FAIL\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"ORDER_FORM_FAIL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDER_REQUEST\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"ORDER_REQUEST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDER_SUCCESS\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"ORDER_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDER_FAIL\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"ORDER_FAIL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderFormRequest\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"orderFormRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderFormSuccess\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"orderFormSuccess\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderFormFail\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"orderFormFail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderRequest\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"orderRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderSuccess\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"orderSuccess\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderFail\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"orderFail\"]; });\n\n/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders */ \"./src/store/actions/orders.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_REQUEST\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ORDERS_REQUEST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_SUCCESS\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ORDERS_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_FAIL\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ORDERS_FAIL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_RETRY\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ORDERS_RETRY\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_SET_SELECTED\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ORDERS_SET_SELECTED\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_REQUES_ABORT\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ORDERS_REQUES_ABORT\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ordersRequest\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ordersRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ordersSuccess\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ordersSuccess\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ordersFail\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ordersFail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ordersRetry\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ordersRetry\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ordersRequestAbort\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ordersRequestAbort\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ordersSetSelected\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ordersSetSelected\"]; });\n\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile */ \"./src/store/actions/profile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PROFILE_DELETE_REQUEST\", function() { return _profile__WEBPACK_IMPORTED_MODULE_4__[\"PROFILE_DELETE_REQUEST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PROFILE_DELETE_SUCCESS\", function() { return _profile__WEBPACK_IMPORTED_MODULE_4__[\"PROFILE_DELETE_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PROFILE_DELETE_FAIL\", function() { return _profile__WEBPACK_IMPORTED_MODULE_4__[\"PROFILE_DELETE_FAIL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PROFILE_CLEAR_DELETE_ERRORS\", function() { return _profile__WEBPACK_IMPORTED_MODULE_4__[\"PROFILE_CLEAR_DELETE_ERRORS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"profileDeleteRequest\", function() { return _profile__WEBPACK_IMPORTED_MODULE_4__[\"profileDeleteRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"profileDeleteSuccess\", function() { return _profile__WEBPACK_IMPORTED_MODULE_4__[\"profileDeleteSuccess\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"profileDeleteFail\", function() { return _profile__WEBPACK_IMPORTED_MODULE_4__[\"profileDeleteFail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"profileClearDeleteErrors\", function() { return _profile__WEBPACK_IMPORTED_MODULE_4__[\"profileClearDeleteErrors\"]; });\n\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ \"./src/store/actions/settings.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SETTINGS_CHANGE_LANGUAGE\", function() { return _settings__WEBPACK_IMPORTED_MODULE_5__[\"SETTINGS_CHANGE_LANGUAGE\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SETTINGS_INIT_STATE_FROM_COOKIE\", function() { return _settings__WEBPACK_IMPORTED_MODULE_5__[\"SETTINGS_INIT_STATE_FROM_COOKIE\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"settingsChangeLanguage\", function() { return _settings__WEBPACK_IMPORTED_MODULE_5__[\"settingsChangeLanguage\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"settingsInitStateFromCookie\", function() { return _settings__WEBPACK_IMPORTED_MODULE_5__[\"settingsInitStateFromCookie\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/store/actions/index.js?");

/***/ }),

/***/ "./src/store/actions/order.js":
/*!************************************!*\
  !*** ./src/store/actions/order.js ***!
  \************************************/
/*! exports provided: ORDER_FORM_REQUEST, ORDER_FORM_SUCCESS, ORDER_FORM_FAIL, ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAIL, orderFormRequest, orderFormSuccess, orderFormFail, orderRequest, orderSuccess, orderFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDER_FORM_REQUEST\", function() { return ORDER_FORM_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDER_FORM_SUCCESS\", function() { return ORDER_FORM_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDER_FORM_FAIL\", function() { return ORDER_FORM_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDER_REQUEST\", function() { return ORDER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDER_SUCCESS\", function() { return ORDER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDER_FAIL\", function() { return ORDER_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderFormRequest\", function() { return orderFormRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderFormSuccess\", function() { return orderFormSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderFormFail\", function() { return orderFormFail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderRequest\", function() { return orderRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderSuccess\", function() { return orderSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderFail\", function() { return orderFail; });\nconst ORDER_FORM_REQUEST = 'ORDER_FORM_REQUEST';\nconst ORDER_FORM_SUCCESS = 'ORDER_FORM_SUCCESS';\nconst ORDER_FORM_FAIL = 'ORDER_FORM_FAIL';\nconst ORDER_REQUEST = 'ORDER_REQUEST';\nconst ORDER_SUCCESS = 'ORDER_SUCCESS';\nconst ORDER_FAIL = 'ORDER_FAIL';\nconst orderFormRequest = () => ({\n  type: ORDER_FORM_REQUEST\n});\nconst orderFormSuccess = orderForm => ({\n  type: ORDER_FORM_SUCCESS,\n  payload: {\n    orderForm\n  }\n});\nconst orderFormFail = error => ({\n  type: ORDER_FORM_FAIL,\n  payload: {\n    error\n  }\n});\nconst orderRequest = (order, actions, history) => ({\n  type: ORDER_REQUEST,\n  payload: {\n    order,\n    actions,\n    history\n  }\n});\nconst orderSuccess = result => ({\n  type: ORDER_SUCCESS,\n  payload: {\n    result\n  }\n});\nconst orderFail = error => ({\n  type: ORDER_FAIL,\n  payload: {\n    error\n  }\n});\n\n//# sourceURL=webpack:///./src/store/actions/order.js?");

/***/ }),

/***/ "./src/store/actions/orders.js":
/*!*************************************!*\
  !*** ./src/store/actions/orders.js ***!
  \*************************************/
/*! exports provided: ORDERS_REQUEST, ORDERS_SUCCESS, ORDERS_FAIL, ORDERS_RETRY, ORDERS_SET_SELECTED, ORDERS_REQUES_ABORT, ordersRequest, ordersSuccess, ordersFail, ordersRetry, ordersRequestAbort, ordersSetSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_REQUEST\", function() { return ORDERS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_SUCCESS\", function() { return ORDERS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_FAIL\", function() { return ORDERS_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_RETRY\", function() { return ORDERS_RETRY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_SET_SELECTED\", function() { return ORDERS_SET_SELECTED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDERS_REQUES_ABORT\", function() { return ORDERS_REQUES_ABORT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ordersRequest\", function() { return ordersRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ordersSuccess\", function() { return ordersSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ordersFail\", function() { return ordersFail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ordersRetry\", function() { return ordersRetry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ordersRequestAbort\", function() { return ordersRequestAbort; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ordersSetSelected\", function() { return ordersSetSelected; });\nconst ORDERS_REQUEST = 'ORDERS_REQUEST';\nconst ORDERS_SUCCESS = 'ORDERS_SUCCESS';\nconst ORDERS_FAIL = 'ORDERS_FAIL';\nconst ORDERS_RETRY = 'ORDERS_RETRY';\nconst ORDERS_SET_SELECTED = 'ORDERS_SET_SELECTED';\nconst ORDERS_REQUES_ABORT = 'ORDERS_REQUES_ABORT';\nconst ordersRequest = () => ({\n  type: ORDERS_REQUEST\n});\nconst ordersSuccess = orders => ({\n  type: ORDERS_SUCCESS,\n  payload: {\n    orders,\n    ordersById: Object.keys(orders)\n  }\n});\nconst ordersFail = error => ({\n  type: ORDERS_FAIL,\n  payload: {\n    error\n  }\n});\nconst ordersRetry = () => ({\n  type: ORDERS_RETRY\n});\nconst ordersRequestAbort = () => ({\n  type: ORDERS_REQUES_ABORT\n});\nconst ordersSetSelected = id => ({\n  type: ORDERS_SET_SELECTED,\n  payload: {\n    id\n  }\n});\n\n//# sourceURL=webpack:///./src/store/actions/orders.js?");

/***/ }),

/***/ "./src/store/actions/profile.js":
/*!**************************************!*\
  !*** ./src/store/actions/profile.js ***!
  \**************************************/
/*! exports provided: PROFILE_DELETE_REQUEST, PROFILE_DELETE_SUCCESS, PROFILE_DELETE_FAIL, PROFILE_CLEAR_DELETE_ERRORS, profileDeleteRequest, profileDeleteSuccess, profileDeleteFail, profileClearDeleteErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PROFILE_DELETE_REQUEST\", function() { return PROFILE_DELETE_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PROFILE_DELETE_SUCCESS\", function() { return PROFILE_DELETE_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PROFILE_DELETE_FAIL\", function() { return PROFILE_DELETE_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PROFILE_CLEAR_DELETE_ERRORS\", function() { return PROFILE_CLEAR_DELETE_ERRORS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"profileDeleteRequest\", function() { return profileDeleteRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"profileDeleteSuccess\", function() { return profileDeleteSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"profileDeleteFail\", function() { return profileDeleteFail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"profileClearDeleteErrors\", function() { return profileClearDeleteErrors; });\nconst PROFILE_DELETE_REQUEST = 'PROFILE_DELETE_REQUEST';\nconst PROFILE_DELETE_SUCCESS = 'PROFILE_DELETE_SUCCESS';\nconst PROFILE_DELETE_FAIL = 'PROFILE_DELETE_FAIL';\nconst PROFILE_CLEAR_DELETE_ERRORS = 'PROFILE_CLEAR_DELETE_ERRORS';\nconst profileDeleteRequest = () => ({\n  type: PROFILE_DELETE_REQUEST\n});\nconst profileDeleteSuccess = (idToken, localId) => ({\n  type: PROFILE_DELETE_SUCCESS,\n  payload: {\n    idToken,\n    localId\n  }\n});\nconst profileDeleteFail = error => ({\n  type: PROFILE_DELETE_FAIL,\n  payload: {\n    error\n  }\n});\nconst profileClearDeleteErrors = () => ({\n  type: PROFILE_CLEAR_DELETE_ERRORS\n});\n\n//# sourceURL=webpack:///./src/store/actions/profile.js?");

/***/ }),

/***/ "./src/store/actions/settings.js":
/*!***************************************!*\
  !*** ./src/store/actions/settings.js ***!
  \***************************************/
/*! exports provided: SETTINGS_CHANGE_LANGUAGE, SETTINGS_INIT_STATE_FROM_COOKIE, settingsChangeLanguage, settingsInitStateFromCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SETTINGS_CHANGE_LANGUAGE\", function() { return SETTINGS_CHANGE_LANGUAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SETTINGS_INIT_STATE_FROM_COOKIE\", function() { return SETTINGS_INIT_STATE_FROM_COOKIE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settingsChangeLanguage\", function() { return settingsChangeLanguage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settingsInitStateFromCookie\", function() { return settingsInitStateFromCookie; });\nconst SETTINGS_CHANGE_LANGUAGE = 'SETTINGS_CHANGE_LANGUAGE';\nconst SETTINGS_INIT_STATE_FROM_COOKIE = 'SETTINGS_INIT_STATE_FROM_COOKIE';\nconst settingsChangeLanguage = language => ({\n  type: SETTINGS_CHANGE_LANGUAGE,\n  payload: {\n    language\n  }\n});\nconst settingsInitStateFromCookie = ({\n  currentLanguage\n}) => ({\n  type: SETTINGS_INIT_STATE_FROM_COOKIE,\n  payload: {\n    currentLanguage\n  }\n});\n\n//# sourceURL=webpack:///./src/store/actions/settings.js?");

/***/ }),

/***/ "./src/store/reducers/auth.js":
/*!************************************!*\
  !*** ./src/store/reducers/auth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/store/actions/index.js\");\n\nconst initialState = {\n  authErrors: null,\n  confirmed: false,\n  confirmEmailError: null,\n  email: null,\n  isConfirmMessageShow: false,\n  isInfoUpdating: false,\n  localId: null,\n  loading: false,\n  loggedIn: false,\n  updateUserError: null,\n  user: null\n};\n\nconst authReducer = (state = initialState, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_REQUEST\"]:\n      {\n        return { ...state,\n          loading: true,\n          authErrors: null\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_SUCCESS\"]:\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_LOGGEG_LOCAL\"]:\n      {\n        const {\n          email,\n          localId\n        } = payload;\n        return { ...state,\n          email,\n          confirmed: true,\n          loading: false,\n          localId,\n          loggedIn: true\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_NOT_CONFIRMED\"]:\n      {\n        const {\n          email,\n          localId\n        } = payload;\n        return { ...state,\n          email,\n          loading: false,\n          localId,\n          loggedIn: true\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_SHOW_NOT_CONFIRMED_MESSAGE\"]:\n      {\n        return { ...state,\n          isConfirmMessageShow: true\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_HIDE_NOT_CONFIRMED_MESSAGE\"]:\n      {\n        return { ...state,\n          isConfirmMessageShow: false\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_FAIL\"]:\n      {\n        return { ...state,\n          loading: false,\n          authErrors: payload.error\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_LOGOUT\"]:\n      {\n        return { ...state,\n          user: null,\n          loading: false,\n          authErrors: null,\n          loggedIn: false,\n          email: null,\n          confirmed: false\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_GET_USER_SUCCESS\"]:\n      {\n        const {\n          user\n        } = payload;\n        return { ...state,\n          user\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_GET_USER_FAIL\"]:\n      {\n        return { ...state\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_ERRORS_CLEAR\"]:\n      {\n        return { ...state,\n          authErrors: null\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_UPDATE_USER_REQUEST\"]:\n      {\n        return { ...state,\n          isInfoUpdating: true,\n          updateUserError: null\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_UPDATE_USER_SUCCESS\"]:\n      {\n        const {\n          displayName,\n          photoUrl\n        } = payload;\n        return { ...state,\n          user: { ...state.user,\n            displayName,\n            photoUrl\n          },\n          isInfoUpdating: false\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_UPDATE_USER_FAIL\"]:\n      {\n        return { ...state,\n          isInfoUpdating: false,\n          updateUserError: payload.error\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_VERIFY_EMAIL_REQUEST\"]:\n      {\n        return { ...state,\n          isConfirmMessageShow: true,\n          confirmEmailError: null\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_VERIFY_EMAIL_FAIL\"]:\n      {\n        return { ...state,\n          confirmEmailError: payload.error\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_SERVER_IS_FULL_LOGGED\"]:\n      {\n        return { ...state,\n          confirmed: true,\n          loggedIn: true\n        };\n      }\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n//# sourceURL=webpack:///./src/store/reducers/auth.js?");

/***/ }),

/***/ "./src/store/reducers/burger.js":
/*!**************************************!*\
  !*** ./src/store/reducers/burger.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/store/actions/index.js\");\n\nconst initialState = {\n  ingredients: {},\n  totalPrice: 0,\n  loadingInitState: false,\n  errorLoadingInitState: null,\n  ingredientPrices: {},\n  resetState: {\n    ingredients: {},\n    totalPrice: 0\n  }\n};\n\nconst burgerReducer = (state = initialState, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"INIT_STATE_REQUEST\"]:\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"INIT_STATE_RETRY\"]:\n      {\n        return { ...state,\n          loadingInitState: true\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"INIT_STATE_SUCCESS\"]:\n      {\n        const {\n          ingredients,\n          price\n        } = payload;\n        return { ...state,\n          ingredients,\n          totalPrice: price.totalPrice,\n          ingredientPrices: price.ingredients,\n          loadingInitState: false,\n          resetState: {\n            ingredients,\n            totalPrice: price.totalPrice\n          }\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"INIT_STATE_FAIL\"]:\n      {\n        return { ...state,\n          loadingInitState: false,\n          errorLoadingInitState: payload.error\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"INIT_STATE_LOADED\"]:\n      {\n        return { ...state,\n          loadingInitState: false\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_INGREDIENT\"]:\n      {\n        const amount = state.ingredients[payload.ingredient];\n        const ingredient = payload.ingredient;\n        return { ...state,\n          ingredients: { ...state.ingredients,\n            [ingredient]: amount + 1\n          },\n          totalPrice: (+state.totalPrice + +state.ingredientPrices[ingredient]).toFixed(2)\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_INGREDIENT\"]:\n      {\n        const amount = state.ingredients[payload.ingredient];\n        const ingredient = payload.ingredient;\n        if (amount === 0) return state;\n        return { ...state,\n          ingredients: { ...state.ingredients,\n            [ingredient]: amount - 1\n          },\n          totalPrice: (state.totalPrice - state.ingredientPrices[ingredient]).toFixed(2)\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"RESTORE_INIT_STATE\"]:\n      {\n        const reset = { ...state.resetState\n        };\n        return { ...state,\n          ...state.resetState,\n          resetState: reset\n        };\n      }\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (burgerReducer);\n\n//# sourceURL=webpack:///./src/store/reducers/burger.js?");

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger */ \"./src/store/reducers/burger.js\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ \"./src/store/reducers/order.js\");\n/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders */ \"./src/store/reducers/orders.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ \"./src/store/reducers/auth.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile */ \"./src/store/reducers/profile.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ \"./src/store/reducers/settings.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  auth: _auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  burger: _burger__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  order: _order__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  orders: _orders__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  profile: _profile__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  settings: _settings__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/store/reducers/index.js?");

/***/ }),

/***/ "./src/store/reducers/order.js":
/*!*************************************!*\
  !*** ./src/store/reducers/order.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/store/actions/index.js\");\n\nconst initialState = {\n  orderFormErrors: null,\n  orderFormLoading: false,\n  orderFormLoadingError: null,\n  orderForm: null\n};\n\nconst orderReducer = (state = initialState, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ORDER_FORM_REQUEST\"]:\n      {\n        return { ...state,\n          orderFormLoadingError: null,\n          orderFormLoading: true\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ORDER_FORM_SUCCESS\"]:\n      {\n        return { ...state,\n          orderForm: payload.orderForm,\n          orderFormLoading: false\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ORDER_FORM_FAIL\"]:\n      {\n        return { ...state,\n          orderFormLoading: false,\n          orderFormLoadingError: payload.error\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ORDER_REQUEST\"]:\n      {\n        return { ...state,\n          orderFormErrors: null\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ORDER_FAIL\"]:\n      {\n        return { ...state,\n          orderFormErrors: payload.error\n        };\n      }\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (orderReducer);\n\n//# sourceURL=webpack:///./src/store/reducers/order.js?");

/***/ }),

/***/ "./src/store/reducers/orders.js":
/*!**************************************!*\
  !*** ./src/store/reducers/orders.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/store/actions/index.js\");\n\nconst initialState = {\n  orders: {},\n  ordersById: [],\n  loadingOrders: false,\n  errorLoadingOrders: null,\n  selectedOrder: ''\n};\n\nconst ordersReducer = (state = initialState, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ORDERS_REQUEST\"]:\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ORDERS_RETRY\"]:\n      {\n        return { ...state,\n          loadingOrders: true,\n          errorLoadingOrders: null\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ORDERS_SUCCESS\"]:\n      {\n        const {\n          ordersById,\n          orders\n        } = payload;\n        const result = ordersById.reduce((obj, id) => {\n          return { ...obj,\n            [id]: { ...orders[id],\n              id\n            }\n          };\n        }, {});\n        return { ...state,\n          orders: result,\n          ordersById: ordersById,\n          loadingOrders: false\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ORDERS_FAIL\"]:\n      {\n        return { ...state,\n          loadingOrders: false,\n          errorLoadingOrders: payload.error\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ORDERS_SET_SELECTED\"]:\n      {\n        return { ...state,\n          selectedOrder: payload.id\n        };\n      }\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ordersReducer);\n\n//# sourceURL=webpack:///./src/store/reducers/orders.js?");

/***/ }),

/***/ "./src/store/reducers/profile.js":
/*!***************************************!*\
  !*** ./src/store/reducers/profile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/store/actions/index.js\");\n\nconst initialState = {\n  isProfileDeleting: false,\n  deleteProfileErrors: null\n};\n\nconst profileReducer = (state = initialState, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"PROFILE_DELETE_REQUEST\"]:\n      {\n        return { ...state,\n          isProfileDeleting: true,\n          deleteProfileErrors: null\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"PROFILE_DELETE_SUCCESS\"]:\n      {\n        return { ...state,\n          isProfileDeleting: false\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"PROFILE_DELETE_FAIL\"]:\n      {\n        return { ...state,\n          isProfileDeleting: false,\n          deleteProfileErrors: payload.error\n        };\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"PROFILE_CLEAR_DELETE_ERRORS\"]:\n      {\n        return { ...state,\n          deleteProfileErrors: null\n        };\n      }\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (profileReducer);\n\n//# sourceURL=webpack:///./src/store/reducers/profile.js?");

/***/ }),

/***/ "./src/store/reducers/settings.js":
/*!****************************************!*\
  !*** ./src/store/reducers/settings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/store/actions/index.js\");\n\nconst initialState = {\n  defaultLanguage: 'en',\n  language: '',\n  languages: ['en', 'ru', 'fr']\n};\n\nconst settingsReducer = (state = initialState, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"SETTINGS_CHANGE_LANGUAGE\"]:\n      {\n        return { ...state,\n          ...payload\n        };\n      }\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (settingsReducer);\n\n//# sourceURL=webpack:///./src/store/reducers/settings.js?");

/***/ }),

/***/ "./src/store/selectors/auth.js":
/*!*************************************!*\
  !*** ./src/store/selectors/auth.js ***!
  \*************************************/
/*! exports provided: authState, user, loading, loggedIn, confirmed, isFullLoggedIn, isConfirmMessageShow, authErrors, confirmEmailError, email, localId, displayName, photoUrl, isInfoUpdating, updateUserError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authState\", function() { return authState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"user\", function() { return user; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loading\", function() { return loading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loggedIn\", function() { return loggedIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirmed\", function() { return confirmed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFullLoggedIn\", function() { return isFullLoggedIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isConfirmMessageShow\", function() { return isConfirmMessageShow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authErrors\", function() { return authErrors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirmEmailError\", function() { return confirmEmailError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"email\", function() { return email; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"localId\", function() { return localId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayName\", function() { return displayName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"photoUrl\", function() { return photoUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isInfoUpdating\", function() { return isInfoUpdating; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUserError\", function() { return updateUserError; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authState = state => state.auth;\nconst user = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.user);\nconst loading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.loading);\nconst loggedIn = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.loggedIn);\nconst confirmed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.confirmed);\nconst isFullLoggedIn = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(loggedIn, confirmed, (loggedIn, confirmed) => loggedIn && confirmed);\nconst isConfirmMessageShow = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.isConfirmMessageShow);\nconst authErrors = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.authErrors);\nconst confirmEmailError = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.confirmEmailError);\nconst email = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.email);\nconst localId = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.localId);\nconst displayName = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.user && authState.user.displayName);\nconst photoUrl = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.user && authState.user.photoUrl);\nconst isInfoUpdating = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.isInfoUpdating);\nconst updateUserError = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(authState, authState => authState.updateUserError);\n\n//# sourceURL=webpack:///./src/store/selectors/auth.js?");

/***/ }),

/***/ "./src/store/selectors/burger.js":
/*!***************************************!*\
  !*** ./src/store/selectors/burger.js ***!
  \***************************************/
/*! exports provided: burgerState, ingredients, totalPrice, loadingInitState, errorLoadingInitState, ingredientPrices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"burgerState\", function() { return burgerState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ingredients\", function() { return ingredients; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"totalPrice\", function() { return totalPrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadingInitState\", function() { return loadingInitState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorLoadingInitState\", function() { return errorLoadingInitState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ingredientPrices\", function() { return ingredientPrices; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\nconst burgerState = state => state.burger;\nconst ingredients = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(burgerState, orderState => orderState.ingredients);\nconst totalPrice = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(burgerState, orderState => orderState.totalPrice);\nconst loadingInitState = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(burgerState, orderState => orderState.loadingInitState);\nconst errorLoadingInitState = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(burgerState, orderState => orderState.errorLoadingInitState);\nconst ingredientPrices = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(burgerState, orderState => orderState.ingredientPrices);\n\n//# sourceURL=webpack:///./src/store/selectors/burger.js?");

/***/ }),

/***/ "./src/store/selectors/index.js":
/*!**************************************!*\
  !*** ./src/store/selectors/index.js ***!
  \**************************************/
/*! exports provided: authState, user, loading, loggedIn, confirmed, isFullLoggedIn, isConfirmMessageShow, authErrors, confirmEmailError, email, localId, displayName, photoUrl, isInfoUpdating, updateUserError, burgerState, ingredients, totalPrice, loadingInitState, errorLoadingInitState, ingredientPrices, orderState, orderForm, orderFormErrors, orderFormLoading, orderFormLoadingError, orders, ordersById, errorLoadingOrders, loadingOrders, selectedOrder, getOrders, getOrder, settingsState, currentLanguage, defaultLanguage, languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ \"./src/store/selectors/auth.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authState\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"user\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"user\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loading\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"loading\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loggedIn\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"loggedIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"confirmed\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"confirmed\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isFullLoggedIn\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"isFullLoggedIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isConfirmMessageShow\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"isConfirmMessageShow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authErrors\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"authErrors\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"confirmEmailError\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"confirmEmailError\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"email\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"email\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"localId\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"localId\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"displayName\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"displayName\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"photoUrl\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"photoUrl\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isInfoUpdating\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"isInfoUpdating\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"updateUserError\", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[\"updateUserError\"]; });\n\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger */ \"./src/store/selectors/burger.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"burgerState\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"burgerState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ingredients\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"ingredients\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"totalPrice\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"totalPrice\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loadingInitState\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"loadingInitState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"errorLoadingInitState\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"errorLoadingInitState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ingredientPrices\", function() { return _burger__WEBPACK_IMPORTED_MODULE_1__[\"ingredientPrices\"]; });\n\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ \"./src/store/selectors/order.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderState\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"orderState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderForm\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"orderForm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderFormErrors\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"orderFormErrors\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderFormLoading\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"orderFormLoading\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderFormLoadingError\", function() { return _order__WEBPACK_IMPORTED_MODULE_2__[\"orderFormLoadingError\"]; });\n\n/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders */ \"./src/store/selectors/orders.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orders\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"orders\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ordersById\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"ordersById\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"errorLoadingOrders\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"errorLoadingOrders\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loadingOrders\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"loadingOrders\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selectedOrder\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"selectedOrder\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getOrders\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"getOrders\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getOrder\", function() { return _orders__WEBPACK_IMPORTED_MODULE_3__[\"getOrder\"]; });\n\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ \"./src/store/selectors/settings.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"settingsState\", function() { return _settings__WEBPACK_IMPORTED_MODULE_4__[\"settingsState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"currentLanguage\", function() { return _settings__WEBPACK_IMPORTED_MODULE_4__[\"currentLanguage\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"defaultLanguage\", function() { return _settings__WEBPACK_IMPORTED_MODULE_4__[\"defaultLanguage\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"languages\", function() { return _settings__WEBPACK_IMPORTED_MODULE_4__[\"languages\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/store/selectors/index.js?");

/***/ }),

/***/ "./src/store/selectors/order.js":
/*!**************************************!*\
  !*** ./src/store/selectors/order.js ***!
  \**************************************/
/*! exports provided: orderState, orderForm, orderFormErrors, orderFormLoading, orderFormLoadingError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderState\", function() { return orderState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderForm\", function() { return orderForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderFormErrors\", function() { return orderFormErrors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderFormLoading\", function() { return orderFormLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderFormLoadingError\", function() { return orderFormLoadingError; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\nconst orderState = state => state.order;\nconst orderForm = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(orderState, orderState => orderState.orderForm);\nconst orderFormErrors = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(orderState, orderState => orderState.orderFormErrors);\nconst orderFormLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(orderState, orderState => orderState.orderFormLoading);\nconst orderFormLoadingError = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(orderState, orderState => orderState.orderFormLoadingError);\n\n//# sourceURL=webpack:///./src/store/selectors/order.js?");

/***/ }),

/***/ "./src/store/selectors/orders.js":
/*!***************************************!*\
  !*** ./src/store/selectors/orders.js ***!
  \***************************************/
/*! exports provided: orderState, orders, ordersById, errorLoadingOrders, loadingOrders, selectedOrder, getOrders, getOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderState\", function() { return orderState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orders\", function() { return orders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ordersById\", function() { return ordersById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorLoadingOrders\", function() { return errorLoadingOrders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadingOrders\", function() { return loadingOrders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectedOrder\", function() { return selectedOrder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOrders\", function() { return getOrders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOrder\", function() { return getOrder; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\nconst orderState = state => state.orders;\nconst orders = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(orderState, orderState => orderState.orders);\nconst ordersById = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(orderState, orderState => orderState.ordersById);\nconst errorLoadingOrders = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(orderState, orderState => orderState.errorLoadingOrders);\nconst loadingOrders = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(orderState, orderState => orderState.loadingOrders);\nconst selectedOrder = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(orderState, orderState => orderState.selectedOrder);\nconst getOrders = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(orders, ordersById, (orders, ordersById) => ordersById.map(id => orders[id]));\nconst getOrder = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(orders, selectedOrder, (orders, selectedOrder) => orders[selectedOrder] || {});\n\n//# sourceURL=webpack:///./src/store/selectors/orders.js?");

/***/ }),

/***/ "./src/store/selectors/profile.js":
/*!****************************************!*\
  !*** ./src/store/selectors/profile.js ***!
  \****************************************/
/*! exports provided: profileState, isDeleting, deleteProfileErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"profileState\", function() { return profileState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDeleting\", function() { return isDeleting; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProfileErrors\", function() { return deleteProfileErrors; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\nconst profileState = state => state.profile;\nconst isDeleting = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(profileState, profileState => profileState.isProfileDeleting);\nconst deleteProfileErrors = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(profileState, profileState => profileState.deleteProfileErrors);\n\n//# sourceURL=webpack:///./src/store/selectors/profile.js?");

/***/ }),

/***/ "./src/store/selectors/settings.js":
/*!*****************************************!*\
  !*** ./src/store/selectors/settings.js ***!
  \*****************************************/
/*! exports provided: settingsState, currentLanguage, defaultLanguage, languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settingsState\", function() { return settingsState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentLanguage\", function() { return currentLanguage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultLanguage\", function() { return defaultLanguage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"languages\", function() { return languages; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\nconst settingsState = state => state.settings;\nconst currentLanguage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(settingsState, settingsState => settingsState.language);\nconst defaultLanguage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(settingsState, settingsState => settingsState.defaultLanguage);\nconst languages = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(settingsState, settingsState => settingsState.languages);\n\n//# sourceURL=webpack:///./src/store/selectors/settings.js?");

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/LinearProgress\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/LinearProgress%22?");

/***/ }),

/***/ "axios-observable":
/*!***********************************!*\
  !*** external "axios-observable" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios-observable\");\n\n//# sourceURL=webpack:///external_%22axios-observable%22?");

/***/ }),

/***/ "classnames/bind":
/*!**********************************!*\
  !*** external "classnames/bind" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames/bind\");\n\n//# sourceURL=webpack:///external_%22classnames/bind%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "debounce":
/*!***************************!*\
  !*** external "debounce" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debounce\");\n\n//# sourceURL=webpack:///external_%22debounce%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"i18next\");\n\n//# sourceURL=webpack:///external_%22i18next%22?");

/***/ }),

/***/ "i18next-express-middleware":
/*!*********************************************!*\
  !*** external "i18next-express-middleware" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"i18next-express-middleware\");\n\n//# sourceURL=webpack:///external_%22i18next-express-middleware%22?");

/***/ }),

/***/ "i18next-node-fs-backend":
/*!******************************************!*\
  !*** external "i18next-node-fs-backend" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"i18next-node-fs-backend\");\n\n//# sourceURL=webpack:///external_%22i18next-node-fs-backend%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-i18next\");\n\n//# sourceURL=webpack:///external_%22react-i18next%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-observable":
/*!***********************************!*\
  !*** external "redux-observable" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-observable\");\n\n//# sourceURL=webpack:///external_%22redux-observable%22?");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reselect\");\n\n//# sourceURL=webpack:///external_%22reselect%22?");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rxjs/operators\");\n\n//# sourceURL=webpack:///external_%22rxjs/operators%22?");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yup\");\n\n//# sourceURL=webpack:///external_%22yup%22?");

/***/ })

/******/ });