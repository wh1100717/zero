import React, { Component } from 'react'
import styles from './index.css'
import withStyles from '../../decorators/withStyles'
import { Datepicker, message } from 'antd'

import PVToolbar from './pvToolbar'

@withStyles(styles)
export default class Notebook extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
  }
  render() {
    return (
      <div id="preview">
        <PVToolbar />
        Preivew Section
      </div>
    )
  }
}