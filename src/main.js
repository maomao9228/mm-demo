// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

import 'es6-promise/auto'
// import 'bootstrap/dist/css/bootstrap.min.css'
import * as uiv from 'uiv'

Vue.use(Vuex)
Vue.use(uiv)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zn',
  messages: {
    'zh': require('./common/lang/zh.js'),
    'en': require('./common/lang/en.js')
  }
})

Vue.config.productionTip = false
// 定义全局 i18n
window.i18n = i18n
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
