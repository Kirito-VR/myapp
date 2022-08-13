import {Component} from 'react';
import {Button, View} from "@tarojs/components";
import "./index.scss"
import Taro from "@tarojs/taro";
import {AtInput, AtButton,AtModal,AtModalHeader,AtModalContent,AtModalAction} from 'taro-ui'

//传参，传token，userid，等参数进来
export default class NewAddress extends Component{
  constructor(props){
    super(props);
    this.state = {
      //传tkoen 用户编号进来
      token:'',
      userId:'',


      tel:'',
      county:'',
      city:'',
      province:'',
      addressDetail:'',
      areaCode:'',
      postalCode:'',
      addressName:'',
      save_button:"0",
      save_button_confirm:"0",
      isDefault:'',
      deleted:"0",
      id:'',
    }
  };
  //获取函数
  onLoad(options) {
    let userId =options.userId;
    // console.log(userId);
    this.setState({
      userId
    });
  }
  //定义保存函数
  saveAddress =(value,event) => {
    console.log(value);
    this.setState({
      save_button:"1",
    })
  };
  //定义取消按钮
  addAddressCancel =(value,event) =>{
    console.log(value);
    this.setState({
      save_button:"0",
    })
  };
//确定按钮，确定与后端请求
  addAddressConfirm =(value,event) =>{
    Taro.request({
      url:"http://localhost:8090/address/action/add",
      header: {
        'content-type': 'application/json',
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDQwMDMwNywiY3JlYXRlZCI6MTY2MDM1NzEwNzA0NywiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.9x-LQMF-UNqXwLCenTHFtaKaQgtdt6REZdHnIKUU5c9Q5nV3sdEjs8t7hICrfNn_zHr64A83Jxy7RwG0gj3AQg",
      },
      method: 'POST',
      dataType: 'json',
      data:{
        id:this.state.id,
        userId:this.state.userId,
        addressName:this.state.addressName,
        province:this.state.province,
        city:this.state.city,
        county: this.state.county,
        addressDetail: this.state.addressDetail,
        areaCode:this.state.areaCode,
        postalCode: this.state.postalCode,
        tel:this.state.tel,
        isDefault: this.state.isDefault,
        deleted:this.state.deleted,
      },
      //跳转成功提示
      success:(res)=>{
      },
      //失败提示
      fail:function (errMsg){
        Taro.showToast({
          title:'服务器'
        })
      }
    })
    //休眠函数1s
    this.setState({
      save_button_confirm:"1",
    })
    //添加成功回退
    Taro.navigateBack({
      delta:1
    });
  };
//监听输入框函数
  handleChange (name) {
    this.setState({
      name
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return name
  }
  handleChange1 (tel) {
    this.setState({
      tel
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return tel
  }
  handleChange2 (province) {
    this.setState({
      province
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return province
  }
  handleChange3 (city) {
    this.setState({
      city
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return city
  }
  handleChange4 (country) {
    this.setState({
      country
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return country
  }
  handleChange5 (addressDetailed) {
    this.setState({
      addressDetailed
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return addressDetailed
  }
  //定义修改函数，传参，重新定义一个界面
  render(){
    return (
      <View className='example-body'>
        <text>地址名称</text>
        <AtInput
          name='value'
          title='地址名称'
          type='text'
          placeholder='       家/公司                                           '
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
        />
          <text>手机号码</text>
          <AtInput
            name='value'
            title='手机号'
            type='text'
            placeholder='       手机号                                              '
            value={this.state.tel}
            onChange={this.handleChange1.bind(this)}
          />
        <text>省份</text>
        <AtInput
          name='value'
          title='标准五个字'
          type='text'
          placeholder='     省份'
          value={this.state.province}
          onChange={this.handleChange2.bind(this)}
        />
        <text>市</text>
        <AtInput
          name='value'
          title='标准五个字'
          type='text'
          placeholder='      城市'
          value={this.state.city}
          onChange={this.handleChange3.bind(this)}
        />
        <text>区/县</text>
        <AtInput
          name='value'
          title='标准五个字'
          type='text'
          placeholder='     区/县'
          value={this.state.country}
          onChange={this.handleChange4.bind(this)}
        />
        <text>详细地址</text>
        <AtInput
          name='value'
          title='标准五个字'
          type='text'
          placeholder='     收获详细地址'
          value={this.state.addressDetailed}
          onChange={this.handleChange5.bind(this)}
        />
        <AtButton loading type='primary' onClick={this.saveAddress.bind(this)}>保存</AtButton>
        {
          this.state.save_button==="0"?
            <View></View>:
          <AtModal isOpened>
          <AtModalHeader>确认添加收获地址</AtModalHeader>
          <AtModalContent>
            即将保存！！！
          </AtModalContent>
          <AtModalAction> <Button onClick={this.addAddressCancel.bind(this)}>取消</Button> <Button onClick={this.addAddressConfirm.bind(this)}>确定</Button> </AtModalAction>
        </AtModal>
        }
      </View>
    );
  }
}
