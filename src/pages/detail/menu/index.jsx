import Taro from '@tarojs/taro'
import {Component} from 'react'
import { View, Text,Button ,Input} from '@tarojs/components'
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
        Opened:false,
        cart_info_count:1
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

    add(){


      this.setState({
        cart_info_count:this.state.cart_info_count+1
      })
    }

    minus(){
      this.setState({
        cart_info_count:this.state.cart_info_count-1
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
// 加入购物车缓存
    createdOrder(){
        var list = Taro.getStorageSync("cart_List");
      // console.log(list[0]);
      var obj = list[0];
      obj.cart_number = this.state.cart_info_count;
      obj.goods_name = this.state.goodInfo.goods_name;
      obj.goods_sn = this.state.goodInfo.goods_sn;
      obj.price = this.state.goodInfo.retail_price;
      obj.goods_id = this.state.goodInfo.id;
      // obj.product_id = this.state.goodInfo.product_id;


      console.log(obj);
      list.push(obj)




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
              <view className="title_Header">
                <Text>{this.state.goodInfo.goods_name}</Text>
                <View><Text className={"price_Style"}>单价：{this.state.goodInfo.retail_price}{this.state.goodInfo.unit}</Text></View>
              </view>
              <View className={"decribe_content"}>{this.state.goodInfo.brief}</View>
              <View className="insertCart" onClick={this.show_creadOrder.bind(this)}>加入购物车</View>
            </View>
          :
          <View>内容无法加载</View>
        }
        {
            Opened?
            <View className="cart_select">
                <View>{this.state.goodInfo.brief}</View>
                <View>
                  <img className={"cart_img"} src={this.state.goodInfo.gallery}/>

                </View>

                  <view className="pnum">
                      <view className="num num-a" onClick={this.minus.bind(this)} >
                        <text>-</text>
                      </view>
                      <text className="num-text">{this.state.cart_info_count}</text>
                      <view className="num num-b" onClick={this.add.bind(this)}>
                        <text>+</text>
                      </view>
                  </view>
                <View>
                  <Button className="Button_style" onClick={this.createdOrder.bind(this)}>确认</Button>
                  <Button className="Button_style" onClick={this.closeCreateOrder.bind(this)}>取消</Button>
                </View>


            </View>
            :
            <View></View>
        }
      </View>
    )
  }
}
