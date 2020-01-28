import Vue from 'vue'
import App from './App.vue' // 跟组件
import router from './router' // 路由 管理页面导航
import store from './store' // 共享数据 容器
import '@/utils/register' // vant 按需引入组件
import 'amfe-flexible' // 动态设置rem基准值
import './styles/index.less'
import './utils/validation'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
