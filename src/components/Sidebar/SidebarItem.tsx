import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md';

interface SidebarItemProps {
  icon: string;
  label: string;
}
//Refer to https://chakra-ui.com/docs/components/icon
export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => {
  const Icon = null;

  return <Flex>{Icon}</Flex>;
};
