import Taro from '@tarojs/taro';

/**
 * 共用函数
 */
export default {
  repeat: (str = '0', times) => new Array(times + 1).join(str),

  // 时间前面 +0
  pad: (num, maxLength = 2) =>
    this.repeat('0', maxLength - num.toString().length) + num,

  /** 时间格式的转换 */
  formatTime: time => {
    return `${this.pad(time.getHours())}:${this.pad(
      time.getMinutes(),
    )}:${this.pad(time.getSeconds())}`;
  },

  setCompanyId: companyId => Taro.setStorageSync('companyId', companyId),
  getCompanyId: () => Taro.getStorageSync('companyId'),
  setShopId: shopId => Taro.setStorageSync('shopId', shopId),
  getShopId: () => Taro.getStorageSync('shopId'),

  setToken: token => Taro.setStorageSync('token', token),

  getToken: () => Taro.getStorageSync('token'),

  isLogin: () => {
    return !!Taro.getStorageSync('token');
  },

  // 保存用户信息
  saveUser: user => Taro.setStorageSync('user', user),

  // 获取用户信息
  getUser: () => Taro.getStorageSync('user'),

  // 获取openid
  getOpenId: () => Taro.getStorageSync('openId'),

  // 设置openid
  setOpenId: openId => Taro.setStorageSync('openId', openId),

  // 清除storage
  removeStorage: () => {
    Taro.removeStorageSync('user');
    Taro.removeStorageSync('token');
    Taro.removeStorageSync('openId');
  },

  getEstate: () => Taro.getStorageSync('estate'),

  setEstate: estate => Taro.setStorageSync('estate', estate),

  delEstate: () => Taro.removeStorageSync('estate'),

  reLogin: (reObj?) => {
    Taro.removeStorageSync('user');
    Taro.removeStorageSync('token');
    Taro.removeStorageSync('openId');

    const url = reObj && reObj.navicateUrl ? reObj.navicateUrl : '/pages/login/login';
    Taro.redirectTo({ url });
  },

  randomString: (len = 32) => {
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    let maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  },

  // 防抖
  debounce: (func, wait, immediate) => {
    let timeout, result;

    let debounced = function () {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
        // 如果已经执行过，不再执行
        let callNow = !timeout;
        timeout = setTimeout(function () {
          timeout = null;
        }, wait);
        if (callNow) result = func.apply(context, args);
      } else {
        timeout = setTimeout(function () {
          func.apply(context, args);
        }, wait);
      }
      return result;
    };

    debounced['cancel'] = function () {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  },
  //map 转 数组
  convertMap2List(map) {
    const list: any = [];
    map.forEach((value, key) => {
      list.push({ 'id': key, 'name': value });
    });
    return list;
  },
  //深拷贝
  deepClone(obj, hash = new WeakMap()) {
    //1、排除 undefined 和 null
    if (obj == undefined) {
      return obj
    }
    //2、排除基本类型和函数
    if (typeof obj !== 'object') {
      return obj
    }
    //3、排除时间
    if (obj instanceof Date) {
      return new Date(obj)
    }
    //4、排除正则
    if (obj instanceof RegExp) {
      return new RegExp(obj)
    }
    if (hash.has(obj)) {
      return hash.get(obj)
    }
    //对象或数组
    let newObj = new obj.constructor();//[] {}
    hash.set(obj, newObj)
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = this.deepClone(obj[key])
      }
    }
    return newObj
  },
  //根据年份获取生肖
  getChineseZodiac(yyyy) {
    var arr = ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊'];
    return /^\d{4}$/.test(yyyy) ? arr[yyyy % 12] : '未知'
  },
  /*
   * 参数说明：
   * number：要格式化的数字
   * decimals：保留几位小数
   * dec_point：小数点符号
   * thousands_sep：千分位符号
   */
  number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
      sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
      dec = typeof dec_point === 'undefined' ? '.' : dec_point,
      s: any = '',
      toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.ceil(Math.floor(n * k)) / k;
      };

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, '$1' + sep + '$2');
    }

    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  },
  con_number_format(n) {
    if (!n) return 0
    var b = parseInt(n).toString();
    if (b === '0') return 0
    b = b.slice(0, -2)
    var len = b.length;
    if (len <= 3) return b;
    var r = len % 3;
    return r > 0
      ? b.slice(0, r) + ',' + b.slice(r, len).match(/\d{3}/g) || [].join(',')
      : b.slice(r, len).match(/\d{3}/g) || [].join(',');
  },

  // 没用 token 跳转登录
  noTokenToLogin() {
    if (!this.getToken()) {
      Taro.navigateTo({ url: `/pages/login/login` })
    }
  },
  error(errMsg: any, duration = 1000) {
    if (typeof errMsg == 'object') {
      errMsg = errMsg.msg ? errMsg.msg : JSON.stringify(errMsg)
    }
    Taro.showToast({
      title: errMsg,
      icon: "none",
      duration,
    })
  },

  /**
   * 将 blob url 转化为文件
   * @param {string} url 要转换的 blob url
   * @returns {Promise<File>}
   */
  convertObjectUrlToBlob(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', url, true)
      xhr.responseType = 'blob'
      xhr.onload = function () {
        if (this.status === 200) {
          resolve(this.response)
        } else {
          reject({ status: this.status })
        }
      }
      xhr.send()
    })
  },
  setHeader(xhr, header) {
    let headerKey
    for (headerKey in header) {
      xhr.setRequestHeader(headerKey, header[headerKey])
    }
  }

};
