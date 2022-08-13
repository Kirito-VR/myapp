import {Component} from 'react';
import {View,Text} from "@tarojs/components";
import './index.scss'
import { render } from 'less';
import Taro from "@tarojs/taro";

export default class Order_his extends Component{
  static defaultProps = {
    list: [
      {id:1,date:"2022/08/3",order_tradeMoney:"300"},
      {id:2,date:"2022/08/3",order_tradeMoney:"222"},
      {id:3,date:"2022/08/3",order_tradeMoney:"333"},
      {id:4,date:"2022/08/3",order_tradeMoney:"444"},
      {id:5,date:"2022/08/3",order_tradeMoney:"555"},
      {id:6,date:"2022/08/3",order_tradeMoney:"666"},
      {id:7,date:"2022/08/3",order_tradeMoney:"777"},
    ]
  }
  componentDidMount(){
    Taro.request({
      url:"https://g4.glypro19.com/api/order/getOrderList",
      header:{
        'content-type': 'application/json',
        'token':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDA4NzgyOCwiY3JlYXRlZCI6MTY2MDA0NDYyODEwMCwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.78gXAXQJ_IRdZ6-4npAysvCGois7WuUCN_N67VYYMHi-geUXO6m7G9fDNII9TDTRp2cAWZc7qT_VK7CKR_bOtA'
      },
      method: 'GET',
      dataType: 'json',
      success:(res)=>{
        console.log("成功调用");
        console.log(res);
      },
      fail: function (errMsg) {
        Taro.showToast({
          title: '服务器请求错误',
          icon: 'none',
          duration: 3000
        })
      }
    })
  }


  render(){
    const list = this.props.list;
      return(
        <View className="order_hist">
          {list.map((item)=>{
            return(

              <View className="order_list">
                <View className="tradeHeader">订单编号：{item.id} <Text>订单时间：{item.date}</Text></View>
                <View>这里写了订单部分信息</View>
                <View class="Money">金额：{item.order_tradeMoney}</View>
              </View>
            )
          })}

        </View>
      )
    }
}


