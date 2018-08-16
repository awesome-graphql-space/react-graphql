import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import Header from './Header'
import { graphql } from 'react-apollo'
import { AUTH_TOKEN } from '../constant'
import { LOGIN } from '../graphql/mutation'

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
    username : '',
    password: '',
    hide: true
  } 

  render() {
    return (
      <div>
        {this.hide && <Header />}
          <Title>ffff
            Already have an account???
          </Title>
          <Input placeholder="email" type="email" name="email" />
          <Input onChange={e => this.setState({ password: e.target.value })} placeholder="passowrd" type="password" name="password" />
          <Button onClick={this._login}>Log In</Button>
      </div>
    );
  }

  _login = async e => {
    const { username, password } = this.state
    this.props
      .loginMutation({
        variables: {
          username,
          password,
        },
      })
      .then(result => {
        const token = result.data.login.token

        //todo set the token 

        this.props.history.replace('/')
        window.location.reload()
      })
      .catch(err => {
        console.log('error')
      })
  }
}

export default graphql(LOGIN, { name: 'loginMutation' })(withRouter(LoginForm)
)
