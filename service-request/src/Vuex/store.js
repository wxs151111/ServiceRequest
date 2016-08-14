import Vue from 'vue'
import Vuex from 'vuex'
import addcount from './modules/addcount'
import request from './modules/request'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    addcount,
    request
  }
})
