module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
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

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

    /***/ '1f6e': /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        '4d5d',
      );
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__,
      );
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export =
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ '1f9a': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/phone.2835bb33.svg';

      /***/
    },

    /***/ '22f4': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/chain.160a5971.svg';

/***/ "0d3b":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ "0f39":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/question-mark-circle.229d4279.svg";

/***/ }),

/***/ "13ad":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mozilla-m.979081bc.svg";

/***/ }),

/***/ "14a4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grid.58794868.svg";

      module.exports = global;

      /***/
    },

    /***/ '4430': /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorShowMore_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        '246e',
      );
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorShowMore_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorShowMore_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorShowMore_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== 'default')
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorShowMore_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__['default'] =
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorShowMore_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ '44ad': /***/ function(module, exports, __webpack_require__) {
      var fails = __webpack_require__('d039');
      var classof = __webpack_require__('c6b6');

      var split = ''.split;

      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      module.exports = fails(function() {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins
        return !Object('z').propertyIsEnumerable(0);
      })
        ? function(it) {
            return classof(it) == 'String' ? split.call(it, '') : Object(it);
          }
        : Object;

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

    /***/ '484a': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/list.2ee365aa.svg';

      /***/
    },

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

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

/***/ "4ca5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dino.4ff77442.svg";

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

