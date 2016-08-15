import router from '../../router.js'
const state = {
  status: 0
}

const mutations = {
  REXLOGIN (state) {
    state.status = 1
    router.go({name: 'request'})
  }
}
export default {
  state,
  mutations
}
