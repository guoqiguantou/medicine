(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/findAunt/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/findAunt/index.tsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/findAunt/index.tsx ***!
  \*******************************************************************************************************/
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
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_tip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/tip */ "./src/utils/tip.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/pages/findAunt/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_stringUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/stringUtil */ "./src/utils/stringUtil.ts");













/**第二步求职信息 */

var FindAunt = function FindAunt(props) {
  var findAunt = props.findAunt,
      dispatch = props.dispatch,
      loading = props.loading;
  var JobIntensionsList = findAunt.JobIntensionsList;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      userId = _useState2[0],
      setUserId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      addSource = _useState4[0],
      setAddSource = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var optionsSync = _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.getCurrentInstance().router.params; //获取页面参数

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
        setUserId(p.userId);
        setAddSource(p.addSource);
        dispatch({
          type: 'findAunt/queryJobIntensionsListDictionary',
          payload: {
            companyId: p.companyId
          }
        });
      });
    }
  }, []);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    itemId: '',
    name: '',
    phone: ''
  }),
      _useState6 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      formItem = _useState6[0],
      setFormItem = _useState6[1];

  var submit = function submit() {
    var name = formItem.name,
        phone = formItem.phone,
        itemId = formItem.itemId;

    if (!itemId) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].showTips('请选择求职工种');
      return;
    }

    if (!/^1\d{10}$/.test(phone)) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].showTips('请输入正确的手机号码');
      return;
    }

    if (!name) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].showTips('请输入姓名');
      return;
    }

    if (!phone) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].showTips('请输入手机号');
      return;
    }

    var params = {
      itemId: itemId,
      name: name,
      phone: phone,
      addUserId: userId,
      addSource: addSource
    };
    dispatch({
      type: 'findAunt/auntPossibleAdd',
      payload: Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, params)
    }).then(function (res) {
      if (res) {
        setFormItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, {
          phone: '',
          name: ''
        }));
        _utils_tip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].showTips('操作成功');
      }
    });
  };

  var handleChange = function handleChange(name, value) {
    setFormItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, value)));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "findAuntIndex "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "jobInfo fixedView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "\u6C42\u804C\u5DE5\u79CD",
    height: 200
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "at-row at-row--wrap checkboxView"
  }, JobIntensionsList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "at-col at-col-4",
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
        checkbox: true,
        checkboxActive: formItem.itemId === item.id
      }),
      onClick: function onClick() {
        handleChange('itemId', item.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Text"], null, item.name)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtInput"], {
    name: "name",
    title: "\u59D3\u540D",
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D",
    value: formItem.name,
    onChange: function onChange(value) {
      handleChange('name', value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtInput"], {
    name: "phone",
    title: "\u624B\u673A\u53F7",
    type: "number",
    placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
    value: formItem.phone,
    onChange: function onChange(value) {
      handleChange('phone', value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["CoverView"], {
    className: "fixedBtnView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "fixedBtn",
    loading: loading,
    onClick: function onClick() {
      submit();
    }
  }, "\u63D0\u4EA4"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[/* connect */ "b"])(function (_ref2) {
  var findAunt = _ref2.findAunt,
      dispatch = _ref2.dispatch,
      loading = _ref2.loading;
  return {
    findAunt: findAunt,
    dispatch: dispatch,
    loading: loading.effects['findAunt/auntPossibleAdd']
  };
})(FindAunt));

/***/ }),

/***/ "./src/pages/findAunt/index.less":
/*!***************************************!*\
  !*** ./src/pages/findAunt/index.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/findAunt/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/findAunt/index.tsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/findAunt/index.tsx");


var config = {"navigationBarTitleText":"招聘阿姨"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/findAunt/index', {}, config || {}))



/***/ })

},[["./src/pages/findAunt/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map