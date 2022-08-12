import {Component} from 'react';
import {Text, View} from "@tarojs/components";
import "./index.scss";
import { AtSearchBar } from 'taro-ui'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Taro from "@tarojs/taro";
import { AtFloatLayout } from "taro-ui"
import { AtInputNumber } from 'taro-ui'

export default class index extends Component{

  constructor (props) {
    super(props)
    this.state = {
      value: '',
      current:'',
      menu:[],
      menuShow:false,
    }
  }

  static defaultProps = {
    // menu:[
    //   {id:1,goods_sn:"0001",goods_name:"阉鸡",category:0,brand_id:0,
    //     gallery:{
    //       "img":["https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png","https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png"]}
    //     ,brief:"这时一只非常好吃的家养阉鸡"
    //   },
    //   {id:2,goods_sn:"0002",goods_name:"阉鸭",category:1,brand_id:0,
    //     gallery:{
    //       "img":["https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png","https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png"]}
    //     ,brief:"这时一只非常好吃的家养阉鸡"
    //   },
    //   {id:3,goods_sn:"0003",goods_name:"项鸡",category:0,brand_id:0,
    //     gallery:{
    //       "img":["https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png","https://img.51miz.com/Element/00/80/64/74/4881ec32_E806474_1fa10d2a.png"]}
    //     ,brief:"这时一只非常好吃的家养阉鸡"
    //   },
    // ],

    category:[
      { title: '鸡' },
      { title: '鸭' },
      { title: '猪' },
      { title: '蛋' },
    ]

  }

    componentDidMount(){
      Taro.request({
        url:'http://localhost:8090/good/getGoodList',
        method:"get",
        header:{
          "Content-Type": "application/json", //POST方式是这个,
          "token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDMzMzkxMywiY3JlYXRlZCI6MTY2MDI5MDcxMzg2NiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.Ca5hh3yd5eeKAipjozGG_c32Wy5EN_p6PB8BVIHzrD6FPnSputxuwqdg4gzZMo77Qum8NHedOfu24ZtwOIIFGA",
        },
        success:res=>{
          // console.log(menuList);
          this.setState({
            menu:res.data.data,
            menuShow:true
          })
        },
        fail:(err)=>{
          Taro.showToast({
            title: '服务器请求错误',
            icon: 'none',
            duration: 3000
          })
        }
      })
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
      const menuShow =this.state.menuShow
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
                  {menuShow?
                    this.state.menu.map((item)=>{
                      if(item.category_id==0){
                        // console.log(item)
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
                              <img className="photo" src={item.pic_url}alt=""/>
                            </View>
                          </View>
                        )
                      }
                    }):
                    <View>aaaaa</View>
                  }

                </View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
                <View style='font-size:18px;text-align:center;height:600px;'>
                  {menuShow?
                    this.state.menu.map((item)=>{
                      if(item.category_id==1){
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
                              <img className="photo" src={item.pic_url}alt=""/>
                            </View>
                          </View>
                        )
                      }

                    }):<View></View>
                  }
                </View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
                <View style='font-size:18px;text-align:center;height:600px;'>
                  {menuShow?
                    this.state.menu.map((item)=>{
                      if(item.category_id==2){
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
                              <img className="photo" src={item.pic_url}alt=""/>
                            </View>
                          </View>
                        )
                      }

                    }):<View>数据获取失败</View>
                  }
                </View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
              <View style='font-size:18px;text-align:center;height:600px;'>这是买蛋界面
                  {menuShow?
                    this.state.menu.map((item)=>{
                      if(item.category_id==3){
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
                              <img className="photo" src={item.pic_url}alt=""/>
                            </View>
                          </View>
                        )
                      }

                    }):<View>数据获取失败</View>
                  }
                </View>
              </AtTabsPane>



            </AtTabs>

          </View>
          <View className="foot">

          </View>
        </View>
      );
    }
}
