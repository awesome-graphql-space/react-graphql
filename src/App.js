import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm'
import styled from 'styled-components';

const Header = styled.div`
  background-color: #009CFA;
  height: 50px;
  padding: 20px;
  color: white;
`;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <h1 className="App-title">Twister</h1>
        </Header>
        <SignupForm />
      </div>
    );
  }
}

export default App;
