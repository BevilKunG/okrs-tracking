import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Heading, Button, Text } from 'grommet'
import { User, UserNew } from 'grommet-icons'
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

  renderUserName() {
    return (
      <Text
        margin={{ right: 'medium' }}
        weight='bold'>
        {!this.props.user.displayName ? this.props.userName : this.props.user.displayName}
      </Text>
    )
  }

  renderButton() {
    return this.props.user ? (
      <Box direction='row'>
        <Box justify='center'>
          {this.renderUserName()}
        </Box>

        <Button
          label='Logout'
          color='white'
          onClick={this.onLogout}/>
      </Box>
    ) : (
      <Box direction='row'>
        <Button
          label='Login'
          icon={<User/>}
          color='white'
          margin={{ right: 'small' }}
          onClick={() => this.openAuthModal(LOGIN)}/>
        <Button
          label='Register'
          icon={<UserNew/>}
          color='white'
          onClick={() => this.openAuthModal(REGISTER)}/>
      </Box>
    )
  }

  render() {
    return (
      <Box
        direction='row'
        fill='horizontal'
        pad={{ vertical: 'xsmall' }}
        elevation='xsmall'>

        <Box
          basis='3/4'
          justify='center'>
          <Heading
            margin={{ left: 'medium' }}
            size='small'>
              {'OKRS-TRACKING'}
            </Heading>
        </Box>

        <Box
          basis='1/4'
          justify='center'
          align='end'
          margin={{ right: 'medium' }}>
          {this.renderButton()}
        </Box>

        {this.renderAuthModal()}
      </Box>
    )
  }
}

const mapStateToProps = ({ user, userName }) => {
  return { user, userName }
}

export default connect(mapStateToProps)(Header)
