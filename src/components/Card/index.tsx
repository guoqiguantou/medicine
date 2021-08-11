import React, { FC, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import classnames from 'classnames'
import './index.less'

interface CardProps {
  title?: string,//标题
  required?: boolean,//必填
  height?: number,//查看更多
  footer?,
  children?,
  right?: boolean,
  isAll?: boolean, // 是否全选
  selectAll?: () => void, // 全选触发回调
}

export interface RightProps {
  boxStyle?: React.CSSProperties,
  text?: string,
  iconName?: string,
  iconStyle?: React.CSSProperties,
  textStyle?: React.CSSProperties,
}

/**卡片组件 */
const Card: FC<CardProps> = (props: CardProps) => {
  let [more, setMore] = useState(false)
  return (
    <View className='card'>
      {
        props.title &&
        <View className='cardTopBox'>
          <View className='cardTop'>{props.title} {props.required && <Text className="required">(必填)</Text>}</View>
          {
            props.right && <View style={{ color: props.isAll ? '#F2544E' : '#999999' }} onClick={props.selectAll}>
              <Text className={`iconfont iconxuanzeyixuan`}></Text>
              <Text className="text">全选</Text>
            </View>
          }
        </View>
      }
      <View className='cardBody' style={{ 'marginTop': props.title ? '15px' : '0px' }}>
        <View className={classnames({
          heightAuto: more,
          cardView: true
        })} style={{ height: props.height + 'px' || 'auto' }}>
          {props.children}
        </View>
        {props.height && <View className="cardMore" onClick={() => { setMore(!more) }}>{more ? '收起更多' : '展开更多'}<AtIcon size={18} value={more ? 'chevron-up' : 'chevron-down'} className='icon' /></View>}
      </View>
      {props.footer && <View className='cardFooter'>{props.footer}</View>}
    </View>

  )
}
export default Card
