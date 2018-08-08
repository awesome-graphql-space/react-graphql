import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm'
import styled from 'styled-components';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SignupForm />
      </div>
    );
  }
}

export default App;
