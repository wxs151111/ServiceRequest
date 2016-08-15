export function getCount (state) {
  console.log('getters' + state.addcount.count)
  return state.addcount.count
}
export function getStatus (state) {
  return state.rexlogin.status
}
