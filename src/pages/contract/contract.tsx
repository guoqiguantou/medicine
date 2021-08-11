import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import './contract.less'


interface ContractProps {
  counter,
  dispatch
}

interface ContractState {
  current: number
}


/**合同页面 */
@connect(({ counter, dispatch }) => ({
  counter,
  dispatch
}))
export default class Contract extends Component<ContractProps, ContractState> {

  render() {
    return (
      <View className='contract ListPage'>
        <Text>合同</Text>
      </View>
    )
  }
}
