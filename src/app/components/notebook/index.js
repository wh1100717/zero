import React, { Component } from 'react'
import styles from './index.styl'
import withStyles from '../../decorators/withStyles'
import { Datepicker, message } from 'antd'

import NBToolbar from './nbToolbar'
import Editor from './editor'

@withStyles(styles)
export default class Preview extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    this.setState({
      date: ''
    })
  }
  _handleChange (value) {
    message.info('您选择的日期是: ' + value.toString())
    this.setState({
      date: value
    })
  }
  render() {
    const editorValue = `
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

    const editorOptions = {
      lineNumbers: true,
      mode: 'text/x-markdown',
      lineWrapping: true
    }
    return (
      <div id="notebook">
        <NBToolbar />
        <Editor value={editorValue} options={editorOptions}/>
        <Datepicker onSelect={::this._handleChange}/>
        <div style={{marginTop: 20}}>当前日期：{this.state.date.toString()}</div>
      </div>
    )
  }
}