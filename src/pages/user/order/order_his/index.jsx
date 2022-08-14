import { Component } from 'react';
import { View, Text } from "@tarojs/components";
import './index.scss'
import { render } from 'less';
import Taro from "@tarojs/taro";
import { AtButton } from 'taro-ui';

export default class Order_his extends Component {
    static defaultProps = {
        list: [
            { id: 1, date: "2022/08/3", order_tradeMoney: "300" },
            { id: 2, date: "2022/08/3", order_tradeMoney: "222" },
            { id: 3, date: "2022/08/3", order_tradeMoney: "333" },
            { id: 4, date: "2022/08/3", order_tradeMoney: "444" },
            { id: 5, date: "2022/08/3", order_tradeMoney: "555" },
            { id: 6, date: "2022/08/3", order_tradeMoney: "666" },
            { id: 7, date: "2022/08/3", order_tradeMoney: "777" },
        ]
    }

    componentDidMount() {}

    showOrderInfo=(id)=> {
        console.log("拿到需要查询orderInfo的id" + id);
        Taro.navigateTo({
          url: `/pages/user/order/order_his/order_info/index?id=${id}`
        });
      }


    render() {
        const list = this.props.list;
        return (
            <View className="order_hist">
                {list.map((item) => {
                    return (
                        <View className="order_list">
                            <View className="tradeHeader">订单编号：{item.id} <Text>订单时间：{item.date}</Text></View>
                            <View>这里写订单部分信息</View>
                            <View class="Money">金额：{item.order_tradeMoney}</View>
                            <View class="OrderInfo">
                                <button class="btnOrderInfo" onClick={(e) => { e.stopPropagation(); this.showOrderInfo(item.id) }}>订单详情</button>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}


