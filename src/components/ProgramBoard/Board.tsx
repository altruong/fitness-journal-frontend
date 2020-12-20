import { Flex } from '@chakra-ui/react';
import { useDayPlansQuery } from 'generated/graphql';
import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Column } from './Column';

interface BoardProps {
  programId: number;
}

export const Board: React.FC<BoardProps> = ({ programId }) => {
  const { data, error, loading } = useDayPlansQuery({
    variables: { programId },
  });

  const onDragEnd = (result) => {
    return;
  };
  if (!data && loading) {
    return <div>loading</div>;
  } else {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='board' direction='horizontal' type='COLUMN'>
          {(provided) => (
            <Flex className='Board' flex-wrap='wrap' ref={provided.innerRef}>
              {data.dayPlans.map((dayPlan, index) => {
                return (
                  <Column
                    key={dayPlan.id.toString()}
                    column={dayPlan}
                    index={index}
                    exercises={dayPlan.exercises}
                  ></Column>
                );
              })}
              {provided.placeholder}
            </Flex>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
};

const initialData = {
  tasks: {
    // id is used as a key for lookup
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Buy a new monitor' },
    'task-3': { id: 'task-3', content: 'Exercise for 30 minutes' },
    'task-4': { id: 'task-4', content: 'Open vscode' },
  },
  // columns object is used to store the columns in the system
  // id is used to look up the columns
  // taskIds determines what task and order of task
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Completed',
      taskIds: [],
    },
  },
  // Faciliate reordering of columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};
