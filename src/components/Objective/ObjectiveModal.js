import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateObjective } from '../../actions'
import { Layer, Box, Heading, Button, TextInput } from 'grommet'
import { Close } from 'grommet-icons'
import KeyResultList from '../KeyResult/KeyResultList'

class ObjectiveModal extends Component {
  state = {
    keyResults: [],
    keyResultLabel: '',
    isUpdate: false,
    addKeyResult: false,
    showAddButton: true
  }

  componentDidMount() {
    this.setState({ keyResults: this.props.objective.keyResults })
  }

  onCloseModal = () => {
    // firebase save
    if(this.state.isUpdate) {
      const { label } = this.props.objective

      let progress = Math.floor(
        this.state.keyResults
          .reduce((sum, keyResult) => sum + keyResult.progress, 0) /
          this.state.keyResults.length
      )

      console.log(progress);
      this.props.updateObjective(
          this.props.objectiveIndex,
          {
            label,
            progress,
            keyResults: this.state.keyResults
          }
      )
      this.setState({ isUpdate: false })
    }
    this.props.onCardClose()
  }

  onKeyResultUpdate = (keyResultIndex, updatedKeyResult) => {
    this.setState({
      keyResults: [
      ...this.state.keyResults.slice(0, keyResultIndex),
      updatedKeyResult,
      ...this.state.keyResults.slice(keyResultIndex + 1)
      ],
      isUpdate: true
    })
  }

  onKeyResultShow = () => {
    this.setState({
      addKeyResult: false,
      showAddButton: false
    })
  }

  onKeyResultHide = () => {
    this.setState({
      addKeyResult: false,
      showAddButton: true
    })
  }

  onAddClick = () => {
    if(this.state.keyResultLabel !== '') {
      this.handleKeyResult()
    }
    this.setState({ addKeyResult: !this.state.addKeyResult })
  }

  onKeyResultEnter = (e) => {
    if(e.key === 'Enter' && this.state.keyResultLabel !== '') {
      // save
      this.handleKeyResult()
    }
  }

  handleKeyResult = () => {
    let keyResult = {
      label: this.state.keyResultLabel,
      progress: 0,
      progressDetailList: []
    }
    this.setState({ keyResults: [...this.state.keyResults, keyResult] })
    this.setState({ keyResultLabel: '' })
  }

  renderAddButton() {
    return this.state.showAddButton && (
        <Button
          label='Add Key Result'
          margin={{vertical: 'medium', horizontal: 'xlarge'}}
          onClick={this.onAddClick}/>
    )
  }

  renderKeyResultInput() {
    return this.state.addKeyResult && (
      <TextInput
         placeholder='Key Result'
         value={this.state.keyResultLabel}
         onChange={(e) => this.setState({ keyResultLabel: e.target.value })}
         onKeyDown={this.onKeyResultEnter}/>
    )
  }

  render() {
    return (
      <Layer
        onEsc={this.onCloseModal}
        onClickOutside={this.onCloseModal}
        margin='xlarge'
        full>
        <Box
          direction='row'>
          <Box basis='3/4'>
            <Heading margin={{ left: 'medium'}}>{this.props.objective.label}</Heading>
          </Box>

          <Box
            basis='1/4'
            justify='center'
            align='center'
            onClick={this.props.onCardClose}
            hoverIndicator>
            <Close/>
          </Box>
        </Box>

        <Box margin={{ horizontal: 'large', top: 'medium'}}>
          <Box
            overflow='auto'
            height={{ max: 'medium' }}
            margin={{ vertical: 'small' }}>
            <KeyResultList
              keyResults={this.state.keyResults}
              onKeyResultUpdate={this.onKeyResultUpdate}
              onKeyResultShow={this.onKeyResultShow}
              onKeyResultHide={this.onKeyResultHide}/>
          </Box>
          {this.renderKeyResultInput()}
          {this.renderAddButton()}
        </Box>
      </Layer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateObjective
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ObjectiveModal)
