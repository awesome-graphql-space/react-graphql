import React from "react";
import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 70px;
  font-size: 1.5em;
  color: black;
  background-color: white;
`;

export const Form = styled.form`
  margin-top: 40px;
`;

export const Button = styled.button`
  font-size: 18px;
  background-color: #009cfa;
  color: white;
  border-radius: 5px;
  padding: 10px;
`;

export const Input = styled.input`
  font-size: 14px;
  border: 1px solid #ddd;
  display: block;
  margin: 10px auto;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    font-size: 14px;
    vertical-align: middle;
  }
`;
