import { Sidebar } from 'components/Sidebar/Sidebar';
import { Navbar } from 'components/Navbar/Navbar';
import React from 'react';
import { FlexContainer } from 'shared/FlexContainer';
import { Flex } from '@chakra-ui/react';

interface programProps {}

const program: React.FC<programProps> = ({}) => {
  return (
    <Flex className='app'>
      <Sidebar />
      <Flex className='main-body'>
        <FlexContainer justifyContent='space-between'>
          <Navbar />
        </FlexContainer>
      </Flex>
    </Flex>
  );
};

export default program;
