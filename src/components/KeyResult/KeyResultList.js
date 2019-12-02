import React, { Component } from 'react'
import { Box, Accordion, AccordionPanel } from 'grommet'
import ProgressLog from '../ProgressDetail/ProgressLog'

class KeyResultList extends Component {
  renderPanel() {
    return this.props.keyResults.map((keyResult, index) => {
      return (
        <AccordionPanel
          key={keyResult.label}
          label={keyResult.label}
          >
          <Box>
            <ProgressLog
              keyResult={keyResult}
              keyResultIndex={index}
              progressDetailList={keyResult.progressDetailList}
              onKeyResultUpdate={this.props.onKeyResultUpdate}/>
          </Box>
        </AccordionPanel>
      )
    })
  }

  render() {
    return (
        <Accordion>
            {this.renderPanel()}
        </Accordion>
    )
  }
}

export default KeyResultList
