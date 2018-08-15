import React, { Component } from 'react';
import styled from 'styled-components';

const Header1 = styled.h1`
margin: 50px;
font-family: 'Open Sans',-apple-system,'BlinkMacSystemFont','Arial',sans-serif;
`

class LandingPage extends Component {
    render() {
      return (
        <div>
         <Header1> Login Or Signup to Twist your Tweet </Header1>
        </div>
      );
    }
  }
  
  export default LandingPage;