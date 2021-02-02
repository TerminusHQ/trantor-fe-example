module.exports = {
  // 配置
  options: {
    NAME: 'Trantor前端资源模块',
    DEPLOY_URL: '', // 例如: https://test-gateway.app.terminus.io/t-project/trantor-deployment/meta-store/${tenantKey}/${projectKey}
    MODULE_KEY: 'frontend', // 模块名称: 自定义名称
    VERSION: '0.0.1-SNAPSHOT', // 模块版本: 自定义版本
    PRODUCT: {
      KEY: '', // 与 projectKey 相同
      VERSION: '' // 目前定制项目的版本是固定的, 都是 0.0.0-SNAPSHOT
    },
  },

  // 发布前操作 Hook
  async before(){

  },

  // 发布后操作 Hook
  async after(){

  }
}
