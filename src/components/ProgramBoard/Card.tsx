import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface CardProps {}

export const Card: React.FC<CardProps> = ({}) => {
  return (
    <Flex
      className='card'
      border='1px solid lightgrey'
      borderRadius={5}
      p={8}
      background-color='lightgrey'
      h='2rem'
    >
      {/* <Draggable draggableId={}></Draggable> */}
    </Flex>
  );
};
