import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Card } from './Card';

interface ColumnProps {}

export const Column: React.FC<ColumnProps> = ({}) => {
  return (
    <Flex
      m={8}
      border='1px solid lightgrey'
      borderRadius={5}
      flexDir='column'
      w='30rem'
    >
      <Heading>Day of Week</Heading>
      <Flex className='ExerciseList' flexGrow={1}>
        <Card></Card>
      </Flex>
    </Flex>
  );
};
