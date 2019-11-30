import React, { Component } from 'react'
import { Box, Text } from 'grommet'
import { StatusGoodSmall } from 'grommet-icons'

class ProgressLog extends Component {
  renderList() {
    return this.props.progressDetailList.map((progressDetail) => {
      return (
        <Box
          key={progressDetail.label}
          direction='row'
          margin={{ vertical: 'medium' }}>
          <Box>
            <StatusGoodSmall color='accent-1'/>
          </Box>

          <Box>
            <Text margin={{ left: 'medium'}}>
              {progressDetail.label}
            </Text>
          </Box>
        </Box>
      )
    })
  }

  render() {
    return (
      <>
      {this.renderList()}
      </>
    )
  }
}

export default ProgressLog
