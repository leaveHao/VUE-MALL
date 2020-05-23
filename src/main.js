import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
// 添加事件总线对象
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
// 解决移动端300ms延迟
FastClick.attach(document.body)
// 懒加载
Vue.use(LazyLoad, {
  error:require('./assets/img/common/error.png'),
  // 占位图
  loading:require('./assets/img/common/loading.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

//通过methods里的代码跳转路由需要写下面代码: (不然重复点击会报错)
import Router from 'vue-router'
const routerPush = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return routerPush.call(this, location).catch(error => error)
}
