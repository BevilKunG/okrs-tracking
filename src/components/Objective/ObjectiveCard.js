import React from 'react'
import { Box, Heading, Meter } from 'grommet'

const ObjectiveCard = ({ objective, onCardClick }) => {
  return (
    <Box
      direction='column'
      pad='medium'
      margin='medium'
      elevation='small'
      animation='fadeIn'
      onClick={() => onCardClick(objective)}
      hoverIndicator>
      <Heading>{objective.label}</Heading>
      <Meter
        values={[{
          value: objective.progress,
          label: `${objective.progress} %`,
        }]}/>
    </Box>
  )
}

export default ObjectiveCard
