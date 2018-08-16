import React, { Component } from 'react';
import styled from 'styled-components';

const headwrapper = styled.h1`
  margin-top: 20px;
`

class LogoutPage extends Component {

    componentDidMount(){
      localStorage.removeItem('AUTH_TOKEN');
    }  

    render() {
      return (
        <div>
          <headwrapper>You have been Logged out of the page</headwrapper>
        </div>
      );
    }
  }
  
  export default LogoutPage;