import {Component} from 'react';
import {View,Text,Button} from "@tarojs/components";
import { AtList, AtListItem,AtGrid,AtAvatar} from "taro-ui"
import "./index.scss";
// @ts-ignore
import Taro, { getOpenUserInfo, getUserInfo, login } from '@tarojs/taro'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction} from "taro-ui"

export default class WxLogin extends Component{
  constructor(props){
    super(props)
    this.state={
      avatarUrl:"../../images/me_yes.png",
      nickName:"未登录",
      userInfo:""
    }
  }
  componentDidMount(){
    // Taro.getSetting({}).then(res=>{
    //     if(!res.authSetting['scope.userInfo']){
    //         Taro.navigateTo({
    //             url:'wxLogin/wxLogin'
    //         })
    //     }if(res.authSetting['scope.userInfo']===true){
    //         const userInfo=Taro.getStorageSync("login")
    //         // this.setState({
    //         //     nameShow:true
    //         // })
    //     }
    // })
    // const userInfo=Taro.getStorageSync("login")
    // if(!userInfo){
    //     Taro.navigateTo({
    //         url:'wxLogin/wxLogin'
    //     })
    // }else{
    //     const userInfo=Taro.getStorageSync("login")
    // }
  }
  componentDidShow(){
    this.setState({
                userInfo:Taro.getStorageSync("login")
            })
  }
  handleopenModal=()=>{
    Taro.navigateTo({
        url:'wxLogin/wxLogin'
    })
    // const userInfo=Taro.getStorageSync("login")
    // if(!userInfo){
    //     Taro.navigateTo({
    //         url:'wxLogin/wxLogin'
    //     })
    //     this.setState({
    //     userInfo:Taro.getStorageSync("login")
    //     })
    // }else{
    //     this.setState({
    //         userInfo:Taro.getStorageSync("login")
    //     })
    // } 
  }

    render(){
      // @ts-ignore
      const {nickName,avatarUrl,userInfo}=this.state;
      console.log("用户信息",userInfo)
      // @ts-ignore
      return (
          <View>
            <View className="info_div" >
              {!userInfo && <AtAvatar circle image={avatarUrl} className="hearder_img"></AtAvatar>}
              {!userInfo && <Text className="nick_name" onClick={this.handleopenModal}>{nickName}</Text>}
              {userInfo && <AtAvatar circle image={userInfo.avatarUrl} className="hearder_img"></AtAvatar>}
              {userInfo && <Text className="nick_name">{userInfo.nickName}</Text>}
            </View>
            {/* <AtModal isOpened={openModal}>
              <AtModalHeader>授权</AtModalHeader>
              <AtModalContent>
                将获取你的昵称，头像
              </AtModalContent>
              <AtModalAction> <Button onClick={this.closeModal}>取消</Button> <Button  onClick={this.onlogin.bind(this)} >确定</Button> </AtModalAction>
            </AtModal> */}
            <View>
              <AtList>
                <AtListItem
                  title='标题文字'
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
            <View>
            <AtGrid mode='rect' hasBorder={false} data={
                [
                    {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '收藏商品'
                    },
                    {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '购物车'
                    },
                    {
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '收货地址'
                    },
                    {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                    value: '联系客服'
                    },
                ]
            } />
            </View>
          </View>
      );
    }
}
