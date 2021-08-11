(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/resume/addResume"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/resume/addResume.tsx":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/resume/addResume.tsx ***!
  \*********************************************************************************************************/
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
/* harmony import */ var _components_IdentityInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/IdentityInfo */ "./src/pages/resume/components/IdentityInfo/index.tsx");
/* harmony import */ var _components_JobInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/JobInfo */ "./src/pages/resume/components/JobInfo/index.tsx");
/* harmony import */ var _components_PersonalInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PersonalInfo */ "./src/pages/resume/components/PersonalInfo/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_tip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/tip */ "./src/utils/tip.ts");
/* harmony import */ var _utils_stringUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/stringUtil */ "./src/utils/stringUtil.ts");
/* harmony import */ var _resume_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resume.less */ "./src/pages/resume/resume.less");
/* harmony import */ var _resume_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_resume_less__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");















var tabList = [{
  title: '身份信息'
}, {
  title: '求职信息'
}, {
  title: '个人情况'
}];
var AddResume = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    props.dispatch({
      type: 'resume/getCommonOption'
    });
    props.dispatch({
      type: 'resume/getShopLibrary'
    });
    var optionsSync = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getCurrentInstance().router.params; //获取页面参数

    var scene = optionsSync.scene;
    console.log(optionsSync, '=========进入小程序');
    var paramId; //进入页面传递参数id=6804116092485632

    if (scene) {
      //扫小程序码进入
      var s = decodeURIComponent(scene);
      var p = Object(_utils_stringUtil__WEBPACK_IMPORTED_MODULE_12__[/* parseQuery */ "b"])(s);
      paramId = p.id;
    } else {
      paramId = optionsSync.id;
    }

    if (paramId) {
      props.dispatch({
        type: 'common/contentMapping',
        payload: {
          id: paramId
        }
      }).then(function (res) {
        var _ref = res || {},
            content = _ref.content;

        var p = Object(_utils_stringUtil__WEBPACK_IMPORTED_MODULE_12__[/* parseQuery */ "b"])(content);
        _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].setCompanyId(p.companyId);
        _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].setShopId(p.shopId);
        var token = _utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].getToken();

        if (!token) {
          //携带进入login页面标示
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
            url: '/pages/login/login?target=addResume'
          });
        }

        getDetail();
      });
    } else {
      getDetail();
    }
  }, []);

  var getDetail = function getDetail() {
    if (_utils_common__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].getCompanyId()) {
      props.dispatch({
        type: 'resume/queryJobIntensionsListDictionary',
        payload: {}
      }).then(function () {
        props.dispatch({
          type: 'resume/queryResumeDetail',
          payload: {}
        });
      });
    }
  };

  var IdentityInfoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    data1: function data1() {}
  });
  var JobInfoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    data2: function data2() {}
  });
  var PersonalInfoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    data3: function data3() {}
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  function nextStep() {
    setCurrent(current + 1);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.pageScrollTo({
      scrollTop: 0,
      duration: 0
    });
  }

  function submit() {
    var data1 = IdentityInfoRef.current.data1();
    var data2 = JobInfoRef.current.data2();
    var data3 = PersonalInfoRef.current.data3();

    if (data1 && data2 && data3) {
      var params = {
        address: {
          address: data3.address,
          city: data3.city,
          district: data3.district,
          province: data3.province
        },
        auntHeadPhoto: data2.auntHeadPhoto,
        description: {
          description: data2.description
        },
        detail: {
          height: data3.height,
          weight: data3.weight,
          married: data3.married,
          education: data3.education,
          religion: data3.religion,
          visa: data3.visa,
          bloodType: data3.bloodType,
          children: data3.children,
          childrenAge: data3.childrenAge,
          spouseJob: data3.spouseJob,
          emergencyPhone: data3.emergencyPhone
        },
        identity: data1,
        jobIntensionsList: data2.jobIntensionsList,
        jobStatus: data2.jobStatus,
        photoVideo: data2.photoVideo,
        skills: {
          cookAble: data2.cookAble,
          cuisine: data2.cuisine,
          language: data2.language,
          composite: data2.composite,
          auntCert: data3.auntCert,
          mandarinAble: data3.mandarinAble,
          maxExpectSalary: data3.maxExpectSalary,
          minExpectSalary: data3.minExpectSalary
        },
        workTime: data2.workTime,
        workType: data2.workType,
        workingExperiencesList: data3.workingExperiencesList,
        workingLife: data2.workingLife
      };
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading({
        title: '修改中...'
      });
      props.dispatch({
        type: 'resume/saveAunt',
        payload: params
      }).then(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.hideLoading();
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.showToast({
          title: '修改成功',
          icon: 'success'
        });
        var timer_back = setTimeout(function () {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.hideToast();
          timer_back && clearTimeout(timer_back);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateBack().catch(function () {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
              url: '/pages/resume/resume'
            });
          });
        }, 1000);
      }).catch(function (err) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.hideLoading();
        _utils_tip__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].showTips(err.msg);
      });
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "fixedView addResume index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    title: "\u7F16\u8F91\u7B80\u5386"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtTabs"], {
    current: current,
    tabList: tabList,
    onClick: function onClick(value) {
      setCurrent(value);
    },
    className: "BmTab",
    swipeable: false,
    animated: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
      addResumeView: true,
      hideView: current !== 0
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_IdentityInfo__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    onNextStep: nextStep,
    ref: IdentityInfoRef,
    resume: props.resume,
    dispatch: props.dispatch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
      addResumeView: true,
      hideView: current !== 1
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_JobInfo__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    onNextStep: nextStep,
    ref: JobInfoRef,
    resume: props.resume,
    dispatch: props.dispatch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
      addResumeView: true,
      hideView: current !== 2
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PersonalInfo__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    onNextStep: nextStep,
    ref: PersonalInfoRef,
    resume: props.resume
  })), current == 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "fixedBtnView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "fixedBtn",
    onClick: submit,
    disabled: props.loading,
    loading: props.loading
  }, "\u4FDD\u5B58")) : props.resume.fullscreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "fixedBtnView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "fixedBtn",
    onClick: nextStep
  }, "\u4E0B\u4E00\u6B65")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["CoverView"], {
    className: "fixedBtnView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "fixedBtn",
    onClick: nextStep
  }, "\u4E0B\u4E00\u6B65")));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[/* connect */ "b"])(function (_ref2) {
  var resume = _ref2.resume,
      dispatch = _ref2.dispatch,
      loading = _ref2.loading;
  return {
    resume: resume,
    dispatch: dispatch,
    loading: loading.effects['resume/saveAunt']
  };
})(AddResume));

/***/ }),

