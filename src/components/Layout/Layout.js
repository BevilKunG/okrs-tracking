import React from 'react'
import { Box } from 'grommet'
import Header from './Header'

const Layout = (props) => {
  return (
    <Box align='center'>
      <Header/>
      {props.children}
    </Box>
  )
}

export default Layout
