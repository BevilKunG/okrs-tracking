import React, { Component } from 'react'
import { Box, Text, Meter } from 'grommet'
import { Up, Down } from 'grommet-icons'
import ProgressLog from '../ProgressDetail/ProgressLog'

class KeyResultList extends Component {
  state = {
    previousSelcted: -1,
    showKeyResult: false
  }

  onKeyResultSelect = (keyResultIndex) => {
    if(this.state.currentSelected === keyResultIndex) {
      this.props.onKeyResultHide()
      this.setState({
        showKeyResult: !this.state.showKeyResult,
        currentSelected: -1
      })
    } else {
      this.props.onKeyResultShow()
      this.setState({
        currentSelected: keyResultIndex,
        showKeyResult: true
      })
    }
  }

  renderCurrentLog(keyResult, keyResultIndex) {
    return  (
      <Box
        animation={{
          type: 'slideDown',
          duration: 300
        }}>
        <ProgressLog
          keyResult={keyResult}
          keyResultIndex={keyResultIndex}
          progressDetailList={keyResult.progressDetailList}
          onKeyResultUpdate={this.props.onKeyResultUpdate}/>
      </Box>
    )
  }

  renderProgressLog(keyResult, keyResultIndex) {
    return this.state.showKeyResult &&
      this.state.currentSelected === keyResultIndex &&
      this.renderCurrentLog(keyResult, keyResultIndex)
  }

  renderSign(keyResultIndex) {
    return this.state.currentSelected === keyResultIndex ? <Up/> : <Down/>
  }

  renderList() {
    return this.props.keyResults.map((keyResult, index) => {
      return (
        <Box
          key={keyResult.label}
          flex={false}>
          <Box
            direction='row'
            pad={{ vertical: 'medium'}}
            onClick={() => this.onKeyResultSelect(index)}>

            <Box basis='3/4'>
              <Text>{keyResult.label}</Text>
            </Box>

            <Box
              margin={{ right: 'small' }}>
              <Meter values={[{value: keyResult.progress}]}/>
            </Box>

            <Box>
              {this.renderSign(index)}
            </Box>

          </Box>
          {this.renderProgressLog(keyResult, index)}
        </Box>
      )
    })
  }

  render() {
    return (
      <Box>
        {this.renderList()}
      </Box>
    )
  }
}

export default KeyResultList
