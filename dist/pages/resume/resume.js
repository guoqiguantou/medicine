(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/resume/resume"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/resume/resume.tsx":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/resume/resume.tsx ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resume; });
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");
/* harmony import */ var _components_Detail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Detail */ "./src/pages/resume/components/Detail/index.tsx");
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Empty */ "./src/pages/resume/components/Empty/index.tsx");
/* harmony import */ var _resume_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resume.less */ "./src/pages/resume/resume.less");
/* harmony import */ var _resume_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_resume_less__WEBPACK_IMPORTED_MODULE_10__);





var _dec, _class;








var Resume = (
/**我的简历 */
_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[/* connect */ "b"])(function (_ref) {
  var resume = _ref.resume,
      dispatch = _ref.dispatch;
  return {
    resume: resume,
    dispatch: dispatch
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Resume, _Component);

  var _super = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Resume);

  function Resume() {
    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Resume);

    return _super.apply(this, arguments);
  }

  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Resume, [{
    key: "componentDidShow",
    value: function componentDidShow() {
      var _this = this;

      this.props.dispatch({
        type: 'resume/queryJobIntensionsListDictionary',
        payload: {}
      }).then(function (res) {
        _this.props.dispatch({
          type: 'resume/queryResumeDetail',
          payload: {}
        }).catch(function (err) {
          console.log(err);
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _resume$ResumeDetail$;

      var resume = this.props.resume;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
        className: "index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        title: "\u6211\u7684\u7B80\u5386"
      }), ((_resume$ResumeDetail$ = resume.ResumeDetail.identity) === null || _resume$ResumeDetail$ === void 0 ? void 0 : _resume$ResumeDetail$.idcard) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Detail__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Empty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null));
    }
  }]);

  return Resume;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"])) || _class);


/***/ }),

/***/ "./src/assets/images/empty.png":
/*!*************************************!*\
  !*** ./src/assets/images/empty.png ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "assets/images/empty.png");

/***/ }),

/***/ "./src/pages/resume/components/Detail/index.less":
/*!*******************************************************!*\
  !*** ./src/pages/resume/components/Detail/index.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/components/Detail/index.tsx":
/*!******************************************************!*\
  !*** ./src/pages/resume/components/Detail/index.tsx ***!
  \******************************************************/
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
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/constant */ "./src/common/constant.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/pages/resume/components/Detail/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);











