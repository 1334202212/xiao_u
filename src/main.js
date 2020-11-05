// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import http from './http/index'
import './pages/style/xiaoU.stylus'
import './pages/utils/fontSize'
import './pages/style/font/iconfont.css'
import "swiper/css/swiper.css"
import http from './http/index'
import store from './store/index'
// import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = http
// Vue.prototype.$http = http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
