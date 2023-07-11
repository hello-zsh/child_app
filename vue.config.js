const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/child_app/' : '/',
  chainWebpack: config => {
    config.plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: "childApp", // 模块名称
        filename: "remoteEntry.js",
        exposes: {
          './custom-button': '@/components/custom-button',
          './custom-chart': '@/components/custom-chart',
        },
        shared: {
          'view-design': {
            singleton: true,
          },
          'echarts': {
            singleton: true,
          }
        }
      }])
  }
})
