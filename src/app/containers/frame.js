import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Notebook from '../components/notebook'

const Actions = {}

class Frame extends Component {

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <Notebook />
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
