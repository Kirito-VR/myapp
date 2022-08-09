import {Component} from 'react';
import {View,Text,Button,Image} from "@tarojs/components";
import './wxLogin.scss'
import Taro, { getOpenUserInfo, getUserInfo, login } from '@tarojs/taro'

class WxLogin extends Component{
  constructor(props){
    super(props)
    this.state={
      openid:'',
      nameShow:false
    }
  }
  onlogin(){
    Taro.getSetting({}).then(res=>{
        console.log(res)
        if(!res.authSetting['scope.userInfo']){
            // 提示授权
            // console.log("授权")
        }
        if(res.authSetting['scope.userInfo']===true){
            Taro.getUserProfile({
              desc:"获取你的头像，昵称"
            }).then(res=>{
                console.log("用户信息：",res)
                this.setState({
                    avatarUrl:res.userInfo.avatarUrl,
                    nickName:res.userInfo.nickName,
                    nameShow:true
                })
                Taro.setStorage({
                    key:"login",
                    data:res.userInfo,
                })
                Taro.switchTab({
                    url: '/pages/user/index',
                  })
                // console.log(res.userInfo.nickName)
                Taro.login({
                    success: function (res) {
                        if (res.code) {
                          //发起网络请求
                          console.log("code",res.code)
                        //   Taro.request({
                        //     url: 'https://test.com/onLogin',
                        //     data: {
                        //       code: res.code
                        //     }
                        //   })
                        } else {
                          console.log('登录失败！' + res.errMsg)
                        }
                      }
                })
            }).catch(error=>{
                console.log(error);
            })
          }
    }).catch(error=>{
      console.log(error);
    })
    this.setState({
        openModal:false,
        nameShow:true,
      })
  }

  closeModal=()=>{
    Taro.navigateTo({
        url:'/pages/user/index'
    })
  }

  render(){
    return (
       <View>
           <view>
             <view className='header'>
               <Image src={'../../../images/me_yes.png'}></Image>
             </view>
             <view className='wx-content'>
               <view>申请获取以下权限</view>
               <Text>获得你的公开信息(昵称，头像等)</Text>
             </view>
             {/*微信提供的回调是bindgetuserinfo，但是Taro将bind事件都封装成了on事件*/}
             <Button className='bottom' type='primary'onClick={this.onlogin.bind(this)}>授权登录</Button>
           </view>
       </View>
    );
  }
}

export default WxLogin