/***/ "4d66":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user.d0435822.svg";

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

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

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.appent` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
  $({ global: true, enumerable: true, forced: true }, {
    fetch: function fetch(input /* , init */) {
      var args = [input];
      var init, body, headers;
      if (arguments.length > 1) {
        init = arguments[1];
        if (isObject(init)) {
          body = init.body;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers(init.headers) : new Headers();
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            init = create(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        args.push(init);
      } return $fetch.apply(this, args);
    }
  });
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

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

/***/ "5899":
/***/ (function(module, exports) {

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

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "6003":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chevron-up.873e8b5d.svg";

/***/ }),

/***/ "69a3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/toggle-right.e111a8af.svg";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

/***/ "69d9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/info.44cd334e.svg";

/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e716");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

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

/***/ "6f9f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dashboard.138b0781.svg";

/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var classof = __webpack_require__("c6b6");
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "76f4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/github.e3f91087.svg";

/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

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

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "7cde":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/successSquare.18c271a9.svg";

/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

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

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "833d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/crown.66631ce3.svg";

/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

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

module.exports = {};


/***/ }),

/***/ "87bc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/moz.2a2aa047.svg";

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

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

/***/ "8acc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/users-outline.fcd0300a.svg";

/***/ }),

/***/ "8d41":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sliders.0602a029.svg";

/***/ }),

/***/ "8e5f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/collapse.8f0c3f42.svg";

/***/ }),

/***/ "9020":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9028":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/external.d9610834.svg";

/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d69d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "log-out",
  "use": "log-out-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"log-out\"><path d=\"M11.373 20.182c0 .49-.328.818-.82.818H6.459C5.065 21 4 19.936 4 18.545V5.455C4 4.064 5.065 3 6.458 3h4.096c.491 0 .819.327.819.818 0 .491-.328.818-.82.818H6.459c-.492 0-.82.328-.82.819v13.09c0 .491.328.819.82.819h4.096c.491 0 .819.327.819.818zm8.93-7.855c.081-.163.081-.409 0-.654-.083-.082-.083-.164-.165-.246l-3.276-3.272a.793.793 0 00-1.147 0 .79.79 0 000 1.145l1.884 1.882H9.734c-.491 0-.819.327-.819.818 0 .49.328.818.82.818h7.864L15.715 14.7a.79.79 0 000 1.145c.163.164.41.246.573.246.164 0 .41-.082.574-.246l3.276-3.272c.082-.082.164-.164.164-.246z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "98b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

/***/ "99da":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user-plus.1ef4e002.svg";

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

/***/ "a00d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/org-chart.ae705be7.svg";

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

/***/ "a841":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/expand.6f114f09.svg";

/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

      /***/
    },

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


    /***/ e716: /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


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

var fails = __webpack_require__("d039");

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
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

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "c581":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/matrix.87daea88.svg";

/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
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

/***/ "ea67":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "eb3e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "eb6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "successSquare",
  "use": "successSquare-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"successSquare\"><path fill=\"currentColor\" d=\"M19 2c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3h14zm-2.3 8.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L11 13.6l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3 3c.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "ec0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorPanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9020");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorPanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorPanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorPanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorPanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorPanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c9d5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/idcard.3d0a0d19.svg";

/***/ }),

/***/ "ee6b":
/***/ (function(module, exports, __webpack_require__) {

/**
* A handy class to calculate color values.
*
* @version 1.0
* @author Robert Eisele <robert@xarg.org>
* @copyright Copyright (c) 2010, Robert Eisele
* @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/
* @license http://www.opensource.org/licenses/bsd-license.php BSD License
*
*/

(function() {

	// helper functions for that ctx
	function write(buffer, offs) {
		for (var i = 2; i < arguments.length; i++) {
			for (var j = 0; j < arguments[i].length; j++) {
				buffer[offs++] = arguments[i].charAt(j);
			}
		}
	}

	function byte2(w) {
		return String.fromCharCode((w >> 8) & 255, w & 255);
	}

	function byte4(w) {
		return String.fromCharCode((w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255);
	}

	function byte2lsb(w) {
		return String.fromCharCode(w & 255, (w >> 8) & 255);
	}

	// modified from original source to support NPM
	var PNGlib = function(width,height,depth) {

		this.width   = width;
		this.height  = height;
		this.depth   = depth;

		// pixel data and row filter identifier size
		this.pix_size = height * (width + 1);

		// deflate header, pix_size, block headers, adler32 checksum
		this.data_size = 2 + this.pix_size + 5 * Math.floor((0xfffe + this.pix_size) / 0xffff) + 4;

		// offsets and sizes of Png chunks
		this.ihdr_offs = 0;									// IHDR offset and size
		this.ihdr_size = 4 + 4 + 13 + 4;
		this.plte_offs = this.ihdr_offs + this.ihdr_size;	// PLTE offset and size
		this.plte_size = 4 + 4 + 3 * depth + 4;
		this.trns_offs = this.plte_offs + this.plte_size;	// tRNS offset and size
		this.trns_size = 4 + 4 + depth + 4;
		this.idat_offs = this.trns_offs + this.trns_size;	// IDAT offset and size
		this.idat_size = 4 + 4 + this.data_size + 4;
		this.iend_offs = this.idat_offs + this.idat_size;	// IEND offset and size
		this.iend_size = 4 + 4 + 4;
		this.buffer_size  = this.iend_offs + this.iend_size;	// total PNG size

		this.buffer  = new Array();
		this.palette = new Object();
		this.pindex  = 0;

		var _crc32 = new Array();

		// initialize buffer with zero bytes
		for (var i = 0; i < this.buffer_size; i++) {
			this.buffer[i] = "\x00";
		}

		// initialize non-zero elements
		write(this.buffer, this.ihdr_offs, byte4(this.ihdr_size - 12), 'IHDR', byte4(width), byte4(height), "\x08\x03");
		write(this.buffer, this.plte_offs, byte4(this.plte_size - 12), 'PLTE');
		write(this.buffer, this.trns_offs, byte4(this.trns_size - 12), 'tRNS');
		write(this.buffer, this.idat_offs, byte4(this.idat_size - 12), 'IDAT');
		write(this.buffer, this.iend_offs, byte4(this.iend_size - 12), 'IEND');

		// initialize deflate header
		var header = ((8 + (7 << 4)) << 8) | (3 << 6);
		header+= 31 - (header % 31);

		write(this.buffer, this.idat_offs + 8, byte2(header));

		// initialize deflate block headers
		for (var i = 0; (i << 16) - 1 < this.pix_size; i++) {
			var size, bits;
			if (i + 0xffff < this.pix_size) {
				size = 0xffff;
				bits = "\x00";
			} else {
				size = this.pix_size - (i << 16) - i;
				bits = "\x01";
			}
			write(this.buffer, this.idat_offs + 8 + 2 + (i << 16) + (i << 2), bits, byte2lsb(size), byte2lsb(~size));
		}

		/* Create crc32 lookup table */
		for (var i = 0; i < 256; i++) {
			var c = i;
			for (var j = 0; j < 8; j++) {
				if (c & 1) {
					c = -306674912 ^ ((c >> 1) & 0x7fffffff);
				} else {
					c = (c >> 1) & 0x7fffffff;
				}
			}
			_crc32[i] = c;
		}

		// compute the index into a png for a given pixel
		this.index = function(x,y) {
			var i = y * (this.width + 1) + x + 1;
			var j = this.idat_offs + 8 + 2 + 5 * Math.floor((i / 0xffff) + 1) + i;
			return j;
		}

		// convert a color and build up the palette
		this.color = function(red, green, blue, alpha) {

			alpha = alpha >= 0 ? alpha : 255;
			var color = (((((alpha << 8) | red) << 8) | green) << 8) | blue;

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

/* harmony default export */ var components_FactorTinyStaffIcon = (FactorTinyStaffIcon);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorUserPicture/FactorUserPicture.vue?vue&type=template&id=74283f9c&
var FactorUserPicturevue_type_template_id_74283f9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[{ 'user-picture': true, identicon: _vm.identicon }, _vm.modifier]},[(_vm.src)?_c('img',{ref:"img",class:_vm.imageClass,attrs:{"src":_vm.src,"alt":"","width":_vm.size,"role":"presentation","aria-hidden":"true"}}):_vm._e(),(_vm.showStaffIcon)?_c('FactorIcon',{staticClass:"staff-icon",attrs:{"width":8,"height":8,"id":"mozilla-m"}}):_vm._e()],1)}
var FactorUserPicturevue_type_template_id_74283f9c_staticRenderFns = []

/***/ "d683":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/crown-fill.7cc5dca9.svg";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__("2b3d");

/***/ "da8d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/email.ab4f6122.svg";


/***/ "dc3c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cpg.478aeaee.svg";

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};



/***/ "e0d5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/square.4180ba9d.svg";

/***/ }),

/***/ "e4a8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/circle-fill.3651277c.svg";


/***/ "e716":
/***/ (function(module, exports, __webpack_require__) {



/***/ "ea67":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

function sha256(str) {
  var buffer = new TextEncoder('utf-8').encode(str);
  return crypto.subtle.digest('SHA-256', buffer).then(hex);
}

function generateIdenticon(_x, _x2) {
  return _generateIdenticon.apply(this, arguments);
}

function _generateIdenticon() {
  _generateIdenticon = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, size) {
    var hash, identicon;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(window.crypto && window.crypto.subtle)) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return sha256(username);

          case 3:
            hash = _context.sent;
            _context.next = 7;
            break;

          case 6:
            hash = '04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb'; // 'user'

          case 7:
            identicon = new identicon_default.a(hash, {
              size,
              format: 'svg'
            });
            return _context.abrupt("return", `data:image/svg+xml;base64,${identicon.toString()}`);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _generateIdenticon.apply(this, arguments);
}

function avatarUrl(profilePicturePath) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 264;
  var own = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var url = new URL(profilePicturePath, window.location.href);
  url.hostname = window.location.hostname;
  url.searchParams.set('size', size);
  url.searchParams.set('own', own);
  return url.toString();
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorUserPicture/FactorUserPicture.vue?vue&type=script&lang=js&

/***/ "f0c2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chevron-right.f25a9b7b.svg";

    avatar() {
      this.updateUserPicture();
    }

/***/ "f1f4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/triangle.842ce4d7.svg";

        if (this.avatar.picture === 'empty:') {
          this.src = '';
        } else if (this.avatar.picture) {
          this.src = this.avatar.picture;
        } else {
          this.src = avatarUrl(this.avatar.picture, this.slot, this.ownPicture);
        }
      }
    }

/***/ "f531":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slack.41bc65a6.svg";



function FactorUserPicture_injectStyles (context) {
  
  var style0 = __webpack_require__("a1f1")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FactorUserPicture_component = normalizeComponent(
  FactorUserPicture_FactorUserPicturevue_type_script_lang_js_,
  FactorUserPicturevue_type_template_id_74283f9c_render,
  FactorUserPicturevue_type_template_id_74283f9c_staticRenderFns,
  false,
  FactorUserPicture_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var FactorUserPicture = (FactorUserPicture_component.exports);
// CONCATENATED MODULE: ./src/components/FactorUserPicture/index.js

/* harmony default export */ var components_FactorUserPicture = (FactorUserPicture);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=template&id=13c90fbc&
var FactorSearchBarvue_type_template_id_13c90fbc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"search-bar",attrs:{"method":"GET"},on:{"submit":_vm.handleSubmit}},[_c('fieldset',[_c('legend',{staticClass:"visually-hidden"},[_vm._v("search")]),_c('div',{staticClass:"search-bar__fields"},[_c('label',{staticClass:"visually-hidden",attrs:{"for":"search-query"}},[_vm._v("search-input")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchQuery),expression:"searchQuery"}],ref:"searchQueryField",staticClass:"search-bar__input",attrs:{"type":"text","id":"search-query","name":"query","placeholder":_vm.searchBarLabel,"autocomplete":_vm.dropdownEnabled ? 'off' : 'on'},domProps:{"value":(_vm.searchQuery)},on:{"keyup":_vm.handleKeyUp,"blur":_vm.onSearchQueryBlur,"focus":_vm.onSearchQueryFocus,"input":function($event){if($event.target.composing){ return; }_vm.searchQuery=$event.target.value}}}),(_vm.searchQuery && _vm.searchQuery.length > 0)?_c('button',{staticClass:"search-bar__clear-button",attrs:{"type":"button"},on:{"click":_vm.clearQuery}},[_c('FactorIcon',{attrs:{"id":"x","width":20,"height":20}}),_c('span',{staticClass:"visually-hidden"},[_vm._v("clear search")])],1):_vm._e(),_c('button',{staticClass:"search-bar__submit",attrs:{"type":"submit"}},[_c('FactorIcon',{attrs:{"id":"search","width":18,"height":18}}),_c('span',{staticClass:"visually-hidden"},[_vm._v("search")])],1)])]),(_vm.dropdownItems.length && _vm.dropdownEnabled)?_c('ul',{staticClass:"search-bar__dropdown"},_vm._l((_vm.dropdownItems),function(item,idx){return _c('li',{key:idx,class:{
        'dropdown-item': true,
        active: _vm.focusedSuggestion === idx,
      },on:{"mousedown":function($event){return _vm.onDropdownItemClick(item)}}},[_vm._v(" "+_vm._s(item.label)+" ")])}),0):_vm._e()])}
var FactorSearchBarvue_type_template_id_13c90fbc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=template&id=13c90fbc&

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook;
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context);
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook];
          }
        }

        return {
          exports: scriptExports,
          options: options,
        };
      }

    clearQuery() {
      this.searchQuery = '';
      this.$refs.searchQueryField.focus();
      this.$emit('clear-query');
    },

    onDropdownItemClick(item) {
      this.$emit('search-bar-dropdown-clicked', item);
    }

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=template&id=25781fda&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"f-template-outer block-template",attrs:{"id":"factor-template"}},[_c('FactorHeader',{attrs:{"searchBarConfig":_vm.searchBarConfig}},[(_vm.hasLogo)?_c('template',{slot:"logo"},[_vm._t("logo")],2):_vm._e(),_c('template',{slot:"nav"},[_vm._t("nav")],2),_c('template',{slot:"profile"},[_vm._t("profile")],2)],2),_c('main',{staticClass:"f-main"},[_vm._t("main")],2),_c('FactorFooter',[_c('template',{slot:"links"},[_vm._t("footer-links")],2)],2)],1)}
var staticRenderFns = []

    searchBarValue(value) {
      this.searchQuery = value;
    }

  },

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorHeader/FactorHeader.vue?vue&type=template&id=211131a0&
var FactorHeadervue_type_template_id_211131a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"f-header"},[_c('div',{staticClass:"f-header__column"},[(!_vm.noLogo)?_vm._t("logo"):_vm._e(),(!_vm.hasLogoSlot && !_vm.noLogo)?_c('a',{staticClass:"f-header__logo-link",attrs:{"href":"/"}},[_c('img',{staticClass:"f-header__logo",attrs:{"src":"https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg"}})]):_vm._e()],2),_c('div',{staticClass:"f-header__column"},[(!_vm.hideSearchBar)?_c('FactorSearchBar',{staticClass:"f-header__search",attrs:{"searchBarLabel":_vm.searchBarLabelDisplay,"searchBarValue":_vm.searchBarValueDisplay,"searchBarDropdown":_vm.searchBarSuggestions},on:{"keyup":_vm.searchBarKeyup,"factor:search:submitted":_vm.factorSearchSubmitted,"factor:search:clear":_vm.factorSearchClear,"factor:search-suggestions:clicked":_vm.searchBarDropdownClicked}}):_vm._e()],1),_c('div',{staticClass:"f-header__column"},[_c('nav',{staticClass:"f-nav"},[_vm._t("nav")],2),_c('div',{staticClass:"f-profile"},[_vm._t("profile")],2)])])}
var FactorHeadervue_type_template_id_211131a0_staticRenderFns = []

  mounted() {
    this.$refs.searchQueryField.focus();
  }

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

/* harmony default export */ var FactorSearchBar = (FactorSearchBar_component.exports);
// CONCATENATED MODULE: ./src/components/FactorSearchBar/index.js

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
/* harmony default export */ var FactorShowMorevue_type_script_lang_js_ = ({
  name: 'FactorShowMore',
  props: {
    width: Number,
    height: Number,
    id: String
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

  },
  computed: {
    buttonTextClass() {
      var buttonClass = '';

      if (this.buttonTextVisuallyHidden) {
        buttonClass = ' visually-hidden';
      }

      return buttonClass;
    }

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
      document.removeEventListener('touchstart', this.handleDocumentClick);
    }
  }

});
// CONCATENATED MODULE: ./src/components/FactorShowMore/FactorShowMore.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorShowMore_FactorShowMorevue_type_script_lang_js_ = (FactorShowMorevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FactorShowMore/FactorShowMore.vue






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

/* harmony default export */ var FactorShowMore = (FactorShowMore_component.exports);
// CONCATENATED MODULE: ./src/components/FactorShowMore/index.js

/* harmony default export */ var components_FactorShowMore = (FactorShowMore);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorUserMenu/FactorUserMenu.vue?vue&type=template&id=598b5ce1&
var FactorUserMenuvue_type_template_id_598b5ce1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"userMenuEl",staticClass:"user-menu"},[_c('div',{staticClass:"user-menu__header"},[_c('button',{staticClass:"user-menu__close-avatar",attrs:{"type":"button"}},[_c('span',{staticClass:"visually-hidden"},[_vm._v(_vm._s(_vm.getComponentText('closeMenuHidden')))]),(_vm.avatar.loaded)?_c('FactorUserPicture',{attrs:{"avatar":{
          picture: _vm.avatar.imageUrl,
          username: _vm.avatar.username,
        },"size":40,"pictureSize":100,"showStaffIcon":_vm.avatar.isStaff}}):_c('FactorUserPicture',{attrs:{"size":40,"pictureSize":100,"showStaffIcon":_vm.avatar.isStaff}})],1),_c('div',{staticClass:"user-menu__name"},[_c('span',{staticClass:"user-menu__header-name"},[_vm._v(_vm._s(_vm.avatar.firstName)+" "+_vm._s(_vm.avatar.lastName))]),_c('span',{staticClass:"user-menu__header-email"},[_vm._v(_vm._s(_vm.avatar.primaryEmail))])]),_c('button',{staticClass:"user-menu__close-button",attrs:{"id":"user-menu-close-button","type":"button"}},[_c('FactorIcon',{attrs:{"id":"x","width":24,"height":24}})],1)]),_c('ul',{staticClass:"user-menu__items"},_vm._l((_vm.menuItems),function(linkItem,idx){return _c('li',{key:idx},[(linkItem.hasOwnProperty('link'))?_c('a',{attrs:{"href":linkItem.link}},[_c('span',[_vm._v(_vm._s(linkItem.text))]),_c('FactorIcon',{attrs:{"id":linkItem.icon,"width":24,"height":24}})],1):_c('a',{attrs:{"href":linkItem.url}},[_c('span',[_vm._v(_vm._s(linkItem.text))]),_c('FactorIcon',{attrs:{"id":linkItem.icon,"width":24,"height":24}})],1)])}),0),_c('a',{staticClass:"user-menu__log-out",attrs:{"href":""}},[_c('span',[_vm._v(_vm._s(_vm.getComponentText('userMenuLogout')))]),_c('FactorIcon',{attrs:{"id":"log-out","width":24,"height":24}})],1)])}
var FactorUserMenuvue_type_template_id_598b5ce1_staticRenderFns = []


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
      default: function _default() {
        return [];
      }
    }
  },
  components: {
    FactorIcon: components_FactorIcon
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






/* normalize component */

var FactorSearchBar_component = normalizeComponent(
  FactorSearchBar_FactorSearchBarvue_type_script_lang_js_,
  FactorSearchBarvue_type_template_id_744523ab_render,
  FactorSearchBarvue_type_template_id_744523ab_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FactorUserMenu = (FactorUserMenu_component.exports);
// CONCATENATED MODULE: ./src/components/FactorUserMenu/index.js

/* harmony default export */ var components_FactorUserMenu = (FactorUserMenu);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorHeader/FactorHeader.vue?vue&type=template&id=24aedc4a&
var FactorHeadervue_type_template_id_24aedc4a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"f-header"},[_c('div',{staticClass:"f-header__column"},[(!_vm.noLogo)?_vm._t("logo"):_vm._e(),(!_vm.hasLogoSlot && !_vm.noLogo)?_c('a',{staticClass:"f-header__logo-link",attrs:{"href":"/"}},[_c('img',{staticClass:"f-header__logo",attrs:{"src":"https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg"}})]):_vm._e()],2),_c('div',{staticClass:"f-header__column"},[(!_vm.hideSearchBar)?_c('FactorSearchBar',{staticClass:"f-header__search desktop",attrs:{"searchBarHandler":_vm.searchBarHandler,"searchBarLabel":_vm.searchBarLabel,"searchBarValue":_vm.searchBarValue,"searchBarDropdown":_vm.searchBarSuggestions,"dropdownEnabled":_vm.searchBarDropdownEnabled},on:{"keyup":_vm.searchBarKeyup,"search-bar-dropdown-clicked":_vm.searchBarDropdownClicked,"clear-query":_vm.searchBarClearQuery}}):_vm._e(),_c('FactorShowMore',{ref:"showMoreSearch",attrs:{"buttonText":_vm.showMoreButtonText,"alternateButtonText":_vm.showMoreAlternateButtonText,"buttonClass":"top-bar__search-toggle","closeWhenClickedOutside":true,"buttonTextVisuallyHidden":true,"moveFocus":false,"onlyMobile":true}},[_c('template',{slot:"overflow"},[(!_vm.hideSearchBar)?_c('FactorSearchBar',{staticClass:"f-header__search mobile",attrs:{"searchBarHandler":_vm.searchBarHandler,"searchBarLabel":_vm.searchBarLabel,"searchBarValue":_vm.searchBarValue,"searchBarDropdown":_vm.searchBarSuggestions,"dropdownEnabled":_vm.searchBarDropdownEnabled},on:{"keyup":_vm.searchBarKeyup,"search-bar-dropdown-clicked":_vm.searchBarDropdownClicked,"clear-query":_vm.searchBarClearQuery}}):_vm._e()],1),_c('template',{slot:"button-content"},[_c('FactorIcon',{attrs:{"id":"search","width":20,"height":20}})],1)],2)],1),_c('div',{staticClass:"f-header__column"},[_c('nav',{staticClass:"f-nav"},[_vm._t("nav")],2),_c('div',{staticClass:"f-profile"},[_vm._t("profile")],2)])])}
var FactorHeadervue_type_template_id_24aedc4a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorHeader/FactorHeader.vue?vue&type=template&id=24aedc4a&

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    },
    showMoreButtonText: {
      type: String,
      default: 'Button text'
    },
    showMoreAlternateButtonText: {
      type: String,
      default: 'Button text'
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

      /* normalize component */

      var FactorShowMore_component = normalizeComponent(
        FactorShowMore_FactorShowMorevue_type_script_lang_js_,
        FactorShowMorevue_type_template_id_1ed63faa_render,
        FactorShowMorevue_type_template_id_1ed63faa_staticRenderFns,
        false,
        FactorShowMore_injectStyles,
        null,
        null,
        true,
      );

      /* harmony default export */ var FactorShowMore =
        FactorShowMore_component.exports;
      // CONCATENATED MODULE: ./src/components/FactorShowMore/index.js

      /* harmony default export */ var components_FactorShowMore = FactorShowMore;
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
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var FactorHeadervue_type_script_lang_js_ = {
        name: 'FactorHeader',
        components: {
          FactorSearchBar: components_FactorSearchBar,
          FactorShowMore: components_FactorShowMore,
          FactorIcon: components_FactorIcon,
        },
        props: {
          hideSearchBar: {
            type: Boolean,
            default: false,
          },
          searchBarLabel: {
            type: String,
            default: '',
          },
          searchBarValue: {
            type: String,
            default: '',
          },
          noLogo: {
            type: Boolean,
            default: false,
          },
        },
        methods: {
          factorSearchSubmitted: function factorSearchSubmitted(queryObject) {
            this.$emit('factor:search:submitted', queryObject);
          },
          factorSearchKeyup: function factorSearchKeyup(_ref) {
            var event = _ref.event,
              updateSuggestions = _ref.updateSuggestions;
            this.$emit('factor:search:keyup', {
              updateSuggestions: updateSuggestions,
              event: event,
            });
          },
          factorSearchSuggestionsClicked: function factorSearchSuggestionsClicked(
            item,
          ) {
            this.$emit('factor:search-suggestions:clicked', {
              item: item,
            });
          },
          factorSearchClear: function factorSearchClear() {
            this.$emit('factor:search:clear');
          },
        },
        computed: {
          hasLogoSlot: function hasLogoSlot() {
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

            return this.searchBarConfig.value;
          },
          searchBarSuggestions: function searchBarSuggestions() {
            if (!this.searchBarConfig.suggestions) {
              return [];
            }

            return this.searchBarConfig.suggestions;
          },
          searchBarDropdownEnabled: function searchBarDropdownEnabled() {
            if (this.searchBarConfig.dropdownEnabled === undefined) {
              return true;
            }

            return this.searchBarConfig.dropdownEnabled;
          },
        },
      };
      // CONCATENATED MODULE: ./src/components/FactorHeader/FactorHeader.vue?vue&type=script&lang=js&
      /* harmony default export */ var FactorHeader_FactorHeadervue_type_script_lang_js_ = FactorHeadervue_type_script_lang_js_;
      // EXTERNAL MODULE: ./src/components/FactorHeader/FactorHeader.vue?vue&type=style&index=0&lang=scss&
      var FactorHeadervue_type_style_index_0_lang_scss_ = __webpack_require__(
        '98b6',
      );

      // CONCATENATED MODULE: ./src/components/FactorHeader/FactorHeader.vue

      /* normalize component */

      var FactorHeader_component = normalizeComponent(
        FactorHeader_FactorHeadervue_type_script_lang_js_,
        FactorHeadervue_type_template_id_023f44f0_render,
        FactorHeadervue_type_template_id_023f44f0_staticRenderFns,
        false,
        null,
        null,
        null,
      );

      /* harmony default export */ var FactorHeader =
        FactorHeader_component.exports;
      // CONCATENATED MODULE: ./src/components/FactorHeader/index.js

      /* harmony default export */ var components_FactorHeader = FactorHeader;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1cecb528-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorFooter/FactorFooter.vue?vue&type=template&id=eb9a09de&
      var FactorFootervue_type_template_id_eb9a09de_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('footer', { staticClass: 'f-footer' }, [_vm._t('links')], 2);
      };
      var FactorFootervue_type_template_id_eb9a09de_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/FactorFooter/FactorFooter.vue?vue&type=template&id=eb9a09de&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorFooter/FactorFooter.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      //
      /* harmony default export */ var FactorFootervue_type_script_lang_js_ = {
        name: 'Footer',
      };
      // CONCATENATED MODULE: ./src/components/FactorFooter/FactorFooter.vue?vue&type=script&lang=js&
      /* harmony default export */ var FactorFooter_FactorFootervue_type_script_lang_js_ = FactorFootervue_type_script_lang_js_;
      // EXTERNAL MODULE: ./src/components/FactorFooter/FactorFooter.vue?vue&type=style&index=0&lang=scss&
      var FactorFootervue_type_style_index_0_lang_scss_ = __webpack_require__(
        '1f6e',
      );

      // CONCATENATED MODULE: ./src/components/FactorFooter/FactorFooter.vue

      /* normalize component */

      var FactorFooter_component = normalizeComponent(
        FactorFooter_FactorFootervue_type_script_lang_js_,
        FactorFootervue_type_template_id_eb9a09de_render,
        FactorFootervue_type_template_id_eb9a09de_staticRenderFns,
        false,
        null,
        null,
        null,
      );

      /* harmony default export */ var FactorFooter =
        FactorFooter_component.exports;
      // CONCATENATED MODULE: ./src/components/FactorFooter/index.js

      /* harmony default export */ var components_FactorFooter = FactorFooter;
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
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var FactorBlockTemplatevue_type_script_lang_js_ = {
        name: 'FactorBlockTemplate',
        components: {
          FactorHeader: components_FactorHeader,
          FactorFooter: components_FactorFooter,
        },
        props: {
          searchBarLabel: {
            type: String,
            default: '',
          },
          searchBarValue: {
            type: String,
            default: '',
          },
        },
        methods: {
          factorSearchSubmitted: function factorSearchSubmitted(value) {
            this.$emit('factor:search:submitted', {
              search: value,
            });
          },
          factorSearchKeyup: function factorSearchKeyup(_ref) {
            var event = _ref.event,
              updateSuggestions = _ref.updateSuggestions;
            this.$emit('factor:search:keyup', {
              updateSuggestions: updateSuggestions,
              event: event,
            });
          },
          factorSearchSuggestionsClicked: function factorSearchSuggestionsClicked(
            item,
          ) {
            this.$emit('factor:search-suggestions:clicked', {
              item: item,
            });
          },
          factorSearchClear: function factorSearchClear() {
            this.$emit('factor:search:clear');
          },
        },
        computed: {
          hasLogo: function hasLogo() {
            return !!this.$slots['logo'];
          },
        },
      };
      // CONCATENATED MODULE: ./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=script&lang=js&
      /* harmony default export */ var FactorBlockTemplate_FactorBlockTemplatevue_type_script_lang_js_ = FactorBlockTemplatevue_type_script_lang_js_;
      // EXTERNAL MODULE: ./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=style&index=0&lang=scss&
      var FactorBlockTemplatevue_type_style_index_0_lang_scss_ = __webpack_require__(
        '249f',
      );

      // CONCATENATED MODULE: ./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue

      /* normalize component */

      var FactorBlockTemplate_component = normalizeComponent(
        FactorBlockTemplate_FactorBlockTemplatevue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        null,
      );

      /* harmony default export */ var FactorBlockTemplate =
        FactorBlockTemplate_component.exports;
      // CONCATENATED MODULE: ./src/templates/FactorBlockTemplate/index.js

      /* harmony default export */ var templates_FactorBlockTemplate = FactorBlockTemplate;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1cecb528-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue?vue&type=template&id=fd845d14&
      var FactorFlowTemplatevue_type_template_id_fd845d14_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          'div',
          {
            staticClass: 'f-template-outer flow-template',
            attrs: { id: 'factor-template' },
          },
          [
            _c(
              'FactorHeader',
              {
                attrs: {
                  searchBarLabel: _vm.searchBarLabel,
                  searchBarValue: _vm.searchBarValue,
                },
                on: {
                  'factor:search:keyup': _vm.factorSearchKeyup,
                  'factor:search:submitted': _vm.factorSearchSubmitted,
                  'factor:search:clear': _vm.factorSearchClear,
                  'factor:search-suggestions:clicked':
                    _vm.factorSearchSuggestionsClicked,
                },
              },
              [
                _vm.hasLogo
                  ? _c('template', { slot: 'logo' }, [_vm._t('logo')], 2)
                  : _vm._e(),
                _c('template', { slot: 'nav' }, [_vm._t('nav')], 2),
                _c('template', { slot: 'profile' }, [_vm._t('profile')], 2),
              ],
              2,
            ),
            _c('main', { staticClass: 'f-main' }, [_vm._t('main')], 2),
            _c(
              'FactorFooter',
              [_c('template', { slot: 'links' }, [_vm._t('footer-links')], 2)],
              2,
            ),
          ],
          1,
        );
      };
      var FactorFlowTemplatevue_type_template_id_fd845d14_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue?vue&type=template&id=fd845d14&

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
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var FactorFlowTemplatevue_type_script_lang_js_ = {
        name: 'FactorFlowTemplate',
        components: {
          FactorHeader: components_FactorHeader,
          FactorFooter: components_FactorFooter,
        },
        props: {
          searchBarLabel: {
            type: String,
            default: '',
          },
          searchBarValue: {
            type: String,
            default: '',
          },
        },
        methods: {
          factorSearchSubmitted: function factorSearchSubmitted(value) {
            this.$emit('factor:search:submitted', {
              search: value,
            });
          },
          factorSearchKeyup: function factorSearchKeyup(_ref) {
            var event = _ref.event,
              updateSuggestions = _ref.updateSuggestions;
            this.$emit('factor:search:keyup', {
              updateSuggestions: updateSuggestions,
              event: event,
            });
          },
          factorSearchSuggestionsClicked: function factorSearchSuggestionsClicked(
            item,
          ) {
            this.$emit('factor:search-suggestions:clicked', {
              item: item,
            });
          },
          factorSearchClear: function factorSearchClear() {
            this.$emit('factor:search:clear');
          },
        },
        computed: {
          hasLogo: function hasLogo() {
            return !!this.$slots['logo'];
          },
        },
      };
      // CONCATENATED MODULE: ./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue?vue&type=script&lang=js&
      /* harmony default export */ var FactorFlowTemplate_FactorFlowTemplatevue_type_script_lang_js_ = FactorFlowTemplatevue_type_script_lang_js_;
      // EXTERNAL MODULE: ./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue?vue&type=style&index=0&lang=scss&
      var FactorFlowTemplatevue_type_style_index_0_lang_scss_ = __webpack_require__(
        '1196',
      );

      // CONCATENATED MODULE: ./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue

      /* normalize component */

      var FactorFlowTemplate_component = normalizeComponent(
        FactorFlowTemplate_FactorFlowTemplatevue_type_script_lang_js_,
        FactorFlowTemplatevue_type_template_id_fd845d14_render,
        FactorFlowTemplatevue_type_template_id_fd845d14_staticRenderFns,
        false,
        null,
        null,
        null,
      );

      /* harmony default export */ var FactorFlowTemplate =
        FactorFlowTemplate_component.exports;
      // CONCATENATED MODULE: ./src/templates/FactorFlowTemplate/index.js

      /* harmony default export */ var templates_FactorFlowTemplate = FactorFlowTemplate;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1cecb528-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorPanel/FactorPanel.vue?vue&type=template&id=772d172a&
      var FactorPanelvue_type_template_id_772d172a_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          'article',
          { class: { panel: true, 'full-on-mobile': _vm.fullOnMobile } },
          [
            _vm._t('meta'),
            !_vm.hideContent && _vm.hasTitle
              ? _c(
                  'header',
                  { staticClass: 'panel__header' },
                  [_c('h2', [_vm._v(_vm._s(_vm.title))]), _vm._t('header')],
                  2,
                )
              : _vm._e(),
            !_vm.hideContent
              ? _c(
                  'div',
                  { class: { panel__content: true, full: _vm.fullContent } },
                  [_vm._t('content')],
                  2,
                )
              : _vm._e(),
          ],
          2,
        );
      };
      var FactorPanelvue_type_template_id_772d172a_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/FactorPanel/FactorPanel.vue?vue&type=template&id=772d172a&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorPanel/FactorPanel.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /* harmony default export */ var FactorPanelvue_type_script_lang_js_ = {
        name: 'FactorPanel',
        props: {
          fullContent: {
            type: Boolean,
            default: false,
          },
          fullOnMobile: {
            type: Boolean,
            default: false,
          },
          title: {
            type: String,
            default: '',
          },
          hideContent: {
            type: Boolean,
            default: false,
          },
        },
        computed: {
          hasTitle: function hasTitle() {
            return this.title !== '';
          },
        },
      };
      // CONCATENATED MODULE: ./src/components/FactorPanel/FactorPanel.vue?vue&type=script&lang=js&
      /* harmony default export */ var FactorPanel_FactorPanelvue_type_script_lang_js_ = FactorPanelvue_type_script_lang_js_;
      // EXTERNAL MODULE: ./src/components/FactorPanel/FactorPanel.vue?vue&type=style&index=0&lang=scss&
      var FactorPanelvue_type_style_index_0_lang_scss_ = __webpack_require__(
        'ec0b',
      );

      // CONCATENATED MODULE: ./src/components/FactorPanel/FactorPanel.vue

      /* normalize component */

      var FactorPanel_component = normalizeComponent(
        FactorPanel_FactorPanelvue_type_script_lang_js_,
        FactorPanelvue_type_template_id_772d172a_render,
        FactorPanelvue_type_template_id_772d172a_staticRenderFns,
        false,
        null,
        null,
        null,
      );

      /* harmony default export */ var FactorPanel =
        FactorPanel_component.exports;
      // CONCATENATED MODULE: ./src/components/FactorPanel/index.js

      /* harmony default export */ var components_FactorPanel = FactorPanel;
      // CONCATENATED MODULE: ./src/index.js

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js

      /***/
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

      /***/
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



function FactorHeader_injectStyles (context) {
  
  var style0 = __webpack_require__("98b6")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FactorHeader_component = normalizeComponent(
  FactorHeader_FactorHeadervue_type_script_lang_js_,
  FactorHeadervue_type_template_id_211131a0_render,
  FactorHeadervue_type_template_id_211131a0_staticRenderFns,
  false,
  FactorHeader_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var FactorHeader = (FactorHeader_component.exports);
// CONCATENATED MODULE: ./src/components/FactorHeader/index.js

/* harmony default export */ var components_FactorHeader = (FactorHeader);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorFooter/FactorFooter.vue?vue&type=template&id=eb9a09de&
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

/* harmony default export */ var FactorFooter = (FactorFooter_component.exports);
// CONCATENATED MODULE: ./src/components/FactorFooter/index.js

/* harmony default export */ var components_FactorFooter = (FactorFooter);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorProfileNav/FactorProfileNav.vue?vue&type=template&id=4979ca94&
var FactorProfileNavvue_type_template_id_4979ca94_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"f-pn"},[(_vm.showMenu)?[_c('FactorShowMore',{attrs:{"buttonText":_vm.getComponentText('buttonText'),"alternateButtonText":_vm.getComponentText('alternateButton'),"buttonClass":"top-bar__user-menu-toggle","closeWhenClickedOutside":true,"buttonTextVisuallyHidden":true}},[_c('template',{slot:"overflow"},[_c('FactorUserMenu',{attrs:{"avatar":_vm.avatar,"loginLink":_vm.loginLink,"strings":_vm.strings}})],1),_c('template',{slot:"button-content"},[(_vm.avatar.loaded)?_c('FactorUserPicture',{attrs:{"avatar":{
            picture: _vm.avatar.imageUrl,
            username: _vm.avatar.username,
          },"size":40,"pictureSize":100,"showStaffIcon":_vm.avatar.isStaff}}):_c('FactorUserPicture',{attrs:{"size":40,"pictureSize":100,"showStaffIcon":_vm.avatar.isStaff}})],1)],2)]:_c('FactorExternalButtonLink',{staticClass:"top-bar__login",attrs:{"href":_vm.loginLink,"iconRight":"chevron-right","text":_vm.getComponentText('loginText')}})],2)}
var FactorProfileNavvue_type_template_id_4979ca94_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorProfileNav/FactorProfileNav.vue?vue&type=template&id=4979ca94&

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
    loginLink: String,
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
    showMenu: {
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
// CONCATENATED MODULE: ./src/components/FactorProfileNav/FactorProfileNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorProfileNav_FactorProfileNavvue_type_script_lang_js_ = (FactorProfileNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FactorProfileNav/FactorProfileNav.vue



function FactorProfileNav_injectStyles (context) {
  
  var style0 = __webpack_require__("f643")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FactorProfileNav_component = normalizeComponent(
  FactorProfileNav_FactorProfileNavvue_type_script_lang_js_,
  FactorProfileNavvue_type_template_id_4979ca94_render,
  FactorProfileNavvue_type_template_id_4979ca94_staticRenderFns,
  false,
  FactorProfileNav_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var FactorProfileNav = (FactorProfileNav_component.exports);
// CONCATENATED MODULE: ./src/components/FactorProfileNav/index.js

/* harmony default export */ var components_FactorProfileNav = (FactorProfileNav);
// CONCATENATED MODULE: ./src/components/index.js













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

/* harmony default export */ var FactorBlockTemplatevue_type_script_lang_js_ = ({
  name: 'FactorBlockTemplate',
  components: {
    FactorHeader: components_FactorHeader,
    FactorFooter: components_FactorFooter
  },
  props: {
    searchBarConfig: {
      type: Object,
      default: null
    }
  },
  computed: {
    hasLogo: function hasLogo() {
      return !!this.$slots['logo'];
    }
  }
});
// CONCATENATED MODULE: ./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorBlockTemplate_FactorBlockTemplatevue_type_script_lang_js_ = (FactorBlockTemplatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=style&index=0&lang=scss&
var FactorBlockTemplatevue_type_style_index_0_lang_scss_ = __webpack_require__("249f");

// CONCATENATED MODULE: ./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue






/* normalize component */

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

/* harmony default export */ var templates_FactorBlockTemplate = (FactorBlockTemplate);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue?vue&type=template&id=39239fe6&
var FactorFlowTemplatevue_type_template_id_39239fe6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"f-template-outer flow-template",attrs:{"id":"factor-template"}},[_c('FactorHeader',{attrs:{"searchBarConfig":_vm.searchBarConfig}},[(_vm.hasLogo)?_c('template',{slot:"logo"},[_vm._t("logo")],2):_vm._e(),_c('template',{slot:"nav"},[_vm._t("nav")],2),_c('template',{slot:"profile"},[_vm._t("profile")],2)],2),_c('main',{staticClass:"f-main"},[_vm._t("main")],2),_c('FactorFooter',[_c('template',{slot:"links"},[_vm._t("footer-links")],2)],2)],1)}
var FactorFlowTemplatevue_type_template_id_39239fe6_staticRenderFns = []


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
//


/* harmony default export */ var FactorFlowTemplatevue_type_script_lang_js_ = ({
  name: 'FactorFlowTemplate',
  components: {
    FactorHeader: components_FactorHeader,
    FactorFooter: components_FactorFooter
  },
  props: {
    searchBarConfig: {
      type: Object,
      default: null
    }
  },
  computed: {
    hasLogo: function hasLogo() {
      return !!this.$slots['logo'];
    }
  }
});
// CONCATENATED MODULE: ./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorFlowTemplate_FactorFlowTemplatevue_type_script_lang_js_ = (FactorFlowTemplatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue?vue&type=style&index=0&lang=scss&
var FactorFlowTemplatevue_type_style_index_0_lang_scss_ = __webpack_require__("1196");

// CONCATENATED MODULE: ./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue






/* normalize component */

var FactorFlowTemplate_component = normalizeComponent(
  FactorFlowTemplate_FactorFlowTemplatevue_type_script_lang_js_,
  FactorFlowTemplatevue_type_template_id_39239fe6_render,
  FactorFlowTemplatevue_type_template_id_39239fe6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FactorFlowTemplate = (FactorFlowTemplate_component.exports);
// CONCATENATED MODULE: ./src/templates/FactorFlowTemplate/index.js

/* harmony default export */ var templates_FactorFlowTemplate = (FactorFlowTemplate);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d84d581-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorPanel/FactorPanel.vue?vue&type=template&id=772d172a&
var FactorPanelvue_type_template_id_772d172a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{class:{ panel: true, 'full-on-mobile': _vm.fullOnMobile }},[_vm._t("meta"),(!_vm.hideContent && _vm.hasTitle)?_c('header',{staticClass:"panel__header"},[_c('h2',[_vm._v(_vm._s(_vm.title))]),_vm._t("header")],2):_vm._e(),(!_vm.hideContent)?_c('div',{class:{ panel__content: true, full: _vm.fullContent }},[_vm._t("content")],2):_vm._e()],2)}
var FactorPanelvue_type_template_id_772d172a_staticRenderFns = []


// CONCATENATED MODULE: ./src/templates/FactorNavTemplate/FactorNavTemplate.vue?vue&type=template&id=6f7891ea&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorNavTemplate/FactorNavTemplate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FactorNavTemplatevue_type_script_lang_js_ = ({
  name: 'FactorNavTemplate',
  components: {
    FactorHeader: components_FactorHeader,
    FactorFooter: components_FactorFooter
  },
  props: {
    searchBarConfig: {
      type: Object,
      default: null
    }
  },
  computed: {
    hasLogo: function hasLogo() {
      return !!this.$slots['logo'];
    },
    hasFooterLinks: function hasFooterLinks() {
      return !!this.$slots['footer-links'];
    }
  }
});
// CONCATENATED MODULE: ./src/templates/FactorNavTemplate/FactorNavTemplate.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorNavTemplate_FactorNavTemplatevue_type_script_lang_js_ = (FactorNavTemplatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/templates/FactorNavTemplate/FactorNavTemplate.vue?vue&type=style&index=0&lang=scss&
var FactorNavTemplatevue_type_style_index_0_lang_scss_ = __webpack_require__("616a");

// CONCATENATED MODULE: ./src/templates/FactorNavTemplate/FactorNavTemplate.vue






/* normalize component */

var FactorNavTemplate_component = normalizeComponent(
  FactorNavTemplate_FactorNavTemplatevue_type_script_lang_js_,
  FactorNavTemplatevue_type_template_id_6f7891ea_render,
  FactorNavTemplatevue_type_template_id_6f7891ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FactorNavTemplate = (FactorNavTemplate_component.exports);
// CONCATENATED MODULE: ./src/templates/FactorNavTemplate/index.js

/* harmony default export */ var templates_FactorNavTemplate = (FactorNavTemplate);
// CONCATENATED MODULE: ./src/templates/index.js




// CONCATENATED MODULE: ./src/index.js



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fc34":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chevron-down.dcc781ff.svg";

/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


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

/******/ });
//# sourceMappingURL=factor.common.js.map
