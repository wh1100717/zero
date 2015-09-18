import React, { Component } from 'react'
import styles from './index.styl'
import withStyles from '../../decorators/withStyles'

import NBToolbar from './nbToolbar'
import Editor from './editor'

@withStyles(styles)
export default class Preview extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
  }
  render() {
    const { editors } = this.props

    const editorDOM = []
    for (const editor of editors) {
      editorDOM.push(<Editor value={editor.value} type={editor.type}/>)
    }

    return (
      <div id="notebook">
        <NBToolbar />
        {{editorDOM}}
      </div>
    )
  }
}