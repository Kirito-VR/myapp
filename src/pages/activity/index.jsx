import {Component} from 'react';
import {Button, Image, SwiperItem, View} from "@tarojs/components";
import "./index.scss"
// @ts-ignore
import Taro from "@tarojs/taro";


export default class Activity extends Component{
  constructor(props){
    super(props);
    // console.log(this.state.addressList);
  };
  state = {
    addressList:[],
    temp:[],
    displayWeahter:false,
  }
  componentWillMount(){
  };
  componentDidShow(){
    this.getAllAddress(1234);
  }
  componentDidMount(){
  };
  //定义修改函数，传参，重新定义一个界面
  updateAddress = (value,event) =>{
    console.log(value);
    // console.log(event);
  }
  getAllAddress =(data) =>{
    Taro.request({
      url:"http://localhost:8090/address/getById",
      header: {
        'content-type': 'application/json',
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDMxNTg4MywiY3JlYXRlZCI6MTY2MDI3MjY4MzY4MiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.kq_dFKkGuhsfnKKANGi-AT2wrFZv2hUnD-HGrsOg5ToxWJL6sKvWbJicu1qG0I2kz2RmTe5dOkphS_4s8UxYEQ",
      },
      method: 'GET',
      dataType: 'json',
      data:{
        id:data,
      },
      success:(res)=>{
        this.setState({
          temp:res.data.data,
        })
      },
      fail:function (errMsg){
        Taro.showToast({
          title:'服务器'
        })
      }
    });
    this.setState({
      displayWeahter:true,
    })
  };
    render(){
      const displayWeahter=this.state.displayWeahter;
      console.log(this.state.temp);
      return (
          <View className="BossRecom">
            <Button className='btn-max-w' plain type='primary'>新增收货地址</Button>
            {
              displayWeahter&&this.state.temp.map((item,index)=>{
                return item.deleted === "0"?
                  <View  className="addressContent">
                    <view className="each-content">
                      <view className="phone-content">
                        <text>{item.addressName}   </text>
                        {item.tel}
                      </view>
                      <view className="characters-view">
                        <text>{item.province}  </text>
                        <text>{item.city}  </text>
                        <text>{item.county}</text>
                        {item.addressDetail}
                      </view>
                    </view>
                    <view className="image-view">
                      <Image className="edit-image" mode='aspectFit' src={require(`./../../images/edit.png`)}
                             onClick={this.updateAddress.bind(this, item)}></Image>
                    </view>
                  </View>
                  :
                  <View></View>
              })
            }
            {/*<view>老板推荐</view>*/}
            {/*<view>忻城珍珠糯玉米</view>*/}
            {/*<Image mode='aspectFill'  className="nuomi-img" src='https://img1.baidu.com/it/u=3246481219,2859390051&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=473'/>*/}
            {/*<view className="jiesshao">忻城珍珠糯玉米的基本介绍</view>*/}
            {/*<text>珍珠糯玉米的主产地——广西中部大石山区的忻城县，广西忻城县是素有“九分石头一分土”美称的大石山区，这里气候温和、雨量充沛、*/}
            {/*  山地肥沃、气候温暖湿润、雨量充沛，山间雨雾常伴，无任何污染；非常适合玉米的生长，优越的地理位置和地域环境造就了珍珠糯玉米的优质自然属性。</text>*/}
            {/*<Image src="https://img0.baidu.com/it/u=3435984302,1685091624&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=753"/>*/}
            {/*<view className="jiesshao">营养价值</view>*/}
            {/*<view>*/}
            {/*  由于它含有丰富的蛋白质、赖氨酸、谷固醇、磷脂、五油酸、铁、镁等多种矿物质元素及一般粮食所没有的胡萝卜素，因而对减少胆固醇在血管中的沉积，*/}
            {/*  防止皮肤皱裂，抗老抑癌，清音润嗓，防治夜盲、哮喘和促进儿童生长发育都有良好的效能。*/}
            {/*</view>*/}
            {/*<view className="jiesshao">产品特点</view>*/}
            {/*<view>忻城的珍珠糯玉米是中国特有的珍贵变异品种。其子粒细小均匀，白如珍珠，煮食粘柔爽口，饭后留香。</view>*/}
            {/*<view className="jiesshao">历史民俗</view>*/}
            {/*<view>*/}
            {/*  珍珠糯玉米在忻城也称珍珠孕妇米,在忻城每位孕妇餐餐都少不了饱满的珍珠玉米头，鲜嫩的Q感，馋嘴的嚼劲。*/}
            {/*  老少妇孺的上上之选，经常食用珍珠糯玉米的孕妇，胎儿日后肌肤如珍珠般玉白，珍珠孕妇米由此而来。*/}
            {/*</view>*/}
            {/*<view className="jiesshao">获取奖项</view>*/}
            {/*<view>*/}
            {/*  甜！忻城糯玉米获第十九届名特优农产品（桂林）交易会重点推介*/}
            {/*</view>*/}
            {/*<view>*/}
            {/*  “壮乡忻意，一糯千金”—— 忻城糯玉米品牌南宁推介会成功举办，深耕广西市场*/}
            {/*</view>*/}
          </View>
      );
    }
}
