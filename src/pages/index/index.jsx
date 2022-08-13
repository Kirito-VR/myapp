import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text ,Checkbox } from '@tarojs/components'
import './index.scss'
import { AtButton,AtGrid } from 'taro-ui'
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
      rotation_chart_images:['01','02','03','04','05']
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillUnmount () { }
  // componentDidMount(){
  //   this.login
  // }
  componentDidShow () { }
  componentDidHide () { }
  //老板推荐函数
  bossRecommend =()=>{
    Taro.navigateTo({
      url:
        '/pages/activity/activity',
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
    return (
      <View className='index' >
        {/*轮播图组件*/}
        <view><MySwiper banner={this.state.rotation_chart_images}></MySwiper></view>
        <view>
          <AtGrid   className='atGrid'  columnNum='2' data={
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
        }onClick ={
            this.handClick.bind(this)
          }
          />
        </view>
        {/*跳转到登录界面*/}
        <view className='loginWechat' style='background-color: grey;width:100%;height:100px;' onClick={this.login.bind()}>
          一键登录 加入会员
        </view>
        {/*跳转页面，跳转到相应的活动界面，跳转到一个组件里*/}
        <view className='activity-area' style='background-color:silver;width:100%;height:130px' onClick={this.bossRecommend.bind()}>
          活动专区
        </view>
      </View>

    )
  }
}
export default Index

