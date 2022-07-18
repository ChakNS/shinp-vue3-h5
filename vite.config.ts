/* eslint-disable camelcase */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import px2vp from 'postcss-px2vp'
import { join } from 'path'

const resolve = (path: string) => join(__dirname, path)

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 打包路径
  server: {
    // 开发配置
    host: '0.0.0.0',
    port: 8080,
    open: true,
    https: false,
    proxy: {},
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        px2vp({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: (rule) => {
            const file = rule.source?.input.file
            if (file?.includes('main')) return 750
            return 375
          }, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          exclude: [],
          landscape: false, // 是否处理横屏情况
        }),
      ],
    },
  },
})
