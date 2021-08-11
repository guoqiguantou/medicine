(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/service/detail"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/service/detail.tsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/service/detail.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ModalImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ModalImg */ "./src/pages/service/components/ModalImg/index.tsx");
/* harmony import */ var _components_ModalSign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ModalSign */ "./src/pages/service/components/ModalSign/index.tsx");
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Timer */ "./src/pages/service/components/Timer/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _service_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service.less */ "./src/pages/service/service.less");
/* harmony import */ var _service_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_service_less__WEBPACK_IMPORTED_MODULE_14__);















/**服务单详情页面*/

var ServiceDetail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (props, ref) {
  var _cleanOrder$cleanServ, _cleanOrder$cleanServ2, _cleanOrder$cleanServ3, _cleanOrder$cleanServ4, _cleanOrder$cleanServ5, _cleanOrder$cleanServ6, _cleanOrder$cleanServ7, _cleanOrder$cleanServ8, _cleanOrder$cleanServ9, _cleanOrder$cleanServ10, _cleanOrder$cleanServ11;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      state = _useState2[0],
      setStates = _useState2[1]; //0上户签到 1下户签到 2签到完成


  var dispatch = props.dispatch,
      cleanOrder = props.service.cleanOrder;
  var ModalSignRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    show: function show() {}
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var id = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getCurrentInstance().router.params.id;
    dispatch({
      type: 'service/getCleanOrder',
      payload: {
        id: id
      }
    });
    return function () {
      dispatch({
        type: 'service/clearDetail'
      });
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (cleanOrder.startWorkSignTime && cleanOrder.endWorkSignTime) {
      setStates(2);
    } else if (cleanOrder.startWorkSignTime) {
      setStates(1);
    } else {
      setStates(0);
    }
  }, [cleanOrder]); //签到

  function submit(data) {
    var id = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getCurrentInstance().router.params.id;

    if (state == 0) {
      dispatch({
        type: 'service/startWorkSign',
        payload: Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          id: id
        }, data)
      });
    } else if (state == 1) {
      dispatch({
        type: 'service/endWorkSign',
        payload: Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          id: id
        }, data)
      });
    }
  } //上传图片


  function saveImgs(images, step) {
    console.log(images);
    var id = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getCurrentInstance().router.params.id;

    if (step == 1) {
      dispatch({
        type: 'service/saveStartWorkImgs',
        payload: {
          id: id,
          images: images
        }
      });
    } else if (step == 2) {
      dispatch({
        type: 'service/saveEndWorkImgs',
        payload: {
          id: id,
          images: images
        }
      });
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "serviceDetail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u670D\u52A1\u5355\u8BE6\u60C5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "detailTop"
  }, ((cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.state) == 0 || (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.startWorkSignTime) || (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.endWorkSignTime)) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "detailTop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, cleanOrder.state == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_13___default()(['sign', state < 2 ? 'yellow' : 'grey']),
    onClick: function onClick() {
      state < 2 && ModalSignRef.current.show();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "signName"
  }, {
    0: '上户签到',
    1: '下户签到',
    2: '签到完成'
  }[state]), state < 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "signTime"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Timer__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    format: "HH:mm:ss"
  }))), (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.startWorkSignTime) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "signDetail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "signDetailText"
  }, "\u4E0A\u6237\u7B7E\u5230"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u7B7E\u5230\u65F6\u95F4:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.startWorkSignTime) && moment__WEBPACK_IMPORTED_MODULE_9___default()(cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.startWorkSignTime).format('YYYY.MM.DD HH:mm'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u7B7E\u5230\u5730\u70B9:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.startWorkSignAddress) || '')), (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.startWorkSignRemark) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u5907\u6CE8:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.startWorkSignRemark) || ''))), (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.endWorkSignTime) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtDivider"], {
    lineColor: "#f5f5f5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "signDetail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "signDetailText"
  }, "\u4E0B\u6237\u7B7E\u5230"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u7B7E\u5230\u65F6\u95F4:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.endWorkSignTime) && moment__WEBPACK_IMPORTED_MODULE_9___default()(cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.endWorkSignTime).format('YYYY.MM.DD HH:mm'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u7B7E\u5230\u5730\u70B9:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.endWorkSignAddress) || '')), (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.endWorkSignRemark) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u5907\u6CE8:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.endWorkSignRemark) || '')))))), (((cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.startWorkImgs) || []).length > 0 || ((cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.endWorkImgs) || []).length > 0 || cleanOrder.state == 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    title: "\u7167\u7247\u7559\u6837"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ModalImg__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    title: "\u672A\u505A\u4E4B\u524D\u7167\u7247",
    propsfileList: (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.startWorkImgs) || [],
    onChange: function onChange(img) {
      saveImgs(img, 1);
    },
    disabled: cleanOrder.state !== 0
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtDivider"], {
    lineColor: "#f5f5f5",
    className: "MyAtDivider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ModalImg__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    title: "\u505A\u5B8C\u4E4B\u540E\u7167\u7247",
    propsfileList: (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.endWorkImgs) || [],
    onChange: function onChange(img) {
      saveImgs(img, 2);
    },
    disabled: cleanOrder.state !== 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u670D\u52A1\u5355\u53F7:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.cleanOrderId) || '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u5BA2\u6237\u59D3\u540D:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : (_cleanOrder$cleanServ = cleanOrder.cleanServiceOrderVO) === null || _cleanOrder$cleanServ === void 0 ? void 0 : _cleanOrder$cleanServ.customerName) || '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u670D\u52A1\u5730\u5740:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.province) || '', (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.city) || '', (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.district) || '', (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.address) || '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u5546\u54C1\u540D\u79F0:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : (_cleanOrder$cleanServ2 = cleanOrder.cleanServiceOrderVO) === null || _cleanOrder$cleanServ2 === void 0 ? void 0 : _cleanOrder$cleanServ2.productName) || '')), (cleanOrder === null || cleanOrder === void 0 ? void 0 : (_cleanOrder$cleanServ3 = cleanOrder.cleanServiceOrderVO) === null || _cleanOrder$cleanServ3 === void 0 ? void 0 : _cleanOrder$cleanServ3.productAttrValueName) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u5546\u54C1\u89C4\u683C:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : (_cleanOrder$cleanServ4 = cleanOrder.cleanServiceOrderVO) === null || _cleanOrder$cleanServ4 === void 0 ? void 0 : _cleanOrder$cleanServ4.productAttrValueName) || '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u4E0A\u95E8\u65F6\u95F4:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.serviceTime) && moment__WEBPACK_IMPORTED_MODULE_9___default()(cleanOrder === null || cleanOrder === void 0 ? void 0 : cleanOrder.serviceTime).format('YYYY.MM.DD HH:mm'))), (cleanOrder === null || cleanOrder === void 0 ? void 0 : (_cleanOrder$cleanServ5 = cleanOrder.cleanServiceOrderVO) === null || _cleanOrder$cleanServ5 === void 0 ? void 0 : _cleanOrder$cleanServ5.notes) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u6CE8\u610F\u4E8B\u9879:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : (_cleanOrder$cleanServ6 = cleanOrder.cleanServiceOrderVO) === null || _cleanOrder$cleanServ6 === void 0 ? void 0 : _cleanOrder$cleanServ6.notes) || '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u670D\u52A1\u72B6\u6001:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, {
    0: '未完成',
    1: '已完成',
    2: '已取消'
  }[cleanOrder.state])), (cleanOrder === null || cleanOrder === void 0 ? void 0 : (_cleanOrder$cleanServ7 = cleanOrder.cleanServiceOrderVO) === null || _cleanOrder$cleanServ7 === void 0 ? void 0 : _cleanOrder$cleanServ7.closeReason) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u53D6\u6D88\u539F\u56E0:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : (_cleanOrder$cleanServ8 = cleanOrder.cleanServiceOrderVO) === null || _cleanOrder$cleanServ8 === void 0 ? void 0 : _cleanOrder$cleanServ8.closeReason) || '')), (cleanOrder === null || cleanOrder === void 0 ? void 0 : (_cleanOrder$cleanServ9 = cleanOrder.cleanServiceOrderVO) === null || _cleanOrder$cleanServ9 === void 0 ? void 0 : _cleanOrder$cleanServ9.closeTime) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u53D6\u6D88\u65F6\u95F4:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, (cleanOrder === null || cleanOrder === void 0 ? void 0 : (_cleanOrder$cleanServ10 = cleanOrder.cleanServiceOrderVO) === null || _cleanOrder$cleanServ10 === void 0 ? void 0 : _cleanOrder$cleanServ10.closeTime) && moment__WEBPACK_IMPORTED_MODULE_9___default()(cleanOrder === null || cleanOrder === void 0 ? void 0 : (_cleanOrder$cleanServ11 = cleanOrder.cleanServiceOrderVO) === null || _cleanOrder$cleanServ11 === void 0 ? void 0 : _cleanOrder$cleanServ11.closeTime).format('YYYY.MM.DD HH:mm')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ModalSign__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    ref: ModalSignRef,
    submit: submit,
    title: state == 0 ? '上户签到' : '下户签到',
    dispatch: dispatch
  })));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[/* connect */ "b"])(function (_ref) {
  var service = _ref.service,
      dispatch = _ref.dispatch;
  return {
    service: service,
    dispatch: dispatch
  };
})(ServiceDetail));

