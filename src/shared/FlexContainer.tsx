import { Container, Flex, FlexProps } from '@chakra-ui/core';
import React from 'react';

interface FlexContainerProps extends FlexProps {}

export const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Container maxW='65rem'>
      <Flex {...props}>{children}</Flex>
    </Container>
  );
};
