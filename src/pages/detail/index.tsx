import {Component} from 'react';
import {View} from "@tarojs/components";
import "./index.scss";
import { AtSearchBar } from 'taro-ui'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { AtFloatLayout } from "taro-ui"

export default class index extends Component{
  constructor (props) {
    super(props)
    this.state = {
      value: '0',
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




    render(){
      const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
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
            tabDirection='vertical'
            current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}
            >
              <AtTabsPane current={this.state.current} index={0} >
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={2}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
              </AtTabsPane>
            </AtTabs>
          
          </View>
          <View className="foot">
        
          </View>
        </View>
      );
    }
}
