import React, { Component } from 'react'
import styles from './index.styl'
import withStyles from '../../../utils/decorators/withStyles'

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
        <i className="fa fa-plus"></i>
        <i className="fa fa-italic"></i>
        <i className="fa fa-link"></i>
        <i className="fa fa-th-large"></i>
      </div>
    )
  }
}