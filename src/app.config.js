export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index',
    'pages/cart/index',
    'pages/detail/index',
    'pages/user/address/index',
    'pages/user/address/newAddress/index',
    'pages/user/address/editAddress/index',
    'pages/user/wxLogin/wxLogin',
    'pages/user/userInfo/index',
    'pages/detail/menu/index',
    'pages/activity/index',
    'pages/user/order/index'

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '返回',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color:"#8a8a8a",
    selectedColor:"#1296db",
    backgroundColor:"#fafafa",
    borderStyle:"black",
    list:[
      {
        pagePath:"pages/index/index",
        iconPath:"./images/index_no.png",
        selectedIconPath:"./images/index_yes.png",
        text:"首页",
      },
      {
        pagePath:"pages/detail/index",
        iconPath:"./images/shop_no.png",
        selectedIconPath:"./images/shop_yes.png",
        text:"商城",
      },
      {
        pagePath:"pages/cart/index",
        iconPath:"./images/cart_no.png",
        selectedIconPath:"./images/cart_yes.png",
        text:"购物车",
      },
      {
        pagePath:"pages/user/index",
        iconPath:"./images/me_no.png",
        selectedIconPath:"./images/me_yes.png",
        text:"我的",
      }
    ]
  }

})
