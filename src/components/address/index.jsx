//
//定义地址展示、修改界面
import Taro from '@tarojs/taro';
import {Component} from 'react';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.scss';
import PropTypes from "prop-types";

export default class Address extends Component {
  static propTypes = {
    banner: PropTypes.array,
    addressList:PropTypes.array,
  };
  static defaultProps = {
    banner: '',
  };
   //定义根据用户编号获取地址数据请求
  getAllAddress =(data) =>{
    Taro.request({
      url:"http://localhost:8090/address/getById",
      header: {
        'content-type': 'application/json',
        'token':"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDE2MDA1OSwiY3JlYXRlZCI6MTY2MDExNjg1OTg0OSwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.kuez5-bvy5avOmoLc_8dHlEIWI4_kfUlKrrlrgC_y5V9ahRqr_SuNSiExorlrlqvTc-0ZkKuIy3nnv5-eaEHNw"
      },
      method: 'GET',
      dataType: 'json',
      data:{
        id:data,
      },
      success:(res)=>{
        this.addressList=res.data;

        console.log(this.addressList);
      },
      fail:function (errMsg){
        Taro.showToast({
          title:'服务器'
        })
      }
    })
  };
  render () {
    let data   =this.props.banner
    this.getAllAddress(1234);
    //传参
    // 进行数据请求
    getAllAddress(1234);
    return (
      <view>`12345678</view>
    )
  }
}
