## 注意事项
- 🈲 不要再 `src/style` 里面写全局样式再公共组件李引用，只允许定义一下两种内容 `mix`、`variable`。
- 🈲 不要再组件内部引用 `externals` 子文件，只允许整体引用，子文件引用会导致这个文件重复打包。
- 🈲 不要再 package.json dependencies 不能在项目引用 禁止引用第三方以来