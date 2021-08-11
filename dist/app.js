require("./runtime");
require("./common");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/app.tsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/app.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_dva__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/dva */ "./src/utils/dva.ts");
/* harmony import */ var _assets_font_iconfont_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/font/iconfont.scss */ "./src/assets/font/iconfont.scss");
/* harmony import */ var _assets_font_iconfont_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_font_iconfont_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models */ "./src/models/index.ts");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_9__);










var dvaApp = _utils_dva__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].createApp({
  initialState: {},
  models: _models__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]
});
var store = dvaApp.getStore();

var App = /*#__PURE__*/function (_Component) {
  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(App, _Component);

  var _super = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(App);

  function App() {
    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {} // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[/* Provider */ "a"], {
        store: store
      }, this.props.children);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
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

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/dva-core/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/dva-core/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: saga, create, utils */
/*! exports used: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* unused harmony export utils */
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_plain_object__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var flatten__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flatten */ "./node_modules/flatten/index.js");
/* harmony import */ var flatten__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flatten__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13__);

















var isArray = Array.isArray.bind(Array);
var isFunction = function isFunction(o) {
  return typeof o === 'function';
};
var returnSelf = function returnSelf(m) {
  return m;
};
var noop = function noop() {};
var findIndex = function findIndex(array, predicate) {
  for (var i = 0, length = array.length; i < length; i += 1) {
    if (predicate(array[i], i)) return i;
  }

  return -1;
};

var utils = /*#__PURE__*/Object.freeze({
  isPlainObject: is_plain_object__WEBPACK_IMPORTED_MODULE_5___default.a,
  isArray: isArray,
  isFunction: isFunction,
  returnSelf: returnSelf,
  noop: noop,
  findIndex: findIndex
});

function checkModel(model, existModels) {
  var namespace = model.namespace,
      reducers = model.reducers,
      effects = model.effects,
      subscriptions = model.subscriptions; // namespace 必须被定义

  invariant__WEBPACK_IMPORTED_MODULE_3___default()(namespace, "[app.model] namespace should be defined"); // 并且是字符串

  invariant__WEBPACK_IMPORTED_MODULE_3___default()(typeof namespace === 'string', "[app.model] namespace should be string, but got ".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(namespace))); // 并且唯一

  invariant__WEBPACK_IMPORTED_MODULE_3___default()(!existModels.some(function (model) {
    return model.namespace === namespace;
  }), "[app.model] namespace should be unique"); // state 可以为任意值
  // reducers 可以为空，PlainObject 或者数组

  if (reducers) {
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(is_plain_object__WEBPACK_IMPORTED_MODULE_5___default()(reducers) || isArray(reducers), "[app.model] reducers should be plain object or array, but got ".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(reducers))); // 数组的 reducers 必须是 [Object, Function] 的格式

    invariant__WEBPACK_IMPORTED_MODULE_3___default()(!isArray(reducers) || is_plain_object__WEBPACK_IMPORTED_MODULE_5___default()(reducers[0]) && isFunction(reducers[1]), "[app.model] reducers with array should be [Object, Function]");
  } // effects 可以为空，PlainObject


  if (effects) {
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(is_plain_object__WEBPACK_IMPORTED_MODULE_5___default()(effects), "[app.model] effects should be plain object, but got ".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(effects)));
  }

  if (subscriptions) {
    // subscriptions 可以为空，PlainObject
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(is_plain_object__WEBPACK_IMPORTED_MODULE_5___default()(subscriptions), "[app.model] subscriptions should be plain object, but got ".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(subscriptions))); // subscription 必须为函数

    invariant__WEBPACK_IMPORTED_MODULE_3___default()(isAllFunction(subscriptions), "[app.model] subscription should be function");
  }
}

function isAllFunction(obj) {
  return Object.keys(obj).every(function (key) {
    return isFunction(obj[key]);
  });
}

var NAMESPACE_SEP = '/';

function prefix(obj, namespace, type) {
  return Object.keys(obj).reduce(function (memo, key) {
    warning__WEBPACK_IMPORTED_MODULE_6___default()(key.indexOf("".concat(namespace).concat(NAMESPACE_SEP)) !== 0, "[prefixNamespace]: ".concat(type, " ").concat(key, " should not be prefixed with namespace ").concat(namespace));
    var newKey = "".concat(namespace).concat(NAMESPACE_SEP).concat(key);
    memo[newKey] = obj[key];
    return memo;
  }, {});
}

function prefixNamespace(model) {
  var namespace = model.namespace,
      reducers = model.reducers,
      effects = model.effects;

  if (reducers) {
    if (isArray(reducers)) {
      model.reducers[0] = prefix(reducers[0], namespace, 'reducer');
    } else {
      model.reducers = prefix(reducers, namespace, 'reducer');
    }
  }

  if (effects) {
    model.effects = prefix(effects, namespace, 'effect');
  }

  return model;
}

var hooks = ['onError', 'onStateChange', 'onAction', 'onHmr', 'onReducer', 'onEffect', 'extraReducers', 'extraEnhancers', '_handleActions'];
function filterHooks(obj) {
  return Object.keys(obj).reduce(function (memo, key) {
    if (hooks.indexOf(key) > -1) {
      memo[key] = obj[key];
    }

    return memo;
  }, {});
}

var Plugin =
/*#__PURE__*/
function () {
  function Plugin() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this, Plugin);

    this._handleActions = null;
    this.hooks = hooks.reduce(function (memo, key) {
      memo[key] = [];
      return memo;
    }, {});
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Plugin, [{
    key: "use",
    value: function use(plugin) {
      invariant__WEBPACK_IMPORTED_MODULE_3___default()(is_plain_object__WEBPACK_IMPORTED_MODULE_5___default()(plugin), 'plugin.use: plugin should be plain object');
      var hooks = this.hooks;

      for (var key in plugin) {
        if (Object.prototype.hasOwnProperty.call(plugin, key)) {
          invariant__WEBPACK_IMPORTED_MODULE_3___default()(hooks[key], "plugin.use: unknown plugin property: ".concat(key));

          if (key === '_handleActions') {
            this._handleActions = plugin[key];
          } else if (key === 'extraEnhancers') {
            hooks[key] = plugin[key];
          } else {
            hooks[key].push(plugin[key]);
          }
        }
      }
    }
  }, {
    key: "apply",
    value: function apply(key, defaultHandler) {
      var hooks = this.hooks;
      var validApplyHooks = ['onError', 'onHmr'];
      invariant__WEBPACK_IMPORTED_MODULE_3___default()(validApplyHooks.indexOf(key) > -1, "plugin.apply: hook ".concat(key, " cannot be applied"));
      var fns = hooks[key];
      return function () {
        if (fns.length) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = fns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var fn = _step.value;
              fn.apply(void 0, arguments);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } else if (defaultHandler) {
          defaultHandler.apply(void 0, arguments);
        }
      };
    }
  }, {
    key: "get",
    value: function get(key) {
      var hooks = this.hooks;
      invariant__WEBPACK_IMPORTED_MODULE_3___default()(key in hooks, "plugin.get: hook ".concat(key, " cannot be got"));

      if (key === 'extraReducers') {
        return getExtraReducers(hooks[key]);
      } else if (key === 'onReducer') {
        return getOnReducer(hooks[key]);
      } else {
        return hooks[key];
      }
    }
  }]);

  return Plugin;
}();

function getExtraReducers(hook) {
  var ret = {};
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = hook[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var reducerObj = _step2.value;
      ret = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, ret, reducerObj);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return ret;
}

function getOnReducer(hook) {
  return function (reducer) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = hook[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var reducerEnhancer = _step3.value;
        reducer = reducerEnhancer(reducer);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return reducer;
  };
}

function createStore (_ref) {
  var reducers = _ref.reducers,
      initialState = _ref.initialState,
      plugin = _ref.plugin,
      sagaMiddleware = _ref.sagaMiddleware,
      promiseMiddleware = _ref.promiseMiddleware,
      _ref$createOpts$setup = _ref.createOpts.setupMiddlewares,
      setupMiddlewares = _ref$createOpts$setup === void 0 ? returnSelf : _ref$createOpts$setup;
  // extra enhancers
  var extraEnhancers = plugin.get('extraEnhancers');
  invariant__WEBPACK_IMPORTED_MODULE_3___default()(isArray(extraEnhancers), "[app.start] extraEnhancers should be array, but got ".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(extraEnhancers)));
  var extraMiddlewares = plugin.get('onAction');
  var middlewares = setupMiddlewares([promiseMiddleware, sagaMiddleware].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(flatten__WEBPACK_IMPORTED_MODULE_10___default()(extraMiddlewares))));
  var composeEnhancers =  true && global_window__WEBPACK_IMPORTED_MODULE_11___default.a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? global_window__WEBPACK_IMPORTED_MODULE_11___default.a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    maxAge: 30
  }) : redux__WEBPACK_IMPORTED_MODULE_1__[/* compose */ "d"];
  var enhancers = [redux__WEBPACK_IMPORTED_MODULE_1__[/* applyMiddleware */ "a"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(middlewares))].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(extraEnhancers));
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[/* createStore */ "e"])(reducers, initialState, composeEnhancers.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(enhancers)));
}

function prefixType(type, model) {
  var prefixedType = "".concat(model.namespace).concat(NAMESPACE_SEP).concat(type);
  var typeWithoutAffix = prefixedType.replace(/\/@@[^/]+?$/, '');
  var reducer = Array.isArray(model.reducers) ? model.reducers[0][typeWithoutAffix] : model.reducers && model.reducers[typeWithoutAffix];

  if (reducer || model.effects && model.effects[typeWithoutAffix]) {
    return prefixedType;
  }

  return type;
}

function getSaga(effects$1, model, onError, onEffect) {
  var opts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  return (
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(function _callee3() {
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.keys(effects$1);

            case 1:
              if ((_context3.t1 = _context3.t0()).done) {
                _context3.next = 7;
                break;
              }

              key = _context3.t1.value;

              if (!Object.prototype.hasOwnProperty.call(effects$1, key)) {
                _context3.next = 5;
                break;
              }

              return _context3.delegateYield(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(function _callee2() {
                var watcher, task;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        watcher = getWatcher(key, effects$1[key], model, onError, onEffect, opts);
                        _context2.next = 3;
                        return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].fork(watcher);

                      case 3:
                        task = _context2.sent;
                        _context2.next = 6;
                        return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].fork(
                        /*#__PURE__*/
                        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(function _callee() {
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].take("".concat(model.namespace, "/@@CANCEL_EFFECTS"));

                                case 2:
                                  _context.next = 4;
                                  return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].cancel(task);

                                case 4:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })(), "t2", 5);

            case 5:
              _context3.next = 1;
              break;

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })
  );
}

function getWatcher(key, _effect, model, onError, onEffect, opts) {
  var _marked =
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(sagaWithCatch);

  var effect = _effect;
  var type = 'takeEvery';
  var ms;
  var delayMs;

  if (Array.isArray(_effect)) {
    var _effect2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_effect, 1);

    effect = _effect2[0];
    var _opts = _effect[1];

    if (_opts && _opts.type) {
      type = _opts.type;

      if (type === 'throttle') {
        invariant__WEBPACK_IMPORTED_MODULE_3___default()(_opts.ms, 'app.start: opts.ms should be defined if type is throttle');
        ms = _opts.ms;
      }

      if (type === 'poll') {
        invariant__WEBPACK_IMPORTED_MODULE_3___default()(_opts.delay, 'app.start: opts.delay should be defined if type is poll');
        delayMs = _opts.delay;
      }
    }

    invariant__WEBPACK_IMPORTED_MODULE_3___default()(['watcher', 'takeEvery', 'takeLatest', 'throttle', 'poll'].indexOf(type) > -1, 'app.start: effect type should be takeEvery, takeLatest, throttle, poll or watcher');
  }

  function noop() {}

  function sagaWithCatch() {
    var _len,
        args,
        _key,
        _ref,
        _ref$__dva_resolve,
        resolve,
        _ref$__dva_reject,
        reject,
        ret,
        _args4 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function sagaWithCatch$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            for (_len = _args4.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args4[_key];
            }

            _ref = args.length > 0 ? args[0] : {}, _ref$__dva_resolve = _ref.__dva_resolve, resolve = _ref$__dva_resolve === void 0 ? noop : _ref$__dva_resolve, _ref$__dva_reject = _ref.__dva_reject, reject = _ref$__dva_reject === void 0 ? noop : _ref$__dva_reject;
            _context4.prev = 2;
            _context4.next = 5;
            return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].put({
              type: "".concat(key).concat(NAMESPACE_SEP, "@@start")
            });

          case 5:
            _context4.next = 7;
            return effect.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(args.concat(createEffects(model, opts))));

          case 7:
            ret = _context4.sent;
            _context4.next = 10;
            return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].put({
              type: "".concat(key).concat(NAMESPACE_SEP, "@@end")
            });

          case 10:
            resolve(ret);
            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](2);
            onError(_context4.t0, {
              key: key,
              effectArgs: args
            });

            if (!_context4.t0._dontReject) {
              reject(_context4.t0);
            }

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _marked, null, [[2, 13]]);
  }

  var sagaWithOnEffect = applyOnEffect(onEffect, sagaWithCatch, model, key);

  switch (type) {
    case 'watcher':
      return sagaWithCatch;

    case 'takeLatest':
      return (
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(function _callee4() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function _callee4$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].takeLatest(key, sagaWithOnEffect);

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee4);
        })
      );

    case 'throttle':
      return (
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(function _callee5() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function _callee5$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].throttle(ms, key, sagaWithOnEffect);

                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee5);
        })
      );

    case 'poll':
      return (
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(function _callee6() {
          var _marked2, delay, pollSagaWorker, call, take, race, action;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function _callee6$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  pollSagaWorker = function _ref3(sagaEffects, action) {
                    var call;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function pollSagaWorker$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            call = sagaEffects.call;

                          case 1:

                            _context7.next = 4;
                            return call(sagaWithOnEffect, action);

                          case 4:
                            _context7.next = 6;
                            return call(delay, delayMs);

                          case 6:
                            _context7.next = 1;
                            break;

                          case 8:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _marked2);
                  };

                  delay = function _ref2(timeout) {
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, timeout);
                    });
                  };

                  _marked2 =
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(pollSagaWorker);
                  call = redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].call, take = redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].take, race = redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].race;

                case 4:

                  _context8.next = 7;
                  return take("".concat(key, "-start"));

                case 7:
                  action = _context8.sent;
                  _context8.next = 10;
                  return race([call(pollSagaWorker, redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"], action), take("".concat(key, "-stop"))]);

                case 10:
                  _context8.next = 4;
                  break;

                case 12:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee6);
        })
      );

    default:
      return (
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(function _callee7() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function _callee7$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].takeEvery(key, sagaWithOnEffect);

                case 2:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee7);
        })
      );
  }
}

function createEffects(model, opts) {
  function assertAction(type, name) {
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(type, 'dispatch: action should be a plain Object with type');
    var _opts$namespacePrefix = opts.namespacePrefixWarning,
        namespacePrefixWarning = _opts$namespacePrefix === void 0 ? true : _opts$namespacePrefix;

    if (namespacePrefixWarning) {
      warning__WEBPACK_IMPORTED_MODULE_6___default()(type.indexOf("".concat(model.namespace).concat(NAMESPACE_SEP)) !== 0, "[".concat(name, "] ").concat(type, " should not be prefixed with namespace ").concat(model.namespace));
    }
  }

  function put(action) {
    var type = action.type;
    assertAction(type, 'sagaEffects.put');
    return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].put(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, action, {
      type: prefixType(type, model)
    }));
  } // The operator `put` doesn't block waiting the returned promise to resolve.
  // Using `put.resolve` will wait until the promsie resolve/reject before resuming.
  // It will be helpful to organize multi-effects in order,
  // and increase the reusability by seperate the effect in stand-alone pieces.
  // https://github.com/redux-saga/redux-saga/issues/336


  function putResolve(action) {
    var type = action.type;
    assertAction(type, 'sagaEffects.put.resolve');
    return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].put.resolve(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, action, {
      type: prefixType(type, model)
    }));
  }

  put.resolve = putResolve;

  function take(type) {
    if (typeof type === 'string') {
      assertAction(type, 'sagaEffects.take');
      return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].take(prefixType(type, model));
    } else if (Array.isArray(type)) {
      return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].take(type.map(function (t) {
        if (typeof t === 'string') {
          assertAction(t, 'sagaEffects.take');
          return prefixType(t, model);
        }

        return t;
      }));
    } else {
      return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].take(type);
    }
  }

  return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"], {
    put: put,
    take: take
  });
}

