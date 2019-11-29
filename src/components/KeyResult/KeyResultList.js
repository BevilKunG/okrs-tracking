import React, { Component } from 'react'
import { Box, Accordion, AccordionPanel } from 'grommet'
import ProgressLog from '../ProgressDetail/ProgressLog'

class KeyResultList extends Component {
  renderCard() {
    return this.props.keyResults.map((keyResult) => {
      return (
        <AccordionPanel
          key={keyResult.label}
          label={keyResult.label}
          >
          <Box>
            <ProgressLog progressDetailList={keyResult.progressDetailList}/>
          </Box>
        </AccordionPanel>
      )
    })
  }

  render() {
    return (
      <Accordion>
          {this.renderCard()}
      </Accordion>
    )
  }
}

export default KeyResultList
