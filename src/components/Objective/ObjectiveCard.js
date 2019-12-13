import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteObjective } from '../../actions'
import { Box, Heading, Meter, Menu } from 'grommet'
import { More } from 'grommet-icons'
import firebase from 'firebase/app'
import 'firebase/firestore'

class ObjectiveCard extends Component {
  state = {
    cardBackground: '',
    mouseOverMore: false
  }

  componentDidMount() {
    this.setState({
      cardBackground: this.calculateCardColor()
    })
  }

  calculateCardColor = () => {
      return `card-background-${(this.props.objectiveIndex % 4) + 1}`
  }

  onCardClick = () => {
    if(!this.state.mouseOverMore) {
      this.props.onCardClick(this.props.objectiveIndex, this.props.objective)
    }
  }

  onDelete = () => {
    this.deleteRedux()
    this.deleteFirestore()
  }

  deleteRedux = () => {
    this.props.deleteObjective(this.props.objectiveIndex)
  }

  deleteFirestore = () => {
    firebase.firestore()
      .collection('userObjectives')
      .doc(this.props.user.uid)
      .collection('objectives')
      .doc(this.props.objective.id)
      .delete()
  }

  renderMore() {
    return (
      <Box direction='row'>
        <Box basis='3/4'></Box>
        <Box
          basis='1/4'
          margin={{ top: 'small', right: 'small' }}
          onMouseOver={() => this.setState({ mouseOverMore: true })}
          onMouseLeave={() => this.setState({ mouseOverMore: false })}>
          <Menu
            items={[
              { label: 'Delete', onClick: this.onDelete}
            ]}>
            <Box align='end'>
              <More color='white'/>
            </Box>
          </Menu>
        </Box>
      </Box>
    )
  }

  renderContent() {
    return (
      <Box
        pad={{ horizontal: 'medium', top: 'medium', bottom: 'large' }}>
        <Heading color='white'>{this.props.objective.label}</Heading>
        <Meter
          values={[{
            value:this.props.objective.progress,
            label: `${this.props.objective.progress} %`,
          }]}/>
      </Box>
    )
  }

  render() {
    return (
      <Box
        direction='column'
        basis='medium'
        margin='medium'
        elevation='small'
        animation='fadeIn'
        background={this.state.cardBackground}
        onClick={this.onCardClick}
        hoverIndicator>

        {this.renderMore()}
        {this.renderContent()}

      </Box>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteObjective
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ObjectiveCard)
