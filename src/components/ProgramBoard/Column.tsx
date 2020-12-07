import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Card } from './Card';

interface ColumnProps {
  column: any;
  index: any;
}

export const Column: React.FC<ColumnProps> = (props: any) => {
  const { column, key, index } = props;
  return (
    <Flex
      m={8}
      border='1px solid lightgrey'
      borderRadius={5}
      flexDir='column'
      w='30rem'
    >
      <Heading>{column.title}</Heading>
      <Flex className='ExerciseList' flexGrow={1}></Flex>
    </Flex>
  );
};
