import {Component} from 'react';
import {View} from "@tarojs/components";
// import { AtButton } from 'taro-ui';
import { AtAvatar } from 'taro-ui'


class cart_history extends Component{
    render(){
      return (
        
        <View>
          <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
          <View>你好</View>
          
          
          {/* <AtButton type='primary'>按钮文案</AtButton> */}
        </View>
      );
    }
}
