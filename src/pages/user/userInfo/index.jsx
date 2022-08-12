import React,{ Component } from 'react'
import { View, Text ,Button} from '@tarojs/components'
// import classNames from 'classnames'
import { AtInput, AtForm } from 'taro-ui'
import './index.scss'

export default class UserInfo extends Component{


  constructor () {
    super(...arguments)
    this.state = {
      value:"",
      userInfo:{
        username:"",
        password:""
      },
      title:""
      

    }
  }
  handleChange1 (value) {
    console.log(value);
    this.setState({
      userInfo:{
        username: value
      }
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  handleChange2 (value) {
    console.log(value);
    this.setState({
        userInfo:{
            password: value
          }
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }


  render(){
    return(
      <View>
          <View>{this.state.userInfo.password}</View>
          <Text>密码：</Text>
          <input className="156165" placeholder='请输入密码'></input>
          
        <Button>取消</Button> <Button>确定</Button>
      </View>
    )
  }
}
