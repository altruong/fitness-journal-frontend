import React from 'react';
import Link from '../components/Shared/Link';
import { Wrapper } from '../components/Shared/Wrapper';

interface homeProps {}

const Home: React.FC<homeProps> = ({}) => {
  return (
    <Wrapper>
      <Link to='/'>Click here</Link>
      <div>Hello</div>
    </Wrapper>
  );
};

export default Home;
