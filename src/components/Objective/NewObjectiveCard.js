import React from 'react'
import { Box, Heading } from 'grommet'
import { Add } from 'grommet-icons'

const NewObjectiveCard = ({ onCardClick }) => {
  return (
    <Box
      direction='column'
      basis='medium'
      pad='medium'
      margin='medium'
      elevation='small'
      animation='fadeIn'
      onClick={onCardClick}
      background='dark-3'
      hoverIndicator={{ color: 'dark-2' }}>

      <Heading>
        <Add/>
        {'New Objective'}
      </Heading>

    </Box>
  )
}

export default NewObjectiveCard
