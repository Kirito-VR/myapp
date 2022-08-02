import {Component} from 'react';
import {View} from "@tarojs/components";
// import { AtButton } from 'taro-ui';
import { AtAvatar } from 'taro-ui'


export default class index extends Component{
    render(){
      return (
        
        <View>
          <AtAvatar></AtAvatar>
          <View>你好</View>
          
          <button>登陆</button>
          {/* <AtButton type='primary'>按钮文案</AtButton> */}
        </View>
      );
    }
}
