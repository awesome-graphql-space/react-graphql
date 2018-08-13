import React, { Component } from 'react';
import styled from 'styled-components';
import { SIGNUP } from '../graphql/mutation'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import { AUTH_TOKEN } from '../constant'

const Form = styled.form`
  margin: 0 auto;
  width: 50%;
  min-width: 400px;
  max-width: 800px;
  text-align: center;
  border: 1px solid #ddd;
  padding-top: 0px;
  padding-bottom: 90px;
  color: black;
  background: white;
`;

const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 70px;
  font-size: 1.5em;
  color: black;
  background-color: white;
`;

const Button = styled.button`
  font-size: 18px;
  background-color: #009CFA;
  color: white;
  border-radius: 5px;
  padding:10px;
`;

const Input = styled.input`
  font-size: 14px;
  border: 1px solid #ddd;
  display:block;
  margin: 10px auto;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    font-size: 14px;
    vertical-align:middle;
  }
`;

class SignupForm extends Component {

  signUp = async e => {
    e.preventDefault()
    const { email, name, password } = this.state
    const result = await this.props.signupMutation({
      variables: {
        name,
        email,
        password,
      },
    })

    const token = result.data.signup.token
    localStorage.setItem(AUTH_TOKEN, token)

    this.props.refreshTokenFn &&
      this.props.refreshTokenFn({
        [AUTH_TOKEN]: token,
      })

    this.props.history.replace('/')
    window.location.reload()
  }

  render() {
    return (
      <Form onSubmit={this.signUp}>
        <Title>
          Do not have an account??  Sign Up !!
        </Title>
       
        <Input onChange={e => this.setState({ name: e.target.value })} placeholder="name" type="text" name="name" />
        <Input onChange={e => this.setState({ email: e.target.value })} placeholder="email" type="email" name="email" />
        <Input onChange={e => this.setState({ password: e.target.value })} placeholder="password" type="password" name="password" />
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

export default graphql(SIGNUP, { name: 'signupMutation' })(
  withRouter(SignupForm),
)
