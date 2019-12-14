import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
       user ?
      <Component {...props}/> :
      <Redirect to='/'/>
    )}/>
  )
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps)(PrivateRoute)
