import React, { Component } from 'react'
import styles from './index.styl'
import withStyles from '../../decorators/withStyles'
import { Datepicker, message } from 'antd'

import NBToolbar from './nbToolbar'

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
    return (
      <div id="notebook">
        <NBToolbar />
        <Datepicker onSelect={::this._handleChange} />
        <div style={{marginTop: 20}}>当前日期：{this.state.date.toString()}</div>
      </div>
    )
  }
}