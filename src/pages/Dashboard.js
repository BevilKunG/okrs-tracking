import React from 'react'
import { Box, Heading } from 'grommet'
import ObjectiveList from '../components/Objective/ObjectiveList'

const Dashboard = () => {
  return (
    <Box align='center'>
      <Heading textAlign='center'>{'Dashboard'}</Heading>
      <ObjectiveList/>
    </Box>
  )
}

export default Dashboard
