import React, { FC, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from "@tarojs/taro"
import { AtIcon } from 'taro-ui'
import classnames from 'classnames'
import './index.less'

interface NavBarProps {
  titleStyle?: React.CSSProperties,
  propBarStyle?: React.CSSProperties,
  title: string,
  noBg?: boolean,
  children?
}

/**导航组件 */
const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
  let [statusBarHeight, setStatusBarHeight] = useState(0)
  var curpages: number = Taro.getCurrentPages().length;//获取当前页面路由层级 判断是否可以返回

  useEffect(() => {
    Taro.getSystemInfo({}).then(res => {
      setStatusBarHeight(res.statusBarHeight)
    })
  }, [])

  const style = {
    paddingTop: statusBarHeight + 'px',
    ...props.propBarStyle,
  }

  function goBack() {
    Taro.navigateBack();
  }

  return (
    <View
      className={classnames({
        navbar: true,
        noBg: props.noBg
      })}
      style={style}
    >
      <View className="navbarCon">
        {(curpages > 1) &&
          <View className="navIcon" onClick={goBack}>
            <AtIcon value='chevron-left' size='20' color={props.noBg ? (props.titleStyle?.color || '#000') : '#fff'} />
          </View>}
        <Text className="navTitle" style={{ ...props.titleStyle }}>{props.title}</Text>
      </View>
      <View>
        {props.children}
      </View>
    </View>
  )
}
export default NavBar
