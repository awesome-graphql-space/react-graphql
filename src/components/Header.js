import styled from 'styled-components';
import React from 'react';
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { GET_AUTH_STATUS } from '../graphql/query';
import { Query } from "react-apollo";

const HeaderStyle = styled.div`
  background-color: #009CFA;
  height: 50px;
  padding: 20px;
  color: white;
  font-size: 24px;
  font-family: 'Open Sans',-apple-system,'BlinkMacSystemFont','Arial',sans-serif;
`;

const Twister = styled.div`
 float:left;
 font-size:30px;
`

const linkStyle ={
  color: "white",
  padding: "15px",
  float: "right"
}  

const Header = () => {
  return(
    <div>
    <Query query={ GET_AUTH_STATUS } variables={{ id: "1" }}>
    {({ loading, error, data, fetchMore }) => {
      if (loading) {
        return <div>loading</div>;
      }

      if (error) {
        console.log(error)
        return <div>error</div>;
      }

      console.log(data.getAuthStatus.loggedIn);
      return(
        <HeaderStyle>
        {data.getAuthStatus.loggedIn ? <a style={linkStyle} href="/logout">Logout</a> : 
        <React.Fragment>
        <a style={linkStyle} href="/login">Login</a>
        <a style={linkStyle} href="/signup">Signup</a>
        <Twister>Twister</Twister>
        </React.Fragment> }
        </HeaderStyle>
      )
    }}

    </Query>
    </div>
  )
}




export default Header

