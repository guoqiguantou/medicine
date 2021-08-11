import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components';
import EmptyList from "@/images/list-empty.png"
import './index.less';

function Empty(props) {
  return <View className='emptyView'>
    <View className="empty">
      <Image src={EmptyList} mode='aspectFit' className="image" />
      <Text className="text">这里空空如也哦~</Text>
      {props.children && props.children}
    </View>
  </View>
}

export default Empty;
