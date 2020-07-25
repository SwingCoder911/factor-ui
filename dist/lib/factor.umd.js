(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["factor"] = factory();
	else
		root["factor"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "083f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/eye.c6d9c2fb.svg";

/***/ }),

/***/ "0a17":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/search.4a25f3e6.svg";

/***/ }),

/***/ "0962":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0b25":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");

// `ToIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0f39":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/question-mark-circle.229d4279.svg";

/***/ }),

/***/ "1196":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFlowTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9e22");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFlowTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFlowTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFlowTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "14a4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grid.58794868.svg";

/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');



/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c35":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */


/***/ "1f9a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/phone.2835bb33.svg";

/***/ }),

/***/ "22f4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chain.160a5971.svg";

/***/ }),

/***/ "2383":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chevron-left.7afc0553.svg";

/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "249f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorBlockTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4a97");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorBlockTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorBlockTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorBlockTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2728":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/users.78b0ce03.svg";

/***/ }),

/***/ "2dd2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/edit.11a0ed2f.svg";

/***/ }),

/***/ "2f4c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/x.9ce5b7c3.svg";

/***/ }),

/***/ "3156":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/activity.397afd5f.svg";

/***/ }),

/***/ "3175":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/clock.ee76d7a8.svg";

/***/ }),

/***/ "355c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mail-outline.e784d8fd.svg";

/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3980":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/keys.b36094bf.svg";

/***/ }),

/***/ "3b18":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lock.981a4bc0.svg";

/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3d9a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/irc.16049408.svg";

/***/ }),

/***/ "409b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bookmark.6c6928bb.svg";

/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "4555":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./activity.svg": "3156",
	"./at-sign.svg": "8059",
	"./bell.svg": "8590",
	"./bookmark.svg": "409b",
	"./chain.svg": "22f4",
	"./check.svg": "4a24",
	"./chevron-down.svg": "fc34",
	"./chevron-left.svg": "2383",
	"./chevron-right.svg": "f0c2",
	"./chevron-up.svg": "6003",
	"./circle-fill.svg": "e4a8",
	"./circle.svg": "53eb",
	"./clock.svg": "3175",
	"./collapse.svg": "8e5f",
	"./copy.svg": "b420",
	"./cpg.svg": "dc3c",
	"./crown-fill.svg": "d683",
	"./crown.svg": "833d",
	"./dashboard.svg": "6f9f",
	"./dino.svg": "4ca5",
	"./discourse.svg": "8529",
	"./edit.svg": "2dd2",
	"./email.svg": "da8d",
	"./envelope.svg": "c22f",
	"./expand.svg": "a841",
	"./external.svg": "9028",
	"./eye.svg": "083f",
	"./faq.svg": "c023",
	"./github.svg": "76f4",
	"./grid.svg": "14a4",
	"./idcard.svg": "c9d5",
	"./info.svg": "69d9",
	"./irc.svg": "3d9a",
	"./keys.svg": "3980",
	"./list.svg": "484a",
	"./lock.svg": "3b18",
	"./log-out.svg": "d3b2",
	"./mail-outline.svg": "355c",
	"./mail.svg": "4f1b",
	"./matrix.svg": "c581",
	"./moz.svg": "87bc",
	"./org-chart.svg": "a00d",
	"./pencil.svg": "be21",
	"./phone-forwarded.svg": "c235",
	"./phone.svg": "1f9a",
	"./plus.svg": "4eb1",
	"./private.svg": "7b07",
	"./question-mark-circle.svg": "0f39",
	"./rotate.svg": "5022",
	"./search.svg": "0a17",
	"./slack.svg": "f531",
	"./sliders.svg": "8d41",
	"./square.svg": "e0d5",
	"./staff.svg": "8070",
	"./successSquare.svg": "7cde",
	"./toggle-right.svg": "69a3",
	"./triangle.svg": "f1f4",
	"./user-plus.svg": "99da",
	"./user.svg": "4d66",
	"./users-outline.svg": "8acc",
	"./users.svg": "2728",
	"./world.svg": "821d",
	"./x.svg": "2f4c",
	"./zoom.svg": "7b3e"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "4555";

/***/ }),

/***/ "484a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/list.2ee365aa.svg";

/***/ }),

/***/ "4a24":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/check.aeaa6aef.svg";

/***/ }),

/***/ "4a97":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4ca5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dino.4ff77442.svg";

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "709e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "irc",
  "use": "irc-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"irc\"><path fill=\"currentColor\" d=\"M19 2H5C3.3 2 2 3.3 2 5v16c0 .4.2.8.6.9.1.1.3.1.4.1.3 0 .5-.1.7-.3L7.4 18H19c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 13c0 .6-.4 1-1 1H7c-.3 0-.5.1-.7.3L4 18.6V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v10z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "4d66":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user.d0435822.svg";

/***/ }),

/***/ "4eb1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/plus.e6ec5bb3.svg";

/***/ }),

/***/ "4f1b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mail.20aad22a.svg";

/***/ }),

/***/ "5022":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rotate.e9590b4c.svg";

/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "53eb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/circle.dff74a42.svg";

/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorUserMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("89d9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorUserMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorUserMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorUserMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorUserMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorUserMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "6003":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chevron-up.873e8b5d.svg";

/***/ }),

/***/ "69a3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/toggle-right.e111a8af.svg";

/***/ }),

/***/ "69d9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/info.44cd334e.svg";

/***/ }),

/***/ "9020":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e716");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "6f9f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dashboard.138b0781.svg";

/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "76f4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/github.e3f91087.svg";

/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

/***/ "7b07":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/private.63f9d4aa.svg";

/***/ }),

/***/ "7b3e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/zoom.3dabdaa4.svg";

/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

/***/ "7cde":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/successSquare.18c271a9.svg";

/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

/***/ "8059":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/at-sign.5394cea1.svg";

/***/ }),

/***/ "8070":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/staff.aef812a9.svg";

/***/ }),

/***/ "821d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/world.78c22e46.svg";

/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

/***/ "833d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/crown.66631ce3.svg";

/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

/***/ "8529":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/discourse.c84f3115.svg";

/***/ }),

/***/ "8590":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bell.b09fb00f.svg";

/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

/***/ "87bc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/moz.2a2aa047.svg";

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

/***/ "8acc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/users-outline.fcd0300a.svg";

