import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface CardProps {
  exercise: any;
  index: any;
}

export const Card: React.FC<CardProps> = (props) => {
  const { exercise, index } = props;

  return (
    <Draggable draggableId={exercise.id.toString()} index={index}>
      {(provided) => (
        <Flex
          className='Card'
          border='1px solid lightgrey'
          borderRadius={5}
          p={1}
          background-color='lightgrey'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {exercise.notes}
        </Flex>
      )}
    </Draggable>
  );
};
