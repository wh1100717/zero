import 'babel/polyfill'
import React from 'react'
import * as Redux from 'redux'
import * as ReduxTools from 'redux-devtools'
import * as ReactDevTools from 'redux-devtools/lib/react'
import * as ReactRedux from 'react-redux'
import * as reducers from './flows/reducers'
import thunk from 'redux-thunk'

import Frame from './containers/frame'

// http://rackt.github.io/redux/docs/api/compose.html
const createStore = Redux.compose(
  ReduxTools.devTools(),
  ReduxTools.persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  Redux.createStore
)

// http://rackt.github.io/redux/docs/api/applyMiddleware.html
const createStoreWithMiddleware = Redux.applyMiddleware(thunk)(createStore)

// http://rackt.github.io/redux/docs/api/combineReducers.html
const reducer = Redux.combineReducers(reducers)

const store = createStoreWithMiddleware(reducer)

class App extends React.Component {
  render () {
    return (
      <div>
        <ReactRedux.Provider store={store}>
          {() => <Frame />}
        </ReactRedux.Provider>
      {/*
        <ReactDevTools.DebugPanel top right bottom>
          <ReactDevTools.DevTools store={store}
              monitor={ReactDevTools.LogMonitor} />
        </ReactDevTools.DebugPanel>
      */}
      </div>
    )
  }
}

React.render(
  <App />,
  document.getElementById('app')
)