/***/ "./src/components/Upload/index.less":
/*!******************************************!*\
  !*** ./src/components/Upload/index.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Upload/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Upload/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./src/components/Upload/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);











//上传图片
var Upload = /*#__PURE__*/function (_Component) {
  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Upload, _Component);

  var _super = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Upload);

  function Upload(props) {
    var _this;

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Upload);

    _this = _super.call(this, props);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "chooseImage", function () {
      var onChange = _this.props.onChange;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          onChange && onChange(tempFilePaths[0]);
        },
        fail: function fail(err) {
          console.log('图片上传失败，请重试', err);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
            title: '图片上传失败，请重试',
            icon: 'none',
            duration: 2000
          });
        }
      });
    });

    _this.state = {
      image: props.propsfileList
    };
    return _this;
  }

  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Upload, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.propsfileList !== this.state.image) {
        this.setState({
          image: nextProps.propsfileList
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var image = this.state.image;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
        className: "upload"
      }, image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
        className: "idCardImg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        onClick: this.chooseImage,
        src: image,
        className: "upload-image",
        mode: "aspectFill"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
        className: "idCard",
        onClick: this.chooseImage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
        className: "iconfont icontianjiashenfenzheng idCardicon"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["Text"], {
        className: "text"
      }, "\u6DFB\u52A0\u8EAB\u4EFD\u8BC1\u81EA\u52A8\u8BC6\u522B")));
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/components/UploadAvatar/index.less":
/*!************************************************!*\
  !*** ./src/components/UploadAvatar/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/UploadAvatar/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/UploadAvatar/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadAvatar; });
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./src/components/UploadAvatar/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);













//用户头像上传
var UploadAvatar = /*#__PURE__*/function (_Component) {
  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(UploadAvatar, _Component);

  var _super = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(UploadAvatar);

  function UploadAvatar(props) {
    var _this;

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, UploadAvatar);

    _this = _super.call(this, props);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "chooseImage", function () {
      var onChange = _this.props.onChange;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(res) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading({
            title: '加载中'
          });
          var tempFilePaths = res.tempFilePaths;
          _utils_request__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].upload("https://cloudapitest.bm001.com/core/upload/uploadPic", tempFilePaths[0], true).then(function (res) {
            if (res) {
              _this.setState({
                image: res
              });

              onChange && onChange(res);
            }

            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
          }).catch(function (err) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
              title: err,
              icon: 'none',
              duration: 2000
            });
            console.log(err);
          });
        },
        fail: function fail(err) {
          console.log('图片上传失败，请重试', err);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
            title: '图片上传失败，请重试',
            icon: 'none',
            duration: 2000
          });
        }
      });
    });

    _this.state = {
      image: props.propsfileList
    };
    return _this;
  }

  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(UploadAvatar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.propsfileList !== this.state.image) {
        this.setState({
          image: nextProps.propsfileList
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var image = this.state.image;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
        className: "uploadAvatar"
      }, image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
        className: "uploadImg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        onClick: this.chooseImage,
        src: image,
        className: "upload-image",
        mode: "aspectFill"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
        className: "uploadAdd",
        onClick: this.chooseImage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_9__["AtIcon"], {
        value: "camera",
        size: "34",
        color: "#F2544E"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["Text"], {
        className: "uploadText"
      }, "\u4E0A\u4F20\u5934\u50CF"))));
    }
  }]);

  return UploadAvatar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/components/UploadVideo/index.less":
/*!***********************************************!*\
  !*** ./src/components/UploadVideo/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/UploadVideo/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/UploadVideo/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadImg; });
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.less */ "./src/components/UploadVideo/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_14__);
















//上传视频
var UploadImg = /*#__PURE__*/function (_Component) {
  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(UploadImg, _Component);

  var _super = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(UploadImg);

  function UploadImg(props) {
    var _this;

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, UploadImg);

    _this = _super.call(this, props);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "porpsList", function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return _utils_common__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].deepClone(data);
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "updatePropsList", function (data) {
      _this.setState({
        files: _this.porpsList(data)
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "handleToClose", function (img) {
      var onChange = _this.props.onChange;
      var files = _this.state.files;
      var filesArr = files.filter(function (item) {
        return item != img;
      });

      _this.setState({
        files: filesArr
      });

      onChange && onChange(filesArr);
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "chooseImage", function () {
      var onChange = _this.props.onChange;
      var files = _this.state.files;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.chooseVideo({
        sourceType: ['album', 'camera'],
        success: function success(res) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading({
            title: '加载中'
          });
          var param = {
            type: 'mp4',
            name: 'code'
          };
          var data;

          if (false) {} else {
            data = res.tempFilePath;
          }

          _utils_request__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].upload("https://cloudapitest.bm001.com/core/upload/uploadPic", data, true, param, true).then(function (res) {
            if (res) {
              var filesArr = [].concat(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(files), [res]);

              _this.setState({
                files: filesArr
              });

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
              console.log(filesArr);
              onChange && onChange(filesArr);
            }
          }).catch(function (err) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
              title: err.msg,
              icon: 'none',
              duration: 2000
            });
            console.log(err);
          });
        },
        fail: function fail(err) {
          console.log('上传失败，请重试', err);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
            title: '上传失败，请重试',
            icon: 'none',
            duration: 2000
          });
        }
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "onFullscreenChange", function (e) {
      var fullScreen = e.detail.fullScreen;
      _this.props.onFullscreenChange && _this.props.onFullscreenChange(fullScreen);
    });

    _this.state = {
      files: _this.porpsList(props.propsfileList)
    };
    return _this;
  } //初始化父组件传入数据


  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(UploadImg, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.propsfileList.length !== this.state.files.length) {
        this.updatePropsList(nextProps.propsfileList);
      }
    } //更新数据

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var files = this.state.files;
      var _this$props = this.props,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? '添加视频' : _this$props$title,
          icon = _this$props.icon;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "uploadVideo"
      }, files.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "uploadList at-row at-row--wrap"
      }, files.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
          className: "at-col at-col-4 uploadItem",
          key: item
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
          className: "uploadImg"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
          className: "uploadDel",
          onClick: function onClick() {
            _this2.handleToClose(item);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtIcon"], {
          value: "close-circle",
          size: "22",
          color: "#F2544E"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Video"], {
          className: "Video",
          src: item,
          controls: true,
          onFullscreenChange: _this2.onFullscreenChange
        })));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "at-col at-col-4 uploadItem "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "uploadAdd",
        onClick: this.chooseImage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtIcon"], {
        value: "camera",
        size: "34",
        color: "#F2544E"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "uploadText"
      }, "\u4E0A\u4F20\u89C6\u9891")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "uploadView"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "pic",
        onClick: this.chooseImage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "picTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()(['iconfont', 'picIcon', icon || 'icontianjiazhaopian'])
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "picInfo"
      }, "\u70B9\u51FB\u6253\u5F00\u76F8\u518C\u6216\u76F8\u673A"))));
    }
  }]);

  return UploadImg;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./src/pages/resume/addResume.tsx":
/*!****************************************!*\
  !*** ./src/pages/resume/addResume.tsx ***!
  \****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_addResume_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./addResume.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/resume/addResume.tsx");


var config = {"navigationBarTitleText":"编辑简历"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_addResume_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/resume/addResume', {}, config || {}))



/***/ }),

/***/ "./src/pages/resume/components/IdentityInfo/index.less":
/*!*************************************************************!*\
  !*** ./src/pages/resume/components/IdentityInfo/index.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/components/IdentityInfo/index.tsx":
/*!************************************************************!*\
  !*** ./src/pages/resume/components/IdentityInfo/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/common/constant */ "./src/common/constant.ts");
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Upload */ "./src/components/Upload/index.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_tip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/tip */ "./src/utils/tip.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.less */ "./src/pages/resume/components/IdentityInfo/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_13__);















