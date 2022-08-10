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
              tabList={[
                { title: '鸡' },
                { title: '鸭' },
                { title: '猪' },
                { title: '蛋' },
              ]}
              onClick={this.handleClick.bind(this)}>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
                <View style='font-size:18px;text-align:center;height:600px;'>这是买鸡的</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
                <View style='font-size:18px;text-align:center;height:600px;'>这是买鸭的</View>
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
