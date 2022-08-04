import {Component} from 'react';
import {View,Text} from "@tarojs/components";
// import { AtButton } from 'taro-ui';
import { AtAvatar } from 'taro-ui';
// import cart_his from '../cart/cart_his';
import { AtList, AtListItem } from "taro-ui"
import "./index.scss";

export default class index extends Component{
    render(){
      return (

        <View>

          <View>
            <View className="info_div">

              <AtAvatar circle image='https://jdc.jd.com/img/200' className="hearder_img"></AtAvatar>
              <Text className="nick_name">请登录...</Text>
            </View>
            <View>
              <AtList>
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
                iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
              />
              <AtListItem
                title='个人信息'
                arrow='right'
                thumb='../../images/me_yes.png'
              />
              </AtList>
            </View>
          </View>
          {/* <cart_his ceshi={ceshi}/> */}

          {/* <AtButton type='primary'>按钮文案</AtButton> */}
        </View>
      );
    }
}
