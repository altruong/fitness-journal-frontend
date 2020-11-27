import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@chakra-ui/react';

import { IconType } from 'react-icons';

interface SidebarItemProps {
  icon: IconType;
  label: string;
}
//Refer to https://chakra-ui.com/docs/components/icon

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => {
  return (
    <Flex className='sidebar-icon' m={3} alignItems='center'>
      <Icon as={icon} w={6} h={6} mr={1} />
      <Text>{label}</Text>
    </Flex>
  );
};
