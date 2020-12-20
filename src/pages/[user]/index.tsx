import React from 'react';
import { Link } from 'shared/Link';
import path from 'utils/path';

interface UserProps {}

const User: React.FC<UserProps> = ({}) => {
  const userId = '1';
  const programId = '1';
  return (
    <div>
      Dashboard
      <Link to={path.program(userId, programId)}>Link to user programs</Link>
    </div>
  );
};
export default User;
