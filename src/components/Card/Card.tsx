import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

interface CardProps {}

export const Card: React.FC<CardProps> = ({}) => {
  return (
    <Flex className='card'>
      <div>Card</div>
      <Box> Day </Box>
    </Flex>
  );
};
