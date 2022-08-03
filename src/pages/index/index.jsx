import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import './index.scss'
import { AtButton } from 'taro-ui'
import MySwiper from '../../components/swiper'


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

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/*轮播图组件*/}
        <view><MySwiper banner={this.state.rotation_chart_images}></MySwiper></view>
        <view>2222</view>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, 66666666</Text></View>
        <View><AtButton>登录</AtButton></View>
      </View>
    )
  }
}

export default Index