/***/ }),

/***/ "./src/assets/images/location.png":
/*!****************************************!*\
  !*** ./src/assets/images/location.png ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "assets/images/location.png");

/***/ }),

/***/ "./src/pages/service/components/ModalImg/index.less":
/*!**********************************************************!*\
  !*** ./src/pages/service/components/ModalImg/index.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/service/components/ModalImg/index.tsx":
/*!*********************************************************!*\
  !*** ./src/pages/service/components/ModalImg/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalUploadImg; });
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
/* harmony import */ var _components_UploadImg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/UploadImg */ "./src/components/UploadImg/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.less */ "./src/pages/service/components/ModalImg/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_13__);












 // import '@/components/uploadImg/index.less';



//modal上传图片
var ModalUploadImg = /*#__PURE__*/function (_Component) {
  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ModalUploadImg, _Component);

  var _super = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ModalUploadImg);

  function ModalUploadImg(props) {
    var _this;

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ModalUploadImg);

    _this = _super.call(this, props);

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "onImageClick", function (item, urls) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.previewImage({
        current: item,
        // 当前显示图片的http链接
        urls: urls // 需要预览的图片http链接列表

      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "uploadImgChange", function (images) {
      _this.setState({
        images: images
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "open", function () {
      _this.setState({
        isOpened: true,
        images: Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this.state.confirmImg)
      });
    });

    Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "handleConfirm", function () {
      _this.setState({
        isOpened: false,
        confirmImg: _this.state.images
      }, function () {
        _this.props.onChange && _this.props.onChange(_this.state.images);
      });
    });

    _this.state = {
      images: [],
      isOpened: false,
      confirmImg: props.propsfileList || []
    };
    return _this;
  }

  Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ModalUploadImg, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.propsfileList.length !== this.state.confirmImg.length) {
        this.setState({
          confirmImg: Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nextProps.propsfileList)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          images = _this$state.images,
          isOpened = _this$state.isOpened,
          confirmImg = _this$state.confirmImg;
      var _this$props = this.props,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? '添加照片' : _this$props$title,
          icon = _this$props.icon,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled;
      var max = 20;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "uploadModal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "upload"
      }, confirmImg.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "uploadText"
      }, title, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "uploadList at-row at-row--wrap"
      }, confirmImg.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
          className: "at-col at-col-4 uploadItem",
          key: item
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
          className: "uploadImg"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Image"], {
          onClick: function onClick() {
            _this2.onImageClick(item, confirmImg);
          },
          lazyLoad: true,
          src: item,
          className: "upload-image",
          mode: "aspectFill"
        })));
      }), !disabled && !(max && images.length >= max) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "at-col at-col-4 uploadItem "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "uploadImg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "uploadAdd",
        onClick: this.open
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtIcon"], {
        value: "camera",
        size: "34",
        color: "#F2544E"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "uploadText"
      }, "\u4E0A\u4F20\u56FE\u7247")))))) : !disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "uploadView"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "pic",
        onClick: this.open
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "picTitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(['iconfont', 'picIcon', icon || 'icontianjiazhaopian'])
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        className: "picInfo"
      }, "\u70B9\u51FB\u6253\u5F00\u76F8\u518C\u6216\u76F8\u673A")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtModal"], {
        isOpened: isOpened,
        className: "BmModal",
        onClose: function onClose() {
          _this2.setState({
            isOpened: false
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtModalHeader"], null, "\u4E0A\u4F20", title, "(", images.length, "/", max, ")", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__["View"], {
        className: "closeBtn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtIcon"], {
        value: "close",
        size: "22",
        color: "#666666",
        onClick: function onClick() {
          _this2.setState({
            isOpened: false
          });
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtModalContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_UploadImg__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        propsfileList: images,
        onChange: this.uploadImgChange,
        title: "\u4E0A\u4F20\u7167\u7247",
        max: max
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__["AtButton"], {
        onClick: this.handleConfirm,
        type: "primary",
        disabled: images.length == 0,
        className: "loginBtn"
      }, "\u63D0\u4EA4")));
    }
  }]);

  return ModalUploadImg;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./src/pages/service/components/ModalSign/index.less":
