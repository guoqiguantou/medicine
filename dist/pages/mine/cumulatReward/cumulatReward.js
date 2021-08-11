(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/cumulatReward/cumulatReward"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/mine/cumulatReward/cumulatReward.tsx":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/mine/cumulatReward/cumulatReward.tsx ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _cumulatReward_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cumulatReward.less */ "./src/pages/mine/cumulatReward/cumulatReward.less");
/* harmony import */ var _cumulatReward_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_cumulatReward_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_userApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/userApi */ "./src/api/userApi.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











var stateList = ['待审核', '邀请成功', '审核失败'];

var CumulatReward = function CumulatReward(props) {
  var dispatch = props.dispatch,
      mine = props.mine;
  var count = mine.allRewardCount;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      scrolling = _useState2[0],
      setScrolling = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3, 2),
      pageNum = _useState4[0],
      setPageNum = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState6 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, 2),
      list = _useState6[0],
      setList = _useState6[1];

  var pageSize = 20;
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__["useDidShow"])(function () {
    dispatch({
      type: "mine/getAllRewardCount"
    });

    _loadList();
  });

  var _loadList = function _loadList() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pageNum;
    _api_userApi__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].queryInviteList({
      pageNum: num,
      pageSize: pageSize,
      sortInfos: [{
        "field": "addTime",
        "sort": "desc"
      }]
    }).then(function (res) {
      if (res) {
        setPageNum(res.pageNum + 1);
        setList(function (pre) {
          return res.pageNum > 0 ? [].concat(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(pre), Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(res.dataList)) : res.dataList;
        });
      }
    }).catch(function (err) {
      _utils_common__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].error(err);
    });
  };

  var caseFfName = function caseFfName(item) {
    if (item.inviteState == 0) {
      return '转介绍奖励';
    }

    return ['待发放', '已发放'][item.rewardState];
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "cumulat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    title: "\u63A8\u8350\u8BB0\u5F55",
    propBarStyle: {
      width: '750rpx',
      flexShrink: 0
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "cu-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "cu-2"
  }, "\u7D2F\u8BA1\u4ECB\u7ECD", count.allInviteCount || 0, "\u4EBA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "cu-2"
  }, "\u5176\u4E2D\u5BA1\u6838\u6210\u529F", count.inviteSuccessCount || 0, "\u4EBA\uFF0C \u5BA1\u6838\u5931\u8D25", count.inviteFailureCount || 0, "\u4EBA\uFF0C\u5F85\u5BA1\u6838", count.inviteUnApplyCount || 0, "\u4EBA\uFF1B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "cu-2"
  }, "\u7D2F\u8BA1\u5956\u52B1", (count.allInviteReward || 0) / 100, "\u5143"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "cu-2"
  }, "\u5176\u4E2D\u5DF2\u53D1\u653E", (count.allInviteReward - count.unHandleReward || 0) / 100, "\u5143\uFF0C \u5F85\u53D1\u653E", (count.unHandleReward || 0) / 100, "\u5143\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["ScrollView"], {
    className: "cu3",
    scrollY: true,
    refresherEnabled: true,
    refresherTriggered: scrolling,
    onRefresherRefresh: function onRefresherRefresh() {
      setTimeout(function () {
        setScrolling(false);
      }, 2000);
      setPageNum(0);

      _loadList(0);
    },
    onRefresherRestore: function onRefresherRestore() {
      setScrolling(true);
    },
    onScrollToLower: function onScrollToLower() {
      _loadList();
    }
  }, list.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "cu5",
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "cu6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "cu8"
    }, item.auntPossible.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "cu9",
      onClick: function onClick() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.makePhoneCall({
          phoneNumber: item.auntPossible.phone
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "cu11"
    }, item.auntPossible.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "iconfont icon-dianhua1 cu12"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "cu10 ".concat(['cu10img', 'cu10succ', 'cu10err'][item.inviteState])
    }, stateList[item.inviteState])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "cu7"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "cu15"
    }, "\u6CE8\u518C\u65F6\u95F4: ", item.addTime && moment__WEBPACK_IMPORTED_MODULE_10___default()(item.addTime).format('YYYY-MM-DD HH:mm')), item.inviteState != 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "cu15 cu17"
    }, caseFfName(item), ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "cu16"
    }, "\uFFE5", (item.reward || 0) / 100))));
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[/* connect */ "b"])(function (_ref) {
  var mine = _ref.mine,
      dispatch = _ref.dispatch,
      loading = _ref.loading;
  return {
    mine: mine,
    dispatch: dispatch,
    loading: loading.effects['findAunt/auntPossibleAdd']
  };
})(CumulatReward));

/***/ }),

/***/ "./src/pages/mine/cumulatReward/cumulatReward.less":
/*!*********************************************************!*\
  !*** ./src/pages/mine/cumulatReward/cumulatReward.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/mine/cumulatReward/cumulatReward.tsx":
/*!********************************************************!*\
  !*** ./src/pages/mine/cumulatReward/cumulatReward.tsx ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_cumulatReward_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./cumulatReward.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/mine/cumulatReward/cumulatReward.tsx");


var config = {"navigationBarTitleText":"推荐记录"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_cumulatReward_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/mine/cumulatReward/cumulatReward', {}, config || {}))



/***/ })

},[["./src/pages/mine/cumulatReward/cumulatReward.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=cumulatReward.js.map