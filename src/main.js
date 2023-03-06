import Vue from 'vue'
import App from './App.vue'
// 引入elmentUI
import ElementUI from 'element-ui';
// 引入elmentUI全部样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由
import router from './router'
// 引入store
import store from './store'
// 引入axios
import http from 'axios'
// 引入Mock
import '../api/mock'
// 关闭生产提示
Vue.config.productionTip = false
// 使用elmentUI
Vue.use(ElementUI);
Vue.prototype.$http = http

// 导航守卫，设置权限，如果没有token凭证直接跳转login页面
router.beforeEach((to, from, next) => {
  store.commit('getToken') // 将浏览器里的token放在state里面，防止刷新后页面跳回login
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit("addMenu", router);
  }
}).$mount('#app')
