import React, { Component } from 'react'
import styles from './index.css'
import withStyles from '../../../utils/decorators/withStyles'

@withStyles(styles)
export default class PVToolbar extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
  }
  render() {
    return (
      <div id="PVToolbar">
        This is PVToolbar
      </div>
    )
  }
}