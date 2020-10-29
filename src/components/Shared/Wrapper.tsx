import React from 'react';
import { Box } from '@chakra-ui/core';

interface WrapperProps {
  variant?: 'small' | 'regular'; // What we want the react props we want
}

export type WrapperVairant = 'small' | 'regular';

interface WrapperProps {
  variant?: WrapperVairant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = 'regular', // default is set to regular
}) => {
  console.log(children);
  return (
    <Box mt={8} mx='auto' maxW={variant === 'regular' ? '800px' : '400px'}>
      {children}
    </Box>
  );
};
