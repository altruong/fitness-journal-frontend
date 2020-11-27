import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <Flex
      className='sidebar-container'
      zIndex={2}
      w='250px'
      h='100vh'
      // position='relative'
      justify-content='center'
      background='#0D1CC7'
    >
      Drawer
    </Flex>
  );
};
