import * as types from '../ActionTypes'

const initialState = {
  editors: [{
    type: 'markdown',
    index: 0,
    value: `
# Hello World

-------------------

**Editor** Lsjakdsfjal jaskldfjakl  adsfjkl 

* daskjfalds
* fsdakf;LaTeX
* asdfjio
- fjadosjfioweaj
- fjioaifja


> adsjfiaosdjfasdilo [jkalfsd](http://asdfa.fwe.safv)
`
  }, {
    type: 'markdown',
    index: 1,
    value: `
# Hello World1111

-------------------

**Editor** Lsjakdsfjal jaskldfjakl  adsfjkl 

* daskjfalds
* fsdakf;LaTeX
* asdfjio
- fjadosjfioweaj
- fjioaifja

> adsjfiaosdjfasdilo [jkalfsd](http://asdfa.fwe.safv)
`
  }]
}

export default function app (state = initialState, action) {
  switch (action.type) {
    case types.SYNC_EDITOR:
      return syncEditor(state, action)
    default:
      return state
  }
}

function syncEditor (state, action) {
  let editors = state.editors
  editors[action.index] = {
    value: action.value,
    type: action.markdownType
  }
  let newState = Object.assign({}, state, {
    editors: [...editors]
  })
  return newState
}