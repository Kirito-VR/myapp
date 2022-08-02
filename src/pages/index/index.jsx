import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'
import { AtButton } from 'taro-ui'
import MySwiper from '../../components/swiper'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='index'>
        <view><MySwiper></MySwiper></view>
        <view>2222</view>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, 66666666</Text></View>
        <View><AtButton>登录</AtButton></View>
      </View>
    )
  }
}

export default Index

