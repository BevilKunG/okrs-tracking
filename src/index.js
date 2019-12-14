import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { HashRouter } from 'react-router-dom'
import reducers from './reducers'
import App from './App'

const store = createStore(reducers)

const AppWithRedux = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  )
}

ReactDOM.render(<AppWithRedux/>, document.getElementById('root'))
