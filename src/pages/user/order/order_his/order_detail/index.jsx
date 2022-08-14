import { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Label, Radio } from '@tarojs/components';

import './index.scss';

export default class Order_detail extends Component {
    constructor() {
        console.log("拿到传过来的订单Id：", Taro.getCurrentInstance().router.params.id);
        super(...arguments)
        this.state = {
            current: 0,
            showOrderDetail: [],
            orderId: Taro.getCurrentInstance().router.params.id,
            user_name: Taro.getCurrentInstance().router.params.consignee,
            user_address: Taro.getCurrentInstance().router.params.address,
            user_mobile: Taro.getCurrentInstance().router.params.mobile,
        }
    }
    render() {
        return (
            <View className='OrderDetail'>
                <View className='topView'>
                    <Text style="font-size:25px;">
                        订单未支付{'\n'}
                    </Text>
                    <Text style="font-size:15px;">
                        感谢你对土特产专卖店的信任，期待再次光临{'\n'}
                    </Text>
                    <button className="btnOtherList" onClick="otherList" >
                        再来一单
                    </button>
                </View>

                <View className='shopName'>商店名称：南宁土特产专卖店</View>

                {/* 订单详情 */}
                <table className='order_info_table'>
                    <View className='order_info'>
                        <View className='goods_img'>
                            <img width='100px' height='100px' src={require("../../../../../images/iceKingLemoTea.png")} alt="" />
                        </View>
                        <View className='goodsName'>商品名称:<Text style='float:right;margin-right:15px;'>芥菜瘦肉粥</Text></View>
                        <View className='goodsPrice'>商品价格：<Text style='float:right;margin-right:15px;'>￥8.88</Text></View>
                        <View className='goodsPrice'>商品数量：<Text style='float:right;margin-right:15px;'>1件</Text></View>
                        <View className='goodsPrice'>总价：<Text style='float:right;margin-right:15px;'>￥8.88</Text></View>
                    </View>
                </table>
                {/* 配送信息 */}
                <table className='order_shipping_news_table'>
                    <View className='order_shipping_news'>
                        <View className='OrderId'>订单编号：<Text style='float:right;margin-right:15px;'>{this.state.orderId}</Text></View>
                        <View>期望时间：<Text style='float:right;margin-right:15px;'>立即配送</Text></View>
                        <View>收货人：<Text style='float:right;margin-right:15px;'>{this.state.user_name}</Text></View>
                        <View>收货地址：<Text style='float:right;margin-right:15px;'>{this.state.user_address}</Text></View>
                        <View>联系电话：<Text style='float:right;margin-right:15px;'>{this.state.user_mobile}</Text></View>
                        <View>配送服务：<Text style='float:right;margin-right:15px;'>无接触安心送 | 商家配送</Text></View>
                    </View>
                </table>
                
                {/* 订单信息 */}
                <View className='order_news'>
                    {/* 这里给/pages/user/user/order/order_info写 */}
                </View>
            </View>
        )
    }
}