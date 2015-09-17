import React, { Component } from 'react'
import styles from './index.css'
import withStyles from '../../decorators/withStyles'
import { Datepicker, message } from 'antd'

@withStyles(styles)
export default class Notebook extends Component {
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
      <div id="notebook" style={{width: 400, margin: '100px auto'}}>
        <Datepicker onSelect={::this._handleChange} />
        <div style={{marginTop: 20}}>当前日期：{this.state.date.toString()}</div>
      </div>
    )
  }
}