import 'normalize.css/normalize.css'
import '../libs/rfontawesome/index.less'

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './frame.css'
import withStyles from '../utils/decorators/withStyles'

import Notebook from '../components/notebook'
import Preview from '../components/preview'

import * as Actions from '../flows/actions/app'


@withStyles(styles)
class Frame extends Component {

  static PropTypes = {
    editors: PropTypes.array
  }

  constructor (props, context) {
    super(props, context)
  }

  render () {
    console.log(this.props)
    const {editors, actions} = this.props
    return (
      <div id='frame'>
        <Notebook editors={editors} syncEditor={actions.syncEditor}/>
        <Preview editors={editors}/>
      </div>
    )
  }
}

function mapState (state) {
  return {
    editors: state.app.editors
  }
}

function mapDispatch (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapState, mapDispatch)(Frame)
