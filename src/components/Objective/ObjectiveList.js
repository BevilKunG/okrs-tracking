import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import ObjectiveCard from './ObjectiveCard'
import ObjectiveModal from './ObjectiveModal'
import NewObjectiveCard from './NewObjectiveCard'
import NewObjectiveModal from './NewObjectiveModal'

class ObjectiveList extends Component {
  state = {
    showModal: false,
    showNewModal: false,
    selectedObjective: null
  }

  openObjective = (objective) => {
    this.setState({ showModal: true, selectedObjective: objective })
  }

  closeObjective = () => {
    this.setState({ showModal: false, selectedObjective: null })
  }

  openNewObjective = () => {
    this.setState({ showNewModal: true })
  }

  closeNewObjective = () => {
    this.setState({ showNewModal: false })
  }


  renderCard() {
    return this.props.objectives.map((objective, index) => {
      return (
        <ObjectiveCard
          key={objective.label + index}
          objective={objective}
          onCardClick={this.openObjective}/>
      )
    })
  }

  renderModal() {
    return (this.state.showModal && (
      <ObjectiveModal
        objective={this.state.selectedObjective}
        onCardClose={this.closeObjective}/>
    )) ||
    (this.state.showNewModal && (
      <NewObjectiveModal onCardClose={this.closeNewObjective}/>
    ))
  }

  render() {
    return (
      <Box
        direction='row'
        margin='medium' 
        wrap>
        {this.renderCard()}
        {this.renderModal()}
        <NewObjectiveCard onCardClick={this.openNewObjective}/>
      </Box>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ObjectiveList)
