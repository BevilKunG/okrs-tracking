import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUser } from './actions'
import { Grommet } from 'grommet'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import { firebaseConfig } from './config'
import Router from './components/Route/Router'

class App extends Component {
  constructor(props) {
    super(props)
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.props.setUser(user)
      } else {
        this.props.setUser(null)
      }
    })
  }


  render() {
    return (
      <Grommet full>
        <Router/>
      </Grommet>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
