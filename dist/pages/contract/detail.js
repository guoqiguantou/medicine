(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/contract/detail"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/contract/detail.tsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/contract/detail.tsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");
/* harmony import */ var _contract_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contract.less */ "./src/pages/contract/contract.less");
/* harmony import */ var _contract_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_contract_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/common/constant */ "./src/common/constant.ts");












var useDidShow = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.useDidShow;
/**合同详情页面
 * 合同状态说明：state= 0 =>已取消;state= 1且serviceState=1 =>履行中;
 * state= 1且serviceState=2 =>已完成;state= 1且serviceState=0 =>已签约
 */

var ContractDetail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  // useEffect(() => {
  //   loadDetail();
  // }, []);
  useDidShow(function () {
    loadDetail();
  });

  var loadDetail = function loadDetail() {
    var id = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getCurrentInstance().router.params.id;
    var dispatch = props.dispatch;
    dispatch({
      type: 'contract/queryContractDetail',
      payload: {
        id: id
      }
    });
    return function () {
      dispatch({
        type: 'contract/clearDetail'
      });
    };
  };

  function onImageClick(item) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [item];
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.previewImage({
      current: item,
      urls: list
    });
  }

  function gotoEVisa(item) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo({
      url: "/pages/contract/eVisa?id=".concat(item.elecContractId)
    });
  }

  var contractDetail = props.contract.contractDetail;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "contractDetail fixedView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "\u5408\u540C\u8BE6\u60C5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "detailTop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "topItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "text"
  }, "\u5408\u540C\u7F16\u53F7: ", contractDetail.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
      text: true,
      status: true,
      disabledText: contractDetail.state === 0
    })
  }, (_common_constant__WEBPACK_IMPORTED_MODULE_11__[/* CONTACT_STATE */ "a"].find(function (item) {
    return item.state == contractDetail.state;
  }) || {}).title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "topItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "text"
  }, "\u670D\u52A1\u7C7B\u578B: ", contractDetail.productName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "topItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "text"
  }, "\u4E1A\u52A1\u5458: ", contractDetail.addUserName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u5BA2\u6237\u59D3\u540D:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.customerName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u8EAB\u4EFD\u8BC1\u53F7:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.customerIdcard)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u5BA2\u6237\u5730\u5740:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.province, contractDetail.city, contractDetail.district, contractDetail.address))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u5DE5\u8D44\u53D1\u653E\u65E5:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.grentSalaryDay ? "\u6BCF\u6708".concat(contractDetail.grentSalaryDay, "\u65E5") : '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u7EA6\u5B9A\u5B9A\u91D1:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.deposit ? contractDetail.deposit / 100 + '元' : '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u7EA6\u5B9A\u5C3E\u6B3E:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.balancePayment ? contractDetail.balancePayment / 100 + '元' : '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u9884\u4EA7\u671F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.dueTime ? contractDetail.dueTime.split(' ')[0] : '-'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u5BB6\u653F\u5458\u59D3\u540D:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.auntName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u5408\u540C\u5F00\u59CB\u65E5\u671F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, moment__WEBPACK_IMPORTED_MODULE_8___default()(contractDetail.effectTime).format('YYYY.MM.DD'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u5408\u540C\u7ED3\u675F\u65E5\u671F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, moment__WEBPACK_IMPORTED_MODULE_8___default()(contractDetail.expireTime).format('YYYY.MM.DD'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u662F\u5426\u4F4F\u5BB6:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.liveIn == 1 ? '住家' : '不住家')), contractDetail.restDays && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u6708\u4F11\u606F\u5929\u6570:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.restDays, "\u5929"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u5BA2\u6237\u670D\u52A1\u8D39:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, _utils_common__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].con_number_format(contractDetail.customerMidFee), "\u5143")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u5BB6\u653F\u5458\u670D\u52A1\u8D39:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, _utils_common__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].con_number_format(contractDetail.auntMidFee), "\u5143")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u5BB6\u653F\u5458\u5DE5\u8D44:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, _utils_common__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].con_number_format(contractDetail.auntSalary), "\u5143")), contractDetail.remark && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u5907\u6CE8\u4FE1\u606F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.remark)), contractDetail.sideAgreement && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u8865\u5145\u534F\u8BAE:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, contractDetail.sideAgreement)), ((contractDetail === null || contractDetail === void 0 ? void 0 : contractDetail.enclosureList) || []).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "listTitle"
  }, "\u9644\u4EF6:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "listText"
  }, ((contractDetail === null || contractDetail === void 0 ? void 0 : contractDetail.enclosureList) || []).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      key: item,
      mode: "aspectFill",
      src: item,
      className: "listImage",
      onClick: function onClick() {
        onImageClick(item, (contractDetail === null || contractDetail === void 0 ? void 0 : contractDetail.enclosureList) || []);
      }
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "fixedBtnView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_4__["AtButton"], {
    type: "primary",
    className: "fixedBtn",
    onClick: function onClick() {
      gotoEVisa(contractDetail);
    },
    disabled: !contractDetail.elecContractId
  }, "\u67E5\u770B\u7535\u5B50\u7B7E", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
      yellowText: contractDetail.auntSignFlag == 1 && contractDetail.elecContractId
    })
  }, "(", contractDetail.elecContractId ? contractDetail.auntSignFlag == 1 ? '已签署' : '待签署' : '未发起', ")"))));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* connect */ "b"])(function (_ref) {
  var contract = _ref.contract,
      dispatch = _ref.dispatch;
  return {
    contract: contract,
    dispatch: dispatch
  };
})(ContractDetail));

/***/ }),

/***/ "./src/pages/contract/detail.tsx":
/*!***************************************!*\
  !*** ./src/pages/contract/detail.tsx ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_detail_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./detail.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/contract/detail.tsx");


var config = {"navigationBarTitleText":"合同详情"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_detail_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/contract/detail', {}, config || {}))



/***/ })

},[["./src/pages/contract/detail.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=detail.js.map