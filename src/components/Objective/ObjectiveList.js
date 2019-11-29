import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import ObjectiveCard from './ObjectiveCard'
import ObjectiveModal from './ObjectiveModal'

class ObjectiveList extends Component {
  state = {
    showModal: false
  }

  renderCard() {
    return this.props.objectives.map((objective, index) => {
      return (
        <ObjectiveCard
          key={objective.label + index}
          objective={objective}
          onCardClick={() => this.setState({ showModal: true })}/>
      )
    })
  }

  renderModal() {
    return this.state.showModal && (
      <ObjectiveModal/>
    )
  }

  render() {
    return (
      <Box direction='row'>
        {this.renderCard()}
        {this.renderModal()}
      </Box>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ObjectiveList)
