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

  onlogin= async()=>{
    var res= await (Taro.getSetting({}).then(res=>{
        console.log(res)
        if(!res.authSetting['scope.userInfo']){
            // 提示授权
            // console.log("授权")
        }
        if(res.authSetting['scope.userInfo']===true){
            Taro.getUserProfile({
              desc: this.login()
            }).then(res=>{
                console.log("用户信息：",res)
                this.setState({
                    avatarUrl:res.userInfo.avatarUrl,
                    nickName:res.userInfo.nickName,
                    nameShow:true
                })
                Taro.setStorage({
                    key:"login",
                    data:res.userInfo
                })
                console.log("31654",Taro.getStorageSync("loginstatus"))
                if(Taro.getStorageSync("loginstatus")===1){
                  Taro.request({
                    url: 'http://localhost:8090/api/registerUser',
                    method:'POST',
                    data: {
                        gender:res.userInfo.gender,
                        userLevel:0,
                        nickname:res.userInfo.nickName,
                        avatar:res.userInfo.avatarUrl,
                        wechatOpenid:Taro.getStorageSync("openid"),
                        status:0,
                        deleted:0
                    },
                    header: { 
                        'content-type': 'application/json', //POST方式是这个
                        "token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDQxNTY1NiwiY3JlYXRlZCI6MTY2MDM3MjQ1NjcwNiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.84hO1qfqIgvv_r13ASez83AjrMqDDU7CrBGzFzyVRvu8hWokXxaN_nQQWuzF9Ao14dFeX5ILibpdk20QLx1Hog"
                    },
                    success: (res) => {
                        console.log("用户数据发送后台",res);
                      }   
                  })
                }
                Taro.reLaunch({
                    url: '/pages/user/index',
                  })
            }).catch(error=>{
                console.log(error);
            })
          }
    }).catch(error=>{
      console.log(error);
    })
  )}

  login=()=>{
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
                  "token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDQxNTY1NiwiY3JlYXRlZCI6MTY2MDM3MjQ1NjcwNiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.84hO1qfqIgvv_r13ASez83AjrMqDDU7CrBGzFzyVRvu8hWokXxaN_nQQWuzF9Ao14dFeX5ILibpdk20QLx1Hog"
              },
              success: (res) => {
                  console.log(res);
                  console.log("openid",res.data.openid)
                  console.log("session_key",res.data.session_key)
                  Taro.setStorage({
                    key:'openid',
                    data: res.data.openid
                  })
                  Taro.setStorage({
                    key:'session_key',
                    data: res.data.session_key
                  })
                  // console.log("openid:",Taro.getStorageSync("openid"))
                  // console.log("session_key:",Taro.getStorageSync("session_key"))
                }   
            }).then(res=>Taro.request({
              url: 'http://localhost:8090/api/findUser',
            data: {
              openid: Taro.getStorageSync("openid")
            },
            // method:'POST',
            header: { 
              "Content-Type": "application/x-www-form-urlencoded", //POST方式是这个
              "token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDQxNTY1NiwiY3JlYXRlZCI6MTY2MDM3MjQ1NjcwNiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.84hO1qfqIgvv_r13ASez83AjrMqDDU7CrBGzFzyVRvu8hWokXxaN_nQQWuzF9Ao14dFeX5ILibpdk20QLx1Hog"
              },
              success:(res)=>{
                console.log(res.data.data)
                Taro.setStorage({       
                    key:"loginstatus",
                    data:res.data.data,               
                })
              }
            }))
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
    })
    return '完善会员资料'
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