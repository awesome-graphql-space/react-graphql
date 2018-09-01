
import React from 'react';
import styled from "styled-components";
import { Flex, Row } from './Tweet';

export const Card = styled.section`
  min-height: 20px;
  padding: 19px;
  border-radius:10px;
  margin-bottom: 20px;
  margin: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-bottom: 1px solid #e6ecf0;
  cursor: pointer;
  min-height: 51px;
  padding: 9px 12px;
  background-color: #fff;
  &:hover {
    background-color: #f5f8fa;
  }
`;

export const Text = styled.p`
  text-align: left;
  padding: 5px;
`;

export const TweetItem = ({tweet}) => {

  // if(tweet){
      // return null;
  // }

  return(
    <Card>
      <Flex>
        <h5>Posted by {tweet.author.displayName}</h5>
      </Flex>
      <Text>{tweet.text}</Text>
      <Flex>
        <Row>
          <button>Like</button>
          <button>Reply</button>
          <button>comment</button>
        </Row>
        <button>Retwist</button>
      </Flex>
    </Card>
  );
} 