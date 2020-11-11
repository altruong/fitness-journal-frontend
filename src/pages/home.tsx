import React from 'react';
import { Link } from '../shared/Link';
import { Wrapper } from '../shared/Wrapper';

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
