import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Heading, Button } from 'grommet'
import AuthModal from '../Auth/AuthModal'
import { LOGIN, REGISTER } from '../Auth/types'
import firebase from 'firebase/app'
import 'firebase/auth'

class Header extends Component {

  state = {
    showModal: false,
    selectedTab: LOGIN
  }

  openAuthModal = (selectedTab) => {
    this.setState({
      showModal: true,
      selectedTab
    })
  }

  closeAuthModal = () => {
    this.setState({ showModal: false })
  }

  onLogout = () => {
    firebase.auth().signOut()
  }

  renderAuthModal() {
    return this.state.showModal && (
      <AuthModal
        selectedTab={this.state.selectedTab}
        onModalClose={this.closeAuthModal}/>
    )
  }

  renderButton() {
    return this.props.user ? (
      <Button
        label='Sign out'
        onClick={this.onLogout}/>
    ) : (
      <Box direction='row'>
        <Button
          label='Sign in'
          margin={{ right: 'small' }}
          onClick={() => this.openAuthModal(LOGIN)}/>
        <Button
          label='Sign up'
          onClick={() => this.openAuthModal(REGISTER)}/>
      </Box>
    )
  }

  render() {
    return (
      <Box
        direction='row'
        fill='horizontal'
        background='dark-1'>

        <Box basis='3/4'>
          <Heading margin={{ left: 'medium' }}>{'OKRS-TRACKING'}</Heading>
        </Box>

        <Box justify='center' margin={{ right: 'small' }}>
          {this.renderButton()}
        </Box>

        {this.renderAuthModal()}
      </Box>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps)(Header)
