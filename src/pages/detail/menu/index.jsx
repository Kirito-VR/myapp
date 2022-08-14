import Taro from '@tarojs/taro'
import {Component} from 'react'
import { View, Text,Button } from '@tarojs/components'
// import classNames from 'classnames'
import './index.scss'
import {AtModal, AtModalHeader, AtModalContent, AtModalAction} from "@tarojs/taro";
import { Swiper, SwiperItem, Image } from '@tarojs/components';

export default class index extends Component{

constructor (props) {
    super(props)
    this.state = {
        value: '',
        goodInfo:{},
        goodShow:false,
        Opened:false
    }
}

    componentDidMount(){
      Taro.getStorage({
        key:"GoodInfotemp",
        success:(res)=>{
          console.log("123",res.data)
          this.setState({
            goodInfo:res.data,
            goodShow:true
          },()=>{console.log(this.state.goodShow)})
        }
      })


    }

    show_creadOrder=()=>{
        console.log("打开样式选择界面");
        this.setState({
          Opened:true
        })
    }
    closeCreateOrder=()=>{
        this.setState({Opened:false})
    }

  render(){
    const show = this.state.goodShow;
    const Opened = this.state.Opened
    return(
      <View className="content">
        {
          show?
            <View>
              <img className="headerImg" src={this.state.goodInfo.gallery} alt=""></img>
              <view className="title_Header"><Text>{this.state.goodInfo.goods_name}</Text></view>
              <View>{this.state.goodInfo.brief}</View>                
              <View className="insertCart" onClick={this.show_creadOrder.bind(this)}>加入购物车</View>
            </View>
          :
          <View>内容无法加载</View>
        }
        {
            Opened?
            <View className="cart_select">
                <View>{this.state.goodInfo.brief}</View>
                <Button onClick={this.closeCreateOrder.bind(this)}>取消</Button>
                <Button >确认</Button>
            </View>
            :
            <View></View>
        }
      </View>
    )
  }
}
