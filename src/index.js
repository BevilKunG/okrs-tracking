import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers'
import App from './App'

const store = createStore(reducers)

const AppWithRedux = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<AppWithRedux/>, document.getElementById('root'))