function applyOnEffect(fns, effect, model, key) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = fns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var fn = _step.value;
      effect = fn(effect, redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"], model, key);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return effect;
}

function identify(value) {
  return value;
}

function handleAction(actionType) {
  var reducer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identify;
  return function (state, action) {
    var type = action.type;
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(type, 'dispatch: action should be a plain Object with type');

    if (actionType === type) {
      return reducer(state, action);
    }

    return state;
  };
}

function reduceReducers() {
  for (var _len = arguments.length, reducers = new Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (previous, current) {
    return reducers.reduce(function (p, r) {
      return r(p, current);
    }, previous);
  };
}

function handleActions(handlers, defaultState) {
  var reducers = Object.keys(handlers).map(function (type) {
    return handleAction(type, handlers[type]);
  });
  var reducer = reduceReducers.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(reducers));
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    return reducer(state, action);
  };
}

function getReducer(reducers, state, handleActions$1) {
  // Support reducer enhancer
  // e.g. reducers: [realReducers, enhancer]
  if (Array.isArray(reducers)) {
    return reducers[1]((handleActions$1 || handleActions)(reducers[0], state));
  } else {
    return (handleActions$1 || handleActions)(reducers || {}, state);
  }
}

function createPromiseMiddleware(app) {
  return function () {
    return function (next) {
      return function (action) {
        var type = action.type;

        if (isEffect(type)) {
          return new Promise(function (resolve, reject) {
            next(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
              __dva_resolve: resolve,
              __dva_reject: reject
            }, action));
          });
        } else {
          return next(action);
        }
      };
    };
  };

  function isEffect(type) {
    if (!type || typeof type !== 'string') return false;

    var _type$split = type.split(NAMESPACE_SEP),
        _type$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_type$split, 1),
        namespace = _type$split2[0];

    var model = app._models.filter(function (m) {
      return m.namespace === namespace;
    })[0];

    if (model) {
      if (model.effects && model.effects[type]) {
        return true;
      }
    }

    return false;
  }
}

function prefixedDispatch(dispatch, model) {
  return function (action) {
    var type = action.type;
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(type, 'dispatch: action should be a plain Object with type');
    warning__WEBPACK_IMPORTED_MODULE_6___default()(type.indexOf("".concat(model.namespace).concat(NAMESPACE_SEP)) !== 0, "dispatch: ".concat(type, " should not be prefixed with namespace ").concat(model.namespace));
    return dispatch(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, action, {
      type: prefixType(type, model)
    }));
  };
}

function run(subs, model, app, onError) {
  var funcs = [];
  var nonFuncs = [];

  for (var key in subs) {
    if (Object.prototype.hasOwnProperty.call(subs, key)) {
      var sub = subs[key];
      var unlistener = sub({
        dispatch: prefixedDispatch(app._store.dispatch, model),
        history: app._history
      }, onError);

      if (isFunction(unlistener)) {
        funcs.push(unlistener);
      } else {
        nonFuncs.push(key);
      }
    }
  }

  return {
    funcs: funcs,
    nonFuncs: nonFuncs
  };
}
function unlisten(unlisteners, namespace) {
  if (!unlisteners[namespace]) return;
  var _unlisteners$namespac = unlisteners[namespace],
      funcs = _unlisteners$namespac.funcs,
      nonFuncs = _unlisteners$namespac.nonFuncs;
  warning__WEBPACK_IMPORTED_MODULE_6___default()(nonFuncs.length === 0, "[app.unmodel] subscription should return unlistener function, check these subscriptions ".concat(nonFuncs.join(', ')));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = funcs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var unlistener = _step.value;
      unlistener();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  delete unlisteners[namespace];
}

var noop$1 = noop,
    findIndex$1 = findIndex; // Internal model to update global state when do unmodel

var dvaModel = {
  namespace: '@@dva',
  state: 0,
  reducers: {
    UPDATE: function UPDATE(state) {
      return state + 1;
    }
  }
};
/**
 * Create dva-core instance.
 *
 * @param hooksAndOpts
 * @param createOpts
 */

function create() {
  var hooksAndOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var createOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var initialReducer = createOpts.initialReducer,
      _createOpts$setupApp = createOpts.setupApp,
      setupApp = _createOpts$setupApp === void 0 ? noop$1 : _createOpts$setupApp;
  var plugin = new Plugin();
  plugin.use(filterHooks(hooksAndOpts));
  var app = {
    _models: [prefixNamespace(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, dvaModel))],
    _store: null,
    _plugin: plugin,
    use: plugin.use.bind(plugin),
    model: model,
    start: start
  };
  return app;
  /**
   * Register model before app is started.
   *
   * @param m {Object} model to register
   */

  function model(m) {
    if (true) {
      checkModel(m, app._models);
    }

    var prefixedModel = prefixNamespace(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, m));

    app._models.push(prefixedModel);

    return prefixedModel;
  }
  /**
   * Inject model after app is started.
   *
   * @param createReducer
   * @param onError
   * @param unlisteners
   * @param m
   */


  function injectModel(createReducer, onError, unlisteners, m) {
    m = model(m);
    var store = app._store;
    store.asyncReducers[m.namespace] = getReducer(m.reducers, m.state, plugin._handleActions);
    store.replaceReducer(createReducer());

    if (m.effects) {
      store.runSaga(app._getSaga(m.effects, m, onError, plugin.get('onEffect'), hooksAndOpts));
    }

    if (m.subscriptions) {
      unlisteners[m.namespace] = run(m.subscriptions, m, app, onError);
    }
  }
  /**
   * Unregister model.
   *
   * @param createReducer
   * @param reducers
   * @param unlisteners
   * @param namespace
   *
   * Unexpected key warn problem:
   * https://github.com/reactjs/redux/issues/1636
   */


  function unmodel(createReducer, reducers, unlisteners, namespace) {
    var store = app._store; // Delete reducers

    delete store.asyncReducers[namespace];
    delete reducers[namespace];
    store.replaceReducer(createReducer());
    store.dispatch({
      type: '@@dva/UPDATE'
    }); // Cancel effects

    store.dispatch({
      type: "".concat(namespace, "/@@CANCEL_EFFECTS")
    }); // Unlisten subscrioptions

    unlisten(unlisteners, namespace); // Delete model from app._models

    app._models = app._models.filter(function (model) {
      return model.namespace !== namespace;
    });
  }
  /**
   * Replace a model if it exsits, if not, add it to app
   * Attention:
   * - Only available after dva.start gets called
   * - Will not check origin m is strict equal to the new one
   * Useful for HMR
   * @param createReducer
   * @param reducers
   * @param unlisteners
   * @param onError
   * @param m
   */


  function replaceModel(createReducer, reducers, unlisteners, onError, m) {
    var store = app._store;
    var namespace = m.namespace;
    var oldModelIdx = findIndex$1(app._models, function (model) {
      return model.namespace === namespace;
    });

    if (~oldModelIdx) {
      // Cancel effects
      store.dispatch({
        type: "".concat(namespace, "/@@CANCEL_EFFECTS")
      }); // Delete reducers

      delete store.asyncReducers[namespace];
      delete reducers[namespace]; // Unlisten subscrioptions

      unlisten(unlisteners, namespace); // Delete model from app._models

      app._models.splice(oldModelIdx, 1);
    } // add new version model to store


    app.model(m);
    store.dispatch({
      type: '@@dva/UPDATE'
    });
  }
  /**
   * Start the app.
   *
   * @returns void
   */


  function start() {
    // Global error handler
    var onError = function onError(err, extension) {
      if (err) {
        if (typeof err === 'string') err = new Error(err);

        err.preventDefault = function () {
          err._dontReject = true;
        };

        plugin.apply('onError', function (err) {
          throw new Error(err.stack || err);
        })(err, app._store.dispatch, extension);
      }
    };

    var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
    var promiseMiddleware = createPromiseMiddleware(app);
    app._getSaga = getSaga.bind(null);
    var sagas = [];

    var reducers = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, initialReducer);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = app._models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var m = _step.value;
        reducers[m.namespace] = getReducer(m.reducers, m.state, plugin._handleActions);

        if (m.effects) {
          sagas.push(app._getSaga(m.effects, m, onError, plugin.get('onEffect'), hooksAndOpts));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var reducerEnhancer = plugin.get('onReducer');
    var extraReducers = plugin.get('extraReducers');
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(Object.keys(extraReducers).every(function (key) {
      return !(key in reducers);
    }), "[app.start] extraReducers is conflict with other reducers, reducers list: ".concat(Object.keys(reducers).join(', '))); // Create store

    app._store = createStore({
      reducers: createReducer(),
      initialState: hooksAndOpts.initialState || {},
      plugin: plugin,
      createOpts: createOpts,
      sagaMiddleware: sagaMiddleware,
      promiseMiddleware: promiseMiddleware
    });
    var store = app._store; // Extend store

    store.runSaga = sagaMiddleware.run;
    store.asyncReducers = {}; // Execute listeners when state is changed

    var listeners = plugin.get('onStateChange');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop = function _loop() {
        var listener = _step2.value;
        store.subscribe(function () {
          listener(store.getState());
        });
      };

      for (var _iterator2 = listeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        _loop();
      } // Run sagas

    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    sagas.forEach(sagaMiddleware.run); // Setup app

    setupApp(app); // Run subscriptions

    var unlisteners = {};
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = this._models[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _model = _step3.value;

        if (_model.subscriptions) {
          unlisteners[_model.namespace] = run(_model.subscriptions, _model, app, onError);
        }
      } // Setup app.model and app.unmodel

    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    app.model = injectModel.bind(app, createReducer, onError, unlisteners);
    app.unmodel = unmodel.bind(app, createReducer, reducers, unlisteners);
    app.replaceModel = replaceModel.bind(app, createReducer, reducers, unlisteners, onError);
    /**
     * Create global reducer for redux.
     *
     * @returns {Object}
     */

    function createReducer() {
      return reducerEnhancer(Object(redux__WEBPACK_IMPORTED_MODULE_1__[/* combineReducers */ "c"])(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, reducers, extraReducers, app._store ? app._store.asyncReducers : {})));
    }
  }
}




/***/ }),

/***/ "./node_modules/dva-loading/dist/index.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/dva-loading/dist/index.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");




var SHOW = '@@DVA_LOADING/SHOW';
var HIDE = '@@DVA_LOADING/HIDE';
var NAMESPACE = 'loading';

function createLoading() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var namespace = opts.namespace || NAMESPACE;
  var _opts$only = opts.only,
      only = _opts$only === void 0 ? [] : _opts$only,
      _opts$except = opts.except,
      except = _opts$except === void 0 ? [] : _opts$except;

  if (only.length > 0 && except.length > 0) {
    throw Error('It is ambiguous to configurate `only` and `except` items at the same time.');
  }

  var initialState = {
    global: false,
    models: {},
    effects: {}
  };

  var extraReducers = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, namespace, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

    var _ref = arguments.length > 1 ? arguments[1] : undefined,
        type = _ref.type,
        payload = _ref.payload;

    var _ref2 = payload || {},
        namespace = _ref2.namespace,
        actionType = _ref2.actionType;

    var ret;

    switch (type) {
      case SHOW:
        ret = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state, {
          global: true,
          models: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state.models, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, namespace, true)),
          effects: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state.effects, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, actionType, true))
        });
        break;

      case HIDE:
        {
          var effects = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state.effects, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, actionType, false));

          var models = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state.models, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, namespace, Object.keys(effects).some(function (actionType) {
            var _namespace = actionType.split('/')[0];
            if (_namespace !== namespace) return false;
            return effects[actionType];
          })));

          var global = Object.keys(models).some(function (namespace) {
            return models[namespace];
          });
          ret = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state, {
            global: global,
            models: models,
            effects: effects
          });
          break;
        }

      default:
        ret = state;
        break;
    }

    return ret;
  });

  function onEffect(effect, _ref3, model, actionType) {
    var put = _ref3.put;
    var namespace = model.namespace;

    if (only.length === 0 && except.length === 0 || only.length > 0 && only.indexOf(actionType) !== -1 || except.length > 0 && except.indexOf(actionType) === -1) {
      return (
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var _args = arguments;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return put({
                    type: SHOW,
                    payload: {
                      namespace: namespace,
                      actionType: actionType
                    }
                  });

                case 2:
                  _context.next = 4;
                  return effect.apply(void 0, _args);

                case 4:
                  _context.next = 6;
                  return put({
                    type: HIDE,
                    payload: {
                      namespace: namespace,
                      actionType: actionType
                    }
                  });

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })
      );
    } else {
      return effect;
    }
  }

  return {
    extraReducers: extraReducers,
    onEffect: onEffect
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createLoading);


/***/ }),

/***/ "./node_modules/dva-model-extend/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/dva-model-extend/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = modelExtend;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var check = function check(origin, cache, count) {
  if (true) {
    for (var key in origin) {
      if (cache.indexOf(key) === -1) {
        cache.push(key);
      } else {
        count[key] ? count[key]++ : count[key] = 1;
      }
    }
  }
};

var log = function log(model, constitute, count) {
  if (true) {
    var logCount = 0;
    for (var key in count) {
      if (!logCount) {
        console.warn('Please note that some of the attributes are inherited in the ' + model.namespace + ' / ' + constitute + ':');
      }
      logCount++;
      console.warn('  -> ' + key + ' be overwritten ' + count[key] + ' time(s).');
    }
  }
};

function modelExtend() {
  var base = { state: {}, subscriptions: {}, effects: {}, reducers: {} };
  var stateCache = [];
  var stateCount = {};
  var subscriptionsCache = [];
  var subscriptionsCount = {};
  var effectsCache = [];
  var effectsCount = {};
  var reducersCache = [];
  var reducersCount = {};

  for (var _len = arguments.length, models = Array(_len), _key = 0; _key < _len; _key++) {
    models[_key] = arguments[_key];
  }

  var model = models.reduce(function (acc, extend) {
    acc.namespace = extend.namespace;
    if ((0, _typeof3.default)(extend.state) === 'object' && !Array.isArray(extend.state)) {
      check(extend.state, stateCache, stateCount);
      (0, _assign2.default)(acc.state, extend.state);
    } else if ('state' in extend) {
      acc.state = extend.state;
    }
    check(extend.subscriptions, subscriptionsCache, subscriptionsCount);
    (0, _assign2.default)(acc.subscriptions, extend.subscriptions);
    check(extend.effects, effectsCache, effectsCount);
    (0, _assign2.default)(acc.effects, extend.effects);
    check(extend.reducers, reducersCache, reducersCount);
    (0, _assign2.default)(acc.reducers, extend.reducers);
    return acc;
  }, base);

  log(model, 'state', stateCount);
  log(model, 'subscriptions', subscriptionsCount);
  log(model, 'effects', effectsCount);
  log(model, 'reducers', reducersCount);
  return model;
};

/***/ }),

