import React, { Component } from 'react'
import { Box, Text, Button, TextInput } from 'grommet'
import { StatusGoodSmall } from 'grommet-icons'

class ProgressLog extends Component {

  state = {
    progressDetailList: [],
    progressDetailLabel: '',
    currentProgress: -1,
    addProgressDetail: false,
    mouseOverBullet: false,
    updateProgress: false,
  }

  componentDidMount() {
    this.setState({
      progressDetailList: this.props.progressDetailList
    })
  }

  onProgressChange = (e) => {
    let progress = e.target.value === '' ? 0 : parseInt(e.target.value)
    if(progress >= 0 && progress <= 100) {
      this.setState({ currentProgress: progress })
    }
  }

  onAddClick = () => {
    if(this.state.addProgressDetail && this.state.progressDetailLabel !== '') {
      this.handleProgressDetailList()
    }
    this.setState({ addProgressDetail: !this.state.addProgressDetail })
  }

  onBulletClick = () => {
    if(this.state.currentProgress === -1) {
      this.setState({ currentProgress: this.props.keyResult.progress })
    }

    if(this.state.updateProgress && this.state.currentProgress !== this.props.keyResult.progress) {
      this.handleProgress()
    }

    this.setState({
      updateProgress: !this.state.updateProgress,
    })
  }

  onProgressDetailEnter = (e) => {
    if(e.key === 'Enter' && this.state.progressDetailLabel !== '') {
      this.handleProgressDetailList()
    }
  }

  onProgressEnter = (e) => {
    if(e.key === 'Enter' && this.state.currentProgress !== this.props.keyResult.progress) {
      this.handleProgress()
    }
  }

  handleProgressDetailList = () => {
    let progressDetail = {
      label: this.state.progressDetailLabel,
      // progress: 0
    }

    this.setState({
      progressDetailList: [...this.state.progressDetailList, progressDetail],
      progressDetailLabel: ''
    })

    // update back to modal
    let updatedKeyResult = {...this.props.keyResult}
    updatedKeyResult.progressDetailList = [...this.state.progressDetailList, progressDetail]
    this.props.onKeyResultUpdate(this.props.keyResultIndex, updatedKeyResult)
  }

  handleProgress() {
    let updatedKeyResult = {...this.props.keyResult}
    updatedKeyResult.progress = this.state.currentProgress
    this.props.onKeyResultUpdate(this.props.keyResultIndex, updatedKeyResult)

    this.setState({
      updateProgress: false
    })
  }

  renderAddButton() {
    return !this.state.updateProgress && (
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

  renderProgressInput(progressDetailIndex) {
    return (
      progressDetailIndex === this.state.progressDetailList.length - 1 &&
      this.state.updateProgress) && (
      <Box
        basis='1/4'
        margin={{ right: 'small' }}>
        <TextInput
          placeholder='Progress(%)'
          value={this.state.currentProgress}
          onChange={this.onProgressChange}
          onKeyDown={this.onProgressEnter}/>
      </Box>
    )
  }

  renderProgressBullet(progressDetailIndex) {
    return !this.state.addProgressDetail &&
    progressDetailIndex === this.state.progressDetailList.length - 1? (
      <StatusGoodSmall
        color={
          !this.state.updateProgress ?
          (this.state.mouseOverBullet ? 'accent-4' : 'accent-1') :
          'accent-4'
         }
        onMouseOver={() => this.setState({ mouseOverBullet: true })}
        onMouseLeave={() => this.setState({ mouseOverBullet: false })}
        onClick={this.onBulletClick}/>
    ) : (
      <StatusGoodSmall color='accent-1'/>
    )
  }

  renderList() {
    return this.state.progressDetailList.map((progressDetail, index) => {
      return (
        <Box
          key={progressDetail.label + index}
          direction='row'
          flex={false}
          margin={{ vertical: 'medium' }}>
          <Box>
            {this.renderProgressBullet(index)}
          </Box>

          <Box basis='3/4'>
            <Text
              margin={{ left: 'medium'}}>
              {progressDetail.label}
            </Text>
          </Box>

          {this.renderProgressInput(index)}
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
