import Taro from '@tarojs/taro'
import {Component} from 'react'
import { View, Text } from '@tarojs/components'
// import classNames from 'classnames'
import './index.scss'
import {getCurrentInstance} from "@tarojs/taro";
import { Swiper, SwiperItem, Image } from '@tarojs/components';

export default class index extends Component{

constructor (props) {
    super(props)
    this.state = {
        value: '',
        goodInfo:JSON.parse(getCurrentInstance().router.params.data)
    }
    }

    componentDidMount(){
      console.log("123",this.state.goodInfo)

    }
  render(){
    return(
      <View>
       <img className="headerImg" src={this.state.goodInfo.gallery} alt=""></img>
      </View>
    )
  }
}
