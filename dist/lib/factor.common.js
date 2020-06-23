module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode,
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = 'fae3'),
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '06cf': /***/ function(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab');
      var propertyIsEnumerableModule = __webpack_require__('d1e7');
      var createPropertyDescriptor = __webpack_require__('5c6c');
      var toIndexedObject = __webpack_require__('fc6a');
      var toPrimitive = __webpack_require__('c04e');
      var has = __webpack_require__('5135');
      var IE8_DOM_DEFINE = __webpack_require__('0cfb');

      var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
      exports.f = DESCRIPTORS
        ? nativeGetOwnPropertyDescriptor
        : function getOwnPropertyDescriptor(O, P) {
            O = toIndexedObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE)
              try {
                return nativeGetOwnPropertyDescriptor(O, P);
              } catch (error) {
                /* empty */
              }
            if (has(O, P))
              return createPropertyDescriptor(
                !propertyIsEnumerableModule.f.call(O, P),
                O[P],
              );
          };

      /***/
    },

    /***/ '083f': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/eye.c6d9c2fb.svg';

      /***/
    },

    /***/ '0a17': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/search.4a25f3e6.svg';

      /***/
    },

    /***/ '0cfb': /***/ function(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab');
      var fails = __webpack_require__('d039');
      var createElement = __webpack_require__('cc12');

      // Thank's IE8 for his funny defineProperty
      module.exports =
        !DESCRIPTORS &&
        !fails(function() {
          return (
            Object.defineProperty(createElement('div'), 'a', {
              get: function() {
                return 7;
              },
            }).a != 7
          );
        });

      /***/
    },

    /***/ '0f39': /***/ function(module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'img/question-mark-circle.229d4279.svg';

      /***/
    },

    /***/ '1196': /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFlowTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        '9e22',
      );
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFlowTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFlowTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__,
      );
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export =
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFlowTemplate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ '14a4': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/grid.58794868.svg';

      /***/
    },

    /***/ '1be4': /***/ function(module, exports, __webpack_require__) {
      var getBuiltIn = __webpack_require__('d066');

      module.exports = getBuiltIn('document', 'documentElement');

      /***/
    },

    /***/ '1d80': /***/ function(module, exports) {
      // `RequireObjectCoercible` abstract operation
      // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
      module.exports = function(it) {
        if (it == undefined) throw TypeError("Can't call method on " + it);
        return it;
      };

      /***/
    },

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

      /***/
    },

    /***/ '2383': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/chevron-left.7afc0553.svg';

      /***/
    },

    /***/ '23cb': /***/ function(module, exports, __webpack_require__) {
      var toInteger = __webpack_require__('a691');

      var max = Math.max;
      var min = Math.min;

      // Helper for a popular repeating case of the spec:
      // Let integer be ? ToInteger(index).
      // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
      module.exports = function(index, length) {
        var integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };

      /***/
    },

    /***/ '241c': /***/ function(module, exports, __webpack_require__) {
      var internalObjectKeys = __webpack_require__('ca84');
      var enumBugKeys = __webpack_require__('7839');

      var hiddenKeys = enumBugKeys.concat('length', 'prototype');

      // `Object.getOwnPropertyNames` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
      exports.f =
        Object.getOwnPropertyNames ||
        function getOwnPropertyNames(O) {
          return internalObjectKeys(O, hiddenKeys);
        };

      /***/
    },

    /***/ '246e': /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4d5d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

    /***/ '2728': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/users.78b0ce03.svg';

      /***/
    },

    /***/ '2dd2': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/edit.11a0ed2f.svg';

      /***/
    },

    /***/ '2f4c': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/x.9ce5b7c3.svg';

      /***/
    },

    /***/ '3156': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/activity.397afd5f.svg';

      /***/
    },

    /***/ '3175': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/clock.ee76d7a8.svg';

      /***/
    },

    /***/ '355c': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/mail-outline.e784d8fd.svg';

      /***/
    },

    /***/ '37e8': /***/ function(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab');
      var definePropertyModule = __webpack_require__('9bf2');
      var anObject = __webpack_require__('825a');
      var objectKeys = __webpack_require__('df75');

      // `Object.defineProperties` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperties
      module.exports = DESCRIPTORS
        ? Object.defineProperties
        : function defineProperties(O, Properties) {
            anObject(O);
            var keys = objectKeys(Properties);
            var length = keys.length;
            var index = 0;
            var key;
            while (length > index)
              definePropertyModule.f(O, (key = keys[index++]), Properties[key]);
            return O;
          };

      /***/
    },

    /***/ '3980': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/keys.b36094bf.svg';

      /***/
    },

    /***/ '3b18': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/lock.981a4bc0.svg';

      /***/
    },

    /***/ '3bbe': /***/ function(module, exports, __webpack_require__) {
      var isObject = __webpack_require__('861d');

      module.exports = function(it) {
        if (!isObject(it) && it !== null) {
          throw TypeError("Can't set " + String(it) + ' as a prototype');
        }
        return it;
      };

      /***/
    },

    /***/ '3d9a': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/irc.16049408.svg';

      /***/
    },

    /***/ '409b': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/bookmark.6c6928bb.svg';

      /***/
    },

    /***/ '41aa': /***/ function(module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'img/frequently-used.f251b2b4.svg';

      /***/
    },

    /***/ '428f': /***/ function(module, exports, __webpack_require__) {
      var global = __webpack_require__('da84');

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

      /***/
    },

    /***/ '4555': /***/ function(module, exports, __webpack_require__) {
      var map = {
        './activity.svg': '3156',
        './at-sign.svg': '8059',
        './bell.svg': '8590',
        './bookmark.svg': '409b',
        './chain.svg': '22f4',
        './check.svg': '4a24',
        './chevron-down.svg': 'fc34',
        './chevron-left.svg': '2383',
        './chevron-right.svg': 'f0c2',
        './chevron-up.svg': '6003',
        './circle-fill.svg': 'e4a8',
        './circle.svg': '53eb',
        './clock.svg': '3175',
        './collapse.svg': '8e5f',
        './copy.svg': 'b420',
        './cpg.svg': 'dc3c',
        './crown-fill.svg': 'd683',
        './crown.svg': '833d',
        './dashboard.svg': '6f9f',
        './dino.svg': '4ca5',
        './discourse.svg': '8529',
        './edit.svg': '2dd2',
        './email.svg': 'da8d',
        './envelope.svg': 'c22f',
        './expand.svg': 'a841',
        './external.svg': '9028',
        './eye.svg': '083f',
        './faq.svg': 'c023',
        './frequently-used.svg': '41aa',
        './github.svg': '76f4',
        './grid.svg': '14a4',
        './idcard.svg': 'c9d5',
        './info.svg': '69d9',
        './irc.svg': '3d9a',
        './keys.svg': '3980',
        './list.svg': '484a',
        './lock.svg': '3b18',
        './log-out.svg': 'd3b2',
        './mail-outline.svg': '355c',
        './mail.svg': '4f1b',
        './matrix.svg': 'c581',
        './moz.svg': '87bc',
        './org-chart.svg': 'a00d',
        './pencil.svg': 'be21',
        './phone-forwarded.svg': 'c235',
        './phone.svg': '1f9a',
        './plus.svg': '4eb1',
        './private.svg': '7b07',
        './question-mark-circle.svg': '0f39',
        './rotate.svg': '5022',
        './search.svg': '0a17',
        './slack.svg': 'f531',
        './sliders.svg': '8d41',
        './square.svg': 'e0d5',
        './staff.svg': '8070',
        './successSquare.svg': '7cde',
        './toggle-right.svg': '69a3',
        './triangle.svg': 'f1f4',
        './user-plus.svg': '99da',
        './user.svg': '4d66',
        './users-outline.svg': '8acc',
        './users.svg': '2728',
        './world.svg': '821d',
        './x.svg': '2f4c',
        './zoom.svg': '7b3e',
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
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
      webpackContext.id = '4555';

      /***/
    },

    /***/ '484a': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/list.2ee365aa.svg';

      /***/
    },

    /***/ '4a24': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/check.aeaa6aef.svg';

      /***/
    },

    /***/ '4a97': /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ '4ca5': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/dino.4ff77442.svg';

      /***/
    },

    /***/ '4d5d': /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ '4d64': /***/ function(module, exports, __webpack_require__) {
      var toIndexedObject = __webpack_require__('fc6a');
      var toLength = __webpack_require__('50c4');
      var toAbsoluteIndex = __webpack_require__('23cb');

      // `Array.prototype.{ indexOf, includes }` methods implementation
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              // eslint-disable-next-line no-self-compare
              if (value != value) return true;
              // Array#indexOf ignores holes, Array#includes - not
            }
          else
            for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el)
                return IS_INCLUDES || index || 0;
            }
          return !IS_INCLUDES && -1;
        };
      };

      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false),
      };

      /***/
    },

    /***/ '4d66': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/user.d0435822.svg';

      /***/
    },

    /***/ '4eb1': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/plus.e6ec5bb3.svg';

      /***/
    },

    /***/ '4f1b': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/mail.20aad22a.svg';

      /***/
    },

    /***/ '5022': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/rotate.e9590b4c.svg';

      /***/
    },

    /***/ '50c4': /***/ function(module, exports, __webpack_require__) {
      var toInteger = __webpack_require__('a691');

      var min = Math.min;

      // `ToLength` abstract operation
      // https://tc39.github.io/ecma262/#sec-tolength
      module.exports = function(argument) {
        return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
      };

      /***/
    },

    /***/ '5135': /***/ function(module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;

      module.exports = function(it, key) {
        return hasOwnProperty.call(it, key);
      };

      /***/
    },

    /***/ '53eb': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/circle.dff74a42.svg';

      /***/
    },

    /***/ '5692': /***/ function(module, exports, __webpack_require__) {
      var IS_PURE = __webpack_require__('c430');
      var store = __webpack_require__('c6cd');

      (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: '3.6.5',
        mode: IS_PURE ? 'pure' : 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
      });

      /***/
    },

    /***/ '56e6': /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ '5899': /***/ function(module, exports) {
      // a string of all valid unicode whitespaces
      // eslint-disable-next-line max-len
      module.exports =
        '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

      /***/
    },

    /***/ '58a8': /***/ function(module, exports, __webpack_require__) {
      var requireObjectCoercible = __webpack_require__('1d80');
      var whitespaces = __webpack_require__('5899');

      var whitespace = '[' + whitespaces + ']';
      var ltrim = RegExp('^' + whitespace + whitespace + '*');
      var rtrim = RegExp(whitespace + whitespace + '*$');

      // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
      var createMethod = function(TYPE) {
        return function($this) {
          var string = String(requireObjectCoercible($this));
          if (TYPE & 1) string = string.replace(ltrim, '');
          if (TYPE & 2) string = string.replace(rtrim, '');
          return string;
        };
      };

      module.exports = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
        start: createMethod(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
        end: createMethod(2),
        // `String.prototype.trim` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.trim
        trim: createMethod(3),
      };

      /***/
    },

    /***/ '5c6c': /***/ function(module, exports) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value,
        };
      };

      /***/
    },

    /***/ '6003': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/chevron-up.873e8b5d.svg';

      /***/
    },

    /***/ '69a3': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/toggle-right.e111a8af.svg';

      /***/
    },

    /***/ '69d9': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/info.44cd334e.svg';

      /***/
    },

    /***/ '69f3': /***/ function(module, exports, __webpack_require__) {
      var NATIVE_WEAK_MAP = __webpack_require__('7f9a');
      var global = __webpack_require__('da84');
      var isObject = __webpack_require__('861d');
      var createNonEnumerableProperty = __webpack_require__('9112');
      var objectHas = __webpack_require__('5135');
      var sharedKey = __webpack_require__('f772');
      var hiddenKeys = __webpack_require__('d012');

      var WeakMap = global.WeakMap;
      var set, get, has;

      var enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
      };

      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError('Incompatible receiver, ' + TYPE + ' required');
          }
          return state;
        };
      };

      if (NATIVE_WEAK_MAP) {
        var store = new WeakMap();
        var wmget = store.get;
        var wmhas = store.has;
        var wmset = store.set;
        set = function(it, metadata) {
          wmset.call(store, it, metadata);
          return metadata;
        };
        get = function(it) {
          return wmget.call(store, it) || {};
        };
        has = function(it) {
          return wmhas.call(store, it);
        };
      } else {
        var STATE = sharedKey('state');
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function(it) {
          return objectHas(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return objectHas(it, STATE);
        };
      }

      module.exports = {
        set: set,
        get: get,
        has: has,
        enforce: enforce,
        getterFor: getterFor,
      };

      /***/
    },

    /***/ '6af3': /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'e716',
      );
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__,
      );
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export =
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ '6eeb': /***/ function(module, exports, __webpack_require__) {
      var global = __webpack_require__('da84');
      var createNonEnumerableProperty = __webpack_require__('9112');
      var has = __webpack_require__('5135');
      var setGlobal = __webpack_require__('ce4e');
      var inspectSource = __webpack_require__('8925');
      var InternalStateModule = __webpack_require__('69f3');

      var getInternalState = InternalStateModule.get;
      var enforceInternalState = InternalStateModule.enforce;
      var TEMPLATE = String(String).split('String');

      (module.exports = function(O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        if (typeof value == 'function') {
          if (typeof key == 'string' && !has(value, 'name'))
            createNonEnumerableProperty(value, 'name', key);
          enforceInternalState(value).source = TEMPLATE.join(
            typeof key == 'string' ? key : '',
          );
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
        return (
          (typeof this == 'function' && getInternalState(this).source) ||
          inspectSource(this)
        );
      });

      /***/
    },

    /***/ '6f9f': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/dashboard.138b0781.svg';

      /***/
    },

    /***/ '7156': /***/ function(module, exports, __webpack_require__) {
      var isObject = __webpack_require__('861d');
      var setPrototypeOf = __webpack_require__('d2bb');

      // makes subclassing work correct for wrapped built-ins
      module.exports = function($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype;
        if (
          // it can work only with native `setPrototypeOf`
          setPrototypeOf &&
          // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
          typeof (NewTarget = dummy.constructor) == 'function' &&
          NewTarget !== Wrapper &&
          isObject((NewTargetPrototype = NewTarget.prototype)) &&
          NewTargetPrototype !== Wrapper.prototype
        )
          setPrototypeOf($this, NewTargetPrototype);
        return $this;
      };

      /***/
    },

    /***/ '76f4': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/github.e3f91087.svg';

      /***/
    },

    /***/ '7839': /***/ function(module, exports) {
      // IE8- don't enum bug keys
      module.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ];

      /***/
    },

    /***/ '7b07': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/private.63f9d4aa.svg';

      /***/
    },

    /***/ '7b3e': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/zoom.3dabdaa4.svg';

      /***/
    },

    /***/ '7c73': /***/ function(module, exports, __webpack_require__) {
      var anObject = __webpack_require__('825a');
      var defineProperties = __webpack_require__('37e8');
      var enumBugKeys = __webpack_require__('7839');
      var hiddenKeys = __webpack_require__('d012');
      var html = __webpack_require__('1be4');
      var documentCreateElement = __webpack_require__('cc12');
      var sharedKey = __webpack_require__('f772');

      var GT = '>';
      var LT = '<';
      var PROTOTYPE = 'prototype';
      var SCRIPT = 'script';
      var IE_PROTO = sharedKey('IE_PROTO');

      var EmptyConstructor = function() {
        /* empty */
      };

      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
      };

      // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
      var NullProtoObjectViaActiveX = function(activeXDocument) {
        activeXDocument.write(scriptTag(''));
        activeXDocument.close();
        var temp = activeXDocument.parentWindow.Object;
        activeXDocument = null; // avoid memory leak
        return temp;
      };

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var NullProtoObjectViaIFrame = function() {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = documentCreateElement('iframe');
        var JS = 'java' + SCRIPT + ':';
        var iframeDocument;
        iframe.style.display = 'none';
        html.appendChild(iframe);
        // https://github.com/zloirock/core-js/issues/475
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag('document.F=Object'));
        iframeDocument.close();
        return iframeDocument.F;
      };

      // Check for document.domain and active x support
      // No need to use active x approach when document.domain is not set
      // see https://github.com/es-shims/es5-shim/issues/150
      // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
      // avoid IE GC bug
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          /* global ActiveXObject */
          activeXDocument = document.domain && new ActiveXObject('htmlfile');
        } catch (error) {
          /* ignore */
        }
        NullProtoObject = activeXDocument
          ? NullProtoObjectViaActiveX(activeXDocument)
          : NullProtoObjectViaIFrame();
        var length = enumBugKeys.length;
        while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };

      hiddenKeys[IE_PROTO] = true;

      // `Object.create` method
      // https://tc39.github.io/ecma262/#sec-object.create
      module.exports =
        Object.create ||
        function create(O, Properties) {
          var result;
          if (O !== null) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
          } else result = NullProtoObject();
          return Properties === undefined
            ? result
            : defineProperties(result, Properties);
        };

      /***/
    },

    /***/ '7cde': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/successSquare.18c271a9.svg';

      /***/
    },

    /***/ '7f9a': /***/ function(module, exports, __webpack_require__) {
      var global = __webpack_require__('da84');
      var inspectSource = __webpack_require__('8925');

      var WeakMap = global.WeakMap;

      module.exports =
        typeof WeakMap === 'function' &&
        /native code/.test(inspectSource(WeakMap));

      /***/
    },

    /***/ '8059': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/at-sign.5394cea1.svg';

      /***/
    },

    /***/ '8070': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/staff.aef812a9.svg';

      /***/
    },

    /***/ '821d': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/world.78c22e46.svg';

      /***/
    },

    /***/ '825a': /***/ function(module, exports, __webpack_require__) {
      var isObject = __webpack_require__('861d');

      module.exports = function(it) {
        if (!isObject(it)) {
          throw TypeError(String(it) + ' is not an object');
        }
        return it;
      };

      /***/
    },

    /***/ '833d': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/crown.66631ce3.svg';

      /***/
    },

    /***/ '83ab': /***/ function(module, exports, __webpack_require__) {
      var fails = __webpack_require__('d039');

      // Thank's IE8 for his funny defineProperty
      module.exports = !fails(function() {
        return (
          Object.defineProperty({}, 1, {
            get: function() {
              return 7;
            },
          })[1] != 7
        );
      });

      /***/
    },

    /***/ '8529': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/discourse.c84f3115.svg';

      /***/
    },

    /***/ '8590': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/bell.b09fb00f.svg';

      /***/
    },

    /***/ '861d': /***/ function(module, exports) {
      module.exports = function(it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };

      /***/
    },

    /***/ '87bc': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/moz.2a2aa047.svg';

      /***/
    },

    /***/ '8875': /***/ function(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__,
        __WEBPACK_AMD_DEFINE_ARRAY__,
        __WEBPACK_AMD_DEFINE_RESULT__; // addapted from the document.currentScript polyfill by Adam Miller
      // MIT license
      // source: https://github.com/amiller-gh/currentScript-polyfill

      // added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

      (function(root, factory) {
        if (true) {
          !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
          (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
          (__WEBPACK_AMD_DEFINE_RESULT__ =
            typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
              ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                  exports,
                  __WEBPACK_AMD_DEFINE_ARRAY__,
                )
              : __WEBPACK_AMD_DEFINE_FACTORY__),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
        }
      })(typeof self !== 'undefined' ? self : this, function() {
        function getCurrentScript() {
          var descriptor = Object.getOwnPropertyDescriptor(
            document,
            'currentScript',
          );
          // for chrome
          if (
            !descriptor &&
            'currentScript' in document &&
            document.currentScript
          ) {
            return document.currentScript;
          }

          // for other browsers with native support for currentScript
          if (
            descriptor &&
            descriptor.get !== getCurrentScript &&
            document.currentScript
          ) {
            return document.currentScript;
          }

          // IE 8-10 support script readyState
          // IE 11+ & Firefox support stack trace
          try {
            throw new Error();
          } catch (err) {
            // Find the second match for the "at" string to get file src url from stack.
            var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
              ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/gi,
              stackDetails =
                ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
              scriptLocation = (stackDetails && stackDetails[1]) || false,
              line = (stackDetails && stackDetails[2]) || false,
              currentLocation = document.location.href.replace(
                document.location.hash,
                '',
              ),
              pageSource,
              inlineScriptSourceRegExp,
              inlineScriptSource,
              scripts = document.getElementsByTagName('script'); // Live NodeList collection

            if (scriptLocation === currentLocation) {
              pageSource = document.documentElement.outerHTML;
              inlineScriptSourceRegExp = new RegExp(
                '(?:[^\\n]+?\\n){0,' +
                  (line - 2) +
                  '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*',
                'i',
              );
              inlineScriptSource = pageSource
                .replace(inlineScriptSourceRegExp, '$1')
                .trim();
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
        }

        return getCurrentScript;
      });

      /***/
    },

    /***/ '8925': /***/ function(module, exports, __webpack_require__) {
      var store = __webpack_require__('c6cd');

      var functionToString = Function.toString;

      // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
      if (typeof store.inspectSource != 'function') {
        store.inspectSource = function(it) {
          return functionToString.call(it);
        };
      }

      module.exports = store.inspectSource;

      /***/
    },

    /***/ '8acc': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/users-outline.fcd0300a.svg';

      /***/
    },

    /***/ '8d41': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/sliders.0602a029.svg';

      /***/
    },

    /***/ '8e5f': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/collapse.8f0c3f42.svg';

      /***/
    },

    /***/ '9020': /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ '9028': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/external.d9610834.svg';

      /***/
    },

    /***/ '90e3': /***/ function(module, exports) {
      var id = 0;
      var postfix = Math.random();

      module.exports = function(key) {
        return (
          'Symbol(' +
          String(key === undefined ? '' : key) +
          ')_' +
          (++id + postfix).toString(36)
        );
      };

      /***/
    },

    /***/ '9112': /***/ function(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab');
      var definePropertyModule = __webpack_require__('9bf2');
      var createPropertyDescriptor = __webpack_require__('5c6c');

      module.exports = DESCRIPTORS
        ? function(object, key, value) {
            return definePropertyModule.f(
              object,
              key,
              createPropertyDescriptor(1, value),
            );
          }
        : function(object, key, value) {
            object[key] = value;
            return object;
          };

      /***/
    },

    /***/ '94ca': /***/ function(module, exports, __webpack_require__) {
      var fails = __webpack_require__('d039');

      var replacement = /#|\.prototype\./;

      var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL
          ? true
          : value == NATIVE
          ? false
          : typeof detection == 'function'
          ? fails(detection)
          : !!detection;
      };

      var normalize = (isForced.normalize = function(string) {
        return String(string)
          .replace(replacement, '.')
          .toLowerCase();
      });

      var data = (isForced.data = {});
      var NATIVE = (isForced.NATIVE = 'N');
      var POLYFILL = (isForced.POLYFILL = 'P');

      module.exports = isForced;

      /***/
    },

    /***/ '98b6': /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'ea67',
      );
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__,
      );
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export =
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ '99da': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/user-plus.1ef4e002.svg';

      /***/
    },

    /***/ '9bf2': /***/ function(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab');
      var IE8_DOM_DEFINE = __webpack_require__('0cfb');
      var anObject = __webpack_require__('825a');
      var toPrimitive = __webpack_require__('c04e');

      var nativeDefineProperty = Object.defineProperty;

      // `Object.defineProperty` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperty
      exports.f = DESCRIPTORS
        ? nativeDefineProperty
        : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE)
              try {
                return nativeDefineProperty(O, P, Attributes);
              } catch (error) {
                /* empty */
              }
            if ('get' in Attributes || 'set' in Attributes)
              throw TypeError('Accessors not supported');
            if ('value' in Attributes) O[P] = Attributes.value;
            return O;
          };

      /***/
    },

    /***/ '9e22': /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ a00d: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/org-chart.ae705be7.svg';

      /***/
    },

    /***/ a691: /***/ function(module, exports) {
      var ceil = Math.ceil;
      var floor = Math.floor;

      // `ToInteger` abstract operation
      // https://tc39.github.io/ecma262/#sec-tointeger
      module.exports = function(argument) {
        return isNaN((argument = +argument))
          ? 0
          : (argument > 0 ? floor : ceil)(argument);
      };

      /***/
    },

    /***/ a841: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/expand.6f114f09.svg';

      /***/
    },

    /***/ a9e3: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var DESCRIPTORS = __webpack_require__('83ab');
      var global = __webpack_require__('da84');
      var isForced = __webpack_require__('94ca');
      var redefine = __webpack_require__('6eeb');
      var has = __webpack_require__('5135');
      var classof = __webpack_require__('c6b6');
      var inheritIfRequired = __webpack_require__('7156');
      var toPrimitive = __webpack_require__('c04e');
      var fails = __webpack_require__('d039');
      var create = __webpack_require__('7c73');
      var getOwnPropertyNames = __webpack_require__('241c').f;
      var getOwnPropertyDescriptor = __webpack_require__('06cf').f;
      var defineProperty = __webpack_require__('9bf2').f;
      var trim = __webpack_require__('58a8').trim;

      var NUMBER = 'Number';
      var NativeNumber = global[NUMBER];
      var NumberPrototype = NativeNumber.prototype;

      // Opera ~12 has broken Object#toString
      var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

      // `ToNumber` abstract operation
      // https://tc39.github.io/ecma262/#sec-tonumber
      var toNumber = function(argument) {
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
              case 66:
              case 98:
                radix = 2;
                maxCode = 49;
                break; // fast equal of /^0b[01]+$/i
              case 79:
              case 111:
                radix = 8;
                maxCode = 55;
                break; // fast equal of /^0o[0-7]+$/i
              default:
                return +it;
            }
            digits = it.slice(2);
            length = digits.length;
            for (index = 0; index < length; index++) {
              code = digits.charCodeAt(index);
              // parseInt parses a string to a first unavailable symbol
              // but ToNumber should return NaN if a string contains unavailable symbols
              if (code < 48 || code > maxCode) return NaN;
            }
            return parseInt(digits, radix);
          }
        }
        return +it;
      };

      // `Number` constructor
      // https://tc39.github.io/ecma262/#sec-number-constructor
      if (
        isForced(
          NUMBER,
          !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'),
        )
      ) {
        var NumberWrapper = function Number(value) {
          var it = arguments.length < 1 ? 0 : value;
          var dummy = this;
          return dummy instanceof NumberWrapper &&
            // check on 1..constructor(foo) case
            (BROKEN_CLASSOF
              ? fails(function() {
                  NumberPrototype.valueOf.call(dummy);
                })
              : classof(dummy) != NUMBER)
            ? inheritIfRequired(
                new NativeNumber(toNumber(it)),
                dummy,
                NumberWrapper,
              )
            : toNumber(it);
        };
        for (
          var keys = DESCRIPTORS
              ? getOwnPropertyNames(NativeNumber)
              : // ES3:
                (
                  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
                  // ES2015 (in case, if modules with ES2015 Number statics required before):
                  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
                  'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
                ).split(','),
            j = 0,
            key;
          keys.length > j;
          j++
        ) {
          if (has(NativeNumber, (key = keys[j])) && !has(NumberWrapper, key)) {
            defineProperty(
              NumberWrapper,
              key,
              getOwnPropertyDescriptor(NativeNumber, key),
            );
          }
        }
        NumberWrapper.prototype = NumberPrototype;
        NumberPrototype.constructor = NumberWrapper;
        redefine(global, NUMBER, NumberWrapper);
      }

      /***/
    },

    /***/ ad7e: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        '56e6',
      );
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__,
      );
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export =
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ b420: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/copy.20b1e6a1.svg';

      /***/
    },

    /***/ be21: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/pencil.49c5cbd9.svg';

      /***/
    },

    /***/ c023: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/faq.4f52ba4d.svg';

      /***/
    },

    /***/ c04e: /***/ function(module, exports, __webpack_require__) {
      var isObject = __webpack_require__('861d');

      // `ToPrimitive` abstract operation
      // https://tc39.github.io/ecma262/#sec-toprimitive
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function(input, PREFERRED_STRING) {
        if (!isObject(input)) return input;
        var fn, val;
        if (
          PREFERRED_STRING &&
          typeof (fn = input.toString) == 'function' &&
          !isObject((val = fn.call(input)))
        )
          return val;
        if (
          typeof (fn = input.valueOf) == 'function' &&
          !isObject((val = fn.call(input)))
        )
          return val;
        if (
          !PREFERRED_STRING &&
          typeof (fn = input.toString) == 'function' &&
          !isObject((val = fn.call(input)))
        )
          return val;
        throw TypeError("Can't convert object to primitive value");
      };

      /***/
    },

    /***/ c22f: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/envelope.ab4f6122.svg';

      /***/
    },

    /***/ c235: /***/ function(module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'img/phone-forwarded.09080608.svg';

      /***/
    },

    /***/ c430: /***/ function(module, exports) {
      module.exports = false;

      /***/
    },

    /***/ c581: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/matrix.87daea88.svg';

      /***/
    },

    /***/ c6b6: /***/ function(module, exports) {
      var toString = {}.toString;

      module.exports = function(it) {
        return toString.call(it).slice(8, -1);
      };

      /***/
    },

    /***/ c6cd: /***/ function(module, exports, __webpack_require__) {
      var global = __webpack_require__('da84');
      var setGlobal = __webpack_require__('ce4e');

      var SHARED = '__core-js_shared__';
      var store = global[SHARED] || setGlobal(SHARED, {});

      module.exports = store;

      /***/
    },

    /***/ c8ba: /***/ function(module, exports) {
      var g;

      // This works in non-strict mode
      g = (function() {
        return this;
      })();

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function('return this')();
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === 'object') g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },

    /***/ c9d5: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/idcard.3d0a0d19.svg';

      /***/
    },

    /***/ ca84: /***/ function(module, exports, __webpack_require__) {
      var has = __webpack_require__('5135');
      var toIndexedObject = __webpack_require__('fc6a');
      var indexOf = __webpack_require__('4d64').indexOf;
      var hiddenKeys = __webpack_require__('d012');

      module.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i)
          if (has(O, (key = names[i++]))) {
            ~indexOf(result, key) || result.push(key);
          }
        return result;
      };

      /***/
    },

    /***/ cc12: /***/ function(module, exports, __webpack_require__) {
      var global = __webpack_require__('da84');
      var isObject = __webpack_require__('861d');

      var document = global.document;
      // typeof document.createElement is 'object' in old IE
      var EXISTS = isObject(document) && isObject(document.createElement);

/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5c8a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "clock",
  "use": "clock-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"clock\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 6v6l4 2\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "5f68":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "toggle-right",
  "use": "toggle-right-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"toggle-right\"><path d=\"M15 6H9c-3.3 0-6 2.7-6 6s2.7 6 6 6h6c3.3 0 6-2.7 6-6s-2.7-6-6-6zm0 10.5H9A4.513 4.513 0 014.5 12c0-2.475 2.025-4.5 4.5-4.5h6c2.475 0 4.5 2.025 4.5 4.5s-2.025 4.5-4.5 4.5zM15 9c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4.5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "6082":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "chevron-left",
  "use": "chevron-left-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"chevron-left\"><path stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linejoin=\"round\" d=\"M15 18l-6-6 6-6\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "6245":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "phone-forwarded",
  "use": "phone-forwarded-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"phone-forwarded\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M23.711 5.974l-4.196 4.192c-.21.21-.42.314-.735.314-.314 0-.524-.104-.734-.314a1.012 1.012 0 010-1.467l2.413-2.41h-5.875c-.63 0-1.05-.42-1.05-1.049s.42-1.048 1.05-1.048h5.875l-2.413-2.41a1.012 1.012 0 010-1.468 1.016 1.016 0 011.469 0l4.196 4.193c.105.104.21.21.21.314.105.21.105.524 0 .838 0 .105-.105.21-.21.315zm-.734 11.738v3.144c0 .838-.315 1.677-.944 2.2-.63.525-1.364.944-2.203.944h-.315c-3.358-.42-6.715-1.572-9.548-3.354a22.05 22.05 0 01-6.61-6.602C1.47 11.214.315 7.86 0 4.507 0 3.668.21 2.83.734 2.2a3.242 3.242 0 012.099-1.153h3.462c1.574 0 2.938 1.153 3.148 2.725.105.943.314 1.886.63 2.725.419 1.153.104 2.41-.735 3.354l-.735.733c1.26 1.887 2.833 3.563 4.827 4.821l.734-.734c.84-.838 2.203-1.152 3.357-.733.84.314 1.784.524 2.728.629 1.574.21 2.728 1.572 2.728 3.144zm-2.098 0c0-.524-.42-.943-.945-1.048-1.049-.105-2.098-.42-3.147-.839-.42-.104-.84-.104-1.154.21l-1.364 1.362c-.315.315-.84.42-1.26.21A17.206 17.206 0 016.296 10.9c-.105-.42 0-.944.315-1.258l1.364-1.363c.21-.21.315-.733.21-1.048-.42-1.048-.63-2.096-.84-3.144 0-.524-.524-.943-1.049-.943H3.148c-.315 0-.63.21-.84.42-.105.209-.21.419-.21.733.315 3.04 1.364 5.974 3.043 8.594 1.574 2.41 3.567 4.506 5.98 5.974 2.623 1.676 5.561 2.725 8.604 3.039.42 0 .63-.105.839-.314.21-.21.315-.42.315-.734v-3.144z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "63d5":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./activity.svg": "14c3d",
	"./at-sign.svg": "54fb",
	"./bell.svg": "b0e3",
	"./bookmark.svg": "0ef4",
	"./chain.svg": "7288",
	"./check.svg": "454a",
	"./chevron-down.svg": "e45f",
	"./chevron-left.svg": "6082",
	"./chevron-right.svg": "bf22",
	"./chevron-up.svg": "2e47",
	"./circle-fill.svg": "75fa",
	"./circle.svg": "0da3",
	"./clock.svg": "5c8a",
	"./collapse.svg": "f3ec",
	"./copy.svg": "78a6",
	"./cpg.svg": "fb06",
	"./crown-fill.svg": "3bf8",
	"./crown.svg": "a2aa",
	"./dashboard.svg": "3b11",
	"./dino.svg": "3fee",
	"./discourse.svg": "064e",
	"./edit.svg": "fd2f",
	"./email.svg": "5161",
	"./envelope.svg": "fed3",
	"./expand.svg": "6cee",
	"./external.svg": "9492",
	"./eye.svg": "b8d2",
	"./faq.svg": "9bda",
	"./github.svg": "63e9",
	"./grid.svg": "8d1e",
	"./idcard.svg": "2b18",
	"./info.svg": "f122",
	"./irc.svg": "709e",
	"./keys.svg": "e842",
	"./list.svg": "14f7",
	"./lock.svg": "ecc7",
	"./log-out.svg": "d69d",
	"./mail-outline.svg": "67f5",
	"./mail.svg": "47b4",
	"./matrix.svg": "28e9",
	"./moz.svg": "2681",
	"./mozilla-m.svg": "ad63",
	"./org-chart.svg": "8adb",
	"./pencil.svg": "0867",
	"./phone-forwarded.svg": "6245",
	"./phone.svg": "b0c8",
	"./plus.svg": "9eec",
	"./private.svg": "dd95",
	"./question-mark-circle.svg": "71a0",
	"./rotate.svg": "e469",
	"./search.svg": "57e7",
	"./slack.svg": "97b1",
	"./sliders.svg": "9f08",
	"./square.svg": "d3a8",
	"./staff.svg": "e5ef",
	"./successSquare.svg": "eb6c",
	"./toggle-right.svg": "5f68",
	"./triangle.svg": "67fe",
	"./user-plus.svg": "1aa4",
	"./user.svg": "79e3",
	"./users-outline.svg": "76ac",
	"./users.svg": "d1fc",
	"./world.svg": "5663",
	"./x.svg": "c98d",
	"./zoom.svg": "94e7"
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
webpackContext.id = "63d5";

/***/ }),

