import { Container, Flex, FlexProps } from '@chakra-ui/core';
import React from 'react';

interface FlexContainerProps extends FlexProps {
  constrain?: boolean;
}

export const FlexContainer: React.FC<FlexContainerProps> = ({
  constrain = false,
  children,
  ...props
}) => {
  return (
    <Container maxW={constrain && '70rem'}>
      <Flex {...props}>{children}</Flex>
    </Container>
  );
};
