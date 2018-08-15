import styled from 'styled-components';
import React from 'react';

const HeaderStyle = styled.div`
  background-color: #009CFA;
  height: 50px;
  padding: 20px;
  color: white;
  font-size: 24px;
  text-align:center;
  font-family: 'Open Sans',-apple-system,'BlinkMacSystemFont','Arial',sans-serif;
`;

const Header = () => <HeaderStyle>Twister</HeaderStyle>

export default Header