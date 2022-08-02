/**
 * 轮播图组件
 */
// import Taro from '@tarojs/taro';
import {Component} from 'react';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.scss';
// import PropTypes from "prop-types";

export default class MySwiper extends Component {
  // static propTypes = {
  //   banner: PropTypes.array,
  // };
  //
  // static defaultProps = {
  //   banner: [],
  // };
  render () {
    return (
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <image className="swiper-img" mode="widthFix" src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F21031FKU44S6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662018228&t=bb18f5abd0346f1cc47e8ad2ea1dccc5'/>
        </SwiperItem>
        <SwiperItem>
          <image className="swiper-img" mode="widthFix" src='https://img2.baidu.com/it/u=1572613686,938558453&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=400'></image>
        </SwiperItem>
        <SwiperItem>
          <image className="swiper-img" mode="widthFix" src='https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500'></image>
        </SwiperItem>
        {/*{ banner.map((item, index) => (*/}
        {/*<SwiperItem key={index}>*/}
        {/*  <Image className="swiper-img" mode="widthFix" src={item.image_src}></Image>*/}
        {/*</SwiperItem>*/}
        {/*))}*/}
      </Swiper>
    )
  }
}
