import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addObjective } from '../../actions'
import { Layer, Box, Heading, TextInput, Button } from 'grommet'
import { Close } from 'grommet-icons'
import KeyResultList from '../KeyResult/KeyResultList'
import firebase from 'firebase/app'
import 'firebase/firestore'

class NewObjectiveModal extends Component {
  state = {
    objectiveLabel: '',
    keyResultLabel: '',
    keyResults: [],
    editHeading: true,
    addKeyResult: false,
    showAddButton: false
  }

  saveReduxStore = (objective, objectiveId) => {
    this.props.addObjective({
      id: objectiveId,
      ...objective
    })
  }

  saveFirestore = (objective) => {
    const docRef = firebase.firestore()
                    .collection('userObjectives')
                    .doc(this.props.user.uid)
                    .collection('objectives')
                    .doc()

    docRef.set({
      id: docRef.id,
      ...objective
    })

    return docRef.id
  }

  onCloseModal = () => {
    if(this.state.objectiveLabel !== '') {
      let progress = Math.floor(
        this.state.keyResults
          .reduce((sum, keyResult) => sum + keyResult.progress, 0) /
          this.state.keyResults.length
      )
      let objective = {
        label: this.state.objectiveLabel,
        progress,
        keyResults: this.state.keyResults
      }

      const objectiveId = this.saveFirestore(objective)
      this.saveReduxStore(objective, objectiveId)

    }
    this.props.onCardClose()
  }

  onKeyResultUpdate = (keyResultIndex, updatedKeyResult) => {
    this.setState({ keyResults: [
      ...this.state.keyResults.slice(0, keyResultIndex),
      updatedKeyResult,
      ...this.state.keyResults.slice(keyResultIndex + 1)
    ] })
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

  onObjectiveChange = (e) => {
    this.setState({
      objectiveLabel: e.target.value,
      showAddButton: e.target.value !== ''
    })
  }

  onObjectiveEnter = (e) => {
    if(e.key === 'Enter' && this.state.objectiveLabel !== '') {
      this.setState({ editHeading: false })
      // dispatch to store
    }
  }

  onKeyResultEnter = (e) => {
    if(e.key === 'Enter' && this.state.keyResultLabel !== '') {
      // save
      this.handleKeyResult()
    }
  }

  onAddClick = () => {
    if(this.state.keyResultLabel !== '') {
      this.handleKeyResult()
    }
    this.setState({ addKeyResult: !this.state.addKeyResult })
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

  renderHeading() {
    return this.state.editHeading ? (
      <TextInput
        placeholder='Objective Title'
        value={this.state.objectiveLabel}
        onChange={this.onObjectiveChange}
        onKeyDown={this.onObjectiveEnter}/>
    )  : (
      this.state.objectiveLabel
    )
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
            <Heading
              margin={{ left: 'medium'}}
              onClick={() => this.setState({ editHeading: true })}>
              {this.renderHeading()}
            </Heading>
          </Box>

          <Box
            basis='1/4'
            justify='center'
            align='center'
            onClick={this.onCloseModal}
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

const mapStateToProps = ({ user }) => {
  return { user }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addObjective
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewObjectiveModal)