/***/ "63e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "github",
  "use": "github-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"github\"><path d=\"M17.08 17.318a6.13 6.13 0 01.306 1.895v3.79c0 .598-.408.997-1.02.997-.613 0-1.022-.399-1.022-.997v-3.89c.102-.797-.204-1.396-.714-1.894-.306-.3-.409-.698-.204-.997.102-.4.51-.599.816-.699 2.96-.299 5.716-1.296 5.716-5.983 0-1.097-.408-2.194-1.224-3.091-.307-.3-.307-.699-.205-.998.307-.797.307-1.595.102-2.393-.51.1-1.326.399-2.653 1.296-.205.2-.51.2-.817.1a12.487 12.487 0 00-6.635 0c-.306.1-.612.1-.919-.1-1.225-.897-2.143-1.196-2.654-1.296-.204.798-.204 1.596.102 2.393.102.4.102.798-.204.998-.816.897-1.225 1.994-1.225 3.091 0 4.687 2.756 5.684 5.717 5.983.408 0 .714.3.816.699.102.398 0 .797-.204.997-.51.498-.714 1.097-.714 1.795v3.889c0 .598-.409.997-1.021.997-.613 0-1.021-.399-1.021-.997v-1.695c-3.062.498-4.39-1.197-5.308-2.294-.408-.499-.714-.897-1.123-.997-.51-.1-.918-.698-.714-1.197.102-.498.714-.897 1.225-.698 1.02.3 1.633.997 2.245 1.695.817 1.097 1.531 1.895 3.675 1.496v-.1c0-.598.102-1.296.306-1.795-2.858-.598-5.92-2.393-5.92-7.678 0-1.496.51-2.892 1.429-3.99-.408-1.395-.306-2.692.306-3.988a.91.91 0 01.613-.599c.408-.1 1.735-.299 4.49 1.397 2.247-.499 4.594-.499 6.738 0C18.815.764 20.244.964 20.652 1.063c.306.1.51.3.613.599.51 1.296.612 2.593.306 3.889A6.175 6.175 0 0123 9.54c0 5.684-3.47 7.28-5.92 7.778z\" fill=\"currentColor\" fill-rule=\"evenodd\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "67f5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "mail-outline",
  "use": "mail-outline-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"mail-outline\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-mail\"><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\" /><path d=\"M22 6l-10 7L2 6\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "67fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "triangle",
  "use": "triangle-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"triangle\"><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6af3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e716");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6cee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "expand",
  "use": "expand-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"expand\"><path fill=\"currentColor\" d=\"M18.7 9.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L12 4.4 6.7 9.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4zm0 6l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

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

