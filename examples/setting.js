const { dynamicExternals } = require('@terminus/t-tools-externals-lazy-pkgs');

module.exports ={
  
  // 打包存放目录
  dist: './dist',

  // 开发配置
  dev:{ 
    port: 8000,
    browser: true
  },

  // 是否是 trantor 项目
  isTrantor: true,

  // 内部依赖
  externals: [ 'react', 'react-dom', 'moment', 'lodash', 'classnames', 'classnames/bind', 'mobx', 'mobx-react', '@terminus/nusi', '@terminus/nusi-engine', '@terminus/i18n-plat-sdk-js' ],

  // 外部依赖(需要懒加载)
  dynamicExternals,

  // 本地扩展查找路径 false 不查找任何 node_module (禁止引入任自定义何第三方组件), 如果是string 自定义查找
  node_modules: false,

  // 打包工具 webpack | rollup
  tool: 'webpack',

  // 是否启用 cssmodule true | false
  cssmodule: true,

}