import React from 'react'
import { Layer, Box, Heading } from 'grommet'
import { Close } from 'grommet-icons'
import KeyResultList from '../KeyResult/KeyResultList'

const ObjectiveModal = (props) => {
  return (
    <Layer
      onEsc={props.onCardClose}
      onClickOutside={props.onCardClose}
      margin='xlarge'
      full>
      <Box
        direction='row'>
        <Box basis='3/4'>
          <Heading margin={{ left: 'medium'}}>{props.objective.label}</Heading>
        </Box>

        <Box
          basis='1/4'
          justify='center'
          align='center'
          onClick={props.onCardClose}
          hoverIndicator>
          <Close/>
        </Box>
      </Box>

      <Box margin={{ horizontal: 'large', top: 'medium'}}>
        <KeyResultList keyResults={props.objective.keyResults}/>
      </Box>
    </Layer>
  )
}

export default ObjectiveModal