/***/ }),

/***/ "8d41":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sliders.0602a029.svg";

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

/***/ "8e5f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/collapse.8f0c3f42.svg";

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

/***/ "9020":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

          next.value = undefined;
          next.done = true;

/***/ "9028":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/external.d9610834.svg";

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__("e260");
var $ = __webpack_require__("23e7");
var getBuiltIn = __webpack_require__("d066");
var USE_NATIVE_URL = __webpack_require__("0d3b");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var createIteratorConstructor = __webpack_require__("9ed3");
var InternalStateModule = __webpack_require__("69f3");
var anInstance = __webpack_require__("19aa");
var hasOwn = __webpack_require__("5135");
var bind = __webpack_require__("0366");
var classof = __webpack_require__("f5df");
var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");
var wellKnownSymbol = __webpack_require__("b622");

var $fetch = getBuiltIn('fetch');
var Headers = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

/***/ "98b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ea67");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9a1f":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var getIteratorMethod = __webpack_require__("35a1");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "99da":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user-plus.1ef4e002.svg";

/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9e22":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a00d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/org-chart.ae705be7.svg";

/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a841":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/expand.6f114f09.svg";

/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ad7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("56e6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b420":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/copy.20b1e6a1.svg";

/***/ }),

/***/ "be21":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pencil.49c5cbd9.svg";

/***/ }),

/***/ "c023":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/faq.4f52ba4d.svg";

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c22f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/envelope.ab4f6122.svg";

/***/ }),

/***/ "c235":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/phone-forwarded.09080608.svg";

/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c581":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/matrix.87daea88.svg";

/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;
			crc32(this.buffer, this.idat_offs, this.idat_size);
			crc32(this.buffer, this.iend_offs, this.iend_size);

			// convert PNG to string
	// modified from original source to support NPM
	if ( true && typeof module.export
	} else {
		window.PNGlib = PNGlib;
	}
})();


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

/***/ "c9d5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/idcard.3d0a0d19.svg";

/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");l_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "collapse",

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "FactorBlockTemplate", function() { return /* reexport */ templates_FactorBlockTemplate; });
__webpack_require__.d(__webpack_exports__, "FactorFlowTemplate", function() { return /* reexport */ templates_FactorFlowTemplate; });
__webpack_require__.d(__webpack_exports__, "FactorNavTemplate", function() { return /* reexport */ templates_FactorNavTemplate; });
__webpack_require__.d(__webpack_exports__, "FactorExternalButtonLink", function() { return /* reexport */ components_FactorExternalButtonLink; });
__webpack_require__.d(__webpack_exports__, "FactorFooter", function() { return /* reexport */ components_FactorFooter; });
__webpack_require__.d(__webpack_exports__, "FactorHeader", function() { return /* reexport */ components_FactorHeader; });
__webpack_require__.d(__webpack_exports__, "FactorIcon", function() { return /* reexport */ components_FactorIcon; });
__webpack_require__.d(__webpack_exports__, "FactorModal", function() { return /* reexport */ components_FactorModal; });
__webpack_require__.d(__webpack_exports__, "FactorPanel", function() { return /* reexport */ components_FactorPanel; });
__webpack_require__.d(__webpack_exports__, "FactorProfileNav", function() { return /* reexport */ components_FactorProfileNav; });
__webpack_require__.d(__webpack_exports__, "FactorSearchBar", function() { return /* reexport */ components_FactorSearchBar; });
__webpack_require__.d(__webpack_exports__, "FactorShowMore", function() { return /* reexport */ components_FactorShowMore; });
__webpack_require__.d(__webpack_exports__, "FactorTinyStaffIcon", function() { return /* reexport */ components_FactorTinyStaffIcon; });
__webpack_require__.d(__webpack_exports__, "FactorUserMenu", function() { return /* reexport */ components_FactorUserMenu; });
__webpack_require__.d(__webpack_exports__, "FactorUserPicture", function() { return /* reexport */ components_FactorUserPicture; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=template&id=7ac2540c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"f-template-outer block-template",attrs:{"id":"factor-template"}},[_c('FactorHeader',{attrs:{"searchBarConfig":_vm.searchBarConfig}},[(_vm.hasLogo)?_c('template',{slot:"logo"},[_vm._t("logo")],2):_vm._e(),_c('template',{slot:"nav"},[_vm._t("nav")],2),_c('template',{slot:"profile"},[_vm._t("profile")],2)],2),_c('main',{staticClass:"f-main"},[_vm._t("main")],2),_c('FactorFooter',[_c('template',{slot:"links"},[_vm._t("footer-links")],2)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=template&id=7ac2540c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorExternalButtonLink/FactorExternalButtonLink.vue?vue&type=template&id=6d9f7950&
var FactorExternalButtonLinkvue_type_template_id_6d9f7950_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"button button--link",attrs:{"href":_vm.href}},[(_vm.iconLeft)?_c('FactorIcon',{attrs:{"id":_vm.iconLeft,"width":24,"height":24}}):_vm._e(),(_vm.text)?_c('span',[_vm._v(_vm._s(_vm.text))]):_vm._e(),(_vm.iconRight)?_c('FactorIcon',{attrs:{"id":_vm.iconRight,"width":24,"height":24}}):_vm._e()],1)}
var FactorExternalButtonLinkvue_type_template_id_6d9f7950_staticRenderFns = []

/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/log-out.ec77d6fe.svg";

function hex(buffer) {
  var hexCodes = [];
  var view = new DataView(buffer);

/***/ "d683":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/crown-fill.7cc5dca9.svg";

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
m
    avatar() {
      this.updateUserPicture();
    }

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

        if (this.avatar.picture === 'empty:') {
          this.src = '';
        } else if (this.avatar.picture) {
          this.src = this.avatar.picture;
        } else {
          this.src = avatarUrl(this.avatar.picture, this.slot, this.ownPicture);
        }
      }
    }

/***/ "da8d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/email.ab4f6122.svg";

/***/ }),

/***/ "dc3c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cpg.478aeaee.svg";


/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/* harmony default export */ var FactorUserPicture = (FactorUserPicture_component.exports);
// CONCATENATED MODULE: ./src/components/FactorUserPicture/index.js

/***/ "e0d5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/square.4180ba9d.svg";

/***/ }),

/***/ "e4a8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/circle-fill.3651277c.svg";

