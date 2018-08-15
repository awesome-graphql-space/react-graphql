
import React from '../../../../../.cache/typescript/2.9/node_modules/@types/react';
import styled from "styled-components";
import { Flex, Row } from './Tweet';

export const Card = styled.section`
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  margin: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  background-color: white;
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
        <h6>Posted by {tweet.author.displayName}</h6>
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