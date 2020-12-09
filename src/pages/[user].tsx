import React from 'react';
import { Link } from 'shared/Link';
import path from 'utils/path';

interface UserProps {}

const User: React.FC<UserProps> = ({}) => {
  const userId = '1';
  return (
    <div>
      Dashboard
      <Link to={path.program(userId)}>Link to user program</Link>
    </div>
  );
};
export default User;
