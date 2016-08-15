import Vue from 'vue'
import App from './App'
import store from './Vuex/store'
import VueRouter from 'vue-router'
import router from './router'
/* eslint-disable no-new */
Vue.use(VueRouter)
var myApp = Vue.extend({
  components: {
    App
  },
  store
})
router.start(myApp, 'body')
