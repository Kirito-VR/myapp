//import {Component} from 'react';
import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";

import "./index.scss";
import {AtButton, AtSearchBar } from 'taro-ui'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { AtFloatLayout } from "taro-ui"
import { AtList, AtListItem } from "taro-ui"



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
      // @ts-ignore
      // @ts-ignore
      // @ts-ignore
      // @ts-ignore
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
            <AtList>
              <AtListItem
                title='鸡蛋'
                note='新品种欢迎尝试'
                arrow='right'
                thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              />
              <AtListItem
                title='鸡胸肉'
                note='新品种欢迎尝试'
                //arrow='right'

                thumb='./detailImg/01.jpg'
              />
              <AtListItem
                title='鸡螺蛳粉'
                note='新品种欢迎尝试'
                extraText='详细信息'
                arrow='right'
                thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
              />
            </AtList>
          </View>
        </View>
      );
    }
}
