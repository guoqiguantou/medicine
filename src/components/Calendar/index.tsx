import React, { Component } from 'react'
import { View, Text, Picker } from '@tarojs/components'
import classnames from 'classnames'
import moment from 'moment'
import './index.less'

const week = ['一', '二', '三', '四', '五', '六', '日']
const format: moment.MomentFormatSpecification = ["YYYY-MM-DD", "YYYY/MM/DD"]
interface CalendarState {
  year: number,
  month: number,
  pday: number[],
  cday: number[],
  nday: number[],
  marksDay: number[],
  activeDay: moment.Moment
}
interface DayClickFunc {
  (value: string): void;
}
interface CalendaProps {
  currentDate?: string,//设置当前时间
  marks?: string[],//标记时间
  onDayClick?: DayClickFunc,//点击日期事件
  onChangeMonth?,
  onRef?
}

/**日历组件*/
class Index extends Component<CalendaProps, CalendarState> {
  constructor(props) {
    super(props)
    let date = props.currentDate ? moment(props.currentDate, format) : moment(new Date());
    this.state = {
      year: date.year(),
      month: date.month() + 1,
      pday: [],
      cday: [],
      nday: [],
      marksDay: [],
      activeDay: date
    }
  }
  componentDidMount() {
    this.props.onRef && this.props.onRef(this)
    this.initData();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.marks) {
      this.initMark(nextProps);
    }
  }
  initData = () => {
    let { year, month } = this.state;
    //获取上个月天数
    let pdayc = month === 1 ? new Date(year - 1, 12, 0) : new Date(year, month - 1, 0);

    //获取最后一天是星期几
    let pdays = new Array(pdayc.getDay()).fill(1);
    let pday = pdays.map((item, index) => pdayc.getDate() - index).sort((a, b) => a - b)

    //获取这个月一共有多少天
    let cdayc = new Date(year, month, 0)
    let cdays = new Array(cdayc.getDate()).fill(1);
    let cday = cdays.map((item, index) => cdayc.getDate() - index).sort((a, b) => a - b)

    //获取下个月第一天星期几 部分机型不支持getDay()写法
    let nd = month === 12 ? moment(`${year + 1}-1-1`, 'YYYY-MM-DD').day() : moment(`${year}-${month + 1}-1`, 'YYYY-MM-DD').day();
    let ndays = new Array(8 - nd).fill(1);
    let nday = ndays.map((item, index) => ++index)
    this.setState({
      pday,
      cday,
      nday
    })
    this.initMark();
  }
  initMark = (nextProps?) => {
    let { year, month } = this.state;
    let { marks = [] } = nextProps || this.props;
    let marksFilter: number[] = marks.filter(item => {
      const date = moment(item, format);
      let markY: number = date.year();
      let markM: number = date.month() + 1;
      return (markM === month) && (markY === year)
    }).map(item => {
      return moment(item, format).date();
    })
    this.setState({
      marksDay: marksFilter
    })
  }
  nextfunc = () => {
    let { year, month } = this.state;
    if (month >= 12) {
      this.setState({
        month: 1,
        year: ++year
      }, () => {
        this.initData()
        this.props.onChangeMonth && this.props.onChangeMonth({ year: this.state.year, month: this.state.month })
      })
    } else {
      this.setState({
        month: ++month
      }, () => {
        this.initData();
        this.props.onChangeMonth && this.props.onChangeMonth({ year: this.state.year, month: this.state.month })
      })
    }

  }
  prevfunc = () => {
    let { year, month } = this.state;
    if (month <= 1) {
      this.setState({
        month: 12,
        year: --year
      }, () => {
        this.initData()
        this.props.onChangeMonth && this.props.onChangeMonth({ year: this.state.year, month: this.state.month })
      })
    } else {
      this.setState({
        month: --month
      }, () => {
        this.initData();
        this.props.onChangeMonth && this.props.onChangeMonth({ year: this.state.year, month: this.state.month })
      })
    }
  }
  yearOrMonthChange = (event) => {
    let date = moment(event.detail.value);
    this.setState({
      year: date.year(),
      month: date.month() + 1
    }, () => {
      this.initData();
      this.props.onChangeMonth && this.props.onChangeMonth({ year: this.state.year, month: this.state.month })
    })
  }
  gotoCurrentDay = () => {
    let date = new Date();
    this.setState({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      activeDay: moment(date)
    }, () => {
      this.initData();
      this.props.onDayClick && this.props.onDayClick(this.state.activeDay.format('YYYY-MM-DD'))
    })
  }
  onDayClick = (day: number) => {
    this.setState({
      activeDay: moment(`${this.state.year}-${this.state.month}-${day}`, format)
    }, () => {
      this.props.onDayClick && this.props.onDayClick(this.state.activeDay.format('YYYY-MM-DD'))
    })
  }
  render() {
    let { year, month, pday, cday, nday, marksDay, activeDay } = this.state;
    return (
      <View className="calendar">
        <View className="calendarTop">
          <View className="calendarTopBtn" onClick={this.prevfunc}>上个月</View>
          <View className="calendarToptext">
            <Picker mode='date' onChange={this.yearOrMonthChange} fields="month" value={`${this.state.year}-${this.state.month}-1`}>
              <Text className="text">{year}年{month}月</Text>
            </Picker>
          </View>
          <View className="calendarTopBtn" onClick={this.nextfunc}>下个月</View>
        </View>
        <View className="calendarWeek">
          {
            week.map((item, index) => <View key={index} className="calendarWeekItem">{item}</View>)
          }
        </View>
        <View className="calendarDay">
          {
            pday && pday.map((item, index) => <View key={index} onClick={this.prevfunc} className="view"><View className="pday">{item}</View></View>)
          }
          {
            cday && cday.map((item, index) => (<View key={index} className="view"> <View className={classnames({
              "item": true,
              "marksDay": marksDay.indexOf(item) > -1,//标记样式
              "currentDay": moment().isSame(moment(`${year}-${month}-${item}`, format), 'day'),//当前时间样式
              "activeDay": activeDay.isSame(moment(`${year}-${month}-${item}`, format), 'day'),//选择时间样式
            })} onClick={() => { this.onDayClick(item) }}>{moment().isSame(moment(`${year}-${month}-${item}`, format), 'day') ? <Text className="cday">今天</Text> : <Text>{item}</Text>}</View></View>))
          }
          {
            nday && nday.map((item, index) => <View key={index} onClick={this.nextfunc} className="view"><View className="nday">{item}</View></View>)
          }
        </View>
      </View>
    )
  }
}
export default Index

