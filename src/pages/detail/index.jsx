import {Component} from 'react';
import {Text, View} from "@tarojs/components";
import "./index.scss";
import { AtSearchBar } from 'taro-ui'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Taro from "@tarojs/taro";
import { AtFloatLayout } from "taro-ui"
import { AtInputNumber } from 'taro-ui'

export default class index extends Component{

    componentDidMount(){
        Taro.request()
    }


  static defaultProps = {
    menu:[
      {id:1,goods_sn:"0001",goods_name:"阉鸡",category:0,brand_id:0,
        gallery:{
          "img":["https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png","https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png"]}
        ,brief:"这时一只非常好吃的家养阉鸡"
      },
      {id:2,goods_sn:"0002",goods_name:"阉鸭",category:1,brand_id:0,
        gallery:{
          "img":["https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png","https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png"]}
        ,brief:"这时一只非常好吃的家养阉鸡"
      },
      {id:3,goods_sn:"0003",goods_name:"项鸡",category:0,brand_id:0,
        gallery:{
          "img":["https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png","https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png"]}
        ,brief:"这时一只非常好吃的家养阉鸡"
      },
    ],
    category:[
      { title: '鸡' },
      { title: '鸭' },
      { title: '猪' },
      { title: '蛋' },
    ]

  }

  constructor (props) {
    super(props)
    this.state = {
      value: '',
      current:''
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }

  onActionClick () {
    console.log('开始搜索')
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  goodInfoClick(value){
    Taro.navigateTo({url:"/pages/detail/menu/index"});
  }





    render(){
    const menu = this.props.menu;
    const cate = this.props.category;
      return (


        <View className="wapper">
          <View className="header">
            <AtSearchBar
              actionName='搜一下'
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              onActionClick={this.onActionClick.bind(this)}
            />
          </View>
          <View className="content">
            <AtTabs
              current={this.state.current}
              scroll
              height='600px'
              tabDirection='vertical'
              tabList={cate}
              onClick={this.handleClick.bind(this)}>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
                <View style='font-size:18px;text-align:center;height:600px;' >这是买鸡的
                  {
                    menu.map((item)=>{
                      return(
                        <View className="shop_list" onClick={this.goodInfoClick.bind(item.index)}>
                          <View className="tradeHeader">
                            <Text>
                                商品编号：{item.id} 
                                商品名称：{item.goods_name}
                            </Text>
                            <View>{item.brief}</View>
                            <View class="Money"></View>
                          </View>
                          
                          <View>
                          <img className="photo" src={item.gallery.img[0]}alt=""/>
                          </View>
                        </View>
                      )
                    })
                  }

                </View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
                <View style='font-size:18px;text-align:center;height:600px;'><img src={"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"}alt=""/></View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
                <View style='font-size:18px;text-align:center;height:600px;'>这是买猪的</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
                <View style='font-size:18px;text-align:center;height:600px;'>这是买蛋的</View>
              </AtTabsPane>

            

            </AtTabs>

          </View>
          <View className="foot">

          </View>
        </View>
      );
    }
}
