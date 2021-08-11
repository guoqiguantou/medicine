import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import './index.less';
// h5 端执行逻辑
if (process.env.TARO_ENV === 'h5') {
  import('./index.h5.less')
}
function GoTop(props) {
  function goTop() {
    Taro.pageScrollTo({
      scrollTop: 0,
    });
  }
  return <View className="topbtn" onClick={props.goTop || goTop}>
    <AtIcon value='chevron-up' size='22' className='topicon'></AtIcon>
  </View>;
}

export default GoTop;