/***/ "./node_modules/flatten/index.js":
/*!***************************************!*\
  !*** ./node_modules/flatten/index.js ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = function flatten(list, depth) {
  depth = (typeof depth == 'number') ? depth : Infinity;

  if (!depth) {
    if (Array.isArray(list)) {
      return list.map(function(i) { return i; });
    }
    return list;
  }

  return _flatten(list, 1);

  function _flatten(list, d) {
    return list.reduce(function (acc, item) {
      if (Array.isArray(item) && d < depth) {
        return acc.concat(_flatten(item, d + 1));
      }
      else {
        return acc.concat(item);
      }
    }, []);
  }
};


/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window, global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/*! exports used: createLogger */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, window) {!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/redux-saga/es/effects.js":
/*!***********************************************!*\
  !*** ./node_modules/redux-saga/es/effects.js ***!
  \***********************************************/
/*! exports provided: take, takem, put, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takem", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony import */ var _internal_io_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/io-helpers */ "./node_modules/redux-saga/es/internal/io-helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return _internal_io_helpers__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return _internal_io_helpers__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _internal_io_helpers__WEBPACK_IMPORTED_MODULE_1__["c"]; });





/***/ }),

/***/ "./node_modules/redux-saga/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/redux-saga/es/index.js ***!
  \*********************************************/
/*! exports provided: default, runSaga, END, eventChannel, channel, buffers, takeEvery, takeLatest, throttle, delay, CANCEL, detach, effects, utils */
/*! exports used: default, effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/middleware */ "./node_modules/redux-saga/es/internal/middleware.js");
/* harmony import */ var _internal_runSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/runSaga */ "./node_modules/redux-saga/es/internal/runSaga.js");
/* harmony import */ var _internal_channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/channel */ "./node_modules/redux-saga/es/internal/channel.js");
/* harmony import */ var _internal_buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
/* harmony import */ var _internal_sagaHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/sagaHelpers */ "./node_modules/redux-saga/es/internal/sagaHelpers/index.js");
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _internal_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _effects__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/utils.js");

/* harmony default export */ __webpack_exports__["a"] = (_internal_middleware__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);













/***/ }),

/***/ "./node_modules/redux-saga/es/internal/buffers.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/buffers.js ***!
  \********************************************************/
/*! exports provided: BUFFER_OVERFLOW, buffers */
/*! exports used: buffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BUFFER_OVERFLOW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buffers; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");


var BUFFER_OVERFLOW = "Channel's Buffer overflow!";

var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;

var zeroBuffer = { isEmpty: _utils__WEBPACK_IMPORTED_MODULE_0__[/* kTrue */ "o"], put: _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"], take: _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"] };

function ringBuffer() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var overflowAction = arguments[1];

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit = void 0;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;

            arr = flush();

            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;

            arr.length = doubledLimit;
            limit = doubledLimit;

            push(it);
            break;
          default:
          // DROP
        }
      }
    },
    take: take,
    flush: flush
  };
}

var buffers = {
  none: function none() {
    return zeroBuffer;
  },
  fixed: function fixed(limit) {
    return ringBuffer(limit, ON_OVERFLOW_THROW);
  },
  dropping: function dropping(limit) {
    return ringBuffer(limit, ON_OVERFLOW_DROP);
  },
  sliding: function sliding(limit) {
    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
  },
  expanding: function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  }
};

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/channel.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/channel.js ***!
  \********************************************************/
/*! exports provided: END, isEnd, emitter, INVALID_BUFFER, UNDEFINED_INPUT_ERROR, channel, eventChannel, stdChannel */
/*! exports used: END, emitter, eventChannel, isEnd, stdChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return emitter; });
/* unused harmony export INVALID_BUFFER */
/* unused harmony export UNDEFINED_INPUT_ERROR */
/* unused harmony export channel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return eventChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stdChannel; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduler */ "./node_modules/redux-saga/es/internal/scheduler.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = { type: CHANNEL_END_TYPE };
var isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* remove */ "t"])(subscribers, sub);
    };
  }

  function emit(item) {
    var arr = subscribers.slice();
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (true) {
  UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
}

function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers__WEBPACK_IMPORTED_MODULE_1__[/* buffers */ "a"].fixed();

  var closed = false;
  var takers = [];

  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* internalErr */ "m"])('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* internalErr */ "m"])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(input, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[_utils__WEBPACK_IMPORTED_MODULE_0__[/* MATCH */ "b"]] || cb[_utils__WEBPACK_IMPORTED_MODULE_0__[/* MATCH */ "b"]](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(cb, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, "channel.take's callback must be a function");

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* remove */ "t"])(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(cb, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, "channel.flush' callback must be a function");
    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();
    if (!closed) {
      closed = true;
      if (takers.length) {
        var arr = takers;
        takers = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close,
    get __takers__() {
      return takers;
    },
    get __closed__() {
      return closed;
    }
  };
}

function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers__WEBPACK_IMPORTED_MODULE_1__[/* buffers */ "a"].none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(matcher, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, 'Invalid match function passed to eventChannel');
  }

  var chan = channel(buffer);
  var close = function close() {
    if (!chan.__closed__) {
      if (unsubscribe) {
        unsubscribe();
      }
      chan.close();
    }
  };
  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }
    if (matcher && !matcher(input)) {
      return;
    }
    chan.put(input);
  });
  if (chan.__closed__) {
    unsubscribe();
  }

  if (!_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}

function stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[_utils__WEBPACK_IMPORTED_MODULE_0__[/* SAGA_ACTION */ "c"]]) {
        cb(input);
        return;
      }
      Object(_scheduler__WEBPACK_IMPORTED_MODULE_2__[/* asap */ "a"])(function () {
        return cb(input);
      });
    });
  });

  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(matcher, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, "channel.take's matcher argument must be a function");
        cb[_utils__WEBPACK_IMPORTED_MODULE_0__[/* MATCH */ "b"]] = matcher;
      }
      chan.take(cb);
    }
  });
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/io-helpers.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/io-helpers.js ***!
  \***********************************************************/
/*! exports provided: takeEvery, takeLatest, throttle */
/*! exports used: takeEvery, takeLatest, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return takeEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return takeLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return throttle; });
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _sagaHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sagaHelpers */ "./node_modules/redux-saga/es/internal/sagaHelpers/index.js");



function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return _io__WEBPACK_IMPORTED_MODULE_0__[/* fork */ "j"].apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__[/* takeEveryHelper */ "a"], patternOrChannel, worker].concat(args));
}

function takeLatest(patternOrChannel, worker) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return _io__WEBPACK_IMPORTED_MODULE_0__[/* fork */ "j"].apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__[/* takeLatestHelper */ "b"], patternOrChannel, worker].concat(args));
}

function throttle(ms, pattern, worker) {
  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    args[_key3 - 3] = arguments[_key3];
  }

  return _io__WEBPACK_IMPORTED_MODULE_0__[/* fork */ "j"].apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__[/* throttleHelper */ "c"], ms, pattern, worker].concat(args));
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/io.js":
/*!***************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/io.js ***!
  \***************************************************/
/*! exports provided: detach, take, takem, put, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, asEffect */
/*! exports used: actionChannel, all, apply, asEffect, call, cancel, cancelled, cps, flush, fork, getContext, join, put, race, select, setContext, spawn, take, takem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export detach */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return takem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return cps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return cancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return asEffect; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");


var IO = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* sym */ "u"])('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
};

var detach = function detach(eff) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(asEffect.fork(eff), _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].object, 'detach(eff): argument must be a fork effect');
  eff[FORK].detached = true;
  return eff;
};

function take() {
  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  if (arguments.length) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(arguments[0], _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].pattern(patternOrChannel)) {
    return effect(TAKE, { pattern: patternOrChannel });
  }
  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].channel(patternOrChannel)) {
    return effect(TAKE, { channel: patternOrChannel });
  }
  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

take.maybe = function () {
  var eff = take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* deprecate */ "k"])(take.maybe, /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* updateIncentive */ "w"])('takem', 'take.maybe'));

function put(channel, action) {
  if (arguments.length > 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'put(channel, action): argument channel is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(action, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'put(channel, action): argument action is undefined');
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'put(action): argument action is undefined');
    action = channel;
    channel = null;
  }
  return effect(PUT, { channel: channel, action: action });
}

put.resolve = function () {
  var eff = put.apply(undefined, arguments);
  eff[PUT].resolve = true;
  return eff;
};

put.sync = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* deprecate */ "k"])(put.resolve, /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* updateIncentive */ "w"])('put.sync', 'put.resolve'));

function all(effects) {
  return effect(ALL, effects);
}

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(fn, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, meth + ': argument fn is undefined');

  var context = null;
  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(fn)) {
    var _fn = fn;
    context = _fn[0];
    fn = _fn[1];
  } else if (fn.fn) {
    var _fn2 = fn;
    context = _fn2.context;
    fn = _fn2.fn;
  }
  if (context && _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].string(fn) && _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(context[fn])) {
    fn = context[fn];
  }
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(fn, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, meth + ': argument ' + fn + ' is not a function');

  return { context: context, fn: fn, args: args };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc('call', fn, args));
}

function apply(context, fn) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc('cps', fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc('fork', fn, args));
}

function spawn(fn) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(undefined, [fn].concat(args)));
}

function join() {
  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    tasks[_key5] = arguments[_key5];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return join(t);
    }));
  }
  var task = tasks[0];
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'join(task): argument task is undefined');
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  return effect(JOIN, task);
}

function cancel() {
  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    tasks[_key6] = arguments[_key6];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return cancel(t);
    }));
  }
  var task = tasks[0];
  if (tasks.length === 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'cancel(task): argument task is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  }
  return effect(CANCEL, task || _utils__WEBPACK_IMPORTED_MODULE_0__[/* SELF_CANCELLATION */ "d"]);
}

function select(selector) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  if (arguments.length === 0) {
    selector = _utils__WEBPACK_IMPORTED_MODULE_0__[/* ident */ "l"];
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(selector, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'select(selector,[...]): argument selector is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(selector, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }
  return effect(SELECT, { selector: selector, args: args });
}

/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/
function actionChannel(pattern, buffer) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(pattern, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
  if (arguments.length > 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }
  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
}

function cancelled() {
  return effect(CANCELLED, {});
}

function flush(channel) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return effect(FLUSH, channel);
}

function getContext(prop) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(prop, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].string, 'getContext(prop): argument ' + prop + ' is not a string');
  return effect(GET_CONTEXT, prop);
}

function setContext(props) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(props, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].object, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* createSetContextWarning */ "h"])(null, props));
  return effect(SET_CONTEXT, props);
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = {
  take: /*#__PURE__*/createAsEffectType(TAKE),
  put: /*#__PURE__*/createAsEffectType(PUT),
  all: /*#__PURE__*/createAsEffectType(ALL),
  race: /*#__PURE__*/createAsEffectType(RACE),
  call: /*#__PURE__*/createAsEffectType(CALL),
  cps: /*#__PURE__*/createAsEffectType(CPS),
  fork: /*#__PURE__*/createAsEffectType(FORK),
  join: /*#__PURE__*/createAsEffectType(JOIN),
  cancel: /*#__PURE__*/createAsEffectType(CANCEL),
  select: /*#__PURE__*/createAsEffectType(SELECT),
  actionChannel: /*#__PURE__*/createAsEffectType(ACTION_CHANNEL),
  cancelled: /*#__PURE__*/createAsEffectType(CANCELLED),
  flush: /*#__PURE__*/createAsEffectType(FLUSH),
  getContext: /*#__PURE__*/createAsEffectType(GET_CONTEXT),
  setContext: /*#__PURE__*/createAsEffectType(SET_CONTEXT)
};

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/middleware.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/middleware.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sagaMiddlewareFactory; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channel */ "./node_modules/redux-saga/es/internal/channel.js");
/* harmony import */ var _runSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runSaga */ "./node_modules/redux-saga/es/internal/runSaga.js");
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






function sagaMiddlewareFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$context = _ref.context,
      context = _ref$context === undefined ? {} : _ref$context,
      options = _objectWithoutProperties(_ref, ['context']);

  var sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      onError = options.onError;


  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(options)) {
    if (false) {} else {
      throw new Error('You passed a function to the Saga middleware. You are likely trying to start a        Saga by directly passing it to the middleware. This is no longer possible starting from 0.10.0.        To run a Saga, you must do it dynamically AFTER mounting the middleware into the store.\n        Example:\n          import createSagaMiddleware from \'redux-saga\'\n          ... other imports\n\n          const sagaMiddleware = createSagaMiddleware()\n          const store = createStore(reducer, applyMiddleware(sagaMiddleware))\n          sagaMiddleware.run(saga, ...args)\n      ');
    }
  }

  if (logger && !_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(logger)) {
    throw new Error('`options.logger` passed to the Saga middleware is not a function!');
  }

  if ( true && options.onerror) {
    throw new Error('`options.onerror` was removed. Use `options.onError` instead.');
  }

  if (onError && !_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(onError)) {
    throw new Error('`options.onError` passed to the Saga middleware is not a function!');
  }

  if (options.emitter && !_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(options.emitter)) {
    throw new Error('`options.emitter` passed to the Saga middleware is not a function!');
  }

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;

    var sagaEmitter = Object(_channel__WEBPACK_IMPORTED_MODULE_1__[/* emitter */ "b"])();
    sagaEmitter.emit = (options.emitter || _utils__WEBPACK_IMPORTED_MODULE_0__[/* ident */ "l"])(sagaEmitter.emit);

    sagaMiddleware.run = _runSaga__WEBPACK_IMPORTED_MODULE_2__[/* runSaga */ "a"].bind(null, {
      context: context,
      subscribe: sagaEmitter.subscribe,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor,
      logger: logger,
      onError: onError
    });

    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }
        var result = next(action); // hit reducers
        sagaEmitter.emit(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
  };

  sagaMiddleware.setContext = function (props) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(props, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].object, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* createSetContextWarning */ "h"])('sagaMiddleware', props));
    _utils__WEBPACK_IMPORTED_MODULE_0__[/* object */ "s"].assign(context, props);
  };

  return sagaMiddleware;
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/proc.js":
/*!*****************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/proc.js ***!
  \*****************************************************/
/*! exports provided: NOT_ITERATOR_ERROR, CHANNEL_END, TASK_CANCEL, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NOT_ITERATOR_ERROR */
/* unused harmony export CHANNEL_END */
/* unused harmony export TASK_CANCEL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return proc; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler */ "./node_modules/redux-saga/es/internal/scheduler.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channel */ "./node_modules/redux-saga/es/internal/channel.js");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }







var NOT_ITERATOR_ERROR = 'proc first argument (Saga function result) must be an iterator';

var CHANNEL_END = {
  toString: function toString() {
    return '@@redux-saga/CHANNEL_END';
  }
};
var TASK_CANCEL = {
  toString: function toString() {
    return '@@redux-saga/TASK_CANCEL';
  }
};

var matchers = {
  wildcard: function wildcard() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__[/* kTrue */ "o"];
  },
  default: function _default(pattern) {
    return (typeof pattern === 'undefined' ? 'undefined' : _typeof(pattern)) === 'symbol' ? function (input) {
      return input.type === pattern;
    } : function (input) {
      return input.type === String(pattern);
    };
  },
  array: function array(patterns) {
    return function (input) {
      return patterns.some(function (p) {
        return matcher(p)(input);
      });
    };
  },
  predicate: function predicate(_predicate) {
    return function (input) {
      return _predicate(input);
    };
  }
};

function matcher(pattern) {
  // prettier-ignore
  return (pattern === '*' ? matchers.wildcard : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(pattern) ? matchers.array : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].stringableFunc(pattern) ? matchers.default : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(pattern) ? matchers.predicate : matchers.default)(pattern);
}

