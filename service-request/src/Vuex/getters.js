export function getCount (state) {
  console.log('getters' + state.addcount.count)
  return state.addcount.count
}
