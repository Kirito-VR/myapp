import {Component} from 'react';
import {View,Text} from "@tarojs/components";
import { AtTabs, AtTabsPane } from 'taro-ui'
<<<<<<< HEAD
// import cart_his from "./cart_his";
=======
import Cart_his from "./cart_his";

>>>>>>> 7ac6e18df8a9a85908d2b55de55e58dcc40bf4d5

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
<<<<<<< HEAD
    })
=======
    });
    console.log("6666")
>>>>>>> 7ac6e18df8a9a85908d2b55de55e58dcc40bf4d5
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
<<<<<<< HEAD
        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
            <View>1111</View>
        </View>
        <cart_his></cart_his>
        <Text>为什么无法显示</Text>
=======
        <View style='background-color: #FAFBFC;'>
            <View><Cart_his></Cart_his></View>
        </View>
       
>>>>>>> 7ac6e18df8a9a85908d2b55de55e58dcc40bf4d5
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