/**
  Used to track a parent task and its forks
  In the new fork model, forked tasks are attached by default to their parent
  We model this using the concept of Parent task && main Task
  main task is the main flow of the current Generator, the parent tasks is the
  aggregation of the main tasks + all its forked tasks.
  Thus the whole model represents an execution tree with multiple branches (vs the
  linear execution tree in sequential (non parallel) programming)

  A parent tasks has the following semantics
  - It completes if all its forks either complete or all cancelled
  - If it's cancelled, all forks are cancelled as well
  - It aborts if any uncaught error bubbles up from forks
  - If it completes, the return value is the one returned by the main task
**/
function forkQueue(name, mainTask, cb) {
  var tasks = [],
      result = void 0,
      completed = false;
  addTask(mainTask);

  function abort(err) {
    cancelAll();
    cb(err, true);
  }

  function addTask(task) {
    tasks.push(task);
    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* remove */ "t"])(tasks, task);
      task.cont = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }
        if (!tasks.length) {
          completed = true;
          cb(result);
        }
      }
    };
    // task.cont.cancel = task.cancel
  }

  function cancelAll() {
    if (completed) {
      return;
    }
    completed = true;
    tasks.forEach(function (t) {
      t.cont = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: function getTasks() {
      return tasks;
    },
    taskNames: function taskNames() {
      return tasks.map(function (t) {
        return t.name;
      });
    }
  };
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator(fn)) {
    return fn;
  }

  // catch synchronous failures; see #152 and #441
  var result = void 0,
      error = void 0;
  try {
    result = fn.apply(context, args);
  } catch (err) {
    error = err;
  }

  // i.e. a generator function returns an iterator
  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator(result)) {
    return result;
  }

  // do not bubble up synchronous failures for detached forks
  // instead create a failed task. See #152 and #441
  return error ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* makeIterator */ "q"])(function () {
    throw error;
  }) : Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* makeIterator */ "q"])(function () {
    var pc = void 0;
    var eff = { done: false, value: result };
    var ret = function ret(value) {
      return { done: true, value: value };
    };
    return function (arg) {
      if (!pc) {
        pc = true;
        return eff;
      } else {
        return ret(arg);
      }
    };
  }());
}

var wrapHelper = function wrapHelper(helper) {
  return { fn: helper };
};

function proc(iterator) {
  var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
  };
  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
  var getState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
  var parentContext = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var parentEffectId = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var name = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'anonymous';
  var cont = arguments[8];

  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(iterator, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator, NOT_ITERATOR_ERROR);

  var effectsString = '[...effects]';
  var runParallelEffect = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* deprecate */ "k"])(runAllEffect, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* updateIncentive */ "w"])(effectsString, 'all(' + effectsString + ')'));

  var sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      onError = options.onError;

  var log = logger || _utils__WEBPACK_IMPORTED_MODULE_0__[/* log */ "p"];
  var logError = function logError(err) {
    var message = err.sagaStack;

    if (!message && err.stack) {
      message = err.stack.split('\n')[0].indexOf(err.message) !== -1 ? err.stack : 'Error: ' + err.message + '\n' + err.stack;
    }

    log('error', 'uncaught at ' + name, message || err.message || err);
  };
  var stdChannel = Object(_channel__WEBPACK_IMPORTED_MODULE_3__[/* stdChannel */ "e"])(subscribe);
  var taskContext = Object.create(parentContext);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/
  next.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];

  /**
    Creates a new task descriptor for this generator, We'll also create a main task
    to track the main flow (besides other forked tasks)
  **/
  var task = newTask(parentEffectId, name, iterator, cont);
  var mainTask = { name: name, cancel: cancelMain, isRunning: true };
  var taskQueue = forkQueue(name, mainTask, end);

  /**
    cancellation of the main task. We'll simply resume the Generator with a Cancel
  **/
  function cancelMain() {
    if (mainTask.isRunning && !mainTask.isCancelled) {
      mainTask.isCancelled = true;
      next(TASK_CANCEL);
    }
  }

  /**
    This may be called by a parent generator to trigger/propagate cancellation
    cancel all pending tasks (including the main task), then end the current task.
     Cancellation propagates down to the whole execution tree holded by this Parent task
    It's also propagated to all joiners of this task and their execution tree/joiners
     Cancellation is noop for terminated/Cancelled tasks tasks
  **/
  function cancel() {
    /**
      We need to check both Running and Cancelled status
      Tasks can be Cancelled but still Running
    **/
    if (iterator._isRunning && !iterator._isCancelled) {
      iterator._isCancelled = true;
      taskQueue.cancelAll();
      /**
        Ending with a Never result will propagate the Cancellation to all joiners
      **/
      end(TASK_CANCEL);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/
  cont && (cont.cancel = cancel);

  // tracks the running status
  iterator._isRunning = true;

  // kicks up the generator
  next();

  // then return the task descriptor to the caller
  return task;

  /**
    This is the generator driver
    It's a recursive async/continuation function which calls itself
    until the generator terminates or throws
  **/
  function next(arg, isErr) {
    // Preventive measure. If we end up here, then there is really something wrong
    if (!mainTask.isRunning) {
      throw new Error('Trying to resume an already finished generator');
    }

    try {
      var result = void 0;
      if (isErr) {
        result = iterator.throw(arg);
      } else if (arg === TASK_CANCEL) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.isCancelled = true;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/
        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/
        result = _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(iterator.return) ? iterator.return(TASK_CANCEL) : { done: true, value: TASK_CANCEL };
      } else if (arg === CHANNEL_END) {
        // We get CHANNEL_END by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(iterator.return) ? iterator.return() : { done: true };
      } else {
        result = iterator.next(arg);
      }

      if (!result.done) {
        runEffect(result.value, parentEffectId, '', next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        mainTask.isMainRunning = false;
        mainTask.cont && mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.isCancelled) {
        logError(error);
      }
      mainTask.isMainRunning = false;
      mainTask.cont(error, true);
    }
  }

  function end(result, isErr) {
    iterator._isRunning = false;
    stdChannel.close();
    if (!isErr) {
      iterator._result = result;
      iterator._deferredEnd && iterator._deferredEnd.resolve(result);
    } else {
      if (result instanceof Error) {
        Object.defineProperty(result, 'sagaStack', {
          value: 'at ' + name + ' \n ' + (result.sagaStack || result.stack),
          configurable: true
        });
      }
      if (!task.cont) {
        if (result instanceof Error && onError) {
          onError(result);
        } else {
          logError(result);
        }
      }
      iterator._error = result;
      iterator._isAborted = true;
      iterator._deferredEnd && iterator._deferredEnd.reject(result);
    }
    task.cont && task.cont(result, isErr);
    task.joiners.forEach(function (j) {
      return j.cb(result, isErr);
    });
    task.joiners = null;
  }

  function runEffect(effect, parentEffectId) {
    var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var cb = arguments[3];

    var effectId = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* uid */ "v"])();
    sagaMonitor && sagaMonitor.effectTriggered({ effectId: effectId, parentEffectId: parentEffectId, label: label, effect: effect });

    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/
    var effectSettled = void 0;

    // Completion callback passed to the appropriate effect runner
    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"]; // defensive measure
      if (sagaMonitor) {
        isErr ? sagaMonitor.effectRejected(effectId, res) : sagaMonitor.effectResolved(effectId, res);
      }
      cb(res, isErr);
    }
    // tracks down the current cancel
    currCb.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];

    // setup cancellation logic on the parent cb
    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      /**
        propagates cancel downward
        catch uncaught cancellations errors; since we can no longer call the completion
        callback, log errors raised during cancellations into the console
      **/
      try {
        currCb.cancel();
      } catch (err) {
        logError(err);
      }
      currCb.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"]; // defensive measure

      sagaMonitor && sagaMonitor.effectCancelled(effectId);
    };

    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      for completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    var data = void 0;
    // prettier-ignore
    return (
      // Non declarative effect
      _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].promise(effect) ? resolvePromise(effect, currCb) : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].helper(effect) ? runForkEffect(wrapHelper(effect), effectId, currCb) : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator(effect) ? resolveIterator(effect, effectId, name, currCb)

      // declarative effects
      : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(effect) ? runParallelEffect(effect, effectId, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].take(effect)) ? runTakeEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].put(effect)) ? runPutEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].all(effect)) ? runAllEffect(data, effectId, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].race(effect)) ? runRaceEffect(data, effectId, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].call(effect)) ? runCallEffect(data, effectId, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].cps(effect)) ? runCPSEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].fork(effect)) ? runForkEffect(data, effectId, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].join(effect)) ? runJoinEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].cancel(effect)) ? runCancelEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].select(effect)) ? runSelectEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].actionChannel(effect)) ? runChannelEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].flush(effect)) ? runFlushEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].cancelled(effect)) ? runCancelledEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].getContext(effect)) ? runGetContextEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].setContext(effect)) ? runSetContextEffect(data, currCb) : /* anything else returned as is */currCb(effect)
    );
  }

  function resolvePromise(promise, cb) {
    var cancelPromise = promise[_utils__WEBPACK_IMPORTED_MODULE_0__[/* CANCEL */ "a"]];
    if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(cancelPromise)) {
      cb.cancel = cancelPromise;
    } else if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(promise.abort)) {
      cb.cancel = function () {
        return promise.abort();
      };
      // TODO: add support for the fetch API, whenever they get around to
      // adding cancel support
    }
    promise.then(cb, function (error) {
      return cb(error, true);
    });
  }

  function resolveIterator(iterator, effectId, name, cb) {
    proc(iterator, subscribe, dispatch, getState, taskContext, options, effectId, name, cb);
  }

  function runTakeEffect(_ref2, cb) {
    var channel = _ref2.channel,
        pattern = _ref2.pattern,
        maybe = _ref2.maybe;

    channel = channel || stdChannel;
    var takeCb = function takeCb(inp) {
      return inp instanceof Error ? cb(inp, true) : Object(_channel__WEBPACK_IMPORTED_MODULE_3__[/* isEnd */ "d"])(inp) && !maybe ? cb(CHANNEL_END) : cb(inp);
    };
    try {
      channel.take(takeCb, matcher(pattern));
    } catch (err) {
      return cb(err, true);
    }
    cb.cancel = takeCb.cancel;
  }

  function runPutEffect(_ref3, cb) {
    var channel = _ref3.channel,
        action = _ref3.action,
        resolve = _ref3.resolve;

    /**
      Schedule the put in case another saga is holding a lock.
      The put will be executed atomically. ie nested puts will execute after
      this put has terminated.
    **/
    Object(_scheduler__WEBPACK_IMPORTED_MODULE_1__[/* asap */ "a"])(function () {
      var result = void 0;
      try {
        result = (channel ? channel.put : dispatch)(action);
      } catch (error) {
        // If we have a channel or `put.resolve` was used then bubble up the error.
        if (channel || resolve) return cb(error, true);
        logError(error);
      }

      if (resolve && _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].promise(result)) {
        resolvePromise(result, cb);
      } else {
        return cb(result);
      }
    });
    // Put effects are non cancellables
  }

  function runCallEffect(_ref4, effectId, cb) {
    var context = _ref4.context,
        fn = _ref4.fn,
        args = _ref4.args;

    var result = void 0;
    // catch synchronous failures; see #152
    try {
      result = fn.apply(context, args);
    } catch (error) {
      return cb(error, true);
    }
    return _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].promise(result) ? resolvePromise(result, cb) : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator(result) ? resolveIterator(result, effectId, fn.name, cb) : cb(result);
  }

  function runCPSEffect(_ref5, cb) {
    var context = _ref5.context,
        fn = _ref5.fn,
        args = _ref5.args;

    // CPS (ie node style functions) can define their own cancellation logic
    // by setting cancel field on the cb

    // catch synchronous failures; see #152
    try {
      var cpsCb = function cpsCb(err, res) {
        return _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].undef(err) ? cb(res) : cb(err, true);
      };
      fn.apply(context, args.concat(cpsCb));
      if (cpsCb.cancel) {
        cb.cancel = function () {
          return cpsCb.cancel();
        };
      }
    } catch (error) {
      return cb(error, true);
    }
  }

  function runForkEffect(_ref6, effectId, cb) {
    var context = _ref6.context,
        fn = _ref6.fn,
        args = _ref6.args,
        detached = _ref6.detached;

    var taskIterator = createTaskIterator({ context: context, fn: fn, args: args });

    try {
      Object(_scheduler__WEBPACK_IMPORTED_MODULE_1__[/* suspend */ "c"])();
      var _task = proc(taskIterator, subscribe, dispatch, getState, taskContext, options, effectId, fn.name, detached ? null : _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"]);

      if (detached) {
        cb(_task);
      } else {
        if (taskIterator._isRunning) {
          taskQueue.addTask(_task);
          cb(_task);
        } else if (taskIterator._error) {
          taskQueue.abort(taskIterator._error);
        } else {
          cb(_task);
        }
      }
    } finally {
      Object(_scheduler__WEBPACK_IMPORTED_MODULE_1__[/* flush */ "b"])();
    }
    // Fork effects are non cancellables
  }

  function runJoinEffect(t, cb) {
    if (t.isRunning()) {
      var joiner = { task: task, cb: cb };
      cb.cancel = function () {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* remove */ "t"])(t.joiners, joiner);
      };
      t.joiners.push(joiner);
    } else {
      t.isAborted() ? cb(t.error(), true) : cb(t.result());
    }
  }

  function runCancelEffect(taskToCancel, cb) {
    if (taskToCancel === _utils__WEBPACK_IMPORTED_MODULE_0__[/* SELF_CANCELLATION */ "d"]) {
      taskToCancel = task;
    }
    if (taskToCancel.isRunning()) {
      taskToCancel.cancel();
    }
    cb();
    // cancel effects are non cancellables
  }

  function runAllEffect(effects, effectId, cb) {
    var keys = Object.keys(effects);

    if (!keys.length) {
      return cb(_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(effects) ? [] : {});
    }

    var completedCount = 0;
    var completed = void 0;
    var results = {};
    var childCbs = {};

    function checkEffectEnd() {
      if (completedCount === keys.length) {
        completed = true;
        cb(_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(effects) ? _utils__WEBPACK_IMPORTED_MODULE_0__[/* array */ "f"].from(_extends({}, results, { length: keys.length })) : results);
      }
    }

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }
        if (isErr || Object(_channel__WEBPACK_IMPORTED_MODULE_3__[/* isEnd */ "d"])(res) || res === CHANNEL_END || res === TASK_CANCEL) {
          cb.cancel();
          cb(res, isErr);
        } else {
          results[key] = res;
          completedCount++;
          checkEffectEnd();
        }
      };
      chCbAtKey.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };

    keys.forEach(function (key) {
      return runEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runRaceEffect(effects, effectId, cb) {
    var completed = void 0;
    var keys = Object.keys(effects);
    var childCbs = {};

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }

        if (isErr) {
          // Race Auto cancellation
          cb.cancel();
          cb(res, true);
        } else if (!Object(_channel__WEBPACK_IMPORTED_MODULE_3__[/* isEnd */ "d"])(res) && res !== CHANNEL_END && res !== TASK_CANCEL) {
          var _response;

          cb.cancel();
          completed = true;
          var response = (_response = {}, _response[key] = res, _response);
          cb(_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(effects) ? [].slice.call(_extends({}, response, { length: keys.length })) : response);
        }
      };
      chCbAtKey.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      // prevents unnecessary cancellation
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };
    keys.forEach(function (key) {
      if (completed) {
        return;
      }
      runEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runSelectEffect(_ref7, cb) {
    var selector = _ref7.selector,
        args = _ref7.args;

    try {
      var state = selector.apply(undefined, [getState()].concat(args));
      cb(state);
    } catch (error) {
      cb(error, true);
    }
  }

  function runChannelEffect(_ref8, cb) {
    var pattern = _ref8.pattern,
        buffer = _ref8.buffer;

    var match = matcher(pattern);
    match.pattern = pattern;
    cb(Object(_channel__WEBPACK_IMPORTED_MODULE_3__[/* eventChannel */ "c"])(subscribe, buffer || _buffers__WEBPACK_IMPORTED_MODULE_4__[/* buffers */ "a"].fixed(), match));
  }

  function runCancelledEffect(data, cb) {
    cb(!!mainTask.isCancelled);
  }

  function runFlushEffect(channel, cb) {
    channel.flush(cb);
  }

  function runGetContextEffect(prop, cb) {
    cb(taskContext[prop]);
  }

  function runSetContextEffect(props, cb) {
    _utils__WEBPACK_IMPORTED_MODULE_0__[/* object */ "s"].assign(taskContext, props);
    cb();
  }

  function newTask(id, name, iterator, cont) {
    var _done, _ref9, _mutatorMap;

    iterator._deferredEnd = null;
    return _ref9 = {}, _ref9[_utils__WEBPACK_IMPORTED_MODULE_0__[/* TASK */ "e"]] = true, _ref9.id = id, _ref9.name = name, _done = 'done', _mutatorMap = {}, _mutatorMap[_done] = _mutatorMap[_done] || {}, _mutatorMap[_done].get = function () {
      if (iterator._deferredEnd) {
        return iterator._deferredEnd.promise;
      } else {
        var def = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* deferred */ "i"])();
        iterator._deferredEnd = def;
        if (!iterator._isRunning) {
          iterator._error ? def.reject(iterator._error) : def.resolve(iterator._result);
        }
        return def.promise;
      }
    }, _ref9.cont = cont, _ref9.joiners = [], _ref9.cancel = cancel, _ref9.isRunning = function isRunning() {
      return iterator._isRunning;
    }, _ref9.isCancelled = function isCancelled() {
      return iterator._isCancelled;
    }, _ref9.isAborted = function isAborted() {
      return iterator._isAborted;
    }, _ref9.result = function result() {
      return iterator._result;
    }, _ref9.error = function error() {
      return iterator._error;
    }, _ref9.setContext = function setContext(props) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(props, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].object, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* createSetContextWarning */ "h"])('task', props));
      _utils__WEBPACK_IMPORTED_MODULE_0__[/* object */ "s"].assign(taskContext, props);
    }, _defineEnumerableProperties(_ref9, _mutatorMap), _ref9;
  }
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/runSaga.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/runSaga.js ***!
  \********************************************************/
