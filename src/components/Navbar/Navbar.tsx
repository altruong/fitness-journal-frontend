import { Box, Button, Container, Flex, Heading } from '@chakra-ui/core';
import React from 'react';
import { FlexContainer } from '../../shared/FlexContainer';
import { Link } from '../../shared/Link';

export const Navbar: React.FC = () => {
  return (
    <Box
      id='mainNav'
      zIndex={1}
      position='sticky'
      top={0}
      bg='#5c6ac4'
      p='0.8rem'
      ml={'auto'}
    >
      <FlexContainer justifyContent='space-between'>
        <Flex>
          <Link to='/'>
            <Heading>GoFit</Heading>
          </Link>
        </Flex>
        <Flex align='center'>
          <Link to='/about'>
            <Heading mr={4}>About</Heading>
          </Link>
          <Link mr='auto' to='/register'>
            <Button mr={4}>Sign up</Button>
          </Link>
          <Link mr='auto' to='/login'>
            <Button mr={4}>Login</Button>
          </Link>
        </Flex>
      </FlexContainer>
    </Box>
  );
};
