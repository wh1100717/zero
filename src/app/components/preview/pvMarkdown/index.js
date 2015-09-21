import React, { Component, PropTypes } from 'react'

import marked from 'marked'

import highlight from 'highlight.js'

import styles from './index.styl'
import withStyles from '../../../utils/decorators/withStyles'

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code, abc) {
    console.log("code: ", code, abc)
    return highlight.highlightAuto(code).value
  }
})

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
    const html = marked(value + '\n\n```javascript\nconsole.log(123)```')
    return (
      <div className='markdown-body' dangerouslySetInnerHTML={{__html: html}}/>
    )
  }
}