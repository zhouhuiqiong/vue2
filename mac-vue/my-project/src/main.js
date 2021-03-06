// 引用 vue 没什么要说的
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 光引用不成，还得使用
Vue.use(VueRouter)
// 入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'
// 引用API文件
import api from './config/api'

import directive from './config/directive';
Object.keys(directive).forEach(function(k) {
  Vue.directive(k, directive[k]);
});

import filter from './config/filter';
Object.keys(filter).forEach(function(k){
    Vue.filter(k, filter[k]);
});
import verify from "vue-verify-plugin";
Vue.use(verify,{
    blur:true
 });
import commonality from './config/public'
Vue.use(commonality);
//Vue.prototype.ajax

// 将API方法绑定到全局
Vue.prototype.$api = api
// 使用配置文件规则
const router = new VueRouter({
  routes
})
// 跑起来吧
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
//判断是否登录进行拦截
router.beforeEach( (to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
        if (localStorage.id) {
            next();
        }
        else {
            next({
                path: '/login'
                // query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
});