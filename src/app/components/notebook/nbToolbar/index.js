import React, { Component } from 'react'
import styles from './index.css'
import withStyles from '../../../decorators/withStyles'

@withStyles(styles)
export default class NBToolbar extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
  }
  render() {
    return (
      <div id="NBToolbar">
        This is NBToolbar
      </div>
    )
  }
}