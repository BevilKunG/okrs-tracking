import React from 'react'
import { Box, Heading, Meter, Text } from 'grommet'
import { Add } from 'grommet-icons'

const NewObjectiveCard = ({ onCardClick }) => {
  return (
    <Box
      direction='column'
      pad='medium'
      margin='medium'
      elevation='small'
      animation='fadeIn'
      onClick={onCardClick}
      hoverIndicator>

      <Heading>
        <Add/>
        {'New Objective'}
      </Heading>

    </Box>
  )
}

export default NewObjectiveCard
