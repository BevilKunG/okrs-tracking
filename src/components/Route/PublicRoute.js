import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, restricted, user, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      user && restricted ?
      <Redirect to='/dashboard'/> :
      <Component {...props}/>
    )}/>
  )
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps)(PublicRoute)
