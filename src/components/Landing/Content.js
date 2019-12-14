import React from 'react'
import { Box, Image, Heading } from 'grommet'
import ObjectiveList from '../Objective/ObjectiveList'
import dream from '../../images/dream_1.png'
import peakMountain from '../../images/peak_mountain_3.png'

const LandingContent = () => {
  return (
    <Box fill='horizontal'>
      <Box
        margin={{ vertical: 'xlarge' }}
        align='center'>
        <Image
          src={dream}/>
        <Heading>{'2020 New Year Resolution with OKRs'}</Heading>
      </Box>

      <Box
        margin={{ vertical: 'xlarge' }}
        align='center'>
        <Image
          src={peakMountain}/>
          <Box>
            <Heading>{'Objective - Where you want to go'}</Heading>
            <Heading>{'Key Result - How you get there'}</Heading>
          </Box>
      </Box>

      <Box
        margin={{ vertical: 'xlarge' }}
        fill='horizontal'>
        <Heading margin={{ left: 'large' }}>{'Let\'s try it'}</Heading>
        <ObjectiveList demo/>
      </Box>

    </Box>
  )
}

export default LandingContent
