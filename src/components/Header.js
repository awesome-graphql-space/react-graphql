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

const HeaderStyle = styled.div`
  background-color: #009CFA;
  height: 50px;
  padding: 20px;
  color: white;
  font-size: 24px;
  
  font-family: 'Open Sans',-apple-system,'BlinkMacSystemFont','Arial',sans-serif;
`;

const Twister = styled.div`
  text-align: center;
  margin: 0;
`

const linkStyle ={
  color: "white",
  padding: "15px",
}  

const Header = () => {
  return(
    <div>
    <HeaderStyle>
    <a style={linkStyle} href="/login">Login</a>
    <a style={linkStyle} href="/signup">Signup</a>
    <Twister>Twister</Twister>
    </HeaderStyle>
    </div>
  )
}


export default Header

