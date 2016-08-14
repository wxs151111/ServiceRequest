export const addTest = makeAction('ADD_TEST')
export const submit = makeAction('SUBMIT')
function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}