/***/ "7156":
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

/***/ "71a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "question-mark-circle",
  "use": "question-mark-circle-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\" id=\"question-mark-circle\"><defs><path d=\"M15.9 10c0 2.6-3.3 3.8-3.7 3.9-.1.1-.2.1-.3.1-.4 0-.8-.3-.9-.7-.2-.5.1-1.1.6-1.3.6-.2 2.3-1 2.3-2.1 0-.9-.5-1.6-1.3-1.9-1-.4-2.2.2-2.6 1.2-.2.5-.8.8-1.3.6-.5 0-.7-.6-.6-1.1.7-2.1 3-3.2 5.1-2.4 1.6.5 2.7 2 2.7 3.7zm7.1 2c0 6.1-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1s11 4.9 11 11zm-2 0c0-5-4-9-9-9s-9 4-9 9 4 9 9 9 9-4 9-9zm-8.3 4.3s-.1-.1-.2-.1-.1-.1-.2-.1-.1 0-.2-.1c-.2 0-.4 0-.6.1-.1 0-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.2-.1.4 0 .3.1.5.3.7.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7 0-.1 0-.3-.1-.4.1-.1 0-.2-.1-.3z\" id=\"question-mark-circle_a\" /></defs><use xlink:href=\"#question-mark-circle_a\" transform=\"translate(-1 -1)\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "7288":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "chain",
  "use": "chain-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"chain\"><path fill=\"currentColor\" d=\"M10 17c0 .6-.4 1-1 1H6c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c.6 0 1 .4 1 1s-.4 1-1 1H6c-2.2 0-4 1.8-4 4s1.8 4 4 4h3c.6 0 1 .4 1 1zm8-11h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c2.2 0 4 1.8 4 4s-1.8 4-4 4h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c3.3 0 6-2.7 6-6s-2.7-6-6-6zM7 12c0 .6.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "75fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "circle-fill",
  "use": "circle-fill-usage",
  "viewBox": "0 0 23 23",
  "content": "<symbol xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 23 23\" id=\"circle-fill\"><defs><path id=\"circle-fill_a\" d=\"M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-13c-2.218 0-4 1.782-4 4s1.782 4 4 4 4-1.782 4-4-1.782-4-4-4z\" /></defs><g fill=\"none\" fill-rule=\"evenodd\"><mask id=\"circle-fill_b\" fill=\"#fff\"><use xlink:href=\"#circle-fill_a\" /></mask><use fill=\"currentColor\" fill-rule=\"nonzero\" xlink:href=\"#circle-fill_a\" /><g stroke=\"currentColor\" mask=\"url(#circle-fill_b)\"><path d=\"M0 0h24v24H0z\" /></g></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

      /***/
    },

    /***/ ce4e: /***/ function(module, exports, __webpack_require__) {
      var global = __webpack_require__('da84');
      var createNonEnumerableProperty = __webpack_require__('9112');

      module.exports = function(key, value) {
        try {
          createNonEnumerableProperty(global, key, value);
        } catch (error) {
          global[key] = value;
        }
        return value;
      };

      /***/
    },

    /***/ d012: /***/ function(module, exports) {
      module.exports = {};

      /***/
    },

    /***/ d039: /***/ function(module, exports) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };

      /***/
    },

    /***/ d066: /***/ function(module, exports, __webpack_require__) {
      var path = __webpack_require__('428f');
      var global = __webpack_require__('da84');

      var aFunction = function(variable) {
        return typeof variable == 'function' ? variable : undefined;
      };

      module.exports = function(namespace, method) {
        return arguments.length < 2
          ? aFunction(path[namespace]) || aFunction(global[namespace])
          : (path[namespace] && path[namespace][method]) ||
              (global[namespace] && global[namespace][method]);
      };

      /***/
    },

    /***/ d1e7: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

      // Nashorn ~ JDK8 bug
      var NASHORN_BUG =
        getOwnPropertyDescriptor &&
        !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

      // `Object.prototype.propertyIsEnumerable` method implementation
      // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
      exports.f = NASHORN_BUG
        ? function propertyIsEnumerable(V) {
            var descriptor = getOwnPropertyDescriptor(this, V);
            return !!descriptor && descriptor.enumerable;
          }
        : nativePropertyIsEnumerable;

      /***/
    },

    /***/ d2bb: /***/ function(module, exports, __webpack_require__) {
      var anObject = __webpack_require__('825a');
      var aPossiblePrototype = __webpack_require__('3bbe');

      // `Object.setPrototypeOf` method
      // https://tc39.github.io/ecma262/#sec-object.setprototypeof
      // Works with __proto__ only. Old v8 can't work with null proto objects.
      /* eslint-disable no-proto */
      module.exports =
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function() {
              var CORRECT_SETTER = false;
              var test = {};
              var setter;
              try {
                setter = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  '__proto__',
                ).set;
                setter.call(test, []);
                CORRECT_SETTER = test instanceof Array;
              } catch (error) {
                /* empty */
              }
              return function setPrototypeOf(O, proto) {
                anObject(O);
                aPossiblePrototype(proto);
                if (CORRECT_SETTER) setter.call(O, proto);
                else O.__proto__ = proto;
                return O;
              };
            })()
          : undefined);

      /***/
    },

    /***/ d3b2: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/log-out.ec77d6fe.svg';

      /***/
    },

    /***/ d683: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/crown-fill.7cc5dca9.svg';

      /***/
    },

    /***/ da84: /***/ function(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */ (function(global) {
        var check = function(it) {
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

        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__('c8ba')));

      /***/
    },

    /***/ da8d: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/email.ab4f6122.svg';

      /***/
    },

    /***/ dc3c: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/cpg.478aeaee.svg';

      /***/
    },

    /***/ df75: /***/ function(module, exports, __webpack_require__) {
      var internalObjectKeys = __webpack_require__('ca84');
      var enumBugKeys = __webpack_require__('7839');

      // `Object.keys` method
      // https://tc39.github.io/ecma262/#sec-object.keys
      module.exports =
        Object.keys ||
        function keys(O) {
          return internalObjectKeys(O, enumBugKeys);
        };

      /***/
    },

    /***/ e0d5: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/square.4180ba9d.svg';

      /***/
    },

    /***/ e4a8: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/circle-fill.3651277c.svg';

      /***/
    },

    /***/ e716: /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ ea67: /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ ec0b: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorPanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        '9020',
      );
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorPanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorPanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__,
      );
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export =
        _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorPanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ f0c2: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/chevron-right.f25a9b7b.svg';

      /***/
    },

    /***/ f1f4: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/triangle.842ce4d7.svg';

      /***/
    },

    /***/ f531: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'img/slack.41bc65a6.svg';

      /***/
    },

    /***/ f772: /***/ function(module, exports, __webpack_require__) {
      var shared = __webpack_require__('5692');
      var uid = __webpack_require__('90e3');

      var keys = shared('keys');

      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };

      /***/
    },

    /***/ fae3: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(
        __webpack_exports__,
        'FactorBlockTemplate',
        function() {
          return /* reexport */ templates_FactorBlockTemplate;
        },
      );
      __webpack_require__.d(
        __webpack_exports__,
        'FactorFlowTemplate',
        function() {
          return /* reexport */ templates_FactorFlowTemplate;
        },
      );
      __webpack_require__.d(__webpack_exports__, 'FactorFooter', function() {
        return /* reexport */ components_FactorFooter;
      });
      __webpack_require__.d(__webpack_exports__, 'FactorHeader', function() {
        return /* reexport */ components_FactorHeader;
      });
      __webpack_require__.d(__webpack_exports__, 'FactorIcon', function() {
        return /* reexport */ components_FactorIcon;
      });
      __webpack_require__.d(__webpack_exports__, 'FactorPanel', function() {
        return /* reexport */ components_FactorPanel;
      });
      __webpack_require__.d(__webpack_exports__, 'FactorSearchBar', function() {
        return /* reexport */ components_FactorSearchBar;
      });

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
      // This file is imported into lib/wc client bundles.

      if (typeof window !== 'undefined') {
        var currentScript = window.document.currentScript;
        if (true) {
          var getCurrentScript = __webpack_require__('8875');
          currentScript = getCurrentScript();

          // for backward compatibility, because previously we directly included the polyfill
          if (!('currentScript' in document)) {
            Object.defineProperty(document, 'currentScript', {
              get: getCurrentScript,
            });
          }
        }

        var src =
          currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
        if (src) {
          __webpack_require__.p = src[1]; // eslint-disable-line
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "9492":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "external",
  "use": "external-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"external\"><path fill=\"currentColor\" d=\"M19 13v6c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h6c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-6c0-.6.4-1 1-1s1 .4 1 1zm2.9-10.4c-.1-.2-.3-.4-.5-.5-.1-.1-.3-.1-.4-.1h-6c-.6 0-1 .4-1 1s.4 1 1 1h3.6l-9.3 9.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L20 5.4V9c0 .6.4 1 1 1s1-.4 1-1V3c0-.1 0-.3-.1-.4z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

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

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "94e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "zoom",
  "use": "zoom-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"zoom\"><path fill=\"currentColor\" d=\"M23.5 6.1c-.3-.2-.7-.1-1 .1L17 10.1V7c0-1.7-1.3-3-3-3H3C1.3 4 0 5.3 0 7v10c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3v-3.1l5.4 3.9c.2.1.4.2.6.2.2 0 .3 0 .5-.1.3-.2.5-.5.5-.9V7c0-.4-.2-.7-.5-.9zM15 17c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v10zm7-1.9L17.7 12 22 8.9v6.2z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "97b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "slack",
  "use": "slack-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"slack\"><path d=\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zm6 0H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-11 4c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5zm-6 0H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14zm10.5.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5zm1.5 4.5H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5zM8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

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

/***/ "9bda":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "faq",
  "use": "faq-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"faq\"><path d=\"M18.023 1.617a11.762 11.762 0 014.372 4.36C23.465 7.82 24 9.828 24 12c0 2.172-.535 4.18-1.605 6.023a11.85 11.85 0 01-4.372 4.372C16.18 23.465 14.172 24 12 24c-2.172 0-4.18-.535-6.023-1.605a11.85 11.85 0 01-4.372-4.372C.535 16.18 0 14.172 0 12c0-2.172.535-4.18 1.605-6.023a11.85 11.85 0 014.372-4.372C7.82.535 9.828 0 12 0c2.172 0 4.18.54 6.023 1.617zM15 1.945V6.82A5.837 5.837 0 0117.18 9h4.875c-.25-.844-.602-1.64-1.055-2.39-.453-.75-.98-1.426-1.582-2.028A10.619 10.619 0 0017.391 3 10.216 10.216 0 0015 1.945zM16.5 12c0-.813-.203-1.562-.61-2.25a4.586 4.586 0 00-1.64-1.64A4.343 4.343 0 0012 7.5c-1.234 0-2.293.441-3.176 1.324S7.5 10.766 7.5 12a4.4 4.4 0 00.61 2.262 4.466 4.466 0 001.64 1.64A4.409 4.409 0 0012 16.5c1.234 0 2.293-.437 3.176-1.313.883-.875 1.324-1.937 1.324-3.187zm-6-10.383v4.594C11.016 6.07 11.52 6 12.012 6s.988.07 1.488.21V1.618a9.703 9.703 0 00-3 0zM9 1.945c-1.047.313-2.031.79-2.953 1.43C4.016 4.765 2.648 6.641 1.945 9H6.82A6.082 6.082 0 019 6.82V1.945zM1.5 12c0 .469.04.969.117 1.5h4.57C6.063 13 6 12.5 6 12s.07-1 .21-1.5H1.618l-.047.375a6.08 6.08 0 00-.035.375l-.023.375A6.01 6.01 0 001.5 12zM9 22.055V17.18A5.837 5.837 0 016.82 15H1.945c.5 1.688 1.38 3.16 2.637 4.418A10.294 10.294 0 009 22.055zm4.5.328v-4.57c-.5.125-.996.187-1.488.187s-.996-.062-1.512-.188v4.57a9.702 9.702 0 003 0zm1.5-.328a10.147 10.147 0 003.105-1.512 10.413 10.413 0 002.426-2.438A10.74 10.74 0 0022.055 15H17.18A5.837 5.837 0 0115 17.18v4.875zm2.813-8.555h4.57c.078-.531.117-1.031.117-1.5 0-.469-.04-.969-.117-1.5h-4.594c.14.5.211 1 .211 1.5a6.041 6.041 0 01-.188 1.5z\" fill=\"currentColor\" fill-rule=\"evenodd\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

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

/***/ "9eec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "plus",
  "use": "plus-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"plus\"><path fill=\"currentColor\" d=\"M20 12c0 .6-.4 1-1 1h-6v6c0 .6-.4 1-1 1s-1-.4-1-1v-6H5c-.6 0-1-.4-1-1s.4-1 1-1h6V5c0-.6.4-1 1-1s1 .4 1 1v6h6c.6 0 1 .4 1 1z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "9f08":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "sliders",
  "use": "sliders-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"sliders\"><path d=\"M5.25 11V5.75c0-.45.3-.75.75-.75s.75.3.75.75V11c0 .45-.3.75-.75.75s-.75-.3-.75-.75zm6.75.75c-.45 0-.75.3-.75.75v6.75c0 .45.3.75.75.75s.75-.3.75-.75V12.5c0-.45-.3-.75-.75-.75zm6 1.5c.45 0 .75-.3.75-.75V5.75c0-.45-.3-.75-.75-.75s-.75.3-.75.75v6.75c0 .45.3.75.75.75zm-9.75 0h-4.5c-.45 0-.75.3-.75.75s.3.75.75.75h1.5v4.5c0 .45.3.75.75.75s.75-.3.75-.75v-4.5h1.5c.45 0 .75-.3.75-.75s-.3-.75-.75-.75zm6-4.5h-1.5v-3c0-.45-.3-.75-.75-.75s-.75.3-.75.75v3h-1.5c-.45 0-.75.3-.75.75s.3.75.75.75h4.5c.45 0 .75-.3.75-.75s-.3-.75-.75-.75zm6 6h-4.5c-.45 0-.75.3-.75.75s.3.75.75.75h1.5v3c0 .45.3.75.75.75s.75-.3.75-.75v-3h1.5c.45 0 .75-.3.75-.75s-.3-.75-.75-.75z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a2aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "crown",
  "use": "crown-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\" id=\"crown\"><defs><path d=\"M1 16V7.135a1 1 0 011.64-.768L7 10l4.293-4.293a1 1 0 011.414 0L17 10l4.36-3.633a1 1 0 011.64.768V16a3 3 0 01-3 3H4a3 3 0 01-3-3zm3 1h16a1 1 0 001-1V9.27l-4.123 3.436L12 7.828l-4.877 4.878L3 9.27V16a1 1 0 001 1z\" id=\"crown_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#crown_a\" transform=\"translate(-1 -5)\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

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

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad63":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "mozilla-m",
  "use": "mozilla-m-usage",
  "viewBox": "0 0 68 68",
  "content": "<symbol viewBox=\"0 0 68 68\" id=\"mozilla-m\"><path d=\"M0 0h68v68H0z\" /><path d=\"M57.9 42.6h3.9V49H49.5V32.4c0-5.1-1.7-7-5-7-4 0-5.6 2.9-5.6 6.9v10.2h3.9v6.4H30.5V32.4c0-5.1-1.7-7-5-7-4 0-5.6 2.9-5.6 6.9v10.2h5.6v6.4h-18v-6.4h3.9V26H7.5v-6.4h12.3V24c1.8-3.1 4.8-5 8.9-5 4.2 0 8.1 2 9.5 6.3 1.6-3.9 4.9-6.3 9.5-6.3 5.3 0 10.1 3.2 10.1 10.1v13.5z\" fill=\"#fff\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ad7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("56e6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactorSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b0c8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "phone",
  "use": "phone-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"phone\"><path fill=\"currentColor\" d=\"M20.388 13.959a10.96 10.96 0 01-2.612-.603c-1.105-.402-2.31-.1-3.214.703l-.704.704c-1.808-1.206-3.415-2.713-4.62-4.621l.703-.704c.803-.803 1.105-2.11.703-3.214a11.007 11.007 0 01-.603-2.612C9.841 2.105 8.534 1 7.027 1H3.712c-.803.1-1.507.502-2.009 1.105S1 3.511 1 4.315c.301 3.215 1.507 6.43 3.215 9.142a21.124 21.124 0 006.328 6.328C13.256 21.594 16.47 22.7 19.685 23h.301c.804 0 1.608-.301 2.11-.904.502-.603.904-1.306.904-2.11v-3.013c0-1.507-1.105-2.813-2.612-3.014zm.603 3.014v3.013c0 .302-.1.503-.302.703-.2.201-.401.302-.803.302-2.913-.302-5.726-1.306-8.238-2.913-2.31-1.407-4.219-3.416-5.726-5.726C4.315 9.84 3.311 7.027 3.01 4.114c0-.301.1-.502.201-.703.201-.201.502-.402.804-.402h3.013c.503 0 .905.402 1.005.904.1 1.005.402 2.11.804 3.014.1.402 0 .804-.201 1.105L7.329 9.237a1.068 1.068 0 00-.201 1.206 16.484 16.484 0 006.43 6.43c.4.2.903.2 1.205-.202l1.305-1.306c.302-.301.704-.402 1.106-.2 1.004.401 2.009.602 3.013.803.402.1.804.502.804 1.005z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "b0e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "bell",
  "use": "bell-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"bell\"><path d=\"M14.127 19.773A2.466 2.466 0 0112 21a2.31 2.31 0 01-1.227-.327 2.377 2.377 0 01-.9-.9c-.246-.41-.082-.9.327-1.146.41-.245.9-.082 1.145.328.082.081.164.245.328.327.409.245.9.082 1.145-.327.246-.41.737-.491 1.146-.328.409.164.409.737.163 1.146zM21 16.09c0 .49-.327.818-.818.818H3.818c-.49 0-.818-.327-.818-.818 0-.491.327-.818.818-.818.9 0 1.637-.737 1.637-1.637v-4.09C5.455 5.945 8.4 3 12 3s6.545 2.945 6.545 6.545v4.091c0 .9.737 1.637 1.637 1.637.49 0 .818.327.818.818zm-3.682-.818a3.724 3.724 0 01-.409-1.637v-4.09c0-2.7-2.209-4.91-4.909-4.91-2.7 0-4.91 2.21-4.91 4.91v4.09c0 .573-.163 1.146-.408 1.637h10.636z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b8d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "eye",
  "use": "eye-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"eye\"><path d=\"M23.925 11.6C23.725 11.2 19.515 3 12 3 4.484 3 .276 11.2.075 11.6c-.1.3-.1.6 0 .9.2.3 4.41 8.5 11.925 8.5 7.516 0 11.724-8.2 11.925-8.6.1-.2.1-.6 0-.8zM12 19c-5.411 0-8.919-5.4-9.92-7 .9-1.6 4.508-7 9.92-7s8.919 5.4 9.92 7c-1.001 1.6-4.509 7-9.92 7zm0-11c-2.205 0-4.008 1.8-4.008 4S9.795 16 12 16s4.008-1.8 4.008-4S14.205 8 12 8zm0 6c-1.102 0-2.004-.9-2.004-2s.902-2 2.004-2c1.102 0 2.004.9 2.004 2s-.902 2-2.004 2z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "bf22":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "chevron-right",
  "use": "chevron-right-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"chevron-right\"><path stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linejoin=\"round\" d=\"M9 18l6-6-6-6\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

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

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

      // Indicate to webpack that this file can be concatenated
      /* harmony default export */ var setPublicPath = null;

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1cecb528-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=template&id=16f060f1&
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          'div',
          {
            staticClass: 'f-template-outer block-template',
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
      var staticRenderFns = [];

      // CONCATENATED MODULE: ./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=template&id=16f060f1&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"140025cf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorHeader/FactorHeader.vue?vue&type=template&id=023f44f0&
      var FactorHeadervue_type_template_id_023f44f0_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('header', { staticClass: 'f-header' }, [
          _c(
            'div',
            { staticClass: 'f-header__column' },
            [
              !_vm.noLogo ? _vm._t('logo') : _vm._e(),
              !_vm.hasLogoSlot && !_vm.noLogo
                ? _c(
                    'a',
                    {
                      staticClass: 'f-header__logo-link',
                      attrs: { href: '/' },
                    },
                    [
                      _c('img', {
                        staticClass: 'f-header__logo',
                        attrs: {
                          src:
                            'https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg',
                        },
                      }),
                    ],
                  )
                : _vm._e(),
            ],
            2,
          ),
          _c(
            'div',
            { staticClass: 'f-header__column' },
            [
              !_vm.hideSearchBar
                ? _c('FactorSearchBar', {
                    staticClass: 'f-header__search desktop',
                    attrs: {
                      searchBarHandler: _vm.searchBarHandler,
                      searchBarLabel: _vm.searchBarLabel,
                      searchBarValue: _vm.searchBarValue,
                      searchBarDropdown: _vm.searchBarSuggestions,
                      dropdownEnabled: _vm.searchBarDropdownEnabled,
                    },
                    on: {
                      keyup: _vm.searchBarKeyup,
                      'search-bar-dropdown-clicked':
                        _vm.searchBarDropdownClicked,
                      'clear-query': _vm.searchBarClearQuery,
                    },
                  })
                : _vm._e(),
              _c(
                'FactorShowMore',
                {
                  ref: 'showMoreSearch',
                  attrs: {
                    buttonText: _vm.showMoreButtonText,
                    alternateButtonText: _vm.showMoreAlternateButtonText,
                    buttonClass: 'top-bar__search-toggle',
                    closeWhenClickedOutside: true,
                    buttonTextVisuallyHidden: true,
                    moveFocus: false,
                  },
                },
                [
                  _c(
                    'template',
                    { slot: 'overflow' },
                    [
                      !_vm.hideSearchBar
                        ? _c('FactorSearchBar', {
                            staticClass: 'f-header__search mobile',
                            attrs: {
                              searchBarHandler: _vm.searchBarHandler,
                              searchBarLabel: _vm.searchBarLabel,
                              searchBarValue: _vm.searchBarValue,
                              searchBarDropdown: _vm.searchBarSuggestions,
                              dropdownEnabled: _vm.searchBarDropdownEnabled,
                            },
                            on: {
                              keyup: _vm.searchBarKeyup,
                              'search-bar-dropdown-clicked':
                                _vm.searchBarDropdownClicked,
                              'clear-query': _vm.searchBarClearQuery,
                            },
                          })
                        : _vm._e(),
                    ],
                    1,
                  ),
                  _c(
                    'template',
                    { slot: 'button-content' },
                    [
                      _c('FactorIcon', {
                        attrs: { id: 'search', width: 20, height: 20 },
                      }),
                    ],
                    1,
                  ),
                ],
                2,
              ),
            ],
            1,
          ),
          _c('div', { staticClass: 'f-header__column' }, [
            _c('nav', { staticClass: 'f-nav' }, [_vm._t('nav')], 2),
            _c('div', { staticClass: 'f-profile' }, [_vm._t('profile')], 2),
          ]),
        ]);
      };
      var FactorHeadervue_type_template_id_023f44f0_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/FactorHeader/FactorHeader.vue?vue&type=template&id=023f44f0&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"140025cf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=template&id=f84e248e&
      var FactorSearchBarvue_type_template_id_f84e248e_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          'form',
          {
            staticClass: 'search-bar',
            attrs: { method: 'GET' },
            on: { submit: _vm.handleSubmit },
          },
          [
            _c('fieldset', [
              _c('legend', { staticClass: 'visually-hidden' }, [
                _vm._v('search'),
              ]),
              _c('div', { staticClass: 'search-bar__fields' }, [
                _c(
                  'label',
                  {
                    staticClass: 'visually-hidden',
                    attrs: { for: 'search-query' },
                  },
                  [_vm._v('search-input')],
                ),
                _c('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: _vm.searchQuery,
                      expression: 'searchQuery',
                    },
                  ],
                  ref: 'searchQueryField',
                  staticClass: 'search-bar__input',
                  attrs: {
                    type: 'text',
                    id: 'search-query',
                    name: 'query',
                    placeholder: _vm.searchBarLabel,
                    autocomplete: _vm.dropdownEnabled ? 'off' : 'on',
                  },
                  domProps: { value: _vm.searchQuery },
                  on: {
                    keyup: _vm.handleKeyUp,
                    blur: _vm.onSearchQueryBlur,
                    focus: _vm.onSearchQueryFocus,
                    input: function($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.searchQuery = $event.target.value;
                    },
                  },
                }),
                _vm.searchQuery && _vm.searchQuery.length > 0
                  ? _c(
                      'button',
                      {
                        staticClass: 'search-bar__clear-button',
                        attrs: { type: 'button' },
                        on: { click: _vm.clearQuery },
                      },
                      [
                        _c('FactorIcon', {
                          attrs: { id: 'x', width: 20, height: 20 },
                        }),
                        _c('span', { staticClass: 'visually-hidden' }, [
                          _vm._v('clear search'),
                        ]),
                      ],
                      1,
                    )
                  : _vm._e(),
                _c(
                  'button',
                  {
                    staticClass: 'search-bar__submit',
                    attrs: { type: 'submit' },
                  },
                  [
                    _c('FactorIcon', {
                      attrs: { id: 'search', width: 18, height: 18 },
                    }),
                    _c('span', { staticClass: 'visually-hidden' }, [
                      _vm._v('search'),
                    ]),
                  ],
                  1,
                ),
              ]),
            ]),
            _vm.dropdownItems.length && _vm.dropdownEnabled
              ? _c(
                  'ul',
                  { staticClass: 'search-bar__dropdown' },
                  _vm._l(_vm.dropdownItems, function(item, idx) {
                    return _c(
                      'li',
                      {
                        key: idx,
                        class: {
                          'dropdown-item': true,
                          active: _vm.focusedSuggestion === idx,
                        },
                        on: {
                          mousedown: function($event) {
                            return _vm.onDropdownItemClick(item);
                          },
                        },
                      },
                      [_vm._v(' ' + _vm._s(item.label) + ' ')],
                    );
                  }),
                  0,
                )
              : _vm._e(),
          ],
        );
      };
      var FactorSearchBarvue_type_template_id_f84e248e_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=template&id=f84e248e&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1cecb528-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorIcon/FactorIcon.vue?vue&type=template&id=19b01206&
      var FactorIconvue_type_template_id_19b01206_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('div', [
          _c('svg', {
            staticStyle: { position: 'absolute', width: '0', height: '0' },
            attrs: {
              xmlns: 'http://www.w3.org/2000/svg',
              'xmlns:xlink': 'http://www.w3.org/1999/xlink',
            },
            domProps: { innerHTML: _vm._s(_vm.iconRendered) },
          }),
          _c(
            'svg',
            {
              staticClass: 'icon',
              attrs: {
                viewBox: '0 0 24 24',
                'aria-hidden': 'true',
                role: 'presentation',
                focusable: 'false',
                width: _vm.width,
                height: _vm.height,
              },
              on: { click: _vm.handleIconClicked },
            },
            [_c('use', { attrs: { href: _vm.iconHref } })],
          ),
        ]);
      };
      var FactorIconvue_type_template_id_19b01206_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/FactorIcon/FactorIcon.vue?vue&type=template&id=19b01206&

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
      var es_number_constructor = __webpack_require__('a9e3');

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
      /* harmony default export */ var FactorIconvue_type_script_lang_js_ = {
        name: 'FactorIcon',
        props: {
          width: {
            type: Number,
            default: 16,
          },
          height: {
            type: Number,
            default: 16,
          },
          id: String,
        },
        computed: {
          iconRendered: function iconRendered() {
            return this.source.default.stringify();
          },
          iconHref: function iconHref() {
            return '#'.concat(this.source.default.id);
          },
          iconSource: function iconSource() {
            return this.source.default.content;
          },
        },
        methods: {
          handleIconClicked: function handleIconClicked(e) {
            this.$emit('click', e);
          },
        },
        data: function data() {
          return {
            avatarUrl: null,
            source: __webpack_require__('4555')('./'.concat(this.id, '.svg')),
          };
        },
      };
      // CONCATENATED MODULE: ./src/components/FactorIcon/FactorIcon.vue?vue&type=script&lang=js&
      /* harmony default export */ var FactorIcon_FactorIconvue_type_script_lang_js_ = FactorIconvue_type_script_lang_js_;
      // EXTERNAL MODULE: ./src/components/FactorIcon/FactorIcon.vue?vue&type=style&index=0&lang=scss&
      var FactorIconvue_type_style_index_0_lang_scss_ = __webpack_require__(
        '6af3',
      );

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent(
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier /* server only */,
        shadowMode /* vue-cli only */,
      ) {
        // Vue.extend constructor export interop
        var options =
          typeof scriptExports === 'function'
            ? scriptExports.options
            : scriptExports;

        // render functions
        if (render) {
          options.render = render;
          options.staticRenderFns = staticRenderFns;
          options._compiled = true;
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true;
        }

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

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

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "e45f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "chevron-down",
  "use": "chevron-down-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"chevron-down\"><path stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linejoin=\"round\" d=\"M6 9l6 6 6-6\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "e469":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "rotate",
  "use": "rotate-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"rotate\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M1 4v6h6\" /><path d=\"M3.51 15a9 9 0 102.13-9.36L1 10\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "e5ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "staff",
  "use": "staff-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"staff\"><path fill=\"currentColor\" d=\"M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v14zm-4.536-4.908c0-.483-.085-.903-.256-1.26a2.693 2.693 0 00-.806-.959c-.366-.283-.942-.588-1.728-.915-.698-.289-1.182-.52-1.45-.696-.269-.176-.462-.363-.579-.56a1.377 1.377 0 01-.176-.715c0-.405.147-.73.44-.977.293-.247.722-.37 1.289-.37.747 0 1.596.2 2.549.6l.556-1.428c-1.015-.45-2.036-.674-3.061-.674-1.07 0-1.922.257-2.556.77-.635.512-.953 1.215-.953 2.109 0 .712.2 1.323.601 1.83.4.508 1.089.96 2.065 1.356.948.38 1.573.71 1.875.988.303.279.455.618.455 1.018 0 .445-.165.799-.495 1.062-.33.264-.84.396-1.534.396a6.6 6.6 0 01-1.535-.198 8.082 8.082 0 01-1.556-.542v1.656c.771.375 1.763.563 2.974.563 1.21 0 2.16-.27 2.849-.813.688-.541 1.032-1.289 1.032-2.24z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "e716":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e842":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "keys",
  "use": "keys-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"keys\"><path d=\"M2 20V5h20v15H2zm1.667-1.666h16.667V6.667H3.667v11.667zM12.833 10V8.333h2.084V10h-2.084zm-3.75 0V8.333h2.5V10h-2.5zm-3.75 0V8.333h2.5V10h-2.5zm11.25 3.333v-1.666h2.084v1.666h-2.084zm-3.333 0v-1.666h2.083v1.666H13.25zm-3.333 0v-1.666H12v1.666H9.917zm-4.584 0v-1.666h3.334v1.666H5.333zM16.167 10V8.333h2.5V10h-2.5zM5.333 16.667V15h13.334v1.667H5.333z\" fill=\"currentColor\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

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

/***/ "ea67":
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

/***/ "ecc7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "lock",
  "use": "lock-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"lock\"><path d=\"M19 10h-1V7c0-3.3-2.7-6-6-6S6 3.7 6 7v3H5c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM8 7c0-2.2 1.8-4 4-4s4 1.8 4 4v3H8V7zm12 13c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v7z\" fill=\"currentColor\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "f122":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "info",
  "use": "info-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"info\"><path fill=\"currentColor\" d=\"M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm1-9v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1zm-.3-4.7c.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3h-.2c-.1 0-.1 0-.2-.1-.1 0-.1-.1-.2-.1s-.1-.1-.1-.1c-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7l.1-.1c.1 0 .1-.1.2-.1s.1 0 .2-.1c.3 0 .7.1.9.3z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "f3ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "collapse",
  "use": "collapse-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"collapse\"><path fill=\"currentColor\" d=\"M18.7 21.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L12 16.4l-5.3 5.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4zm0-18l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 7.6l5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "FactorBlockTemplate", function() { return /* reexport */ templates_FactorBlockTemplate; });
__webpack_require__.d(__webpack_exports__, "FactorFlowTemplate", function() { return /* reexport */ templates_FactorFlowTemplate; });
__webpack_require__.d(__webpack_exports__, "FactorFooter", function() { return /* reexport */ components_FactorFooter; });
__webpack_require__.d(__webpack_exports__, "FactorHeader", function() { return /* reexport */ components_FactorHeader; });
__webpack_require__.d(__webpack_exports__, "FactorIcon", function() { return /* reexport */ components_FactorIcon; });
__webpack_require__.d(__webpack_exports__, "FactorPanel", function() { return /* reexport */ components_FactorPanel; });
__webpack_require__.d(__webpack_exports__, "FactorSearchBar", function() { return /* reexport */ components_FactorSearchBar; });

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=template&id=25781fda&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"f-template-outer block-template",attrs:{"id":"factor-template"}},[_c('FactorHeader',{attrs:{"searchBarConfig":_vm.searchBarConfig}},[(_vm.hasLogo)?_c('template',{slot:"logo"},[_vm._t("logo")],2):_vm._e(),_c('template',{slot:"nav"},[_vm._t("nav")],2),_c('template',{slot:"profile"},[_vm._t("profile")],2)],2),_c('main',{staticClass:"f-main"},[_vm._t("main")],2),_c('FactorFooter',[_c('template',{slot:"links"},[_vm._t("footer-links")],2)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/templates/FactorBlockTemplate/FactorBlockTemplate.vue?vue&type=template&id=25781fda&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorHeader/FactorHeader.vue?vue&type=template&id=023f44f0&
var FactorHeadervue_type_template_id_023f44f0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"f-header"},[_c('div',{staticClass:"f-header__column"},[(!_vm.noLogo)?_vm._t("logo"):_vm._e(),(!_vm.hasLogoSlot && !_vm.noLogo)?_c('a',{staticClass:"f-header__logo-link",attrs:{"href":"/"}},[_c('img',{staticClass:"f-header__logo",attrs:{"src":"https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg"}})]):_vm._e()],2),_c('div',{staticClass:"f-header__column"},[(!_vm.hideSearchBar)?_c('FactorSearchBar',{staticClass:"f-header__search desktop",attrs:{"searchBarHandler":_vm.searchBarHandler,"searchBarLabel":_vm.searchBarLabel,"searchBarValue":_vm.searchBarValue,"searchBarDropdown":_vm.searchBarSuggestions,"dropdownEnabled":_vm.searchBarDropdownEnabled},on:{"keyup":_vm.searchBarKeyup,"search-bar-dropdown-clicked":_vm.searchBarDropdownClicked,"clear-query":_vm.searchBarClearQuery}}):_vm._e(),_c('FactorShowMore',{ref:"showMoreSearch",attrs:{"buttonText":_vm.showMoreButtonText,"alternateButtonText":_vm.showMoreAlternateButtonText,"buttonClass":"top-bar__search-toggle","closeWhenClickedOutside":true,"buttonTextVisuallyHidden":true,"moveFocus":false}},[_c('template',{slot:"overflow"},[(!_vm.hideSearchBar)?_c('FactorSearchBar',{staticClass:"f-header__search mobile",attrs:{"searchBarHandler":_vm.searchBarHandler,"searchBarLabel":_vm.searchBarLabel,"searchBarValue":_vm.searchBarValue,"searchBarDropdown":_vm.searchBarSuggestions,"dropdownEnabled":_vm.searchBarDropdownEnabled},on:{"keyup":_vm.searchBarKeyup,"search-bar-dropdown-clicked":_vm.searchBarDropdownClicked,"clear-query":_vm.searchBarClearQuery}}):_vm._e()],1),_c('template',{slot:"button-content"},[_c('FactorIcon',{attrs:{"id":"search","width":20,"height":20}})],1)],2)],1),_c('div',{staticClass:"f-header__column"},[_c('nav',{staticClass:"f-nav"},[_vm._t("nav")],2),_c('div',{staticClass:"f-profile"},[_vm._t("profile")],2)])])}
var FactorHeadervue_type_template_id_023f44f0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorHeader/FactorHeader.vue?vue&type=template&id=023f44f0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=template&id=f84e248e&
var FactorSearchBarvue_type_template_id_f84e248e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"search-bar",attrs:{"method":"GET"},on:{"submit":_vm.handleSubmit}},[_c('fieldset',[_c('legend',{staticClass:"visually-hidden"},[_vm._v("search")]),_c('div',{staticClass:"search-bar__fields"},[_c('label',{staticClass:"visually-hidden",attrs:{"for":"search-query"}},[_vm._v("search-input")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchQuery),expression:"searchQuery"}],ref:"searchQueryField",staticClass:"search-bar__input",attrs:{"type":"text","id":"search-query","name":"query","placeholder":_vm.searchBarLabel,"autocomplete":_vm.dropdownEnabled ? 'off' : 'on'},domProps:{"value":(_vm.searchQuery)},on:{"keyup":_vm.handleKeyUp,"blur":_vm.onSearchQueryBlur,"focus":_vm.onSearchQueryFocus,"input":function($event){if($event.target.composing){ return; }_vm.searchQuery=$event.target.value}}}),(_vm.searchQuery && _vm.searchQuery.length > 0)?_c('button',{staticClass:"search-bar__clear-button",attrs:{"type":"button"},on:{"click":_vm.clearQuery}},[_c('FactorIcon',{attrs:{"id":"x","width":20,"height":20}}),_c('span',{staticClass:"visually-hidden"},[_vm._v("clear search")])],1):_vm._e(),_c('button',{staticClass:"search-bar__submit",attrs:{"type":"submit"}},[_c('FactorIcon',{attrs:{"id":"search","width":18,"height":18}}),_c('span',{staticClass:"visually-hidden"},[_vm._v("search")])],1)])]),(_vm.dropdownItems.length && _vm.dropdownEnabled)?_c('ul',{staticClass:"search-bar__dropdown"},_vm._l((_vm.dropdownItems),function(item,idx){return _c('li',{key:idx,class:{
        'dropdown-item': true,
        active: _vm.focusedSuggestion === idx,
      },on:{"mousedown":function($event){return _vm.onDropdownItemClick(item)}}},[_vm._v(" "+_vm._s(item.label)+" ")])}),0):_vm._e()])}
