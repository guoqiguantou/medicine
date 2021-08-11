(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/video/video"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/video/video.tsx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/video/video.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Empty */ "./src/components/Empty/index.jsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");
/* harmony import */ var _utils_tip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/tip */ "./src/utils/tip.ts");
/* harmony import */ var _video_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./video.less */ "./src/pages/video/video.less");
/* harmony import */ var _video_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_video_less__WEBPACK_IMPORTED_MODULE_14__);







var _dec, _class, _temp;










var VideoPage = (
/**视频课程 */
_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[/* connect */ "b"])(function (_ref) {
  var video = _ref.video,
      dispatch = _ref.dispatch;
  return {
    video: video,
    dispatch: dispatch
  };
}), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(VideoPage, _Component);

  var _super = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(VideoPage);

  function VideoPage(props) {
    var _this;

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, VideoPage);

    _this = _super.call(this, props);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "id", void 0);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "shareCode", void 0);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onCall", function (phoneNumber) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.makePhoneCall({
        phoneNumber: phoneNumber //仅为示例，并非真实的电话号码

      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "queryActType", function () {
      var dispatch = _this.props.dispatch;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.login({
        success: function success(res) {
          if (res.code) {
            console.log('wx login ', res);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getUserInfo({
              success: function success(userInfo) {
                console.log(userInfo);

                _this.setState({
                  skipLogin: true
                });

                _this.miniDecode(res.code, userInfo);
              },
              fail: function fail(err) {
                _this.setState({
                  skipLogin: false
                });

                console.log('微信登录失败', err);
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
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "handleGetUserInfo", function (info) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading({
        title: '登录中...'
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.login({
        success: function success(res) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();

          if (res.code) {
            console.log('wx login ', res, info);

            _this.miniDecode(res.code, info.detail);
          } else {
            console.log('登录失败！' + res.errMsg);
            _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips('获取用户信息失败,请稍后重试');
          }
        },
        fail: function fail(err) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
          _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips(err.errMsg);
        }
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "miniDecode", function (code, info) {
      _this.props.dispatch({
        type: 'video/miniDecode',
        payload: {
          appId: "wx777285ea85ec1149",
          code: code,
          iv: info.iv,
          encryptedData: info.encryptedData
        }
      }).then(function (r) {
        _this.setState({
          skipLogin: true
        });

        _this.props.dispatch({
          type: 'video/queryTranscribe',
          payload: {
            id: _this.id,
            shareCode: _this.shareCode,
            openId: r.openId
          }
        }).catch(function (err) {
          console.log(err);
          _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips(err.errMsg);
        });
      }).catch(function (err) {
        _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips(err.errMsg);
      });
    });

    _this.state = {
      skipLogin: true //是否静默登录

    };
    return _this;
  }

  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(VideoPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var optionsSync = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getCurrentInstance().router.params;
      console.log(optionsSync, '=========进入小程序');
      var id = optionsSync.id,
          shareCode = optionsSync.shareCode;

      if (!id) {
        _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips('请使用分享链接进入哦', 'none', 3000);
      }

      this.id = id;
      this.shareCode = shareCode;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.dispatch({
        type: 'video/clear'
      });
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      if (this.id) {
        this.queryActType();
      }
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(res) {
      var videoDetail = this.props.video.videoDetail;

      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }

      return {
        title: "".concat(videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.shopName, "-").concat(videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.name),
        path: "/pages/video/video?id=".concat(videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.id, "&shareCode=").concat(this.shareCode)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var videoDetail = this.props.video.videoDetail;
      var skipLogin = this.state.skipLogin;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        title: "\u5728\u7EBF\u8BFE\u7A0B"
      }), videoDetail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "videoWarp"
      }, (videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.playbackSliceUrl) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Video"], {
        src: (videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.playbackSliceUrl) || null,
        controls: true,
        autoplay: false,
        poster: videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.coverUrl,
        initialTime: "0",
        id: "video",
        loop: false,
        muted: false
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Image"], {
        src: videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.coverUrl,
        className: "videoImg",
        mode: "widthFix",
        onClick: function onClick() {
          _utils_tip__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].showTips('回放地址为空');
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "videoInfo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "videoName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "videoTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "Text"
      }, videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtTag"], {
        size: "small",
        active: true
      }, "\u76F4\u64AD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "VideoSource"
      }, "\u8BFE\u7A0B\u6765\u6E90\uFF1A", videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.shopName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "videoShare"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "iconBtn",
        onClick: function onClick() {
          (videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.shopTel) && _this2.onCall(videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.shopTel);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtIcon"], {
        value: "phone",
        size: "20",
        color: "#6aabf2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "Text"
      }, "\u7535\u8BDD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "line"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "iconBtn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtIcon"], {
        value: "external-link",
        size: "20",
        color: "#e37f58"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "Text"
      }, "\u5206\u4EAB"), videoDetail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        openType: "share",
        className: "share-btn"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "videoDesc"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "videoDescName"
      }, "\u8BFE\u7A0B\u7B80\u4ECB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "videoDescText"
      }, videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.introduction), ((videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.picUrls) || []).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Image"], {
          src: item,
          className: "videoDescImg",
          mode: "widthFix",
          key: item
        });
      }), ((videoDetail === null || videoDetail === void 0 ? void 0 : videoDetail.picUrls) || []).length == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "nodata"
      }, "\u6682\u65E0\u8BFE\u7A0B\u7B80\u4ECB"))) : skipLogin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Empty__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Empty__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "videoLogin"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "videoLoginText"
      }, "\u70B9\u51FB\u6388\u6743"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "videoLoginBtn",
        openType: "getUserInfo",
        onGetUserInfo: this.handleGetUserInfo
      }, "\u70B9\u51FB\u6388\u6743"))));
    }
  }]);

  return VideoPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]), _temp)) || _class);


/***/ }),

/***/ "./src/pages/video/video.less":
/*!************************************!*\
  !*** ./src/pages/video/video.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/video/video.tsx":
/*!***********************************!*\
  !*** ./src/pages/video/video.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_video_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./video.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/video/video.tsx");


var config = {"enableShareAppMessage":true,"navigationBarTitleText":"在线课程"};

_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_video_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_video_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/video/video', {}, config || {}))



/***/ })

},[["./src/pages/video/video.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=video.js.map