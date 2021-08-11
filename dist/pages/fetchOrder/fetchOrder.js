(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/fetchOrder/fetchOrder"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/fetchOrder/fetchOrder.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/fetchOrder/fetchOrder.tsx ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchOrder; });
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/List */ "./src/components/List/index.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");
/* harmony import */ var _components_OrderItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/OrderItem */ "./src/pages/fetchOrder/components/OrderItem/index.tsx");
/* harmony import */ var _utils_stringUtil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/utils/stringUtil */ "./src/utils/stringUtil.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/common/constant */ "./src/common/constant.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./index.scss */ "./src/pages/fetchOrder/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_20__);










var _dec, _class, _temp;













var FetchOrder = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[/* connect */ "b"])(function (_ref) {
  var order = _ref.order,
      common = _ref.common,
      table = _ref.table;
  return {
    order: order,
    common: common,
    table: table
  };
}), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(FetchOrder, _Component);

  var _super = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(FetchOrder);

  function FetchOrder() {
    var _this;

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, FetchOrder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "child", void 0);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "pagination", void 0);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "queryObj", void 0);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "decodeID", /*#__PURE__*/Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var optionsSync, scene, paramId, s, p, res, _ref3, content, _p;

      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              optionsSync = _tarojs_taro__WEBPACK_IMPORTED_MODULE_12___default.a.getCurrentInstance().router.params; //获取页面参数

              console.log(optionsSync, '=========进入小程序');
              scene = optionsSync.scene;

              if (scene) {
                //扫小程序码进入
                s = decodeURIComponent(scene);
                p = Object(_utils_stringUtil__WEBPACK_IMPORTED_MODULE_16__[/* parseQuery */ "b"])(s);
                paramId = p.id;
              } else {
                paramId = optionsSync.id;
              }

              if (!paramId) {
                _context.next = 12;
                break;
              }

              _context.next = 7;
              return _this.props.dispatch({
                type: 'common/contentMapping',
                payload: {
                  id: paramId
                }
              });

            case 7:
              res = _context.sent;
              _ref3 = res || {}, content = _ref3.content;
              _p = Object(_utils_stringUtil__WEBPACK_IMPORTED_MODULE_16__[/* parseQuery */ "b"])(content);
              if (_p.companyId) _utils_common__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].setCompanyId(_p.companyId);
              if (_p.shopId) _utils_common__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].setShopId(_p.shopId);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "fetchData", function (pagination, queryObj) {
      _this.pagination = pagination;
      _this.queryObj = queryObj ? queryObj : _this.queryObj;

      var params = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _this.pagination), _this.queryObj), {}, {
        sortInfos: [{
          field: "recruitTime",
          sort: "desc"
        }]
      });

      return _this.props.dispatch({
        type: 'table/getFetcherInfoList',
        payload: params
      }).catch(function (err) {
        console.log(err);
      });
    });

    return _this;
  }

  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(FetchOrder, [{
    key: "componentDidShow",
    value: function () {
      var _componentDidShow = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.decodeID();

              case 2:
                this.fetchData({
                  pageNum: 0,
                  pageSize: 10
                }, {
                  companyId: _utils_common__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].getCompanyId(),
                  shopId: _utils_common__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].getShopId()
                });
                this.props.dispatch({
                  type: 'common/getShopById'
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidShow() {
        return _componentDidShow.apply(this, arguments);
      }

      return componentDidShow;
    }()
  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      this.child.PullDownRefresh();
    }
  }, {
    key: "render",
    value: function render() {
      var _table$fetcherInfo_li,
          _table$fetcherInfo_li2,
          _common$shopInfo,
          _common$shopInfo2,
          _data$,
          _this2 = this;

      var _this$props = this.props,
          common = _this$props.common,
          table = _this$props.table;
      var data = (table === null || table === void 0 ? void 0 : (_table$fetcherInfo_li = table.fetcherInfo_list) === null || _table$fetcherInfo_li === void 0 ? void 0 : _table$fetcherInfo_li.data) || [];
      var total = (table === null || table === void 0 ? void 0 : (_table$fetcherInfo_li2 = table.fetcherInfo_list) === null || _table$fetcherInfo_li2 === void 0 ? void 0 : _table$fetcherInfo_li2.total) || 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["View"], {
        className: "order ListPage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        title: "\u62DB\u8058\u680F"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["View"], {
        className: "content_title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["View"], {
        className: "content_title_left flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["View"], {
        className: "left_image"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["Image"], {
        className: "left_image_style",
        mode: "aspectFit",
        src: ((_common$shopInfo = common.shopInfo) === null || _common$shopInfo === void 0 ? void 0 : _common$shopInfo.logoUrl) || _common_constant__WEBPACK_IMPORTED_MODULE_19__[/* DefaultShopPic */ "a"]
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["View"], {
        className: "left_info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        className: "text_name"
      }, ((_common$shopInfo2 = common.shopInfo) === null || _common$shopInfo2 === void 0 ? void 0 : _common$shopInfo2.name) || '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["View"], {
        className: "text_order_number"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["Text"], null, "\u8BE5\u4F01\u4E1A\u6709", total, "\u7B14\u8BA2\u5355")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["View"], {
        className: "content_title_right flex special"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__["Text"], null, moment__WEBPACK_IMPORTED_MODULE_18___default()((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.addTime).format('MM-DD'), "\u66F4\u65B0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        name: "fetcherInfo_list",
        onChange: this.fetchData,
        onRef: function onRef(ref) {
          _this2.child = ref;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_OrderItem__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], null)));
    }
  }]);

  return FetchOrder;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]), _temp)) || _class);


