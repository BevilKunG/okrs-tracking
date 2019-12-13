import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUser, setObjectives, setLoading } from './actions'
import { Grommet } from 'grommet'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
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
        this.updateUserName(user)
        this.props.setUser(user)
        this.fetchFirestoreData(user)
      } else {
        this.props.setUser(null)
        this.props.setObjectives([])
      }
    })
  }

  updateUserName = (user) => {
    if(!user.displayName) {
      user.updateProfile({
        displayName: this.props.userName
      })
    }
  }

  fetchFirestoreData = (user) => {
    this.props.setLoading(true)
    firebase.firestore()
      .collection('userObjectives')
      .doc(user.uid)
      .collection('objectives')
      // .limit(6)
      .get()
      .then((querySnapshot) => {
        this.props.setLoading(false)
        this.props.setObjectives(querySnapshot.docs.map((doc) => doc.data()))
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

const mapStateToProps = ({ userName }) => {
  return { userName }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUser,
    setObjectives,
    setLoading
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
