import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { View, Text  } from '@tarojs/components'
import './index.scss'
import {AtGrid,AtAvatar} from "taro-ui"
import MySwiper from '../../components/swiper'
import Taro  from "@tarojs/taro";

@connect(({ counter }) => ({
  counter
}))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      //轮播图图片
      rotation_chart_images:['01','02','03','04','05'],
      avatarUrl:"../../images/me_yes.png",
      nickName:"一键登录",
      userInfo:""
    }
  }

  componentDidMount(){
    Taro.request({
      url:"http://localhost:8090/cart/getCartList",
      header:{
        'content-type': 'application/json',
        'token':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDQwOTQ5MywiY3JlYXRlZCI6MTY2MDM2NjI5Mzg3NCwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.CCPtz__sAV7sb3nTO9E4sX1iA-_xp0b9r2njP2FfPWzrNgUPQuMaBast3ADMm5Y8OOdYmgRx5tzxESM7zpPiFw'
      },
      method: 'GET',
      dataType: 'json',
      success:(res)=>{
        console.log("成功调用");
        console.log(res.data.data);
        Taro.setStorage({
          key:"cart_List",
          data:res.data.data
        })
      },
      fail: function (errMsg) {
        Taro.showToast({
          title: '服务器请求错误',
          icon: 'none',
          duration: 3000
        })
      }
    })
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentDidShow(){
    this.setState({
                userInfo:Taro.getStorageSync("login")
            })
  }
  componentDidHide () { }
  //老板推荐函数
  bossRecommend =()=>{
    Taro.navigateTo({
      url:
        '/pages/user/address/index',
      // ,'/pages/activity/activity',
    })
  }
  //外卖
  handClick =(value) =>{
    console.log(value);
  }
  //定义点击跳转函数
  login = ()=>{
    Taro.navigateTo({
      url:'/pages/user/wxLogin/wxLogin',
    })
  }
  render () {
    const {nickName,avatarUrl,userInfo}=this.state;
    return (
      <View className='index' >
        {/*轮播图组件*/}
        <View><MySwiper banner={this.state.rotation_chart_images}></MySwiper></View>
        <View>
          <AtGrid className="atGrid" columnNum='2' data={
          [
            {
              //网页图片，添加监听函数，实现跳转，url应该是获取的，应定义一个自定义的数组，构造函数，在挂在组件之前就获得数据
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '门店自取',
              key:'1111',
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '外卖送达',
              key:'2222',
            },
          ]
        }
        onClick ={this.handClick.bind(this)}
          />
        </View>

        <View className="loginWechat" >
            <View className="yiban">
                <View className="Avatar">{!userInfo && <AtAvatar circle image={avatarUrl} className="hearder_img"></AtAvatar>}</View>
                <View className="nick">{!userInfo && <Text className="nick_name" onClick={this.login.bind()}>{nickName}</Text>}</View>
            </View>
            <View className="yiban">
                <View className="Avatar">{userInfo && <AtAvatar circle image={userInfo.avatarUrl} className="hearder_img"></AtAvatar>}</View>
                <View className="nick">{userInfo && <Text className="nick_name">{userInfo.nickName}</Text>}</View>
            </View>

        </View>
        {/*跳转页面，跳转到相应的活动界面，跳转到一个组件里*/}
        <View className="activity-area"  onClick={this.bossRecommend.bind()}>
          活动专区
        </View>
      </View>

    )
  }
}
export default Index

