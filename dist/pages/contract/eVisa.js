(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/contract/eVisa"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/contract/eVisa.tsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/contract/eVisa.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");
/* harmony import */ var _utils_tip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/tip */ "./src/utils/tip.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");
/* harmony import */ var _utils_stringUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/stringUtil */ "./src/utils/stringUtil.ts");
/* harmony import */ var _contract_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contract.less */ "./src/pages/contract/contract.less");
/* harmony import */ var _contract_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_contract_less__WEBPACK_IMPORTED_MODULE_10__);











/**电子签详情页面*/

var ContractEVisa = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props, ref) {
  var router = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var routerParams = router.params; //获取页面参数

  var id = routerParams.id,
      loginId = routerParams.loginId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      err = _useState2[0],
      setErr = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(loginId, '===========');

    if (loginId) {
      props.dispatch({
        type: 'common/contentMapping',
        payload: {
          id: loginId
        }
      }).then(function (res) {
        var _ref = res || {},
            content = _ref.content;

        var p = Object(_utils_stringUtil__WEBPACK_IMPORTED_MODULE_9__[/* parseQuery */ "b"])(content);
        _utils_common__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].setCompanyId(p.companyId);
        _utils_common__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].setShopId(p.shopId);
        console.log('companyId', p.companyId, 'shopId', p.shopId, p, '===========');
        var token = _utils_common__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].getToken();

        if (!token) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
            url: '/pages/login/login'
          });
        }
      });
    }

    var dispatch = props.dispatch;
    dispatch({
      type: 'contract/getEleccontractDetail',
      payload: {
        "bmContractId": id
      }
    }).catch(function (err) {
      setErr(true);
      _utils_tip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].showTips(err.msg);
      console.log(err);
    });
  }, []);

  function getContractSign() {
    var dispatch = props.dispatch;
    dispatch({
      type: 'contract/getContractSign',
      payload: {
        "bmContractId": id
      }
    }).then(function (res) {
      dispatch({
        type: 'contract/getEleccontractDetail',
        payload: {
          "bmContractId": id
        }
      }).catch(function (err) {
        _utils_tip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].showTips(err.msg);
        console.log(err);
      });
    }).catch(function (err) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].showTips(err.msg);
      console.log(err);
    });
  }

  var eleccontractDetail = props.contract.eleccontractDetail;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "contractEVisa fixedView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    title: "\u7535\u5B50\u7B7E"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "eVisaView"
  }, (eleccontractDetail.imgUrlList || []).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Image"], {
      src: item,
      key: item,
      mode: "aspectFit"
    });
  })), eleccontractDetail && eleccontractDetail.auntSigned !== 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "fixedBtnView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtButton"], {
    type: "primary",
    className: "fixedBtn",
    disabled: props.loading || err,
    loading: props.loading,
    onClick: getContractSign
  }, "\u786E\u8BA4\u7B7E\u7F72")));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[/* connect */ "b"])(function (_ref2) {
  var contract = _ref2.contract,
      dispatch = _ref2.dispatch,
      loading = _ref2.loading;
  return {
    contract: contract,
    dispatch: dispatch,
    loading: loading.effects['contract/getContractSign']
  };
})(ContractEVisa));

/***/ }),

/***/ "./src/pages/contract/eVisa.tsx":
/*!**************************************!*\
  !*** ./src/pages/contract/eVisa.tsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_eVisa_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./eVisa.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/contract/eVisa.tsx");


var config = {"navigationBarTitleText":"电子签"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_eVisa_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/contract/eVisa', {}, config || {}))



/***/ })

},[["./src/pages/contract/eVisa.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=eVisa.js.map