/* harmony default export */ var FactorSearchBarvue_type_script_lang_js_ = ({
  name: 'FactorSearchBar',
  props: {
    searchBarHandler: Function,
    searchBarLabel: {
      type: String,
      default: ''
    },
    searchBarValue: {
      type: String,
      default: ''
    },
    searchBarDropdown: {
      type: Array,
      default: () => []
    },
    dropdownEnabled: {
      type: Boolean,
      default: true
    }
  },
  components: {
    FactorIcon: components_FactorIcon
  },
  methods: {
    arrowListener(e) {
      if (this.dropdownItems.length) {
        if (e.keyCode === 40 && this.focusedSuggestion < this.dropdownItems.length - 1) {
          e.preventDefault();
          this.focusedSuggestion += 1;
        } else if (e.keyCode === 38 && this.focusedSuggestion > 0) {
          e.preventDefault();
          this.focusedSuggestion -= 1;
        } else if (e.keyCode === 13 && this.focusedSuggestion > -1) {
          if (this.focusedSuggestion > -1) {
            e.preventDefault();
            this.$emit('search-bar-dropdown-clicked', this.dropdownItems[this.focusedSuggestion]);
          } else if (this.focusedSuggestion == -1) {
            this.dropdownItems = [];
          }
          NumberWrapper.prototype = NumberPrototype;
          NumberPrototype.constructor = NumberWrapper;
          redefine(global, NUMBER, NumberWrapper);
        }
      } else {
        this.focusedSuggestion = -1;
      },

/***/ "e716":
/***/ (function(module, exports, __webpack_require__) {

    onSearchQueryBlur() {
      this.$refs.searchQueryField.removeEventListener('keydown', this.arrowListener);

/* normalize component */

/***/ "ea67":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/components/FactorShowMore/FactorShowMore.vue?vue&type=template&id=6127cd68&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorShowMore/FactorShowMore.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FactorShowMorevue_type_script_lang_js_ = ({
  name: 'FactorShowMore',
  props: {
    closeWhenClickedOutside: {
      type: Boolean,
      default: false
    },
    closeOnUpdate: {
      type: Boolean,
      default: false
    },
    moveFocus: {
      type: Boolean,
      default: true
    },
    overflowBefore: {
      type: Boolean,
      default: true
    },
    buttonTextVisuallyHidden: {
      type: Boolean,
      default: false
    },
    onlyMobile: {
      type: Boolean,
      default: false
    },
    buttonText: String,
    alternateButtonText: String,
    buttonClass: String,
    transition: Boolean,
    updateIndicator: String
  },
  methods: {
    toggleOverflow() {
      this.isExpanded = !this.isExpanded;
    },

    handleDocumentClick(event) {
      if (this.$refs.button && this.$refs.button.contains(event.target)) {
        event.stopPropagation();
        return;
      }


/***/ "f0c2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chevron-right.f25a9b7b.svg";

  },

/***/ "f1f4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/triangle.842ce4d7.svg";

}

/***/ "f531":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slack.41bc65a6.svg";


// CONCATENATED MODULE: ./src/components/FactorUserMenu/FactorUserMenu.vue?vue&type=template&id=598b5ce1&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// CONCATENATED MODULE: ./src/shared/utils/stringUtils.js
function getStrings(stringSet, field) {
  if (stringSet === null || !field) {
    return '';
  }

  if (stringSet[field] === undefined) {
    return '';
  }

  return stringSet[field];
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorUserMenu/FactorUserMenu.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FactorUserMenuvue_type_script_lang_js_ = ({
  name: 'FactorUserMenu',
  props: {
    strings: {
      type: Object,
      default: () => ({
        closeMenuHidden: '',
        userMenuMyProfile: '',
        userMenuDashboard: '',
        userMenuNotifications: '',
        userMenuLogout: ''
      })
    },
    avatar: {
      type: Object,
      default: () => ({
        imageUrl: '',
        username: '',
        isStaff: false,
        loaded: false,
        firstName: '',
        lastName: '',
        primaryEmail: ''
      })
    }
  },

  mounted() {
    if (matchMedia('(min-width: 50em)').matches === false) {
      components_FactorModal.methods.preventBackgroundScrolling();
    }
  },

  destroyed() {
    if (matchMedia('(min-width: 50em)').matches === false) {
      components_FactorModal.methods.enableBackgroundScrolling();
    }
  },

  components: {
    FactorIcon: components_FactorIcon,
    FactorUserPicture: components_FactorUserPicture
  },
  computed: {
    menuItems() {
      var menuItemSet = !this.avatar.loaded ? [] : [{
        link: {
          name: 'Profile',
          params: {
            username: this.avatar.primaryEmail
          }
        },
        text: this.getComponentText('userMenuMyProfile'),
        icon: 'user'
      }];
      menuItemSet = menuItemSet.concat([{
        url: 'https://sso.mozilla.com',
        text: this.getComponentText('userMenuDashboard'),
        icon: 'dashboard'
      }, {
        url: 'https://sso.mozilla.com/notifications',
        text: this.getComponentText('userMenuNotifications'),
        icon: 'dashboard'
      }]);
      return menuItemSet;
    }

  },
  methods: {
    getComponentText(field) {
      return getStrings(this.strings, field);
    }

  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=template&id=25781fda&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"f-template-outer block-template",attrs:{"id":"factor-template"}},[_c('FactorHeader',{attrs:{"searchBarConfig":_vm.searchBarConfig}},[(_vm.hasLogo)?_c('template',{slot:"logo"},[_vm._t("logo")],2):_vm._e(),_c('template',{slot:"nav"},[_vm._t("nav")],2),_c('template',{slot:"profile"},[_vm._t("profile")],2)],2),_c('main',{staticClass:"f-main"},[_vm._t("main")],2),_c('FactorFooter',[_c('template',{slot:"links"},[_vm._t("footer-links")],2)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=template&id=25781fda&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorHeader/FactorHeader.vue?vue&type=template&id=211131a0&
var FactorHeadervue_type_template_id_211131a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"f-header"},[_c('div',{staticClass:"f-header__column"},[(!_vm.noLogo)?_vm._t("logo"):_vm._e(),(!_vm.hasLogoSlot && !_vm.noLogo)?_c('a',{staticClass:"f-header__logo-link",attrs:{"href":"/"}},[_c('img',{staticClass:"f-header__logo",attrs:{"src":"https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg"}})]):_vm._e()],2),_c('div',{staticClass:"f-header__column"},[(!_vm.hideSearchBar)?_c('FactorSearchBar',{staticClass:"f-header__search",attrs:{"searchBarLabel":_vm.searchBarLabelDisplay,"searchBarValue":_vm.searchBarValueDisplay,"searchBarDropdown":_vm.searchBarSuggestions},on:{"keyup":_vm.searchBarKeyup,"factor:search:submitted":_vm.factorSearchSubmitted,"factor:search:clear":_vm.factorSearchClear,"factor:search-suggestions:clicked":_vm.searchBarDropdownClicked}}):_vm._e()],1),_c('div',{staticClass:"f-header__column"},[_c('nav',{staticClass:"f-nav"},[_vm._t("nav")],2),_c('div',{staticClass:"f-profile"},[_vm._t("profile")],2)])])}
var FactorHeadervue_type_template_id_211131a0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorHeader/FactorHeader.vue?vue&type=template&id=211131a0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=template&id=744523ab&
var FactorSearchBarvue_type_template_id_744523ab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"search-bar",attrs:{"method":"GET"},on:{"submit":_vm.handleSubmit}},[_c('fieldset',[_c('legend',{staticClass:"visually-hidden"},[_vm._v("search")]),_c('div',{staticClass:"search-bar__fields"},[_c('label',{staticClass:"visually-hidden",attrs:{"for":"search-query"}},[_vm._v("search-input")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchQuery),expression:"searchQuery"}],ref:"searchQueryField",staticClass:"search-bar__input",attrs:{"type":"text","id":"search-query","name":"query","autocomplete":"off","placeholder":_vm.searchLabel},domProps:{"value":(_vm.searchQuery)},on:{"keyup":_vm.handleKeyUp,"blur":_vm.onSearchQueryBlur,"focus":_vm.onSearchQueryFocus,"input":function($event){if($event.target.composing){ return; }_vm.searchQuery=$event.target.value}}}),(_vm.searchQuery && _vm.searchQuery.length > 0)?_c('button',{staticClass:"search-bar__clear-button",attrs:{"type":"button"},on:{"click":_vm.clearQuery}},[_c('FactorIcon',{attrs:{"id":"x","width":20,"height":20}}),_c('span',{staticClass:"visually-hidden"},[_vm._v("clear search")])],1):_vm._e(),_c('button',{staticClass:"search-bar__submit",attrs:{"type":"submit"}},[_c('FactorIcon',{attrs:{"id":"search","width":18,"height":18}}),_c('span',{staticClass:"visually-hidden"},[_vm._v("search")])],1)])]),(_vm.dropdownItems.length)?_c('ul',{staticClass:"search-bar__dropdown"},_vm._l((_vm.dropdownItems),function(item,idx){return _c('li',{key:idx,class:{
        'dropdown-item': true,
        active: _vm.focusedSuggestion === idx,
      },on:{"mousedown":function($event){return _vm.onDropdownItemClick(item)}}},[_vm._v(" "+_vm._s(item.label)+" ")])}),0):_vm._e()])}
var FactorSearchBarvue_type_template_id_744523ab_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=template&id=744523ab&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorIcon/FactorIcon.vue?vue&type=template&id=c7f1beda&
var FactorIconvue_type_template_id_c7f1beda_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('svg',{staticStyle:{"position":"absolute","width":"0","height":"0"},attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},domProps:{"innerHTML":_vm._s(_vm.iconRendered)}}),_c('svg',{staticClass:"icon",attrs:{"viewBox":"0 0 24 24","aria-hidden":"true","role":"presentation","focusable":"false","width":_vm.width,"height":_vm.height},on:{"click":_vm.handleIconClicked}},[_c('use',{attrs:{"href":_vm.iconHref}})])])}
var FactorIconvue_type_template_id_c7f1beda_staticRenderFns = []

/* normalize component */

// CONCATENATED MODULE: ./src/components/FactorIcon/FactorIcon.vue?vue&type=template&id=c7f1beda&

/* harmony default export */ var FactorUserMenu = (FactorUserMenu_component.exports);
// CONCATENATED MODULE: ./src/components/FactorUserMenu/index.js

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorIcon/FactorIcon.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FactorHeadervue_type_script_lang_js_ = ({
  name: 'FactorHeader',
  components: {
    FactorSearchBar: components_FactorSearchBar,
    FactorShowMore: components_FactorShowMore,
    FactorIcon: components_FactorIcon
  },
  computed: {
    iconRendered: function iconRendered() {
      return this.source.default.stringify();
    },
    iconHref: function iconHref() {
      return "#".concat(this.source.default.id);
    },
    iconSource: function iconSource() {
      return this.source.default.content;
    }
  },
  methods: {
    handleIconClicked: function handleIconClicked(e) {
      this.$emit('click', e);
    }
  },
  data: function data() {
    return {
      avatarUrl: null,
      source: __webpack_require__("4555")("./".concat(this.id, ".svg"))
    };
  }
});
// CONCATENATED MODULE: ./src/components/FactorIcon/FactorIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorIcon_FactorIconvue_type_script_lang_js_ = (FactorIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FactorIcon/FactorIcon.vue?vue&type=style&index=0&lang=scss&
var FactorIconvue_type_style_index_0_lang_scss_ = __webpack_require__("6af3");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

    searchBarDropdownClicked(item) {
      if (!this.searchBarConfig.onDropdownClicked) {
        return;
      }

      this.searchBarConfig.onDropdownClicked(item);
    },

    searchBarClearQuery() {
      if (!this.searchBarConfig.onClearQuery) {
        return;
      }

      this.searchBarConfig.onClearQuery();
    }

  },
  computed: {
    hasLogoSlot() {
      return !!this.$slots['logo'];
    },

    searchBarLabel() {
      if (!this.searchBarConfig.label) {
        return '';
      }

      return this.searchBarConfig.label;
    },

    searchBarValue() {
      if (!this.searchBarConfig.value) {
        return '';
      }

      return this.searchBarConfig.value;
    },

    searchBarSuggestions() {
      if (!this.searchBarConfig.suggestions) {
        return [];
      }

      return this.searchBarConfig.suggestions;
    },

    searchBarDropdownEnabled() {
      if (this.searchBarConfig.dropdownEnabled === undefined) {
        return true;
      }

      return this.searchBarConfig.dropdownEnabled;
    }

  }
});
// CONCATENATED MODULE: ./src/components/FactorHeader/FactorHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorHeader_FactorHeadervue_type_script_lang_js_ = (FactorHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FactorHeader/FactorHeader.vue






