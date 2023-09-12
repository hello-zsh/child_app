const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/child_app/' : '/',
  configureWebpack: {
    output: {
      library: {
        name:  `${name}-[name]`,
        type: 'umd',
      },
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: 8889,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
})