/*! exports provided: runSaga */
/*! exports used: runSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return runSaga; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _proc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proc */ "./node_modules/redux-saga/es/internal/proc.js");



var RUN_SAGA_SIGNATURE = 'runSaga(storeInterface, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ': saga argument must be a Generator function!';

function runSaga(storeInterface, saga) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator = void 0;

  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator(storeInterface)) {
    if (true) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* log */ "p"])('warn', 'runSaga(iterator, storeInterface) has been deprecated in favor of ' + RUN_SAGA_SIGNATURE);
    }
    iterator = storeInterface;
    storeInterface = saga;
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(saga, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, NON_GENERATOR_ERR);
    iterator = saga.apply(undefined, args);
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(iterator, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator, NON_GENERATOR_ERR);
  }

  var _storeInterface = storeInterface,
      subscribe = _storeInterface.subscribe,
      dispatch = _storeInterface.dispatch,
      getState = _storeInterface.getState,
      context = _storeInterface.context,
      sagaMonitor = _storeInterface.sagaMonitor,
      logger = _storeInterface.logger,
      onError = _storeInterface.onError;


  var effectId = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* uid */ "v"])();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];

    sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: saga, args: args } });
  }

  var task = Object(_proc__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(iterator, subscribe, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* wrapSagaDispatch */ "x"])(dispatch), getState, context, { sagaMonitor: sagaMonitor, logger: logger, onError: onError }, effectId, saga.name);

  if (sagaMonitor) {
    sagaMonitor.effectResolved(effectId, task);
  }

  return task;
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js ***!
  \************************************************************************/
/*! exports provided: qEnd, safeName, default */
/*! exports used: default, qEnd, safeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return qEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return safeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fsmIterator; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");


var done = { done: true, value: undefined };
var qEnd = {};

function safeName(patternOrChannel) {
  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}

function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

  var updateState = void 0,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          q = _fsm$qNext[0],
          output = _fsm$qNext[1],
          _updateState = _fsm$qNext[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* makeIterator */ "q"])(next, function (error) {
    return next(null, error);
  }, name, true);
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/index.js ***!
  \******************************************************************/
/*! exports provided: takeEvery, takeLatest, throttle, takeEveryHelper, takeLatestHelper, throttleHelper */
/*! exports used: takeEveryHelper, takeLatestHelper, throttleHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export takeEvery */
/* unused harmony export takeLatest */
/* unused harmony export throttle */
/* harmony import */ var _takeEvery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./takeEvery */ "./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _takeEvery__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _takeLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./takeLatest */ "./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _takeLatest__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ "./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _throttle__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");






var deprecationWarning = function deprecationWarning(helperName) {
  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};

var takeEvery = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* deprecate */ "k"])(_takeEvery__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], /*#__PURE__*/deprecationWarning('takeEvery'));
var takeLatest = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* deprecate */ "k"])(_takeLatest__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], /*#__PURE__*/deprecationWarning('takeLatest'));
var throttle = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* deprecate */ "k"])(_throttle__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], /*#__PURE__*/deprecationWarning('throttle'));



/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js":
/*!**********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return takeEvery; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");




function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* take */ "r"])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "j"].apply(undefined, [worker].concat(args, [ac])) };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__[/* END */ "a"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* qEnd */ "b"]] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* safeName */ "c"])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js":
/*!***********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return takeLatest; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");




function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* take */ "r"])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "j"].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yCancel = function yCancel(task) {
    return { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* cancel */ "f"])(task) };
  };

  var task = void 0,
      action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__[/* END */ "a"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* qEnd */ "b"]] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* safeName */ "c"])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return throttle; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");






function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action = void 0,
      channel = void 0;

  var yActionChannel = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* actionChannel */ "a"])(pattern, _buffers__WEBPACK_IMPORTED_MODULE_3__[/* buffers */ "a"].sliding(1)) };
  var yTake = function yTake() {
    return { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* take */ "r"])(channel) };
  };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "j"].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yDelay = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* call */ "e"])(_utils__WEBPACK_IMPORTED_MODULE_4__[/* delay */ "j"], delayLength) };

  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__[/* END */ "a"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* qEnd */ "b"]] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* safeName */ "c"])(pattern) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/scheduler.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/scheduler.js ***!
  \**********************************************************/
/*! exports provided: asap, suspend, flush */
/*! exports used: asap, flush, suspend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return suspend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flush; });
var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/
var semaphore = 0;

/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/
function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}

/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/
function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}

/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/
function suspend() {
  semaphore++;
}

/**
  Puts the scheduler in a `released` state.
**/
function release() {
  semaphore--;
}

/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/
function flush() {
  release();

  var task = void 0;
  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/utils.js ***!
  \******************************************************/
/*! exports provided: sym, TASK, HELPER, MATCH, CANCEL, SAGA_ACTION, SELF_CANCELLATION, konst, kTrue, kFalse, noop, ident, check, hasOwn, is, object, remove, array, deferred, arrayOfDeffered, delay, createMockTask, autoInc, uid, makeIterator, log, deprecate, updateIncentive, internalErr, createSetContextWarning, wrapSagaDispatch, cloneableGenerator */
/*! exports used: CANCEL, MATCH, SAGA_ACTION, SELF_CANCELLATION, TASK, array, check, createSetContextWarning, deferred, delay, deprecate, ident, internalErr, is, kTrue, log, makeIterator, noop, object, remove, sym, uid, updateIncentive, wrapSagaDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return sym; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TASK; });
/* unused harmony export HELPER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SELF_CANCELLATION; });
/* unused harmony export konst */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return kTrue; });
/* unused harmony export kFalse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return check; });
/* unused harmony export hasOwn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return deferred; });
/* unused harmony export arrayOfDeffered */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return delay; });
/* unused harmony export createMockTask */
/* unused harmony export autoInc */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return updateIncentive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return wrapSagaDispatch; });
/* unused harmony export cloneableGenerator */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var sym = function sym(id) {
  return '@@redux-saga/' + id;
};

var TASK = /*#__PURE__*/sym('TASK');
var HELPER = /*#__PURE__*/sym('HELPER');
var MATCH = /*#__PURE__*/sym('MATCH');
var CANCEL = /*#__PURE__*/sym('CANCEL_PROMISE');
var SAGA_ACTION = /*#__PURE__*/sym('SAGA_ACTION');
var SELF_CANCELLATION = /*#__PURE__*/sym('SELF_CANCELLATION');
var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = /*#__PURE__*/konst(true);
var kFalse = /*#__PURE__*/konst(false);
var noop = function noop() {};
var ident = function ident(v) {
  return v;
};

function check(value, predicate, error) {
  if (!predicate(value)) {
    log('error', 'uncaught at check', error);
    throw new Error(error);
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(object, property) {
  return is.notUndef(object) && hasOwnProperty.call(object, property);
}

var is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  string: function string(s) {
    return typeof s === 'string';
  },
  array: Array.isArray,
  object: function object(obj) {
    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  },
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  iterable: function iterable(it) {
    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
  },
  task: function task(t) {
    return t && t[TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  helper: function helper(it) {
    return it && it[HELPER];
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  }
};

var object = {
  assign: function assign(target, source) {
    for (var i in source) {
      if (hasOwn(source, i)) {
        target[i] = source[i];
      }
    }
  }
};

function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

var array = {
  from: function from(obj) {
    var arr = Array(obj.length);
    for (var i in obj) {
      if (hasOwn(obj, i)) {
        arr[i] = obj[i];
      }
    }
    return arr;
  }
};

function deferred() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var def = _extends({}, props);
  var promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

function delay(ms) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var timeoutId = void 0;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}

function createMockTask() {
  var _ref;

  var running = true;
  var _result = void 0,
      _error = void 0;

  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
    return running;
  }, _ref.result = function result() {
    return _result;
  }, _ref.error = function error() {
    return _error;
  }, _ref.setRunning = function setRunning(b) {
    return running = b;
  }, _ref.setResult = function setResult(r) {
    return _result = r;
  }, _ref.setError = function setError(e) {
    return _error = e;
  }, _ref;
}

function autoInc() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return function () {
    return ++seed;
  };
}

var uid = /*#__PURE__*/autoInc();

var kThrow = function kThrow(err) {
  throw err;
};
var kReturn = function kReturn(value) {
  return { value: value, done: true };
};
function makeIterator(next) {
  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var isHelper = arguments[3];

  var iterator = { name: name, next: next, throw: thro, return: kReturn };

  if (isHelper) {
    iterator[HELPER] = true;
  }
  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }
  return iterator;
}

/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/
function log(level, message) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  /*eslint-disable no-console*/
  if (typeof window === 'undefined') {
    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}

function deprecate(fn, deprecationWarning) {
  return function () {
    if (true) log('warn', deprecationWarning);
    return fn.apply(undefined, arguments);
  };
}

var updateIncentive = function updateIncentive(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
};

var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
  };
};

var cloneableGenerator = function cloneableGenerator(generatorFunc) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var history = [];
    var gen = generatorFunc.apply(undefined, args);
    return {
      next: function next(arg) {
        history.push(arg);
        return gen.next(arg);
      },
      clone: function clone() {
        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
        history.forEach(function (arg) {
          return clonedGen.next(arg);
        });
        return clonedGen;
      },
      return: function _return(value) {
        return gen.return(value);
      },
      throw: function _throw(exception) {
        return gen.throw(exception);
      }
    };
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/redux-saga/es/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/redux-saga/es/utils.js ***!
  \*********************************************/
/*! exports provided: TASK, SAGA_ACTION, noop, is, deferred, arrayOfDeffered, createMockTask, cloneableGenerator, asEffect, CHANNEL_END */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _internal_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _internal_proc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/proc */ "./node_modules/redux-saga/es/internal/proc.js");




/***/ }),

/***/ "./node_modules/warning/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./src/api/authorizationApi.ts":
/*!*************************************!*\
  !*** ./src/api/authorizationApi.ts ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

/* harmony default export */ __webpack_exports__["a"] = ({
  /** 发送验证码*/
  sendCode: function sendCode(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/verify/appSend', params, {});
  },

  /** 登录 */
  login: function login(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/oauth/phoneLogin', params, {});
  },

  /** 小程序通过静默授权code获取openId */
  miniSilence: function miniSilence(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/grant/miniSilence', params, {});
  },

  /** 小程序用户解密资料检测并初始化 */
  miniExplicit: function miniExplicit(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/grant/miniExplicit', params, {});
  },

  /** 小程序用户根据加密数据获取用户手机号并初始化*/
  miniPhone: function miniPhone(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/grant/miniPhone', params, {});
  },
  //h5静默授权
  h5Silence: function h5Silence(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/grant/subSilence', params, {});
  },
  //h5显式授权
  h5Explicit: function h5Explicit(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/grant/subExplicit', params, {});
  }
});

/***/ }),

/***/ "./src/api/commonApi.ts":
/*!******************************!*\
  !*** ./src/api/commonApi.ts ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

/* harmony default export */ __webpack_exports__["a"] = ({
  /*上传图片*/
  uploadPhoto: function uploadPhoto(file) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].upload("https://cloudapitest.bm001.com/core/upload/uploadPic", file, {});
  },

  /**身份证数字识别 */
  getIdCardBaseInfo: function getIdCardBaseInfo(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/idcard/getIdCardBaseInfo', params, {});
  },

  /**内容映射 */
  contentMapping: function contentMapping(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/contentmapping/query', params, {});
  },

  /**身份证图片识别 */
  getIdCardFullInfo: function getIdCardFullInfo(file) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].upload("".concat("https://cloudapitest.bm001.com/", "/core/idcard/getIdCardFullInfo"), file);
  },

  /*获取公司信息 */
  getCompanyById: function getCompanyById(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/company/queryById', params, {});
  },

  /**内容映射 */
  contentMappingAdd: function contentMappingAdd(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/contentmapping/add', params, {});
  },

  /*获取门店信息 */
  getShopById: function getShopById(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/c/shop/query', params, {});
  },

  /*查询微信配置 */
  queryWXConfig: function queryWXConfig(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/wechatconf/queryShareConfig', params, {});
  },
  //根据经纬度获取位置
  geocode: function geocode(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/geo/place/around', params, {});
  }
});

/***/ }),

/***/ "./src/api/contractApi.ts":
/*!********************************!*\
  !*** ./src/api/contractApi.ts ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

/* harmony default export */ __webpack_exports__["a"] = ({
  /** 获取合同详情*/
  getContractDetail: function getContractDetail(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/contract/query', params, {});
  },

  /** 查询电子合同*/
  getEleccontractDetail: function getEleccontractDetail(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/eleccontract/queryElecContractById', params, {});
  },

  /** 签署电子合同*/
  getContractSign: function getContractSign(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/eleccontract/sign', params, {});
  }
});

/***/ }),

/***/ "./src/api/homeApi.ts":
/*!****************************!*\
  !*** ./src/api/homeApi.ts ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

/* harmony default export */ __webpack_exports__["a"] = ({
  /** 查询任务日历*/
  queryTaskCalendar: function queryTaskCalendar(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/task/queryTaskCalendar', params, {});
  },

  /** 查询任务列表*/
  queryTaskList: function queryTaskList(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/task/queryTaskList', params, {});
  }
});

/***/ }),

/***/ "./src/api/orderApi.ts":
/*!*****************************!*\
  !*** ./src/api/orderApi.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

/* harmony default export */ __webpack_exports__["a"] = ({
  /** 获取详情*/
  fetchInfoDetail: function fetchInfoDetail(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/clueRecruit/query', params, {});
  },

  /** 抢单*/
  fetchNow: function fetchNow(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/clueRecruit/grab', params, {});
  }
});

/***/ }),

/***/ "./src/api/resumeApi.ts":
/*!******************************!*\
  !*** ./src/api/resumeApi.ts ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

/* harmony default export */ __webpack_exports__["a"] = ({
  /** 获取简历详情*/
  getResumeDetail: function getResumeDetail(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/aunt/queryAuntDetail', params, {});
  },

  /** 保存简历第一步*/
  saveAuntByFirstStep: function saveAuntByFirstStep(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/aunt/saveAuntByFirstStep', params, {});
  },

  /** 保存简历第二步*/
  saveAuntBySecondStep: function saveAuntBySecondStep(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/aunt/saveAuntBySecondStep', params, {});
  },

  /** 保存简历第三步*/
  saveAuntByThirdStep: function saveAuntByThirdStep(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/aunt/saveAuntByThirdStep', params, {});
  },

  /** 查询数据字典*/
  queryDictionary: function queryDictionary(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/product/queryDictionary', params, {});
  },

  /** 保存简历*/
  saveAunt: function saveAunt(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/aunt/saveAunt', params, {});
  },

  /**招募家政员*/
  auntpossibleAdd: function auntpossibleAdd(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/auntpossible/add', params, {});
  },
  // 查询简历编辑字典参数
  getCommonOption1: function getCommonOption1(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/core/auntcommonoption/getCommonOption", params, {});
  },
  //查询标签列表(带分页)
  getShopLibrary: function getShopLibrary(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/s/shoplibrary/queryPageList", params, {});
  }
});