/* normalize component */

var component = normalizeComponent(
  FactorIcon_FactorIconvue_type_script_lang_js_,
  FactorIconvue_type_template_id_c7f1beda_render,
  FactorIconvue_type_template_id_c7f1beda_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FactorHeader = (FactorHeader_component.exports);
// CONCATENATED MODULE: ./src/components/FactorHeader/index.js

/* harmony default export */ var components_FactorHeader = (FactorHeader);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorFooter/FactorFooter.vue?vue&type=template&id=eb9a09de&
var FactorFootervue_type_template_id_eb9a09de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"f-footer"},[_vm._t("links")],2)}
var FactorFootervue_type_template_id_eb9a09de_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorFooter/FactorFooter.vue?vue&type=template&id=eb9a09de&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorFooter/FactorFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var FactorFootervue_type_script_lang_js_ = ({
  name: 'Footer'
});
// CONCATENATED MODULE: ./src/components/FactorFooter/FactorFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorFooter_FactorFootervue_type_script_lang_js_ = (FactorFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FactorFooter/FactorFooter.vue



function FactorFooter_injectStyles (context) {
  
  var style0 = __webpack_require__("1f6e")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FactorFooter_component = normalizeComponent(
  FactorFooter_FactorFootervue_type_script_lang_js_,
  FactorFootervue_type_template_id_eb9a09de_render,
  FactorFootervue_type_template_id_eb9a09de_staticRenderFns,
  false,
  FactorFooter_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ va

/* harmony default export */ var components_FactorFooter = (FactorFooter);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorProfileNav/FactorProfileNav.vue?vue&type=template&id=4979ca94&
var FactorProfileNavvue_type_template_id_4979ca94_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"f-pn"},[(_vm.showMenu)?[_c('FactorShowMore',{attrs:{"buttonText":_vm.getComponentText('buttonText'),"alternateButtonText":_vm.getComponentText('alternateButton'),"buttonClass":"top-bar__user-menu-toggle","closeWhenClickedOutside":true,"buttonTextVisuallyHidden":true}},[_c('template',{slot:"overflow"},[_c('FactorUserMenu',{attrs:{"avatar":_vm.avatar,"loginLink":_vm.loginLink,"strings":_vm.strings}})],1),_c('template',{slot:"button-content"},[(_vm.avatar.loaded)?_c('FactorUserPicture',{attrs:{"avatar":{
            picture: _vm.avatar.imageUrl,
            username: _vm.avatar.username,
          },"size":40,"pictureSize":100,"showStaffIcon":_vm.avatar.isStaff}}):_c('FactorUserPicture',{attrs:{"size":40,"pictureSize":100,"showStaffIcon":_vm.avatar.isStaff}})],1)],2)]:_c('FactorExternalButtonLink',{staticClass:"top-bar__login",attrs:{"href":_vm.loginLink,"iconRight":"chevron-right","text":_vm.getComponentText('loginText')}})],2)}
