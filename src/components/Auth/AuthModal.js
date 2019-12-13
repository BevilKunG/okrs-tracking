import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUserName } from '../../actions'
import { Layer, Box, Form, FormField, Text, Button } from 'grommet'
import { Close } from 'grommet-icons'
import { ClipLoader } from 'react-spinners'
import { LOGIN, REGISTER } from './types'
import firebase from 'firebase/app'
import 'firebase/auth'

class AuthModal extends Component {

  state = {
    selectedTab: LOGIN,
    errorMessage: '',
    loginLoading: false,
    registerLoading: false
  }

  componentDidMount() {
    this.setState({ selectedTab: this.props.selectedTab })
  }

  onLoginFormSubmit = ({ value }) => {
    this.setState({ loginLoading: true })
    firebase.auth()
      .signInWithEmailAndPassword(value.loginEmail, value.loginPassword)
      .then(() => {
        this.setState({ loginLoading: false })
      })
      .catch((error) => {
        this.setState({
          loginLoading: false ,
          errorMessage: error.code
        })
        console.log(error)
      })
  }

  onRegisterFormSubmit = ({ value }) => {
    this.props.setUserName(value.registerName)
    this.setState({ registerLoading: true })

    firebase.auth()
    .createUserWithEmailAndPassword(value.registerEmail, value.registerPassword)
    .then(() => {
      this.setState({ registerLoading: false })
    })
    .catch((error) => {
      this.setState({
        registerLoading: false,
        errorMessage: error.code
      })
      console.log(error)
    })
  }

  onSelectTab = (selectedTab) => {
    this.setState({
      selectedTab,
      errorMessage: ''
    })
  }

  validateConfirmPassword = (registerConfirmPassword, { registerPassword }) => {
    if(registerConfirmPassword !== registerPassword) return 'Password mismatch'
  }

  renderLoginSpinner() {
    return this.state.loginLoading ? (
      <ClipLoader
        color='white'
        size={10}
        loading={this.state.loginLoading}/>
    ) : null
  }

  renderRegisterSpinner() {
    return this.state.registerLoading ? (
      <ClipLoader
        color='white'
        size={10}
        loading={this.state.registerLoading}/>
    ) : null
  }


  renderLoginForm() {
    return this.state.selectedTab === LOGIN && (
      <Form
        onSubmit={this.onLoginFormSubmit}>
        {this.renderErrorMessage()}
        <FormField
          type='email'
          label='Email'
          name='loginEmail'
          required/>

        <FormField
          type='password'
          label='Password'
          name='loginPassword'
          required/>

        <Box
          margin={{ top: 'medium' }}
          align='end'>
          <Button
            type='submit'
            label='Submit'
            icon={this.renderLoginSpinner()}
            color='white'/>
        </Box>
      </Form>
    )
  }

  renderRegisterForm() {
    return this.state.selectedTab === REGISTER && (
      <Form
        onSubmit={this.onRegisterFormSubmit}>
        {this.renderErrorMessage()}
        <FormField
          name='registerName'
          label='Name'
          required/>

        <FormField
          type='email'
          name='registerEmail'
          label='Email'
          required/>

        <FormField
          type='password'
          name='registerPassword'
          label='Password'
          required/>

        <FormField
          type='password'
          name='registerConfirmPassword'
          label='Confirm Password'
          validate={this.validateConfirmPassword}
          required/>

          <Box
            margin={{ top: 'medium' }}
            align='end'>
            <Button
              type='submit'
              label='Submit'
              icon={this.renderRegisterSpinner()}
              color='white'/>
          </Box>
      </Form>
    )
  }

  renderErrorMessage() {
    return this.state.errorMessage.length !== 0 && (
      <Box
        background='status-error'
        margin={{ vertical: 'small' }}
        pad='small'>
        <Text>{this.state.errorMessage}</Text>
      </Box>
    )
  }

  renderTab() {
    switch(this.state.selectedTab) {
      case LOGIN: return this.renderLoginForm()
      case REGISTER: return this.renderRegisterForm()
      default: return this.renderLoginForm()
    }
  }

  renderTabs() {
    return (
      <Box
        direction='row'
        justify='center'>
        <Box
          margin={{ right: 'medium' }}
          pad='small'
          onClick={() => this.onSelectTab(LOGIN)}
          hoverIndicator>
          <Text>{'Login'}</Text>
        </Box>

        <Box
          pad='small'
          onClick={() => this.onSelectTab(REGISTER)}
          hoverIndicator>
          <Text>{'Register'}</Text>
        </Box>
      </Box>
    )
  }

  render() {
    return (
      <Layer
        margin='xlarge'
        full
        onEsc={this.props.onModalClose}
        onClickOutside={this.props.onModalClose}>
        <Box
          background='layout-background'
          fill>
          <Box
            direction='row'
            margin={{ top: 'medium' }}>

            <Box basis='xlarge'>
              {this.renderTabs()}
            </Box>

            <Box
              justify='center'
              align='center'
              margin={{ right: 'medium' }}
              pad={{ horizontal: 'small' }}
              onClick={this.props.onModalClose}
              hoverIndicator>
              <Close/>
            </Box>
          </Box>

          <Box
            margin={{ top: 'medium', horizontal: 'xlarge' }}>
            {this.renderTab()}
          </Box>
        </Box>
      </Layer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUserName
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(AuthModal)