/**简历详情 */
var Detail = function Detail(props) {
  var _ResumeDetail$identit, _ResumeDetail$detail, _ResumeDetail$identit2, _ResumeDetail$identit3, _ResumeDetail$identit4, _ResumeDetail$identit5, _ResumeDetail$identit6, _ResumeDetail$identit7, _ResumeDetail$identit8, _ResumeDetail$detail2, _ResumeDetail$detail3, _ResumeDetail$skills, _ResumeDetail$skills2, _ResumeDetail$skills3, _ResumeDetail$skills4, _ResumeDetail$skills5, _ResumeDetail$skills6, _ResumeDetail$address, _ResumeDetail$address2, _ResumeDetail$address3, _ResumeDetail$address4, _ResumeDetail$detail4, _ResumeDetail$detail5, _ResumeDetail$detail6, _ResumeDetail$detail7, _ResumeDetail$detail8, _ResumeDetail$detail9, _ResumeDetail$detail10, _ResumeDetail$detail11, _ResumeDetail$detail12, _ResumeDetail$identit9, _ResumeDetail$identit10, _ResumeDetail$detail13, _ResumeDetail$detail14, _ResumeDetail$descrip, _ResumeDetail$descrip2, _ResumeDetail$skills7, _ResumeDetail$skills8, _ResumeDetail$photoVi, _ResumeDetail$photoVi2, _ResumeDetail$photoVi3, _ResumeDetail$photoVi5, _ResumeDetail$photoVi6, _ResumeDetail$photoVi7;

  function onImageClick(item) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [item];
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.previewImage({
      current: item,
      urls: list
    });
  }

  function goAdd() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo({
      url: '/pages/resume/addResume'
    });
  }

  var _props$resume = props.resume,
      ResumeDetail = _props$resume.ResumeDetail,
      _props$resume$JobInte = _props$resume.JobIntensionsList,
      JobIntensionsList = _props$resume$JobInte === void 0 ? [] : _props$resume$JobInte;
  var baseInfo = [{
    key: '身份证',
    value: (_ResumeDetail$identit = ResumeDetail.identity) === null || _ResumeDetail$identit === void 0 ? void 0 : _ResumeDetail$identit.idcard
  }, {
    key: '籍贯',
    value: (_ResumeDetail$detail = ResumeDetail.detail) === null || _ResumeDetail$detail === void 0 ? void 0 : _ResumeDetail$detail.nativePlace
  }, {
    key: '生肖',
    value: (_ResumeDetail$identit2 = ResumeDetail.identity) === null || _ResumeDetail$identit2 === void 0 ? void 0 : _ResumeDetail$identit2.chineseZodiac
  }, {
    key: '星座',
    value: (_ResumeDetail$identit3 = ResumeDetail.identity) === null || _ResumeDetail$identit3 === void 0 ? void 0 : _ResumeDetail$identit3.constellation
  }, {
    key: '民族',
    value: (_ResumeDetail$identit4 = ResumeDetail.identity) === null || _ResumeDetail$identit4 === void 0 ? void 0 : _ResumeDetail$identit4.nation
  }, {
    key: '户籍',
    value: "".concat(((_ResumeDetail$identit5 = ResumeDetail.identity) === null || _ResumeDetail$identit5 === void 0 ? void 0 : _ResumeDetail$identit5.nativePlaceProvince) || '').concat(((_ResumeDetail$identit6 = ResumeDetail.identity) === null || _ResumeDetail$identit6 === void 0 ? void 0 : _ResumeDetail$identit6.nativePlaceCity) || '').concat(((_ResumeDetail$identit7 = ResumeDetail.identity) === null || _ResumeDetail$identit7 === void 0 ? void 0 : _ResumeDetail$identit7.nativePlaceDistrict) || '').concat(((_ResumeDetail$identit8 = ResumeDetail.identity) === null || _ResumeDetail$identit8 === void 0 ? void 0 : _ResumeDetail$identit8.permanentAddress) || '')
  }, {
    key: '学历',
    value: (_ResumeDetail$detail2 = ResumeDetail.detail) === null || _ResumeDetail$detail2 === void 0 ? void 0 : _ResumeDetail$detail2.education
  }, {
    key: '婚姻',
    value: (_ResumeDetail$detail3 = ResumeDetail.detail) === null || _ResumeDetail$detail3 === void 0 ? void 0 : _ResumeDetail$detail3.married
  }];
  var jobInfo = [{
    key: '工作类型',
    value: JobIntensionsList.filter(function (item) {
      return (ResumeDetail.jobIntensionsList || []).includes(item.name);
    }).map(function (item) {
      return item.name;
    }).join('、') || ''
  }, {
    key: '工作时间',
    value: ResumeDetail.workTime || ''
  }, {
    key: '工作经验',
    value: ((_ResumeDetail$skills = ResumeDetail.skills) === null || _ResumeDetail$skills === void 0 ? void 0 : _ResumeDetail$skills.workingLife) ? _common_constant__WEBPACK_IMPORTED_MODULE_6__[/* default */ "c"].WorkingLifeDataList.get((_ResumeDetail$skills2 = ResumeDetail.skills) === null || _ResumeDetail$skills2 === void 0 ? void 0 : _ResumeDetail$skills2.workingLife) : ''
  }, {
    key: '期望薪资',
    value: "".concat(((_ResumeDetail$skills3 = ResumeDetail.skills) === null || _ResumeDetail$skills3 === void 0 ? void 0 : _ResumeDetail$skills3.minExpectSalary) || '').concat(((_ResumeDetail$skills4 = ResumeDetail.skills) === null || _ResumeDetail$skills4 === void 0 ? void 0 : _ResumeDetail$skills4.maxExpectSalary) ? "-".concat((_ResumeDetail$skills5 = ResumeDetail.skills) === null || _ResumeDetail$skills5 === void 0 ? void 0 : _ResumeDetail$skills5.maxExpectSalary) : '')
  }];
  var skillInfo = [{
    key: '个人技能',
    value: (((_ResumeDetail$skills6 = ResumeDetail.skills) === null || _ResumeDetail$skills6 === void 0 ? void 0 : _ResumeDetail$skills6.composite) || []).join('、') || ''
  }
  /*{
    key: '掌握菜系',
    value: (ResumeDetail.skills?.cuisine || []).join('、') || ''
  },
  {
    key: '做饭能力',
    value: ResumeDetail.skills?.cookAble || ''
  }, {
    key: '语言能力',
    value: (ResumeDetail.skills?.language || []).join('、') || ''
  }, {
    key: '普通话水平',
    value: ResumeDetail.skills?.mandarinAble || ''
  }*/
  ];
  var otherInfo = [{
    key: '现居地',
    value: "".concat(((_ResumeDetail$address = ResumeDetail.address) === null || _ResumeDetail$address === void 0 ? void 0 : _ResumeDetail$address.province) || '').concat(((_ResumeDetail$address2 = ResumeDetail.address) === null || _ResumeDetail$address2 === void 0 ? void 0 : _ResumeDetail$address2.city) || '').concat(((_ResumeDetail$address3 = ResumeDetail.address) === null || _ResumeDetail$address3 === void 0 ? void 0 : _ResumeDetail$address3.district) || '').concat(((_ResumeDetail$address4 = ResumeDetail.address) === null || _ResumeDetail$address4 === void 0 ? void 0 : _ResumeDetail$address4.address) || '')
  }, {
    key: '身高',
    value: ((_ResumeDetail$detail4 = ResumeDetail.detail) === null || _ResumeDetail$detail4 === void 0 ? void 0 : _ResumeDetail$detail4.height) || '',
    unit: 'cm'
  }, {
    key: '体重',
    value: ((_ResumeDetail$detail5 = ResumeDetail.detail) === null || _ResumeDetail$detail5 === void 0 ? void 0 : _ResumeDetail$detail5.weight) || '',
    unit: 'kg'
  }, {
    key: '信仰',
    value: ((_ResumeDetail$detail6 = ResumeDetail.detail) === null || _ResumeDetail$detail6 === void 0 ? void 0 : _ResumeDetail$detail6.religion) || ''
  }, {
    key: '签证',
    value: ((_ResumeDetail$detail7 = ResumeDetail.detail) === null || _ResumeDetail$detail7 === void 0 ? void 0 : _ResumeDetail$detail7.visa) || ''
  }, {
    key: '血型',
    value: ((_ResumeDetail$detail8 = ResumeDetail.detail) === null || _ResumeDetail$detail8 === void 0 ? void 0 : _ResumeDetail$detail8.bloodType) || ''
  }, {
    key: '子女数量',
    value: ((_ResumeDetail$detail9 = ResumeDetail.detail) === null || _ResumeDetail$detail9 === void 0 ? void 0 : _ResumeDetail$detail9.children) || ''
  }, {
    key: '子女年龄',
    value: ((_ResumeDetail$detail10 = ResumeDetail.detail) === null || _ResumeDetail$detail10 === void 0 ? void 0 : _ResumeDetail$detail10.childrenAge) || ''
  }, {
    key: '配偶职业',
    value: ((_ResumeDetail$detail11 = ResumeDetail.detail) === null || _ResumeDetail$detail11 === void 0 ? void 0 : _ResumeDetail$detail11.spouseJob) || ''
  }, {
    key: '紧急联系电话',
    value: ((_ResumeDetail$detail12 = ResumeDetail.detail) === null || _ResumeDetail$detail12 === void 0 ? void 0 : _ResumeDetail$detail12.emergencyPhone) || ''
  }];
  var workingExperiencesList = ((ResumeDetail === null || ResumeDetail === void 0 ? void 0 : ResumeDetail.workingExperiencesList) || []).map(function (item) {
    return {
      title: "".concat(moment__WEBPACK_IMPORTED_MODULE_7___default()(item.startTime).format('YYYY-MM-DD'), "\u81F3").concat(moment__WEBPACK_IMPORTED_MODULE_7___default()(item.endTime).format('YYYY-MM-DD')),
      content: [item.serviceName, item.experienceDiscription],
      color: 'red'
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "index fixedView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "resumeTop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "myInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: ResumeDetail.auntHeadPhoto || _common_constant__WEBPACK_IMPORTED_MODULE_6__[/* DefaultUserPic */ "b"],
    className: "headPhoto",
    mode: "aspectFill",
    onClick: function onClick() {
      onImageClick(ResumeDetail.auntHeadPhoto || _common_constant__WEBPACK_IMPORTED_MODULE_6__[/* DefaultUserPic */ "b"], [ResumeDetail.auntHeadPhoto || _common_constant__WEBPACK_IMPORTED_MODULE_6__[/* DefaultUserPic */ "b"]]);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "myInfoCon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "Text"
  }, (_ResumeDetail$identit9 = ResumeDetail.identity) === null || _ResumeDetail$identit9 === void 0 ? void 0 : _ResumeDetail$identit9.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "state"
  }, ResumeDetail.jobStatus)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "address"
  }, (_ResumeDetail$identit10 = ResumeDetail.identity) === null || _ResumeDetail$identit10 === void 0 ? void 0 : _ResumeDetail$identit10.age, "\u5C81 ", ((_ResumeDetail$detail13 = ResumeDetail.detail) === null || _ResumeDetail$detail13 === void 0 ? void 0 : _ResumeDetail$detail13.nativePlace) && " | ".concat((_ResumeDetail$detail14 = ResumeDetail.detail) === null || _ResumeDetail$detail14 === void 0 ? void 0 : _ResumeDetail$detail14.nativePlace, "\u4EBA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "desc"
  }, ((_ResumeDetail$descrip = ResumeDetail.description) === null || _ResumeDetail$descrip === void 0 ? void 0 : _ResumeDetail$descrip.description) ? "".concat((_ResumeDetail$descrip2 = ResumeDetail.description) === null || _ResumeDetail$descrip2 === void 0 ? void 0 : _ResumeDetail$descrip2.description) : '暂无描述...'))), ResumeDetail.completionDegree != '100%' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "myTip",
    onClick: goAdd
  }, "\u7B80\u5386\u5B8C\u6574\u5EA6", ResumeDetail.completionDegree, "\uFF0C\u53BB\u5B8C\u5584\u6211\u7684\u7B80\u5386 >")), baseInfo.filter(function (item) {
    return item.value;
  }).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "basicInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "\u57FA\u672C\u4FE1\u606F"
  }, baseInfo.map(function (item, index) {
    return item.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "listItem",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      className: "listTitle"
    }, item.key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      className: "listText"
    }, item.value));
  }))), baseInfo.filter(function (item) {
    return item.value;
  }).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "jobInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "\u6C42\u804C\u4FE1\u606F"
  }, jobInfo.map(function (item, index) {
    return item.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "listItem",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      className: "listTitle"
    }, item.key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      className: "listText"
    }, item.value));
  }))), (((_ResumeDetail$skills7 = ResumeDetail.skills) === null || _ResumeDetail$skills7 === void 0 ? void 0 : _ResumeDetail$skills7.auntCert) || []).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "certificateInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "\u8BC1\u4E66\u4FE1\u606F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "certificateList"
  }, (((_ResumeDetail$skills8 = ResumeDetail.skills) === null || _ResumeDetail$skills8 === void 0 ? void 0 : _ResumeDetail$skills8.auntCert) || []).map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "certificateItem",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_4__["AtIcon"], {
      value: "star",
      size: "18",
      color: "#F2544E"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      className: "text"
    }, item));
  })))), skillInfo.filter(function (item) {
    return item.value;
  }).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "skillInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "\u6280\u80FD\u4FE1\u606F"
  }, skillInfo.map(function (item, index) {
    return item.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "listItem",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      className: "listTitle"
    }, item.key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      className: "listText"
    }, item.value));
  }))), otherInfo.filter(function (item) {
    return item.value;
  }).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "otherInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "\u5176\u4ED6\u4FE1\u606F"
  }, otherInfo.map(function (item, index) {
    return item.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "listItem",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      className: "listTitle"
    }, item.key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "listText"
    }, item.value, item.unit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      className: "listUnit"
    }, item.unit)));
  }))), ((ResumeDetail === null || ResumeDetail === void 0 ? void 0 : ResumeDetail.workingExperiencesList) || []).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "otherInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "\u4ECE\u4E1A\u4FE1\u606F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_4__["AtTimeline"], {
    pending: true,
    items: workingExperiencesList,
    className: "timeline"
  }))), ((((_ResumeDetail$photoVi = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi === void 0 ? void 0 : _ResumeDetail$photoVi.photos) || []).length > 0 || (((_ResumeDetail$photoVi2 = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi2 === void 0 ? void 0 : _ResumeDetail$photoVi2.videos) || []).length > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "picInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "\u7167\u7247\u89C6\u9891"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "at-row at-row--wrap picList"
  }, (((_ResumeDetail$photoVi3 = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi3 === void 0 ? void 0 : _ResumeDetail$photoVi3.photos) || []).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "at-col at-col-4",
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      className: "img",
      src: item,
      mode: "aspectFill",
      onClick: function onClick() {
        var _ResumeDetail$photoVi4;

        onImageClick(item, (_ResumeDetail$photoVi4 = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi4 === void 0 ? void 0 : _ResumeDetail$photoVi4.photos);
      }
    }));
  }), (((_ResumeDetail$photoVi5 = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi5 === void 0 ? void 0 : _ResumeDetail$photoVi5.videos) || []).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "at-col at-col-4",
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Video"], {
      className: "video",
      src: item,
      controls: true
    }));
  })))), (((_ResumeDetail$photoVi6 = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi6 === void 0 ? void 0 : _ResumeDetail$photoVi6.certPhotos) || []).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "picInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "\u8BC1\u4E66\u7167\u7247"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "at-row at-row--wrap picList"
  }, (((_ResumeDetail$photoVi7 = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi7 === void 0 ? void 0 : _ResumeDetail$photoVi7.certPhotos) || []).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "at-col at-col-4",
      key: item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      className: "img",
      src: item,
      mode: "aspectFill",
      onClick: function onClick() {
        var _ResumeDetail$photoVi8;

        onImageClick(item, (_ResumeDetail$photoVi8 = ResumeDetail.photoVideo) === null || _ResumeDetail$photoVi8 === void 0 ? void 0 : _ResumeDetail$photoVi8.certPhotos);
      }
    }));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "fixedBtnView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_4__["AtButton"], {
    type: "primary",
    className: "fixedBtn",
    onClick: goAdd
  }, "\u7F16\u8F91\u6211\u7684\u7B80\u5386")));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* connect */ "b"])(function (_ref) {
  var resume = _ref.resume,
      dispatch = _ref.dispatch;
  return {
    resume: resume,
    dispatch: dispatch
  };
})(Detail));

