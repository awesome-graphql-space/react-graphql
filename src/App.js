import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm'
import styled from 'styled-components';

const header = styled.header`
  background-color: #222;
  height: 80px;
  padding: 20px;
  color: white;
`;


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Welcome to Tweets</h1>
        </header>
        <SignupForm />
      </div>
    );
  }
}

export default App;
