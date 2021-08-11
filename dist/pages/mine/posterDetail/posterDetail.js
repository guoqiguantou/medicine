(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/posterDetail/posterDetail"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/mine/posterDetail/posterDetail.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/mine/posterDetail/posterDetail.tsx ***!
  \***********************************************************************************************************************/
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
/* harmony import */ var _posterDetail_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posterDetail.less */ "./src/pages/mine/posterDetail/posterDetail.less");
/* harmony import */ var _posterDetail_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_posterDetail_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.ts");
/* harmony import */ var _utils_base64__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/base64 */ "./src/utils/base64.tsx");









var _btnArr = [{
  type: '3',
  text: '保存海报'
}, {
  type: '4',
  text: '复制链接'
}];

var PosterDetail = function PosterDetail(props) {
  var dispatch = props.dispatch,
      mine = props.mine;
  var posterInfo = mine.posterInfo,
      invateUrlInfo = mine.invateUrlInfo,
      mineInfo = mine.mineInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      backImg = _useState2[0],
      setBackImg = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_Users_guoqiguantou_Documents_project_medicine_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      showSetting = _useState4[0],
      setShowSetting = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: 'mine/querySharePoster',
      payload: {
        type: 5
      }
    });
    dispatch({
      type: 'mine/queryAuntMine'
    }).then(function (res) {
      if (res && res.id) {
        dispatch({
          type: 'mine/getInviteUrl',
          payload: {
            id: res.id
          }
        });
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    invateUrlInfo.qrCode && posterInfo.picUrl && getUU();
  }, [invateUrlInfo.qrCode, posterInfo.picUrl]); // 拼图

  var getUU = function getUU() {
    var qr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : invateUrlInfo.qrCode;

    var _ress = _utils_base64__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].encode(qr.substring(qr.indexOf("kacloud")) + "?x-oss-process=image/resize,m_fill,w_150,h_150").replace(/\+/g, "-").replace(/\//g, '_');

    var url = posterInfo.picUrl + '?x-oss-process=image/resize,m_fill,w_500,h_890' + "/watermark,image_" + _ress + ",x_25,y_55";
    var subInfo1 = encodeAndMark({
      word: "\u597D\u53CB ",
      y: 150
    });
    var startX = 80; // 第二列 起始x

    var _name = mineInfo.name || '';

    var numX = 21 * _name.length; // 文字的 宽度

    var subInfo12 = '';

    if (_name) {
      subInfo12 = encodeAndMark({
        word: "".concat(_name || ''),
        y: 150,
        x: startX,
        color: 'DD4650'
      });
    }

    var subInfo13 = encodeAndMark({
      word: " \u9080\u8BF7\u60A8\u52A0\u5165",
      y: 150,
      x: startX + numX
    });

    if (mineInfo.shopName && mineInfo.shopName.length > 13) {
      var subInfo2 = encodeAndMark({
        word: mineInfo.shopName.substring(0, 13),
        y: 110,
        color: 'DD4650'
      });
      var subInfo3 = encodeAndMark({
        word: mineInfo.shopName.substring(13),
        y: 80,
        color: 'DD4650'
      });
      url = url + subInfo1 + subInfo12 + subInfo13 + subInfo2 + subInfo3;
    } else {
      var _subInfo = encodeAndMark({
        word: mineInfo.shopName.substring(0, 13),
        y: 110,
        color: 'DD4650'
      });

      url = url + subInfo1 + subInfo12 + subInfo13 + _subInfo;
    }

    setBackImg(url);
  };

  var encodeAndMark = function encodeAndMark() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$word = _ref.word,
        word = _ref$word === void 0 ? '' : _ref$word,
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 32 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 110 : _ref$y,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? '666666' : _ref$color,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === void 0 ? '22' : _ref$fontSize;

    var info = _utils_base64__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].encode("".concat(word)).replace(/\+/g, "-").replace(/\//g, '_');
    return "/watermark,text_".concat(info, ",color_").concat(color, ",size_").concat(fontSize, ",g_sw,x_").concat(x, ",y_").concat(y);
  }; // 保存图片


  var saveImage = function saveImage() {
    // 查看是否授权
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getSetting({}).then(function (res) {
      if (!backImg) return _utils_common__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].error('图片地址有误');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.showLoading({
        title: '获取图片资源.....'
      }); // 获取网络图片信息  顺便转为本地临时图片

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getImageInfo({
        src: backImg
      }).then(function (imgOp) {
        // 有相册权限直接保存
        if (res.authSetting['scope.writePhotosAlbum']) {
          _savePic2Local(imgOp.path);
        } else {
          // 获取权限
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.authorize({
            scope: 'scope.writePhotosAlbum'
          }).then(function () {
            _savePic2Local(imgOp.path);
          }).catch(function (err) {
            // 没有权限 打开设置面板
            if (err && err.errMsg && err.errMsg.indexOf('auth deny') > 0) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.openSetting({
                success: function success(res) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
                  res.authSetting = {
                    "scope.writePhotosAlbum": true
                  };
                }
              }).catch(function (errRefu) {
                refusedAuthInfo(errRefu);
              });
            }
          });
        }
      });
    }).catch(function (e) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
      _utils_common__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].error("\u4FDD\u5B58\u56FE\u7247\u5931\u8D25\uFF1A".concat(JSON.stringify(e)));
    });
  }; // 判断用户是否拒绝读取相册权限


  var refusedAuthInfo = function refusedAuthInfo(err) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();

    if (err && err.errMsg && err.errMsg.indexOf('openSetting:fail') > -1) {
      /*Taro.showModal({
        title: '温馨提示',
        content: '您拒绝了访问相册权限，无法保存海报，若想使用，请手动前往设置页面打开允许访问相册的设置'
      });*/
      setShowSetting(true);
    } else {
      _utils_common__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].error(JSON.stringify(err));
    }
  }; // 保存图片到本地


  var _savePic2Local = function _savePic2Local(path) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.saveImageToPhotosAlbum({
      filePath: path
    }).then(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
      return _utils_common__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].error('保存成功');
    }).catch(function (err) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();

      if (err && err.errMsg && err.errMsg.indexOf('fail cancel') > 0) {
        return _utils_common__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].error('取消保存');
      }
    });
  };

  var _opt = function _opt(_item) {
    if (_item.type == '3') return saveImage();
    if (!invateUrlInfo.url) return _utils_common__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].error('分享链接未获取');

    if (_item.type == '4') {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setClipboardData({
        data: invateUrlInfo.url,
        success: function success() {
          _utils_common__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].error('链接复制成功，请到微信发送给好友吧', 2500);
        }
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "poster"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    title: "\u6D77\u62A5\u8BE6\u60C5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "pos-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "pos-15"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: backImg || posterInfo.picUrl,
    className: "pos-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "pos-16"
  }, "\u8BF7\u5C06\u9080\u8BF7\u6D77\u62A5\u4FDD\u5B58\u5230\u672C\u5730\u540E\u53D1\u9001\u7ED9\u597D\u53CB"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "pos-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "pos-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "pos-7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "pos-8"
  }, "\u5206\u4EAB\u5230")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "pos-6"
  }, _btnArr.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "pos-9",
      key: item.type,
      onClick: function onClick() {
        return _opt(item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: "https://oss.bm001.com/static/ka/a/share/share".concat(item.type, ".svg"),
      className: "pos-10"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "pos-11"
    }, item.text));
  }))), showSetting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "bu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "bu1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "bu-title"
  }, '温馨提示'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "bu-content"
  }, "\u60A8\u62D2\u7EDD\u4E86\u8BBF\u95EE\u76F8\u518C\u6743\u9650\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u6D77\u62A5\uFF0C\u82E5\u60F3\u4F7F\u7528\uFF0C\u8BF7\u624B\u52A8\u524D\u5F80\u8BBE\u7F6E\u9875\u9762\u6253\u5F00\u5141\u8BB8\u8BBF\u95EE\u76F8\u518C\u7684\u8BBE\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "bu-bt-bx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn-st",
    onClick: function onClick() {
      return setShowSetting(false);
    }
  }, "\u53D6 \u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn-st",
    onOpenSetting: function onOpenSetting() {
      return setShowSetting(false);
    },
    openType: "openSetting"
  }, "\u786E \u5B9A")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* connect */ "b"])(function (_ref2) {
  var mine = _ref2.mine,
      dispatch = _ref2.dispatch,
      loading = _ref2.loading;
  return {
    mine: mine,
    dispatch: dispatch,
    loading: loading.effects['findAunt/auntPossibleAdd']
  };
})(PosterDetail));

