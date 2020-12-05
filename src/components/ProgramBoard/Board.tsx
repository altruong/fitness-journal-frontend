import { Flex } from '@chakra-ui/react';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

interface BoardProps {}

export const Board: React.FC<BoardProps> = ({}) => {
  const onDragEnd = (result) => {
    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex></Flex>
    </DragDropContext>
  );
};
