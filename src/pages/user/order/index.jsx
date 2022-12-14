import { Component } from 'react';
import { View, Text } from "@tarojs/components";
import { AtTabs, AtTabsPane } from 'taro-ui';
import Taro from "@tarojs/taro";

import Order_his from "./order_his";
import './index.scss';

export default class index extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            current: 0,
            showOrderList: []
        }
    }

    componentDidMount() {
        Taro.request({
            url: 'http://localhost:8090/order/getOrderList',
            header: {
                'content-type': 'application/json',
                // 'token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY1OTU2MjkyMSwiY3JlYXRlZCI6MTY1OTUxOTcyMTIyMSwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.pyzXp9yLGH1ImmiQhzPcFqQR7sSfbFFJhiscY3DHRSBh7DYwpBECy8a3urerSzGQDajY4qIbQdoIXbppqvRQKw'
            },
            method: 'GET',
            dataType: 'json',
            // credentials: 'include',// ????????? cookie ???????????????????????????Cookie??????????????????
            success: (res) => {
                console.log("??????res??????");
                this.setState({
                    showOrderList: res.data.data
                });
            },
            fail: function (errMsg) {
                console.log("???????????????",errMsg);
                Taro.showToast({
                    title: '?????????????????????',
                    icon: 'none',
                    duration: '2000'
                })
            }
        });
    }

    handleClick(value) {
        this.setState({
            current: value
        });
        console.log("???????????????????????????6666");
    }

    // ??????????????????????????????????????????
    showOrderList = () => { }

    showOrderDetail=(id,consignee,address,mobile)=>{
        console.log("????????????id",id);
        Taro.navigateTo({
            url: `/pages/user/order/order_his/order_detail/index?id=${id}&consignee=${consignee}&address=${address}&mobile=${mobile}`
        });
    }

    render() {
        let orderList = this.state.showOrderList;
        const tabList = [{ title: '?????????' }, { title: '??????' }, { title: '??????' }]
        return (
            // ?????????????????????
            <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                {/* ????????????????????? */}
                <AtTabsPane current={this.state.current} index={0}>
                    <View style='background-color: #FAFBFC;text-align: center;'>
                      {orderList.map((item) => {
                        return (
                          <View className="order_list" style="margin-bottom: 20px;">
                            {/* ???????????? */}
                            <View className='order_info'>
                              <View className="goods_img">
                                <img width='100px' height='100px' src={require("../../../images/iceKingLemoTea.png")} alt="" />
                              </View>
                              <View className="consignee"><Text>???????????????{item.message} </Text></View>
                              <View class="OrderDetail">
                                <button class="btnOrderDetail" onClick={(e) => { e.stopPropagation(); this.showOrderDetail(item.id,item.consignee,item.address,item.mobile) }}>????????????</button>
                              </View>
                            </View>
                          </View>
                        )
                      })}
                    </View>


                </AtTabsPane>
                {/* ?????????????????? */}
                <AtTabsPane current={this.state.current} index={1}>
                    <View style='background-color: #FAFBFC;text-align: center;'>
                        <View>
                          <View style='background-color: #FAFBFC;'>
                          <View>
                            <Order_his>

                            </Order_his>
                          </View>
                          </View>
                        </View>
                    </View>

                </AtTabsPane>
                {/* ???????????? */}
                <AtTabsPane current={this.state.current} index={2}>
                    <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
                        ????????????
                    </View>
                </AtTabsPane>
            </AtTabs>

        )
    }
}
