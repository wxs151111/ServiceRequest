export const addTest = makeAction('ADD_TEST')
export const submit = makeAction('SUBMIT')
export const rexlogin = makeAction('REXLOGIN')
function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}

