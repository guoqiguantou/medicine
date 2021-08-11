import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import './index.less'


interface IndexProps {
  dispatch?,
  home,
  user,
}

interface IndexState {
  isLogin: boolean
}

@connect(({ home }) => ({
  home
}))
class Index extends Component<IndexProps, IndexState> {

  componentDidMount() {

  }
  componentDidShow() {

  }
  render() {
    return (
      <View className='index'>
        <Text>首页</Text>
      </View>
    )
  }
}

export default Index

