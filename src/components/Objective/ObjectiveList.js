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
    selectedObjective: null,
    selectedIndex: null
  }

  openObjective = (objectiveIndex, objective) => {
    this.setState({
      showModal: true,
      selectedObjective: objective,
      selectedIndex: objectiveIndex
     })
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
          key={objective.id}
          objective={objective}
          objectiveIndex={index}
          onCardClick={this.openObjective}/>
      )
    })
  }

  renderModal() {
    return (this.state.showModal && (
      <ObjectiveModal
        objective={this.state.selectedObjective}
        objectiveIndex={this.state.selectedIndex}
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
        margin={{ vertical: 'medium', horizontal: 'large'}}
        wrap>
        {this.renderCard()}
        {this.renderModal()}
        <NewObjectiveCard onCardClick={this.openNewObjective}/>
      </Box>
    )
  }
}

const mapStateToProps = ({ objectives }) => {
  return { objectives }
}

export default connect(mapStateToProps)(ObjectiveList)