var FactorProfileNavvue_type_template_id_4979ca94_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorProfileNav/FactorProfileNav.vue?vue&type=template&id=4979ca94&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorHeader/FactorHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FactorProfileNavvue_type_script_lang_js_ = ({
  name: 'FactorProfileNav',
  components: {
    FactorShowMore: components_FactorShowMore,
    FactorUserMenu: components_FactorUserMenu,
    FactorUserPicture: components_FactorUserPicture,
    FactorExternalButtonLink: components_FactorExternalButtonLink
  },
  props: {
    searchBarLabel: {
      type: String,
      default: ''
    },
    strings: {
      type: Object,
      default: () => ({
        buttonText: '',
        alternateButtonText: '',
        loginText: '',
        closeMenuHidden: '',
        userMenuMyProfile: '',
        userMenuDashboard: '',
        userMenuNotifications: '',
        userMenuLogout: ''
      })
    },
    searchBarDropdown: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    arrowListener: function arrowListener(e) {
      if (this.dropdownItems.length) {
        if (e.keyCode === 40 && this.focusedSuggestion < this.dropdownItems.length - 1) {
          e.preventDefault();
          this.focusedSuggestion += 1;
        } else if (e.keyCode === 38 && this.focusedSuggestion > 0) {
          e.preventDefault();
          this.focusedSuggestion -= 1;
        } else if (e.keyCode === 13 && this.focusedSuggestion > -1) {
          if (this.focusedSuggestion > -1) {
            e.preventDefault();
            this.$emit('factor:search-suggestions:clicked', this.dropdownItems[this.focusedSuggestion]);
          } else if (this.focusedSuggestion == -1) {
            this.dropdownItems = [];
          }
        } else if (e.keyCode === 27) {
          e.preventDefault();
          this.dropdownItems = [];
        } else {
          this.focusedSuggestion = -1;
        }
      } else {
        this.focusedSuggestion = -1;
      }
    },
    onSearchQueryFocus: function onSearchQueryFocus() {
      this.$refs.searchQueryField.addEventListener('keydown', this.arrowListener);
    },
    onSearchQueryBlur: function onSearchQueryBlur() {
      this.$refs.searchQueryField.removeEventListener('keydown', this.arrowListener);
      this.dropdownItems = [];
    },
    handleSubmit: function handleSubmit(event) {
      event.preventDefault();

      if (!this.searchQuery.length > 0) {
        this.$refs.searchQueryField.focus();
      } else {
        this.$emit('factor:search:close');
      }

      this.$emit('factor:search:submitted', {
        search: this.searchQuery
      });
    },
    handleKeyUp: function handleKeyUp(e) {
      if (e.keyCode !== 13) {
        this.$emit('keyup', e);
      }
    },
    clearQuery: function clearQuery() {
      this.searchQuery = '';
      this.$refs.searchQueryField.focus();
      this.$emit('factor:search:clear');
    },
    onDropdownItemClick: function onDropdownItemClick(item) {
      this.$emit('factor:search-suggestions:clicked', item);
    }
  },
  watch: {
    searchBarDropdown: function searchBarDropdown(value) {
      this.dropdownItems = value;
    },
    searchBarValue: function searchBarValue(value) {
      this.searchQuery = value;
    },
    searchBarLabel: function searchBarLabel(value) {
      this.searchLabel = value;
    }
  },
  data: function data() {
    return {
      searchQuery: this.searchBarValue,
      searchLabel: this.searchBarLabel,
      focusedSuggestion: -1,
      // TODO: suggestions https://github.com/vuejs/vue/issues/5443#issuecomment-380212050
      dropdownItems: this.searchBarDropdown
    };
  },
  mounted: function mounted() {
    this.$refs.searchQueryField.focus();
  }
});
// CONCATENATED MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorSearchBar_FactorSearchBarvue_type_script_lang_js_ = (FactorSearchBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=style&index=0&lang=scss&
var FactorSearchBarvue_type_style_index_0_lang_scss_ = __webpack_require__("ad7e");

