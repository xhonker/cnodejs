> 版本升级为webpack2.0
### 预览地址 ：[点击预览](https://xhonker.github.io/cnodejs/dist/index.html)
```
yarn //下载依赖
yarn dev //开发
yarn dist //发布
```
> 使用react-router 2.8.1版本
### bug
1. postcss-loader@2.0.5  版本有问题，无法编译@1.3.3可用
2. css-loader    编译有问题 需要在webpack中加入 node:{Buffer:false}  否则会把buffer打包进去
3. html-webpack-plugin 打包会很慢，还没找到解决办法