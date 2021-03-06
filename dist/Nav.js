(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(7)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(6),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\my\\vue2-nav\\src\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84170e92", Component.options)
  } else {
    hotAPI.reload("data-v-84170e92", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "nav",
  data() {
    return {};
  },
  props: {
    /*
    * 设置对象
    * title:设置标题(当isdiy为真，以HTML绑定)
    * return_hide:是否显示返回箭头
    * isdiy:是否DIY标题内容
    * isbutton:是否显示按钮
    * button_text:右边按钮文本
    * button(on):emit
    */
    setting: {
      title: "默认标题",
      isdiy: false,
      return_hide: true,
      isbutton: false,
      button_text: "默认文本"
    }
  },
  methods: {
    _return() {
      this.$router.go(-1);
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_vue__);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__app_vue___default.a);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.navx {\r\n  background-image: -webkit-linear-gradient(0deg, #31d375, #1cc2a0);\r\n  height: 0.94rem;\r\n  position: relative;\r\n  top: 0;\r\n  z-index: 99999;\r\n  width: 7.5rem;\r\n  line-height: 0.94rem;\r\n  color: #ffffff;\r\n  display: -webkit-box;\r\n  font-family: \"ArialMT\";\n}\n.navx .left,\r\n.navx .right {\r\n  position: absolute;\r\n  line-height: 0.94rem;\n}\n.navx .left {\r\n  padding-left: 0.15rem;\n}\n.navx .right {\r\n  right: 0.2rem;\r\n  font-size: 0.32rem;\n}\n.navx .title {\r\n  line-height: 0.94rem;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 0.36rem;\n}\n.navx .diy {\r\n  width: 100%;\n}\n.navx img {\r\n  width: 0.32rem;\r\n  height: 0.32rem;\r\n  vertical-align: middle;\n}\r\n", "", {"version":3,"sources":["E:/my/vue2-nav/src/app.vue?4b6256f0"],"names":[],"mappings":";AAwCA;EACA,kEAAA;EACA,gBAAA;EACA,mBAAA;EACA,OAAA;EACA,eAAA;EACA,cAAA;EACA,qBAAA;EACA,eAAA;EACA,qBAAA;EACA,uBAAA;CACA;AACA;;EAEA,mBAAA;EACA,qBAAA;CACA;AACA;EACA,sBAAA;CACA;AACA;EACA,cAAA;EACA,mBAAA;CACA;AACA;EACA,qBAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;CACA;AACA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;CACA","file":"app.vue","sourcesContent":["<template>  \r\n    <div class=\"navx\">  \r\n        <div class=\"left\" v-if=\"setting.return_hide\" @click=\"_return\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3klEQVRYR73XURHCMBCE4V1pKCgogDpAAihAAnUAEnB2nczkqUNocrdHBOT/mpedEknHzBYAE4ATyU8rw4x+jZ/r3Ye/AjbxmWR5ieaRvsBovKhkAE9cBvDGJYBIPAyIxkMARdwNUMVdAGV8GKCODwEy4t2ArHgXIDO+CzCzK4BHXZLdYfEs688tMLMjgFe9eCE5eyKhNTSzC4BnFqJrDTMRXYDy9VmIbkAWYgiQgRgGqBEugBLhBqgQIYACEQZEERJABCEDeBFSgAchB3xB3EneWouYAtggyu/5uwVYAbK9oCHuVnLdAAAAAElFTkSuQmCC\"/></div>\r\n        <div class=\"title\" v-if=\"!setting.isdiy\">{{setting.title}}</div>\r\n        <div class=\"diy\" v-if=\"setting.isdiy\" v-html=\"setting.title\"></div>\r\n        <div class=\"right\" @click=\"$emit('button')\" v-if=\"setting.isbutton\">{{setting.button_text}}</div>\r\n    </div>  \r\n</template>  \r\n<script>\r\nexport default {\r\n  name: \"nav\",\r\n  data() {\r\n    return {};\r\n  },\r\n  props: {\r\n    /*\r\n    * 设置对象\r\n    * title:设置标题(当isdiy为真，以HTML绑定)\r\n    * return_hide:是否显示返回箭头\r\n    * isdiy:是否DIY标题内容\r\n    * isbutton:是否显示按钮\r\n    * button_text:右边按钮文本\r\n    * button(on):emit\r\n    */\r\n    setting: {\r\n      title: \"默认标题\",\r\n      isdiy: false,\r\n      return_hide: true,\r\n      isbutton: false,\r\n      button_text: \"默认文本\"\r\n    }\r\n  },\r\n  methods: {\r\n    _return() {\r\n        this.$router.go(-1);\r\n    }\r\n  }\r\n};\r\n</script> \r\n<style>\r\n.navx {\r\n  background-image: -webkit-linear-gradient(0deg, #31d375, #1cc2a0);\r\n  height: 0.94rem;\r\n  position: relative;\r\n  top: 0;\r\n  z-index: 99999;\r\n  width: 7.5rem;\r\n  line-height: 0.94rem;\r\n  color: #ffffff;\r\n  display: -webkit-box;\r\n  font-family: \"ArialMT\";\r\n}\r\n.navx .left,\r\n.navx .right {\r\n  position: absolute;\r\n  line-height: 0.94rem;\r\n}\r\n.navx .left {\r\n  padding-left: 0.15rem;\r\n}\r\n.navx .right {\r\n  right: 0.2rem;\r\n  font-size: 0.32rem;\r\n}\r\n.navx .title {\r\n  line-height: 0.94rem;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 0.36rem;\r\n}\r\n.navx .diy {\r\n  width: 100%;\r\n}\r\n.navx img {\r\n  width: 0.32rem;\r\n  height: 0.32rem;\r\n  vertical-align: middle;\r\n}\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "navx"
  }, [(_vm.setting.return_hide) ? _c('div', {
    staticClass: "left",
    on: {
      "click": _vm._return
    }
  }, [_c('img', {
    attrs: {
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3klEQVRYR73XURHCMBCE4V1pKCgogDpAAihAAnUAEnB2nczkqUNocrdHBOT/mpedEknHzBYAE4ATyU8rw4x+jZ/r3Ye/AjbxmWR5ieaRvsBovKhkAE9cBvDGJYBIPAyIxkMARdwNUMVdAGV8GKCODwEy4t2ArHgXIDO+CzCzK4BHXZLdYfEs688tMLMjgFe9eCE5eyKhNTSzC4BnFqJrDTMRXYDy9VmIbkAWYgiQgRgGqBEugBLhBqgQIYACEQZEERJABCEDeBFSgAchB3xB3EneWouYAtggyu/5uwVYAbK9oCHuVnLdAAAAAElFTkSuQmCC"
    }
  })]) : _vm._e(), _vm._v(" "), (!_vm.setting.isdiy) ? _c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.setting.title))]) : _vm._e(), _vm._v(" "), (_vm.setting.isdiy) ? _c('div', {
    staticClass: "diy",
    domProps: {
      "innerHTML": _vm._s(_vm.setting.title)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.setting.isbutton) ? _c('div', {
    staticClass: "right",
    on: {
      "click": function($event) {
        _vm.$emit('button')
      }
    }
  }, [_vm._v(_vm._s(_vm.setting.button_text))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-84170e92", module.exports)
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("7be6ca3d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-84170e92\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-84170e92\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(9)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=Nav.js.map