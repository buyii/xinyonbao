import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  globalStyle: {
    navigationBarTitleText: '星佣宝',
    navigationBarTextStyle: 'white',
    navigationStyle: 'custom',
  },
  tabBar: {
    custom: true,
    height: '0',
    color: '#999999',
    selectedColor: '#FF0057',
    list: [{
      pagePath: 'pages/home/index',
    }, {
      pagePath: 'pages/wisdom/index',
    }, {
      pagePath: 'pages/rank/index',
    }, {
      pagePath: 'pages/mine/index',
    }],
  },
})
