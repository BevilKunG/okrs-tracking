import React, { Component } from 'react'
import { Layer, Box, Form, FormField, TextInput, Text, Button } from 'grommet'
import { Close } from 'grommet-icons'
import { LOGIN, REGISTER } from './types'
import firebase from 'firebase/app'
import 'firebase/auth'

class AuthModal extends Component {

  state = {
    selectedTab: LOGIN
  }

  componentDidMount() {
    this.setState({ selectedTab: this.props.selectedTab })
  }

  onLoginFormSubmit = ({ value }) => {
    // console.log(value)
    firebase.auth()
      .signInWithEmailAndPassword(value.email, value.password)
      .catch((error) => {
        console.log(error)
      })
  }

  onRegisterFormSubmit = ({ value }) => {
    firebase.auth()
    .createUserWithEmailAndPassword(value.email, value.password)
    .catch((error) => {
      console.log(error)
    })
  }

  validateConfirmPassword = (confirmPassword, { password }) => {
    if(confirmPassword !== password) return 'Password mismatch'
  }


  renderLoginForm() {
    return (
      <Form
        onSubmit={this.onLoginFormSubmit}>
        <FormField
          label='Email'
          name='email'
          required/>

        <FormField
          label='Password'
          name='password'
          required/>

        <Box
          margin={{ top: 'medium' }}
          align='end'>
          <Button
            type='submit'
            label='Sign in'/>
        </Box>
      </Form>
    )
  }

  renderRegisterForm() {
    return (
      <Form
        onSubmit={this.onRegisterFormSubmit}>
        <FormField
          name='name'
          label='Name'
          required/>

        <FormField
          name='email'
          label='Email'
          required/>

        <FormField
          type='password'
          name='password'
          label='Password'
          required/>

        <FormField
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          validate={this.validateConfirmPassword}
          required/>

          <Box
            margin={{ top: 'medium' }}
            align='end'>
            <Button
              type='submit'
              label='Sign up'/>
          </Box>
      </Form>
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
          onClick={() => this.setState({ selectedTab: LOGIN })}>
          <Text>Sign in</Text>
        </Box>

        <Box
          onClick={() => this.setState({ selectedTab: REGISTER })}>
          <Text>Sign up</Text>
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
          direction='row'
          margin={{ top: 'medium' }}>

          <Box basis='xlarge'>
            {this.renderTabs()}
          </Box>

          <Box
            justify='center'
            align='center'
            margin={{ right: 'medium' }}
            onClick={this.props.onModalClose}
            hoverIndicator>
            <Close/>
          </Box>
        </Box>

        <Box
          margin={{ top: 'medium', horizontal: 'xlarge' }}>
          {this.renderTab()}
        </Box>
      </Layer>
    )
  }
}

export default AuthModal
