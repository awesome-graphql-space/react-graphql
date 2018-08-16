import React, { Component } from 'react';

class LogoutPage extends Component {

    componentDidMount(){
      localStorage.removeItem('AUTH_TOKEN');
    }  

    render() {
      return (
        <div>
          <h4>You have been Logged out of the page</h4>
        </div>
      );
    }
  }
  
  export default LogoutPage;