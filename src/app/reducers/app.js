const initialState = {
  editors: [{
    type: 'markdown',
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
    default:
      return state
  }
}