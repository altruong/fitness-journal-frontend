import { Box, Button, Flex, Heading, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FlexContainer } from 'shared/FlexContainer';
import { Link } from 'shared/Link';
import path from 'utils/path';

interface NavbarProps {
  constrain?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ constrain = false }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      id='mainNav'
      zIndex={1}
      position='sticky'
      top={0}
      bg='#5c6ac4'
      p='0.8rem'
      h='4rem'
    >
      <FlexContainer constrain={constrain} justifyContent='space-between'>
        <Flex>
          <Link to='/'>
            <Heading color='white'>GoFit</Heading>
          </Link>
        </Flex>
        {/* <Spacer /> */}
        <Flex align='center'>
          <Button onClick={toggleColorMode} mr={4}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
          <Link to={path.about} mr={4} color='white'>
            About
          </Link>
          <Link to={path.register} mr={4} color='white'>
            Sign up
          </Link>
          <Link
            to={path.login}
            color='white'
            borderRadius='3px'
            border='1px solid'
            padding='0.5rem 1rem'
          >
            Login
          </Link>
        </Flex>
      </FlexContainer>
    </Box>
  );
};
