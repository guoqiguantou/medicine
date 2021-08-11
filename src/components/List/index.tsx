import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import { connect } from 'react-redux';
import { TableModelState } from '../../models/table';
import Empty from '@/components/Empty';
import GoTop from '@/components/GoTop';
import './index.less';

interface ListProps {
  name: string;
  onRef?;
  onChange;
  loading?: boolean;
  table?;
}

@connect(
  ({
    loading,
    table,
  }: {
    loading: { effects: { [key: string]: boolean } };
    table: TableModelState;
  }) => ({
    loading: loading.effects['table/query'],
    table,
  }),
)
export default class List extends Component<ListProps> {
  pageNum: number = 0;
  pageSize: number = 10;


  componentDidMount() {
    this.props.onRef(this);
  }

  changeData = () => {
    const pagination = {
      pageNum: this.pageNum,
      pageSize: this.pageSize,
    };
    return this.props.onChange(pagination);
  };

  //同步pageNum
  handleData = () => {
    let data = this.props.table[this.props.name] || {};
    if (data.init) {
      this.pageNum = 0;
    }
  };

  //下拉刷新
  PullDownRefresh = () => {
    this.pageNum = 0;
    this.changeData().then(() => {
      Taro.stopPullDownRefresh();
    });
  };

  //页面触底加载更多
  ReachBottom = () => {
    this.handleData();
    const { name } = this.props;
    //根据当前条数和总条数，判断是否还有数据需要加载
    if (!this.props.table[name].nodata) {
      this.pageNum++;
      this.changeData();
    }
  };

  render() {
    const { name, table } = this.props;
    const tableData = table[name] || {};
    const nodata = tableData?.nodata || false;
    const data = tableData?.data || [];
    return (
      <ScrollView onScrollToLower={this.ReachBottom} className="ScrollView" scrollY>
        <View className="list">
          <View className="list-body">
            {this.props.children}
            {data.length == 0 && <Empty />}
          </View>
          <View className="list-more">
            {data.length !== 0 && nodata && (
              <Text className="list-more-txt">数据加载完成</Text>
            )}
          </View>
        </View>
        {/* <GoTop goTop={this.goTop} /> */}
      </ScrollView>
    );
  }
}
