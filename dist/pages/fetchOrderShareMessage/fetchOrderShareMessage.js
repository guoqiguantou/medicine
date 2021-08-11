(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/fetchOrderShareMessage/fetchOrderShareMessage"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/fetchOrderShareMessage/fetchOrderShareMessage.tsx":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/fetchOrderShareMessage/fetchOrderShareMessage.tsx ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchOrderShareMessage; });
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
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");
/* harmony import */ var _utils_tip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/tip */ "./src/utils/tip.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_stringUtil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/utils/stringUtil */ "./src/utils/stringUtil.ts");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/common/constant */ "./src/common/constant.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./index.scss */ "./src/pages/fetchOrderShareMessage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_18__);









var _dec, _class, _temp;













var FetchOrderShareMessage = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[/* connect */ "b"])(function (_ref) {
  var order = _ref.order,
      common = _ref.common,
      table = _ref.table;
  return {
    order: order,
    common: common,
    table: table
  };
}), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(FetchOrderShareMessage, _Component);

  var _super = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(FetchOrderShareMessage);

  function FetchOrderShareMessage() {
    var _this;

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, FetchOrderShareMessage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "skipLogin", false);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "clueId", void 0);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "user", {});

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      isGetPhone: false // 是否是获取手机号授权

    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "decodeID", /*#__PURE__*/Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var optionsSync, scene, paramId, s, p, res, _ref3, content, _p;

      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              optionsSync = _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.getCurrentInstance().router.params; //获取页面参数

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
                _context.next = 13;
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
              if (_p.companyId) _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].setCompanyId(_p.companyId);
              if (_p.shopId) _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].setShopId(_p.shopId);
              if (_p.clueId) _this.clueId = _p.clueId;

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "fetchDetail", function () {
      _this.props.dispatch({
        type: 'order/getFetcherInfoDetail',
        payload: {
          id: _this.clueId
        }
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "fetchShop", function () {
      _this.props.dispatch({
        type: 'common/getShopById'
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "fetchList", function () {
      var params = {
        pageNum: 0,
        pageSize: 10,
        companyId: _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].getCompanyId(),
        shopId: _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].getShopId(),
        sortInfos: [{
          field: "recruitTime",
          sort: "desc"
        }]
      };
      return _this.props.dispatch({
        type: 'table/getFetcherInfoList',
        payload: params
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleGetPhone", function (info) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.login({
        success: function success(res) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();

          if (res.code) {
            console.log('wx login ', res);

            _this.miniPhone(res.code, info);
          } else {
            console.log('登录失败！' + res.errMsg);
            _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips('获取用户信息失败,请稍后重试');
          }
        },
        fail: function fail(err) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();
          _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips(err.errMsg);
        }
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleGetUserInfo", function (info) {
      if (_this.skipLogin) {
        _this.fetch();

        return;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.showLoading({
        title: '获取中...'
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.login({
        success: function success(res) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();

          if (res.code) {
            console.log('wx login ', res);

            _this.miniExplicit(res.code, info);
          } else {
            console.log('登录失败！' + res.errMsg);
            _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips('获取用户信息失败,请稍后重试');
          }
        },
        fail: function fail(err) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();
          _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips(err.errMsg);
        }
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "miniExplicit", function (code, info) {
      var dispatch = _this.props.dispatch;
      var params = {
        appId: "wx777285ea85ec1149",
        companyId: _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].getCompanyId(),
        code: code,
        encryptedData: info.detail.encryptedData,
        iv: info.detail.iv
      };
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.showLoading({
        title: '获取中...'
      });
      dispatch({
        type: 'authorization/miniExplicit',
        payload: params
      }).then(function (res) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();

        if (res.actType === 2) {
          _this.setState({
            isGetPhone: true
          }, function () {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.showModal({
              title: '提示',
              content: '您的微信还未绑定手机号,请再次点击立即抢单以绑定手机号',
              cancelColor: '#333333',
              confirmColor: '#f54949'
            });
          });
        } else if (res.actType === 3) {
          _this.user = res;

          _this.fetch();
        }
      }).catch(function (err) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();
        _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips(err.msg);
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "miniPhone", function (code, info) {
      var dispatch = _this.props.dispatch;
      var params = {
        appId: "wx777285ea85ec1149",
        companyId: _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].getCompanyId(),
        code: code,
        encryptedData: info.detail.encryptedData,
        iv: info.detail.iv
      };
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.showLoading({
        title: '获取中...'
      });
      dispatch({
        type: 'authorization/miniPhone',
        payload: params
      }).then(function (res) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();
        _this.user = res;

        _this.fetch();
      }).catch(function (err) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();
        _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips(err.msg);
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "fetch", function () {
      _this.props.dispatch({
        type: 'order/getNow',
        payload: {
          auntName: _this.user.fansInfo.nickName,
          auntPhoto: _this.user.fansInfo.headImgUrl,
          auntPhone: _this.user.user.phone,
          id: _this.clueId
        }
      }).then(function (res) {
        if (res) {
          _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips('抢单成功！');

          _this.fetchDetail();
        }
      }).catch(function (res) {
        _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips(res.msg);
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "getShareId", /*#__PURE__*/Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var companyId, shopId, res;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              companyId = _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].getCompanyId();
              shopId = _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].getShopId();
              _context2.next = 4;
              return _this.props.dispatch({
                type: 'common/contentMappingAdd',
                payload: {
                  content: "companyId=".concat(companyId, "&shopId=").concat(shopId, "&clueId=").concat(_this.clueId),
                  type: 1
                }
              });

            case 4:
              res = _context2.sent;
              return _context2.abrupt("return", res.id);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onShareAppMessage", /*#__PURE__*/Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var common, shareId;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              common = _this.props.common;
              _context3.next = 3;
              return _this.getShareId();

            case 3:
              shareId = _context3.sent;
              return _context3.abrupt("return", {
                title: common.shopInfo.name,
                path: "/pages/fetchOrderShareMessage/fetchOrderShareMessage?id=".concat(shareId)
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onShareTimeline", /*#__PURE__*/Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var common, shareId;
      return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              common = _this.props.common;
              _context4.next = 3;
              return _this.getShareId();

            case 3:
              shareId = _context4.sent;
              return _context4.abrupt("return", {
                title: common.shopInfo.name,
                path: "/pages/fetchOrderShareMessage/fetchOrderShareMessage?id=".concat(shareId)
              });

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "callPhone", function (tel) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.makePhoneCall({
        phoneNumber: tel
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "goMap", function () {
      var _order$detail;

      var order = _this.props.order;

      if (!((_order$detail = order.detail) === null || _order$detail === void 0 ? void 0 : _order$detail.address)) {
        return;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.openLocation({
        latitude: order.detail.latitude,
        longitude: order.detail.longitude,
        address: order.detail.address,
        name: order.detail.name,
        scale: 18
      });
    });

    return _this;
  }

  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(FetchOrderShareMessage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.decodeID();

              case 2:
                this.fetchDetail();
                this.queryActType();
                this.fetchShop();
                this.fetchList();

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "queryActType",
    // 先通过静默授权  查询用户状态
    // 需要操作的行为：1、需要显式授权；2、需要绑定手机号；3、已登录
    value: function queryActType() {
      var _this2 = this;

      var dispatch = this.props.dispatch;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.login({
        success: function success(res) {
          if (res.code) {
            console.log('wx login ', res);
            var params = {
              code: res.code,
              appId: "wx777285ea85ec1149",
              companyId: _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].getCompanyId(),
              shopId: _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].getShopId()
            };
            dispatch({
              type: 'authorization/miniSilence',
              payload: params
            }).then(function (res) {
              if (res.actType === 2) {
                _this2.setState({
                  isGetPhone: true
                });
              } else if (res.actType === 3) {
                _this2.skipLogin = true;
                _this2.user = res;
              }
            });
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        },
        fail: function fail(err) {
          console.log('登录失败！' + err.errMsg);
        }
      });
    } // 微信授权获取手机号

  }, {
    key: "render",
    value: function render() {
      var _table$fetcherInfo_li,
          _table$fetcherInfo_li2,
          _data$,
          _order$detail2,
          _order$detail3,
          _order$detail4,
          _order$detail5,
          _order$detail6,
          _this3 = this,
          _order$detail8,
          _order$detail9,
          _order$detail10,
          _order$detail11;

      var _this$props = this.props,
          order = _this$props.order,
          common = _this$props.common,
          table = _this$props.table;
      var total = (table === null || table === void 0 ? void 0 : (_table$fetcherInfo_li = table.fetcherInfo_list) === null || _table$fetcherInfo_li === void 0 ? void 0 : _table$fetcherInfo_li.total) || 0;
      var data = (table === null || table === void 0 ? void 0 : (_table$fetcherInfo_li2 = table.fetcherInfo_list) === null || _table$fetcherInfo_li2 === void 0 ? void 0 : _table$fetcherInfo_li2.data) || [];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "orderDetail fixedView"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        title: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "company"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "companyInfo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "left_image"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Image"], {
        className: "left_image_style",
        mode: "aspectFit",
        src: common.shopInfo.logoUrl || _common_constant__WEBPACK_IMPORTED_MODULE_17__[/* DefaultShopPic */ "a"]
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "left_info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("view", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "text_name"
      }, common.shopInfo.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("view", {
        className: "text_order_number"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, "\u8BE5\u4F01\u4E1A\u6709", total, "\u7B14\u8BA2\u5355")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "companyTime"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, moment__WEBPACK_IMPORTED_MODULE_15___default()((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.addTime).format('MM-DD'), "\u66F4\u65B0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "content_main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "dispatch_owner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "dispatch_owner_top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "name"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, "\u7F16\u53F7: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, (_order$detail2 = order.detail) === null || _order$detail2 === void 0 ? void 0 : _order$detail2.id)), ((_order$detail3 = order.detail) === null || _order$detail3 === void 0 ? void 0 : _order$detail3.addTime) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "time"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, " ", moment__WEBPACK_IMPORTED_MODULE_15___default()(order.detail.addTime).format("YYYY.MM.DD HH:mm:ss"), "\u53D1\u5E03"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "dispatch_owner_center",
        onClick: this.goMap
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, "\u5BA2\u6237\u9700\u6C42 : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, (((_order$detail4 = order.detail) === null || _order$detail4 === void 0 ? void 0 : _order$detail4.productList) || []).map(function (item) {
        return item.name;
      }).join('、'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, "\u670D\u52A1\u5730\u5740 : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, ((_order$detail5 = order.detail) === null || _order$detail5 === void 0 ? void 0 : _order$detail5.address) || '-'))), ((_order$detail6 = order.detail) === null || _order$detail6 === void 0 ? void 0 : _order$detail6.address) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "iconfont iconyoujiantou"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "dispatch_owner_bottom",
        onClick: function onClick() {
          var _order$detail7;

          _this3.callPhone((_order$detail7 = order.detail) === null || _order$detail7 === void 0 ? void 0 : _order$detail7.dealUserPhone);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "dispatch_owner_info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "iconfont icon-jiaose"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "dispatch_person"
      }, "\u53D1\u6D3B\u4EBA : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "dispatch_person_name"
      }, (_order$detail8 = order.detail) === null || _order$detail8 === void 0 ? void 0 : _order$detail8.dealUserName, " (", (_order$detail9 = order.detail) === null || _order$detail9 === void 0 ? void 0 : _order$detail9.dealUserPhone, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "dispatch_owner_icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "iconfont iconphone6dianhua"
      }))))), (((_order$detail10 = order.detail) === null || _order$detail10 === void 0 ? void 0 : _order$detail10.grabAuntList) || []).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "content_fetcher_list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "dispatcher_title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, "\u62A2\u5355\u4EBA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "dispatcher_fetcher_detail"
      }, (((_order$detail11 = order.detail) === null || _order$detail11 === void 0 ? void 0 : _order$detail11.grabAuntList) || []).map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
          className: "fetcher_detail_style",
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
          className: "name"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Image"], {
          className: "img",
          src: item.auntPhoto || _common_constant__WEBPACK_IMPORTED_MODULE_17__[/* DefaultUserPic */ "b"],
          mode: "aspectFill"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          className: "text"
        }, item.auntName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          className: "phone"
        }, Object(_utils_stringUtil__WEBPACK_IMPORTED_MODULE_16__[/* displayPartNumber */ "a"])(item.auntPhone)));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "fixedBtnView btnFooter"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        openType: "share",
        className: "share_button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "iconfont iconicon-test"
      }), "\u8F6C\u53D1"), this.state.isGetPhone ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "fetch_button",
        openType: "getPhoneNumber",
        onGetPhoneNumber: this.handleGetPhone
      }, "\u7ACB\u5373\u62A2\u5355") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "fetch_button",
        openType: "getUserInfo",
        onGetUserInfo: this.handleGetUserInfo
      }, "\u7ACB\u5373\u62A2\u5355")));
    }
  }]);

  return FetchOrderShareMessage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]), _temp)) || _class);


/***/ }),

/***/ "./src/pages/fetchOrderShareMessage/fetchOrderShareMessage.tsx":
/*!*********************************************************************!*\
  !*** ./src/pages/fetchOrderShareMessage/fetchOrderShareMessage.tsx ***!
  \*********************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_fetchOrderShareMessage_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./fetchOrderShareMessage.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/fetchOrderShareMessage/fetchOrderShareMessage.tsx");


var config = {"enableShareAppMessage":true,"enableShareTimeline":true};
_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_fetchOrderShareMessage_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareTimeline = true
_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_fetchOrderShareMessage_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_fetchOrderShareMessage_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/fetchOrderShareMessage/fetchOrderShareMessage', {}, config || {}))



/***/ }),

/***/ "./src/pages/fetchOrderShareMessage/index.scss":
/*!*****************************************************!*\
  !*** ./src/pages/fetchOrderShareMessage/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/fetchOrderShareMessage/fetchOrderShareMessage.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=fetchOrderShareMessage.js.map