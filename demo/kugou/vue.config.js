module.exports = {
  assetsDir: './static/',
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.jsdelivr.net/gh/xianshenglu/vue@master/demo/kugou/dist/'
      : './'
  // devServer: {
  // todo add https for localhost
  // }
  // configureWebpack: {
  //   externals: {
  //     vue: 'Vue',
  //     'vue-router': 'VueRouter',
  //     vuex: 'Vuex',
  //     axios: 'axios'
  //   }
  // }
}
