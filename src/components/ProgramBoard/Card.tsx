import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface CardProps {
  key: any;
  exercise: any;
  index: any;
}

export const Card: React.FC<CardProps> = (props) => {
  const { key, exercise, index } = props;
  console.log(exercise);
  return (
    <Draggable draggableId={exercise.id} index={index}>
      {(provided) => (
        <Flex
          className='Card'
          border='1px solid lightgrey'
          borderRadius={5}
          p={1}
          background-color='lightgrey'
          flexDir='column'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {exercise.content}
        </Flex>
      )}
    </Draggable>
  );
};
