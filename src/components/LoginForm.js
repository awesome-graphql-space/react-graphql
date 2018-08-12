import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import Header from './Header'
import { graphql } from 'react-apollo'
import { AUTH_TOKEN } from '../constant'
import gql from "graphql-tag";

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

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
  } 

  _login =(e) => {
    console.log('hello')
  }  

  render() {
    return (
      <div>
        <Header/>
        <Form>
          <Title>
            Already have an account???
          </Title>
          <Input placeholder="email" type="email" name="email" />
          <Input onChange={e => this.setState({ password: e.target.value })} placeholder="passowrd" type="password" name="password" />
          <Button onClick={this._login}>Log In</Button>
        </Form>
      </div>
    );
  }
}

const LOGIN_USER_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

export default LoginForm