/**第一步身份信息 */
var IdentityInfo = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function (props, ref) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    phone: '',
    name: '',
    idcard: '',
    age: '',
    nation: 0,
    birthday: '',
    constellation: 0,
    chineseZodiac: 0,
    sex: 0,
    imgUrl: ''
  }),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      formItem = _useState2[0],
      setformItem = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      more = _useState4[0],
      setMore = _useState4[1];

  var SexArr = _utils_common__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].convertMap2List(_common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].SexMap); // 抛出方法

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"])(ref, function () {
    return {
      data1: function data1() {
        return submit();
      }
    };
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var _ResumeDetail$identit, _ResumeDetail$identit2, _ResumeDetail$identit3, _ResumeDetail$identit4, _ResumeDetail$identit5, _ResumeDetail$identit6, _ResumeDetail$identit7, _ResumeDetail$identit8, _ResumeDetail$identit9, _ResumeDetail$identit10, _ResumeDetail$identit11, _ResumeDetail$identit12, _ResumeDetail$identit14;

    var ResumeDetail = props.resume.ResumeDetail;
    setformItem({
      imgUrl: (_ResumeDetail$identit = ResumeDetail.identity) === null || _ResumeDetail$identit === void 0 ? void 0 : _ResumeDetail$identit.imgUrl,
      phone: ResumeDetail.phone,
      name: (_ResumeDetail$identit2 = ResumeDetail.identity) === null || _ResumeDetail$identit2 === void 0 ? void 0 : _ResumeDetail$identit2.name,
      idcard: (_ResumeDetail$identit3 = ResumeDetail.identity) === null || _ResumeDetail$identit3 === void 0 ? void 0 : _ResumeDetail$identit3.idcard,
      age: (_ResumeDetail$identit4 = ResumeDetail.identity) === null || _ResumeDetail$identit4 === void 0 ? void 0 : _ResumeDetail$identit4.age,
      nation: ((_ResumeDetail$identit5 = ResumeDetail.identity) === null || _ResumeDetail$identit5 === void 0 ? void 0 : _ResumeDetail$identit5.nation) ? _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].nationList.indexOf((_ResumeDetail$identit6 = ResumeDetail.identity) === null || _ResumeDetail$identit6 === void 0 ? void 0 : _ResumeDetail$identit6.nation) : 0,
      birthday: moment__WEBPACK_IMPORTED_MODULE_11___default()((_ResumeDetail$identit7 = ResumeDetail.identity) === null || _ResumeDetail$identit7 === void 0 ? void 0 : _ResumeDetail$identit7.birthday).format('YYYY-MM-DD'),
      constellation: ((_ResumeDetail$identit8 = ResumeDetail.identity) === null || _ResumeDetail$identit8 === void 0 ? void 0 : _ResumeDetail$identit8.constellation) ? _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].ConstellationArr.indexOf((_ResumeDetail$identit9 = ResumeDetail.identity) === null || _ResumeDetail$identit9 === void 0 ? void 0 : _ResumeDetail$identit9.constellation) : 0,
      chineseZodiac: ((_ResumeDetail$identit10 = ResumeDetail.identity) === null || _ResumeDetail$identit10 === void 0 ? void 0 : _ResumeDetail$identit10.chineseZodiac) ? _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].ChineseZodiacArr.indexOf((_ResumeDetail$identit11 = ResumeDetail.identity) === null || _ResumeDetail$identit11 === void 0 ? void 0 : _ResumeDetail$identit11.chineseZodiac) : 0,
      sex: ((_ResumeDetail$identit12 = ResumeDetail.identity) === null || _ResumeDetail$identit12 === void 0 ? void 0 : _ResumeDetail$identit12.sex) ? SexArr.findIndex(function (item) {
        var _ResumeDetail$identit13;

        return item.id == ((_ResumeDetail$identit13 = ResumeDetail.identity) === null || _ResumeDetail$identit13 === void 0 ? void 0 : _ResumeDetail$identit13.sex);
      }) : 0
    });

    if ((_ResumeDetail$identit14 = ResumeDetail.identity) === null || _ResumeDetail$identit14 === void 0 ? void 0 : _ResumeDetail$identit14.idcard) {
      setMore(true);
    }
  }, [props.resume.ResumeDetail]);

  function handleChange(name, value) {
    setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, value)));
  }

  function submit() {
    if (!formItem.name) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].showTips('请输入姓名');
      return false;
    }

    if (!formItem.idcard) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].showTips('请输入身份证号');
      return false;
    }

    var params = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, {
      sex: SexArr[formItem.sex].id,
      constellation: _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].ConstellationArr[formItem.constellation],
      chineseZodiac: _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].ChineseZodiacArr[formItem.chineseZodiac],
      nation: _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].nationList[formItem.nation]
    });

    return params;
  }

  function uploadImgChange(res) {
    console.log(res);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.showLoading({
      title: '识别中...'
    });
    props.dispatch({
      type: 'resume/getIdCardFullInfo',
      payload: res
    }).then(function (data) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
      changeInfo(data);
    }).catch(function (err) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
      _utils_tip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].showTips(err.msg);
    });
  }

  function handleChangeIdCard(value) {
    setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, {
      idcard: value
    }));

    if (value.length == 18) {
      props.dispatch({
        type: 'resume/getIdCardBaseInfo',
        payload: {
          idcard: value
        }
      }).then(function (data) {
        changeInfo(data);
      }).catch(function (err) {
        _utils_tip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].showTips(err.msg);
      });
    }
  }

  function changeInfo(res) {
    setMore(true);
    res.name && setformItem(function (prev) {
      return Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, prev), {}, {
        name: res.name
      });
    });
    res.imgUrl && setformItem(function (prev) {
      return Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, prev), {}, {
        imgUrl: res.imgUrl
      });
    });
    setformItem(function (prev) {
      return Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, prev), {}, {
        idcard: res.cardNo,
        age: res.age,
        nation: res.nation ? _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].nationList.indexOf(res.nation + '族') : 0,
        birthday: moment__WEBPACK_IMPORTED_MODULE_11___default()(res.birthday).format('YYYY-MM-DD'),
        constellation: res.constellation ? _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].ConstellationArr.indexOf(res.constellation) : 0,
        chineseZodiac: res.chineseZodiac ? _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].ChineseZodiacArr.indexOf(res.chineseZodiac) : 0,
        sex: SexArr.findIndex(function (item) {
          return item.name == res.sex;
        }) || 0
      });
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "identity"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    propsfileList: formItem.imgUrl,
    onChange: uploadImgChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
      bmform: true,
      heightAuto: more
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtInput"], {
    name: "phone",
    title: "\u624B\u673A\u53F7",
    type: "number",
    placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
    value: formItem.phone,
    editable: false,
    onChange: function onChange(value) {
      handleChange('phone', value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtInput"], {
    name: "name",
    title: "\u59D3\u540D",
    type: "text",
    required: true,
    placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D",
    value: formItem.name,
    onChange: function onChange(value) {
      handleChange('name', value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtInput"], {
    name: "idcard",
    title: "\u8EAB\u4EFD\u8BC1",
    required: true,
    type: "number",
    placeholder: "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1",
    value: formItem.idcard,
    onChange: handleChangeIdCard
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "selectItem disabled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "title"
  }, "\u751F\u65E5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "value"
  }, formItem.birthday ? formItem.birthday : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "placeholder"
  }, "\u8BF7\u9009\u62E9\u751F\u65E5"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtInput"], {
    name: "age",
    title: "\u5E74\u9F84",
    type: "number",
    placeholder: "\u8BF7\u8F93\u5165\u5E74\u9F84",
    value: formItem.age,
    editable: false,
    onChange: function onChange(value) {
      handleChange('age', value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "selectItem disabled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "title"
  }, "\u6027\u522B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "value"
  }, formItem.sex != null ? SexArr.map(function (item) {
    return item.name;
  })[formItem.sex] : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "placeholder"
  }, "\u8BF7\u9009\u62E9\u6027\u522B"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "selectItem disabled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "title"
  }, "\u751F\u8096"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "value"
  }, _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].ChineseZodiacArr[formItem.chineseZodiac])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "selectItem disabled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "title"
  }, "\u661F\u5EA7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "value"
  }, _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].ConstellationArr[formItem.constellation])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Picker"], {
    onChange: function onChange(e) {
      handleChange('nation', e.detail.value);
    },
    value: formItem.nation,
    range: _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].nationList,
    mode: "selector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "selectItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "title"
  }, "\u6C11\u65CF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "value"
  }, _common_constant__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"].nationList[formItem.nation], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtIcon"], {
    value: "chevron-right",
    size: "16",
    color: "#ccc"
  })))))));
});
/* harmony default export */ __webpack_exports__["a"] = (IdentityInfo);

