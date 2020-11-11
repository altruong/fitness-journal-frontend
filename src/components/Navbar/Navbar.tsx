import { Box, Button, Container, Flex, Heading } from '@chakra-ui/core';
import React from 'react';
import Link from '../../shared/Link';
import { Wrapper } from '../../shared/Wrapper';

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
      <Container maxW='65rem'>
        <Flex>
          <Link to='/'>
            <Heading>GoFit</Heading>
          </Link>
        </Flex>
        <Flex>
          <Link mr='auto' to='/'>
            <Heading>About</Heading>
          </Link>
          <Link mr='auto' to='/'>
            <Button>Sign in</Button>
          </Link>
          <Link mr='auto' to='/'>
            <Button>Login</Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};
