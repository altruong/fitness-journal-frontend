import { Sidebar } from 'components/Sidebar/Sidebar';
import { Navbar } from 'components/Navbar/Navbar';
import React from 'react';
import { FlexContainer } from 'shared/FlexContainer';
import { Box, Flex } from '@chakra-ui/react';

interface programProps {}

const program: React.FC<programProps> = ({}) => {
  return (
    <Flex className='app' width='100vw'>
      <Sidebar />

      <Flex id='main-body' flexDir='column' flexGrow={1}>
        <Navbar />

        <Box h='1200px' bg='#8fff8f'>
          Hi
        </Box>
        <Box h='1200px' bg='#ffffff'>
          Hi
        </Box>
      </Flex>
    </Flex>
  );
};

export default program;