/***/ }),

/***/ "./src/pages/resume/components/JobInfo/index.less":
/*!********************************************************!*\
  !*** ./src/pages/resume/components/JobInfo/index.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/components/JobInfo/index.tsx":
/*!*******************************************************!*\
  !*** ./src/pages/resume/components/JobInfo/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _components_UploadImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/UploadImg */ "./src/components/UploadImg/index.tsx");
/* harmony import */ var _components_UploadVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/UploadVideo */ "./src/components/UploadVideo/index.tsx");
/* harmony import */ var _components_UploadAvatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/UploadAvatar */ "./src/components/UploadAvatar/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_tip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/tip */ "./src/utils/tip.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.less */ "./src/pages/resume/components/JobInfo/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_13__);















/**第二步求职信息 */
var JobInfo = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function (props, ref) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    workTime: "",
    cookAble: "",
    auntHeadPhoto: "",
    description: "",
    workingLife: 0,
    jobIntensionsList: [],
    cuisine: [],
    language: [],
    photos: [],
    certPhotos: [],
    videos: [],
    composite: [],
    innerPhotos: []
  }),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      formItem = _useState2[0],
      setformItem = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    text: '做饭能力',
    flag: false
  }, {
    text: '掌握菜系',
    flag: false
  }, {
    text: '语言能力',
    flag: false
  }]),
      _useState4 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState3, 2),
      isAddArr = _useState4[0],
      setIsAddArr = _useState4[1]; // 抛出方法


  Object(react__WEBPACK_IMPORTED_MODULE_4__["useImperativeHandle"])(ref, function () {
    return {
      data2: function data2() {
        return submit();
      }
    };
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var _ResumeDetail$skills, _ResumeDetail$skills2, _ResumeDetail$skills4, _ResumeDetail$skills5, _ResumeDetail$photoVi, _ResumeDetail$photoVi2, _ResumeDetail$photoVi3, _ResumeDetail$descrip, _ResumeDetail$skills6, _ResumeDetail$photoVi4;

    var ResumeDetail = props.resume.ResumeDetail;
    setformItem({
      jobIntensionsList: ResumeDetail.jobIntensionsList || [],
      workTime: ResumeDetail.workTime || '',
      cookAble: ((_ResumeDetail$skills = ResumeDetail.skills) === null || _ResumeDetail$skills === void 0 ? void 0 : _ResumeDetail$skills.cookAble) || '',
      workingLife: ((_ResumeDetail$skills2 = ResumeDetail.skills) === null || _ResumeDetail$skills2 === void 0 ? void 0 : _ResumeDetail$skills2.workingLife) ? props.resume.op.WorkingLifeDataArr.findIndex(function (item) {
        var _ResumeDetail$skills3;

        return item.id == ((_ResumeDetail$skills3 = ResumeDetail.skills) === null || _ResumeDetail$skills3 === void 0 ? void 0 : _ResumeDetail$skills3.workingLife);
      }) : 0,
      cuisine: ((_ResumeDetail$skills4 = ResumeDetail.skills) === null || _ResumeDetail$skills4 === void 0 ? void 0 : _ResumeDetail$skills4.cuisine) || [],
      language: ((_ResumeDetail$skills5 = ResumeDetail.skills) === null || _ResumeDetail$skills5 === void 0 ? void 0 : _ResumeDetail$skills5.language) || [],
      photos: ((_ResumeDetail$photoVi = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi === void 0 ? void 0 : _ResumeDetail$photoVi.photos) || [],
      certPhotos: ((_ResumeDetail$photoVi2 = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi2 === void 0 ? void 0 : _ResumeDetail$photoVi2.certPhotos) || [],
      videos: ((_ResumeDetail$photoVi3 = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi3 === void 0 ? void 0 : _ResumeDetail$photoVi3.videos) || [],
      auntHeadPhoto: ResumeDetail.auntHeadPhoto || '',
      description: ((_ResumeDetail$descrip = ResumeDetail.description) === null || _ResumeDetail$descrip === void 0 ? void 0 : _ResumeDetail$descrip.description) || '',
      composite: ((_ResumeDetail$skills6 = ResumeDetail.skills) === null || _ResumeDetail$skills6 === void 0 ? void 0 : _ResumeDetail$skills6.composite) || [],
      innerPhotos: ((_ResumeDetail$photoVi4 = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi4 === void 0 ? void 0 : _ResumeDetail$photoVi4.innerPhotos) || []
    });

    if (formItem.language.length > 0) {
      isAddArr[2].flag = true;
    }

    if (formItem.cookAble.length > 0) {
      isAddArr[0].flag = true;
    }

    if (formItem.cuisine.length > 0) {
      isAddArr[1].flag = true;
    }

    setIsAddArr(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(isAddArr));
  }, [props.resume.ResumeDetail]);

  function submit() {
    if (formItem.jobIntensionsList.length == 0) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].showTips('请选择求职工种');
      return;
    }

    if (!formItem.workTime) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].showTips('请选择工作时间');
      return;
    }

    if (formItem.workingLife == null) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].showTips('请选择工作经验');
      return;
    }

    var ResumeDetail = props.resume.ResumeDetail;
    var params = {
      auntHeadPhoto: formItem.auntHeadPhoto,
      description: formItem.description,
      jobIntensionsList: formItem.jobIntensionsList,
      photoVideo: {
        certPhotos: formItem.certPhotos,
        innerPhotos: formItem.innerPhotos,
        photos: formItem.photos,
        videos: formItem.videos
      },
      cookAble: formItem.cookAble,
      cuisine: formItem.cuisine,
      language: formItem.language,
      composite: formItem.composite,
      workTime: formItem.workTime,
      workingLife: props.resume.op.WorkingLifeDataArr[formItem.workingLife].id,
      jobStatus: ResumeDetail.jobStatus,
      markList: ResumeDetail.markList,
      workType: ResumeDetail.workType
    };
    return params;
  } //修改表单值


  function handleChange(name, value) {
    Array.isArray(formItem[name]) ? formItem[name].indexOf(value) > -1 ? setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, formItem[name].filter(function (item) {
      return item != value;
    })))) : setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, [].concat(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(formItem[name]), [value])))) : setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, value)));
  }

  function jobIntensionsListChange(name, value) {
    // const name = 'jobIntensionsList';
    if (formItem[name].indexOf(value) > -1) {
      name != 'composite' && formItem[name].length == 1 ? _utils_tip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].showTips('至少选择一个工种') : setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, formItem[name].filter(function (item) {
        return item != value;
      }))));
    } else {
      setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, [].concat(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(formItem[name]), [value]))));
    }
  }

  function uploadImgChange(name, img) {
    setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, img)));
  }

  function onFullscreenChange(fullscreen) {
    props.dispatch({
      type: 'resume/setFullscreen',
      payload: fullscreen
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "jobInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u6C42\u804C\u5DE5\u79CD",
    required: true,
    height: 200
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "at-row at-row--wrap checkboxView"
  }, props.resume.JobIntensionsList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "at-col at-col-4",
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_11___default()({
        checkbox: true,
        checkboxActive: formItem.jobIntensionsList.includes(item.name)
      }),
      onClick: function onClick() {
        jobIntensionsListChange('jobIntensionsList', item.name);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], null, item.name)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u5DE5\u4F5C\u65F6\u95F4",
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "at-row at-row--wrap"
  }, props.resume.op.workTimeList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "at-col at-col-4 checkboxView",
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_11___default()({
        checkbox: true,
        checkboxActive: formItem.workTime === item
      }),
      onClick: function onClick() {
        handleChange('workTime', item);
      }
    }, item));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Picker"], {
    onChange: function onChange(e) {
      handleChange('workingLife', e.detail.value);
    },
    value: formItem.workingLife,
    range: props.resume.op.WorkingLifeDataArr,
    mode: "selector",
    rangeKey: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "CardSelect"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "CardSelectTitle"
  }, "\u5DE5\u4F5C\u7ECF\u9A8C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "required"
  }, "(\u5FC5\u586B)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "CardSelectValue"
  }, props.resume.op.WorkingLifeDataArr.map(function (item) {
    return item.name;
  })[formItem.workingLife], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtIcon"], {
    value: "chevron-right",
    size: "16",
    color: "#ccc"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u81EA\u6211\u7B80\u4ECB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtTextarea"], {
    value: formItem.description,
    maxLength: 1000,
    className: "textarea",
    placeholder: "\u8BF7\u8F93\u5165\u81EA\u6211\u7B80\u4ECB",
    onChange: function onChange(e) {
      handleChange('description', e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "userPic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "userPicLeft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "userPicTitle"
  }, "\u5934\u50CF\u7167\u7247"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "userPicInfo"
  }, "\u5EFA\u8BAE\u4F7F\u7528\u4E2A\u4EBA\u8BC1\u4EF6\u7167")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "userPicRight"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_UploadAvatar__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    propsfileList: formItem.auntHeadPhoto,
    onChange: function onChange(img) {
      uploadImgChange('auntHeadPhoto', img);
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u7167\u7247"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_UploadImg__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    propsfileList: formItem.photos,
    onChange: function onChange(img) {
      uploadImgChange('photos', img);
    },
    title: "\u6DFB\u52A0\u7167\u7247",
    formData: {
      watermark: 1
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u89C6\u9891"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_UploadVideo__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    title: "\u6DFB\u52A0\u89C6\u9891",
    icon: "icontianjiashipin",
    propsfileList: formItem.videos,
    onChange: function onChange(img) {
      uploadImgChange('videos', img);
    },
    onFullscreenChange: onFullscreenChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u8BC1\u4E66\u7167\u7247"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_UploadImg__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    propsfileList: formItem.certPhotos,
    onChange: function onChange(img) {
      uploadImgChange('certPhotos', img);
    },
    title: "\u6DFB\u52A0\u8BC1\u4E66",
    icon: "icontianjiazhengshu",
    formData: {
      watermark: 1
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u6DFB\u52A0\u5185\u90E8\u53EF\u89C1\u7167\u7247"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_UploadImg__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    propsfileList: formItem.innerPhotos,
    onChange: function onChange(img) {
      uploadImgChange('innerPhotos', img);
    },
    title: "\u6DFB\u52A0\u7167\u7247"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u4E2A\u4EBA\u6280\u80FD",
    right: true,
    height: 200,
    isAll: formItem.composite.length >= props.resume.opCustom.compositeListCustom.length,
    selectAll: function selectAll() {
      setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, {
        composite: formItem.composite.length >= props.resume.opCustom.compositeListCustom.length ? [] : props.resume.opCustom.compositeListCustom.map(function (item) {
          return item;
        })
      }));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "at-row at-row--wrap"
  }, props.resume.opCustom.compositeListCustom.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "at-col at-col-4 checkboxView",
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_11___default()({
        checkbox: true,
        checkboxActive: formItem.composite.includes(item)
      }),
      onClick: function onClick() {
        jobIntensionsListChange('composite', item);
      }
    }, item));
  })))));
});
/* harmony default export */ __webpack_exports__["a"] = (JobInfo);

