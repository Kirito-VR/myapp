import {Component} from 'react';
import {Button, Image, SwiperItem, View} from "@tarojs/components";
import "./index.scss"
import Taro from "@tarojs/taro";


//需要一个参数，用户id，token
export default class activity extends Component{
  constructor(props){
    super(props);
    // console.log(this.state.addressList);
  };
  state = {
    userId:'1234',
    token:'',
    addressList:[],
    temp:[],
    displayWeahter:false,
  }
  onLoad(options) {
    let userId =options.userId;
    // console.log(userId);
    this.setState({
      userId
    });
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
    let parentvalue=value;
    // console.log(parentvalue);
    Taro.navigateTo({
      url:'/pages/user/address/editAddress/index?item='+JSON.stringify(value),
    })
    // console.log(event);
  }
  //新增收货地址函数跳转
  //传参，传改用户id
  newAddress =() =>{
    console.log('1')
    Taro.navigateTo({
      url:'/pages/user/address/newAddress/index?userId='+this.state.userId,
    })
}
  getAllAddress =(data) =>{
    Taro.request({
      url:"http://localhost:8090/address/getById",
      header: {
        'content-type': 'application/json',
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDQwMDMwNywiY3JlYXRlZCI6MTY2MDM1NzEwNzA0NywiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.9x-LQMF-UNqXwLCenTHFtaKaQgtdt6REZdHnIKUU5c9Q5nV3sdEjs8t7hICrfNn_zHr64A83Jxy7RwG0gj3AQg",
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
        {/*调整样式*/}
        {/*新增地址需要上传一个userId，tkoen*/}
        <Button className='btn-new-address' plain type='primary' onClick={this.newAddress.bind()}>新增收货地址</Button>
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
                  <Image className="edit-image" mode='aspectFit' src={require(`./../../../images/edit.png`)}
                         onClick={this.updateAddress.bind(this, item)}></Image>
                </view>
              </View>
              :
              <View></View>
          })
        }
      </View>
    );
  }
}