var FactorSearchBarvue_type_template_id_f84e248e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=template&id=f84e248e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorIcon/FactorIcon.vue?vue&type=template&id=5cfb9c95&
var FactorIconvue_type_template_id_5cfb9c95_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"icon",attrs:{"viewBox":"0 0 24 24","aria-hidden":"true","role":"presentation","focusable":"false","width":_vm.width,"height":_vm.height},on:{"click":_vm.handleIconClicked}},[[_c('use',{attrs:{"href":_vm.iconHref}})]],2)}
var FactorIconvue_type_template_id_5cfb9c95_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorIcon/FactorIcon.vue?vue&type=template&id=5cfb9c95&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

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
/* harmony default export */ var FactorIconvue_type_script_lang_js_ = ({
  name: 'FactorIcon',
  props: {
    width: Number,
    height: Number,
    id: String
  },
  computed: {
    // iconPath() {
    //   console.log('found: ', require(`@/assets/svg/${this.id}.svg`));
    //   return () => import(`@/assets/svg/${this.id}.svg`);
    // },
    // iconLoader() {
    //   console.log(
    //     'loading svg: ',
    //     `svg-inline-loader?classPrefix=f-i__!@/assets/svg/${this.id}.svg`,
    //   );
    //   return require(`svg-inline-loader?classPrefix=f-i__!@/assets/svg/${this.id}.svg`);
    // },
    iconHref() {
      return `#${__webpack_require__("63d5")(`./${this.id}.svg`).default.id}`;
    }

  },
  methods: {
    handleIconClicked(e) {
      this.$emit('click', e);
    }

        var hook;
        if (moduleIdentifier) {
          // server build
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent &&
                this.parent.$vnode &&
                this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
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
          // never gets called
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = shadowMode
            ? function() {
                injectStyles.call(
                  this,
                  (options.functional ? this.parent : this).$root.$options
                    .shadowRoot,
                );
              }
            : injectStyles;
        }

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

  },
  watch: {
    searchBarDropdown(value) {
      this.dropdownItems = value;
    },

    searchBarValue(value) {
      this.searchQuery = value;
    }

  },

  data() {
    return {
      searchQuery: this.searchBarValue,
      focusedSuggestion: -1,
      dropdownItems: this.searchBarDropdown
    };
  },

  mounted() {
    this.$refs.searchQueryField.focus();
  }

});
// CONCATENATED MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorSearchBar_FactorSearchBarvue_type_script_lang_js_ = (FactorSearchBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FactorSearchBar/FactorSearchBar.vue



