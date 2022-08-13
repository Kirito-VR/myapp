/**
 * 轮播图组件
 * 进行了横向轮播图封装
 * 使用：传文件名进来，把图片丢到images里面
 */
import Taro from '@tarojs/taro';
import {Component} from 'react';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.scss';
import PropTypes from "prop-types";

export default class MySwiper extends Component {
  static propTypes = {
    banner1: PropTypes.array,
  };
  static defaultProps = {
    banner1: [],
  };
  jump = (data) =>{
    console.log(data);
    // Taro.navigateTo({
    //   url:''
    // })
  }
  render () {
    let data   =this.props.banner
    return (
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        {
          data && data.map((item, index) => (
            <SwiperItem key={index}>
              <Image className="swiper-img" src={require(`./../../images/${item}.jpg`)} mode='aspectFill' onClick={this.jump.bind(this)} ></Image>
          </SwiperItem>
          ))
        }
       </Swiper>
    )
  }
}
