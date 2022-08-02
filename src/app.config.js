export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index',
    'pages/detail/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
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
        pagePath:"pages/user/index",
        iconPath:"./images/me_no.png",
        selectedIconPath:"./images/me_yes.png",
        text:"用户",
      }
    ]
  }

})