/*!***********************************************************!*\
  !*** ./src/pages/service/components/ModalSign/index.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/service/components/ModalSign/index.tsx":
/*!**********************************************************!*\
  !*** ./src/pages/service/components/ModalSign/index.tsx ***!
  \**********************************************************/
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
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less */ "./src/pages/service/components/ModalSign/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/images/location.png */ "./src/assets/images/location.png");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Timer */ "./src/pages/service/components/Timer/index.tsx");
/* harmony import */ var _utils_tip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/tip */ "./src/utils/tip.ts");
/* harmony import */ var _wx_getLocation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/wx/getLocation */ "./src/wx/getLocation.js");












//modal签到
var ModalSign = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function (props, ref) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      isReload = _useState4[0],
      setIsReload = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState6 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      isAuth = _useState6[0],
      setIsAuth = _useState6[1];

  var maxLength = 200;

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    remark: '',
    address: ''
  }),
      _useState8 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState7, 2),
      formItem = _useState8[0],
      setFormItem = _useState8[1];

  var _props$title = props.title,
      title = _props$title === void 0 ? '上户签到' : _props$title,
      submit = props.submit,
      dispatch = props.dispatch; // 抛出方法

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"])(ref, function () {
    return {
      show: function show() {
        reload(true);
        setIsOpened(true);
      }
    };
  });
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useDidShow"])(function () {
    isOpened && reload();
  });

  function reload() {
    var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getEnv() === 'WEAPP') {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getSetting({
        success: function success(res) {
          setIsAuth(!!res.authSetting['scope.userLocation']);

          if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
            // 已授权已拒绝
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.showToast({
              title: '需要获取您的地理位置，请点击重新定位',
              icon: 'none'
            });
          } else if (res.authSetting['scope.userLocation'] == undefined) {
            //未授权
            getLocation(flag);
          } else {
            //已授权已同意
            getLocation(flag);
          }
        }
      });
    }

    if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getEnv() === 'WEB') {
      getLocation(flag);
    }
  }

  function getLocation() {
    var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    Object(_wx_getLocation__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(function (res) {
      setIsReload(true);
      setIsAuth(true);
      dispatch({
        type: 'service/geocode',
        payload: {
          latitude: res.latitude,
          longitude: res.longitude,
          distance: 10000,
          types: "120300"
        }
      }).then(function (res) {
        setIsReload(false);
        setFormItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, {
          address: res[0] ? res[0].province + res[0].city + res[0].distance + res[0].address : ''
        }, flag && {
          remark: ''
        }));
      }).catch(function (value) {
        _utils_tip__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].showTips(value);
      });
    }, function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.showToast({
        title: '需要获取您的地理位置，请点击重新定位',
        icon: 'none'
      });
    });
  }

  function handleConfirm() {
    if (formItem.remark && formItem.remark.length > maxLength) {
      _utils_tip__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].showTips("\u5907\u6CE8\u4E0D\u80FD\u8D85\u8FC7".concat(maxLength, "\u4E2A\u5B57\u54E6\uFF5E"));
      return false;
    }

    setIsOpened(false);
    submit && submit({
      address: formItem.address,
      remark: formItem.remark
    });
  } //修改表单值


  function handleChange(name, value) {
    setFormItem(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, formItem), {}, Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, name, value)));
  }

  function reloadBtn() {
    return isReload ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtActivityIndicator"], {
      isOpened: true,
      content: "\u5B9A\u4F4D\u4E2D...",
      color: "#F2544E",
      size: 32,
      className: "loading"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Image"], {
      src: _images_location_png__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
      className: "listTimeImg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "listTime",
      onClick: function onClick() {
        reload(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], null, "\u91CD\u65B0\u5B9A\u4F4D"), !isAuth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      openType: "openSetting",
      className: "authBtn"
    }, "\u53BB\u8BBE\u7F6E")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtModal"], {
    isOpened: isOpened,
    className: "BmModal",
    onClose: function onClose() {
      setIsOpened(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtModalHeader"], null, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "closeBtn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtIcon"], {
    value: "close",
    size: "22",
    color: "#666666",
    onClick: function onClick() {
      setIsOpened(false);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtModalContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u7B7E\u5230\u65F6\u95F4:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Timer__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "listTitle"
  }, "\u7B7E\u5230\u5730\u70B9:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "listText"
  }, formItem.address, reloadBtn())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "textareaView"
  }, isOpened && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtTextarea"], {
    value: formItem.remark,
    fixed: true,
    maxLength: maxLength,
    className: "textarea",
    placeholder: "\u8BF7\u586B\u5199\u5907\u6CE8",
    onChange: function onChange(e) {
      handleChange('remark', e);
    },
    height: 200,
    cursorSpacing: 20
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtButton"], {
    onClick: handleConfirm,
    type: "primary",
    className: "loginBtn"
  }, "\u63D0\u4EA4"));
});
/* harmony default export */ __webpack_exports__["a"] = (ModalSign);

