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
  componentDidMount(){
    
  }
  onlogin(){
    Taro.login({
        success: function (res) {
            if (res.code) {
              //发起网络请求
              console.log("code",res.code)
              Taro.request({
                url: 'http://localhost:8090/api/onLogin',
                // method:'POST',
                data: {
                  code: res.code
                },
                header: { 
                    "Content-Type": "application/x-www-form-urlencoded", //POST方式是这个
                    "token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDI0NDcwNCwiY3JlYXRlZCI6MTY2MDIwMTUwNDkxNywiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.5fXbbj7KUF5hSJkdhU_AKQTfilCJpBhImKUKwd8rnQpe-9MrHx-iva1gvJYtKo7KTOcA_j88ubQ76bkd0hHhlw"
                },
                success: res => {
                    console.log(res);
                    console.log("openid",res.data.openid)
                    console.log("session_key",res.data.session_key)
                    res.data.openid = res.data.data;
                    Taro.setStorageSync('openid',res.data.openid)
                    Taro.setStorageSync('session_key',res.data.session_key)
                    // this.globalData.openid = res.data.openid;
                    // console.log(this.globalData.openid);
                  }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
    })
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
            }).catch(error=>{
                console.log(error);
            })
          }
    }).catch(error=>{
      console.log(error);
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