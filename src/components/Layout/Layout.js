import React from 'react'
import { ThemeContext, Box } from 'grommet'
import { styles } from '../../styles'
import Header from './Header'

const Layout = ({ children }) => {
  const { colors } = styles
  return (
    <ThemeContext.Extend
      value={{
        global: {
          colors: {
            'layout-background': colors.YANKEES_BLUE,
            'card-background-1': colors.FOLLY,
            'card-background-2': colors.ORANGE_WEB,
            'card-background-3': colors.MEDIUM_SEA_GREEN,
            'card-background-4': colors.PICTION_BLUE,
          }
        }
      }}>
      <Box
        align='center'
        background='layout-background'
        height={{ min: 'xlarge' }}>
        <Header/>
        {children}
      </Box>
    </ThemeContext.Extend>
  )
}

export default Layout
