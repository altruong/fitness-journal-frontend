import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <Flex
      id='sidebar-container'
      w='250px'
      h='100vh'
      position='sticky'
      top={0}
      justify-content='center'
      background='#A7ECFC'
    >
      <Heading>Program</Heading>
      <SidebarItem label='Settings' icon='settings' />
    </Flex>
  );
};
