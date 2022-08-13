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
        goodInfo:{},
        goodShow:false
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
  render(){
    const show = this.state.goodShow
    return(
      <View>
        {
          show?
          <img className="headerImg" src={this.state.goodInfo.gallery} alt=""></img>
          :
          <View>内容无法加载</View>
        }
       
      </View>
    )
  }
}
