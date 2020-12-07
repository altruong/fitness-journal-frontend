import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card } from './Card';

interface ColumnProps {
  column: any;
  index: any;
  columnId: any;
}

export const Column: React.FC<ColumnProps> = (props: any) => {
  const { column, columnId, index } = props;
  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => (
        <Flex
          m={8}
          border='1px solid lightgrey'
          borderRadius={5}
          flexDir='column'
          w='20rem'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Heading>{column.title}</Heading>
          <Flex className='ExerciseList' flexGrow={1}></Flex>
        </Flex>
      )}
    </Draggable>
  );
};
