const { dynamicExternals } = require("@terminus/t-tools-externals-lazy-pkgs");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");

module.exports = {
  dist: "./dist",

  dev: {
    port: 8000,
    browser: true,
  },

  isTrantor: true,

  externals: [
    "react",
    "react-dom",
    "moment",
    "lodash",
    "classnames",
    "classnames/bind",
    "mobx",
    "mobx-react",
    "@terminus/nusi",
    "@terminus/nusi-engine",
    "@terminus/i18n-plat-sdk-js",
    "vue",
  ],

  dynamicExternals,

  // 这里需要改为 true，让自定义组件开发时使用用户安装的依赖
  node_modules: true,

  tool: "webpack",

  cssmodule: true,

  // 配置 webpack，让 t-tools 获得处理 vue、css 的能力
  webpackConfig: (webpackConfig, webpackMerge) => {
    const config = {
      module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  plugins: [
                    [
                      "import",
                      {
                        libraryName: "ant-design-vue",
                        libraryDirectory: "es",
                        style: "css",
                      },
                    ],
                  ],
                },
              },
            ],
          },
          {
            test: /\.vue$/,
            use: [
              {
                loader: "vue-loader",
              },
            ],
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      plugins: [
        new VueLoaderPlugin(),
        new webpack.WatchIgnorePlugin([/\.d\.ts$/]),
      ],
    };

    webpackConfig.module.rules[0].options["appendTsSuffixTo"] = [/\.vue$/];

    return webpackMerge.merge(webpackConfig, config);
  },
};
