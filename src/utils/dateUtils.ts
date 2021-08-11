export function format(timeStamp, format) {
  const date = new Date(timeStamp);
  let fmt = format;
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      `${date.getFullYear()}`.substr(4 - RegExp.$1.length),
    );
  }
  Object.entries(o).forEach(item => {
    const key = item[0];
    const val = item[1];
    if (new RegExp(`(${key})`).test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? val : `00${val}`.substr(`${val}`.length),
      );
    }
  });
  return fmt;
}