/***/ }),

/***/ "./src/api/serviceApi.ts":
/*!*******************************!*\
  !*** ./src/api/serviceApi.ts ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

/* harmony default export */ __webpack_exports__["a"] = ({
  /** 查询保洁单派单记录*/
  getCleanOrder: function getCleanOrder(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/cleanOrder/query', params, {});
  },

  /** 下工签到*/
  endWorkSign: function endWorkSign(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/cleanOrder/endWorkSign', params, {});
  },

  /** 上工签到*/
  startWorkSign: function startWorkSign(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/cleanOrder/startWorkSign', params, {});
  },

  /** 上传下工图片*/
  saveEndWorkImgs: function saveEndWorkImgs(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/cleanOrder/saveEndWorkImgs', params, {});
  },

  /** 上传上工图片*/
  saveStartWorkImgs: function saveStartWorkImgs(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/cleanOrder/saveStartWorkImgs', params, {});
  }
});

/***/ }),

/***/ "./src/api/tableApi.ts":
/*!*****************************!*\
  !*** ./src/api/tableApi.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

/* harmony default export */ __webpack_exports__["a"] = ({
  /** 获取合同列表*/
  getContractList: function getContractList(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/contract/queryPageList', params, {});
  },

  /** 获取地址列表*/
  getGeoPlaceList: function getGeoPlaceList(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/geo/place/text', params, {});
  },

  /** 获取服务单列表*/
  getServiceList: function getServiceList(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/cleanOrder/queryPageList', params, {});
  },

  /** 获取抢单列表*/
  getFetcherInfoList: function getFetcherInfoList(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/clueRecruit/queryPage', params, {});
  }
});

/***/ }),

/***/ "./src/api/userApi.ts":
/*!****************************!*\
  !*** ./src/api/userApi.ts ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

/* harmony default export */ __webpack_exports__["a"] = ({
  getLogin: function getLogin(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/login/account', params, {});
  },
  sendCode: function sendCode(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/login/captcha', params, {});
  },
  queryAuntMine: function queryAuntMine(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/aunt/queryAuntMine', params, {});
  },
  globalconfigQuery: function globalconfigQuery(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/globalconfig/query', params, {});
  },
  queryInviteList: function queryInviteList(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/auntinvite/queryPageList', params, {});
  },
  getAllRewardCount: function getAllRewardCount(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/auntinvite/getAllRewardCount', params, {});
  },
  querySharePoster: function querySharePoster(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/shareposter/queryPageList', params, {});
  },
  getInviteUrl: function getInviteUrl(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/auntinvite/getInviteUrl', params, {});
  }
});

/***/ }),

/***/ "./src/api/videoApi.ts":
/*!*****************************!*\
  !*** ./src/api/videoApi.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

var apiMap = {
  getFetcherInfoList: '/s/clueRecruit/queryPage',
  getFetchInfoDetail: '/s/clueRecruit/query',
  fetchNow: '/s/clueRecruit/grab'
};
/* harmony default export */ __webpack_exports__["a"] = ({
  queryTranscribe: function queryTranscribe(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/s/course/queryLive', params, {});
  },
  ///获取用户资料
  miniDecode: function miniDecode(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/core/grant/miniDecode', params, {});
  },
  getFetcherInfoList: function getFetcherInfoList(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(apiMap.getFetcherInfoList, params, {});
  },
  fetchInfoDetail: function fetchInfoDetail(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(apiMap.getFetchInfoDetail, params, {});
  },
  fetchNow: function fetchNow(params) {
    return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(apiMap.fetchNow, params, {}).then(function (res) {
      return res;
    }, function (d) {
      throw d;
    });
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_app_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./app.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");






var config = {"pages":["pages/index/index","pages/index/navigation","pages/resume/resume","pages/resume/addResume","pages/contract/contract","pages/contract/eVisa","pages/login/login","pages/login/attachment","pages/contract/detail","pages/findAunt/index","pages/video/video","pages/service/service","pages/service/detail","pages/fetchOrder/fetchOrder","pages/fetchOrderShareMessage/fetchOrderShareMessage","pages/mine/mine","pages/mine/recomWait/recomWait","pages/mine/cumulatReward/cumulatReward","pages/mine/posterDetail/posterDetail"],"window":{"backgroundTextStyle":"light","navigationBarTitleText":"wechart","navigationBarTextStyle":"black","backgroundColor":"#f5f5f5","navigationStyle":"custom","navigationBarBackgroundColor":"#f5f5f5"},"tabBar":{"list":[{"pagePath":"pages/index/index","text":"任务","iconPath":"assets/images/tabBar/index-normal.png","selectedIconPath":"assets/images/tabBar/index-select.png"},{"pagePath":"pages/contract/contract","text":"合同","iconPath":"assets/images/tabBar/dd-normal.png","selectedIconPath":"assets/images/tabBar/dd-select.png"},{"pagePath":"pages/service/service","text":"服务单","iconPath":"assets/images/tabBar/service-normal.png","selectedIconPath":"assets/images/tabBar/service-select.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"assets/images/tabBar/mine-normal.png","selectedIconPath":"assets/images/tabBar/mine-select.png"}],"position":"bottom","borderStyle":"black","color":"#999999","selectedColor":"#f54949","backgroundColor":"#ffffff"},"permission":{"scope.userLocation":{"desc":"你的位置信息将用于获取您的定位"}}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createReactApp"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_app_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], react__WEBPACK_IMPORTED_MODULE_2__, react_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], config))



/***/ }),

/***/ "./src/assets/font/iconfont.scss":
/*!***************************************!*\
  !*** ./src/assets/font/iconfont.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/models/authorization.ts":
/*!*************************************!*\
  !*** ./src/models/authorization.ts ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dva-model-extend */ "./node_modules/dva-model-extend/lib/index.js");
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dva_model_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/common */ "./src/models/common.ts");
/* harmony import */ var _api_authorizationApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/authorizationApi */ "./src/api/authorizationApi.ts");





/* harmony default export */ __webpack_exports__["a"] = (dva_model_extend__WEBPACK_IMPORTED_MODULE_2___default()(_models_common__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
  namespace: 'authorization',
  state: {},
  effects: {
    sendCode: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function sendCode(_ref, _ref2) {
      var payload, put, select, call;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sendCode$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put, select = _ref2.select, call = _ref2.call;
              _context.next = 4;
              return call(_api_authorizationApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].sendCode, payload);

            case 4:
              _context.next = 6;
              return put({
                type: 'updateStore',
                payload: {}
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, sendCode);
    }),
    login: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function login(_ref3, _ref4) {
      var payload, put, select, call, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put, select = _ref4.select, call = _ref4.call;
              _context2.next = 4;
              return call(_api_authorizationApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].login, payload);

            case 4:
              result = _context2.sent;
              _context2.next = 7;
              return put({
                type: 'updateStore',
                payload: {}
              });

            case 7:
              return _context2.abrupt("return", result);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, login);
    }),
    miniSilence: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function miniSilence(_ref5, _ref6) {
      var payload, put, select, call, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function miniSilence$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref5.payload;
              put = _ref6.put, select = _ref6.select, call = _ref6.call;
              _context3.next = 4;
              return call(_api_authorizationApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].miniSilence, payload);

            case 4:
              result = _context3.sent;
              _context3.next = 7;
              return put({
                type: 'updateStore',
                payload: {}
              });

            case 7:
              return _context3.abrupt("return", result);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, miniSilence);
    }),
    miniExplicit: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function miniExplicit(_ref7, _ref8) {
      var payload, put, select, call, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function miniExplicit$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref7.payload;
              put = _ref8.put, select = _ref8.select, call = _ref8.call;
              _context4.next = 4;
              return call(_api_authorizationApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].miniExplicit, payload);

            case 4:
              result = _context4.sent;
              _context4.next = 7;
              return put({
                type: 'updateStore',
                payload: {}
              });

            case 7:
              return _context4.abrupt("return", result);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, miniExplicit);
    }),
    miniPhone: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function miniPhone(_ref9, _ref10) {
      var payload, put, select, call, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function miniPhone$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              payload = _ref9.payload;
              put = _ref10.put, select = _ref10.select, call = _ref10.call;
              _context5.next = 4;
              return call(_api_authorizationApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].miniPhone, payload);

            case 4:
              result = _context5.sent;
              _context5.next = 7;
              return put({
                type: 'updateStore',
                payload: {}
              });

            case 7:
              return _context5.abrupt("return", result);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, miniPhone);
    })
  },
  reducers: {
    updateStore: function updateStore(state, _ref11) {
      var payload = _ref11.payload;
      return Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), payload);
    }
  }
}));

/***/ }),

/***/ "./src/models/common.ts":
/*!******************************!*\
  !*** ./src/models/common.ts ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_commonApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/commonApi */ "./src/api/commonApi.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");




/* harmony default export */ __webpack_exports__["a"] = ({
  namespace: 'common',
  state: {
    companyInfo: {},
    shopInfo: {}
  },
  effects: {
    /**上传图片 */
    uploadPhoto: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function uploadPhoto(_ref, _ref2) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function uploadPhoto$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              select = _ref2.select, call = _ref2.call, put = _ref2.put;
              _context.next = 4;
              return call(_api_commonApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].uploadPhoto, payload);

            case 4:
              result = _context.sent;
              return _context.abrupt("return", result);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, uploadPhoto);
    }),

    /**身份证图片识别 */
    getIdCardFullInfo: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getIdCardFullInfo(_ref3, _ref4) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getIdCardFullInfo$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              select = _ref4.select, call = _ref4.call, put = _ref4.put;
              _context2.next = 4;
              return call(_api_commonApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getIdCardFullInfo, payload);

            case 4:
              result = _context2.sent;
              _context2.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  IdCardFullInfo: result
                }
              });

            case 7:
              return _context2.abrupt("return", result);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, getIdCardFullInfo);
    }),

    /**身份证数字识别 */
    getIdCardBaseInfo: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getIdCardBaseInfo(_ref5, _ref6) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getIdCardBaseInfo$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref5.payload;
              select = _ref6.select, call = _ref6.call, put = _ref6.put;
              _context3.next = 4;
              return call(_api_commonApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getIdCardBaseInfo, payload);

            case 4:
              result = _context3.sent;
              _context3.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  IdCardFullInfo: result
                }
              });

            case 7:
              return _context3.abrupt("return", result);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, getIdCardBaseInfo);
    }),

    /**内容转换 */
    contentMapping: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function contentMapping(_ref7, _ref8) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function contentMapping$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref7.payload;
              select = _ref8.select, call = _ref8.call, put = _ref8.put;
              _context4.next = 4;
              return call(_api_commonApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].contentMapping, payload);

            case 4:
              result = _context4.sent;
              _context4.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  content: result
                }
              });

            case 7:
              return _context4.abrupt("return", result);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, contentMapping);
    }),

    /*获取公司信息*/
    getCompanyById: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getCompanyById(_ref9, _ref10) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getCompanyById$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              payload = _ref9.payload;
              select = _ref10.select, call = _ref10.call, put = _ref10.put;
              _context5.next = 4;
              return call(_api_commonApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getCompanyById, {
                id: _utils_common__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getCompanyId()
              });

            case 4:
              result = _context5.sent;
              _context5.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  companyInfo: result
                }
              });

            case 7:
              return _context5.abrupt("return", result);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, getCompanyById);
    }),
    // 缩短小程序参数
    contentMappingAdd: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function contentMappingAdd(_ref11, _ref12) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function contentMappingAdd$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              payload = _ref11.payload;
              select = _ref12.select, call = _ref12.call, put = _ref12.put;
              _context6.next = 4;
              return call(_api_commonApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].contentMappingAdd, payload);

            case 4:
              result = _context6.sent;
              return _context6.abrupt("return", result);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, contentMappingAdd);
    }),
    // 获取门店信息
    getShopById: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getShopById(_ref13, _ref14) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getShopById$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              payload = _ref13.payload;
              select = _ref14.select, call = _ref14.call, put = _ref14.put;
              _context7.next = 4;
              return call(_api_commonApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getShopById, {
                id: _utils_common__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getShopId()
              });

            case 4:
              result = _context7.sent;
              _context7.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  shopInfo: result
                }
              });

            case 7:
              return _context7.abrupt("return", result);

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, getShopById);
    }),
    // 获取
    geocode: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function geocode(_ref15, _ref16) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function geocode$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              payload = _ref15.payload;
              select = _ref16.select, call = _ref16.call, put = _ref16.put;
              _context8.next = 4;
              return call(_api_commonApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].geocode, payload);

            case 4:
              result = _context8.sent;
              return _context8.abrupt("return", result.dataList);

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, geocode);
    })
  },
  reducers: {
    updateState: function updateState(state, _ref17) {
      var payload = _ref17.payload;
      return Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), payload);
    }
  }
});

/***/ }),

/***/ "./src/models/contract.ts":
/*!********************************!*\
  !*** ./src/models/contract.ts ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva-model-extend */ "./node_modules/dva-model-extend/lib/index.js");
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dva_model_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/models/common.ts");
/* harmony import */ var _api_contractApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/contractApi */ "./src/api/contractApi.ts");




/* harmony default export */ __webpack_exports__["a"] = (dva_model_extend__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  namespace: 'contract',
  state: {
    contractDetail: {},
    //合同详情
    eleccontractDetail: {} //电子合同

  },
  effects: {
    /** 查询合同详情*/
    queryContractDetail: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function queryContractDetail(_ref, _ref2) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function queryContractDetail$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put, select = _ref2.select, call = _ref2.call;
              _context.next = 4;
              return call(_api_contractApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getContractDetail, payload);

            case 4:
              res = _context.sent;
              _context.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  contractDetail: res
                }
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, queryContractDetail);
    }),
    clearDetail: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function clearDetail(_ref3, _ref4) {
      var payload, put, select, call;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function clearDetail$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put, select = _ref4.select, call = _ref4.call;
              _context2.next = 4;
              return put({
                type: 'updateState',
                payload: {
                  contractDetail: {}
                }
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, clearDetail);
    }),

    /** 查询电子合同*/
    getEleccontractDetail: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getEleccontractDetail(_ref5, _ref6) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getEleccontractDetail$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref5.payload;
              put = _ref6.put, select = _ref6.select, call = _ref6.call;
              _context3.next = 4;
              return call(_api_contractApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getEleccontractDetail, payload);

            case 4:
              res = _context3.sent;
              _context3.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  eleccontractDetail: res
                }
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, getEleccontractDetail);
    }),

    /** 签署电子合同*/
    getContractSign: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getContractSign(_ref7, _ref8) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getContractSign$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref7.payload;
              put = _ref8.put, select = _ref8.select, call = _ref8.call;
              _context4.next = 4;
              return call(_api_contractApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getContractSign, payload);

            case 4:
              res = _context4.sent;
              _context4.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  eleccontractDetail: res
                }
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, getContractSign);
    })
  }
}));

/***/ }),

/***/ "./src/models/findAunt.ts":
/*!********************************!*\
  !*** ./src/models/findAunt.ts ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dva-model-extend */ "./node_modules/dva-model-extend/lib/index.js");
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dva_model_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/models/common.ts");
/* harmony import */ var _api_resumeApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/resumeApi */ "./src/api/resumeApi.ts");





