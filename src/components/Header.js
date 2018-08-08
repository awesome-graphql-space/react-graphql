import styled from 'styled-components';
import React, { Component } from 'react';


const HeaderStyle = styled.div`
  background-color: #009CFA;
  height: 50px;
  padding: 20px;
  color: white;
  font-size: 24px;
  text-align:center;
`;

const Header = () => <HeaderStyle>Twister</HeaderStyle>

export default Header