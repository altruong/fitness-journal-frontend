import { Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Card } from './Card';

interface ColumnProps {
  column: any;
  index: any;
  columnId: any;
  exercises: any;
}

export const Column: React.FC<ColumnProps> = (props: any) => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  const { column, columnId, index, exercises } = props;
  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => (
        <Flex
          className='Column'
          m={8}
          border='1px solid lightgrey'
          borderRadius={5}
          w='20rem'
          flexDir='column'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Heading>{column.title}</Heading>
          <Droppable droppableId={columnId}>
            {(provided) => (
              <Flex flexDir='column' ref={provided.innerRef}>
                {exercises.map((exercise, index) => {
                  return (
                    <Card key={exercise.id} exercise={exercise} index={index} />
                  );
                })}
                {provided.placeholder}
              </Flex>
            )}
          </Droppable>
          <div
            className='AddNewExercise'
            onClick={() => setIsAddingCard(!isAddingCard)}
          >
            Add a card
          </div>
        </Flex>
      )}
    </Draggable>
  );
};
