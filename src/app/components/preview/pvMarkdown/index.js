import React, { Component, PropTypes } from 'react'

import * as markdown from 'markdown'

import styles from './index.styl'
import withStyles from '../../../decorators/withStyles'

@withStyles(styles)
export default class PVMarkdown extends Component {
  static displayName = 'PVMarkdown'
  static PropTypes = {
    value: PropTypes.string.isRequired
  }
  constructor (props) {
    super(props)
  }
  render() {
    const { value } = this.props
    const html = markdown.parse(value)
    var a = '```javascript\nconsole.log(123)```'
    console.log(markdown.parse(a))
    return (
      <div className='markdown-body' dangerouslySetInnerHTML={{__html: html}}/>
    )
  }
}