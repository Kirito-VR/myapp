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

    return (
      <View>
        <Text>购物车</Text>
      </View>

    )
  }
}