/***/ }),

/***/ "./src/pages/service/components/Timer/index.tsx":
/*!******************************************************!*\
  !*** ./src/pages/service/components/Timer/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);





var Timer = function Timer(props) {
  var _props$format = props.format,
      format = _props$format === void 0 ? "YYYY.MM.DD HH:mm:ss" : _props$format;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date()),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      signTime = _useState2[0],
      setSignTime = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timer;
    timer = setInterval(function () {
      setSignTime(new Date());
    }, 1000);
    return function () {
      timer && clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], null, signTime && moment__WEBPACK_IMPORTED_MODULE_3___default()(signTime).format(format));
};

/* harmony default export */ __webpack_exports__["a"] = (Timer);

/***/ }),

/***/ "./src/pages/service/detail.tsx":
/*!**************************************!*\
  !*** ./src/pages/service/detail.tsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_detail_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./detail.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/service/detail.tsx");


var config = {"navigationBarTitleText":"服务单详情"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_detail_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/service/detail', {}, config || {}))



/***/ }),

/***/ "./src/wx/getLocation.js":
/*!*******************************!*\
  !*** ./src/wx/getLocation.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

var ENV = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getEnv();
/* harmony default export */ __webpack_exports__["a"] = (function (_success, error) {
  if (ENV === 'WEB') {
    window.wx.checkJsApi({
      jsApiList: ['getLocation'],
      // 需要检测的JS接口列表，所有JS接口列表见附录2,
      success: function success(res) {
        var _ref = res.checkResult || {},
            location = _ref.getLocation;

        if (location) {
          window.wx.getLocation({
            type: 'gcj02',
            // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function success(res) {
              _success && _success(res);
            }
          });
        } else {
          error && error('无权限获取地理位置');
        }
      },
      fail: function fail(res) {
        error && error('无权限获取地理位置');
      }
    });
  } else if (ENV === 'WEAPP') {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getLocation({
      type: 'gcj02',
      //返回可以用于 Taro.openLocation的经纬度
      success: function success(res) {
        _success && _success(res);
      },
      fail: function fail(res) {
        console.log('location err ', res);

        if (res.errMsg.indexOf('auth deny') !== -1) {
          error && error(res);
        }
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ })

},[["./src/pages/service/detail.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=detail.js.map