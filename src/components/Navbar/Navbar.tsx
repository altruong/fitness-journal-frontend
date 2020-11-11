import { Box, Flex, Heading } from '@chakra-ui/core';
import React from 'react';
import Link from '../../shared/Link';

export const Navbar: React.FC = () => {
  return (
    <Flex zIndex={1} position='sticky' top={0} bg='tomato' p={4} ml={'auto'}>
      <Flex flex={1} m='auto' align='center'>
        <Link to='/'>
          <Heading>GoFit</Heading>
        </Link>

        <Box ml={'auto'}></Box>
      </Flex>
    </Flex>
  );
};