/***/ }),

/***/ "./src/pages/resume/components/Empty/index.less":
/*!******************************************************!*\
  !*** ./src/pages/resume/components/Empty/index.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/components/Empty/index.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/resume/components/Empty/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_empty_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/images/empty.png */ "./src/assets/images/empty.png");
/* harmony import */ var _images_list_empty_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/images/list-empty.png */ "./src/assets/images/list-empty.png");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less */ "./src/pages/resume/components/Empty/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_7__);








/**空白简历 */

var Empty = function Empty() {
  function goAdd() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
      url: '/pages/resume/addResume'
    });
  }

  function gotoLogin() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
      url: '/pages/login/login'
    });
  }

  var token = _utils_common__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].getToken();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "fixedView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "resumeEmptyView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _images_empty_png__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    className: "emptyPic",
    mode: "aspectFit"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "empty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _images_list_empty_png__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    mode: "aspectFit",
    className: "image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "text"
  }, "\u8FD9\u91CC\u7A7A\u7A7A\u5982\u4E5F\uFF0C\u8D76\u7D27\u53BB", token ? '录入简历吧' : '登录吧', "~"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "fixedBtnView"
  }, token ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_3__["AtButton"], {
    className: "fixedBtn",
    onClick: goAdd
  }, "\u5F55\u5165\u6211\u7684\u7B80\u5386") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_3__["AtButton"], {
    className: "fixedBtn",
    onClick: gotoLogin
  }, "\u70B9\u51FB\u53BB\u767B\u5F55")));
};

/* harmony default export */ __webpack_exports__["a"] = (Empty);

/***/ }),

/***/ "./src/pages/resume/resume.tsx":
/*!*************************************!*\
  !*** ./src/pages/resume/resume.tsx ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_resume_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./resume.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/resume/resume.tsx");


var config = {"navigationBarTitleText":"我的简历"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_resume_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/resume/resume', {}, config || {}))



/***/ })

},[["./src/pages/resume/resume.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=resume.js.map