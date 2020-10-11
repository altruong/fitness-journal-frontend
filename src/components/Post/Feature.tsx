import { Box, Heading, Text } from '@chakra-ui/core';
import React, { ReactNode } from 'react';

interface FeatureProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  text: string;
}

export const Feature: React.FC<FeatureProps> = ({ title, text, ...rest }) => {
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{text}</Text>
    </Box>
  );
};