/***/ }),

/***/ "./src/pages/resume/components/PersonalInfo/index.less":
/*!*************************************************************!*\
  !*** ./src/pages/resume/components/PersonalInfo/index.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/components/PersonalInfo/index.tsx":
/*!************************************************************!*\
  !*** ./src/pages/resume/components/PersonalInfo/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _WishPrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../WishPrice */ "./src/pages/resume/components/WishPrice/index.tsx");
/* harmony import */ var _WorkingExperiences__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../WorkingExperiences */ "./src/pages/resume/components/WorkingExperiences/index.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.less */ "./src/pages/resume/components/PersonalInfo/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_12__);














/**第三步个人情况 */
var PersonalInfo = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function (props, ref) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    education: '',
    married: '',
    mandarinAble: '',
    height: '',
    religion: '',
    address: '',
    weight: '',
    addressArr: [],
    wishPrice: ['1000', '2000'],
    WorkingExperiences: [],
    auntCert: [],
    visa: '',
    bloodType: '',
    children: '',
    childrenAge: '',
    spouseJob: '',
    emergencyPhone: ''
  }),
      _useState4 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState3, 2),
      formItem = _useState4[0],
      setformItem = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    text: '身高',
    flag: false,
    name: 'height'
  }, {
    text: '体重',
    flag: false,
    name: 'weight'
  }, {
    text: '宗教信仰',
    flag: false,
    name: 'religion'
  }, {
    text: '签证',
    flag: false,
    name: 'visa'
  }, {
    text: '血型',
    flag: false,
    name: 'bloodType'
  }, {
    text: '子女数量',
    flag: false,
    name: 'children'
  }, {
    text: '子女年龄',
    flag: false,
    name: 'childrenAge'
  }, {
    text: '配偶职业',
    flag: false,
    name: 'spouseJob'
  }, {
    text: '紧急联系信息',
    flag: false,
    name: 'emergencyPhone'
  }]),
      _useState6 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState5, 2),
      isAddArr = _useState6[0],
      setIsAddArr = _useState6[1];

  var WishPriceRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({
    show: function show() {}
  });
  var WorkingExperiencesRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({
    show: function show() {},
    edit: function edit() {}
  }); // 抛出方法

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useImperativeHandle"])(ref, function () {
    return {
      data3: function data3() {
        return submit();
      }
    };
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var _ResumeDetail$detail, _ResumeDetail$detail2, _ResumeDetail$skills, _ResumeDetail$detail3, _ResumeDetail$detail4, _ResumeDetail$address, _ResumeDetail$detail5, _ResumeDetail$skills2, _ResumeDetail$address2, _ResumeDetail$address3, _ResumeDetail$address4, _ResumeDetail$address5, _ResumeDetail$skills3, _ResumeDetail$skills4, _ResumeDetail$detail6, _ResumeDetail$detail7, _ResumeDetail$detail8, _ResumeDetail$detail9, _ResumeDetail$detail10, _ResumeDetail$detail11;

    var ResumeDetail = props.resume.ResumeDetail;
    setformItem({
      education: (_ResumeDetail$detail = ResumeDetail.detail) === null || _ResumeDetail$detail === void 0 ? void 0 : _ResumeDetail$detail.education,
      married: (_ResumeDetail$detail2 = ResumeDetail.detail) === null || _ResumeDetail$detail2 === void 0 ? void 0 : _ResumeDetail$detail2.married,
      mandarinAble: (_ResumeDetail$skills = ResumeDetail.skills) === null || _ResumeDetail$skills === void 0 ? void 0 : _ResumeDetail$skills.mandarinAble,
      height: (_ResumeDetail$detail3 = ResumeDetail.detail) === null || _ResumeDetail$detail3 === void 0 ? void 0 : _ResumeDetail$detail3.height,
      religion: (_ResumeDetail$detail4 = ResumeDetail.detail) === null || _ResumeDetail$detail4 === void 0 ? void 0 : _ResumeDetail$detail4.religion,
      address: (_ResumeDetail$address = ResumeDetail.address) === null || _ResumeDetail$address === void 0 ? void 0 : _ResumeDetail$address.address,
      weight: (_ResumeDetail$detail5 = ResumeDetail.detail) === null || _ResumeDetail$detail5 === void 0 ? void 0 : _ResumeDetail$detail5.weight,
      auntCert: ((_ResumeDetail$skills2 = ResumeDetail.skills) === null || _ResumeDetail$skills2 === void 0 ? void 0 : _ResumeDetail$skills2.auntCert) || [],
      addressArr: ((_ResumeDetail$address2 = ResumeDetail.address) === null || _ResumeDetail$address2 === void 0 ? void 0 : _ResumeDetail$address2.province) ? [(_ResumeDetail$address3 = ResumeDetail.address) === null || _ResumeDetail$address3 === void 0 ? void 0 : _ResumeDetail$address3.province, (_ResumeDetail$address4 = ResumeDetail.address) === null || _ResumeDetail$address4 === void 0 ? void 0 : _ResumeDetail$address4.city, (_ResumeDetail$address5 = ResumeDetail.address) === null || _ResumeDetail$address5 === void 0 ? void 0 : _ResumeDetail$address5.district] : [],
      wishPrice: [((_ResumeDetail$skills3 = ResumeDetail.skills) === null || _ResumeDetail$skills3 === void 0 ? void 0 : _ResumeDetail$skills3.minExpectSalary) || '1000', ((_ResumeDetail$skills4 = ResumeDetail.skills) === null || _ResumeDetail$skills4 === void 0 ? void 0 : _ResumeDetail$skills4.maxExpectSalary) || '2000'],
      WorkingExperiences: ResumeDetail.workingExperiencesList || [],
      visa: (_ResumeDetail$detail6 = ResumeDetail.detail) === null || _ResumeDetail$detail6 === void 0 ? void 0 : _ResumeDetail$detail6.visa,
      bloodType: (_ResumeDetail$detail7 = ResumeDetail.detail) === null || _ResumeDetail$detail7 === void 0 ? void 0 : _ResumeDetail$detail7.bloodType,
      children: (_ResumeDetail$detail8 = ResumeDetail.detail) === null || _ResumeDetail$detail8 === void 0 ? void 0 : _ResumeDetail$detail8.children,
      childrenAge: (_ResumeDetail$detail9 = ResumeDetail.detail) === null || _ResumeDetail$detail9 === void 0 ? void 0 : _ResumeDetail$detail9.childrenAge,
      spouseJob: (_ResumeDetail$detail10 = ResumeDetail.detail) === null || _ResumeDetail$detail10 === void 0 ? void 0 : _ResumeDetail$detail10.spouseJob,
      emergencyPhone: (_ResumeDetail$detail11 = ResumeDetail.detail) === null || _ResumeDetail$detail11 === void 0 ? void 0 : _ResumeDetail$detail11.emergencyPhone
    });

    if (formItem.height) {
      isAddArr[0].flag = true;
    }

    if (formItem.weight) {
      isAddArr[1].flag = true;
    }

    if (formItem.religion) {
      isAddArr[2].flag = true;
    }

    if (formItem.visa) {
      isAddArr[3].flag = true;
    }

    if (formItem.bloodType) {
      isAddArr[4].flag = true;
    }

    if (formItem.children) {
      isAddArr[5].flag = true;
    }

    if (formItem.childrenAge) {
      isAddArr[6].flag = true;
    }

    if (formItem.spouseJob) {
      isAddArr[7].flag = true;
    }

    if (formItem.emergencyPhone) {
      isAddArr[8].flag = true;
    }

    setIsAddArr(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(isAddArr));
  }, [props.resume.ResumeDetail]); //修改表单值

  function handleChange(name, value) {
    if (name == 'auntCert') {
      formItem[name].indexOf(value) > -1 ? setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, formItem[name].filter(function (item) {
        return item != value;
      })))) : setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, [].concat(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(formItem[name]), [value]))));
    } else {
      setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, value)));
    }
  }

  function handleChangeRadio(name, value) {
    formItem[name] == value ? setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, ''))) : setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, value)));
  } //切换个人能力


  function changeIsAddArr(index) {
    if (isAddArr[index].flag) {
      setformItem(function (prev) {
        return Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, prev), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, isAddArr[index].name, null));
      });
    }

    isAddArr[index].flag = !isAddArr[index].flag;
    setIsAddArr(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(isAddArr));
  }

  function onConfirm(res, isAdd) {
    var WorkingExperiences = formItem.WorkingExperiences;

    if (isAdd) {
      WorkingExperiences.push(res);
    } else {
      WorkingExperiences[index] = res;
    }

    setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, {
      WorkingExperiences: WorkingExperiences
    }));
  }

  function delItem(index) {
    var WorkingExperiences = formItem.WorkingExperiences.filter(function (item, i) {
      return i !== index;
    });
    setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, {
      WorkingExperiences: WorkingExperiences
    }));
  }

  function submit() {
    var _formItem$addressArr, _formItem$addressArr2, _formItem$addressArr3;

    var params = {
      address: formItem.address,
      city: (_formItem$addressArr = formItem.addressArr) === null || _formItem$addressArr === void 0 ? void 0 : _formItem$addressArr[1],
      district: (_formItem$addressArr2 = formItem.addressArr) === null || _formItem$addressArr2 === void 0 ? void 0 : _formItem$addressArr2[2],
      province: (_formItem$addressArr3 = formItem.addressArr) === null || _formItem$addressArr3 === void 0 ? void 0 : _formItem$addressArr3[0],
      education: formItem.education,
      height: formItem.height,
      married: formItem.married,
      religion: formItem.religion,
      weight: formItem.weight,
      auntCert: formItem.auntCert,
      mandarinAble: formItem.mandarinAble,
      maxExpectSalary: formItem.wishPrice[1],
      minExpectSalary: formItem.wishPrice[0],
      workingExperiencesList: formItem.WorkingExperiences,
      visa: formItem.visa,
      bloodType: formItem.bloodType,
      children: formItem.children,
      childrenAge: formItem.childrenAge,
      spouseJob: formItem.spouseJob,
      emergencyPhone: formItem.emergencyPhone
    };
    return params;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "personalInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u5B66\u5386"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "at-row at-row--wrap checkboxView"
  }, props.resume.op.education.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "at-col at-col-4",
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
        checkbox: true,
        checkboxActive: formItem.education === item
      }),
      onClick: function onClick() {
        handleChangeRadio('education', item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], null, item)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u5A5A\u59FB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "at-row at-row--wrap"
  }, props.resume.op.marriedList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "at-col at-col-4 checkboxView",
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
        checkbox: true,
        checkboxActive: formItem.married == item
      }),
      onClick: function onClick() {
        handleChangeRadio('married', item);
      }
    }, item));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u666E\u901A\u8BDD\u6C34\u5E73"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "at-row at-row--wrap"
  }, props.resume.op.mandarinAbleList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "at-col at-col-4 checkboxView",
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
        checkbox: true,
        checkboxActive: formItem.mandarinAble === item
      }),
      onClick: function onClick() {
        handleChangeRadio('mandarinAble', item);
      }
    }, item));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "CardSelect",
    onClick: function onClick() {
      WishPriceRef.current.show(formItem.wishPrice);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "CardSelectTitle"
  }, "\u671F\u671B\u85AA\u8D44(\u5143)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "CardSelectValue"
  }, formItem.wishPrice && formItem.wishPrice.join('-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtIcon"], {
    value: "chevron-right",
    size: "16",
    color: "#ccc"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u4E13\u4E1A\u8BC1\u4E66",
    height: 200
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "at-row at-row--wrap checkboxView"
  }, props.resume.opCustom.auntCertTextListCustom.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "at-col at-col-4",
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
        checkbox: true,
        checkboxActive: formItem.auntCert.includes(item)
      }),
      onClick: function onClick() {
        handleChange('auntCert', item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], null, item)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u5DE5\u4F5C\u7ECF\u5386"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "pic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "picList"
  }, formItem.WorkingExperiences.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "picListItem",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "picListItemTime"
    }, moment__WEBPACK_IMPORTED_MODULE_11___default()(item.startTime).format('YYYY-MM-DD'), "\u81F3", moment__WEBPACK_IMPORTED_MODULE_11___default()(item.endTime).format('YYYY-MM-DD')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "picListItemBtn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      className: "Text",
      onClick: function onClick() {
        setIndex(index);
        WorkingExperiencesRef.current.edit(item);
      }
    }, "\u7F16\u8F91"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      className: "delText",
      onClick: function onClick() {
        delItem(index);
      }
    }, "\u5220\u9664")));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
      picTitle: true,
      picEmpty: formItem.WorkingExperiences.length == 0
    }),
    onClick: function onClick() {
      WorkingExperiencesRef.current.show();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "iconfont icontianjiazhaopian picIcon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], null, "\u6DFB\u52A0\u5DE5\u4F5C\u7ECF\u5386")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "CardSelect CardSelect2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "CardSelectTop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "CardSelectTitle"
  }, "\u73B0\u4F4F\u5730\u5740"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Picker"], {
    onChange: function onChange(e) {
      handleChange('addressArr', e.detail.value);
    },
    mode: "region",
    value: formItem.addressArr,
    className: "CardSelectValue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], null, formItem.addressArr.join('-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtIcon"], {
    value: "chevron-right",
    size: "16",
    color: "#ccc"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtInput"], {
    className: "CardSelectInput",
    name: "address",
    placeholder: "\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740",
    value: formItem.address,
    onChange: function onChange(value) {
      handleChange('address', value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "cardInput cardInputWarp",
    style: {
      display: isAddArr[0].flag ? 'flex' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "leftText"
  }, "\u8EAB\u9AD8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: "cinput",
    name: "height",
    type: "number",
    placeholder: "\u8BF7\u8F93\u5165\u8EAB\u9AD8",
    value: formItem.height,
    maxlength: 4,
    placeholderClass: "cplaceholder",
    onInput: function onInput(value) {
      handleChange('height', value.detail.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "rightText"
  }, "cm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "cardInput cardInputWarp",
    style: {
      display: isAddArr[1].flag ? 'flex' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "leftText"
  }, "\u4F53\u91CD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: "cinput",
    name: "weight",
    type: "number",
    placeholder: "\u8BF7\u8F93\u5165\u4F53\u91CD",
    maxlength: 4,
    value: formItem.weight,
    placeholderClass: "cplaceholder",
    onInput: function onInput(value) {
      handleChange('weight', value.detail.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "rightText"
  }, "kg")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "cardInput cardInputWarp",
    style: {
      display: isAddArr[2].flag ? 'flex' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "leftText"
  }, "\u5B97\u6559\u4FE1\u4EF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: "cinput",
    name: "religion",
    placeholder: "\u8BF7\u8F93\u5165\u5B97\u6559\u4FE1\u4EF0",
    value: formItem.religion,
    placeholderClass: "cplaceholder",
    onInput: function onInput(value) {
      handleChange('religion', value.detail.value);
    }
  })), isAddArr[3].flag && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u7B7E\u8BC1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "at-row at-row--wrap checkboxView"
  }, props.resume.op.visaList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "at-col at-col-4",
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
        checkbox: true,
        checkboxActive: formItem.visa === item
      }),
      onClick: function onClick() {
        handleChangeRadio('visa', item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], null, item)));
  }))), isAddArr[4].flag && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u8840\u578B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "at-row at-row--wrap checkboxView"
  }, props.resume.op.bloodTypeList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "at-col at-col-4",
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
        checkbox: true,
        checkboxActive: formItem.bloodType === item
      }),
      onClick: function onClick() {
        handleChangeRadio('bloodType', item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], null, item)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "cardInput cardInputWarp",
    style: {
      display: isAddArr[5].flag ? 'flex' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "leftText"
  }, "\u5B50\u5973\u6570\u91CF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: "cinput",
    name: "children",
    type: "number",
    placeholder: "\u8BF7\u8F93\u5165\u5B50\u5973\u6570\u91CF",
    value: formItem.children,
    maxlength: 2,
    placeholderClass: "cplaceholder",
    onInput: function onInput(value) {
      handleChange('children', value.detail.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "cardInput cardInputWarp",
    style: {
      display: isAddArr[6].flag ? 'flex' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "leftText"
  }, "\u5B50\u5973\u5E74\u9F84"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: "cinput",
    name: "childrenAge",
    type: "number",
    placeholder: "\u8BF7\u8F93\u5165\u5B50\u5973\u5E74\u9F84",
    value: formItem.childrenAge,
    maxlength: 2,
    placeholderClass: "cplaceholder",
    onInput: function onInput(value) {
      handleChange('childrenAge', value.detail.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "cardInput cardInputWarp",
    style: {
      display: isAddArr[7].flag ? 'flex' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "leftText"
  }, "\u914D\u5076\u804C\u4E1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: "cinput",
    name: "spouseJob",
    placeholder: "\u8BF7\u8F93\u5165\u914D\u5076\u804C\u4E1A",
    value: formItem.spouseJob,
    maxlength: 10,
    placeholderClass: "cplaceholder",
    onInput: function onInput(value) {
      handleChange('spouseJob', value.detail.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "cardInput cardInputWarp",
    style: {
      display: isAddArr[8].flag ? 'flex' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "leftText"
  }, "\u7D27\u6025\u8054\u7CFB\u65B9\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: "cinput",
    name: "emergencyPhone",
    placeholder: "\u8BF7\u8F93\u5165\u7D27\u6025\u8054\u7CFB\u65B9\u5F0F",
    value: formItem.emergencyPhone,
    maxlength: 20,
    placeholderClass: "cplaceholder",
    onInput: function onInput(value) {
      handleChange('emergencyPhone', value.detail.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "addCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "addCardTitle"
  }, "\u6DFB\u52A0\u5176\u4ED6\u4FE1\u606F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "addCardView at-row at-row--wrap"
  }, isAddArr.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "at-col at-col-4",
      onClick: function onClick() {
        changeIsAddArr(index);
      },
      key: item.text
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
        addCardItem: 'true',
        activeAdd: item.flag
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      className: "iconfont icontianjiashenfenzheng addCardItemIcon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      className: "addCardItemText"
    }, item.text)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_WishPrice__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    ref: WishPriceRef,
    onConfirm: function onConfirm(res) {
      handleChange('wishPrice', res);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_WorkingExperiences__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    ref: WorkingExperiencesRef,
    onConfirm: onConfirm,
    resume: props.resume
  })));
});
/* harmony default export */ __webpack_exports__["a"] = (PersonalInfo);

