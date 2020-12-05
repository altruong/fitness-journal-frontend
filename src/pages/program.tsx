import { Box, Flex, Grid } from '@chakra-ui/react';
import { Card } from 'components/ProgramBoard/Card';
import { Column } from 'components/ProgramBoard/Column';
import { Navbar } from 'components/Navbar/Navbar';
import { Sidebar } from 'components/Sidebar/Sidebar';
import React from 'react';

interface programProps {}

const program: React.FC<programProps> = ({}) => {
  return (
    <Flex className='app' width='100vw'>
      <Sidebar />

      <Flex id='main-body' flexDir='column' flexGrow={1}>
        <Navbar />
        <Grid>
          <Column />
        </Grid>
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
