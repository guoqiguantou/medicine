/**
 * 判断是否为整数
 * @param {*} true - 不是整数
 */
export function checkIntegerNumber(str: string) {
  try {
    const all = '1234567890';
    let i;
    let c;
    for (i = 0; i < (str || '').length; i++) {
      // eslint-disable-line
      c = str.charAt(i);
      if (all.indexOf(c) === -1) {
        return true;
      }
    }
    return false;
  } catch (e) {
    return true;
  }
}

// 身份证号合法性验证
// 支持15位和18位身份证号
// 支持地址编码、出生日期、校验位验证
export function verifyCardId(code: string) {
  const city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 ',
  };
  let tip = '';
  let pass = true;

  if (
    !code ||
    !/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(
      code,
    )
  ) {
    tip = '身份证号格式错误';
    pass = false;
  } else if (!city[code.substr(0, 2)]) {
    tip = '地址编码错误';
    pass = false;
  } else if (code.length === 18) {
    // eslint-disable-next-line
    code = code.split('');
    // ∑(ai×Wi)(mod 11)
    // 加权因子
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    // 校验位
    const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
    const sum = code.reduce((s, c, i) => s + c * factor[i], 0);
    if (parity[sum % 11] !== code[17]) {
      tip = '校验位错误';
      pass = false;
    }
  }
  if (!pass) console.log(tip);
  return pass;
}

/**
 * 验证是否0-9，是返回true
 */
export function validateNumber(text: string) {
  const reg = /^[0-9]*$/;
  return reg.test(text);
}


// 显示部分手机号码
export function displayPartNumber(number: string) {
  if (number === null || number === undefined) return '';
  let newNum = '';
  if (number.length > 8) {
    newNum += number.substr(0, 3);
    newNum += '*********************'.substr(0, number.length - 7);
    newNum += number.substr(number.length - 4, number.length);
  }
  return newNum;
}

export const parseQuery = (query) => {
  const ret = {};
  let seg = query.replace('?', '').split('&');
  for (let i = 0, len = seg.length; i < len; i++) {
    const key = seg[i].split('=')[0];
    const val = seg[i].split('=')[1];
    ret[key] = val;
  }
  return ret;
}

export const parseQueryUrl = (variable) => {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return (false);
}