/***/ }),

/***/ "./src/pages/fetchOrder/components/OrderItem/index.less":
/*!**************************************************************!*\
  !*** ./src/pages/fetchOrder/components/OrderItem/index.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/fetchOrder/components/OrderItem/index.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/fetchOrder/components/OrderItem/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/common/constant */ "./src/common/constant.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./index.less */ "./src/pages/fetchOrder/components/OrderItem/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_17__);









var _dec, _class, _temp;











var OrderItem = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[/* connect */ "b"])(function (_ref) {
  var table = _ref.table;
  return {
    table: table
  };
}), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(OrderItem, _Component);

  var _super = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(OrderItem);

  function OrderItem(props) {
    var _this;

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, OrderItem);

    _this = _super.call(this, props);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "goDetail", /*#__PURE__*/function () {
      var _ref2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var companyId, shopId, res;
        return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                companyId = _utils_common__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].getCompanyId();
                shopId = _utils_common__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].getShopId();
                _context.next = 4;
                return _this.props.dispatch({
                  type: 'common/contentMappingAdd',
                  payload: {
                    content: "companyId=".concat(companyId, "&shopId=").concat(shopId, "&clueId=").concat(id),
                    type: 1
                  }
                });

              case 4:
                res = _context.sent;
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.navigateTo({
                  url: "/pages/fetchOrderShareMessage/fetchOrderShareMessage?id=".concat(res.id)
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(OrderItem, [{
    key: "render",
    value: function render() {
      var _table$fetcherInfo_li,
          _this2 = this;

      var table = this.props.table;
      var data = (table === null || table === void 0 ? void 0 : (_table$fetcherInfo_li = table.fetcherInfo_list) === null || _table$fetcherInfo_li === void 0 ? void 0 : _table$fetcherInfo_li.data) || [];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["View"], {
        className: "list"
      }, data.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["View"], {
          onClick: function onClick() {
            _this2.goDetail(item.id);
          },
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
          title: "".concat(item.id)
        }, item.addTime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["View"], {
          className: "listItem"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["Text"], null, "\u53D1\u5E03\u65F6\u95F4:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["View"], {
          className: "listText"
        }, moment__WEBPACK_IMPORTED_MODULE_14___default()(item.addTime).format("YYYY.MM.DD HH:mm:ss"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["View"], {
          className: "listItem"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["Text"], null, "\u5BA2\u6237\u9700\u6C42:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["View"], {
          className: "listText"
        }, item.productList.map(function (item) {
          return item.name;
        }).join('、'))), item.address && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["View"], {
          className: "listItem"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["Text"], null, "\u670D\u52A1\u5730\u5740:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["View"], {
          className: "listText"
        }, item.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_12__["AtDivider"], {
          lineColor: "#f3f4f5",
          className: "divider"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["View"], {
          className: "listBottom"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["View"], {
          className: "left"
        }, ((item === null || item === void 0 ? void 0 : item.grabAuntList) || []).map(function (item, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["Image"], {
            className: "avatar_style_radius",
            key: index,
            src: item.auntPhoto || _common_constant__WEBPACK_IMPORTED_MODULE_16__[/* DefaultUserPic */ "b"],
            style: "width:30px;height:30px",
            mode: "aspectFill"
          });
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["View"], {
          className: "right"
        }, item.grabAuntList ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          className: "rightText"
        }, "\u6709", ((item === null || item === void 0 ? void 0 : item.grabAuntList) || []).length, "\u4EBA\u5728\u62A2") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          className: "rightText"
        }, "\u5F85\u62A2\u5355")))));
      }));
    }
  }]);

  return OrderItem;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]), _temp)) || _class);
/* harmony default export */ __webpack_exports__["a"] = (OrderItem);

/***/ }),

/***/ "./src/pages/fetchOrder/fetchOrder.tsx":
/*!*********************************************!*\
  !*** ./src/pages/fetchOrder/fetchOrder.tsx ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_fetchOrder_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./fetchOrder.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/fetchOrder/fetchOrder.tsx");


var config = {"enablePullDownRefresh":true,"navigationBarTitleText":"招聘栏"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_fetchOrder_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/fetchOrder/fetchOrder', {}, config || {}))



/***/ }),

/***/ "./src/pages/fetchOrder/index.scss":
/*!*****************************************!*\
  !*** ./src/pages/fetchOrder/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/fetchOrder/fetchOrder.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=fetchOrder.js.map