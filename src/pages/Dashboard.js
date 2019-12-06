import React from 'react'
import { Box, Heading } from 'grommet'
import Layout from '../components/Layout/Layout'
import ObjectiveList from '../components/Objective/ObjectiveList'

const Dashboard = () => {
  return (
    <Layout>
      <Heading textAlign='center'>{'Dashboard'}</Heading>
      <ObjectiveList/>
    </Layout>
  )
}

export default Dashboard
