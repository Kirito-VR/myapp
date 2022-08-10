import {Component} from 'react';
import {Image, View} from "@tarojs/components";
import "./index.scss"


export default class Activity extends Component{
  constructor(props){
    super(props)
  }
    render(){
      return (
          <View className="BossRecom">
            <view>老板推荐</view>

            <view>忻城珍珠糯玉米</view>
            <Image mode='aspectFill'  className="nuomi-img" src='https://img1.baidu.com/it/u=3246481219,2859390051&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=473'/>
            <view className="jiesshao">忻城珍珠糯玉米的基本介绍</view>
            <text>珍珠糯玉米的主产地——广西中部大石山区的忻城县，广西忻城县是素有“九分石头一分土”美称的大石山区，这里气候温和、雨量充沛、
              山地肥沃、气候温暖湿润、雨量充沛，山间雨雾常伴，无任何污染；非常适合玉米的生长，优越的地理位置和地域环境造就了珍珠糯玉米的优质自然属性。</text>
            <Image src="https://img0.baidu.com/it/u=3435984302,1685091624&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=753"/>
            <view className="jiesshao">营养价值</view>
            <view>
              由于它含有丰富的蛋白质、赖氨酸、谷固醇、磷脂、五油酸、铁、镁等多种矿物质元素及一般粮食所没有的胡萝卜素，因而对减少胆固醇在血管中的沉积，
              防止皮肤皱裂，抗老抑癌，清音润嗓，防治夜盲、哮喘和促进儿童生长发育都有良好的效能。
            </view>
            <view className="jiesshao">产品特点</view>
            <view>忻城的珍珠糯玉米是中国特有的珍贵变异品种。其子粒细小均匀，白如珍珠，煮食粘柔爽口，饭后留香。</view>
            <view className="jiesshao">历史民俗</view>
            <view>
              珍珠糯玉米在忻城也称珍珠孕妇米,在忻城每位孕妇餐餐都少不了饱满的珍珠玉米头，鲜嫩的Q感，馋嘴的嚼劲。
              老少妇孺的上上之选，经常食用珍珠糯玉米的孕妇，胎儿日后肌肤如珍珠般玉白，珍珠孕妇米由此而来。
            </view>
            <view className="jiesshao">获取奖项</view>
            <view>
              甜！忻城糯玉米获第十九届名特优农产品（桂林）交易会重点推介
            </view>
            <view>
              “壮乡忻意，一糯千金”—— 忻城糯玉米品牌南宁推介会成功举办，深耕广西市场
            </view>
          </View>
      );
    }
}
