"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/main.js?{"page":"pages%2Fmap_dw%2Fmap_dw"} ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_map_dw_map_dw_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/map_dw/map_dw.nvue?mpType=page */ 2);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_map_dw_map_dw_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_map_dw_map_dw_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/map_dw/map_dw'\n        _pages_map_dw_map_dw_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_map_dw_map_dw_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsNkVBQUc7QUFDWCxRQUFRLDZFQUFHO0FBQ1gsUUFBUSw2RUFBRztBQUNYLGdCQUFnQiw2RUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9tYXBfZHcvbWFwX2R3Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvbWFwX2R3L21hcF9kdydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/main.js?{"type":"appStyle"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/pages/map_dw/map_dw.nvue?mpType=page ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_dw_nvue_vue_type_template_id_22152c28_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map_dw.nvue?vue&type=template&id=22152c28&scoped=true&mpType=page */ 3);\n/* harmony import */ var _map_dw_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map_dw.nvue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _map_dw_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _map_dw_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./map_dw.nvue?vue&type=style&index=0&id=22152c28&scoped=true&lang=css&mpType=page */ 15).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./map_dw.nvue?vue&type=style&index=0&id=22152c28&scoped=true&lang=css&mpType=page */ 15).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _map_dw_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _map_dw_nvue_vue_type_template_id_22152c28_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _map_dw_nvue_vue_type_template_id_22152c28_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"22152c28\",\n  \"5a8638b4\",\n  false,\n  _map_dw_nvue_vue_type_template_id_22152c28_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/map_dw/map_dw.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJGQUFtRjtBQUN2SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkZBQW1GO0FBQzVJOztBQUVBOztBQUVBO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9tYXBfZHcubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjE1MmMyOCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWFwX2R3Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWFwX2R3Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL21hcF9kdy5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjIxNTJjMjgmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vbWFwX2R3Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjE1MmMyOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIyMTUyYzI4XCIsXG4gIFwiNWE4NjM4YjRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbWFwX2R3L21hcF9kdy5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************************************************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/pages/map_dw/map_dw.nvue?vue&type=template&id=22152c28&scoped=true&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_template_id_22152c28_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./map_dw.nvue?vue&type=template&id=22152c28&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_template_id_22152c28_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_template_id_22152c28_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_template_id_22152c28_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_template_id_22152c28_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/phpStudy/WWW/71_jiushengquan/pages/map_dw/map_dw.nvue?vue&type=template&id=22152c28&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["minh100"] },
    [
      _c(
        "map",
        {
          ref: "map1",
          staticClass: ["index_map"],
          style: { width: _vm.mapWidth + "px", height: _vm.mapHeight + "px" },
          attrs: {
            id: "map",
            name: "map",
            showCompass: false,
            enableRotate: false,
            latitude: _vm.latitude,
            longitude: _vm.longitude,
            markers: _vm.markersArr,
            controls: _vm.wheight
          },
          on: {
            markertap: _vm.markertap,
            regionchange: _vm.mapChange,
            anchorpointtap: _vm.getbj
          }
        },
        [
          _c("view", { staticClass: ["map_search_box"] }, [
            _c("input", {
              staticClass: ["map_search_int"],
              attrs: {
                type: "text",
                placeholder: "请输入",
                value: _vm.add_str
              },
              on: {
                input: [
                  function($event) {
                    _vm.add_str = $event.target.attr.value
                  },
                  _vm.search_add
                ]
              }
            }),
            _c(
              "text",
              {
                staticClass: ["iconfont", "iconguanbi"],
                staticStyle: { fontSize: "30px", color: "#333" },
                appendAsTree: true,
                attrs: { append: "tree" },
                on: {
                  click: function($event) {
                    _vm.add_str = ""
                  }
                }
              },
              [_vm._v("")]
            )
          ]),
          _c(
            "view",
            { staticClass: ["map_search_btn"], on: { click: _vm.add_bj } },
            [
              _c(
                "text",
                {
                  staticStyle: { fontSize: "30px", color: "#fff" },
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v("保存标记")]
              )
            ]
          ),
          _c("view", { staticClass: ["bj_box"] }, [
            _c("image", {
              staticClass: ["bj_box_img"],
              attrs: {
                src: "../../static/images/baojing1.png",
                mode: "aspectFit"
              },
              on: { click: _vm.baojing_fuc }
            }),
            _vm.baojing
              ? _c(
                  "view",
                  { staticClass: ["bj_main"], on: { click: _vm.baojing_del } },
                  [
                    _c("view", { staticClass: ["bj_cnum"] }, [
                      _c("view", { staticClass: ["bj_cnum_1"] }, [
                        _c(
                          "text",
                          {
                            staticClass: ["bj_cnum_num"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v(_vm._s(_vm.bj_time))]
                        )
                      ])
                    ]),
                    _c(
                      "text",
                      {
                        staticClass: ["bj_tip"],
                        staticStyle: { color: "#fff" },
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v("10秒钟内触摸屏幕取消")]
                    )
                  ]
                )
              : _vm._e()
          ])
        ]
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!****************************************************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/pages/map_dw/map_dw.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--3-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./map_dw.nvue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBiLENBQWdCLHNkQUFHLEVBQUMiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBfZHcubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwX2R3Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/phpStudy/WWW/71_jiushengquan/pages/map_dw/map_dw.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _service = _interopRequireDefault(__webpack_require__(/*! ../../service.js */ 11));\nvar _vuex = __webpack_require__(/*! vuex */ 13);\n\n\n\n\n\n\n\n\nvar _torch = _interopRequireDefault(__webpack_require__(/*! @/common/dc-torch/torch.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var that, mapContext, mapEndloading;var djs_fuc;var djs_fuc1;var that;var dw_time;\nvar domModule = weex.requireModule('dom');\nvar mapSearch = weex.requireModule('mapSearch');\ndomModule.addRule('fontFace', {\n  'fontFamily': \"iconfont\",\n  'src': \"url('../../static/fonts/iconfont.ttf')\" });var _default =\n\n{\n  data: function data() {var _ref;\n    return _ref = {\n      \"latitude\": 39.982205,\n      \"longitude\": 116.314323,\n      mapWidth: 0, //地图区域宽度\n      mapHeight: 0, //地图区域高度\n      centerTop: 0, //中心图片坐标\n      centerLeft: 0, //中心图片坐标\n      translateY: 165,\n      markersArr1: [] }, _defineProperty(_ref, \"markersArr1\",\n    [{\n      \"latitude\": 39.909,\n      \"longitude\": 116.39742,\n      \"iconPath\": \"/static/images/huozai.png\" },\n    {\n      \"latitude\": 39.919,\n      \"longitude\": 116.39742,\n      \"iconPath\": \"/static/images/huozai.png\" },\n    {\n      \"latitude\": 39.975643747304986,\n      \"longitude\": 116.314328,\n      \"iconPath\": \"/static/images/huozai.png\" },\n    {\n      \"latitude\": 39.94254855057598,\n      \"longitude\": 116.314328,\n      \"iconPath\": \"/static/images/huozai.png\" }]), _defineProperty(_ref, \"mapControls1\",\n\n    []), _defineProperty(_ref, \"mapControls\",\n    ''), _defineProperty(_ref, \"tk_show\",\n\n\n\n\n\n    false), _defineProperty(_ref, \"tk_show1\",\n    false), _defineProperty(_ref, \"tk_show1_num\",\n    0), _defineProperty(_ref, \"note_time_t\",\n    ''), _defineProperty(_ref, \"tk_show1_cur\",\n    -1), _defineProperty(_ref, \"add_str\",\n    ''), _defineProperty(_ref, \"zb_bz\",\n\n\n    ''), _defineProperty(_ref, \"zb_img\",\n    ''), _defineProperty(_ref, \"zb_title\",\n    ''), _defineProperty(_ref, \"team_name\",\n\n    ''), _defineProperty(_ref, \"time\",\n    ''), _defineProperty(_ref, \"time1\",\n    ''), _defineProperty(_ref, \"danger_name\",\n    ''), _defineProperty(_ref, \"be_num\",\n    ''), _defineProperty(_ref, \"not_be_num\",\n    ''), _defineProperty(_ref, \"bj_time\",\n\n\n\n\n    10), _defineProperty(_ref, \"baojing\",\n    false), _defineProperty(_ref, \"AUDIO\",\n\n    uni.createInnerAudioContext()), _defineProperty(_ref, \"playMsgid\",\n    ''), _defineProperty(_ref, \"torch_type\",\n    false), _ref;\n\n  },\n  computed: _objectSpread({},\n  (0, _vuex.mapState)(['hasLogin', 'forcedLogin', 'userName', 'loginDatas', 'wheight'])),\n\n  onLoad: function onLoad(option) {var _this = this;\n    that = this;\n    __f__(\"log\", 'that.wheight--------------------------------------->', \" at pages/map_dw/map_dw.nvue:121\");\n    __f__(\"log\", that.wheight, \" at pages/map_dw/map_dw.nvue:122\");\n    __f__(\"log\", option, \" at pages/map_dw/map_dw.nvue:123\");\n    that.zb_bz = option.zb_bz || ''; //备注\n    that.zb_img = option.zb_img;\n    that.zb_title = option.zb_title;\n    that.team_name = option.team_name || ''; //团队名\n    that.time = option.time || ''; //时间\n    that.time1 = option.time1 || ''; //时间1\n    that.danger_name = option.danger_name || ''; //危险类型\n    that.be_num = option.be_num || ''; //生存数\n    that.not_be_num = option.not_be_num || ''; //遇难数\n    that.search_type = option.search_type || ''; //搜索状态\n\n\n\n    this.AUDIO.src = '/static/music/jingbao_kong.mp3';\n    this.AUDIO.loop = true;\n    //音频进入可以播放状态，但不保证后面可以流畅播放\n    this.AUDIO.onCanplay(function (res) {\n      __f__(\"log\", '音频进入可以播放状态，但不保证后面可以流畅播放', \" at pages/map_dw/map_dw.nvue:141\");\n\n    });\n    //音频播放\n    this.AUDIO.onPlay(function (res) {\n      __f__(\"log\", '音频播放', \" at pages/map_dw/map_dw.nvue:146\");\n      uni.vibrateLong({\n        success: function success() {\n          __f__(\"log\", 'success', \" at pages/map_dw/map_dw.nvue:149\");\n        } });\n\n      _torch.default.on();\n      that.torch_type = true;\n      djs_fuc = setInterval(function () {\n\n        if (that.torch_type == true) {\n          _torch.default.off();\n          that.torch_type = false;\n        } else {\n          _torch.default.on();\n          that.torch_type = true;\n        }\n\n        // console.log(that.djs())\n      }, 100);\n      djs_fuc1 = setInterval(function () {\n        uni.vibrateLong({\n          success: function success() {\n            __f__(\"log\", 'success', \" at pages/map_dw/map_dw.nvue:169\");\n          } });\n\n      }, 1000);\n    });\n    //音频停止\n    this.AUDIO.onStop(function (res) {\n      __f__(\"log\", '音频停止', \" at pages/map_dw/map_dw.nvue:176\");\n      clearInterval(djs_fuc);\n      clearInterval(djs_fuc1);\n      _torch.default.off();\n      that.torch_type = true;\n    });\n    //语音自然播放结束\n    this.AUDIO.onEnded(function (res) {\n      __f__(\"log\", '语音自然播放结束', \" at pages/map_dw/map_dw.nvue:184\");\n      _this.playMsgid = null;\n    });\n    /*that.mapControls=[\n        \t\t{\n        \t\t\tid: \"1\",\n        \t\t\tposition: {\n        \t\t\t\tleft: 750 / 2 - 28,\n        \t\t\t\ttop: that.wheight - 68,\n        \t\t\t\twidth: 55,\n        \t\t\t\theight: 68\n        \t\t\t},\n        \t\t\ticonPath: \"/static/images/huozai.png\",\n        \t\t\tclickable: false\n        \t\t}\n        \t]*/\n\n    this.getLocation();\n\n    /*const innerAudioContext = uni.createInnerAudioContext();\n                        innerAudioContext.autoplay = true;\n                        innerAudioContext.src = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';\n                        innerAudioContext.onPlay(() => {\n                          console.log('开始播放');\n                        });\n                        innerAudioContext.onError((res) => {\n                          console.log(res.errMsg);\n                          console.log(res.errCode);\n                        });*/\n\n    mapContext = uni.createMapContext('map', this);\n  },\n  onHide: function onHide() {\n    that.show_count++;\n    clearInterval(djs_fuc);\n    clearInterval(djs_fuc1);\n    _torch.default.off();\n    that.torch_type = true;\n  },\n  mounted: function mounted() {\n\n    that.mapWidth = 750;\n    __f__(\"log\", uni.getSystemInfoSync(), \" at pages/map_dw/map_dw.nvue:226\");\n    that.sHeight = uni.getSystemInfoSync().statusBarHeight;\n    that.mapHeight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight;\n    uni.getSystemInfo({\n      success: function success(res) {\n        // that.mapHeight = res.windowHeight;\n        // console.log(that.height);\n      } });\n\n    __f__(\"log\", that.mapHeight, \" at pages/map_dw/map_dw.nvue:235\");\n    __f__(\"log\", uni.getSystemInfoSync().screenHeight, \" at pages/map_dw/map_dw.nvue:236\");\n    that.getSize();\n  },\n  methods: _objectSpread(_objectSpread({},\n  (0, _vuex.mapMutations)(['setAddress'])), {}, {\n    // 播放语音\n    playVoice: function playVoice(msg) {\n      this.AUDIO.play();\n    },\n    baojing_fuc: function baojing_fuc() {\n      var that = this;\n      this.baojing = true;\n      that.bj_time = 3;\n      djs_fuc = setInterval(function () {\n        if (that.bj_time == 0) {\n          // uni.showToast({\n          // \ticon:'none',\n          // \ttitle:'警报操作'\n          // })\n          __f__(\"log\", 0, \" at pages/map_dw/map_dw.nvue:255\");\n\n          clearInterval(djs_fuc);\n          that.bj_time = '!';\n          that.playVoice();\n        } else {\n          that.bj_time--;\n        }\n        // console.log(that.djs())\n      }, 1000);\n    },\n    baojing_del: function baojing_del() {\n      var that = this;\n      clearInterval(djs_fuc);\n      this.bj_time = 10;\n      this.baojing = false;\n      this.AUDIO.stop();\n    },\n\n    test: function test() {},\n    add_bj: function add_bj() {\n      var data = {\n        token: that.$store.state.loginDatas.token,\n        latitude: that.latitude,\n        longitude: that.longitude,\n        iconPath: that.zb_img,\n        comment: that.zb_bz,\n        type_name: that.zb_title,\n\n        team_name: that.team_name, //团队名\n        enter_time: that.time, //时间\n        evacuate_time: that.time1, //时间1\n        hazard_type: that.danger_name, //危险类型\n        survivor: that.be_num, //生存数\n        victim: that.not_be_num, //遇难数\n        search_state: that.search_type //搜索状态\n      };\n      __f__(\"log\", data, \" at pages/map_dw/map_dw.nvue:292\");\n      if (that.btn_kg == 1) {\n        return;\n      }\n      that.btn_kg = 1;\n      //selectSaraylDetailByUserCard\n      var jkurl = '/minapp/store-position';\n      uni.showLoading({\n        title: '正在设置' });\n\n\n      _service.default.P_post(jkurl, data).then(function (res) {\n        that.btn_kg = 0;\n        __f__(\"log\", res, \" at pages/map_dw/map_dw.nvue:305\");\n        if (res.code == 1) {\n          var datas = res.data;\n          __f__(\"log\", typeof datas, \" at pages/map_dw/map_dw.nvue:308\");\n\n          if (typeof datas == 'string') {\n            datas = JSON.parse(datas);\n          }\n          uni.showToast({\n            icon: 'none',\n            title: '添加成功' });\n\n          setTimeout(function () {\n            uni.navigateBack({\n              delta: 1 });\n\n          }, 1000);\n        } else {\n          if (res.msg) {\n            uni.showToast({\n              icon: 'none',\n              title: res.msg });\n\n          } else {\n            uni.showToast({\n              icon: 'none',\n              title: '获取失败' });\n\n          }\n        }\n      }).catch(function (e) {\n        that.btn_kg = 0;\n        __f__(\"log\", e, \" at pages/map_dw/map_dw.nvue:337\");\n        uni.showToast({\n          icon: 'none',\n          title: '获取数据失败' });\n\n      });\n\n      return;\n      var news_arr = that.markersArr;\n      var _marklList = news_arr.filter(function (item) {\n        return true;\n\n      });\n      _marklList.push(new_add);\n      that.markersArr = _marklList;\n      __f__(\"log\", that.markersArr, \" at pages/map_dw/map_dw.nvue:352\");\n\n    },\n    getbj: function getbj(e) {\n      __f__(\"log\", 'getbj------------------------------------------------>', \" at pages/map_dw/map_dw.nvue:356\");\n      __f__(\"log\", e, \" at pages/map_dw/map_dw.nvue:357\");\n    },\n    getSize: function getSize() {\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#map').boundingClientRect(function (data) {\n        var _navHeight = data.height;\n        __f__(\"log\", '_navHeight------------------------------------>', \" at pages/map_dw/map_dw.nvue:363\");\n        __f__(\"log\", _navHeight, \" at pages/map_dw/map_dw.nvue:364\");\n        _navHeight = _navHeight / 2;\n        var sss = [{\n          id: \"1\",\n          position: {\n            left: 750 / 2 - 28,\n            top: _navHeight - 68,\n            width: 55,\n            height: 68 },\n\n          // iconPath: \"/static/images/huozai.png\",\n          iconPath: that.zb_img,\n          clickable: false }];\n\n        that.mapControls = sss;\n        // Vue.set(that.mapControls[0].position,'top',sss)\n        __f__(\"log\", that.mapControls, \" at pages/map_dw/map_dw.nvue:380\");\n      }).exec();\n    },\n    poiSearchNearBy: function poiSearchNearBy() {\n      // var point = this.markers[0]\n      mapSearch.poiSearchNearBy({\n        point: {\n          latitude: that.latitude,\n          longitude: that.longitude },\n\n        key: that.add_str,\n        radius: 10000000 },\n      function (ret) {\n\n        __f__(\"log\", ret, \" at pages/map_dw/map_dw.nvue:394\");\n        uni.showModal({\n          content: JSON.stringify(ret) });\n\n        that.longitude = ret.poiList[0].location.longitude;\n        that.latitude = ret.poiList[0].location.latitude;\n      });\n    },\n    search_add: function search_add() {\n      clearInterval(dw_time);\n      clearTimeout('重新计算');\n      dw_time = setTimeout(function () {\n        var kw = that.add_str;\n        __f__(\"log\", kw.length, \" at pages/map_dw/map_dw.nvue:407\");\n        if (kw.length > 0) {\n\n          that.poiSearchNearBy();\n\n        } else {\n          that.poiSearchNearBy();\n          // that.qy_show = that.qy_arr3\n        }\n      }, 1000);\n    },\n    open_tk: function open_tk(num) {\n      that.tk_show = false;\n      that.tk_show1 = true;\n      that.tk_show1_num = num;\n\n      var now_time = new Date();\n      var now_year = now_time.getFullYear();\n      var now_month = now_time.getMonth() + 1;\n      var now_date = now_time.getDate();\n      var hour = now_time.getHours();\n      var minute = now_time.getMinutes();\n      if (now_month < 10) {\n        now_month = '0' + now_month * 1;\n      }\n      if (now_date < 10) {\n        now_date = '0' + now_date * 1;\n      }\n      if (hour < 10) {\n        hour = '0' + hour * 1;\n      }\n      if (minute < 10) {\n        minute = '0' + minute * 1;\n      }\n      that.note_time_t = now_year + '-' + now_month + '-' + now_date + ' ' + hour + ':' + minute;\n    },\n    //地图点击事件\n    markertap: function markertap(e) {\n      var _id = e.detail.markerId,\n      _index;\n      var _list = that.markersArr;\n      for (var i = 0; i < _list.length; i++) {\n        if (_list[i].id == _id) {\n          _index = i;\n          that.current = i;\n          that.openAnimation();\n          break;\n        }\n      };\n    },\n    //移动地图结束\n    mapChange: function mapChange(e) {\n      __f__(\"log\", e, \" at pages/map_dw/map_dw.nvue:459\");\n      // console.log(mapEndloading)\n      // if (e) {\n      // \treturn\n      // }\n\n      if (mapEndloading) {\n        return;\n      }\n      /*mapEndloading = true;\n        setTimeout(() => { //防抖\n        \tmapEndloading = false;\n        }, 500);\n        clearTimeout(dw_time)\n        clearInterval(dw_time)\n        clearTimeout('重新计算')\n        dw_time = setTimeout(function() {\n        \tif (e.detail.type == 'end' || e.type == 'end') {\n        \t\tconsole.log('中心区')\n        \t\tconsole.log(mapContext)\n        \t\t//中心区域左边\n        \t\tmapContext.getCenterLocation({\n        \t\t\tsuccess(res) {\n        \t\t\t\tconsole.log('success')\n        \t\t\t\tthat.mapEnd(res);\n        \t\t\t},\n        \t\t\tfail(err) {\n        \t\t\t\tconsole.log('fail')\n        \t\t\t\tconsole.log(err)\n        \t\t\t}\n        \t\t});\n        \t}\n        }, 1000)\n        return*/\n      mapEndloading = true;\n      setTimeout(function () {//防抖\n        mapEndloading = false;\n      }, 500);\n      if (uni.getSystemInfoSync().platform == 'ios' && e.detail.type == 'end' || e.type == 'end') {\n        __f__(\"log\", '中心区', \" at pages/map_dw/map_dw.nvue:498\");\n        //中心区域左边\n        mapContext.getCenterLocation({\n          success: function success(res) {\n            that.mapEnd(res);\n          },\n          fail: function fail(err) {\n            __f__(\"log\", err, \" at pages/map_dw/map_dw.nvue:505\");\n          } });\n\n      }\n      return;\n      if (uni.getSystemInfoSync().platform == 'ios') {\n        if (e.detail.type == 'end') {\n          //中心区域左边\n          mapContext.getCenterLocation({\n            success: function success(res) {\n              that.mapEnd(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map_dw/map_dw.nvue:518\");\n            } });\n\n        }\n      } else {\n        //地图移动结束\n        __f__(\"log\", e, \" at pages/map_dw/map_dw.nvue:524\");\n        if (e.type == 'end') {\n          //中心区域左边\n          mapContext.getCenterLocation({\n            success: function success(res) {\n\n              that.mapEnd(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map_dw/map_dw.nvue:533\");\n            } });\n\n          //缩放视野展示所有经纬度\n          // mapContext.getCenterLocation({\n          // \tsuccess(res) {\n          // \t\tconsole.log(res);\n          // \t},\n          // \tfail(err) {\n          // \t\tconsole.log(err)\n          // \t}\n          // })\n          //获取当前地图的视野范围\n          mapContext.getRegion({\n            success: function success(res) {\n              // console.log(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map_dw/map_dw.nvue:551\");\n            } });\n\n          //获取当前地图的缩放级别\n          mapContext.getScale({\n            success: function success(res) {\n              // console.log(res);\n            },\n            fail: function fail(err) {\n              __f__(\"log\", err, \" at pages/map_dw/map_dw.nvue:560\");\n            } });\n\n        }\n      }\n\n\n    },\n    getList: function getList() {},\n    //地图移动\n    mapEnd: function mapEnd(res) {\n      __f__(\"log\", '加载数据', \" at pages/map_dw/map_dw.nvue:571\");\n      if (res) {\n        that.longitude = res.longitude;\n        that.latitude = res.latitude;\n      }\n\n      //原数据\n      that.list = [];\n      that.pageIndex = 1;\n      that.chaceList = [];\n      // 覆盖物数据\n      // that.markersArr = [];\n      that.originalList = [];\n      that.getList();\n\n    },\n    getLocation: function getLocation(type) {\n\n\n      uni.getLocation({\n        // type: 'wgs84',\n        type: 'gcj02',\n        success: function success(res) {\n          __f__(\"log\", res.longitude, \" at pages/map_dw/map_dw.nvue:594\");\n          __f__(\"log\", res.latitude, \" at pages/map_dw/map_dw.nvue:595\");\n          that.longitude = res.longitude;\n          that.latitude = res.latitude;\n          that.pageIndex = 1;\n          // if (type != 'back') {\n\n          that.setAddress(res);\n          setTimeout(function () {\n            that.getList();\n          }, 1000);\n          // }\n\n        },\n        fail: function fail(err) {\n          if (uni.getSystemInfoSync().platform == 'ios') {\n            if (!permision.judgeIosPermission('location')) {\n              uni.showModal({\n                title: '提示',\n                content: '需要打开定位权限',\n                success: function success(res) {\n                  if (res.confirm) {\n                    that.isToSetting = true;\n                    permision.gotoAppPermissionSetting();\n                  }\n                } });\n\n            }\n          } else {\n            that.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION');\n          }\n\n        } });\n\n    },\n    requestAndroidPermission: function requestAndroidPermission(permisionID) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var result, strStatus;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n                  permision.requestAndroidPermission(permisionID));case 2:result = _context.sent;\n\n                if (result == 1) {\n                  strStatus = \"已获得授权\";\n                } else if (result == 0) {\n                  strStatus = \"未获得授权\";\n                } else {\n                  strStatus = \"被永久拒绝权限\";\n                }\n                uni.showModal({\n                  title: '提示',\n                  content: '需要打开定位权限',\n                  success: function success(res) {\n                    if (res.confirm) {\n                      that.isToSetting = true;\n                      permision.gotoAppPermissionSetting();\n                    }\n                  } });case 5:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n    getimg: function getimg(img) {\n      return _service.default.getimg(img);\n    },\n    jump_fuc: function jump_fuc(e) {\n      if (that.tk_show1_cur == -1) {\n        uni.showToast({\n          icon: 'none',\n          title: '请选择类型' });\n\n        return;\n      }\n      uni.navigateTo({\n        url: '/pages/map_dw/map_dw?tk_show1_cur=' + that.tk_show1_cur + '&tk_show1_num=' + that.tk_show1_num });\n\n    },\n    jump: function jump(e) {\n      var that = this;\n\n      if (that.btn_kg == 1) {\n        return;\n      } else {\n        that.btn_kg = 1;\n        setTimeout(function () {\n          that.btn_kg = 0;\n        }, 1000);\n      }\n\n      _service.default.jump(e);\n    } }) };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbWFwX2R3L21hcF9kdy5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0EsK0YsMHVEQUxBLG9DQUNBLFlBQ0EsYUFDQSxTQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSxpREFGQSxJOztBQUlBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSw2QkFGQTtBQUdBLGlCQUhBLEVBR0E7QUFDQSxrQkFKQSxFQUlBO0FBQ0Esa0JBTEEsRUFLQTtBQUNBLG1CQU5BLEVBTUE7QUFDQSxxQkFQQTtBQVFBLHFCQVJBO0FBU0E7QUFDQSx3QkFEQTtBQUVBLDRCQUZBO0FBR0EsNkNBSEE7QUFJQTtBQUNBLHdCQURBO0FBRUEsNEJBRkE7QUFHQSw2Q0FIQSxFQUpBO0FBUUE7QUFDQSxvQ0FEQTtBQUVBLDZCQUZBO0FBR0EsNkNBSEEsRUFSQTtBQVlBO0FBQ0EsbUNBREE7QUFFQSw2QkFGQTtBQUdBLDZDQUhBLEVBWkEsQ0FUQTs7QUEwQkEsTUExQkE7QUEyQkEsTUEzQkE7Ozs7OztBQWlDQSxTQWpDQTtBQWtDQSxTQWxDQTtBQW1DQSxLQW5DQTtBQW9DQSxNQXBDQTtBQXFDQSxNQXJDQTtBQXNDQSxNQXRDQTs7O0FBeUNBLE1BekNBO0FBMENBLE1BMUNBO0FBMkNBLE1BM0NBOztBQTZDQSxNQTdDQTtBQThDQSxNQTlDQTtBQStDQSxNQS9DQTtBQWdEQSxNQWhEQTtBQWlEQSxNQWpEQTtBQWtEQSxNQWxEQTs7Ozs7QUF1REEsTUF2REE7QUF3REEsU0F4REE7O0FBMERBLGlDQTFEQTtBQTJEQSxNQTNEQTtBQTREQSxTQTVEQTs7QUE4REEsR0FoRUE7QUFpRUE7QUFDQSx1RkFEQSxDQWpFQTs7QUFvRUEsUUFwRUEsa0JBb0VBLE1BcEVBLEVBb0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FM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LGlCQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLHFDQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQVJBLElBVkE7O0FBb0JBLEtBMVpBO0FBMlpBLFVBM1pBLGtCQTJaQSxHQTNaQSxFQTJaQTtBQUNBO0FBQ0EsS0E3WkE7QUE4WkEsWUE5WkEsb0JBOFpBLENBOVpBLEVBOFpBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsNEdBREE7O0FBR0EsS0F6YUE7QUEwYUEsUUExYUEsZ0JBMGFBLENBMWFBLEVBMGFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxJQUZBO0FBR0E7O0FBRUE7QUFDQSxLQXZiQSxHQTVMQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJtaW5oMTAwXCI+XHJcblx0XHQ8bWFwIGNsYXNzPVwiaW5kZXhfbWFwXCIgaWQ9XCJtYXBcIiBuYW1lPVwibWFwXCIgcmVmPVwibWFwMVwiIDpzaG93LWNvbXBhc3M9XCJmYWxzZVwiIDpzdHlsZT1cInt3aWR0aDptYXBXaWR0aCsncHgnLGhlaWdodDogbWFwSGVpZ2h0KydweCd9XCJcclxuXHRcdCA6ZW5hYmxlLXJvdGF0ZT1cImZhbHNlXCIgOmxhdGl0dWRlPVwibGF0aXR1ZGVcIiA6bG9uZ2l0dWRlPVwibG9uZ2l0dWRlXCIgOm1hcmtlcnM9XCJtYXJrZXJzQXJyXCIgQG1hcmtlcnRhcD1cIm1hcmtlcnRhcFwiXHJcblx0XHQgOmNvbnRyb2xzPVwid2hlaWdodFwiIEByZWdpb25jaGFuZ2U9J21hcENoYW5nZScgQGFuY2hvcnBvaW50dGFwPVwiZ2V0YmpcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtYXBfc2VhcmNoX2JveFwiPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1hcF9zZWFyY2hfaW50XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiIHYtbW9kZWw9XCJhZGRfc3RyXCIgQGlucHV0PVwic2VhcmNoX2FkZFwiPlxyXG5cdFx0XHRcdDx0ZXh0IEBjbGljaz1cImFkZF9zdHI9JydcIiBjbGFzcz1cImljb25mb250IGljb25ndWFuYmlcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDtjb2xvcjogIzMzMztcIj4mI3hlNjA0OzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1hcF9zZWFyY2hfYnRuXCIgQGNsaWNrPVwiYWRkX2JqXCI+PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDMwcHg7Y29sb3I6ICNmZmY7XCI+5L+d5a2Y5qCH6K6wPC90ZXh0Pjwvdmlldz5cclxuXHJcblx0XHRcdDwhLS0g6K2m5oql57uE5Lu2IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJqX2JveFwiPlxyXG5cdFx0XHRcdDxpbWFnZSBAY2xpY2s9XCJiYW9qaW5nX2Z1Y1wiIGNsYXNzPVwiYmpfYm94X2ltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYmFvamluZzEucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cImJhb2ppbmdcIiBAY2xpY2s9XCJiYW9qaW5nX2RlbFwiIGNsYXNzPVwiYmpfbWFpblwiPlxyXG5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmpfY251bVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJqX2NudW1fMVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYmpfY251bV9udW1cIj57e2JqX3RpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJial90aXBcIiBzdHlsZT1cImNvbG9yOiAjZmZmO1wiPjEw56eS6ZKf5YaF6Kem5pG45bGP5bmV5Y+W5raIPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9tYXA+XHJcblxyXG5cclxuXHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHRpbXBvcnQgc2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlLmpzJztcclxuXHRpbXBvcnQge1xyXG5cdFx0bWFwU3RhdGUsXHJcblx0XHRtYXBNdXRhdGlvbnNcclxuXHR9IGZyb20gJ3Z1ZXgnXHJcblx0dmFyIHRoYXQsIG1hcENvbnRleHQsIG1hcEVuZGxvYWRpbmc7XHJcblx0dmFyIGRqc19mdWNcclxuXHR2YXIgZGpzX2Z1YzFcclxuXHR2YXIgdGhhdFxyXG5cdHZhciBkd190aW1lXHJcblx0aW1wb3J0IHRvcmNoIGZyb20gXCJAL2NvbW1vbi9kYy10b3JjaC90b3JjaC5qc1wiXHJcblx0Y29uc3QgZG9tTW9kdWxlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHRsZXQgbWFwU2VhcmNoID0gd2VleC5yZXF1aXJlTW9kdWxlKCdtYXBTZWFyY2gnKVxyXG5cdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuXHRcdCdmb250RmFtaWx5JzogXCJpY29uZm9udFwiLFxyXG5cdFx0J3NyYyc6IFwidXJsKCcuLi8uLi9zdGF0aWMvZm9udHMvaWNvbmZvbnQudHRmJylcIlxyXG5cdH0pO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XCJsYXRpdHVkZVwiOiAzOS45ODIyMDUsXHJcblx0XHRcdFx0XCJsb25naXR1ZGVcIjogMTE2LjMxNDMyMyxcclxuXHRcdFx0XHRtYXBXaWR0aDogMCwgLy/lnLDlm77ljLrln5/lrr3luqZcclxuXHRcdFx0XHRtYXBIZWlnaHQ6IDAsIC8v5Zyw5Zu+5Yy65Z+f6auY5bqmXHJcblx0XHRcdFx0Y2VudGVyVG9wOiAwLCAvL+S4reW/g+WbvueJh+WdkOagh1xyXG5cdFx0XHRcdGNlbnRlckxlZnQ6IDAsIC8v5Lit5b+D5Zu+54mH5Z2Q5qCHXHJcblx0XHRcdFx0dHJhbnNsYXRlWTogMTY1LFxyXG5cdFx0XHRcdG1hcmtlcnNBcnIxOltdLFxyXG5cdFx0XHRcdG1hcmtlcnNBcnIxOiBbe1xyXG5cdFx0XHRcdFx0XCJsYXRpdHVkZVwiOiAzOS45MDksXHJcblx0XHRcdFx0XHRcImxvbmdpdHVkZVwiOiAxMTYuMzk3NDIsXHJcblx0XHRcdFx0XHRcImljb25QYXRoXCI6IFwiL3N0YXRpYy9pbWFnZXMvaHVvemFpLnBuZ1wiXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XCJsYXRpdHVkZVwiOiAzOS45MTksXHJcblx0XHRcdFx0XHRcImxvbmdpdHVkZVwiOiAxMTYuMzk3NDIsXHJcblx0XHRcdFx0XHRcImljb25QYXRoXCI6IFwiL3N0YXRpYy9pbWFnZXMvaHVvemFpLnBuZ1wiXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XCJsYXRpdHVkZVwiOiAzOS45NzU2NDM3NDczMDQ5ODYsXHJcblx0XHRcdFx0XHRcImxvbmdpdHVkZVwiOiAxMTYuMzE0MzI4LFxyXG5cdFx0XHRcdFx0XCJpY29uUGF0aFwiOiBcIi9zdGF0aWMvaW1hZ2VzL2h1b3phaS5wbmdcIlxyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFwibGF0aXR1ZGVcIjogMzkuOTQyNTQ4NTUwNTc1OTgsXHJcblx0XHRcdFx0XHRcImxvbmdpdHVkZVwiOiAxMTYuMzE0MzI4LFxyXG5cdFx0XHRcdFx0XCJpY29uUGF0aFwiOiBcIi9zdGF0aWMvaW1hZ2VzL2h1b3phaS5wbmdcIlxyXG5cdFx0XHRcdH1dLCAvL+imhueblueJqVxyXG5cdFx0XHRcdG1hcENvbnRyb2xzMTogW10sXHJcblx0XHRcdFx0bWFwQ29udHJvbHM6ICcnLCAvL+WcsOWbvuS4reeahOaOp+S7tlxyXG5cdFx0XHRcdFxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0XHR0a19zaG93OiBmYWxzZSxcclxuXHRcdFx0XHR0a19zaG93MTogZmFsc2UsXHJcblx0XHRcdFx0dGtfc2hvdzFfbnVtOiAwLFxyXG5cdFx0XHRcdG5vdGVfdGltZV90OiAnJyxcclxuXHRcdFx0XHR0a19zaG93MV9jdXI6IC0xLFxyXG5cdFx0XHRcdGFkZF9zdHI6ICcnLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHpiX2J6OicnLFxyXG5cdFx0XHRcdHpiX2ltZzonJyxcclxuXHRcdFx0XHR6Yl90aXRsZTonJyxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0ZWFtX25hbWU6JycsICAvL+WboumYn+WQjVxyXG5cdFx0XHRcdHRpbWU6JycsICAgIC8v5pe26Ze0XHJcblx0XHRcdFx0dGltZTE6JycsICAgLy/ml7bpl7QxXHJcblx0XHRcdFx0ZGFuZ2VyX25hbWU6JycsICAvL+WNsemZqeexu+Wei1xyXG5cdFx0XHRcdGJlX251bTonJywgICAgICAvL+eUn+WtmOaVsFxyXG5cdFx0XHRcdG5vdF9iZV9udW06JycsICAgLy/pgYfpmr7mlbBcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRial90aW1lOjEwLFxyXG5cdFx0XHRcdGJhb2ppbmc6ZmFsc2UsXHJcblx0XHRcdFx0Ly/mkq3mlL7or63pn7Pnm7jlhbPlj4LmlbBcclxuXHRcdFx0XHRBVURJTzogdW5pLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCksXHJcblx0XHRcdFx0cGxheU1zZ2lkOicnLFxyXG5cdFx0XHRcdHRvcmNoX3R5cGU6ZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC4uLm1hcFN0YXRlKFsnaGFzTG9naW4nLCAnZm9yY2VkTG9naW4nLCAndXNlck5hbWUnLCAnbG9naW5EYXRhcycsICd3aGVpZ2h0J10pLFxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChvcHRpb24pIHtcclxuXHRcdFx0dGhhdCA9IHRoaXNcclxuXHRcdFx0Y29uc29sZS5sb2coJ3RoYXQud2hlaWdodC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4nKVxyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGF0LndoZWlnaHQpXHJcblx0XHRcdGNvbnNvbGUubG9nKG9wdGlvbilcclxuXHRcdFx0dGhhdC56Yl9iej1vcHRpb24uemJfYnp8fCcnICAgIC8v5aSH5rOoXHJcblx0XHRcdHRoYXQuemJfaW1nPW9wdGlvbi56Yl9pbWdcclxuXHRcdFx0dGhhdC56Yl90aXRsZT1vcHRpb24uemJfdGl0bGVcclxuXHRcdFx0dGhhdC50ZWFtX25hbWU9b3B0aW9uLnRlYW1fbmFtZXx8JycgIC8v5Zui6Zif5ZCNXHJcblx0XHRcdHRoYXQudGltZT1vcHRpb24udGltZXx8JycgICAgICAvL+aXtumXtFxyXG5cdFx0XHR0aGF0LnRpbWUxPW9wdGlvbi50aW1lMXx8JycgICAgLy/ml7bpl7QxXHJcblx0XHRcdHRoYXQuZGFuZ2VyX25hbWU9b3B0aW9uLmRhbmdlcl9uYW1lfHwnJyAgLy/ljbHpmannsbvlnotcclxuXHRcdFx0dGhhdC5iZV9udW09b3B0aW9uLmJlX251bXx8JycgICAgICAgLy/nlJ/lrZjmlbBcclxuXHRcdFx0dGhhdC5ub3RfYmVfbnVtPW9wdGlvbi5ub3RfYmVfbnVtfHwnJyAgIC8v6YGH6Zq+5pWwXHJcblx0XHRcdHRoYXQuc2VhcmNoX3R5cGU9b3B0aW9uLnNlYXJjaF90eXBlfHwnJyAgIC8v5pCc57Si54q25oCBXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuQVVESU8uc3JjID0gJy9zdGF0aWMvbXVzaWMvamluZ2Jhb19rb25nLm1wMyc7XHJcblx0XHRcdHRoaXMuQVVESU8ubG9vcD10cnVlXHJcblx0XHRcdC8v6Z+z6aKR6L+b5YWl5Y+v5Lul5pKt5pS+54q25oCB77yM5L2G5LiN5L+d6K+B5ZCO6Z2i5Y+v5Lul5rWB55WF5pKt5pS+XHJcblx0XHRcdHRoaXMuQVVESU8ub25DYW5wbGF5KChyZXMpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn6Z+z6aKR6L+b5YWl5Y+v5Lul5pKt5pS+54q25oCB77yM5L2G5LiN5L+d6K+B5ZCO6Z2i5Y+v5Lul5rWB55WF5pKt5pS+JylcclxuXHRcdFx0XHRcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8v6Z+z6aKR5pKt5pS+XHJcblx0XHRcdHRoaXMuQVVESU8ub25QbGF5KChyZXMpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn6Z+z6aKR5pKt5pS+JylcclxuXHRcdFx0XHR1bmkudmlicmF0ZUxvbmcoe1xyXG5cdFx0XHRcdCAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0ICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dG9yY2gub24oKTtcclxuXHRcdFx0XHR0aGF0LnRvcmNoX3R5cGU9dHJ1ZVxyXG5cdFx0XHRcdGRqc19mdWM9c2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0ICBpZih0aGF0LnRvcmNoX3R5cGU9PXRydWUpe1xyXG5cdFx0XHRcdFx0XHR0b3JjaC5vZmYoKTtcclxuXHRcdFx0XHRcdFx0dGhhdC50b3JjaF90eXBlPWZhbHNlXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dG9yY2gub24oKTtcclxuXHRcdFx0XHRcdFx0dGhhdC50b3JjaF90eXBlPXRydWVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdCAgLy8gY29uc29sZS5sb2codGhhdC5kanMoKSlcclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cdFx0XHRcdGRqc19mdWMxPXNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHVuaS52aWJyYXRlTG9uZyh7XHJcblx0XHRcdFx0XHQgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xyXG5cdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly/pn7PpopHlgZzmraJcclxuXHRcdFx0dGhpcy5BVURJTy5vblN0b3AoKHJlcykgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfpn7PpopHlgZzmraInKVxyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoZGpzX2Z1YylcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGRqc19mdWMxKVxyXG5cdFx0XHRcdHRvcmNoLm9mZigpO1xyXG5cdFx0XHRcdHRoYXQudG9yY2hfdHlwZT10cnVlXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvL+ivremfs+iHqueEtuaSreaUvue7k+adn1xyXG5cdFx0XHR0aGlzLkFVRElPLm9uRW5kZWQoKHJlcykgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfor63pn7Poh6rnhLbmkq3mlL7nu5PmnZ8nKVxyXG5cdFx0XHRcdHRoaXMucGxheU1zZ2lkID0gbnVsbDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8qdGhhdC5tYXBDb250cm9scz1bXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlkOiBcIjFcIixcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRsZWZ0OiA3NTAgLyAyIC0gMjgsXHJcblx0XHRcdFx0XHRcdFx0dG9wOiB0aGF0LndoZWlnaHQgLSA2OCxcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTUsXHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA2OFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRpY29uUGF0aDogXCIvc3RhdGljL2ltYWdlcy9odW96YWkucG5nXCIsXHJcblx0XHRcdFx0XHRcdGNsaWNrYWJsZTogZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdKi9cclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdC8qY29uc3QgaW5uZXJBdWRpb0NvbnRleHQgPSB1bmkuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcclxuXHRcdFx0aW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSB0cnVlO1xyXG5cdFx0XHRpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1oZWxsby11bmlhcHAvMmNjMjIwZTAtYzI3YS0xMWVhLTlkZmItNmRhOGUzMDllMGQ4Lm1wMyc7XHJcblx0XHRcdGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgoKSA9PiB7XHJcblx0XHRcdCAgY29uc29sZS5sb2coJ+W8gOWni+aSreaUvicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0aW5uZXJBdWRpb0NvbnRleHQub25FcnJvcigocmVzKSA9PiB7XHJcblx0XHRcdCAgY29uc29sZS5sb2cocmVzLmVyck1zZyk7XHJcblx0XHRcdCAgY29uc29sZS5sb2cocmVzLmVyckNvZGUpO1xyXG5cdFx0XHR9KTsqL1xyXG5cclxuXHRcdFx0bWFwQ29udGV4dCA9IHVuaS5jcmVhdGVNYXBDb250ZXh0KCdtYXAnLCB0aGlzKTtcclxuXHRcdH0sXHJcblx0XHRvbkhpZGUoKSB7XHJcblx0XHRcdHRoYXQuc2hvd19jb3VudCsrXHJcblx0XHRcdGNsZWFySW50ZXJ2YWwoZGpzX2Z1YylcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChkanNfZnVjMSlcclxuXHRcdFx0dG9yY2gub2ZmKCk7XHJcblx0XHRcdHRoYXQudG9yY2hfdHlwZT10cnVlXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHJcblx0XHRcdHRoYXQubWFwV2lkdGggPSA3NTBcclxuXHRcdFx0Y29uc29sZS5sb2codW5pLmdldFN5c3RlbUluZm9TeW5jKCkpXHJcblx0XHRcdHRoYXQuc0hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0dGhhdC5tYXBIZWlnaHQgPSAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0IC0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc3RhdHVzQmFySGVpZ2h0KTtcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0Ly8gdGhhdC5tYXBIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhhdC5oZWlnaHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoYXQubWFwSGVpZ2h0KVxyXG5cdFx0XHRjb25zb2xlLmxvZyh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5IZWlnaHQpXHJcblx0XHRcdHRoYXQuZ2V0U2l6ZSgpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQuLi5tYXBNdXRhdGlvbnMoWydzZXRBZGRyZXNzJ10pLFxyXG5cdFx0XHQvLyDmkq3mlL7or63pn7NcclxuXHRcdFx0cGxheVZvaWNlKG1zZykge1xyXG5cdFx0XHRcdFx0dGhpcy5BVURJTy5wbGF5KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGJhb2ppbmdfZnVjKCl7XHJcblx0XHRcdFx0dmFyIHRoYXQ9dGhpc1xyXG5cdFx0XHRcdHRoaXMuYmFvamluZz10cnVlXHJcblx0XHRcdFx0dGhhdC5ial90aW1lPTNcclxuXHRcdFx0XHRkanNfZnVjPXNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQgIGlmKHRoYXQuYmpfdGltZT09MCl7XHJcblx0XHRcdFx0XHRcdC8vIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHQvLyBcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHQvLyBcdHRpdGxlOiforabmiqXmk43kvZwnXHJcblx0XHRcdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKDApXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKGRqc19mdWMpXHJcblx0XHRcdFx0XHRcdHRoYXQuYmpfdGltZT0nISdcclxuXHRcdFx0XHRcdFx0dGhhdC5wbGF5Vm9pY2UoKVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoYXQuYmpfdGltZS0tXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0ICAvLyBjb25zb2xlLmxvZyh0aGF0LmRqcygpKVxyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiYW9qaW5nX2RlbCgpe1xyXG5cdFx0XHRcdHZhciB0aGF0PXRoaXNcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGRqc19mdWMpXHJcblx0XHRcdFx0dGhpcy5ial90aW1lPTEwXHJcblx0XHRcdFx0dGhpcy5iYW9qaW5nPWZhbHNlXHJcblx0XHRcdFx0dGhpcy5BVURJTy5zdG9wKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHR0ZXN0KCkge30sXHJcblx0XHRcdGFkZF9iaigpIHtcclxuXHRcdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRcdHRva2VuOnRoYXQuJHN0b3JlLnN0YXRlLmxvZ2luRGF0YXMudG9rZW4sXHJcblx0XHRcdFx0XHRsYXRpdHVkZTogdGhhdC5sYXRpdHVkZSxcclxuXHRcdFx0XHRcdGxvbmdpdHVkZTogdGhhdC5sb25naXR1ZGUsXHJcblx0XHRcdFx0XHRpY29uUGF0aDogdGhhdC56Yl9pbWcsXHJcblx0XHRcdFx0XHRjb21tZW50OnRoYXQuemJfYnosXHJcblx0XHRcdFx0XHR0eXBlX25hbWU6dGhhdC56Yl90aXRsZSxcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGVhbV9uYW1lOnRoYXQudGVhbV9uYW1lLCAgLy/lm6LpmJ/lkI1cclxuXHRcdFx0XHRcdGVudGVyX3RpbWU6dGhhdC50aW1lLCAgICAvL+aXtumXtFxyXG5cdFx0XHRcdFx0ZXZhY3VhdGVfdGltZTp0aGF0LnRpbWUxLCAgIC8v5pe26Ze0MVxyXG5cdFx0XHRcdFx0aGF6YXJkX3R5cGU6dGhhdC5kYW5nZXJfbmFtZSwgIC8v5Y2x6Zmp57G75Z6LXHJcblx0XHRcdFx0XHRzdXJ2aXZvcjp0aGF0LmJlX251bSwgICAgICAvL+eUn+WtmOaVsFxyXG5cdFx0XHRcdFx0dmljdGltOnRoYXQubm90X2JlX251bSwgICAvL+mBh+mavuaVsFxyXG5cdFx0XHRcdFx0c2VhcmNoX3N0YXRlOnRoYXQuc2VhcmNoX3R5cGUsIC8v5pCc57Si54q25oCBXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0aWYodGhhdC5idG5fa2c9PTEpe1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuYnRuX2tnPTFcclxuXHRcdFx0XHQvL3NlbGVjdFNhcmF5bERldGFpbEJ5VXNlckNhcmRcclxuXHRcdFx0XHR2YXIgamt1cmwgPSAnL21pbmFwcC9zdG9yZS1wb3NpdGlvbidcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjorr7nva4nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZXJ2aWNlLlBfcG9zdChqa3VybCwgZGF0YSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhhdC5idG5fa2cgPSAwXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgZGF0YXMgPSByZXMuZGF0YVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0eXBlb2YgZGF0YXMpXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZGF0YXMgPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRcdFx0XHRkYXRhcyA9IEpTT04ucGFyc2UoZGF0YXMpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5re75Yqg5oiQ5YqfJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRcdFx0XHRkZWx0YToxXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSwxMDAwKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5tc2cpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMubXNnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6I635Y+W5aSx6LSlJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5jYXRjaChlID0+IHtcclxuXHRcdFx0XHRcdHRoYXQuYnRuX2tnID0gMFxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6I635Y+W5pWw5o2u5aSx6LSlJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdHZhciBuZXdzX2FyciA9IHRoYXQubWFya2Vyc0FyclxyXG5cdFx0XHRcdHZhciBfbWFya2xMaXN0ID0gbmV3c19hcnIuZmlsdGVyKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWVcclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRfbWFya2xMaXN0LnB1c2gobmV3X2FkZClcclxuXHRcdFx0XHR0aGF0Lm1hcmtlcnNBcnIgPSBfbWFya2xMaXN0XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhhdC5tYXJrZXJzQXJyKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRiaihlKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZ2V0YmotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+JylcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRTaXplKCkge1xyXG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0XHRxdWVyeS5zZWxlY3QoJyNtYXAnKS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR2YXIgX25hdkhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ19uYXZIZWlnaHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+JylcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKF9uYXZIZWlnaHQpXHJcblx0XHRcdFx0XHRfbmF2SGVpZ2h0ID0gX25hdkhlaWdodCAvIDJcclxuXHRcdFx0XHRcdHZhciBzc3MgPSBbe1xyXG5cdFx0XHRcdFx0XHRpZDogXCIxXCIsXHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0bGVmdDogNzUwIC8gMiAtIDI4LFxyXG5cdFx0XHRcdFx0XHRcdHRvcDogX25hdkhlaWdodCAtIDY4LFxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA1NSxcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDY4XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdC8vIGljb25QYXRoOiBcIi9zdGF0aWMvaW1hZ2VzL2h1b3phaS5wbmdcIixcclxuXHRcdFx0XHRcdFx0aWNvblBhdGg6dGhhdC56Yl9pbWcsXHJcblx0XHRcdFx0XHRcdGNsaWNrYWJsZTogZmFsc2VcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0XHR0aGF0Lm1hcENvbnRyb2xzPXNzc1xyXG5cdFx0XHRcdFx0Ly8gVnVlLnNldCh0aGF0Lm1hcENvbnRyb2xzWzBdLnBvc2l0aW9uLCd0b3AnLHNzcylcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoYXQubWFwQ29udHJvbHMpXHJcblx0XHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb2lTZWFyY2hOZWFyQnkoKSB7XHJcblx0XHRcdFx0Ly8gdmFyIHBvaW50ID0gdGhpcy5tYXJrZXJzWzBdXHJcblx0XHRcdFx0bWFwU2VhcmNoLnBvaVNlYXJjaE5lYXJCeSh7XHJcblx0XHRcdFx0XHRwb2ludDoge1xyXG5cdFx0XHRcdFx0XHRsYXRpdHVkZTogdGhhdC5sYXRpdHVkZSxcclxuXHRcdFx0XHRcdFx0bG9uZ2l0dWRlOiB0aGF0LmxvbmdpdHVkZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGtleTogdGhhdC5hZGRfc3RyLFxyXG5cdFx0XHRcdFx0cmFkaXVzOiAxMDAwMDAwMFxyXG5cdFx0XHRcdH0sIHJldCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmV0KTtcclxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiBKU09OLnN0cmluZ2lmeShyZXQpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0dGhhdC5sb25naXR1ZGUgPSByZXQucG9pTGlzdFswXS5sb2NhdGlvbi5sb25naXR1ZGU7XHJcblx0XHRcdFx0XHR0aGF0LmxhdGl0dWRlID0gcmV0LnBvaUxpc3RbMF0ubG9jYXRpb24ubGF0aXR1ZGU7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VhcmNoX2FkZCgpIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGR3X3RpbWUpXHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KCfph43mlrDorqHnrpcnKVxyXG5cdFx0XHRcdGR3X3RpbWUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyIGt3ID0gdGhhdC5hZGRfc3RyXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhrdy5sZW5ndGgpXHJcblx0XHRcdFx0XHRpZiAoa3cubGVuZ3RoID4gMCkge1xyXG5cclxuXHRcdFx0XHRcdFx0dGhhdC5wb2lTZWFyY2hOZWFyQnkoKVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoYXQucG9pU2VhcmNoTmVhckJ5KClcclxuXHRcdFx0XHRcdFx0Ly8gdGhhdC5xeV9zaG93ID0gdGhhdC5xeV9hcnIzXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0b3Blbl90ayhudW0pIHtcclxuXHRcdFx0XHR0aGF0LnRrX3Nob3cgPSBmYWxzZVxyXG5cdFx0XHRcdHRoYXQudGtfc2hvdzEgPSB0cnVlXHJcblx0XHRcdFx0dGhhdC50a19zaG93MV9udW0gPSBudW1cclxuXHJcblx0XHRcdFx0dmFyIG5vd190aW1lID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHR2YXIgbm93X3llYXIgPSBub3dfdGltZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRcdHZhciBub3dfbW9udGggPSBub3dfdGltZS5nZXRNb250aCgpICsgMTtcclxuXHRcdFx0XHR2YXIgbm93X2RhdGUgPSBub3dfdGltZS5nZXREYXRlKCk7XHJcblx0XHRcdFx0dmFyIGhvdXIgPSBub3dfdGltZS5nZXRIb3VycygpO1xyXG5cdFx0XHRcdHZhciBtaW51dGUgPSBub3dfdGltZS5nZXRNaW51dGVzKCk7XHJcblx0XHRcdFx0aWYgKG5vd19tb250aCA8IDEwKSB7XHJcblx0XHRcdFx0XHRub3dfbW9udGggPSAnMCcgKyBub3dfbW9udGggKiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChub3dfZGF0ZSA8IDEwKSB7XHJcblx0XHRcdFx0XHRub3dfZGF0ZSA9ICcwJyArIG5vd19kYXRlICogMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoaG91ciA8IDEwKSB7XHJcblx0XHRcdFx0XHRob3VyID0gJzAnICsgaG91ciAqIDFcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG1pbnV0ZSA8IDEwKSB7XHJcblx0XHRcdFx0XHRtaW51dGUgPSAnMCcgKyBtaW51dGUgKiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQubm90ZV90aW1lX3QgPSBub3dfeWVhciArICctJyArIG5vd19tb250aCArICctJyArIG5vd19kYXRlICsgJyAnICsgaG91ciArICc6JyArIG1pbnV0ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WcsOWbvueCueWHu+S6i+S7tlxyXG5cdFx0XHRtYXJrZXJ0YXAoZSkge1xyXG5cdFx0XHRcdHZhciBfaWQgPSBlLmRldGFpbC5tYXJrZXJJZCxcclxuXHRcdFx0XHRcdF9pbmRleDtcclxuXHRcdFx0XHR2YXIgX2xpc3QgPSB0aGF0Lm1hcmtlcnNBcnI7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKF9saXN0W2ldLmlkID09IF9pZCkge1xyXG5cdFx0XHRcdFx0XHRfaW5kZXggPSBpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmN1cnJlbnQgPSBpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm9wZW5BbmltYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/np7vliqjlnLDlm77nu5PmnZ9cclxuXHRcdFx0bWFwQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlKVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKG1hcEVuZGxvYWRpbmcpXHJcblx0XHRcdFx0Ly8gaWYgKGUpIHtcclxuXHRcdFx0XHQvLyBcdHJldHVyblxyXG5cdFx0XHRcdC8vIH1cclxuXHJcblx0XHRcdFx0aWYgKG1hcEVuZGxvYWRpbmcpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LyptYXBFbmRsb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgLy/pmLLmipZcclxuXHRcdFx0XHRcdG1hcEVuZGxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dChkd190aW1lKVxyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoZHdfdGltZSlcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQoJ+mHjeaWsOiuoeeulycpXHJcblx0XHRcdFx0ZHdfdGltZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoZS5kZXRhaWwudHlwZSA9PSAnZW5kJyB8fCBlLnR5cGUgPT0gJ2VuZCcpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+S4reW/g+WMuicpXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKG1hcENvbnRleHQpXHJcblx0XHRcdFx0XHRcdC8v5Lit5b+D5Yy65Z+f5bem6L65XHJcblx0XHRcdFx0XHRcdG1hcENvbnRleHQuZ2V0Q2VudGVyTG9jYXRpb24oe1xyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0Lm1hcEVuZChyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsJylcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0cmV0dXJuKi9cclxuXHRcdFx0XHRtYXBFbmRsb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgLy/pmLLmipZcclxuXHRcdFx0XHRcdG1hcEVuZGxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJyAmJiBlLmRldGFpbC50eXBlID09ICdlbmQnIHx8IGUudHlwZSA9PSAnZW5kJykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+S4reW/g+WMuicpXHJcblx0XHRcdFx0XHQvL+S4reW/g+WMuuWfn+W3pui+uVxyXG5cdFx0XHRcdFx0bWFwQ29udGV4dC5nZXRDZW50ZXJMb2NhdGlvbih7XHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5tYXBFbmQocmVzKTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0aWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09ICdpb3MnKSB7XHJcblx0XHRcdFx0XHRpZiAoZS5kZXRhaWwudHlwZSA9PSAnZW5kJykge1xyXG5cdFx0XHRcdFx0XHQvL+S4reW/g+WMuuWfn+W3pui+uVxyXG5cdFx0XHRcdFx0XHRtYXBDb250ZXh0LmdldENlbnRlckxvY2F0aW9uKHtcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5tYXBFbmQocmVzKTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly/lnLDlm77np7vliqjnu5PmnZ9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0XHRpZiAoZS50eXBlID09ICdlbmQnKSB7XHJcblx0XHRcdFx0XHRcdC8v5Lit5b+D5Yy65Z+f5bem6L65XHJcblx0XHRcdFx0XHRcdG1hcENvbnRleHQuZ2V0Q2VudGVyTG9jYXRpb24oe1xyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5tYXBFbmQocmVzKTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Ly/nvKnmlL7op4bph47lsZXnpLrmiYDmnInnu4/nuqzluqZcclxuXHRcdFx0XHRcdFx0Ly8gbWFwQ29udGV4dC5nZXRDZW50ZXJMb2NhdGlvbih7XHJcblx0XHRcdFx0XHRcdC8vIFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHRcdC8vIFx0fSxcclxuXHRcdFx0XHRcdFx0Ly8gXHRmYWlsKGVycikge1xyXG5cdFx0XHRcdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0XHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHRcdFx0Ly/ojrflj5blvZPliY3lnLDlm77nmoTop4bph47ojIPlm7RcclxuXHRcdFx0XHRcdFx0bWFwQ29udGV4dC5nZXRSZWdpb24oe1xyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC8v6I635Y+W5b2T5YmN5Zyw5Zu+55qE57yp5pS+57qn5YirXHJcblx0XHRcdFx0XHRcdG1hcENvbnRleHQuZ2V0U2NhbGUoe1xyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldExpc3QoKSB7fSxcclxuXHRcdFx0Ly/lnLDlm77np7vliqhcclxuXHRcdFx0bWFwRW5kKHJlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfliqDovb3mlbDmja4nKVxyXG5cdFx0XHRcdGlmIChyZXMpIHtcclxuXHRcdFx0XHRcdHRoYXQubG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTtcclxuXHRcdFx0XHRcdHRoYXQubGF0aXR1ZGUgPSByZXMubGF0aXR1ZGU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL+WOn+aVsOaNrlxyXG5cdFx0XHRcdHRoYXQubGlzdCA9IFtdO1xyXG5cdFx0XHRcdHRoYXQucGFnZUluZGV4ID0gMTtcclxuXHRcdFx0XHR0aGF0LmNoYWNlTGlzdCA9IFtdO1xyXG5cdFx0XHRcdC8vIOimhueblueJqeaVsOaNrlxyXG5cdFx0XHRcdC8vIHRoYXQubWFya2Vyc0FyciA9IFtdO1xyXG5cdFx0XHRcdHRoYXQub3JpZ2luYWxMaXN0ID0gW107XHJcblx0XHRcdFx0dGhhdC5nZXRMaXN0KCk7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRMb2NhdGlvbih0eXBlKSB7XHJcblxyXG5cclxuXHRcdFx0XHR1bmkuZ2V0TG9jYXRpb24oe1xyXG5cdFx0XHRcdFx0Ly8gdHlwZTogJ3dnczg0JyxcclxuXHRcdFx0XHRcdHR5cGU6ICdnY2owMicsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmxvbmdpdHVkZSlcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmxhdGl0dWRlKVxyXG5cdFx0XHRcdFx0XHR0aGF0LmxvbmdpdHVkZSA9IHJlcy5sb25naXR1ZGU7XHJcblx0XHRcdFx0XHRcdHRoYXQubGF0aXR1ZGUgPSByZXMubGF0aXR1ZGU7XHJcblx0XHRcdFx0XHRcdHRoYXQucGFnZUluZGV4ID0gMTtcclxuXHRcdFx0XHRcdFx0Ly8gaWYgKHR5cGUgIT0gJ2JhY2snKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGF0LnNldEFkZHJlc3MocmVzKTtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5nZXRMaXN0KCk7XHJcblx0XHRcdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0XHRcdC8vIH1cclxuXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09ICdpb3MnKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFwZXJtaXNpb24uanVkZ2VJb3NQZXJtaXNzaW9uKCdsb2NhdGlvbicpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn6ZyA6KaB5omT5byA5a6a5L2N5p2D6ZmQJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmlzVG9TZXR0aW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBlcm1pc2lvbi5nb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbignYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19GSU5FX0xPQ0FUSU9OJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNpb25JRCkge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBhd2FpdCBwZXJtaXNpb24ucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKHBlcm1pc2lvbklEKVxyXG5cdFx0XHRcdHZhciBzdHJTdGF0dXNcclxuXHRcdFx0XHRpZiAocmVzdWx0ID09IDEpIHtcclxuXHRcdFx0XHRcdHN0clN0YXR1cyA9IFwi5bey6I635b6X5o6I5p2DXCJcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHJlc3VsdCA9PSAwKSB7XHJcblx0XHRcdFx0XHRzdHJTdGF0dXMgPSBcIuacquiOt+W+l+aOiOadg1wiXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHN0clN0YXR1cyA9IFwi6KKr5rC45LmF5ouS57ud5p2D6ZmQXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRjb250ZW50OiAn6ZyA6KaB5omT5byA5a6a5L2N5p2D6ZmQJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzVG9TZXR0aW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRwZXJtaXNpb24uZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0aW1nKGltZykge1xyXG5cdFx0XHRcdHJldHVybiBzZXJ2aWNlLmdldGltZyhpbWcpXHJcblx0XHRcdH0sXHJcblx0XHRcdGp1bXBfZnVjKGUpIHtcclxuXHRcdFx0XHRpZiAodGhhdC50a19zaG93MV9jdXIgPT0gLTEpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6K+36YCJ5oup57G75Z6LJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvbWFwX2R3L21hcF9kdz90a19zaG93MV9jdXI9JyArIHRoYXQudGtfc2hvdzFfY3VyICsgJyZ0a19zaG93MV9udW09JyArIHRoYXQudGtfc2hvdzFfbnVtXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0anVtcChlKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblxyXG5cdFx0XHRcdGlmICh0aGF0LmJ0bl9rZyA9PSAxKSB7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhhdC5idG5fa2cgPSAxXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmJ0bl9rZyA9IDBcclxuXHRcdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzZXJ2aWNlLmp1bXAoZSlcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuaWNvbmZvbnQge1xyXG5cdFx0Zm9udC1mYW1pbHk6IGljb25mb250O1xyXG5cdH1cclxuXHJcblx0Lm1pbmgxMDAge1xyXG5cdFx0d2lkdGg6IDc1MHB4O1xyXG5cdFx0LyogI2lmZGVmIEg1ICovXHJcblx0XHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwdXB4KTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LmluZGV4X21hcCB7XHJcblx0XHQvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcblxyXG5cdFx0d2lkdGg6IDc1MHB4O1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDZ1cHgpO1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdG1heC13aWR0aDogMTAwdnc7XHJcblx0XHRtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwdXB4KTtcclxuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDI0NnVweCAtIDEwMHVweCk7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC5tYXBfc2VhcmNoX2JveCB7XHJcblx0XHR3aWR0aDogNjkwdXB4O1xyXG5cdFx0aGVpZ2h0OiAxMDd1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0b3A6IDMwdXB4O1xyXG5cdFx0bGVmdDogMzB1cHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDAgMzBweDtcclxuXHR9XHJcblxyXG5cdC5tYXBfc2VhcmNoX2ludCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Zm9udC1zaXplOiAzMnVweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0Lm1hcF9zZWFyY2hfYnRuIHtcclxuXHRcdHdpZHRoOiA2MjR1cHg7XHJcblx0XHRoZWlnaHQ6IDg2dXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzYwOUFFQztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogNTB1cHg7XHJcblx0XHRsZWZ0OiA2MHVweDtcclxuXHRcdGZvbnQtc2l6ZTogMzB1cHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cclxuXHQuYmpfYm94IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGJvdHRvbTogMjMwdXB4O1xyXG5cdFx0cmlnaHQ6IDMwdXB4O1xyXG5cdFx0ei1pbmRleDogOTk5OTk4O1xyXG5cdFx0d2lkdGg6IDExNHVweDtcclxuXHRcdGhlaWdodDogMTE0dXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAwcHggMjF1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0fVxyXG5cclxuXHQuYmpfYm94X2ltZyB7XHJcblx0XHR3aWR0aDogMTE0dXB4O1xyXG5cdFx0aGVpZ2h0OiAxMTR1cHg7XHJcblx0fVxyXG5cclxuXHQuYmpfbWFpbiB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0d2lkdGg6IDc1MHB4O1xyXG5cdFx0LyogaGVpZ2h0OiAxMDB2aDsgKi9cclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG5cdFx0ei1pbmRleDogOTk5OTk5O1xyXG5cdFx0LyogICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAgKi9cclxuXHRcdC8qICAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogICNlbmRpZiAgKi9cclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJqX2NudW0ge1xyXG5cdFx0d2lkdGg6IDUwOHVweDtcclxuXHRcdGhlaWdodDogNTA4dXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwOHVweDtcclxuXHRcdHBhZGRpbmc6IDM2dXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNTB1cHg7XHJcblx0fVxyXG5cclxuXHQuYmpfY251bV8xIHtcclxuXHRcdHdpZHRoOiA0MzZweDtcclxuXHRcdGhlaWdodDogNDM2cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG5cdFx0LyogYm9yZGVyOiA0dXB4IHNvbGlkICNGRkZGRkY7ICovXHJcblx0XHRib3JkZXItY29sb3I6ICAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci13aWR0aDogNHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDM2cHg7XHJcblx0XHQvKiAgI2lmbmRlZiBBUFAtUExVUy1OVlVFICAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICAjZW5kaWYgICovXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYmpfY251bV9udW0ge1xyXG5cdFx0Zm9udC1zaXplOiAzMDBycHg7XHJcblx0XHRmb250LWZhbWlseTogRElOO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmJqX3RpcCB7XHJcblx0XHRmb250LXNpemU6IDMwdXB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 8 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 9);

/***/ }),
/* 9 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

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
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
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
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

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

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


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

    if (!info) {
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

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
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

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
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

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
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

        return !!caught;
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

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 10 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 11 */
/*!**************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/service.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _index = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ 12));\nvar _event = _interopRequireDefault(__webpack_require__(/*! ./common/event.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n// 管理账号信息\nvar USERS_KEY = 'USERS_KEY';\nvar STATE_KEY = 'STATE_KEY';\n// const IPurl = 'https://datixcx.com.aa.800123456.top/api/';\n// const imgurl = 'https://datixcx.com.aa.800123456.top/';\n// const imgurl = 'http://192.168.129.246/';\nvar map_key = \"7FEBZ-WLWK2-PMGUE-C4BFT-EKXB6-BFFNR\";\nvar imgurl = \"http://jiushengquan.com.b.800123456.top/\";\nvar IPurl = imgurl + 'api/';\n// const IPurl='http://192.168.129.246/api/'\n// const adminurl='https://datixcx.com.aa.800123456.top/admin/';\n// appid:wxf61ecd472abe41cb  正式\n// appid:wx49a560f7feac0feb   cj\n/**\r\n * 请求头\r\n */\nvar header = {\n  'content-type': 'application/x-www-form-urlencoded' };\n\n\n/**\r\n                                                          * 供外部post请求调用  \r\n                                                          */\nfunction post(url, params, onSuccess, onFailed) {\n  __f__(\"log\", \"请求方式：\", \"POST\", \" at service.js:28\");\n  request(url, params, \"POST\", onSuccess, onFailed);\n\n}\n\n/**\r\n   * 供外部get请求调用\r\n   */\nfunction get(url, params, onSuccess, onFailed) {\n  __f__(\"log\", \"请求方式：\", \"GET\", \" at service.js:37\");\n  request(url, params, \"GET\", onSuccess, onFailed);\n}\n\n/**\r\n   * function: 封装网络请求\r\n   * @url URL地址\r\n   * @params 请求参数\r\n   * @method 请求方式：GET/POST\r\n   * @onSuccess 成功回调\r\n   * @onFailed  失败回调\r\n   */\n\nfunction request(url, params, method, onSuccess, onFailed) {\n  __f__(\"log\", '请求url：' + url, \" at service.js:51\");\n\n  __f__(\"log\", \"请求头：\", header, \" at service.js:53\");\n  uni.request({\n    url: IPurl + url,\n    data: dealParams(params),\n    method: method,\n    header: header,\n    success: function success(res) {\n      uni.hideLoading();\n      uni.stopPullDownRefresh();\n      __f__(\"log\", '响应：', res.data, \" at service.js:62\");\n\n      // if (res.data) {\n      if (res.data.code == -1) {\n        // if (params.login_type == 1) {\n        // \t//一进来就登录失败\n        // \treturn\n\n        // }\n        // if (params.login_type == 2) {\n        // \t//授权登录失败\n        // \tuni.navigateBack()\n        // \treturn\n\n        // }\n        uni.showToast({\n          icon: 'none',\n          title: '请先授权登录' });\n\n        // store.commit('logout')\n        setTimeout(function () {\n          uni.navigateTo({\n            url: './pages/login/login?haslogin=false' });\n\n        }, 1000);\n        return;\n\n      }\n\n      /** start 根据需求 接口的返回状态码进行处理 */\n      onSuccess(res);\n      /** end 处理结束*/\n      // }\n    },\n    fail: function fail(error) {\n\n      uni.hideLoading();\n      uni.stopPullDownRefresh();\n      onFailed(error); //failure for other reasons\n    } });\n\n}\n\n/**\r\n   * function: 根据需求处理请求参数：添加固定参数配置等\r\n   * @params 请求参数\r\n   */\nfunction dealParams(params) {\n  __f__(\"log\", \"请求参数:\", params, \" at service.js:110\");\n  return params;\n}\n\n\n\nvar getUsers = function getUsers() {\n  var ret = '';\n  ret = uni.getStorageSync(USERS_KEY);\n  if (!ret) {\n    ret = '[]';\n  }\n  return JSON.parse(ret);\n};\n\nvar addUser = function addUser(userInfo) {\n  var users = getUsers();\n  users.push({\n    account: userInfo.account,\n    password: userInfo.password });\n\n  uni.setStorageSync(USERS_KEY, JSON.stringify(users));\n};\n\nvar gologin = function gologin() {\n  uni.navigateTo({\n    url: '/pages/login_index/login_index' });\n\n};\n\nvar jump = function jump(e) {\n  // console.log(e.currentTarget.dataset.type)\n  var datas = e.currentTarget.dataset;\n  __f__(\"log\", datas.login == true, \" at service.js:143\");\n\n  if (datas.login == true) {\n    if (!datas.haslogin) {\n      uni.navigateTo({\n        url: '../login/login' });\n\n      return;\n    }\n  }\n  if (datas.type == 'sp') {\n    __f__(\"log\", datas.spurl, \" at service.js:154\");\n    _index.default.commit('spurl_fuc', datas.spurl);\n    uni.navigateTo({\n      url: datas.url });\n\n    return;\n  }\n  if (datas.type == 2) {\n    uni.switchTab({\n      url: datas.url });\n\n  } else if (datas.type == 3) {\n    uni.redirectTo({\n      url: datas.url });\n\n  } else {\n    uni.navigateTo({\n      url: datas.url });\n\n  }\n};\nvar pveimg = function pveimg(e) {\n  var current = e.currentTarget.dataset.src;\n  var urls = e.currentTarget.dataset.array;\n\n  var urls1 = [];\n  if (urls) {\n    urls1 = urls;\n\n  } else {\n    urls1[0] = current;\n  }\n  // console.log(urls1)\n  uni.previewImage({\n    current: current, // 当前显示图片的http链接\n    urls: urls1 // 需要预览的图片http链接列表\n  });\n\n};\nvar call = function call(e) {\n  __f__(\"log\", e, \" at service.js:194\");\n  // return\n  if (e.currentTarget.dataset.tel) {\n    // wx.makePhoneCall({\n    // \tphoneNumber: e.currentTarget.dataset.tel+''\n    // })\n    uni.showModal({\n      title: '提示',\n      content: '是否拨打' + e.currentTarget.dataset.tel + '?',\n      success: function success(res) {\n        if (res.confirm) {\n          wx.makePhoneCall({\n            phoneNumber: e.currentTarget.dataset.tel + '' });\n\n          __f__(\"log\", '用户点击确定', \" at service.js:208\");\n        } else if (res.cancel) {\n          __f__(\"log\", '用户点击取消', \" at service.js:210\");\n        }\n      } });\n\n  }\n};\n// 微信登录\nvar wxlogin = function wxlogin(num) {\n  var that = this;\n  // 获取用户信息\n  if (num == 1) {\n    uni.showLoading({\n      title: '正在登录',\n      mask: true });\n\n  }\n  uni.getSetting({\n    success: function success(res) {\n      __f__(\"log\", res, \" at service.js:228\");\n      if (res.authSetting['scope.userInfo'] == true) {\n        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框\n        __f__(\"log\", '已经授权', \" at service.js:231\");\n        uni.getUserInfo({\n          success: function success(res) {\n            var userInfo = res.userInfo;\n            __f__(\"log\", userInfo, \" at service.js:235\");\n            uni.setStorageSync('userInfo', res.userInfo);\n            if (!userInfo) {\n\n            } else {\n              uni.login({\n                success: function success(res) {\n\n                  // 发送 res.code 到后台换取 openId, sessionKey, unionId\n                  var uinfo = userInfo;\n                  var data = {\n                    code: res.code,\n                    nickname: uinfo.nickName,\n                    cover: uinfo.avatarUrl };\n\n                  var rcode = res.code;\n                  __f__(\"log\", res.code, \" at service.js:251\");\n                  uni.request({\n                    url: IPurl + 'user/login',\n                    data: data,\n                    header: {\n                      'content-type': 'application/x-www-form-urlencoded' },\n\n                    dataType: 'json',\n                    method: 'POST',\n                    success: function success(res) {\n                      uni.hideLoading();\n                      __f__(\"log\", res.data, \" at service.js:262\");\n                      if (res.data.code == 1) {\n                        __f__(\"log\", '登录成功', \" at service.js:264\");\n                        __f__(\"log\", res.data, \" at service.js:265\");\n                        uni.setStorageSync('token', res.data.data.token);\n                        //获取手机号\n                        /*\r\n                        if(!res.data.data.phone){\r\n                        \tif(num==1){\r\n                        \t\tuni.redirectTo({\r\n                        \t\t\turl:'/pages/login_tel/login_tel'\r\n                        \t\t})\r\n                        \t}\r\n                        \treturn\r\n                        }*/\n                        _index.default.commit('logindata', res.data.data);\n                        _index.default.commit('login', res.data.data.nickname);\n\n                        uni.setStorageSync('loginmsg', res.data.data);\n                        //0 商家端  1 用户端  2智能安装端\n                        __f__(\"log\", 'store.xcx_status', \" at service.js:282\");\n                        __f__(\"log\", _index.default.state.xcx_status, \" at service.js:283\");\n                        if (num == 1) {\n                          __f__(\"log\", res.data.data.is_engineer, \" at service.js:285\");\n                          if (res.data.data.is_owner == 1) {\n                            _index.default.commit('set_xcx', 1);\n                            return;\n                          }\n                          if (res.data.data.is_engineer == 1) {\n                            _index.default.commit('set_xcx', 2);\n                            return;\n                          }\n                          if (res.data.data.is_seller == 1) {\n                            _index.default.commit('set_xcx', 0);\n                          }\n                        }\n                        // im login\n\n\n\n                        if (num == 1) {\n                          uni.showToast({\n                            icon: 'none',\n                            title: '登录成功' });\n\n                          setTimeout(function () {\n                            _event.default.trigger({\n                              type: 'test',\n                              page: '/pages/index/index',\n                              //obj和test是举的例子，随意啥都行，这个传过去在on中的args中都可以获取到\n                              obj: {},\n\n\n                              test: {\n                                'loginmsg': res.data.data },\n\n                              success: function success(data) {\n                                //data为on中返回的数据\n                              } });\n\n                          }, 1000);\n                          setTimeout(function () {\n                            uni.navigateBack();\n                          }, 1500);\n                        } else {\n                          _event.default.trigger({\n                            type: 'test',\n                            page: '/pages/index/index',\n                            //obj和test是举的例子，随意啥都行，这个传过去在on中的args中都可以获取到\n                            obj: {},\n\n\n                            test: {\n                              'loginmsg': res.data.data },\n\n                            success: function success(data) {\n                              //data为on中返回的数据\n                            } });\n\n                        }\n                      } else {\n                        uni.removeStorageSync('userInfo');\n                        uni.removeStorageSync('token');\n                        if (res.msg) {\n                          uni.showToast({\n                            icon: 'none',\n                            title: res.msg });\n\n                        } else {\n                          uni.showToast({\n                            icon: 'none',\n                            title: '登录失败' });\n\n                        }\n                      }\n\n                    },\n                    fail: function fail() {\n                      uni.hideLoading();\n                      uni.showToast({\n                        icon: 'none',\n                        title: '登录失败' });\n\n                    } });\n\n                } });\n\n            }\n          } });\n\n\n      } else {\n        uni.hideLoading();\n      }\n    } });\n\n};\n// 手机号登录\nvar login_tel = function login_tel(num) {\n  var datas;\n  var tel;\n  var password;\n  if (uni.getStorageSync('tel')) {\n    tel = uni.getStorageSync('tel');\n    password = uni.getStorageSync('password');\n    datas = {\n      username: tel,\n      password: password };\n\n  } else {\n    return;\n  }\n\n  var jkurl = '/minapp/login';\n  P_post(jkurl, datas).then(function (res) {\n    __f__(\"log\", res, \" at service.js:397\");\n    if (res.code == 1) {\n      var datas = res.data;\n      __f__(\"log\", typeof datas, \" at service.js:400\");\n\n      if (typeof datas == 'string') {\n        datas = JSON.parse(datas);\n      }\n      __f__(\"log\", '登录成功', \" at service.js:405\");\n      uni.setStorageSync('tel', tel);\n      uni.setStorageSync('password', password);\n      uni.setStorageSync('token', datas.token);\n      uni.setStorageSync('loginmsg', datas);\n      _index.default.commit('logindata', datas);\n      _index.default.commit('login', datas.username);\n      // setTimeout(() => {\n      // \tuni.navigateBack({\n      // \t\tdelta: 1\n      // \t})\n      // }, 1000)\n\n    } else {\n      if (res.msg) {\n        uni.showToast({\n          icon: 'none',\n          title: res.msg });\n\n      } else {\n        uni.showToast({\n          icon: 'none',\n          title: '操作失败' });\n\n      }\n    }\n  }).catch(function (e) {\n    __f__(\"log\", e, \" at service.js:432\");\n    uni.showToast({\n      icon: 'none',\n      title: '操作失败' });\n\n  });\n};\nvar setUsermsg = function setUsermsg(data) {\n  var jkurl = '/user/amendInfo';\n\n  post(jkurl, data,\n  function (res) {\n\n    // if (res.data.code == 1) {\n    if (res.data.code == 1) {\n      var datas = res.data.data;\n      // console.log(typeof datas)\n\n      if (typeof datas == 'string') {\n        datas = JSON.parse(datas);\n      }\n      wxlogin();\n      uni.showToast({\n        title: '操作成功' });\n\n\n    } else {\n      if (res.data.msg) {\n        uni.showToast({\n          icon: 'none',\n          title: res.data.msg });\n\n      } else {\n        uni.showToast({\n          icon: 'none',\n          title: '操作失败' });\n\n      }\n    }\n  },\n  function (err) {\n    that.btnkg = 0;\n\n    uni.showToast({\n      icon: 'none',\n      title: '获取数据失败' });\n\n\n  });\n\n};\n\n// 上传图片\nvar wx_upload = function wx_upload(tximg) {\n  return new Promise(function (resolve, reject) {\n    uni.showLoading({\n      mask: true,\n      title: '正在上传' });\n\n\n    uni.uploadFile({\n      url: IPurl + 'minapp/upload-img',\n      filePath: tximg,\n      name: 'img',\n      formData: {\n        token: uni.getStorageSync('token') },\n\n      // success: (uploadFileRes) => {\n      // \tconsole.log(uploadFileRes.data);\n      // \tvar ndata = JSON.parse(uploadFileRes.data)\n      // \tresolve(uploadFileRes)\n      // },\n      complete: function complete(res) {\n        uni.hideLoading();\n        uni.stopPullDownRefresh(); //慎用hideLoading,会关闭wx.showToast弹窗\n        // console.log(`耗时${Date.now() - timeStart}`);\n        __f__(\"log\", res, \" at service.js:508\");\n        if (res.statusCode == 200) {//请求成功\n          var ndata = JSON.parse(res.data);\n          if (ndata.code == -1) {\n            _index.default.commit('logout');\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (ndata.code == 0) {\n            if (ndata.msg) {\n\n              uni.showToast({\n                icon: 'none',\n                title: ndata.msg });\n\n            } else {\n\n              uni.showToast({\n                icon: 'none',\n                title: '操作失败' });\n\n            }\n          }\n          resolve(ndata);\n        } else {\n          reject(res);\n        }\n      } });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  });\n\n};\n\n\n\n\n\n// 配置接口请求的公共方法\nvar http = function http() {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$url = _ref.url,url = _ref$url === void 0 ? '' : _ref$url,_ref$param = _ref.param,param = _ref$param === void 0 ? {} : _ref$param,_ref$method = _ref.method,method = _ref$method === void 0 ? '' : _ref$method,_ref$header = _ref.header,header = _ref$header === void 0 ? { 'content-type': 'application/x-www-form-urlencoded' } : _ref$header;\n\n  var timeStart = Date.now();\n  return new Promise(function (resolve, reject) {\n    __f__(\"log\", '请求url：' + getUrl(url), \" at service.js:614\");\n\n    __f__(\"log\", \"请求头：\", header, \" at service.js:616\");\n    __f__(\"log\", \"param：\", param, \" at service.js:617\");\n    uni.request({\n      url: getUrl(url),\n      data: param,\n      method: method,\n      header: header,\n      complete: function complete(res) {\n        uni.hideLoading();\n        uni.stopPullDownRefresh(); //慎用hideLoading,会关闭wx.showToast弹窗\n        __f__(\"log\", \"\\u8017\\u65F6\".concat(Date.now() - timeStart), \" at service.js:626\");\n        __f__(\"log\", res, \" at service.js:627\");\n        if (res.statusCode == 200) {//请求成功\n          __f__(\"log\", res, \" at service.js:629\");\n          if (res.data.code == -1) {\n            // store.commit('logout')\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (res.data.code == 0 && res.msg == '请先登录账号~') {\n            uni.navigateTo({\n              url: '/pages/login/login' });\n\n            return;\n          } else if (res.data.code == 0) {\n            if (res.data.msg) {\n\n              uni.showToast({\n                icon: 'none',\n                title: res.data.msg });\n\n            } else {\n\n              uni.showToast({\n                icon: 'none',\n                title: '操作失败' });\n\n            }\n          }\n          resolve(res.data);\n        } else {\n          reject(res);\n        }\n      } });\n\n  });\n};\n// 获取url\nvar getUrl = function getUrl(url) {\n  if (!url) {\n    return url;\n  }\n  if (url.slice(0, 1) == \"/\") {\n    __f__(\"log\", true, \" at service.js:670\");\n    url = url.substr(1);\n  }\n  if (url.indexOf('://') == -1) {\n    url = IPurl + url;\n  }\n  return url;\n};\n//暴露出去调用的方法\n\n\n// get方法\nvar P_get = function P_get(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  if (!param.load_mode) {\n    wx.showLoading({\n      title: '请求中，请耐心等待...' });\n\n  }\n  return http({\n    url: url,\n    param: param,\n    method: 'GET' });\n\n};\n\nvar P_post = function P_post(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: \"POST\" });\n\n};\n\nvar P_put = function P_put(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: 'put' });\n\n};\n\nvar P_delete = function P_delete(url) {var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return http({\n    url: url,\n    param: param,\n    method: 'put' });\n\n};\n// // 单个请求\n// service.P_get('/cate/list').then(res => {\n// \tconsole.log(res)\n// }).catch(e => {\n// \tconsole.log(e)\n// })\n\n// // 一个页面多个请求\n// Promise.all([\n//   service.P_get('/cate/list'),\n//   service.P_get(`detail/${id}`)\n// ]).then(result => {\n//   console.log(result)\n// }).catch(e => {\n//   console.log(e)\n// })\nvar getimg = function getimg(img) {\n  // return img\n\n\n\n  if (!img) return;\n  // console.log(imgurl+img)\n  if (img.indexOf('://') == -1) {\n    img = imgurl + img;\n  }\n  return img;\n};\nvar getimgarr = function getimgarr(imgs, type) {\n  if (!imgs) return;\n  if (!type) {\n    type = ',';\n  }\n  imgs = imgs.split(type);\n  // console.log(imgurl+img)\n  var newimgs = [];\n  for (var i = 0; i < imgs.length; i++) {\n    var img = imgs[i];\n    if (img.indexOf('://') == -1) {\n      img = imgurl + img;\n    }\n    newimgs.push(img);\n  }\n  // console.log(newimgs)\n  return newimgs;\n};\nvar gettime = function gettime(mj) {\n  if (!mj) {\n    return {};\n  }\n  // // console.log(mj.indexOf('今天')!=-1)\n  // if(mj.indexOf('今天')!=-1){\n  // \treturn {\n  // \t\ttype:2,\n\n  // \t\ttime:mj\n  // \t}\n  // }\n  // mj = mj.replace(/-/g,'/')\n  var ntime = new Date(mj * 1000);\n  // console.log(ntime)\n  var n_year = ntime.getFullYear();\n  var n_month = ntime.getMonth() + 1;\n  var n_date = ntime.getDate();\n  var n_hour = ntime.getHours();\n  var n_minute = ntime.getMinutes();\n\n  var time = new Date();\n  var year = time.getFullYear();\n  var month = time.getMonth() + 1;\n  var date = time.getDate();\n  var hour = time.getHours();\n  var minute = time.getMinutes();\n  // n_month=n_month<10? '0'+n_month:n_month\n  n_date = n_date < 10 ? '0' + n_date : n_date;\n  n_hour = n_hour < 10 ? '0' + n_hour : n_hour;\n  n_minute = n_minute < 10 ? '0' + n_minute : n_minute;\n  if (n_year == year) {\n\n    return {\n      type: 1,\n      year: n_year,\n      month: n_month,\n      date: n_date,\n      hour: n_hour,\n      minute: n_minute,\n      time: '今天 ' + n_hour + ':' + n_minute };\n\n  } else {\n\n    return {\n      type: 2,\n      year: n_year,\n      month: n_month,\n      date: n_date,\n      hour: n_hour,\n      minute: n_minute,\n      time: n_year + '-' + n_month + '-' + n_date };\n\n  }\n};\n\n\nvar get_fwb = function get_fwb(str) {\n  if (!str) {\n    return;\n  }\n  str = str // .replace(/<p([\\s\\w\"=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<p')\n  .replace(/<p([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<p $1').\n  replace(/<p([\\s\\w\"-=\\/\\.:;]+)/ig, '<p$1 class=\"xcx_fwb_p\"')\n  // .replace(/<div([\\s\\w\"=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<div')\n  .replace(/<div([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<div $1').\n  replace(/<div([\\s\\w\"-=\\/\\.:;]+)/ig, '<div$1 class=\"xcx_fwb_div\"')\n\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(height=\"[^\"]+\")))/ig, '<img $1')\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(width=\"[^\"]+\")))/ig, '<img $1')\n  // .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(style=\"[^\"]+\")))/ig, '<img $1')\n  .replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(alt=\"[^\"]+\")))/ig, '<img $1').\n  replace(/<img([\\s\\w\"-=\\/\\.:;]+)((?:(class=\"[^\"]+\")))/ig, '<img $1').\n  replace(/<img([\\s\\w\"-=\\/\\.:;]+)/ig, '<img$1 class=\"xcx_fwb_img\"');\n  return str;\n};var _default =\n{\n  getUsers: getUsers,\n  addUser: addUser,\n  get: get,\n  post: post,\n  IPurl: IPurl,\n  map_key: map_key,\n  imgurl: imgurl,\n  gologin: gologin,\n  jump: jump,\n  call: call,\n  wxlogin: wxlogin,\n  login_tel: login_tel,\n  setUsermsg: setUsermsg,\n  P_get: P_get,\n  P_post: P_post,\n  P_put: P_put,\n  P_delete: P_delete,\n  gettime: gettime,\n  getimg: getimg,\n  getimgarr: getimgarr,\n  pveimg: pveimg,\n  get_fwb: get_fwb,\n  wx_upload: wx_upload };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc2VydmljZS5qcyJdLCJuYW1lcyI6WyJVU0VSU19LRVkiLCJTVEFURV9LRVkiLCJtYXBfa2V5IiwiaW1ndXJsIiwiSVB1cmwiLCJoZWFkZXIiLCJwb3N0IiwidXJsIiwicGFyYW1zIiwib25TdWNjZXNzIiwib25GYWlsZWQiLCJyZXF1ZXN0IiwiZ2V0IiwibWV0aG9kIiwidW5pIiwiZGF0YSIsImRlYWxQYXJhbXMiLCJzdWNjZXNzIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiY29kZSIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwiZmFpbCIsImVycm9yIiwiZ2V0VXNlcnMiLCJyZXQiLCJnZXRTdG9yYWdlU3luYyIsIkpTT04iLCJwYXJzZSIsImFkZFVzZXIiLCJ1c2VySW5mbyIsInVzZXJzIiwicHVzaCIsImFjY291bnQiLCJwYXNzd29yZCIsInNldFN0b3JhZ2VTeW5jIiwic3RyaW5naWZ5IiwiZ29sb2dpbiIsImp1bXAiLCJlIiwiZGF0YXMiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImxvZ2luIiwiaGFzbG9naW4iLCJ0eXBlIiwic3B1cmwiLCJzdG9yZSIsImNvbW1pdCIsInN3aXRjaFRhYiIsInJlZGlyZWN0VG8iLCJwdmVpbWciLCJjdXJyZW50Iiwic3JjIiwidXJscyIsImFycmF5IiwidXJsczEiLCJwcmV2aWV3SW1hZ2UiLCJjYWxsIiwidGVsIiwic2hvd01vZGFsIiwiY29udGVudCIsImNvbmZpcm0iLCJ3eCIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImNhbmNlbCIsInd4bG9naW4iLCJudW0iLCJ0aGF0Iiwic2hvd0xvYWRpbmciLCJtYXNrIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJ1aW5mbyIsIm5pY2tuYW1lIiwibmlja05hbWUiLCJjb3ZlciIsImF2YXRhclVybCIsInJjb2RlIiwiZGF0YVR5cGUiLCJ0b2tlbiIsInN0YXRlIiwieGN4X3N0YXR1cyIsImlzX2VuZ2luZWVyIiwiaXNfb3duZXIiLCJpc19zZWxsZXIiLCJldmVudCIsInRyaWdnZXIiLCJwYWdlIiwib2JqIiwidGVzdCIsIm5hdmlnYXRlQmFjayIsInJlbW92ZVN0b3JhZ2VTeW5jIiwibXNnIiwibG9naW5fdGVsIiwidXNlcm5hbWUiLCJqa3VybCIsIlBfcG9zdCIsInRoZW4iLCJjYXRjaCIsInNldFVzZXJtc2ciLCJlcnIiLCJidG5rZyIsInd4X3VwbG9hZCIsInR4aW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJuYW1lIiwiZm9ybURhdGEiLCJjb21wbGV0ZSIsInN0YXR1c0NvZGUiLCJuZGF0YSIsImh0dHAiLCJwYXJhbSIsInRpbWVTdGFydCIsIkRhdGUiLCJub3ciLCJnZXRVcmwiLCJzbGljZSIsInN1YnN0ciIsImluZGV4T2YiLCJQX2dldCIsImxvYWRfbW9kZSIsIlBfcHV0IiwiUF9kZWxldGUiLCJnZXRpbWciLCJpbWciLCJnZXRpbWdhcnIiLCJpbWdzIiwic3BsaXQiLCJuZXdpbWdzIiwiaSIsImxlbmd0aCIsImdldHRpbWUiLCJtaiIsIm50aW1lIiwibl95ZWFyIiwiZ2V0RnVsbFllYXIiLCJuX21vbnRoIiwiZ2V0TW9udGgiLCJuX2RhdGUiLCJnZXREYXRlIiwibl9ob3VyIiwiZ2V0SG91cnMiLCJuX21pbnV0ZSIsImdldE1pbnV0ZXMiLCJ0aW1lIiwieWVhciIsIm1vbnRoIiwiZGF0ZSIsImhvdXIiLCJtaW51dGUiLCJnZXRfZndiIiwic3RyIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Im9JQUFBO0FBQ0E7QUFDQSxzRjtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUMsT0FBTyxHQUFDLHFDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFDLDBD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QVg5RDtBQVlLQSxTQVpMLENBWWEsMEJBWmIsRUFZeUMsNEJBWnpDLENBQU47QUFhQSxTQUFPRCxHQUFQO0FBQ0EsQ0FsQkosQztBQW1CZTtBQUNkdEksVUFBUSxFQUFSQSxRQURjO0FBRWRLLFNBQU8sRUFBUEEsT0FGYztBQUdkdEIsS0FBRyxFQUFIQSxHQUhjO0FBSWROLE1BQUksRUFBSkEsSUFKYztBQUtkRixPQUFLLEVBQUxBLEtBTGM7QUFNZEYsU0FBTyxFQUFQQSxPQU5jO0FBT2RDLFFBQU0sRUFBTkEsTUFQYztBQVFkdUMsU0FBTyxFQUFQQSxPQVJjO0FBU2RDLE1BQUksRUFBSkEsSUFUYztBQVVkb0IsTUFBSSxFQUFKQSxJQVZjO0FBV2RTLFNBQU8sRUFBUEEsT0FYYztBQVlkNkIsV0FBUyxFQUFUQSxTQVpjO0FBYWRNLFlBQVUsRUFBVkEsVUFiYztBQWNkd0IsT0FBSyxFQUFMQSxLQWRjO0FBZWQzQixRQUFNLEVBQU5BLE1BZmM7QUFnQmQ2QixPQUFLLEVBQUxBLEtBaEJjO0FBaUJkQyxVQUFRLEVBQVJBLFFBakJjO0FBa0JkUyxTQUFPLEVBQVBBLE9BbEJjO0FBbUJkUixRQUFNLEVBQU5BLE1BbkJjO0FBb0JkRSxXQUFTLEVBQVRBLFNBcEJjO0FBcUJkakYsUUFBTSxFQUFOQSxNQXJCYztBQXNCZDBHLFNBQU8sRUFBUEEsT0F0QmM7QUF1QmRwRCxXQUFTLEVBQVRBLFNBdkJjLEUiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvaW5kZXguanMnXHJcbmltcG9ydCBldmVudCBmcm9tICcuL2NvbW1vbi9ldmVudC5qcydcclxuLy8g566h55CG6LSm5Y+35L+h5oGvXHJcbmNvbnN0IFVTRVJTX0tFWSA9ICdVU0VSU19LRVknO1xyXG5jb25zdCBTVEFURV9LRVkgPSAnU1RBVEVfS0VZJztcclxuLy8gY29uc3QgSVB1cmwgPSAnaHR0cHM6Ly9kYXRpeGN4LmNvbS5hYS44MDAxMjM0NTYudG9wL2FwaS8nO1xyXG4vLyBjb25zdCBpbWd1cmwgPSAnaHR0cHM6Ly9kYXRpeGN4LmNvbS5hYS44MDAxMjM0NTYudG9wLyc7XHJcbi8vIGNvbnN0IGltZ3VybCA9ICdodHRwOi8vMTkyLjE2OC4xMjkuMjQ2Lyc7XHJcbmNvbnN0IG1hcF9rZXk9XCI3RkVCWi1XTFdLMi1QTUdVRS1DNEJGVC1FS1hCNi1CRkZOUlwiXHJcbmNvbnN0IGltZ3VybD1cImh0dHA6Ly9qaXVzaGVuZ3F1YW4uY29tLmIuODAwMTIzNDU2LnRvcC9cIlxyXG5jb25zdCBJUHVybD1pbWd1cmwrJ2FwaS8nXHJcbi8vIGNvbnN0IElQdXJsPSdodHRwOi8vMTkyLjE2OC4xMjkuMjQ2L2FwaS8nXHJcbi8vIGNvbnN0IGFkbWludXJsPSdodHRwczovL2RhdGl4Y3guY29tLmFhLjgwMDEyMzQ1Ni50b3AvYWRtaW4vJztcclxuLy8gYXBwaWQ6d3hmNjFlY2Q0NzJhYmU0MWNiICDmraPlvI9cclxuLy8gYXBwaWQ6d3g0OWE1NjBmN2ZlYWMwZmViICAgY2pcclxuLyoqXHJcbiAqIOivt+axguWktFxyXG4gKi9cclxudmFyIGhlYWRlciA9IHtcclxuXHQnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkvpvlpJbpg6hwb3N06K+35rGC6LCD55SoICBcclxuICovXHJcbmZ1bmN0aW9uIHBvc3QodXJsLCBwYXJhbXMsIG9uU3VjY2Vzcywgb25GYWlsZWQpIHtcclxuXHRjb25zb2xlLmxvZyhcIuivt+axguaWueW8j++8mlwiLCBcIlBPU1RcIilcclxuXHRyZXF1ZXN0KHVybCwgcGFyYW1zLCBcIlBPU1RcIiwgb25TdWNjZXNzLCBvbkZhaWxlZCk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICog5L6b5aSW6YOoZ2V06K+35rGC6LCD55SoXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXQodXJsLCBwYXJhbXMsIG9uU3VjY2Vzcywgb25GYWlsZWQpIHtcclxuXHRjb25zb2xlLmxvZyhcIuivt+axguaWueW8j++8mlwiLCBcIkdFVFwiKVxyXG5cdHJlcXVlc3QodXJsLCBwYXJhbXMsIFwiR0VUXCIsIG9uU3VjY2Vzcywgb25GYWlsZWQpO1xyXG59XHJcblxyXG4vKipcclxuICogZnVuY3Rpb246IOWwgeijhee9kee7nOivt+axglxyXG4gKiBAdXJsIFVSTOWcsOWdgFxyXG4gKiBAcGFyYW1zIOivt+axguWPguaVsFxyXG4gKiBAbWV0aG9kIOivt+axguaWueW8j++8mkdFVC9QT1NUXHJcbiAqIEBvblN1Y2Nlc3Mg5oiQ5Yqf5Zue6LCDXHJcbiAqIEBvbkZhaWxlZCAg5aSx6LSl5Zue6LCDXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gcmVxdWVzdCh1cmwsIHBhcmFtcywgbWV0aG9kLCBvblN1Y2Nlc3MsIG9uRmFpbGVkKSB7XHJcblx0Y29uc29sZS5sb2coJ+ivt+axgnVybO+8micgKyB1cmwpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhcIuivt+axguWktO+8mlwiLCBoZWFkZXIpXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBJUHVybCArIHVybCxcclxuXHRcdGRhdGE6IGRlYWxQYXJhbXMocGFyYW1zKSxcclxuXHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0aGVhZGVyOiBoZWFkZXIsXHJcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCflk43lupTvvJonLCByZXMuZGF0YSk7XHJcblxyXG5cdFx0XHQvLyBpZiAocmVzLmRhdGEpIHtcclxuXHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gLTEpIHtcclxuXHRcdFx0XHQvLyBpZiAocGFyYW1zLmxvZ2luX3R5cGUgPT0gMSkge1xyXG5cdFx0XHRcdC8vIFx0Ly/kuIDov5vmnaXlsLHnmbvlvZXlpLHotKVcclxuXHRcdFx0XHQvLyBcdHJldHVyblxyXG5cclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0Ly8gaWYgKHBhcmFtcy5sb2dpbl90eXBlID09IDIpIHtcclxuXHRcdFx0XHQvLyBcdC8v5o6I5p2D55m75b2V5aSx6LSlXHJcblx0XHRcdFx0Ly8gXHR1bmkubmF2aWdhdGVCYWNrKClcclxuXHRcdFx0XHQvLyBcdHJldHVyblxyXG5cclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+ivt+WFiOaOiOadg+eZu+W9lSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIHN0b3JlLmNvbW1pdCgnbG9nb3V0JylcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcuL3BhZ2VzL2xvZ2luL2xvZ2luP2hhc2xvZ2luPWZhbHNlJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9LDEwMDApXHJcblx0XHRcdFx0cmV0dXJuXHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiogc3RhcnQg5qC55o2u6ZyA5rGCIOaOpeWPo+eahOi/lOWbnueKtuaAgeeggei/m+ihjOWkhOeQhiAqL1xyXG5cdFx0XHRvblN1Y2Nlc3MocmVzKTtcclxuXHRcdFx0LyoqIGVuZCDlpITnkIbnu5PmnZ8qL1xyXG5cdFx0XHQvLyB9XHJcblx0XHR9LFxyXG5cdFx0ZmFpbDogZnVuY3Rpb24oZXJyb3IpIHtcclxuXHJcblx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHR1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xyXG5cdFx0XHRvbkZhaWxlZChlcnJvcik7IC8vZmFpbHVyZSBmb3Igb3RoZXIgcmVhc29uc1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmdW5jdGlvbjog5qC55o2u6ZyA5rGC5aSE55CG6K+35rGC5Y+C5pWw77ya5re75Yqg5Zu65a6a5Y+C5pWw6YWN572u562JXHJcbiAqIEBwYXJhbXMg6K+35rGC5Y+C5pWwXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWFsUGFyYW1zKHBhcmFtcykge1xyXG5cdGNvbnNvbGUubG9nKFwi6K+35rGC5Y+C5pWwOlwiLCBwYXJhbXMpXHJcblx0cmV0dXJuIHBhcmFtcztcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCByZXQgPSAnJztcclxuXHRyZXQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVNFUlNfS0VZKTtcclxuXHRpZiAoIXJldCkge1xyXG5cdFx0cmV0ID0gJ1tdJztcclxuXHR9XHJcblx0cmV0dXJuIEpTT04ucGFyc2UocmV0KTtcclxufVxyXG5cclxuY29uc3QgYWRkVXNlciA9IGZ1bmN0aW9uKHVzZXJJbmZvKSB7XHJcblx0bGV0IHVzZXJzID0gZ2V0VXNlcnMoKTtcclxuXHR1c2Vycy5wdXNoKHtcclxuXHRcdGFjY291bnQ6IHVzZXJJbmZvLmFjY291bnQsXHJcblx0XHRwYXNzd29yZDogdXNlckluZm8ucGFzc3dvcmRcclxuXHR9KTtcclxuXHR1bmkuc2V0U3RvcmFnZVN5bmMoVVNFUlNfS0VZLCBKU09OLnN0cmluZ2lmeSh1c2VycykpO1xyXG59XHJcblxyXG5jb25zdCBnb2xvZ2luID0gZnVuY3Rpb24oKSB7XHJcblx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0dXJsOiAnL3BhZ2VzL2xvZ2luX2luZGV4L2xvZ2luX2luZGV4J1xyXG5cdH0pXHJcbn1cclxuXHJcbmNvbnN0IGp1bXAgPSBmdW5jdGlvbihlKSB7XHJcblx0Ly8gY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZSlcclxuXHR2YXIgZGF0YXM9ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuXHRjb25zb2xlLmxvZyhkYXRhcy5sb2dpbj09dHJ1ZSlcclxuXHRcclxuXHRpZihkYXRhcy5sb2dpbj09dHJ1ZSl7XHJcblx0XHRpZighZGF0YXMuaGFzbG9naW4pe1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnLi4vbG9naW4vbG9naW4nLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0fVxyXG5cdGlmKGRhdGFzLnR5cGU9PSdzcCcpe1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YXMuc3B1cmwpXHJcblx0XHRzdG9yZS5jb21taXQoJ3NwdXJsX2Z1YycsIGRhdGFzLnNwdXJsKVxyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6IGRhdGFzLnVybFxyXG5cdFx0fSlcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHRpZiAoZGF0YXMudHlwZSA9PSAyKSB7XHJcblx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0dXJsOiBkYXRhcy51cmxcclxuXHRcdH0pXHJcblx0fSBlbHNlIGlmIChkYXRhcy50eXBlID09IDMpIHtcclxuXHRcdHVuaS5yZWRpcmVjdFRvKHtcclxuXHRcdFx0dXJsOiBkYXRhcy51cmxcclxuXHRcdH0pXHJcblx0fSBlbHNlIHtcclxuXHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiBkYXRhcy51cmxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbmNvbnN0IHB2ZWltZyA9IGZ1bmN0aW9uKGUpIHtcclxuXHR2YXIgY3VycmVudCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNyY1xyXG5cdHZhciB1cmxzID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYXJyYXlcclxuXHJcblx0bGV0IHVybHMxID0gW11cclxuXHRpZiAodXJscykge1xyXG5cdFx0dXJsczEgPSB1cmxzXHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHR1cmxzMVswXSA9IGN1cnJlbnRcclxuXHR9XHJcblx0Ly8gY29uc29sZS5sb2codXJsczEpXHJcblx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRjdXJyZW50OiBjdXJyZW50LCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXHJcblx0XHR1cmxzOiB1cmxzMSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcblx0fSlcclxuXHJcbn1cclxuY29uc3QgY2FsbD0gIGZ1bmN0aW9uIChlKXtcclxuXHRjb25zb2xlLmxvZyhlKVxyXG5cdC8vIHJldHVyblxyXG5cdGlmKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRlbCl7XHJcblx0XHQvLyB3eC5tYWtlUGhvbmVDYWxsKHtcclxuXHRcdC8vIFx0cGhvbmVOdW1iZXI6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRlbCsnJ1xyXG5cdFx0Ly8gfSlcclxuXHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0ICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdCAgICBjb250ZW50OiAn5piv5ZCm5ouo5omTJytlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50ZWwrJz8nLFxyXG5cdFx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdCAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0d3gubWFrZVBob25lQ2FsbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRwaG9uZU51bWJlcjogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGVsKycnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcblx0XHQgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0ICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbi8vIOW+ruS/oeeZu+W9lVxyXG5jb25zdCB3eGxvZ2luPWZ1bmN0aW9uIChudW0pe1xyXG5cdHZhciB0aGF0ID10aGlzXHJcblx0Ly8g6I635Y+W55So5oi35L+h5oGvXHJcblx0aWYgKG51bSA9PSAxKSB7XHJcblx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHR0aXRsZTogJ+ato+WcqOeZu+W9lScsXHJcblx0XHRcdG1hc2s6IHRydWVcclxuXHRcdH0pXHJcblx0fVxyXG5cdHVuaS5nZXRTZXR0aW5nKHtcclxuXHQgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0ICAgY29uc29sZS5sb2cocmVzKVxyXG5cdCAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddPT10cnVlKSB7XHJcblx0ICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxyXG5cdCAgICAgIGNvbnNvbGUubG9nKCflt7Lnu4/mjojmnYMnKVxyXG5cdFx0XHRcdHVuaS5nZXRVc2VySW5mbyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHR2YXIgdXNlckluZm8gPSByZXMudXNlckluZm9cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codXNlckluZm8pXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCByZXMudXNlckluZm8pXHJcblx0XHRcdFx0XHRcdGlmKCF1c2VySW5mbyl7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHQgICAgICAgICAgICB1bmkubG9naW4oe1xyXG5cdCAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHQgICAgICAgICAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcclxuXHQgICAgICAgICAgICAgICAgdmFyIHVpbmZvID0gdXNlckluZm9cclxuXHQgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcblx0ICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGUsXHJcblx0ICAgICAgICAgICAgICAgICAgbmlja25hbWU6IHVpbmZvLm5pY2tOYW1lLFxyXG5cdCAgICAgICAgICAgICAgICAgIGNvdmVyOiB1aW5mby5hdmF0YXJVcmxcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICBsZXQgcmNvZGUgPSByZXMuY29kZVxyXG5cdCAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcclxuXHQgICAgICAgICAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG5cdCAgICAgICAgICAgICAgICAgIHVybDogSVB1cmwrJ3VzZXIvbG9naW4nLFxyXG5cdCAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcblx0ICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHQgICAgICAgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcblx0ICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcblx0ICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0ICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuXHQgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09IDEpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leaIkOWKnycpXHJcblx0ICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgcmVzLmRhdGEuZGF0YS50b2tlbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly/ojrflj5bmiYvmnLrlj7dcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LypcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoIXJlcy5kYXRhLmRhdGEucGhvbmUpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKG51bT09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2xvZ2luX3RlbC9sb2dpbl90ZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0b3JlLmNvbW1pdCgnbG9naW5kYXRhJywgcmVzLmRhdGEuZGF0YSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RvcmUuY29tbWl0KCdsb2dpbicsIHJlcy5kYXRhLmRhdGEubmlja25hbWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ2xvZ2lubXNnJywgcmVzLmRhdGEuZGF0YSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8wIOWVhuWutuerryAgMSDnlKjmiLfnq68gIDLmmbrog73lronoo4Xnq69cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3N0b3JlLnhjeF9zdGF0dXMnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhzdG9yZS5zdGF0ZS54Y3hfc3RhdHVzKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihudW09PTEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEuaXNfZW5naW5lZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuZGF0YS5pc19vd25lcj09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdG9yZS5jb21taXQoJ3NldF94Y3gnLCAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmRhdGEuaXNfZW5naW5lZXI9PTEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RvcmUuY29tbWl0KCdzZXRfeGN4JywgMilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5kYXRhLmlzX3NlbGxlcj09MSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdG9yZS5jb21taXQoJ3NldF94Y3gnLCAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBpbSBsb2dpblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihudW09PTEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTon55m75b2V5oiQ5YqfJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudHJpZ2dlcih7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgdHlwZTondGVzdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgcGFnZTonL3BhZ2VzL2luZGV4L2luZGV4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAvL29iauWSjHRlc3TmmK/kuL7nmoTkvovlrZDvvIzpmo/mhI/llaXpg73ooYzvvIzov5nkuKrkvKDov4fljrvlnKhvbuS4reeahGFyZ3PkuK3pg73lj6/ku6Xojrflj5bliLBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBvYmo6e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB0ZXN0OntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdsb2dpbm1zZyc6IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIC8vZGF0YeS4um9u5Lit6L+U5Zue55qE5pWw5o2uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwxMDAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sMTUwMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudHJpZ2dlcih7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHR5cGU6J3Rlc3QnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBwYWdlOicvcGFnZXMvaW5kZXgvaW5kZXgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAvL29iauWSjHRlc3TmmK/kuL7nmoTkvovlrZDvvIzpmo/mhI/llaXpg73ooYzvvIzov5nkuKrkvKDov4fljrvlnKhvbuS4reeahGFyZ3PkuK3pg73lj6/ku6Xojrflj5bliLBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgb2JqOntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgdGVzdDp7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2xvZ2lubXNnJzogcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgLy9kYXRh5Li6b27kuK3ov5Tlm57nmoTmlbDmja5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3VzZXJJbmZvJylcclxuXHQgICAgICAgICAgICAgICAgICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcblx0ICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5tc2cpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGl0bGU6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0aXRsZTogJ+eZu+W9leWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFxyXG5cdCAgICAgICAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgICAgICAgZmFpbCgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0ICAgICAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+eZu+W9leWksei0pSdcclxuXHQgICAgICAgICAgICAgICAgICAgIH0pXHJcblx0ICAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICB9KVxyXG5cdCAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdCAgICB9ZWxzZXtcclxuXHRcdFx0ICB1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdCAgICB9XHJcblx0ICB9XHJcblx0fSlcclxufVxyXG4vLyDmiYvmnLrlj7fnmbvlvZVcclxuY29uc3QgbG9naW5fdGVsID0gZnVuY3Rpb24obnVtKSB7XHJcblx0dmFyIGRhdGFzXHJcblx0dmFyIHRlbFxyXG5cdHZhciBwYXNzd29yZFxyXG5cdGlmKHVuaS5nZXRTdG9yYWdlU3luYygndGVsJykpe1xyXG5cdFx0dGVsPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3RlbCcpXHJcblx0XHRwYXNzd29yZD0gdW5pLmdldFN0b3JhZ2VTeW5jKCdwYXNzd29yZCcpXHJcblx0XHRkYXRhcyA9IHtcclxuXHRcdFx0dXNlcm5hbWU6IHRlbCxcclxuXHRcdFx0cGFzc3dvcmQ6IHBhc3N3b3JkXHJcblx0XHR9XHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblx0XHJcblx0dmFyIGprdXJsID0gJy9taW5hcHAvbG9naW4nXHJcblx0UF9wb3N0KGprdXJsLCBkYXRhcykudGhlbihyZXMgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0aWYgKHJlcy5jb2RlID09IDEpIHtcclxuXHRcdFx0dmFyIGRhdGFzID0gcmVzLmRhdGFcclxuXHRcdFx0Y29uc29sZS5sb2codHlwZW9mIGRhdGFzKVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBkYXRhcyA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdGRhdGFzID0gSlNPTi5wYXJzZShkYXRhcylcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZygn55m75b2V5oiQ5YqfJylcclxuXHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd0ZWwnLCB0ZWwpXHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygncGFzc3dvcmQnLCBwYXNzd29yZClcclxuXHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsIGRhdGFzLnRva2VuKVxyXG5cdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2xvZ2lubXNnJywgZGF0YXMpXHJcblx0XHRcdHN0b3JlLmNvbW1pdCgnbG9naW5kYXRhJywgZGF0YXMpXHJcblx0XHRcdHN0b3JlLmNvbW1pdCgnbG9naW4nLCBkYXRhcy51c2VybmFtZSlcclxuXHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdC8vIFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdC8vIFx0XHRkZWx0YTogMVxyXG5cdFx0XHQvLyBcdH0pXHJcblx0XHRcdC8vIH0sIDEwMDApXHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHJlcy5tc2cpIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiByZXMubXNnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn5pON5L2c5aSx6LSlJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KS5jYXRjaChlID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHR0aXRsZTogJ+aTjeS9nOWksei0pSdcclxuXHRcdH0pXHJcblx0fSlcclxufVxyXG5jb25zdCBzZXRVc2VybXNnPWZ1bmN0aW9uKGRhdGEpe1xyXG5cdHZhciBqa3VybD0nL3VzZXIvYW1lbmRJbmZvJ1xyXG5cdFxyXG5cdHBvc3Qoamt1cmwsIGRhdGEsXHJcblx0XHRmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGlmIChyZXMuZGF0YS5jb2RlID09IDEpIHtcclxuXHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMSkge1xyXG5cdFx0XHRcdHZhciBkYXRhcyA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0eXBlb2YgZGF0YXMpXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhcyA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0ZGF0YXMgPSBKU09OLnBhcnNlKGRhdGFzKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR3eGxvZ2luKClcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOifmk43kvZzmiJDlip8nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAocmVzLmRhdGEubXNnKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubXNnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+aTjeS9nOWksei0pSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRcdHRoYXQuYnRua2c9MFxyXG5cdFx0XHRcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn6I635Y+W5pWw5o2u5aSx6LSlJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcclxuXHRcdH1cclxuXHQpXHJcbn1cclxuXHJcbi8vIOS4iuS8oOWbvueJh1xyXG5jb25zdCB3eF91cGxvYWQgPSBmdW5jdGlvbih0eGltZykge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHR0aXRsZTogJ+ato+WcqOS4iuS8oCdcclxuXHRcdH0pXHJcblxyXG5cdFx0dW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHR1cmw6IElQdXJsICsgJ21pbmFwcC91cGxvYWQtaW1nJyxcclxuXHRcdFx0ZmlsZVBhdGg6IHR4aW1nLFxyXG5cdFx0XHRuYW1lOiAnaW1nJyxcclxuXHRcdFx0Zm9ybURhdGE6IHtcclxuXHRcdFx0XHR0b2tlbjogdW5pLmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIHN1Y2Nlc3M6ICh1cGxvYWRGaWxlUmVzKSA9PiB7XHJcblx0XHRcdC8vIFx0Y29uc29sZS5sb2codXBsb2FkRmlsZVJlcy5kYXRhKTtcclxuXHRcdFx0Ly8gXHR2YXIgbmRhdGEgPSBKU09OLnBhcnNlKHVwbG9hZEZpbGVSZXMuZGF0YSlcclxuXHRcdFx0Ly8gXHRyZXNvbHZlKHVwbG9hZEZpbGVSZXMpXHJcblx0XHRcdC8vIH0sXHJcblx0XHRcdGNvbXBsZXRlOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0dW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/mhY7nlKhoaWRlTG9hZGluZyzkvJrlhbPpl613eC5zaG93VG9hc3TlvLnnqpdcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhg6ICX5pe2JHtEYXRlLm5vdygpIC0gdGltZVN0YXJ0fWApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7IC8v6K+35rGC5oiQ5YqfXHJcblx0XHRcdFx0XHR2YXIgbmRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxyXG5cdFx0XHRcdFx0aWYgKG5kYXRhLmNvZGUgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0c3RvcmUuY29tbWl0KCdsb2dvdXQnKVxyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAobmRhdGEuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdGlmIChuZGF0YS5tc2cpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogbmRhdGEubXNnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aTjeS9nOWksei0pSdcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXNvbHZlKG5kYXRhKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZWplY3QocmVzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdH0pXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8g6YWN572u5o6l5Y+j6K+35rGC55qE5YWs5YWx5pa55rOVXHJcbmNvbnN0IGh0dHAgPSh7dXJsID0nJyxwYXJhbSA9e30sbWV0aG9kPScnLGhlYWRlcj17J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnfX09e30pID0+e1xyXG4gIFxyXG4gIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcblx0XHRjb25zb2xlLmxvZygn6K+35rGCdXJs77yaJyArIGdldFVybCh1cmwpKTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coXCLor7fmsYLlpLTvvJpcIiwgaGVhZGVyKVxyXG5cdFx0Y29uc29sZS5sb2coXCJwYXJhbe+8mlwiLCBwYXJhbSlcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBnZXRVcmwodXJsKSxcclxuICAgICAgZGF0YTpwYXJhbSxcclxuICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgIGhlYWRlcjpoZWFkZXIsXHJcbiAgICAgIGNvbXBsZXRlOihyZXMpPT57XHJcbiAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgIHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7Ly/mhY7nlKhoaWRlTG9hZGluZyzkvJrlhbPpl613eC5zaG93VG9hc3TlvLnnqpdcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGDogJfml7Yke0RhdGUubm93KCkgLSB0aW1lU3RhcnR9YCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICBpZihyZXMuc3RhdHVzQ29kZSA9PTIwMCl7Ly/or7fmsYLmiJDlip9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuY29kZT09LTEpe1xyXG5cdFx0XHRcdFx0XHRcdC8vIHN0b3JlLmNvbW1pdCgnbG9nb3V0JylcclxuXHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6Jy9wYWdlcy9sb2dpbi9sb2dpbidcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihyZXMuZGF0YS5jb2RlPT0wJiZyZXMubXNnPT0n6K+35YWI55m75b2V6LSm5Y+3ficpe1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2xvZ2luL2xvZ2luJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHJlcy5kYXRhLmNvZGU9PTApe1xyXG5cdFx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLm1zZyl7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6cmVzLmRhdGEubXNnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOifmk43kvZzlpLHotKUnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJlamVjdChyZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuLy8g6I635Y+WdXJsXHJcbmNvbnN0IGdldFVybCA9ICh1cmwpPT57XHJcblx0aWYoIXVybCl7XHJcblx0XHRyZXR1cm4gdXJsXHJcblx0fVxyXG5cdGlmKHVybC5zbGljZSgwLDEpID09IFwiL1wiKXtcclxuXHQgICAgY29uc29sZS5sb2codHJ1ZSk7XHJcblx0XHRcdHVybCA9IHVybC5zdWJzdHIoMSk7XHJcblx0fVxyXG4gIGlmKHVybC5pbmRleE9mKCc6Ly8nKT09IC0xKXtcclxuICAgIHVybCA9IElQdXJsICt1cmwgO1xyXG4gIH1cclxuICByZXR1cm4gdXJsO1xyXG59XHJcbi8v5pq06Zyy5Ye65Y676LCD55So55qE5pa55rOVXHJcbiBcclxuXHJcbi8vIGdldOaWueazlVxyXG5jb25zdCBQX2dldCA9ICh1cmwsIHBhcmFtID0ge30pID0+IHtcclxuXHRcdGlmKCFwYXJhbS5sb2FkX21vZGUpe1xyXG5cdFx0XHR3eC5zaG93TG9hZGluZyh7XHJcblx0XHRcdCAgdGl0bGU6ICfor7fmsYLkuK3vvIzor7fogJDlv4PnrYnlvoUuLi4nLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuICAgIHJldHVybiBodHRwKHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgcGFyYW0sXHJcblx0XHRcdFx0bWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgUF9wb3N0ID0gKHVybCwgcGFyYW0gPSB7fSkgPT4ge1xyXG4gICAgcmV0dXJuIGh0dHAoe1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICBwYXJhbSxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBQX3B1dCA9ICh1cmwsIHBhcmFtID0ge30pID0+IHtcclxuICAgIHJldHVybiBodHRwKHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgcGFyYW0sXHJcbiAgICAgICAgbWV0aG9kOiAncHV0J1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgUF9kZWxldGUgPSAodXJsLCBwYXJhbSA9IHt9KSA9PiB7XHJcbiAgICByZXR1cm4gaHR0cCh7XHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHBhcmFtLFxyXG4gICAgICAgIG1ldGhvZDogJ3B1dCdcclxuICAgIH0pXHJcbn1cclxuLy8gLy8g5Y2V5Liq6K+35rGCXHJcbi8vIHNlcnZpY2UuUF9nZXQoJy9jYXRlL2xpc3QnKS50aGVuKHJlcyA9PiB7XHJcbi8vIFx0Y29uc29sZS5sb2cocmVzKVxyXG4vLyB9KS5jYXRjaChlID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZyhlKVxyXG4vLyB9KVxyXG5cclxuLy8gLy8g5LiA5Liq6aG16Z2i5aSa5Liq6K+35rGCXHJcbi8vIFByb21pc2UuYWxsKFtcclxuLy8gICBzZXJ2aWNlLlBfZ2V0KCcvY2F0ZS9saXN0JyksXHJcbi8vICAgc2VydmljZS5QX2dldChgZGV0YWlsLyR7aWR9YClcclxuLy8gXSkudGhlbihyZXN1bHQgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuLy8gfSkuY2F0Y2goZSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coZSlcclxuLy8gfSlcclxuY29uc3QgZ2V0aW1nPWZ1bmN0aW9uIChpbWcpe1xyXG5cdC8vIHJldHVybiBpbWdcclxuXHRcclxuXHRcclxuXHRcclxuXHRpZighaW1nKSByZXR1cm5cclxuXHQvLyBjb25zb2xlLmxvZyhpbWd1cmwraW1nKVxyXG5cdGlmKGltZy5pbmRleE9mKCc6Ly8nKT09IC0xKXtcclxuXHQgIGltZyA9IGltZ3VybCtpbWdcclxuXHR9XHJcblx0cmV0dXJuIGltZ1xyXG59XHJcbmNvbnN0IGdldGltZ2Fycj1mdW5jdGlvbiAoaW1ncyx0eXBlKXtcclxuXHRpZighaW1ncykgcmV0dXJuXHJcblx0aWYoIXR5cGUpe1xyXG5cdFx0dHlwZT0nLCdcclxuXHR9XHJcblx0aW1ncz1pbWdzLnNwbGl0KHR5cGUpXHJcblx0Ly8gY29uc29sZS5sb2coaW1ndXJsK2ltZylcclxuXHR2YXIgbmV3aW1ncz1bXVxyXG5cdGZvcih2YXIgaT0wO2k8aW1ncy5sZW5ndGg7aSsrKXtcclxuXHRcdHZhciBpbWc9aW1nc1tpXVxyXG5cdFx0aWYoaW1nLmluZGV4T2YoJzovLycpPT0gLTEpe1xyXG5cdFx0ICBpbWcgPSBpbWd1cmwraW1nXHJcblx0XHR9XHJcblx0XHRuZXdpbWdzLnB1c2goaW1nKVxyXG5cdH1cclxuXHQvLyBjb25zb2xlLmxvZyhuZXdpbWdzKVxyXG5cdHJldHVybiBuZXdpbWdzXHJcbn1cclxuY29uc3QgZ2V0dGltZT1mdW5jdGlvbiAobWope1xyXG5cdGlmKCFtaikge1xyXG5cdFx0cmV0dXJuIHt9XHJcblx0fVxyXG5cdC8vIC8vIGNvbnNvbGUubG9nKG1qLmluZGV4T2YoJ+S7iuWkqScpIT0tMSlcclxuXHQvLyBpZihtai5pbmRleE9mKCfku4rlpKknKSE9LTEpe1xyXG5cdC8vIFx0cmV0dXJuIHtcclxuXHQvLyBcdFx0dHlwZToyLFxyXG5cdFx0XHRcclxuXHQvLyBcdFx0dGltZTptalxyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHQvLyBtaiA9IG1qLnJlcGxhY2UoLy0vZywnLycpXHJcblx0dmFyIG50aW1lPW5ldyBEYXRlKG1qKjEwMDApXHJcblx0Ly8gY29uc29sZS5sb2cobnRpbWUpXHJcblx0dmFyIG5feWVhciA9IG50aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0dmFyIG5fbW9udGggPSBudGltZS5nZXRNb250aCgpICsgMTtcclxuXHR2YXIgbl9kYXRlID0gbnRpbWUuZ2V0RGF0ZSgpO1xyXG5cdHZhciBuX2hvdXIgPSBudGltZS5nZXRIb3VycygpO1xyXG5cdHZhciBuX21pbnV0ZSA9IG50aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcclxuXHR2YXIgdGltZSA9IG5ldyBEYXRlKCk7XHJcblx0dmFyIHllYXIgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0dmFyIG1vbnRoID0gdGltZS5nZXRNb250aCgpICsgMTtcclxuXHR2YXIgZGF0ZSA9IHRpbWUuZ2V0RGF0ZSgpO1xyXG5cdHZhciBob3VyID0gdGltZS5nZXRIb3VycygpO1xyXG5cdHZhciBtaW51dGUgPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHQvLyBuX21vbnRoPW5fbW9udGg8MTA/ICcwJytuX21vbnRoOm5fbW9udGhcclxuXHRuX2RhdGU9bl9kYXRlPDEwPyAnMCcrbl9kYXRlOm5fZGF0ZVxyXG5cdG5faG91cj1uX2hvdXI8MTA/ICcwJytuX2hvdXI6bl9ob3VyXHJcblx0bl9taW51dGU9bl9taW51dGU8MTA/ICcwJytuX21pbnV0ZTpuX21pbnV0ZVxyXG5cdGlmKG5feWVhcj09eWVhcil7XHJcblx0XHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHR5cGU6MSxcclxuXHRcdFx0eWVhcjpuX3llYXIsXHJcblx0XHRcdG1vbnRoOm5fbW9udGgsXHJcblx0XHRcdGRhdGU6bl9kYXRlLFxyXG5cdFx0XHRob3VyOm5faG91cixcclxuXHRcdFx0bWludXRlOm5fbWludXRlLFxyXG5cdFx0XHR0aW1lOifku4rlpKkgJytuX2hvdXIrJzonK25fbWludXRlXHJcblx0XHR9XHJcblx0fWVsc2V7XHJcblx0XHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHR5cGU6MixcclxuXHRcdFx0eWVhcjpuX3llYXIsXHJcblx0XHRcdG1vbnRoOm5fbW9udGgsXHJcblx0XHRcdGRhdGU6bl9kYXRlLFxyXG5cdFx0XHRob3VyOm5faG91cixcclxuXHRcdFx0bWludXRlOm5fbWludXRlLFxyXG5cdFx0XHR0aW1lOm5feWVhcisnLScrbl9tb250aCsnLScrbl9kYXRlXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0X2Z3Yj1mdW5jdGlvbiAoc3RyKXtcclxuXHRpZighc3RyKXtcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHRcdFx0XHRzdHIgPSBzdHIgLy8gLnJlcGxhY2UoLzxwKFtcXHNcXHdcIj1cXC9cXC46O10rKSgoPzooc3R5bGU9XCJbXlwiXStcIikpKS9pZywgJzxwJylcclxuXHRcdFx0XHQgICAgICAgICAgLnJlcGxhY2UoLzxwKFtcXHNcXHdcIi09XFwvXFwuOjtdKykoKD86KGNsYXNzPVwiW15cIl0rXCIpKSkvaWcsICc8cCAkMScpXHJcblx0XHRcdFx0ICAgICAgICAgIC5yZXBsYWNlKC88cChbXFxzXFx3XCItPVxcL1xcLjo7XSspL2lnLCAnPHAkMSBjbGFzcz1cInhjeF9md2JfcFwiJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gLnJlcGxhY2UoLzxkaXYoW1xcc1xcd1wiPVxcL1xcLjo7XSspKCg/OihzdHlsZT1cIlteXCJdK1wiKSkpL2lnLCAnPGRpdicpXHJcblx0XHRcdFx0ICAgICAgICAgIC5yZXBsYWNlKC88ZGl2KFtcXHNcXHdcIi09XFwvXFwuOjtdKykoKD86KGNsYXNzPVwiW15cIl0rXCIpKSkvaWcsICc8ZGl2ICQxJylcclxuXHRcdFx0XHQgICAgICAgICAgLnJlcGxhY2UoLzxkaXYoW1xcc1xcd1wiLT1cXC9cXC46O10rKS9pZywgJzxkaXYkMSBjbGFzcz1cInhjeF9md2JfZGl2XCInKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCAgICAgICAgICAvLyAucmVwbGFjZSgvPGltZyhbXFxzXFx3XCItPVxcL1xcLjo7XSspKCg/OihoZWlnaHQ9XCJbXlwiXStcIikpKS9pZywgJzxpbWcgJDEnKVxyXG5cdFx0XHRcdCAgICAgICAgICAvLyAucmVwbGFjZSgvPGltZyhbXFxzXFx3XCItPVxcL1xcLjo7XSspKCg/Oih3aWR0aD1cIlteXCJdK1wiKSkpL2lnLCAnPGltZyAkMScpXHJcblx0XHRcdFx0ICAgICAgICAgIC8vIC5yZXBsYWNlKC88aW1nKFtcXHNcXHdcIi09XFwvXFwuOjtdKykoKD86KHN0eWxlPVwiW15cIl0rXCIpKSkvaWcsICc8aW1nICQxJylcclxuXHRcdFx0XHQgICAgICAgICAgLnJlcGxhY2UoLzxpbWcoW1xcc1xcd1wiLT1cXC9cXC46O10rKSgoPzooYWx0PVwiW15cIl0rXCIpKSkvaWcsICc8aW1nICQxJylcclxuXHRcdFx0XHQgICAgICAgICAgLnJlcGxhY2UoLzxpbWcoW1xcc1xcd1wiLT1cXC9cXC46O10rKSgoPzooY2xhc3M9XCJbXlwiXStcIikpKS9pZywgJzxpbWcgJDEnKVxyXG5cdFx0XHRcdCAgICAgICAgICAucmVwbGFjZSgvPGltZyhbXFxzXFx3XCItPVxcL1xcLjo7XSspL2lnLCAnPGltZyQxIGNsYXNzPVwieGN4X2Z3Yl9pbWdcIicpXHJcblx0XHRcdFx0cmV0dXJuIHN0clxyXG5cdFx0XHR9XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRnZXRVc2VycyxcclxuXHRhZGRVc2VyLFxyXG5cdGdldCxcclxuXHRwb3N0LFxyXG5cdElQdXJsLFxyXG5cdG1hcF9rZXksXHJcblx0aW1ndXJsLFxyXG5cdGdvbG9naW4sXHJcblx0anVtcCxcclxuXHRjYWxsLFxyXG5cdHd4bG9naW4sXHJcblx0bG9naW5fdGVsLFxyXG5cdHNldFVzZXJtc2csXHJcblx0UF9nZXQsXHJcblx0UF9wb3N0LFxyXG5cdFBfcHV0LFxyXG5cdFBfZGVsZXRlLFxyXG5cdGdldHRpbWUsXHJcblx0Z2V0aW1nLFxyXG5cdGdldGltZ2FycixcclxuXHRwdmVpbWcsXHJcblx0Z2V0X2Z3YixcclxuXHR3eF91cGxvYWRcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!******************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/store/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default);\n\nvar store = new _vuex.default.Store({\n  state: {\n    /**\r\n            * 是否需要强制登录\r\n            */\n    forcedLogin: false,\n    hasLogin: false,\n    platform: '',\n    userName: \"游客\",\n    loginDatas: {\n      avatarurl: 'http://51daiyan.test.upcdn.net/resource/api/img/20200716/3eb26483a34058663c1adf01cf90901d.png',\n      nickname: '刘明',\n      tel: '1786352362',\n      gs: '智慧家物联网科技有限公司' },\n\n\n    company: '',\n    uid: '',\n    phone: '',\n    token: '',\n    laheiArr: [],\n    uuid: '',\n\n\n\n    new_xz: [], //批量操作\n    new_problem: '', //新问题\n    ls_prodata: '',\n    ls_pro_yh: '',\n    fj_data: '',\n    bj_prodata: '',\n\n    zn: \"\", //新手指南\n    address: {}, //当前坐标\n\n\n    wheight: '',\n    NCount: 0 },\n\n  mutations: {\n    setCount: function setCount(state, NCount) {//未读消息数量\n      state.NCount = NCount || 0;\n    },\n    setAddress: function setAddress(state, provider) {//当前坐标\n      state.address = provider;\n    },\n    setHeight: function setHeight(state, height) {//视窗高度\n      state.wheight = height || 750;\n    },\n    set_xcx: function set_xcx(state, xcx_status) {\n      var tip_text = '正在切换至';\n      if (xcx_status == 0) {\n        if (state.loginDatas.is_seller != 1) {\n          uni.showToast({\n            icon: 'none',\n            title: '暂无权限' });\n\n          return;\n        }\n        tip_text += '商家端';\n      }\n      if (xcx_status == 1) {\n        if (state.loginDatas.is_owner != 1) {\n          uni.showToast({\n            icon: 'none',\n            title: '暂无权限' });\n\n          return;\n        }\n        tip_text += '用户端';\n      }\n      if (xcx_status == 2) {\n        if (state.loginDatas.is_engineer != 1) {\n          uni.showToast({\n            icon: 'none',\n            title: '暂无权限' });\n\n          return;\n        }\n        tip_text += '智能安装端';\n      }\n      uni.showToast({\n        icon: 'none',\n        title: tip_text });\n\n      state.xcx_status = xcx_status || 0;\n      uni.switchTab({\n        url: '/pages/index/index' });\n\n    },\n    login: function login(state, userName) {\n      state.userName = userName || '新用户';\n      state.hasLogin = true;\n      __f__(\"log\", userName, \" at store/index.js:99\");\n      __f__(\"log\", state.userName, \" at store/index.js:100\");\n    },\n    lahei: function lahei(state, id) {\n      // state.userName = userName || '新用户';\n      // state.hasLogin = true;\n      state.laheiArr.push(id);\n      __f__(\"log\", state.laheiArr, \" at store/index.js:106\");\n    },\n    logindata: function logindata(state, _logindata) {\n      state.loginDatas = _logindata || '';\n      _vue.default.set(state, 'loginDatas', _logindata);\n      // state.company=logindata.company\n      // state.uid= logindata.id\n      // state.phone= logindata.phone\n      // state.token= logindata.token\n      __f__(\"log\", _logindata, \" at store/index.js:115\");\n      __f__(\"log\", state.loginDatas, \" at store/index.js:116\");\n    },\n    setplatform: function setplatform(state, platform) {\n      state.platform = platform || 'android';\n    },\n    logout: function logout(state) {\n      state.userName = \"游客\";\n      state.hasLogin = false;\n      uni.clearStorageSync();\n\n\n    },\n\n    // ****************************************\n    //评论操作\n    setnew_xz: function setnew_xz(state, new_xz) {\n      state.new_xz = new_xz || [];\n    },\n    //新题\n    setnew_problem: function setnew_problem(state, new_problem) {\n      state.new_problem = new_problem || [];\n    } } });var _default =\n\n\n\nstore;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsImZvcmNlZExvZ2luIiwiaGFzTG9naW4iLCJwbGF0Zm9ybSIsInVzZXJOYW1lIiwibG9naW5EYXRhcyIsImF2YXRhcnVybCIsIm5pY2tuYW1lIiwidGVsIiwiZ3MiLCJjb21wYW55IiwidWlkIiwicGhvbmUiLCJ0b2tlbiIsImxhaGVpQXJyIiwidXVpZCIsIm5ld194eiIsIm5ld19wcm9ibGVtIiwibHNfcHJvZGF0YSIsImxzX3Byb195aCIsImZqX2RhdGEiLCJial9wcm9kYXRhIiwiem4iLCJhZGRyZXNzIiwid2hlaWdodCIsIk5Db3VudCIsIm11dGF0aW9ucyIsInNldENvdW50Iiwic2V0QWRkcmVzcyIsInByb3ZpZGVyIiwic2V0SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0X3hjeCIsInhjeF9zdGF0dXMiLCJ0aXBfdGV4dCIsImlzX3NlbGxlciIsInVuaSIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsImlzX293bmVyIiwiaXNfZW5naW5lZXIiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJsb2dpbiIsImxhaGVpIiwiaWQiLCJwdXNoIiwibG9naW5kYXRhIiwic2V0Iiwic2V0cGxhdGZvcm0iLCJsb2dvdXQiLCJjbGVhclN0b3JhZ2VTeW5jIiwic2V0bmV3X3h6Iiwic2V0bmV3X3Byb2JsZW0iXSwibWFwcGluZ3MiOiJvSUFBQTtBQUNBLHdFOztBQUVBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLElBQUlELGNBQUtFLEtBQVQsQ0FBZTtBQUM1QkMsT0FBSyxFQUFFO0FBQ047OztBQUdBQyxlQUFXLEVBQUUsS0FKUDtBQUtOQyxZQUFRLEVBQUUsS0FMSjtBQU1OQyxZQUFRLEVBQUMsRUFOSDtBQU9OQyxZQUFRLEVBQUUsSUFQSjtBQVFOQyxjQUFVLEVBQUM7QUFDVEMsZUFBUyxFQUFD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LElBQUUsRUFBakM7QUFDQSxLQTVGUyxFQXZDaUIsRUFBZixDQUFkLEM7Ozs7QUF1SWVuQixLIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblxyXG5WdWUudXNlKFZ1ZXgpXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuXHRzdGF0ZToge1xyXG5cdFx0LyoqXHJcblx0XHQgKiDmmK/lkKbpnIDopoHlvLrliLbnmbvlvZVcclxuXHRcdCAqL1xyXG5cdFx0Zm9yY2VkTG9naW46IGZhbHNlLFxyXG5cdFx0aGFzTG9naW46IGZhbHNlLFxyXG5cdFx0cGxhdGZvcm06JycsXHJcblx0XHR1c2VyTmFtZTogXCLmuLjlrqJcIixcclxuXHRcdGxvZ2luRGF0YXM6e1xyXG5cdFx0XHRcdGF2YXRhcnVybDonaHR0cDovLzUxZGFpeWFuLnRlc3QudXBjZG4ubmV0L3Jlc291cmNlL2FwaS9pbWcvMjAyMDA3MTYvM2ViMjY0ODNhMzQwNTg2NjNjMWFkZjAxY2Y5MDkwMWQucG5nJyxcclxuXHRcdFx0XHRuaWNrbmFtZTon5YiY5piOJyxcclxuXHRcdFx0XHR0ZWw6JzE3ODYzNTIzNjInLFxyXG5cdFx0XHRcdGdzOifmmbrmhaflrrbnianogZTnvZHnp5HmioDmnInpmZDlhazlj7gnXHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdGNvbXBhbnk6JycsXHJcblx0XHR1aWQ6JycsXHJcblx0XHRwaG9uZTonJyxcclxuXHRcdHRva2VuOicnLFxyXG5cdFx0bGFoZWlBcnI6W10sXHJcblx0XHR1dWlkOicnLFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0bmV3X3h6OltdLCAgICAvL+aJuemHj+aTjeS9nFxyXG5cdFx0bmV3X3Byb2JsZW06JycgLC8v5paw6Zeu6aKYXHJcblx0XHRsc19wcm9kYXRhOicnLFxyXG5cdFx0bHNfcHJvX3loOicnLFxyXG5cdFx0ZmpfZGF0YTonJyxcclxuXHRcdGJqX3Byb2RhdGE6JycsXHJcblx0XHRcclxuXHRcdHpuOlwiXCIgLC8v5paw5omL5oyH5Y2XXHJcblx0XHRhZGRyZXNzOnt9LC8v5b2T5YmN5Z2Q5qCHXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0d2hlaWdodDonJyxcclxuXHRcdE5Db3VudDowXHJcblx0fSxcclxuXHRtdXRhdGlvbnM6IHtcclxuXHRcdHNldENvdW50KHN0YXRlLCBOQ291bnQpIHsgLy/mnKror7vmtojmga/mlbDph49cclxuXHRcdFx0c3RhdGUuTkNvdW50ID0gTkNvdW50fHwwO1xyXG5cdFx0fSxcclxuXHRcdHNldEFkZHJlc3Moc3RhdGUsIHByb3ZpZGVyKSB7IC8v5b2T5YmN5Z2Q5qCHXHJcblx0XHRcdHN0YXRlLmFkZHJlc3MgPSBwcm92aWRlcjtcclxuXHRcdH0sXHJcblx0XHRzZXRIZWlnaHQoc3RhdGUsIGhlaWdodCkgeyAvL+inhueql+mrmOW6plxyXG5cdFx0XHRzdGF0ZS53aGVpZ2h0ID0gaGVpZ2h0fHw3NTA7XHJcblx0XHR9LFxyXG5cdFx0c2V0X3hjeChzdGF0ZSwgeGN4X3N0YXR1cyl7XHJcblx0XHRcdHZhciB0aXBfdGV4dD0n5q2j5Zyo5YiH5o2i6IezJ1xyXG5cdFx0XHRpZih4Y3hfc3RhdHVzPT0wKXtcclxuXHRcdFx0XHRpZihzdGF0ZS5sb2dpbkRhdGFzLmlzX3NlbGxlciE9MSl7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pqC5peg5p2D6ZmQJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGlwX3RleHQrPSfllYblrrbnq68nXHJcblx0XHRcdH1cclxuXHRcdFx0aWYoeGN4X3N0YXR1cz09MSl7XHJcblx0XHRcdFx0aWYoc3RhdGUubG9naW5EYXRhcy5pc19vd25lciE9MSl7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pqC5peg5p2D6ZmQJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGlwX3RleHQrPSfnlKjmiLfnq68nXHJcblx0XHRcdH1cclxuXHRcdFx0aWYoeGN4X3N0YXR1cz09Mil7XHJcblx0XHRcdFx0aWYoc3RhdGUubG9naW5EYXRhcy5pc19lbmdpbmVlciE9MSl7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pqC5peg5p2D6ZmQJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGlwX3RleHQrPSfmmbrog73lronoo4Xnq68nXHJcblx0XHRcdH1cclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0dGl0bGU6dGlwX3RleHRcclxuXHRcdFx0fSlcclxuXHRcdFx0c3RhdGUueGN4X3N0YXR1cyA9IHhjeF9zdGF0dXMgfHwgMDtcclxuXHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0dXJsOicvcGFnZXMvaW5kZXgvaW5kZXgnXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0bG9naW4oc3RhdGUsIHVzZXJOYW1lKSB7XHJcblx0XHRcdHN0YXRlLnVzZXJOYW1lID0gdXNlck5hbWUgfHwgJ+aWsOeUqOaItyc7XHJcblx0XHRcdHN0YXRlLmhhc0xvZ2luID0gdHJ1ZTtcclxuXHRcdFx0Y29uc29sZS5sb2codXNlck5hbWUpXHJcblx0XHRcdGNvbnNvbGUubG9nKHN0YXRlLnVzZXJOYW1lKVxyXG5cdFx0fSxcclxuXHRcdGxhaGVpKHN0YXRlLCBpZCkge1xyXG5cdFx0XHQvLyBzdGF0ZS51c2VyTmFtZSA9IHVzZXJOYW1lIHx8ICfmlrDnlKjmiLcnO1xyXG5cdFx0XHQvLyBzdGF0ZS5oYXNMb2dpbiA9IHRydWU7XHJcblx0XHRcdHN0YXRlLmxhaGVpQXJyLnB1c2goaWQpXHJcblx0XHRcdGNvbnNvbGUubG9nKHN0YXRlLmxhaGVpQXJyKVxyXG5cdFx0fSxcclxuXHRcdGxvZ2luZGF0YShzdGF0ZSwgbG9naW5kYXRhKSB7XHJcblx0XHRcdHN0YXRlLmxvZ2luRGF0YXMgPSBsb2dpbmRhdGEgfHwgJyc7XHJcblx0XHRcdFZ1ZS5zZXQoc3RhdGUsJ2xvZ2luRGF0YXMnLGxvZ2luZGF0YSlcclxuXHRcdFx0Ly8gc3RhdGUuY29tcGFueT1sb2dpbmRhdGEuY29tcGFueVxyXG5cdFx0XHQvLyBzdGF0ZS51aWQ9IGxvZ2luZGF0YS5pZFxyXG5cdFx0XHQvLyBzdGF0ZS5waG9uZT0gbG9naW5kYXRhLnBob25lXHJcblx0XHRcdC8vIHN0YXRlLnRva2VuPSBsb2dpbmRhdGEudG9rZW5cclxuXHRcdFx0Y29uc29sZS5sb2cobG9naW5kYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhzdGF0ZS5sb2dpbkRhdGFzKVxyXG5cdFx0fSxcclxuXHRcdHNldHBsYXRmb3JtKHN0YXRlLCBwbGF0Zm9ybSkge1xyXG5cdFx0XHRzdGF0ZS5wbGF0Zm9ybSA9IHBsYXRmb3JtIHx8ICdhbmRyb2lkJztcclxuXHRcdH0sXHJcblx0XHRsb2dvdXQoc3RhdGUpIHtcclxuXHRcdFx0c3RhdGUudXNlck5hbWUgPSBcIua4uOWuolwiO1xyXG5cdFx0XHRzdGF0ZS5oYXNMb2dpbiA9IGZhbHNlO1xyXG5cdFx0XHR1bmkuY2xlYXJTdG9yYWdlU3luYygpXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdC8v6K+E6K665pON5L2cXHJcblx0XHRzZXRuZXdfeHooc3RhdGUsIG5ld194eikge1xyXG5cdFx0XHRzdGF0ZS5uZXdfeHogPSBuZXdfeHp8fFtdO1xyXG5cdFx0fSxcclxuXHRcdC8v5paw6aKYXHJcblx0XHRzZXRuZXdfcHJvYmxlbShzdGF0ZSwgbmV3X3Byb2JsZW0pIHtcclxuXHRcdFx0c3RhdGUubmV3X3Byb2JsZW0gPSBuZXdfcHJvYmxlbXx8W10gO1xyXG5cdFx0fSxcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),
/* 14 */
/*!*******************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/common/event.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var listener = new Map();\nvar fire_event = {\n  on: function on(page, type, callBack) {\n    if (!listener.hasOwnProperty(page)) {\n      listener[page] = new Map();\n    }\n    //if(!listener[page].hasOwnProperty(type)){\n    listener[page][type] = callBack;\n    //}\n    return fire_event;\n  },\n  trigger: function trigger(options) {\n    var myObj = {\n      type: options.type,\n      page: options.page || 'all' };\n\n    //debugger;\n    if (myObj.page == 'all') {\n      for (var key in listener) {\n        if (listener[key][myObj.type]) {\n          var ret = listener[key][myObj.type].call(this, options);\n          if (options.success) {ret ? options.success(ret) : options.success();}\n        }\n      }\n    } else {\n      if (listener.hasOwnProperty(myObj.page)) {\n        if (listener[myObj.page][myObj.type]) {\n          var ret = listener[myObj.page][myObj.type].call(this, options);\n          if (options.success) {ret ? options.success(ret) : options.success();}\n        }\n      }\n    }\n  },\n  remove: function remove(page, type) {\n    if (page) {\n      if (type) {\n        delete listener[page][type];\n      } else {\n        delete listener[page];\n      }\n    }\n  } };\n\n\n\nmodule.exports = fire_event;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2V2ZW50LmpzIl0sIm5hbWVzIjpbImxpc3RlbmVyIiwiTWFwIiwiZmlyZV9ldmVudCIsIm9uIiwicGFnZSIsInR5cGUiLCJjYWxsQmFjayIsImhhc093blByb3BlcnR5IiwidHJpZ2dlciIsIm9wdGlvbnMiLCJteU9iaiIsImtleSIsInJldCIsImNhbGwiLCJzdWNjZXNzIiwicmVtb3ZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsUUFBUSxHQUFHLElBQUlDLEdBQUosRUFBZjtBQUNBLElBQUlDLFVBQVUsR0FBRztBQUNoQkMsSUFBRSxFQUFDLFlBQVNDLElBQVQsRUFBY0MsSUFBZCxFQUFtQkMsUUFBbkIsRUFBNEI7QUFDOUIsUUFBRyxDQUFDTixRQUFRLENBQUNPLGNBQVQsQ0FBd0JILElBQXhCLENBQUosRUFBa0M7QUFDakNKLGNBQVEsQ0FBQ0ksSUFBRCxDQUFSLEdBQWlCLElBQUlILEdBQUosRUFBakI7QUFDQTtBQUNEO0FBQ0NELFlBQVEsQ0FBQ0ksSUFBRCxDQUFSLENBQWVDLElBQWYsSUFBdUJDLFFBQXZCO0FBQ0Q7QUFDQSxXQUFPSixVQUFQO0FBQ0EsR0FUZTtBQVVoQk0sU0FBTyxFQUFDLGlCQUFTQyxPQUFULEVBQWlCO0FBQ3hCLFFBQUlDLEtBQUssR0FBRztBQUNYTCxVQUFJLEVBQUNJLE9BQU8sQ0FBQ0osSUFERjtBQUVYRCxVQUFJLEVBQUNLLE9BQU8sQ0FBQ0wsSUFBUixJQUFnQixLQUZWLEVBQVo7O0FBSUE7QUFDQSxRQUFHTSxLQUFLLENBQUNOLElBQU4sSUFBYyxLQUFqQixFQUF1QjtBQUN0QixXQUFJLElBQUlPLEdBQVIsSUFBZVgsUUFBZixFQUF3QjtBQUN2QixZQUFHQSxRQUFRLENBQUNXLEdBQUQsQ0FBUixDQUFjRCxLQUFLLENBQUNMLElBQXBCLENBQUgsRUFBNkI7QUFDNUIsY0FBSU8sR0FBRyxHQUFHWixRQUFRLENBQUNXLEdBQUQsQ0FBUixDQUFjRCxLQUFLLENBQUNMLElBQXBCLEVBQTBCUSxJQUExQixDQUErQixJQUEvQixFQUFvQ0osT0FBcEMsQ0FBVjtBQUNBLGNBQUdBLE9BQU8sQ0FBQ0ssT0FBWCxFQUFtQixDQUFDRixHQUFHLEdBQUNILE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkYsR0FBaEIsQ0FBRCxHQUFzQkgsT0FBTyxDQUFDSyxPQUFSLEVBQXpCLENBQTJDO0FBQy9EO0FBQ0Q7QUFDRCxLQVBELE1BT0s7QUFDSixVQUFHZCxRQUFRLENBQUNPLGNBQVQsQ0FBd0JHLEtBQUssQ0FBQ04sSUFBOUIsQ0FBSCxFQUF1QztBQUN0QyxZQUFHSixRQUFRLENBQUNVLEtBQUssQ0FBQ04sSUFBUCxDQUFSLENBQXFCTSxLQUFLLENBQUNMLElBQTNCLENBQUgsRUFBb0M7QUFDbkMsY0FBSU8sR0FBRyxHQUFHWixRQUFRLENBQUNVLEtBQUssQ0FBQ04sSUFBUCxDQUFSLENBQXFCTSxLQUFLLENBQUNMLElBQTNCLEVBQWlDUSxJQUFqQyxDQUFzQyxJQUF0QyxFQUEyQ0osT0FBM0MsQ0FBVjtBQUNBLGNBQUdBLE9BQU8sQ0FBQ0ssT0FBWCxFQUFtQixDQUFDRixHQUFHLEdBQUNILE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkYsR0FBaEIsQ0FBRCxHQUFzQkgsT0FBTyxDQUFDSyxPQUFSLEVBQXpCLENBQTJDO0FBQy9EO0FBQ0Q7QUFDRDtBQUNELEdBL0JlO0FBZ0NoQkMsUUFBTSxFQUFDLGdCQUFTWCxJQUFULEVBQWNDLElBQWQsRUFBbUI7QUFDekIsUUFBR0QsSUFBSCxFQUFRO0FBQ1AsVUFBR0MsSUFBSCxFQUFRO0FBQ1AsZUFBT0wsUUFBUSxDQUFDSSxJQUFELENBQVIsQ0FBZUMsSUFBZixDQUFQO0FBQ0EsT0FGRCxNQUVLO0FBQ0osZUFBT0wsUUFBUSxDQUFDSSxJQUFELENBQWY7QUFDQTtBQUNEO0FBQ0QsR0F4Q2UsRUFBakI7Ozs7QUE0Q0FZLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmYsVUFBakIiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbGlzdGVuZXIgPSBuZXcgTWFwKCk7XHJcbnZhciBmaXJlX2V2ZW50ID0ge1xyXG5cdG9uOmZ1bmN0aW9uKHBhZ2UsdHlwZSxjYWxsQmFjayl7XHJcblx0XHRpZighbGlzdGVuZXIuaGFzT3duUHJvcGVydHkocGFnZSkpe1xyXG5cdFx0XHRsaXN0ZW5lcltwYWdlXSA9IG5ldyBNYXAoKTtcclxuXHRcdH1cclxuXHRcdC8vaWYoIWxpc3RlbmVyW3BhZ2VdLmhhc093blByb3BlcnR5KHR5cGUpKXtcclxuXHRcdFx0bGlzdGVuZXJbcGFnZV1bdHlwZV0gPSBjYWxsQmFjaztcclxuXHRcdC8vfVxyXG5cdFx0cmV0dXJuIGZpcmVfZXZlbnQ7XHJcblx0fSxcdFxyXG5cdHRyaWdnZXI6ZnVuY3Rpb24ob3B0aW9ucyl7XHJcblx0XHR2YXIgbXlPYmogPSB7XHJcblx0XHRcdHR5cGU6b3B0aW9ucy50eXBlLFxyXG5cdFx0XHRwYWdlOm9wdGlvbnMucGFnZSB8fCAnYWxsJ1xyXG5cdFx0fTtcclxuXHRcdC8vZGVidWdnZXI7XHJcblx0XHRpZihteU9iai5wYWdlID09ICdhbGwnKXtcclxuXHRcdFx0Zm9yKHZhciBrZXkgaW4gbGlzdGVuZXIpe1xyXG5cdFx0XHRcdGlmKGxpc3RlbmVyW2tleV1bbXlPYmoudHlwZV0pe1xyXG5cdFx0XHRcdFx0dmFyIHJldCA9IGxpc3RlbmVyW2tleV1bbXlPYmoudHlwZV0uY2FsbCh0aGlzLG9wdGlvbnMpO1xyXG5cdFx0XHRcdFx0aWYob3B0aW9ucy5zdWNjZXNzKXtyZXQ/b3B0aW9ucy5zdWNjZXNzKHJldCk6b3B0aW9ucy5zdWNjZXNzKCl9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYobGlzdGVuZXIuaGFzT3duUHJvcGVydHkobXlPYmoucGFnZSkpe1xyXG5cdFx0XHRcdGlmKGxpc3RlbmVyW215T2JqLnBhZ2VdW215T2JqLnR5cGVdKXtcclxuXHRcdFx0XHRcdHZhciByZXQgPSBsaXN0ZW5lcltteU9iai5wYWdlXVtteU9iai50eXBlXS5jYWxsKHRoaXMsb3B0aW9ucyk7XHJcblx0XHRcdFx0XHRpZihvcHRpb25zLnN1Y2Nlc3Mpe3JldD9vcHRpb25zLnN1Y2Nlc3MocmV0KTpvcHRpb25zLnN1Y2Nlc3MoKX1cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0cmVtb3ZlOmZ1bmN0aW9uKHBhZ2UsdHlwZSl7XHJcblx0XHRpZihwYWdlKXtcclxuXHRcdFx0aWYodHlwZSl7XHJcblx0XHRcdFx0ZGVsZXRlIGxpc3RlbmVyW3BhZ2VdW3R5cGVdXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGRlbGV0ZSBsaXN0ZW5lcltwYWdlXVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZmlyZV9ldmVudDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!************************************************************************************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/pages/map_dw/map_dw.nvue?vue&type=style&index=0&id=22152c28&scoped=true&lang=css&mpType=page ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_style_index_0_id_22152c28_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--7-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./map_dw.nvue?vue&type=style&index=0&id=22152c28&scoped=true&lang=css&mpType=page */ 16);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_style_index_0_id_22152c28_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_style_index_0_id_22152c28_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_style_index_0_id_22152c28_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_style_index_0_id_22152c28_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_dw_nvue_vue_type_style_index_0_id_22152c28_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/phpStudy/WWW/71_jiushengquan/pages/map_dw/map_dw.nvue?vue&type=style&index=0&id=22152c28&scoped=true&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "minh100": {
    "width": "750"
  },
  "index_map": {
    "width": "750",
    "flex": 1
  },
  "map_search_box": {
    "width": 690,
    "height": 107,
    "backgroundColor": "#FFFFFF",
    "boxShadow": "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    "borderRadius": "4",
    "position": "relative",
    "top": 30,
    "left": 30,
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30"
  },
  "map_search_int": {
    "flex": 1,
    "fontSize": 32,
    "color": "#333333"
  },
  "map_search_btn": {
    "width": 624,
    "height": 86,
    "backgroundColor": "#609AEC",
    "borderRadius": "4",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "absolute",
    "bottom": 50,
    "left": 60,
    "fontSize": 30,
    "color": "#FFFFFF"
  },
  "bj_box": {
    "position": "fixed",
    "bottom": 230,
    "right": 30,
    "zIndex": 999998,
    "width": 114,
    "height": 114,
    "backgroundColor": "#FFFFFF",
    "boxShadow": "0px 0px 21upx 0px rgba(0, 0, 0, 0.16)",
    "borderRadius": 50
  },
  "bj_box_img": {
    "width": 114,
    "height": 114
  },
  "bj_main": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "width": "750",
    "backgroundColor": "rgba(0,0,0,0.8)",
    "zIndex": 999999,
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "bj_cnum": {
    "width": 508,
    "height": 508,
    "backgroundColor": "#FF0000",
    "borderRadius": 508,
    "paddingTop": 36,
    "paddingRight": 36,
    "paddingBottom": 36,
    "paddingLeft": 36,
    "marginBottom": 50
  },
  "bj_cnum_1": {
    "width": "436",
    "height": "436",
    "backgroundColor": "#FF0000",
    "borderColor": "#FFFFFF",
    "borderStyle": "solid",
    "borderWidth": "4",
    "borderRadius": "436",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "bj_cnum_num": {
    "fontSize": 300,
    "fontFamily": "DIN",
    "fontWeight": "500",
    "color": "#FFFFFF"
  },
  "bj_tip": {
    "fontSize": 30,
    "color": "#ffffff"
  },
  "@VERSION": 2
}

/***/ }),
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/*!****************************************************************!*\
  !*** E:/phpStudy/WWW/71_jiushengquan/common/dc-torch/torch.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n/**\r\n * 打开闪光灯\r\n */\nfunction onTorch() {\n  try {\n    var os = plus.os.name;\n    if ('iOS' == os) {\n      var device = plus.ios.invoke('AVCaptureDevice', 'defaultDeviceWithMediaType:', 'vide');\n      plus.ios.invoke(device, 'lockForConfiguration:', null);\n      plus.ios.invoke(device, 'setTorchMode:', 1);\n      plus.ios.invoke(device, 'setFlashMode:', 1);\n      plus.ios.invoke(device, 'unlockForConfiguration');\n    } else {\n      var main = plus.android.runtimeMainActivity();\n      var camera = main.getSystemService('camera');\n      var ids = plus.android.invoke(camera, 'getCameraIdList');\n      for (var i = 0; i < ids.length; i++) {\n        var c = plus.android.invoke(camera, 'getCameraCharacteristics', ids[i]);\n        var available = plus.android.invoke(c, 'get', plus.android.getAttribute(c, 'FLASH_INFO_AVAILABLE'));\n        var facing = plus.android.invoke(c, 'get', plus.android.getAttribute(c, 'LENS_FACING'));\n        if (null != available && available && null != facing && 1 == facing) {\n          plus.android.invoke(camera, 'setTorchMode', ids[i], true);\n        }\n      }\n    }\n  } catch (e) {\n    __f__(\"error\", 'error @onTorch!!', \" at common/dc-torch/torch.js:28\");\n  }\n}\n\n/**\r\n   * 关闭闪光灯\r\n   */\nfunction offTorch() {\n  try {\n    var os = plus.os.name;\n    if ('iOS' == os) {\n      var device = plus.ios.invoke('AVCaptureDevice', 'defaultDeviceWithMediaType:', 'vide');\n      plus.ios.invoke(device, 'lockForConfiguration:', null);\n      plus.ios.invoke(device, 'setTorchMode:', 0);\n      plus.ios.invoke(device, 'setFlashMode:', 0);\n      plus.ios.invoke(device, 'unlockForConfiguration');\n    } else {\n      var main = plus.android.runtimeMainActivity();\n      var camera = main.getSystemService('camera');\n      var ids = plus.android.invoke(camera, 'getCameraIdList');\n      for (var i = 0; i < ids.length; i++) {\n        var c = plus.android.invoke(camera, 'getCameraCharacteristics', ids[i]);\n        var available = plus.android.invoke(c, 'get', plus.android.getAttribute(c, 'FLASH_INFO_AVAILABLE'));\n        var facing = plus.android.invoke(c, 'get', plus.android.getAttribute(c, 'LENS_FACING'));\n        if (null != available && available && null != facing && 1 == facing) {\n          plus.android.invoke(camera, 'setTorchMode', ids[i], false);\n        }\n      }\n    }\n  } catch (e) {\n    __f__(\"error\", 'error @offTorch!!', \" at common/dc-torch/torch.js:58\");\n  }\n}\n\n\nmodule.exports = {\n  on: onTorch,\n  off: offTorch };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2RjLXRvcmNoL3RvcmNoLmpzIl0sIm5hbWVzIjpbIm9uVG9yY2giLCJvcyIsInBsdXMiLCJuYW1lIiwiZGV2aWNlIiwiaW9zIiwiaW52b2tlIiwibWFpbiIsImFuZHJvaWQiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiY2FtZXJhIiwiZ2V0U3lzdGVtU2VydmljZSIsImlkcyIsImkiLCJsZW5ndGgiLCJjIiwiYXZhaWxhYmxlIiwiZ2V0QXR0cmlidXRlIiwiZmFjaW5nIiwiZSIsIm9mZlRvcmNoIiwibW9kdWxlIiwiZXhwb3J0cyIsIm9uIiwib2ZmIl0sIm1hcHBpbmdzIjoiO0FBQ0E7OztBQUdBLFNBQVNBLE9BQVQsR0FBa0I7QUFDakIsTUFBRztBQUNILFFBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFDRCxFQUFMLENBQVFFLElBQWpCO0FBQ0EsUUFBRyxTQUFTRixFQUFaLEVBQWU7QUFDZCxVQUFJRyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTQyxNQUFULENBQWdCLGlCQUFoQixFQUFtQyw2QkFBbkMsRUFBa0UsTUFBbEUsQ0FBYjtBQUNBSixVQUFJLENBQUNHLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQkYsTUFBaEIsRUFBd0IsdUJBQXhCLEVBQWlELElBQWpEO0FBQ0FGLFVBQUksQ0FBQ0csR0FBTCxDQUFTQyxNQUFULENBQWdCRixNQUFoQixFQUF3QixlQUF4QixFQUF5QyxDQUF6QztBQUNBRixVQUFJLENBQUNHLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQkYsTUFBaEIsRUFBd0IsZUFBeEIsRUFBeUMsQ0FBekM7QUFDQUYsVUFBSSxDQUFDRyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0JGLE1BQWhCLEVBQXdCLHdCQUF4QjtBQUNBLEtBTkQsTUFNSztBQUNKLFVBQUlHLElBQUksR0FBR0wsSUFBSSxDQUFDTSxPQUFMLENBQWFDLG1CQUFiLEVBQVg7QUFDQSxVQUFJQyxNQUFNLEdBQUdILElBQUksQ0FBQ0ksZ0JBQUwsQ0FB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OEJiLElBQUksQ0FBQ00sT0FBTCxDQUFhUyxZQUFiLENBQTBCRixDQUExQixFQUE2QixzQkFBN0IsQ0FBOUIsQ0FBaEI7QUFDQSxZQUFJRyxNQUFNLEdBQUdoQixJQUFJLENBQUNNLE9BQUwsQ0FBYUYsTUFBYixDQUFvQlMsQ0FBcEIsRUFBdUIsS0FBdkIsRUFBOEJiLElBQUksQ0FBQ00sT0FBTCxDQUFhUyxZQUFiLENBQTBCRixDQUExQixFQUE2QixhQUE3QixDQUE5QixDQUFiO0FBQ0EsWUFBRyxRQUFNQyxTQUFOLElBQWlCQSxTQUFqQixJQUE0QixRQUFNRSxNQUFsQyxJQUEwQyxLQUFHQSxNQUFoRCxFQUF1RDtBQUN0RGhCLGNBQUksQ0FBQ00sT0FBTCxDQUFhRixNQUFiLENBQW9CSSxNQUFwQixFQUE0QixjQUE1QixFQUE0Q0UsR0FBRyxDQUFDQyxDQUFELENBQS9DLEVBQW9ELEtBQXBEO0FBQ0E7QUFDRDtBQUNEO0FBQ0EsR0FyQkQsQ0FxQkMsT0FBTU0sQ0FBTixFQUFRO0FBQ1IsbUJBQWMsbUJBQWQ7QUFDQTtBQUNEOzs7QUFHREUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCQyxJQUFFLEVBQUV2QixPQURZO0FBRWhCd0IsS0FBRyxFQUFFSixRQUZXLEVBQWpCLEMiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIOaJk+W8gOmXquWFieeBr1xyXG4gKi9cclxuZnVuY3Rpb24gb25Ub3JjaCgpe1xyXG5cdHRyeXtcclxuXHR2YXIgb3MgPSBwbHVzLm9zLm5hbWU7XHJcblx0aWYoJ2lPUycgPT0gb3Mpe1xyXG5cdFx0dmFyIGRldmljZSA9IHBsdXMuaW9zLmludm9rZSgnQVZDYXB0dXJlRGV2aWNlJywgJ2RlZmF1bHREZXZpY2VXaXRoTWVkaWFUeXBlOicsICd2aWRlJyk7XHJcblx0XHRwbHVzLmlvcy5pbnZva2UoZGV2aWNlLCAnbG9ja0ZvckNvbmZpZ3VyYXRpb246JywgbnVsbCk7XHJcblx0XHRwbHVzLmlvcy5pbnZva2UoZGV2aWNlLCAnc2V0VG9yY2hNb2RlOicsIDEpO1xyXG5cdFx0cGx1cy5pb3MuaW52b2tlKGRldmljZSwgJ3NldEZsYXNoTW9kZTonLCAxKTtcclxuXHRcdHBsdXMuaW9zLmludm9rZShkZXZpY2UsICd1bmxvY2tGb3JDb25maWd1cmF0aW9uJyk7XHJcblx0fWVsc2V7XHJcblx0XHR2YXIgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XHJcblx0XHR2YXIgY2FtZXJhID0gbWFpbi5nZXRTeXN0ZW1TZXJ2aWNlKCdjYW1lcmEnKTtcclxuXHRcdHZhciBpZHMgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGNhbWVyYSwgJ2dldENhbWVyYUlkTGlzdCcpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGMgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGNhbWVyYSwgJ2dldENhbWVyYUNoYXJhY3RlcmlzdGljcycsIGlkc1tpXSk7XHJcblx0XHRcdHZhciBhdmFpbGFibGUgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGMsICdnZXQnLCBwbHVzLmFuZHJvaWQuZ2V0QXR0cmlidXRlKGMsICdGTEFTSF9JTkZPX0FWQUlMQUJMRScpKTtcclxuXHRcdFx0dmFyIGZhY2luZyA9IHBsdXMuYW5kcm9pZC5pbnZva2UoYywgJ2dldCcsIHBsdXMuYW5kcm9pZC5nZXRBdHRyaWJ1dGUoYywgJ0xFTlNfRkFDSU5HJykpO1xyXG5cdFx0XHRpZihudWxsIT1hdmFpbGFibGUmJmF2YWlsYWJsZSYmbnVsbCE9ZmFjaW5nJiYxPT1mYWNpbmcpe1xyXG5cdFx0XHRcdHBsdXMuYW5kcm9pZC5pbnZva2UoY2FtZXJhLCAnc2V0VG9yY2hNb2RlJywgaWRzW2ldLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHR9Y2F0Y2goZSl7XHJcblx0XHRjb25zb2xlLmVycm9yKCdlcnJvciBAb25Ub3JjaCEhJyk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICog5YWz6Zet6Zeq5YWJ54GvXHJcbiAqL1xyXG5mdW5jdGlvbiBvZmZUb3JjaCgpe1xyXG5cdHRyeXtcclxuXHR2YXIgb3MgPSBwbHVzLm9zLm5hbWU7XHJcblx0aWYoJ2lPUycgPT0gb3Mpe1xyXG5cdFx0dmFyIGRldmljZSA9IHBsdXMuaW9zLmludm9rZSgnQVZDYXB0dXJlRGV2aWNlJywgJ2RlZmF1bHREZXZpY2VXaXRoTWVkaWFUeXBlOicsICd2aWRlJyk7XHJcblx0XHRwbHVzLmlvcy5pbnZva2UoZGV2aWNlLCAnbG9ja0ZvckNvbmZpZ3VyYXRpb246JywgbnVsbCk7XHJcblx0XHRwbHVzLmlvcy5pbnZva2UoZGV2aWNlLCAnc2V0VG9yY2hNb2RlOicsIDApO1xyXG5cdFx0cGx1cy5pb3MuaW52b2tlKGRldmljZSwgJ3NldEZsYXNoTW9kZTonLCAwKTtcclxuXHRcdHBsdXMuaW9zLmludm9rZShkZXZpY2UsICd1bmxvY2tGb3JDb25maWd1cmF0aW9uJyk7XHJcblx0fWVsc2V7XHJcblx0XHR2YXIgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XHJcblx0XHR2YXIgY2FtZXJhID0gbWFpbi5nZXRTeXN0ZW1TZXJ2aWNlKCdjYW1lcmEnKTtcclxuXHRcdHZhciBpZHMgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGNhbWVyYSwgJ2dldENhbWVyYUlkTGlzdCcpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGMgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGNhbWVyYSwgJ2dldENhbWVyYUNoYXJhY3RlcmlzdGljcycsIGlkc1tpXSk7XHJcblx0XHRcdHZhciBhdmFpbGFibGUgPSBwbHVzLmFuZHJvaWQuaW52b2tlKGMsICdnZXQnLCBwbHVzLmFuZHJvaWQuZ2V0QXR0cmlidXRlKGMsICdGTEFTSF9JTkZPX0FWQUlMQUJMRScpKTtcclxuXHRcdFx0dmFyIGZhY2luZyA9IHBsdXMuYW5kcm9pZC5pbnZva2UoYywgJ2dldCcsIHBsdXMuYW5kcm9pZC5nZXRBdHRyaWJ1dGUoYywgJ0xFTlNfRkFDSU5HJykpO1xyXG5cdFx0XHRpZihudWxsIT1hdmFpbGFibGUmJmF2YWlsYWJsZSYmbnVsbCE9ZmFjaW5nJiYxPT1mYWNpbmcpe1xyXG5cdFx0XHRcdHBsdXMuYW5kcm9pZC5pbnZva2UoY2FtZXJhLCAnc2V0VG9yY2hNb2RlJywgaWRzW2ldLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0fWNhdGNoKGUpe1xyXG5cdFx0Y29uc29sZS5lcnJvcignZXJyb3IgQG9mZlRvcmNoISEnKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRvbjogb25Ub3JjaCxcclxuXHRvZmY6IG9mZlRvcmNoXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ })
/******/ ]);