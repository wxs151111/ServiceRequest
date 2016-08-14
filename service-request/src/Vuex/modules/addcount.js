  const state = {
    count: 0
  }
  const mutations = {
    ADD_TEST (state) {
      console.log('mutations' + state.count)
      state.count = state.count + 1
      console.log('mutations after' + state.count)
    }
  }
  export default {
    state,
    mutations
  }
