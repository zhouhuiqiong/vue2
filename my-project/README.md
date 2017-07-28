# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#文件目录
目录/文件	说明
build	这个是我们最终发布的时候会把代码发布在这里，在开发阶段，我们基本不用管。
config	配置目录，默认配置没有问题，所以我们也不用管
node_modules	这个目录是存放我们项目开发依赖的一些模块，这里面有很多很多内容，不过高兴的是，我们也不用管
src	我们的开发目录，基本上绝大多数工作都是在这里开展的
static	资源目录，我们可以把一些图片啊，字体啊，放在这里。
test	初始测试目录，没用，删除即可
.xxxx文件	这些是一些配置文件，包括语法配置，git配置等。基本不用管，放着就是了
index.html	首页入口文件，基本不用管，如果是开发移动端项目，可以在head区域加上你合适的meta头
package.json	项目配置文件。前期基本不用管，但是你可以找一下相关的资料，学习一下里面的各项配置。至少，要知道分别是干嘛的。初期就不管了。
README.md	不用管

文件\目录	说明
component	组件文件夹我们写的一些公用的内容可以放在这里的。
config	核心配置文件夹
frame	存放自路由的文件夹
page	项目模板文件夹,所有的页面文件全部存放与此，后面会根据需要来建立各种子目录
style	样式存放目录