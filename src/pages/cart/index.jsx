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
    
  }

  tradeClick(value){
    console.log("value")
  }

  render () {

    return (
      <View>
        <Text>购物车</Text>
        <button onClick={this.tradeClick.bind(this)}>结算</button>
      </View>

    )
  }
}
