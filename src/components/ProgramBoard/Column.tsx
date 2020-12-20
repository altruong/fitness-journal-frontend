import { Button, Flex, Heading } from '@chakra-ui/react';
import { DayPlan } from 'generated/graphql';
import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { AddCard } from './AddCard';
import { Card } from './Card';

interface ColumnProps {
  column: any;
  index: any;
  // columnId: any;
  exercises: any;
}

export const Column: React.FC<ColumnProps> = (props: any) => {
  const { column, index, exercises } = props;

  return (
    <Draggable draggableId={column.id.toString()} index={index}>
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
          <Droppable droppableId={column.id.toString()}>
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
          <AddCard />
        </Flex>
      )}
    </Draggable>
  );
};
