import React, { Component } from 'react';
import styled from 'styled-components';

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
  background-color: black;
  color: white;
  border-radius: 5px;
  padding:10px;
`;

const Input = styled.input`
  font-size: 1.45em;
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

  signUp = (e) => {
    const email = new FormData(e.target).get('email');
    e.preventDefault();
    console.log(`New LoginForm from ${email}`);
  }

  render() {
    return (
      <Form onSubmit={this.signUp}>
        <Title>
          Already have an account???
        </Title>
        <Input placeholder="email" type="email" name="email" />
        <Input placeholder="passowrd" type="password" name="password" />
        <Button>Log In</Button>
      </Form>
    );
  }
}

export default LoginForm
