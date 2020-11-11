import React from 'react';
import { Box, Flex } from '@chakra-ui/core';

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
  ...props
}) => {
  return (
    <Flex mx='auto' maxW={variant === 'regular' ? '65rem' : '400px'} {...props}>
      {children}
    </Flex>
  );
};
