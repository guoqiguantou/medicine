import React from "react";
import { connect } from 'react-redux';
import { View, Text } from "@tarojs/components";
import { MineProps } from "./interface";
import './mine.less';


const Mine: React.FC<MineProps> = (props) => {
  return <View className='mine'>
    <Text>我的</Text>
  </View>

}


export default connect(({ mine, dispatch, loading }) => ({
  mine,
  dispatch,
  loading: loading.effects['findAunt/auntPossibleAdd'],
}))(Mine);
