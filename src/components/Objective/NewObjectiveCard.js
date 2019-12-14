import React from 'react'
import { Box, Heading } from 'grommet'
import { Add } from 'grommet-icons'

const NewObjectiveCard = ({ onCardClick }) => {
  return (
    <Box
      direction='column'
      basis='medium'
      margin='medium'
      elevation='small'
      animation='fadeIn'
      background='dark-3'
      onClick={onCardClick}
      hoverIndicator='dark-2'>
      <Box pad={{ horizontal: 'medium', vertical: 'large' }}>
        <Heading>
          <Add/>
          {'New Objective'}
        </Heading>
      </Box>
    </Box>
  )
}

export default NewObjectiveCard
