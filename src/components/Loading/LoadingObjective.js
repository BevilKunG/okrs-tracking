import React from 'react'
import { Box } from 'grommet'
import { SquareLoader } from 'react-spinners'

const LoadingObjective = ({ loading }) => {
  return (
    <Box
      direction='row'
      margin='medium'
      wrap>
      <Box margin={{ vertical: 'xlarge' }}>
        <SquareLoader
          color='white'
          loading={loading}/>
      </Box>
    </Box>
  )
}

export default LoadingObjective
