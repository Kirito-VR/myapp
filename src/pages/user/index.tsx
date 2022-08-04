import {Component} from 'react';
import {View,Text,Button} from "@tarojs/components";
import { AtList, AtListItem,AtGrid,AtAvatar,AtButton} from "taro-ui"
import "./index.scss";
import Taro, { getOpenUserInfo, getUserInfo, login } from '@tarojs/taro'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction} from "taro-ui"

export default class index extends Component{

  constructor(props){
    super(props)
    this.state={
      openModal:false,
      avatarUrl:"",
      nickName:""
    }
  }
  wxlogin(){
    Taro.getSetting({}).then(res=>{
        console.log(res)
        if(res.authSetting['scope.userInfo']===false){
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
                    nickName:res.userInfo.nickName
                })
                console.log(res.userInfo.nickName)
            }).catch(error=>{
                console.log(error);
            })
          }
    }).catch(error=>{
      console.log(error);
    })
    this.setState({
        openModal:false


      })
  }
  handleopenModal=()=>{
    this.setState({
      openModal:true
    })
  }
  closeModal=()=>{
    this.setState({
      openModal:false
    })
  }

    render(){
      const imgsrc='https://jdc.jd.com/img/200';
      const {openModal,nickName,avatarUrl}=this.state
      return (
          <View>
            <View className="info_div">
              <AtAvatar circle image={avatarUrl} className="hearder_img"></AtAvatar>
              <Text className="nick_name" onClick={this.handleopenModal}>请登录...</Text>
              {nickName}
            </View>
            <AtModal isOpened={openModal}>
              <AtModalHeader>授权</AtModalHeader>
              <AtModalContent>
                将获取你的昵称，头像
              </AtModalContent>
              <AtModalAction> <Button onClick={this.closeModal}>取消</Button> <Button  onClick={this.wxlogin.bind(this)} >确定</Button> </AtModalAction>
            </AtModal>
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
