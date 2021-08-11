(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/recomWait/recomWait"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/mine/recomWait/recomWait.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/mine/recomWait/recomWait.tsx ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _recomWait_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recomWait.less */ "./src/pages/mine/recomWait/recomWait.less");
/* harmony import */ var _recomWait_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_recomWait_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_Btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/Btn */ "./src/pages/mine/recomWait/component/Btn.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");









var RecomWait = function RecomWait(props) {
  var dispatch = props.dispatch,
      mine = props.mine;
  var mineInfo = mine.mineInfo,
      globalConfig = mine.globalConfig;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsOpen(!!globalConfig.auntInviteToggle);
  }, [globalConfig.auntInviteToggle]);
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useDidShow"])(function () {
    dispatch({
      type: 'mine/queryAuntMine'
    });
    dispatch({
      type: 'mine/globalConfigQuery'
    });
  });

  var _ss = function _ss() {
    var _arr = isOpen ? ['1.邀请好友', '2.好友注册', '3.获取奖励'] : ['1.邀请好友', '2.好友注册', '3.门店审核'];

    return _arr.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
        key: item,
        className: "rec2-21"
      }, item);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "recom-wait"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u8F6C\u4ECB\u7ECD" // noBg
    ,
    titleStyle: {
      color: '#fff !important'
    },
    propBarStyle: {
      background: 'transparent'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "https://oss.bm001.com/static/ka/a/".concat(isOpen ? 'kqjl' : 'wkqjl', "-banner.png"),
    className: "rec1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec3",
    onClick: function onClick() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
        url: '/pages/mine/cumulatReward/cumulatReward'
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "rec3-text"
  }, "\u67E5\u770B\u4ECB\u7ECD\u8BB0\u5F55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "iconfont iconyoujiantou rec3-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-11"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "rec2-111"
  }, "\uFFE5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "rec2-112"
  }, (mineInfo.inviteReward || 0) / 100)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-12"
  }, "\u7D2F\u8BA1\u5956\u52B1(\u5143)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-11 rec2-13"
  }, mineInfo.inviteNum || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-12"
  }, "\u7D2F\u8BA1\u4ECB\u7ECD(\u4EBA)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-15"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "https://oss.bm001.com/static/ka/a/link.png",
    className: "rec2-16"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-17"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Btn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    text: '转介绍流程'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-18"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "https://oss.bm001.com/static/ka/a/".concat(isOpen ? '' : 'no-', "open.png"),
    className: "rec2-19"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-20"
  }, _ss())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-22"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "https://oss.bm001.com/static/ka/a/dashed.png",
    className: "rec2-25"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Btn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    text: '奖励说明'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-26"
  }, isOpen ? '您的好友扫码海报或点击链接即可打开注册页面，填写注册信息并点击提交，家政公司即可对信息进行审核，审核成功后，您可联系家政公司线下索取奖励。' : '您的好友扫码海报或点击链接即可打开注册页面，填写注册信息并点击提交，家政公司即可对信息进行审核，审核成功后，您的好友即成为家政服务员。')), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-15"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "https://oss.bm001.com/static/ka/a/link.png",
    className: "rec2-16"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-27"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-28"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "rec2-29"
  }, "\u6210\u529F\u4ECB\u7ECD\u4E00\u4EBA\u53EF\u83B7\u5F97"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "rec2-30"
  }, " \uFFE5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "rec2-31"
  }, globalConfig.auntInviteReward ? globalConfig.auntInviteReward / 100 : 0, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "rec2-29"
  }, "\u5143\u5956\u52B1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec2-32"
  }, "\u5956\u52B1\u7531 ", mineInfo.shopName, " \u63D0\u4F9B")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "rec5",
    onClick: function onClick() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
        url: "/pages/mine/posterDetail/posterDetail"
      });
    }
  }, "\u70B9\u51FB\u7ACB\u5373\u9080\u8BF7"));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* connect */ "b"])(function (_ref) {
  var mine = _ref.mine,
      dispatch = _ref.dispatch,
      loading = _ref.loading;
  return {
    mine: mine,
    dispatch: dispatch,
    loading: loading.effects['findAunt/auntPossibleAdd']
  };
})(RecomWait));

/***/ }),

/***/ "./src/pages/mine/recomWait/component/Btn.tsx":
/*!****************************************************!*\
  !*** ./src/pages/mine/recomWait/component/Btn.tsx ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _recomWait_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recomWait.less */ "./src/pages/mine/recomWait/recomWait.less");
/* harmony import */ var _recomWait_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_recomWait_less__WEBPACK_IMPORTED_MODULE_2__);




var Btn = function Btn(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "btn-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "btn-1"
  }, "\xB7 ", props.text, " \xB7"));
};

/* harmony default export */ __webpack_exports__["a"] = (Btn);

/***/ }),

/***/ "./src/pages/mine/recomWait/recomWait.less":
/*!*************************************************!*\
  !*** ./src/pages/mine/recomWait/recomWait.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/mine/recomWait/recomWait.tsx":
/*!************************************************!*\
  !*** ./src/pages/mine/recomWait/recomWait.tsx ***!
  \************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_recomWait_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./recomWait.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/mine/recomWait/recomWait.tsx");


var config = {"navigationBarTitleText":"推荐服务员"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_recomWait_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/mine/recomWait/recomWait', {}, config || {}))



/***/ })

},[["./src/pages/mine/recomWait/recomWait.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=recomWait.js.map