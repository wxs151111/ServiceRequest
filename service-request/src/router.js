import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Request from './components/Request.vue'
/* eslint-disable no-new */
Vue.use(VueRouter)
var router = new VueRouter()
router.map({
  '/login': {
    name: 'login',
    component: Login,
    auth: true
  },
  '/request': {
    name: 'request',
    component: Request,
    auth: true
  }
})
router.beforeEach(function (transition) {
  if (transition.to.auth) {
    console.log('name:' + transition.to.name)
    if (transition.to.name === 'index') {
      console.log('go index')
      transition.next()
    } else {
      console.log('go login')
      transition.next()
    }
  }
})
router.redirect({
  '*': '/login'
})

export default router

