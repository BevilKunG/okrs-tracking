import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateObjective } from '../../actions'
import { Layer, Box, Heading } from 'grommet'
import { Close } from 'grommet-icons'
import KeyResultList from '../KeyResult/KeyResultList'

class ObjectiveModal extends Component {
  state = {
    keyResults: [],
    isUpdate: false
  }

  componentDidMount() {
    this.setState({ keyResults: this.props.objective.keyResults })
  }

  onCloseModal = () => {
    // firebase save
    if(this.state.isUpdate) {
      const { label, progress } = this.props.objective
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

  onProgressDetailAdd = (keyResultIndex, updatedKeyResult) => {
    this.setState({
      keyResults: [
      ...this.state.keyResults.slice(0, keyResultIndex),
      updatedKeyResult,
      ...this.state.keyResults.slice(keyResultIndex + 1)
      ],
      isUpdate: true
    })
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
          <KeyResultList
            keyResults={this.state.keyResults}
            onProgressDetailAdd={this.onProgressDetailAdd}/>
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
