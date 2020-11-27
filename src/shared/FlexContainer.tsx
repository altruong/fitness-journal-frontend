import { Container, Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

interface FlexContainerProps extends FlexProps {
  constrain: boolean;
}

// A flex container that takes a prop: constrain
// constrain = true constrains the container to 70rem
export const FlexContainer: React.FC<FlexContainerProps> = ({
  constrain,
  children,
  ...props
}) => {
  console.log(constrain);
  return (
    <Container maxW={constrain && '70rem'}>
      <Flex {...props}>{children}</Flex>
    </Container>
  );
};