// CONCATENATED MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue






var FactorSearchBar_component = normalizeComponent(
  FactorSearchBar_FactorSearchBarvue_type_script_lang_js_,
  FactorSearchBarvue_type_template_id_744523ab_render,
  FactorSearchBarvue_type_template_id_744523ab_staticRenderFns,
  false,
  null,
  null,
  null
  
)


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FactorHeadervue_type_script_lang_js_ = ({
  name: 'FactorHeader',
  components: {
    FactorSearchBar: components_FactorSearchBar,
    FactorShowMore: components_FactorShowMore,
    FactorIcon: components_FactorIcon
  },
  props: {
    hideSearchBar: {
      type: Boolean,
      default: false
    },
    searchBarConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    searchBarLabel: {
      type: String,
      default: ''
    },
    searchBarValue: {
      type: String,
      default: ''
    },
    noLogo: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    factorSearchSubmitted: function factorSearchSubmitted(value) {
      this.$emit('factor:search:submitted', {
        search: value
      });
    },

    searchBarKeyup(e) {
      if (!this.searchBarConfig.onKeyUp) {
        return;
      }

      this.searchBarConfig.onKeyUp(e);
    },

    searchBarDropdownClicked(item) {
      if (!this.searchBarConfig.onDropdownClicked) {
        return;
      }

      this.searchBarConfig.onDropdownClicked(item);
    },
    factorSearchClear: function factorSearchClear() {
      if (!this.searchBarConfig.onClearQuery) {
        return;
      }

      this.$emit('factor:search:clear');
    }

  },
  computed: {
    hasLogoSlot() {
      return !!this.$slots['logo'];
    },
    searchBarLabelDisplay: function searchBarLabelDisplay() {
      if (!this.searchBarLabel) {
        return '';
      }

      return this.searchBarLabel;
    },
    searchBarValueDisplay: function searchBarValueDisplay() {
      if (!this.searchBarValue) {
        return '';
      }

      return this.searchBarValue;
    },

    searchBarSuggestions() {
      if (!this.searchBarConfig.suggestions) {
        return [];
      }

      return this.searchBarConfig.suggestions;
    },

    searchBarDropdownEnabled() {
      if (this.searchBarConfig.dropdownEnabled === undefined) {
        return true;
      }

      return this.searchBarConfig.dropdownEnabled;
    }

  }
});
// CONCATENATED MODULE: ./src/components/FactorHeader/FactorHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorHeader_FactorHeadervue_type_script_lang_js_ = (FactorHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FactorHeader/FactorHeader.vue

        module.exports = function(key) {
          return keys[key] || (keys[key] = uid(key));
        };

        /***/
      },




/* normalize component */

var FactorHeader_component = normalizeComponent(
  FactorHeader_FactorHeadervue_type_script_lang_js_,
  FactorHeadervue_type_template_id_211131a0_render,
  FactorHeadervue_type_template_id_211131a0_staticRenderFns,
  false,
  null,
  null,
  null
  
  var style0 = __webpack_require__("98b6")
if (style0.__inject__) style0.__inject__(context)

}

/* harmony default export */ var components_FactorHeader = (FactorHeader);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorFooter/FactorFooter.vue?vue&type=template&id=eb9a09de&
var FactorFootervue_type_template_id_eb9a09de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"f-footer"},[_vm._t("links")],2)}
var FactorFootervue_type_template_id_eb9a09de_staticRenderFns = []

