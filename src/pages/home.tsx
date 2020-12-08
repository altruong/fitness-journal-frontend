import { Box } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from 'components/Navbar/Navbar';
import { Link } from 'shared/Link';
import { Wrapper } from 'shared/Wrapper';
import path from 'utils/path';

interface homeProps {}

const Home: React.FC<homeProps> = ({}) => {
  return (
    <Box>
      <Navbar />
      <Wrapper>
        <Link to={path.home}>Click here</Link>
        <div>Hello</div>
      </Wrapper>
    </Box>
  );
};

export default Home;
