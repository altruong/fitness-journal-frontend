import { Box, Flex } from '@chakra-ui/react';
import { Navbar } from 'components/Navbar/Navbar';
import { Board } from 'components/ProgramBoard/Board';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { GetStaticProps } from 'next';
import React from 'react';
import { resetServerContext } from 'react-beautiful-dnd';
import { getIntFromURL } from 'utils/getIntFromURL';

interface ProgramProps {}

const Program: React.FC<ProgramProps> = ({}) => {
  const programId = getIntFromURL('program');

  return (
    <Flex className='app' width='100vw'>
      <Sidebar />

      <Flex id='main-body' flexDir='column' flexGrow={1}>
        <Navbar />
        <Board programId={programId} />

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

export default Program;

export const getStaticProps: GetStaticProps = async (context) => {
  resetServerContext();
  return { props: { data: [] } };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { user: '1', program: '1' } }, // See the "paths" section below
    ],
    fallback: false, // See the "fallback" section below
  };
}