/***/ }),

/***/ "./src/pages/resume/components/WishPrice/index.tsx":
/*!*********************************************************!*\
  !*** ./src/pages/resume/components/WishPrice/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_tip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/tip */ "./src/utils/tip.ts");








/**个人情况 */
var WishPrice = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function (props, ref) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    sPrice: '',
    ePrice: ''
  }),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      formItem = _useState2[0],
      setformItem = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      isOpened = _useState4[0],
      setIsOpened = _useState4[1]; // 抛出方法


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"])(ref, function () {
    return {
      show: function show(value) {
        setformItem({
          sPrice: value[0].toString(),
          ePrice: value[1].toString()
        });
        setIsOpened(true);
      }
    };
  }); //修改表单值

  function handleChange(name, value) {
    setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, value)));
  }

  function onClose() {
    setIsOpened(false);
  }

  function onConfirm() {
    if (!formItem.sPrice || !formItem.ePrice) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].showTips('请输入期望薪资');
      return;
    }

    if (parseInt(formItem.sPrice) > parseInt(formItem.ePrice)) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].showTips('最低价格不得高于最高价格');
      return;
    }

    setIsOpened(false);
    props.onConfirm && props.onConfirm([formItem.sPrice, formItem.ePrice]);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "personalInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtModal"], {
    isOpened: isOpened,
    onClose: onClose,
    className: "BmModal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtModalHeader"], null, "\u671F\u671B\u85AA\u8D44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtModalContent"], null, isOpened && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtInput"], {
    name: "sPrice",
    title: "\u6700\u4F4E\u671F\u671B",
    type: "number",
    value: formItem.sPrice,
    cursor: formItem.sPrice.length,
    onChange: function onChange(value) {
      handleChange('sPrice', value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "primaryText"
  }, "\u5143")), isOpened && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtInput"], {
    name: "ePrice",
    title: "\u6700\u9AD8\u671F\u671B",
    type: "number",
    cursor: formItem.ePrice.length,
    value: formItem.ePrice,
    onChange: function onChange(value) {
      handleChange('ePrice', value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "primaryText"
  }, "\u5143"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtModalAction"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onClose
  }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onConfirm,
    className: "confirmBtn"
  }, "\u786E\u5B9A"))));
});
/* harmony default export */ __webpack_exports__["a"] = (WishPrice);

