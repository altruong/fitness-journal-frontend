import { Box, Flex, Heading, Link } from '@chakra-ui/core';
import React from 'react';
import NextLink from 'next/link';
interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex zIndex={1} position='sticky' top={0} bg='tomato' p={4} ml={'auto'}>
      <Flex flex={1} m='auto' align='center'>
        <NextLink href='/'>
          <Link>
            <Heading>GoFit</Heading>
          </Link>
        </NextLink>
        <Box ml={'auto'}></Box>
      </Flex>
    </Flex>
  );
};
