# koa typescript

## rollup 插件:

- rollup-plugin-auto-external 自动将 dependencies 和 peerDependencies 中的依赖设置为外部依赖 external, 打包时不会打入输出文件中, 减少输出文件大小
- @rollup/plugin-node-resolve 导入 ts 文件时需要设置 nodeResolve({extensions: ['.ts', '.mjs', '.js', '.json', '.node']}), 默认是['.mjs','.js','.json','.node']
- @rollup/plugin-swc 将 TS 代码转为 js 代码
- @rollup/plugin-terser 将代码压缩混淆

## koa 相关:

- @koa/cors 允许跨域
- koa-body 解析 post 请求参数
- koa-static
- koa-router

## 日志:

- [log4js](https://log4js-node.github.io/log4js-node/index.html)

## 数据库:

- MySQL
-
