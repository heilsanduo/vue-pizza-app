//引入组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//其他页面路由
import {
  routes
} from './routes'


//路由中间件
Vue.use(VueRouter)


//实例化
const router = new VueRouter({
  routes,
  mode: 'history',
  //控制滚动
  scrollBehavior(to, from, savedPosition) {
    //相对浏览器位置
    // return {x:0,y:100}
    //页面跳转后第一个置顶元素
    //return {selector:'选择器'}
    //当浏览器发生前进后退后，浏览器触发记录页面历史信息跳转
    if (savedPosition) {
      return savadPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

//实例化后挂载
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