function FactorSearchBar_injectStyles (context) {
  
  var style0 = __webpack_require__("ad7e")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FactorSearchBar_component = normalizeComponent(
  FactorSearchBar_FactorSearchBarvue_type_script_lang_js_,
  FactorSearchBarvue_type_template_id_f84e248e_render,
  FactorSearchBarvue_type_template_id_f84e248e_staticRenderFns,
  false,
  FactorSearchBar_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var FactorSearchBar = (FactorSearchBar_component.exports);
// CONCATENATED MODULE: ./src/components/FactorSearchBar/index.js

/* harmony default export */ var components_FactorSearchBar = (FactorSearchBar);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorShowMore/FactorShowMore.vue?vue&type=template&id=19a2554c&
var FactorShowMorevue_type_template_id_19a2554c_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    'show-more': true,
    'show-more--transition': _vm.transition,
    'show-more--expanded': _vm.isExpanded,
  }},[_vm._t("base"),(_vm.overflowBefore)?_c('transition',{attrs:{"name":"show-more__overflow-"}},[(_vm.isExpanded)?_c('div',{ref:"overflowContentElement",staticClass:"show-more__overflow",attrs:{"tabindex":"-1"}},[_vm._t("overflow")],2):_vm._e()]):_vm._e(),_c('button',{ref:"button",class:( _obj = {
      'show-more__button': true
    }, _obj[_vm.buttonClass] = !!_vm.buttonClass, _obj ),attrs:{"type":"button","aria-expanded":_vm.isExpanded ? 'true' : 'false'},on:{"click":_vm.toggleOverflow}},[(_vm.isExpanded)?[_vm._t("icon-expanded"),_c('span',{class:("show-more__button-text" + _vm.buttonTextClass)},[_vm._v(_vm._s(_vm.alternateButtonText || _vm.buttonText))])]:[_vm._t("icon-collapsed"),_c('span',{class:("show-more__button-text" + _vm.buttonTextClass)},[_vm._v(_vm._s(_vm.buttonText))])],_vm._t("button-content")],2),(_vm.overflowBefore === false)?_c('transition',{attrs:{"name":"show-more__overflow-"}},[(_vm.isExpanded)?_c('div',{ref:"overflowContentElement",staticClass:"show-more__overflow",attrs:{"tabindex":"-1"},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.toggleOverflow($event)}}},[_vm._t("overflow")],2):_vm._e()]):_vm._e()],2)}
