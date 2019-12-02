import React, { Component } from 'react'
import { Box, Text, Button, TextInput } from 'grommet'
import { StatusGoodSmall } from 'grommet-icons'

class ProgressLog extends Component {

  state = {
    progressDetailList: [],
    progressDetailLabel: '',
    addProgressDetail: false
  }

  componentDidMount() {
    this.setState({
      progressDetailList: this.props.progressDetailList
    })
  }

  onAddClick = () => {
    if(this.state.addProgressDetail && this.state.progressDetailLabel !== '') {
      this.handleProgressDetailList()
    }
    this.setState({ addProgressDetail: !this.state.addProgressDetail })
  }

  onProgressDetailEnter = (e) => {
    if(e.key === 'Enter' && this.state.progressDetailLabel !== '') {
      this.handleProgressDetailList()
    }
  }

  handleProgressDetailList = () => {
    let progressDetail = {
      label: this.state.progressDetailLabel,
      progress: 0
    }

    this.setState({
      progressDetailList: [...this.state.progressDetailList, progressDetail],
      progressDetailLabel: ''
    })

    // update back to modal
    let updatedKeyResult = {...this.props.keyResult}
    updatedKeyResult.progressDetailList = [...this.state.progressDetailList, progressDetail]
    this.props.onProgressDetailAdd(this.props.keyResultIndex, updatedKeyResult)
  }

  renderAddButton() {
    return (
      <Button
        margin={{vertical: 'medium', horizontal: 'xlarge'}}
        label='Update Log'
        onClick={this.onAddClick}/>
    )
  }

  renderProgressDetailInput() {
    return this.state.addProgressDetail && (
      <TextInput
        placeholder='Progress Log'
        value={this.state.progressDetailLabel}
        onChange={(e) => this.setState({ progressDetailLabel: e.target.value })}
        onKeyDown={this.onProgressDetailEnter}/>
    )
  }

  renderList() {
    return this.state.progressDetailList.map((progressDetail) => {
      return (
        <Box
          key={progressDetail.label}
          direction='row'
          flex={false}
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
    <Box>
      <Box
        margin={{ vertical: 'small' }}
        height={{ max: 'small' }}
        overflow='auto'>
        {this.renderList()}
      </Box>
      {this.renderProgressDetailInput()}
      {this.renderAddButton()}
    </Box>
    )
  }
}

export default ProgressLog
