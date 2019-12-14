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

  renderDemoCard() {
    return this.props.demoObjectives.map((objective, index) => {
      return (
        <ObjectiveCard
          key={objective.label + index}
          objective={objective}
          objectiveIndex={index}
          onCardClick={this.openObjective}
          demo={this.props.demo}
          />
      )
    })
  }


  renderCard() {
    if(!this.props.demo) {
      return this.props.objectives.map((objective, index) => {
        return (
          <ObjectiveCard
            key={objective.id}
            objective={objective}
            objectiveIndex={index}
            onCardClick={this.openObjective}
            />
        )
      })
    } else {
      return this.renderDemoCard()
    }
  }

  renderNewCard() {
    if(!this.props.demo) {
      return (
        <NewObjectiveCard onCardClick={this.openNewObjective}/>
      )
    } else {
      return this.props.demoObjectives.length < 3 && (
        <NewObjectiveCard onCardClick={this.openNewObjective}/>
      )
    }

  }

  renderModal() {
    return (this.state.showModal && (
      <ObjectiveModal
        objective={this.state.selectedObjective}
        objectiveIndex={this.state.selectedIndex}
        onCardClose={this.closeObjective}
        demo={!!this.props.demo}/>
    )) ||
    (this.state.showNewModal && (
      <NewObjectiveModal
        onCardClose={this.closeNewObjective}
        demo={!!this.props.demo}/>
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
        {this.renderNewCard()}
      </Box>
    )
  }
}

const mapStateToProps = ({ objectives, demoObjectives }) => {
  return { objectives, demoObjectives }
}

export default connect(mapStateToProps)(ObjectiveList)