var FactorHeader_component = normalizeComponent(
  FactorHeader_FactorHeadervue_type_script_lang_js_,
  FactorHeadervue_type_template_id_8cd5d416_render,
  FactorHeadervue_type_template_id_8cd5d416_staticRenderFns,
  false,
  FactorHeader_injectStyles,
  null,
  null
  ,true
)

          var hook;
          if (moduleIdentifier) {
            // server build

              context =
                context || // cached call
                (this.$vnode && this.$vnode.ssrContext) || // stateful
                (this.parent &&
             
              }
              // inject component styles
              if (injectStyles) {
                injectStyles.call(this, context);
              }
              // register component module identifier for async chunk inferrence
              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            };
            // used by ssr in case component is cached and beforeCreate
 h h er_=
 CONCATENATED MODULE: ./src/components/FactorIcon/index.js

        /* harmony default export */ var components_FactorIcon = FactorIcon;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
  
        //
        //
        //
        //
                ) {
                  e.preventDefault();
                  this.focusedSuggestion += 1;
                } else if (e.keyCode === 38 && this.focusedSuggestion > 0) {
                  e.preventDefault();
                  this.focusedSuggestion -= 1;
                } else if (e.keyCode === 13 && this.focusedSuggestion > -1) {
                  if (this.focusedSuggestion > -1) {
                    e.preventDefa
                      'factor:search-suggestions:clicked',
                      this.dropdownItems[this.focusedSuggestion],
                    );
                  } else if (this.focusedSuggestion == -1) {
                    this.dropdownItems = [];
           onDropdownItemClick: function onDropdownItemClick(item) {
              this.$emit('factor:search-suggestions:clicked', item);
            },
          },
          watch: {
            searchBarValue: function searchBarValue(value) {
              this.searchQuery = value;
            },
            searchBarLabel: function searchBarLabel(value) {
              this.searchLabel = value;
            },
          },
            return {
              searchQuery: this.searchBarValue,
              searchLabel: this.searchBarLabel,
              focusedSuggestion: -1,
              // TODO: suggestions https://github.com/vuejs/vue/issues/5443#issuecomment-380212050
              dropdownItems: [],
            };
          },
          mounted: function mounted() {
            this.$refs.searchQueryField.focus();
          },
        };
        // CONCATENATED MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=script&lang=js&
        /* harmony default export */ var FactorSearchBar_FactorSearchBarvue_type_script_lang_js_ = FactorSearchBarvue_type_script_lang_js_;
        // EXTERNAL MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=style&index=0&lang=scss&
        var FactorSearchBarvue_type_style_index_0_lang_scss_ = __webpack_require__(
          'ad7e',
        );

        // CONCATENATED MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue

        /* normalize component */

        var FactorSearchBar_component = normalizeComponent(
          FactorSearchBar_FactorSearchBarvue_type_script_lang_js_,
          FactorSearchBarvue_type_template_id_f84e248e_render,
          FactorSearchBarvue_type_template_id_f84e248e_staticRenderFns,
          false,
          null,
          null,
          null,
        );
      L  _  'div',
            {
              class: {
                'show-more': true,
                'show-more--transition': _vm.transition,
                'show-more--expanded': _vm.isExpanded,
              },
            },
            [
              _vm.overflowBefore
                ? _c(
                    'transition',
                    { attrs: { name: 'show-more__overflow-' } },
                    [
             
                              staticClass: 'show-more__overflow',
                              attrs: { tabindex: '-1' },
                            },
                            [_vm._t('overflow')],
                            2,
                          )
                        : _vm._e(),
                    ],
                  )
                : _vm._e(),
              _c(
          f       }),
                    (_obj[_vm.buttonClass] = !!_vm.buttonClass),
                    _obj),
                  attrs: {
                    'aria-expanded': _vm.isExpanded ? 'true' : 'false',
                  },
                  on: { click: _vm.toggleOverflow },
                },
                [
                  _vm.isExpanded
             
              ),
              _vm.overflowBefore === false
                ? _c(
                    'transition',
                                keyup: function($event) {
                                  if (
                                    !$event.type.indexOf('key') &&
                                    _vm._k(
                                      $event.keyCode,
                                      'esc',
                                      27,
             
                                    )
                                  ) {
                                    return null;
                                  }
                                  return _vm.toggleOverflow($event);
                                },
                              },
                            },
                            [_vm._t('overflow')],
                            2,
                          )
         
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        /* harmony default export */ var FactorShowMorevue_type_script_lang_js_ = {
          name: 'ShowMore',
          props: {
            buttonText: String,
            alternateButtonText: String,
            buttonClass: String,
            transition: Boolean,
            closeWhenClickedOutside: {
              type: Boolean,
              default: false,
            },
            closeOnUpdate: {
              type: Boolean,
              default: false,
            },
            moveFocus: {
              type: Boolean,
              default: true,
            },
            overflowBefore: {
              type: Boolean,
              default: true,
            },
            buttonTextVisuallyHidden: {
              type: Boolean,
              default: false,
            },
            updateIndicator: String,
          },
          methods: {
            toggleOverflow() {
              this.isExpanded = !this.isExpanded;
            },

            handleDocumentClick(event) {
              if (
                this.$refs.button &&
                this.$refs.button.contains(event.target)
              ) {
                event.stopPropagation();
                return;
              }

              var expandedEl = this.$refs.overflowContentElement
                ? this.$refs.overflowContentElement.firstElementChild
                : null; // closes overflow content if clicked anywhere, except the
              // overflowing content itself or elements in the overflow content

              if (
                expandedEl === null ||
                (event.target !== expandedEl &&
                  !expandedEl.contains(event.target))
              ) {
                this.isExpanded = false;
              } // if clicked on a link or button anywhere, close the overflow content
              // a delay is needed since otherwise links aren't followed

              if (
                event.target.tagName === 'A' ||
                event.target.tagName === 'BUTTON'
              ) {
                setTimeout(() => {
                  this.isExpanded = false;
                }, 150);
              }
            },
          },

          data() {
            return {
              isExpanded: false,
            };
          },

          watch: {
            updateIndicator(val, old) {
              if (this.closeOnUpdate && old && old !== val) {
                this.isExpanded = false;
              }
            },
          },
          computed: {
            buttonTextClass() {
              var buttonClass = '';

              if (this.buttonTextVisuallyHidden) {
                buttonClass = ' visually-hidden';
              }

              return buttonClass;
            },
          },

          updated() {
            var overflowContent = this.$refs.overflowContentElement;

            if (this.isExpanded && this.moveFocus) {
              overflowContent.focus();
            }

            if (this.isExpanded && this.closeWhenClickedOutside) {
              document.addEventListener('click', this.handleDocumentClick);
              document.addEventListener('touchstart', this.handleDocumentClick);
            } else if (this.closeWhenClickedOutside) {
              document.removeEventListener('click', this.handleDocumentClick);
              document.removeEventListener(
                'touchstart',
                this.handleDocumentClick,
              );
            }
          },
        };
        // CONCATENATED MODULE: ./src/components/FactorShowMore/FactorShowMore.vue?vue&type=script&lang=js&
        /* harmony default export */ var FactorShowMore_FactorShowMorevue_type_script_lang_js_ = FactorShowMorevue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/components/FactorShowMore/FactorShowMore.vue

        function FactorShowMore_injectStyles(context) {
          var style0 = __webpack_require__('4430');
          if (style0.__inject__) style0.__inject__(context);
        }

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorFooter/FactorFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var FactorFootervue_type_script_lang_js_ = ({
  name: 'Footer'
});
// CONCATENATED MODULE: ./src/components/FactorFooter/FactorFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorFooter_FactorFootervue_type_script_lang_js_ = (FactorFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FactorFooter/FactorFooter.vue



