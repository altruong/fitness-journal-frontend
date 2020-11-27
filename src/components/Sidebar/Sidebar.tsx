import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { SidebarItem } from './SidebarItem';
import { MdSettings } from 'react-icons/md';
interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <Flex
      id='sidebar-container'
      w='250px'
      h='100vh'
      position='sticky'
      top={0}
      background='#A7ECFC'
      flexDir='column'
    >
      <Heading m={5}>Program</Heading>
      <SidebarItem label='Settings' icon={MdSettings} />
      <Divider />
      <Heading>See this</Heading>
    </Flex>
  );
};
