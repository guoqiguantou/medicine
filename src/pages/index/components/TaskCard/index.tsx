import React, { FC } from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Card from '@/components/Card';
import classnames from 'classnames';
import moment from 'moment';
import './index.less';


//type 1=面试 2=合同开始 3=服务单上工
interface TaskCardProps {
  data
}

/**任务卡片 */
const TaskCard: FC<TaskCardProps> = (props: TaskCardProps) => {
  const data = props.data;
  let item: any = {}
  switch (data.type) {
    case 1: item = data.clueInterviewVo; break;//面试
    case 2: item = data.contractVo; break;//合同
    case 3: item = data.cleanOrderAssignRecordVO; break;//保洁服务单
  }
  function go(keywords) {
    Taro.navigateTo({
      url: `/pages/index/navigation?keywords=${keywords}`,
    });
  }
  const footer = (
    <View className="listItem">
      <Text> {data.type == 2 ? '合同期限' : '注意事项'}:</Text>
      <Text
        className={classnames({
          listText: true,
          listTime: data.type == 2,
        })}
      >
        {{
          1: item?.remark || '暂无',
          2: `${moment(item?.effectTime).format('YYYY.MM.DD')}-${moment(
            item?.expireTime,
          ).format('YYYY.MM.DD')}`,
          3: item?.cleanServiceOrderVO?.notes || '暂无',
        }[data.type]}
      </Text>
    </View>
  );
  let address = data.type == 1 ? item?.address : `${item?.province}${item?.city}${item?.district}${item?.address}`
  let time = data.type == 1 ? (item?.interviewTime || '') : data.type == 3 ? (item?.cleanServiceOrderVO?.serviceTime || '') : '';
  return (
    <Card title={{ 1: '面试', 2: '合同开始', 3: '上工' }[data.type]} footer={footer}>
      {data.type == 2 && (
        <View className="listItem">
          <Text>服务类型:</Text>
          <Text className="listText">{item?.productName}</Text>
        </View>
      )}
      {
        data.type == 3 && <View className="listItem">
          <Text>{item?.cleanServiceOrderVO?.productName}{item?.cleanServiceOrderVO?.productAttrValueName}</Text>
        </View>
      }
      <View className="listItem">
        <Text>客户:</Text>
        <Text className="listText">{data.type == 3 ? item?.cleanServiceOrderVO?.customerName : item?.customerName}</Text>
      </View>
      {data.type !== 2 && (
        <View className="listItem">
          <Text>时间:</Text>
          <Text className="listText">
            {time && moment(time).format('YYYY.MM.DD HH:mm')}
          </Text>
        </View>
      )}
      <View className="listItem">
        <Text>地点:</Text>
        <Text className="listText">{address}</Text>
        <View
          className="listBtn"
          onClick={() => {
            go(address);
          }}
        >
          导航
        </View>
      </View>
    </Card>
  );
};
export default TaskCard;
