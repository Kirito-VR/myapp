import {Component} from 'react';
import {View,Image,Text} from "@tarojs/components";
import "./index.scss";
import { AtInput, AtForm } from 'taro-ui'

export default class index extends Component{
  constructor (props) {
    super(props)
    this.state = {
      value: '0'
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  
    render(){
      return (
        <View className="wapper">
          <View className="header">
            <AtForm>
            <AtInput
              name='value'
              title='请输入你所需要查询的商品'
              type='text'
              placeholder='请输入你所需要查询的商品'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
            </AtForm>
         
          </View>
        </View>
      );
    }
}