/* harmony default export */ __webpack_exports__["a"] = (dva_model_extend__WEBPACK_IMPORTED_MODULE_2___default()(_common__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
  namespace: 'findAunt',
  state: {
    JobIntensionsList: [] //求职工种

  },
  effects: {
    /** 查询在职工种数据字典*/
    queryJobIntensionsListDictionary: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function queryJobIntensionsListDictionary(_ref, _ref2) {
      var payload, put, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function queryJobIntensionsListDictionary$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put, call = _ref2.call;
              _context.next = 4;
              return call(_api_resumeApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].queryDictionary, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, payload), {}, {
                'cateId': 11
              }));

            case 4:
              res = _context.sent;
              _context.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  JobIntensionsList: res.dataList
                }
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, queryJobIntensionsListDictionary);
    }),

    /** 提交阿姨意向*/
    auntPossibleAdd: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function auntPossibleAdd(_ref3, _ref4) {
      var payload, put, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function auntPossibleAdd$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put, call = _ref4.call;
              _context2.next = 4;
              return call(_api_resumeApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].auntpossibleAdd, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, payload));

            case 4:
              res = _context2.sent;
              return _context2.abrupt("return", true);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, auntPossibleAdd);
    })
  },
  reducers: {
    updateState: function updateState(state, _ref5) {
      var payload = _ref5.payload;
      return Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state), payload);
    }
  }
}));

/***/ }),

/***/ "./src/models/home.ts":
/*!****************************!*\
  !*** ./src/models/home.ts ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva-model-extend */ "./node_modules/dva-model-extend/lib/index.js");
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dva_model_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/models/common.ts");
/* harmony import */ var _api_homeApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/homeApi */ "./src/api/homeApi.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["a"] = (dva_model_extend__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  namespace: 'home',
  state: {
    taskCalendar: [],
    //任务日历
    taskList: [] //任务列表

  },
  effects: {
    /** 查询任务日历*/
    queryTaskCalendar: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function queryTaskCalendar(_ref, _ref2) {
      var payload, put, select, call, res, _res$dataList, dataList, data;

      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function queryTaskCalendar$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put, select = _ref2.select, call = _ref2.call;
              _context.next = 4;
              return call(_api_homeApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].queryTaskCalendar, payload);

            case 4:
              res = _context.sent;
              _res$dataList = res.dataList, dataList = _res$dataList === void 0 ? [] : _res$dataList;
              data = dataList.filter(function (item) {
                return item.num > 0;
              }).map(function (item) {
                return moment__WEBPACK_IMPORTED_MODULE_4___default()(item.date).format("YYYY-MM-DD");
              });
              _context.next = 9;
              return put({
                type: 'updateState',
                payload: {
                  taskCalendar: data
                }
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, queryTaskCalendar);
    }),

    /** 查询任务列表*/
    queryTaskList: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function queryTaskList(_ref3, _ref4) {
      var payload, put, select, call, res, _res$dataList2, dataList;

      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function queryTaskList$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put, select = _ref4.select, call = _ref4.call;
              _context2.next = 4;
              return call(_api_homeApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].queryTaskList, payload);

            case 4:
              res = _context2.sent;
              _res$dataList2 = res.dataList, dataList = _res$dataList2 === void 0 ? [] : _res$dataList2;
              _context2.next = 8;
              return put({
                type: 'updateState',
                payload: {
                  taskList: dataList
                }
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, queryTaskList);
    })
  }
}));

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/models/common.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/models/user.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/models/home.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table */ "./src/models/table.ts");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorization */ "./src/models/authorization.ts");
/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contract */ "./src/models/contract.ts");
/* harmony import */ var _resume__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume */ "./src/models/resume.ts");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video */ "./src/models/video.ts");
/* harmony import */ var _findAunt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./findAunt */ "./src/models/findAunt.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service */ "./src/models/service.ts");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order */ "./src/models/order.ts");
/* harmony import */ var _mine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mine */ "./src/models/mine.ts");












/* harmony default export */ __webpack_exports__["a"] = ([_common__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _user__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _home__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _table__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _authorization__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _contract__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _resume__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], _video__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], _findAunt__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _service__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], _order__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], _mine__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]]);

/***/ }),

/***/ "./src/models/mine.ts":
/*!****************************!*\
  !*** ./src/models/mine.ts ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_userApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/userApi */ "./src/api/userApi.ts");



/* harmony default export */ __webpack_exports__["a"] = ({
  namespace: 'mine',
  state: {
    mineInfo: {},
    globalConfig: {},
    allRewardCount: {},
    posterInfo: {},
    invateUrlInfo: {}
  },
  effects: {
    queryAuntMine: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function queryAuntMine(_ref, _ref2) {
      var payload, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function queryAuntMine$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              call = _ref2.call, put = _ref2.put;
              _context.next = 4;
              return call(_api_userApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].queryAuntMine, payload);

            case 4:
              result = _context.sent;
              _context.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  mineInfo: result || {}
                }
              });

            case 7:
              return _context.abrupt("return", result);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, queryAuntMine);
    }),
    globalConfigQuery: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function globalConfigQuery(_ref3, _ref4) {
      var payload, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function globalConfigQuery$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              call = _ref4.call, put = _ref4.put;
              _context2.next = 4;
              return call(_api_userApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].globalconfigQuery, payload);

            case 4:
              result = _context2.sent;
              _context2.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  globalConfig: result || {}
                }
              });

            case 7:
              return _context2.abrupt("return", result);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, globalConfigQuery);
    }),
    getAllRewardCount: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getAllRewardCount(_ref5, _ref6) {
      var payload, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getAllRewardCount$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref5.payload;
              call = _ref6.call, put = _ref6.put;
              _context3.next = 4;
              return call(_api_userApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getAllRewardCount, payload);

            case 4:
              result = _context3.sent;
              _context3.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  allRewardCount: result || {}
                }
              });

            case 7:
              return _context3.abrupt("return", result);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, getAllRewardCount);
    }),
    querySharePoster: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function querySharePoster(_ref7, _ref8) {
      var payload, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function querySharePoster$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref7.payload;
              call = _ref8.call, put = _ref8.put;
              _context4.next = 4;
              return call(_api_userApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].querySharePoster, payload);

            case 4:
              result = _context4.sent;

              if (!(result.dataList && result.dataList.length > 0)) {
                _context4.next = 9;
                break;
              }

              _context4.next = 8;
              return put({
                type: 'updateState',
                payload: {
                  posterInfo: result.dataList[0] || {}
                }
              });

            case 8:
              return _context4.abrupt("return", result.dataList[0]);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, querySharePoster);
    }),
    getInviteUrl: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getInviteUrl(_ref9, _ref10) {
      var payload, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getInviteUrl$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              payload = _ref9.payload;
              call = _ref10.call, put = _ref10.put;
              _context5.next = 4;
              return call(_api_userApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getInviteUrl, payload);

            case 4:
              result = _context5.sent;
              _context5.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  invateUrlInfo: result || {}
                }
              });

            case 7:
              return _context5.abrupt("return", result);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, getInviteUrl);
    }),
    changeVal: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function changeVal(_ref11, _ref12) {
      var payload, put;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function changeVal$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              payload = _ref11.payload;
              put = _ref12.put;
              _context6.next = 4;
              return put({
                type: 'updateState',
                payload: Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, payload)
              });

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, changeVal);
    })
  },
  reducers: {
    updateState: function updateState(state, _ref13) {
      var payload = _ref13.payload;
      return Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), payload);
    }
  }
});

/***/ }),

/***/ "./src/models/order.ts":
/*!*****************************!*\
  !*** ./src/models/order.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_orderApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/orderApi */ "./src/api/orderApi.ts");



/* harmony default export */ __webpack_exports__["a"] = ({
  namespace: 'order',
  state: {
    detail: {},
    companyInfo: {}
  },
  effects: {
    getNow: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getNow(_ref, _ref2) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getNow$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              select = _ref2.select, call = _ref2.call, put = _ref2.put;
              _context.next = 4;
              return call(_api_orderApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].fetchNow, payload);

            case 4:
              result = _context.sent;
              console.log(result, '111111');
              return _context.abrupt("return", result);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, getNow);
    }),
    getFetcherInfoDetail: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getFetcherInfoDetail(_ref3, _ref4) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getFetcherInfoDetail$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              select = _ref4.select, call = _ref4.call, put = _ref4.put;
              _context2.next = 4;
              return call(_api_orderApi__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].fetchInfoDetail, payload);

            case 4:
              result = _context2.sent;
              _context2.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  detail: result
                }
              });

            case 7:
              console.log(result);
              return _context2.abrupt("return", result);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, getFetcherInfoDetail);
    })
  },
  reducers: {
    updateState: function updateState(state, _ref5) {
      var payload = _ref5.payload;
      return Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), payload);
    }
  }
});

/***/ }),

/***/ "./src/models/resume.ts":
/*!******************************!*\
  !*** ./src/models/resume.ts ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dva-model-extend */ "./node_modules/dva-model-extend/lib/index.js");
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dva_model_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/models/common.ts");
/* harmony import */ var _api_resumeApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/resumeApi */ "./src/api/resumeApi.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");






/* harmony default export */ __webpack_exports__["a"] = (dva_model_extend__WEBPACK_IMPORTED_MODULE_2___default()(_common__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
  namespace: 'resume',
  state: {
    ResumeDetail: {},
    //简历详情
    JobIntensionsList: [],
    //求职工种
    fullscreen: false,
    //视频全屏
    op: {
      workTimeList: [],
      WorkingLifeDataArr: [],
      education: [],
      marriedList: [],
      mandarinAbleList: [],
      visaList: [],
      //签证
      bloodTypeList: [] //血型

    },
    opCustom: {
      auntCertTextListCustom: [],
      compositeListCustom: []
    }
  },
  effects: {
    /** 查询简历详情*/
    queryResumeDetail: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function queryResumeDetail(_ref, _ref2) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function queryResumeDetail$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put, select = _ref2.select, call = _ref2.call;
              _context.next = 4;
              return call(_api_resumeApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getResumeDetail, payload);

            case 4:
              res = _context.sent;
              _context.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  ResumeDetail: res
                }
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, queryResumeDetail);
    }),

    /** 保存阿姨简历*/
    saveAunt: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function saveAunt(_ref3, _ref4) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function saveAunt$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put, select = _ref4.select, call = _ref4.call;
              _context2.next = 4;
              return call(_api_resumeApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].saveAunt, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, payload), {}, {
                shopId: _utils_common__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getShopId()
              }));

            case 4:
              res = _context2.sent;
              _context2.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  ResumeDetail: res
                }
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, saveAunt);
    }),

    /** 查询在职工种数据字典*/
    queryJobIntensionsListDictionary: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function queryJobIntensionsListDictionary(_ref5, _ref6) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function queryJobIntensionsListDictionary$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref5.payload;
              put = _ref6.put, select = _ref6.select, call = _ref6.call;
              _context3.next = 4;
              return call(_api_resumeApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].queryDictionary, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, payload), {}, {
                cateId: 11,
                companyId: _utils_common__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getCompanyId()
              }));

            case 4:
              res = _context3.sent;
              _context3.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  JobIntensionsList: res.dataList
                }
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, queryJobIntensionsListDictionary);
    }),
    setFullscreen: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function setFullscreen(_ref7, _ref8) {
      var payload, put, select, call;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function setFullscreen$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref7.payload;
              put = _ref8.put, select = _ref8.select, call = _ref8.call;
              _context4.next = 4;
              return put({
                type: 'updateState',
                payload: {
                  fullscreen: payload
                }
              });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, setFullscreen);
    }),

    /**查询简历编辑字典参数 */
    getCommonOption: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getCommonOption(_ref9, _ref10) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getCommonOption$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              payload = _ref9.payload;
              select = _ref10.select, call = _ref10.call, put = _ref10.put;
              _context5.next = 4;
              return call(_api_resumeApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getCommonOption1, payload);

            case 4:
              result = _context5.sent;
              _context5.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  op: Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, result), {}, {
                    WorkingLifeDataArr: result.workingLifeItems.map(function (item) {
                      return {
                        id: item.value,
                        name: item.text
                      };
                    }) || [],
                    education: result.education.map(function (item) {
                      return item.text;
                    }) || [],
                    marriedList: result.marriedList.map(function (item) {
                      return item.text;
                    }) || [],
                    mandarinAbleList: result.mandarinAbleList.map(function (item) {
                      return item.text;
                    }) || [],
                    visaList: result.visaList.map(function (item) {
                      return item.text;
                    }) || [],
                    bloodTypeList: result.bloodTypeList.map(function (item) {
                      return item.text;
                    }) || []
                  })
                }
              });

            case 7:
              return _context5.abrupt("return", result);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, getCommonOption);
    }),

    /**查询自定义标签*/
    getShopLibrary: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getShopLibrary(_ref11, _ref12) {
      var payload, select, call, put, compositeListCustom, auntCertTextListCustom;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getShopLibrary$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              payload = _ref11.payload;
              select = _ref12.select, call = _ref12.call, put = _ref12.put;
              _context6.next = 4;
              return call(_api_resumeApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getShopLibrary, {
                pageNum: 0,
                pageSize: 100,
                type: 3
              });

            case 4:
              compositeListCustom = _context6.sent;
              _context6.next = 7;
              return call(_api_resumeApi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getShopLibrary, {
                pageNum: 0,
                pageSize: 100,
                type: 4
              });

            case 7:
              auntCertTextListCustom = _context6.sent;
              _context6.next = 10;
              return put({
                type: 'updateState',
                payload: {
                  opCustom: {
                    compositeListCustom: (compositeListCustom === null || compositeListCustom === void 0 ? void 0 : compositeListCustom.dataList.map(function (item) {
                      return item.content;
                    })) || [],
                    auntCertTextListCustom: (auntCertTextListCustom === null || auntCertTextListCustom === void 0 ? void 0 : auntCertTextListCustom.dataList.map(function (item) {
                      return item.content;
                    })) || []
                  }
                }
              });

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, getShopLibrary);
    })
  }
}));

/***/ }),

/***/ "./src/models/service.ts":
/*!*******************************!*\
  !*** ./src/models/service.ts ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva-model-extend */ "./node_modules/dva-model-extend/lib/index.js");
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dva_model_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/models/common.ts");
/* harmony import */ var _api_serviceApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/serviceApi */ "./src/api/serviceApi.ts");




/* harmony default export */ __webpack_exports__["a"] = (dva_model_extend__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  namespace: 'service',
  state: {
    cleanOrder: {} //保洁单详情

  },
  effects: {
    /** 查询保洁单派单记录*/
    getCleanOrder: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getCleanOrder(_ref, _ref2) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getCleanOrder$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put, select = _ref2.select, call = _ref2.call;
              _context.next = 4;
              return call(_api_serviceApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getCleanOrder, payload);

            case 4:
              res = _context.sent;
              _context.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  cleanOrder: res
                }
              });

            case 7:
              return _context.abrupt("return", res);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, getCleanOrder);
    }),

    /** 下工签到*/
    endWorkSign: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function endWorkSign(_ref3, _ref4) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function endWorkSign$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put, select = _ref4.select, call = _ref4.call;
              _context2.next = 4;
              return call(_api_serviceApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].endWorkSign, payload);

            case 4:
              res = _context2.sent;
              _context2.next = 7;
              return put({
                type: 'getCleanOrder',
                payload: {
                  id: payload.id
                }
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, endWorkSign);
    }),

    /** 上工签到*/
    startWorkSign: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function startWorkSign(_ref5, _ref6) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function startWorkSign$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref5.payload;
              put = _ref6.put, select = _ref6.select, call = _ref6.call;
              _context3.next = 4;
              return call(_api_serviceApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].startWorkSign, payload);

            case 4:
              res = _context3.sent;
              _context3.next = 7;
              return put({
                type: 'getCleanOrder',
                payload: {
                  id: payload.id
                }
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, startWorkSign);
    }),

    /** 上传下工图片*/
    saveEndWorkImgs: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function saveEndWorkImgs(_ref7, _ref8) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function saveEndWorkImgs$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref7.payload;
              put = _ref8.put, select = _ref8.select, call = _ref8.call;
              _context4.next = 4;
              return call(_api_serviceApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].saveEndWorkImgs, payload);

            case 4:
              res = _context4.sent;
              _context4.next = 7;
              return put({
                type: 'getCleanOrder',
                payload: {
                  id: payload.id
                }
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, saveEndWorkImgs);
    }),

    /** 上传上工图片*/
    saveStartWorkImgs: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function saveStartWorkImgs(_ref9, _ref10) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function saveStartWorkImgs$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              payload = _ref9.payload;
              put = _ref10.put, select = _ref10.select, call = _ref10.call;
              _context5.next = 4;
              return call(_api_serviceApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].saveStartWorkImgs, payload);

            case 4:
              res = _context5.sent;
              _context5.next = 7;
              return put({
                type: 'getCleanOrder',
                payload: {
                  id: payload.id
                }
              });

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, saveStartWorkImgs);
    }),
    clearDetail: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function clearDetail(_ref11, _ref12) {
      var payload, put, select, call;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function clearDetail$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              payload = _ref11.payload;
              put = _ref12.put, select = _ref12.select, call = _ref12.call;
              _context6.next = 4;
              return put({
                type: 'updateState',
                payload: {
                  cleanOrder: {}
                }
              });

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, clearDetail);
    })
  }
}));

