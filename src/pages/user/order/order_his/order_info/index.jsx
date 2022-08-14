import React, { Component } from 'react'
import Taro from "@tarojs/taro";
import { View, Text } from '@tarojs/components'
// import { render } from "react-dom";

import './index.scss'

export default class Order_info extends Component {

    constructor() {
        console.log("拿到路由传过来的id" + Taro.getCurrentInstance().router.params.id);
        super(...arguments)
        this.state = {
            current: 0,
            showOrderInfo: [],
            orderId: Taro.getCurrentInstance().router.params.id,
        }
    }

    componentDidMount() {
        let orderId = this.state.orderId;
        Taro.request({
            url: 'http://localhost:8090/orderinfo/getOrderInfoList',
            data: {
                id: this.state.orderId
            },
            header: {
                'content-type': 'application/json',
                // 'token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY1OTU2MjkyMSwiY3JlYXRlZCI6MTY1OTUxOTcyMTIyMSwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.pyzXp9yLGH1ImmiQhzPcFqQR7sSfbFFJhiscY3DHRSBh7DYwpBECy8a3urerSzGQDajY4qIbQdoIXbppqvRQKw'
            },
            method: 'GET',
            dataType: 'json',
            // credentials: 'include',// （允许 cookie 共享，跨域问题，传Cookie是必须配置）
            success: (res) => {
                console.log("请求res成功");
                this.setState({
                    showOrderInfo: res.data.data
                });
            },
            fail: function (errMsg) {
                Taro.showToast({
                    title: '服务器请求成功',
                    icon: 'none',
                    duration: '2000'
                })
            }
        });
    }
    render() {
        let orderInfoList = this.state.showOrderInfo;
        console.log("OrderInfo输出", orderInfoList);
        return (
            <View className="order_info">
                {orderInfoList.map((item) => {
                    return (
                        <View className="order_info">
                            <View class='topView'>
                                <View className='topView'>
                                    <Text style="font-size:25px;">
                                        订单已完成{'\n'}
                                    </Text>
                                    <Text style="font-size:15px;">
                                        感谢你对翔菱烧烤的信任，期待再次光临{'\n'}
                                    </Text>
                                    <button className="btnOtherList" onClick="otherList" >
                                        再来一单
                        </button>
                                </View>
                            </View>
                            <View className="tradeHeader">订单编号：{item.id} </View>
                            <View className="order_id">订单编号{item.order_id}</View>
                            <View className="goods_id">商品编号：{item.goods_id}</View>
                            <View className="goods_name">商品名称：{item.goods_name}</View>
                        </View>
                    )
                })}
            </View>
        )

    }

}

