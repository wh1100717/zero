
import React, { Component, PropTypes } from 'react'
import 'codemirror/lib/codemirror.css'
import * as codemirror from 'codemirror'
import 'codemirror/mode/markdown/markdown'

import styles from './index.styl'
import withStyles from '../../../decorators/withStyles'

console.log(codemirror)

@withStyles(styles)
export default class Editor extends Component {
  static displayName = 'Editor'
  static PropTypes = {
    value: PropTypes.string.isRequired,
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
    let textareaNode = React.findDOMNode(this.refs.editor)
    this.editor = codemirror.fromTextArea(textareaNode, this.props.options)
  }
  render() {
    console.log("lalalalala", this.props)
    return (
      <div>
        <textarea ref='editor' defaultValue={this.props.value} autoComplete='off'>
        </textarea>
      </div>
    )
  }
}