var FactorShowMorevue_type_template_id_19a2554c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FactorShowMore/FactorShowMore.vue?vue&type=template&id=19a2554c&

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
/* harmony default export */ var FactorShowMorevue_type_script_lang_js_ = ({
  name: 'FactorShowMore',
  props: {
    buttonText: String,
    alternateButtonText: String,
    buttonClass: String,
    transition: Boolean,
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

      var expandedEl = this.$refs.overflowContentElement ? this.$refs.overflowContentElement.firstElementChild : null; // closes overflow content if clicked anywhere, except the
      // overflowing content itself or elements in the overflow content

      if (expandedEl === null || event.target !== expandedEl && !expandedEl.contains(event.target)) {
        this.isExpanded = false;
      } // if clicked on a link or button anywhere, close the overflow content
      // a delay is needed since otherwise links aren't followed


      if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
        setTimeout(() => {
          this.isExpanded = false;
        }, 150);
      }
    }

  },

  data() {
    return {
      isExpanded: false
    };
  },

  watch: {
    updateIndicator(val, old) {
      if (this.closeOnUpdate && old && old !== val) {
        this.isExpanded = false;
      }
    }

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



function FactorShowMore_injectStyles (context) {
  
  var style0 = __webpack_require__("4430")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FactorShowMore_component = normalizeComponent(
  FactorShowMore_FactorShowMorevue_type_script_lang_js_,
  FactorShowMorevue_type_template_id_19a2554c_render,
  FactorShowMorevue_type_template_id_19a2554c_staticRenderFns,
  false,
  FactorShowMore_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var FactorShowMore = (FactorShowMore_component.exports);
// CONCATENATED MODULE: ./src/components/FactorShowMore/index.js

/* harmony default export */ var components_FactorShowMore = (FactorShowMore);
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
      default: null
    },
    noLogo: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    searchBarHandler(value) {
      if (!this.searchBarConfig.handler) {
        return;
      }

      this.searchBarConfig.handler(value);
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
  FactorHeadervue_type_template_id_023f44f0_render,
  FactorHeadervue_type_template_id_023f44f0_staticRenderFns,
  false,
  FactorHeader_injectStyles,
  null,
  null
  ,true
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

/* harmony default export */ var FactorFooter = (FactorFooter_component.exports);
// CONCATENATED MODULE: ./src/components/FactorFooter/index.js

/* harmony default export */ var components_FactorFooter = (FactorFooter);
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/FactorFlowTemplate/FactorFlowTemplate.vue?vue&type=template&id=39239fe6&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e4725a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FactorPanel/FactorPanel.vue?vue&type=template&id=772d172a&
var FactorPanelvue_type_template_id_772d172a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{class:{ panel: true, 'full-on-mobile': _vm.fullOnMobile }},[_vm._t("meta"),(!_vm.hideContent && _vm.hasTitle)?_c('header',{staticClass:"panel__header"},[_c('h2',[_vm._v(_vm._s(_vm.title))]),_vm._t("header")],2):_vm._e(),(!_vm.hideContent)?_c('div',{class:{ panel__content: true, full: _vm.fullContent }},[_vm._t("content")],2):_vm._e()],2)}
var FactorPanelvue_type_template_id_772d172a_staticRenderFns = []


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
    hasTitle() {
      return this.title !== '';
    }

  }
});
// CONCATENATED MODULE: ./src/components/FactorPanel/FactorPanel.vue?vue&type=script&lang=js&
 /* harmony default export */ var FactorPanel_FactorPanelvue_type_script_lang_js_ = (FactorPanelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FactorPanel/FactorPanel.vue



function FactorPanel_injectStyles (context) {
  
  var style0 = __webpack_require__("ec0b")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FactorPanel_component = normalizeComponent(
  FactorPanel_FactorPanelvue_type_script_lang_js_,
  FactorPanelvue_type_template_id_772d172a_render,
  FactorPanelvue_type_template_id_772d172a_staticRenderFns,
  false,
  FactorPanel_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var FactorPanel = (FactorPanel_component.exports);
// CONCATENATED MODULE: ./src/components/FactorPanel/index.js

/* harmony default export */ var components_FactorPanel = (FactorPanel);
// CONCATENATED MODULE: ./src/index.js








// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fb06":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "cpg",
  "use": "cpg-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"cpg\"><path d=\"M20.9 7.6c-.1-.1-.1-.2-.2-.3l-6-6c-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.4-.1H6C4.3 1 3 2.3 3 4v16c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V8c0-.1 0-.3-.1-.4zM15 4.4L17.6 7H15V4.4zM18 21H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h7v5c0 .6.4 1 1 1h5v11c0 .6-.4 1-1 1zm-1-8c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1zm0 4c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1zM7 9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1z\" fill=\"currentColor\" fill-rule=\"evenodd\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fd2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "edit",
  "use": "edit-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"edit\"><path fill=\"currentColor\" d=\"M21 14.7V20c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3h5.3c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-5.3c0-.6.4-1 1-1s1 .4 1 1zm1.7-8l-10 10c-.2.2-.4.3-.7.3H8c-.6 0-1-.4-1-1v-4c0-.3.1-.5.3-.7l10-10c.4-.4 1-.4 1.4 0l4 4c.4.4.4 1 0 1.4zM20.6 6L18 3.4l-9 9V15h2.6l9-9z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fed3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "envelope",
  "use": "envelope-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"envelope\"><path fill=\"currentColor\" d=\"M20 3H4C2.3 3 1 4.3 1 6v12c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM4 5h16c.4 0 .7.2.9.6L12 11.8 3.1 5.6c.2-.4.5-.6.9-.6zm16 14H4c-.6 0-1-.4-1-1V7.9l8.4 5.9c.2.1.4.2.6.2.2 0 .4-.1.6-.2L21 7.9V18c0 .6-.4 1-1 1z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ })

/******/ });
//# sourceMappingURL=factor.common.js.map
