import {Component} from 'react';
import {View,Text} from "@tarojs/components";
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cart_his from "./cart_his";


export default class index extends Component{
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    });
    console.log("6666")
  }

  render () {
    const tabList = [{ title: '进行中' }, { title: '历史' }, { title: '退单' }]
    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
      <AtTabsPane current={this.state.current} index={0} >
        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
          订单进行中
        </View>
      </AtTabsPane>
      <AtTabsPane current={this.state.current} index={1}>
        <View style='background-color: #FAFBFC;'>
            <View><Cart_his></Cart_his></View>
        </View>
       
      </AtTabsPane>
      <AtTabsPane current={this.state.current} index={2}>
        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
          tuid
        </View>
      </AtTabsPane>
    </AtTabs>

    )
  }
}
