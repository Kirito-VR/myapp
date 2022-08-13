import {Component} from 'react';
import {View,Text,Icon} from "@tarojs/components";
import { AtTabs, AtTabsPane, } from 'taro-ui'
import './index.scss';
import Taro from "@tarojs/taro";




export default class index extends Component{

    static defaultProps={
        list: [
            {id:1,name:"猪肉",cart_Amount:"1",cart_Money:"100",checked:true},
            {id:2,name:"乌龟",cart_Amount:"5",cart_Money:"60",checked:true},
            {id:3,name:"乌龟蛋",cart_Amount:"10",cart_Money:"150",checked:true},
            {id:4,name:"烤乌龟",cart_Amount:"5",cart_Money:"120",checked:false}
        ]
    }

    getTotalPrice(){
        let list = this.props.list
        // console.log(list);
        var total = 0;
        for (var i = 0; i <this.props.list.length; i++) {
            if (this.props.list[i].checked) {
            total += this.props.list[i].cart_Amount * this.props.list[i].cart_Money
        }}
        return total;
    }

      addCount(e) {
        const index = e.currentTarget.dataset.index
        const list=this.props.list;
        console.log(list);
        let cart_Amount = list[index].cart_Amount
        cart_Amount = cart_Amount + 1
        list[index].cart_Amount = cart_Amount
        this.setState({
           list:list
          })
          this.getTotalPrice()
        }

    checkList(id,e) {
        let index = e.currentTarget.dataset.index
        let list = this.props.list
        this.props.list.forEach(item => {
          if (id == item.id) {
            item.checked = !item.checked
          }
        })
        // this.setState({
        //   list:list,
        // })
        const checkAllStatus = this.props.list.every(item => item.checked)
        this.setState({
          checkAllStatus: checkAllStatus,
        })
        // this.getTotalPrice()
      }

      checkAll(e) {
        let checkAllStatus = this.props.checkAllStatus
        checkAllStatus = !checkAllStatus
        const list = this.props.list
        for (var i = 0; i < this.props.list.length; i++) {
        this.props.list[i].checked = checkAllStatus
        }
        this.setState({
          checkAllStatus: checkAllStatus,
          list:list,
        })
        this.getTotalPrice()
      }

    componentDidMount(){
        Taro.request({
          url:"http://localhost:8090/cart/getCartList",
          header:{
            'content-type': 'application/json',
            'token':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDQwOTQ5MywiY3JlYXRlZCI6MTY2MDM2NjI5Mzg3NCwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.CCPtz__sAV7sb3nTO9E4sX1iA-_xp0b9r2njP2FfPWzrNgUPQuMaBast3ADMm5Y8OOdYmgRx5tzxESM7zpPiFw'
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

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    });

  }

  tradeClick(value){
    console.log("value")
  }

  render () {
    const list = this.props.list;
    let checkAllStatus=this.props.checkAllStatus;

    return (

        <View className="cart">
        {list.map((item)=>{
          return(
            <View className="cartlist"  key={index}>
                {item.checked ? (
                      <Icon
                        type="success"
                        color="#b30000"
                        className="cartCheck"
                        onClick={this.checkList.bind(this,item.id)}
                      ></Icon>
                    ) : (
                      <Icon
                        type="circle"
                        className="cartCheck"
                        onClick={this.checkList.bind(this,item.id)}
                      ></Icon>)}

              <View className="tradeHeader">商品编号：{item.id} </View>
              <Text>{item.name}</Text>
              <View class="Amount">
                      <Text
                        className="cart-count-down"
                        onClick={this.minusCount}
                        data-index={index}
                      >
                        -
                      </Text>
                      <Text className="cart-count-num">{item.cart_Amount}</Text>
                      <Text
                        className="cart-count-add"
                        onClick={this.addCount}

                      >
                        +
                      </Text>
                    </View>
              <View class="Money">  ￥{item.cart_Money}</View>
            </View>

          )
        })}
         <View className="cart-footer">
              {checkAllStatus ? (
                <Icon
                  type="success_circle"
                  color="#b30000"
                  className="checkAll"
                  onClick={this.checkAll}
                ></Icon>
              ) : (
                <Icon
                  type="circle"
                  color="#b30000"
                  className="checkall"
                  onClick={this.checkAll}
                ></Icon>)}
                       <Text className="TotalPrice">合计：{this.getTotalPrice()}</Text>
         </View>

      <View>
        <Text>购物车</Text>
        <button onClick={this.tradeClick.bind(this)}>结算</button>

      </View>
        </View>

    )
  }
}
