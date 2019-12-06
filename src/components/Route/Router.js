import React from 'react'
import { Switch } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Landing from '../../pages/Landing'
import Dashboard from '../../pages/Dashboard'

const Router = () => {
  return (
    <Switch>
      <PublicRoute path='/' component={Landing} restricted exact/>
      <PrivateRoute path='/dashboard' component={Dashboard} exact/>
    </Switch>
  )
}

export default Router
