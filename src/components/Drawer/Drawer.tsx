import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

interface DrawerProps {}

export const Drawer: React.FC<DrawerProps> = ({}) => {
  return (
    <Flex
      className='sidebar-container'
      zIndex={2}
      position='fixed'
      w='250px'
      h='100vh'
      justify-content='center'
      background='#0D1CC7'
    >
      Drawer
    </Flex>
  );
};