/***/ }),

/***/ "./src/pages/resume/components/WorkingExperiences/index.less":
/*!*******************************************************************!*\
  !*** ./src/pages/resume/components/WorkingExperiences/index.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/components/WorkingExperiences/index.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/resume/components/WorkingExperiences/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_tip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/tip */ "./src/utils/tip.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/pages/resume/components/WorkingExperiences/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);










/**工作经历 */
var WorkingExperiences = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function (props, ref) {
  var initData = {
    serviceName: 0,
    startTime: moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD'),
    endTime: moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD'),
    experienceDiscription: ''
  }; // 抛出方法

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"])(ref, function () {
    return {
      show: function show() {
        setformItem(initData);
        setIsOpened(true);
        setIsAdd(true);
      },
      edit: function edit(value) {
        setformItem({
          serviceName: props.resume.JobIntensionsList.findIndex(function (item) {
            return item.name == value.serviceName;
          }) || 0,
          startTime: moment__WEBPACK_IMPORTED_MODULE_6___default()(value.startTime).format('YYYY-MM-DD'),
          endTime: moment__WEBPACK_IMPORTED_MODULE_6___default()(value.endTime).format('YYYY-MM-DD'),
          experienceDiscription: value.experienceDiscription || ''
        });
        setIsOpened(true);
        setIsAdd(false);
      }
    };
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initData),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      formItem = _useState2[0],
      setformItem = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      isOpened = _useState4[0],
      setIsOpened = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState6 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      isAdd = _useState6[0],
      setIsAdd = _useState6[1]; //修改表单值


  function handleChange(name, value) {
    setformItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, value)));
  }

  function onClose() {
    setIsOpened(false);
  }

  function onConfirm() {
    if (moment__WEBPACK_IMPORTED_MODULE_6___default()(formItem.startTime).isAfter(formItem.endTime)) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].showTips('入职时间不得晚于离职时间');
      return;
    }

    setIsOpened(false);

    var data = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, {
      serviceName: props.resume.JobIntensionsList.map(function (item) {
        return item.name;
      })[formItem.serviceName]
    });

    isAdd ? props.onConfirm && props.onConfirm(data, true) : props.onConfirm && props.onConfirm(data, false);
  }

  function onTouchMove(e) {
    console.log(e);
    e.stopPropagation();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "workingExperiences",
    onTouchMove: onTouchMove
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtModal"], {
    isOpened: isOpened,
    onClose: onClose,
    className: "BmModal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtModalHeader"], null, "\u5DE5\u4F5C\u7ECF\u5386"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtModalContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "selectItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "title"
  }, "\u670D\u52A1\u540D\u79F0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Picker"], {
    className: "picker",
    onChange: function onChange(e) {
      handleChange('serviceName', e.detail.value);
    },
    value: formItem.serviceName,
    range: props.resume.JobIntensionsList,
    mode: "selector",
    rangeKey: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "value"
  }, props.resume.JobIntensionsList.map(function (item) {
    return item.name;
  })[formItem.serviceName], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtIcon"], {
    value: "chevron-right",
    size: "16",
    color: "#ccc"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "selectItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "title"
  }, "\u5165\u804C\u65F6\u95F4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Picker"], {
    className: "picker",
    mode: "date",
    onChange: function onChange(e) {
      handleChange('startTime', e.detail.value);
    },
    value: formItem.startTime
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "value"
  }, formItem.startTime, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtIcon"], {
    value: "chevron-right",
    size: "16",
    color: "#ccc"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "selectItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "title"
  }, "\u79BB\u804C\u65F6\u95F4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Picker"], {
    className: "picker",
    mode: "date",
    onChange: function onChange(e) {
      handleChange('endTime', e.detail.value);
    },
    value: formItem.endTime
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "value"
  }, formItem.endTime, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtIcon"], {
    value: "chevron-right",
    size: "16",
    color: "#ccc"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "textareaView"
  }, isOpened && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtTextarea"], {
    value: formItem.experienceDiscription,
    fixed: true,
    maxLength: 1000,
    className: "textarea",
    placeholder: "\u8BF7\u7B80\u77ED\u63CF\u8FF0\u5DE5\u4F5C\u7ECF\u5386",
    onChange: function onChange(e) {
      handleChange('experienceDiscription', e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtModalAction"], null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onClose
  }, "\u53D6\u6D88"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onConfirm,
    className: "confirmBtn"
  }, "\u786E\u5B9A"), " ")));
});
/* harmony default export */ __webpack_exports__["a"] = (WorkingExperiences);

/***/ })

},[["./src/pages/resume/addResume.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=addResume.js.map