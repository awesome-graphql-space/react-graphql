import React, { Component } from 'react';
import styled from 'styled-components';

class LogoutPage extends Component {

    componentDidMount(){
      localStorage.removeItem('AUTH_TOKEN');
    }  

    render() {
      return (
        <div>
          <h2>You have been Logged out of the page</h2>
        </div>
      );
    }
  }
  
  export default LogoutPage;