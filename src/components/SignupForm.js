import React, { Component } from 'react';
import styled from 'styled-components';
import { SIGNUP } from '../graphql/mutation'
import gql from "graphql-tag";
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'

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
  }

  render() {
    return (
      <Form onSubmit={this.signUp}>
        <Title>
          Do not have an account??  Sign Up !!
        </Title>
       
        <Input placeholder="name" type="text" name="name" />
        <Input placeholder="email" type="email" name="email" />
        <Input placeholder="password" type="password" name="password" />
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

export default graphql(SIGNUP, { name: 'signupMutation' })(
  withRouter(SignupForm),
)
