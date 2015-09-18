import React, { Component } from 'react'
import styles from './index.styl'
import withStyles from '../../decorators/withStyles'
import { Datepicker, message } from 'antd'

import PVToolbar from './pvToolbar'
import PVMarkdown from './pvMarkdown'

@withStyles(styles)
export default class Notebook extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
  }
  render() {
    const { editors } = this.props
    const previewDOM = []
    for (const editor of editors) {
      if (editor.type === 'markdown') {
        previewDOM.push(<PVMarkdown value={editor.value}/>)
      }
    }
    return (
      <div id="preview">
        <PVToolbar />
        <div className="pv-content">
          {previewDOM}
        </div>
      </div>
    )
  }
}