/***/ }),

/***/ "./src/pages/mine/posterDetail/posterDetail.less":
/*!*******************************************************!*\
  !*** ./src/pages/mine/posterDetail/posterDetail.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/mine/posterDetail/posterDetail.tsx":
/*!******************************************************!*\
  !*** ./src/pages/mine/posterDetail/posterDetail.tsx ***!
  \******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_posterDetail_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./posterDetail.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/mine/posterDetail/posterDetail.tsx");


var config = {"navigationBarTitleText":"推荐记录"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_posterDetail_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/mine/posterDetail/posterDetail', {}, config || {}))



/***/ }),

/***/ "./src/utils/base64.tsx":
/*!******************************!*\
  !*** ./src/utils/base64.tsx ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var Base64 = {
  //public method for encoding
  encode: function encode(input) {
    var output = "",
        chr1,
        chr2,
        chr3,
        enc1,
        enc2,
        enc3,
        enc4,
        i = 0;
    input = Base64._utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }

    return output;
  },
  // public method for decoding
  decode: function decode(input) {
    var output = "",
        chr1,
        chr2,
        chr3,
        enc1,
        enc2,
        enc3,
        enc4,
        i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }

      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    output = Base64._utf8_decode(output);
    return output;
  },
  // private method for UTF-8 encoding
  _utf8_encode: function _utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  },
  // private method for UTF-8 decoding
  _utf8_decode: function _utf8_decode(utftext) {
    var string = "",
        i = 0,
        c = 0,
        c1 = 0,
        c2 = 0,
        c3 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode((c & 31) << 6 | c2 & 63);
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        i += 3;
      }
    }

    return string;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Base64);

/***/ })

},[["./src/pages/mine/posterDetail/posterDetail.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=posterDetail.js.map