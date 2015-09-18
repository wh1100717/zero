import React, { Component, PropTypes } from 'react'
import 'codemirror/lib/codemirror.css'
import * as codemirror from 'codemirror'
import 'codemirror/mode/markdown/markdown'

import styles from './index.styl'
import withStyles from '../../../decorators/withStyles'

@withStyles(styles)
export default class Editor extends Component {
  static displayName = 'Editor'
  static PropTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.object
  }
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    this.setState({
      isFocused: false
    })
  }
  componentDidMount () {
    let { editor, type, options } = this.props
    let textareaNode = React.findDOMNode(this.refs.editor)
    options = options || {
        lineNumbers: true,
        lineWrapping: true
    }
    if (type === 'markdown') {
      options.mode = 'text/x-markdown'
    }
    this.editor = codemirror.fromTextArea(textareaNode, options)
  }
  render() {
    const { value } = this.props
    return (
      <div className='editor'>
        <textarea ref='editor' defaultValue={value} autoComplete='off'>
        </textarea>
      </div>
    )
  }
}