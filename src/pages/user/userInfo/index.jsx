import React,{ Component } from 'react'
import { View, Text } from '@tarojs/components'
// import classNames from 'classnames'
import { AtInput, AtForm } from 'taro-ui'
import './index.scss'

export default class UserInfo extends Component{


  constructor () {
    super(...arguments)
    this.state = {
      value:"",

        username:"liwei",
        password:"lw1234"



    }
  }
  handleChange1 (value) {
    console.log(value);
    this.setState({
        username: value,


    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  handleChange2 (value) {
    console.log(value);
    this.setState({
      password: value


    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }


  render(){
    return(
      <View>
          <View>{this.state.password}</View>
          {/* <input className="156165" placeholder='请输入密码'></input> */}
        <AtInput
          name='value1'
          title='用户名'
          type='text'
          placeholder={'请输入用户名'}
          value={this.state.username}
          onChange={this.handleChange1.bind(this)}
            />
        <AtInput
          name='value1'
          title='密码'
          type='text'
          placeholder='请输入密码'
          value={this.state.password}
          onChange={this.handleChange2.bind(this)}
        />





      </View>
    )
  }
}