function FactorFooter_injectStyles (context) {
  
  var style0 = __webpack_require__("1f6e")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FactorFooter_component = normalizeComponent(
  FactorFooter_FactorFootervue_type_script_lang_js_,
  FactorFootervue_type_template_id_eb9a09de_render,
  FactorFootervue_type_template_id_eb9a09de_staticRenderFns,
  false,
  FactorFooter_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var FactorFooter = (FactorFooter_component.exports);
// CONCATENATED MODULE: ./src/components/FactorFooter/index.js

/* harmony default export */ var components_FactorFooter = (FactorFooter);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorProfileNav/FactorProfileNav.vue?vue&type=template&id=73da75ea&
var FactorProfileNavvue_type_template_id_73da75ea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"f-pn"},[(_vm.showMenu)?[_c('FactorShowMore',{attrs:{"buttonText":_vm.getComponentText('buttonText'),"alternateButtonText":_vm.getComponentText('alternateButton'),"buttonClass":"top-bar__user-menu-toggle","closeWhenClickedOutside":true,"buttonTextVisuallyHidden":true}},[_c('template',{slot:"overflow"},[_c('FactorUserMenu',{attrs:{"avatar":_vm.avatar,"loginLink":_vm.loginLink,"strings":_vm.strings}})],1),_c('template',{slot:"button-content"},[(_vm.avatar.loaded)?_c('FactorUserPicture',{attrs:{"avatar":{
            picture: _vm.avatar.imageUrl,
            username: _vm.avatar.username,
          },"size":40,"pictureSize":100,"showStaffIcon":_vm.avatar.isStaff}}):_c('FactorUserPicture',{attrs:{"size":40,"pictureSize":100,"showStaffIcon":_vm.avatar.isStaff}})],1)],2)]:_c('FactorExternalButtonLink',{staticClass:"top-bar__login",attrs:{"href":_vm.loginLink,"iconRight":"chevron-right","text":_vm.getComponentText('loginText')}})],2)}
var FactorProfileNavvue_type_template_id_73da75ea_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorProfileNav/FactorProfileNav.vue?vue&type=template&id=73da75ea&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorProfileNav/FactorProfileNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 import { FactorUserMenu } from '../FactorUserMenu/FactorUserMenu.vue';


console.log('FactorUserMenu: ', components_FactorUserMenu); // const FactorShowMore = () => ({});
// const FactorUserPicture = () => ({});
// const FactorExternalButtonLink = () => ({});

/* harmony default export */ var FactorProfileNavvue_type_script_lang_js_ = ({
  name: 'FactorProfileNav',
  components: {
    FactonText: '',
        alternateButtonText: '',
        loginText: '',
        closeMenuHidden: '',
        userMenuMyProfile: '',
        userMenuDashboard: '',
        userMenuNotifications: '',
        userMenuLogout: ''
      })    },

      type: Boolean,
      default: false
    }
  },
  methods: {
    getComponentText(field) {
      return getStrings(this.strings, field);
    }

  },
  computed: {}
});
 /* harA
/* harmony default export */ var FactorProfileNav = (FactorProfileNav_component.exports);
// CONCATENATED MODULE: ./src/components/FactorProfileNav/index.js

/* harmony default export */ var components_FactorProfileNav = (FactorProfileNav);
// CONCATENATED MODULE: ./src/components/index.js









/* harmony default export */ var templates_FactorBlockTemplate = (FactorBlockTemplate);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue?vue&type=template&id=39239fe6&
var FactorFlowTemplatevue_type_template_id_39239fe6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"f-template-outer flow-template",attrs:{"id":"factor-template"}},[_c('FactorHeader',{attrs:{"searchBarConfig":_vm.searchBarConfig}},[(_vm.hasLogo)?_c('template',{slot:"logo"},[_vm._t("logo")],2):_vm._e(),_c('template',{slot:"nav"},[_vm._t("nav")],2),_c('template',{slot:"profile"},[_vm._t("profile")],2)],2),_c('main',{staticClass:"f-main"},[_vm._t("main")],2),_c('FactorFooter',[_c('template',{slot:"links"},[_vm._t("footer-links")],2)],2)],1)}
var FactorFlowTemplatevue_type_template_id_39239fe6_staticRenderFns = []




// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//{e
var FactorBlockTemplate_component = normalizeComponent(
  FactorBlockTemplate_FactorBlockTemplatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FactorBlockTemplate = (FactorBlockTemplate_component.exports);
// CONCATENATED MODULE: ./src/templates/FactorBlockTemplate/index.js

/* harmony default export */ var templates_FactorFlowTemplate = (FactorFlowTemplate);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorPanel/FactorPanel.vue?vue&type=template&id=772d172a&
var FactorPanelvue_type_template_id_772d172a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{class:{ panel: true, 'full-on-mobile': _vm.fullOnMobile }},[_vm._t("meta"),(!_vm.hideContent && _vm.hasTitle)?_c('header',{staticClass:"panel__header"},[_c('h2',[_vm._v(_vm._s(_vm.title))]),_vm._t("header")],2):_vm._e(),(!_vm.hideContent)?_c('div',{class:{ panel__content: true, full: _vm.fullContent }},[_vm._t("content")],2):_vm._e()],2)}
var FactorPanelvue_type_template_id_772d172a_staticRenderFns = []


// CONCATENATED MODULE: ./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue?vue&type=template&id=39239fe6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FactorPanelvue_type_script_lang_js_ = ({
  name: 'FactorPanel',
  props: {
    fullContent: {
      type: Boolean,
      default: false
    },
    fullOnMobile: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    hideContent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasTitle: function hasTitle() {
      return this.title !== '';
    }
  }
});
// CONCATENATED MODULE: ./src/components/FactorPanel/FactorPanel.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorPanel_FactorPanelvue_type_script_lang_js_ = (FactorPanelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FactorPanel/FactorPanel.vue?vue&type=style&index=0&lang=scss&
var FactorPanelvue_type_style_index_0_lang_scss_ = __webpack_require__("ec0b");

// CONCATENATED MODULE: ./src/components/FactorPanel/FactorPanel.vue






/* normalize component */

var FactorPanel_component = normalizeComponent(
  FactorPanel_FactorPanelvue_type_script_lang_js_,
  FactorPanelvue_type_template_id_772d172a_render,
  FactorPanelvue_type_template_id_772d172a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FactorPanel = (FactorPanel_component.exports);
// CONCATENATED MODULE: ./src/components/FactorPanel/index.js

/* harmony default export */ var components_FactorPanel = (FactorPanel);
// CONCATENATED MODULE: ./src/index.js








// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fc34":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chevron-down.dcc781ff.svg";

/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ })

/* harmony default export */ var FactorFlowTemplatevue_type_script_lang_js_ = ({
iopermTe eivE]yeigdrck
oftcCtsutr
Yslb