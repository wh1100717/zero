import 'normalize.css/normalize.css'
import '../libs/rfontawesome/index.less'

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './frame.css'
import withStyles from '../decorators/withStyles'

import Notebook from '../components/notebook'
import Preview from '../components/preview'

const Actions = {}

@withStyles(styles)
class Frame extends Component {

  static PropTypes = {
    editors: PropTypes.array
  }

  componentDidMount () {
  }

  render () {
    const {editors} = this.props
    return (
      <div id='frame'>
        <Notebook editors={editors}/>
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
