import React, { Component } from 'react'
import { Layer, Box, Heading } from 'grommet'
import { Close } from 'grommet-icons'

class ObjectiveModal extends Component {
  render() {
    return (
      <Layer>
        <Box
          direction='row'>
          <Box align='start'>
            <Heading >{'Objective'}</Heading>
          </Box>

          <Box justify='center' align='end'>
            <Close/>
          </Box>

        </Box>
      </Layer>
    )
  }
}

export default ObjectiveModal
