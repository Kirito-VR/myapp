import {Component} from 'react';
import "./index.scss"
import Taro from '@tarojs/taro';
import {AtInput, AtButton, AtForm, AtModal, AtModalHeader, AtModalContent, AtModalAction} from 'taro-ui';
import {Button, Form, Input, View} from "@tarojs/components";

//传参 传一个表单，把该地址传进来
export default class NewAddress extends Component{
  constructor(props){
    super(props);
    this.state = {
      //token用来获取数据请求
      token:'',
      //用来做弹窗
      save_button:"0",
      delete_button:"0",
      //定义地址信息,获取参数
      id:'',
      userId:'',
      areaCode:'',
      postalCode:'',
      value:'',
      tel:'',
      province:'',
      city:'',
      addressDetail:'',
      isDefault:'',
      deleted:'',
      item:'',
    }
  };
  onLoad(options) {
    let item = JSON.parse(options.item)
    this.setState({
      item
    });
    this.state.addressDetail=item.addressDetail;
    this.state.areaCode=item.areaCode;
    this.state.addressName=item.addressName;
    this.state.city=item.city;
    this.state.county=item.county;
    this.state.id=item.id;
    this.state.isDefault=item.isDefault;
    this.state.postalCode=item.postalCode;
    this.state.province=item.province;
    this.state.tel=item.tel;
    this.state.userId=item.userId;
    console.log(this.state.userId);
  }
  //保存函数
  save_Form = () =>{
    this.setState({
      save_button:'1',
    })
  }
  //保存界面的取消按钮
  saveFormCancel =()=>{
    this.setState({
      save_button:'0',
    })
  }
  // 保存确定函数
  save_Confirm = () =>{
  //  进行请求，关闭该页面，回退
  //  进行请求
  //  更新函数
    Taro.request({
      url:"http://localhost:8090/address/action/update",
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
        Taro.showToast({
          title:'服务器 修改成功'
        })
      },
      //失败提示
      fail:function (errMsg){
        Taro.showToast({
          title:'服务器 修改失败'
        })
      }
    })
    //返回上一层
    Taro.navigateBack({
      delta: 1
    });
  }
  //删除按钮跳转提示界面
  deleteAddress=() =>{
    this.setState({
      delete_button:'1',
    })
}
  //删除界面取消按钮
  deleteAddressCancel = ()=>{
    this.setState({
      delete_button:'0',
    })
  }
  deleteConfirm =()=>{
    Taro.request({
      url:"http://localhost:8090/address/action/delete",
      header: {
        'content-type': 'application/json',
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXdlaSIsImV4cCI6MTY2MDQwMDMwNywiY3JlYXRlZCI6MTY2MDM1NzEwNzA0NywiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6c3dhZ2dlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptb25pdG9yOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkcnVpZDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6bWVudTp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpvbmxpbmU6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25zdWw6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmxvZ2lubG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOmNvbmZpZzpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTplZGl0In1dfQ.9x-LQMF-UNqXwLCenTHFtaKaQgtdt6REZdHnIKUU5c9Q5nV3sdEjs8t7hICrfNn_zHr64A83Jxy7RwG0gj3AQg",
      },
      method: 'POST',
      dataType: 'json',
      data:{
        id:this.state.id,
      },
      //跳转成功提示
      success:(res)=>{
        Taro.showToast({
          title:'服务器 删除成功'
        })
      },      //失败提示
      fail:function (errMsg){
        Taro.showToast({
          title:'服务器 删除失败'
        })
      }
    })    //返回上一层
    Taro.navigateBack({
      delta: 1
    });
  }
  //定义赋值函数
  assignmentFunction(){

  };
  //
  handleChange (addressName) {
    this.setState({
      addressName
    })
    return addressName
  }

  handleChange1 (tel) {
    this.setState({
      tel
    })
    return tel
  }
  handleChange2 (province) {
    this.setState({
      province
    })
    return province
  }
  handleChange3 (city) {
    this.setState({
      city
    })
    return city
  }
  handleChange4 (county) {
    this.setState({
      county
    })
    return county
  }
  handleChange5 (addressDetail) {
    this.setState({
      addressDetail
    })
    return addressDetail
  }
  //定义修改函数，传参，重新定义一个界面
  render(){
    return (
      <View className='example-body'>
        <text className="text-show">地址名称</text>
        <AtInput
          className="input-show"
          name='value'
          title='地址名称Z:'
          type='text'
          placeholder={this.state.addressName}
          value={this.state.addressName}
          onChange={this.handleChange.bind(this)}
        />
        <text className="text-show">手机号码</text>
        <AtInput
          className="input-show"
          name='value'
          title='手机号码:'
          type='text'
          placeholder={this.state.tel}
          value={this.state.tel}
          onChange={this.handleChange1.bind(this)}
        />
        <text className="text-show">所在省/区</text>
        <AtInput
          className="input-show"
          name='value'
          title='省区：'
          type='text'
          placeholder={this.state.province}
          value={this.state.province}
          onChange={this.handleChange2.bind(this)}
        />
        <text className="text-show">所在市</text>
        <AtInput
          className="input-show"
          name='value'
          title='市区:'
          type='text'
          placeholder={this.state.city}
          value={this.state.city}
          onChange={this.handleChange3.bind(this)}
        />
        <text className="text-show">所在乡/镇/区</text>
        <AtInput
          className="input-show"
          name='value'
          title='乡镇/区:'
          type='text'
          placeholder={this.state.county}
          value={this.state.county}
          onChange={this.handleChange4.bind(this)}
        />
        <text className="text-show">详细地址</text>
        <AtInput
          className="input-show"
          name='value'
          title='详细地址:'
          type='text'
          placeholder={this.state.addressDetail}
          value={this.state.addressDetail}
          onChange={this.handleChange5.bind(this)}
        />
        <text>  </text>
        <view>
          <AtButton className="delete-button" size='small' circle="true" onClick={this.deleteAddress.bind(this)}>删除</AtButton>
          <AtButton className="save-button" type='primary' circle="true"  size='small' onClick={this.save_Form.bind(this)}>保存</AtButton>
        </view>
        {/*//修改地址提示弹窗 */}
        {
          this.state.save_button==="0"?
            <View></View>:
          <AtModal isOpened>
          <AtModalHeader>确认修改地址</AtModalHeader>
          <AtModalContent>
            即将保存！！！
          </AtModalContent>
          <AtModalAction> <Button onClick={this.saveFormCancel.bind(this)}>取消</Button> <Button onClick={this.save_Confirm.bind(this)}>确定</Button> </AtModalAction>
        </AtModal>
        }

      {/*删除弹窗提示*/}
        {
          this.state.delete_button==="0"?
            <View></View>:
            <AtModal isOpened>
              <AtModalHeader>确认删除该地址</AtModalHeader>
              <AtModalContent>
                确定将会删除改地址！
              </AtModalContent>
              <AtModalAction> <Button onClick={this.deleteAddressCancel.bind(this)}>取消</Button> <Button onClick={this.deleteConfirm.bind(this)}>确定</Button> </AtModalAction>
            </AtModal>
        }
      </View>
    );
  }
}
