import React from 'react'
import { connect } from 'react-redux'
import { ThemeContext, Box } from 'grommet'
import { styles } from '../../styles'
import Header from './Header'

const Layout = ({ children, objectives }) => {
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
        fill={objectives.length === 0}>
        <Header/>
        {children}
      </Box>
    </ThemeContext.Extend>
  )
}

const mapStateToProps = ({ objectives }) => {
  return { objectives }
}

export default connect(mapStateToProps)(Layout)