/***/ }),

/***/ "./src/models/table.ts":
/*!*****************************!*\
  !*** ./src/models/table.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_tableApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/tableApi */ "./src/api/tableApi.ts");




var TableModel = {
  namespace: 'table',
  state: {
    contract_list: {},
    nav_list: {},
    service_list: {},
    fetcherInfo_list: {}
  },
  effects: {
    /** 获取合同列表*/
    getContractList: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function getContractList(_ref, _ref2) {
      var payload, put, select, call, resdata;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getContractList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put, select = _ref2.select, call = _ref2.call;
              _context.next = 4;
              return call(_api_tableApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getContractList, payload);

            case 4:
              resdata = _context.sent;
              _context.next = 7;
              return getTable({
                resdata: resdata,
                payload: payload
              }, {
                put: put,
                select: select
              }, 'contract_list');

            case 7:
              return _context.abrupt("return", _context.sent);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, getContractList);
    }),

    /** 获取导航列表*/
    getGeoPlaceList: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function getGeoPlaceList(_ref3, _ref4) {
      var payload, put, select, call, resdata;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getGeoPlaceList$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put, select = _ref4.select, call = _ref4.call;
              _context2.next = 4;
              return call(_api_tableApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getGeoPlaceList, payload);

            case 4:
              resdata = _context2.sent;
              _context2.next = 7;
              return getTable({
                resdata: resdata,
                payload: payload
              }, {
                put: put,
                select: select
              }, 'nav_list');

            case 7:
              return _context2.abrupt("return", _context2.sent);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, getGeoPlaceList);
    }),

    /** 获取服务单列表*/
    getServiceList: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function getServiceList(_ref5, _ref6) {
      var payload, put, select, call, resdata;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getServiceList$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref5.payload;
              put = _ref6.put, select = _ref6.select, call = _ref6.call;
              _context3.next = 4;
              return call(_api_tableApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getServiceList, payload);

            case 4:
              resdata = _context3.sent;
              _context3.next = 7;
              return getTable({
                resdata: resdata,
                payload: payload
              }, {
                put: put,
                select: select
              }, 'service_list');

            case 7:
              return _context3.abrupt("return", _context3.sent);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, getServiceList);
    }),

    /** 获取抢单列表*/
    getFetcherInfoList: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function getFetcherInfoList(_ref7, _ref8) {
      var payload, put, select, call, resdata;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getFetcherInfoList$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref7.payload;
              put = _ref8.put, select = _ref8.select, call = _ref8.call;
              _context4.next = 4;
              return call(_api_tableApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getFetcherInfoList, payload);

            case 4:
              resdata = _context4.sent;
              _context4.next = 7;
              return getTable({
                resdata: resdata,
                payload: payload
              }, {
                put: put,
                select: select
              }, 'fetcherInfo_list');

            case 7:
              return _context4.abrupt("return", _context4.sent);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, getFetcherInfoList);
    })
  },
  reducers: {
    setTable: function setTable(state, _ref9) {
      var page_list = _ref9.payload.page_list;
      return Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state), page_list);
    }
  }
};

var getTable = /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function getTable(_ref10, _ref11, tableName) {
  var resdata, payload, put, select, data, total, init, oldPage, nodata, page_list;
  return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getTable$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          resdata = _ref10.resdata, payload = _ref10.payload;
          put = _ref11.put, select = _ref11.select;
          data = resdata.dataList;
          total = resdata.totalCount;
          init = payload.pageNum == 0 ? true : false; //加载更多

          if (init) {
            _context5.next = 10;
            break;
          }

          _context5.next = 8;
          return select(function (state) {
            var _state$table$tableNam;

            return ((_state$table$tableNam = state.table[tableName]) === null || _state$table$tableNam === void 0 ? void 0 : _state$table$tableNam.data) || [];
          });

        case 8:
          oldPage = _context5.sent;
          data = oldPage.concat(data);

        case 10:
          nodata = data.length >= total; //后台数据没有传总条数情况下，前端判断

          if (resdata.dataList.length == 0) {
            nodata = true;
          }

          page_list = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, tableName, {
            data: data,
            payload: payload,
            total: total,
            init: init,
            nodata: nodata
          });
          _context5.next = 15;
          return put({
            type: 'setTable',
            payload: {
              page_list: page_list
            }
          });

        case 15:
          return _context5.abrupt("return", data);

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, getTable);
});

/* harmony default export */ __webpack_exports__["a"] = (TableModel);

/***/ }),

/***/ "./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dva-model-extend */ "./node_modules/dva-model-extend/lib/index.js");
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dva_model_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/common */ "./src/models/common.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");
/* harmony import */ var _api_userApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/userApi */ "./src/api/userApi.ts");






/* harmony default export */ __webpack_exports__["a"] = (dva_model_extend__WEBPACK_IMPORTED_MODULE_2___default()(_models_common__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
  namespace: 'user',
  state: {
    openid: "",
    actType: "",
    userType: "",
    token: "",
    userId: "",
    fansInfo: {
      openId: "",
      unionId: "",
      nickName: "",
      sex: "",
      country: "",
      province: "",
      city: "",
      headImgUrl: ""
    },
    user: {
      id: "",
      companyId: "",
      phone: "",
      name: "",
      headImgUrl: ""
    }
  },
  effects: {
    // 查询用户信息
    loadUserInfo: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function loadUserInfo(_ref, _ref2) {
      var payload, select, call, put, user;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function loadUserInfo$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              select = _ref2.select, call = _ref2.call, put = _ref2.put;
              _context.next = 4;
              return _utils_common__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getUser();

            case 4:
              user = _context.sent;
              console.log('user ', user);
              _context.next = 8;
              return put({
                type: 'updateStore',
                payload: {
                  id: user.id,
                  name: user.name || '',
                  nickname: user.nickname || '',
                  phone: user.phone || '',
                  headImgUrl: user.headImgUrl || '',
                  // 头像
                  idcard: user.idcard || '',
                  sex: user.sex || 0,
                  birthday: user.birthday || 0,
                  companyId: user.companyId || '',
                  // 公司id
                  province: user.province || '',
                  city: user.city || '',
                  district: user.district || '',
                  addTime: user.addTime || 0,
                  // 添加时间
                  addShopId: user.addShopId || '',
                  // 添加店铺id
                  addUserId: user.addUserId || '',
                  // 添加人id
                  state: user.state || 0,
                  // 状态
                  stateChangeTime: user.stateChangeTime || 0
                }
              });

            case 8:
              return _context.abrupt("return", user);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, loadUserInfo);
    }),
    // 保存用户信息
    saveUserInfo: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function saveUserInfo(_ref3, _ref4) {
      var _payload$fansInfo, _payload$fansInfo2, _payload$fansInfo3, _payload$fansInfo4, _payload$fansInfo5, _payload$fansInfo6, _payload$fansInfo7, _payload$fansInfo8, _payload$user, _payload$user2, _payload$user3, _payload$user4, _payload$user5;

      var payload, select, call, put, user;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function saveUserInfo$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              select = _ref4.select, call = _ref4.call, put = _ref4.put;
              console.log('save user ', payload);
              _utils_common__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].setToken(payload.token);
              _utils_common__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].setOpenId(payload.openid || '');
              _utils_common__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].saveUser(payload.user);
              user = payload.user;
              _context2.next = 9;
              return put({
                type: 'updateStore',
                payload: {
                  openid: payload.openid,
                  actType: payload.actType,
                  userType: payload.userType,
                  token: payload.token,
                  userId: payload.userId,
                  fansInfo: {
                    openId: ((_payload$fansInfo = payload.fansInfo) === null || _payload$fansInfo === void 0 ? void 0 : _payload$fansInfo.openId) || '',
                    unionId: ((_payload$fansInfo2 = payload.fansInfo) === null || _payload$fansInfo2 === void 0 ? void 0 : _payload$fansInfo2.unionId) || '',
                    nickName: ((_payload$fansInfo3 = payload.fansInfo) === null || _payload$fansInfo3 === void 0 ? void 0 : _payload$fansInfo3.nickName) || '',
                    sex: ((_payload$fansInfo4 = payload.fansInfo) === null || _payload$fansInfo4 === void 0 ? void 0 : _payload$fansInfo4.sex) || '',
                    country: ((_payload$fansInfo5 = payload.fansInfo) === null || _payload$fansInfo5 === void 0 ? void 0 : _payload$fansInfo5.country) || '',
                    province: ((_payload$fansInfo6 = payload.fansInfo) === null || _payload$fansInfo6 === void 0 ? void 0 : _payload$fansInfo6.province) || '',
                    city: ((_payload$fansInfo7 = payload.fansInfo) === null || _payload$fansInfo7 === void 0 ? void 0 : _payload$fansInfo7.city) || '',
                    headImgUrl: ((_payload$fansInfo8 = payload.fansInfo) === null || _payload$fansInfo8 === void 0 ? void 0 : _payload$fansInfo8.headImgUrl) || ''
                  },
                  user: {
                    id: ((_payload$user = payload.user) === null || _payload$user === void 0 ? void 0 : _payload$user.id) || '',
                    companyId: ((_payload$user2 = payload.user) === null || _payload$user2 === void 0 ? void 0 : _payload$user2.companyId) || '',
                    phone: ((_payload$user3 = payload.user) === null || _payload$user3 === void 0 ? void 0 : _payload$user3.openId) || '',
                    name: ((_payload$user4 = payload.user) === null || _payload$user4 === void 0 ? void 0 : _payload$user4.name) || '',
                    headImgUrl: ((_payload$user5 = payload.user) === null || _payload$user5 === void 0 ? void 0 : _payload$user5.headImgUrl) || ''
                  }
                }
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, saveUserInfo);
    }),
    // 查询个人信息 (头像,昵称 等资料)
    getPersonInfo: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getPersonInfo(_ref5, _ref6) {
      var payload, select, call, put, user;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getPersonInfo$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref5.payload;
              select = _ref6.select, call = _ref6.call, put = _ref6.put;
              _context3.next = 4;
              return call(_api_userApi__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getPersonInfo, payload);

            case 4:
              user = _context3.sent;
              _utils_common__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].saveUser(user);
              _context3.next = 8;
              return put({
                type: 'updateStore',
                payload: {
                  id: user.id,
                  name: user.name || '',
                  nickname: user.nickname || '',
                  phone: user.phone || '',
                  headImgUrl: user.headImgUrl || '',
                  // 头像
                  idcard: user.idcard || '',
                  sex: user.sex || 0,
                  birthday: user.birthday || 0,
                  companyId: user.companyId || '',
                  // 公司id
                  province: user.province || '',
                  city: user.city || '',
                  district: user.district || '',
                  addTime: user.addTime || 0,
                  // 添加时间
                  addShopId: user.addShopId || '',
                  // 添加店铺id
                  addUserId: user.addUserId || '',
                  // 添加人id
                  state: user.state || 0,
                  // 状态
                  stateChangeTime: user.stateChangeTime || 0
                }
              });

            case 8:
              return _context3.abrupt("return", user);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, getPersonInfo);
    }),
    // 更新用户资料
    updatePersonInfo: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function updatePersonInfo(_ref7, _ref8) {
      var payload, select, call, put, result;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function updatePersonInfo$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref7.payload;
              select = _ref8.select, call = _ref8.call, put = _ref8.put;
              _context4.next = 4;
              return call(_api_userApi__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].updatePersonInfo, payload);

            case 4:
              result = _context4.sent;
              _context4.next = 7;
              return put({
                type: 'updateStore'
              });

            case 7:
              return _context4.abrupt("return", result);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, updatePersonInfo);
    })
  },
  reducers: {
    updateStore: function updateStore(state, _ref9) {
      var payload = _ref9.payload;
      return Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), payload);
    }
  }
}));

/***/ }),

/***/ "./src/models/video.ts":
/*!*****************************!*\
  !*** ./src/models/video.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva-model-extend */ "./node_modules/dva-model-extend/lib/index.js");
/* harmony import */ var dva_model_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dva_model_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/models/common.ts");
/* harmony import */ var _api_videoApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/videoApi */ "./src/api/videoApi.ts");




/* harmony default export */ __webpack_exports__["a"] = (dva_model_extend__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  namespace: 'video',
  state: {},
  effects: {
    /** 查询视频课程*/
    queryTranscribe: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function queryTranscribe(_ref, _ref2) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function queryTranscribe$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              put = _ref2.put, select = _ref2.select, call = _ref2.call;
              _context.next = 4;
              return call(_api_videoApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].queryTranscribe, payload);

            case 4:
              res = _context.sent;
              _context.next = 7;
              return put({
                type: 'updateState',
                payload: {
                  videoDetail: res
                }
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, queryTranscribe);
    }),

    /** 获取用户资料*/
    miniDecode: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function miniDecode(_ref3, _ref4) {
      var payload, put, select, call, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function miniDecode$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put, select = _ref4.select, call = _ref4.call;
              _context2.next = 4;
              return call(_api_videoApi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].miniDecode, payload);

            case 4:
              res = _context2.sent;
              return _context2.abrupt("return", res);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, miniDecode);
    }),
    clear: /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function clear(_ref5, _ref6) {
      var payload, put, select, call;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function clear$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref5.payload;
              put = _ref6.put, select = _ref6.select, call = _ref6.call;
              _context3.next = 4;
              return put({
                type: 'updateState',
                payload: {
                  videoDetail: {}
                }
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, clear);
    })
  }
}));

/***/ }),

/***/ "./src/utils/dva.ts":
/*!**************************!*\
  !*** ./src/utils/dva.ts ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var dva_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dva-core */ "./node_modules/dva-core/dist/index.esm.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dva_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dva-loading */ "./node_modules/dva-loading/dist/index.esm.js");



var app;
var store;
var dispatch;
var registered;

var createApp = function createApp(opt) {
  // redux日志
  opt.onAction = [Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])()];
  app = Object(dva_core__WEBPACK_IMPORTED_MODULE_0__[/* create */ "a"])(opt);
  app.use(Object(dva_loading__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}));
  if (!registered) opt.models.forEach(function (model) {
    return app.model(model);
  });
  registered = true;
  app.start();
  store = app._store;

  app.getStore = function () {
    return store;
  };

  app.use({
    onError: function onError(err) {
      console.log(err);
    }
  });
  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  createApp: createApp,
  getDispatch: function getDispatch() {
    return app.dispatch;
  }
});

/***/ })

},[["./src/app.tsx","runtime","taro","vendors","common"]]]);;
//# sourceMappingURL=app.js.map