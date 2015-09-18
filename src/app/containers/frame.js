import '../libs/rfontawesome/index.less'

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import styles from './frame.css'
import withStyles from '../decorators/withStyles'

import Notebook from '../components/notebook'
import Preview from '../components/preview'

const Actions = {}

@withStyles(styles)
class Frame extends Component {

  componentDidMount () {
  }

  render () {
    return (
      <div id='frame'>
        <Notebook />
        <Preview />
      </div>
    )
  }
}

function mapState (state) {
  return {
    // isLoading: state.isLoading,
  }
}

function mapDispatch (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapState, mapDispatch)(Frame)
