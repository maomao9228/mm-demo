import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cn from './lang/zn'
import en from './lang/en'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'CN',
  messages: {
    'CN': cn,
    'EN': en
  }
})

// 定义全局 i18n
window.i18n = i18n

export default i18n
