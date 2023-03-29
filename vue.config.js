const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 不打包报错文件Map
  productionSourceMap: false,
  transpileDependencies: true,
  lintOnSave: false,
  // 跨域代理：用服务器地址
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
      },
    }
  }
})