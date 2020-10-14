import { Box,Editable,EditableInput,EditablePreview,Input,Text } from '@chakra-ui/core';
import React, { useRef, useState } from 'react';
//import { Editable } from './Editable';

interface FeatureProps extends React.InputHTMLAttributes<HTMLInputElement> {
  postId: string;
  title: string;
  text: string;
}



export const Feature: React.FC<FeatureProps> = ({ postId, title, text, ...rest }) => {
  const updateText = ({postId, text}) => {
    console.log(text + postId)
  }
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      {/* <Heading fontSize='xl'>{title}</Heading> */}
      <Text>{postId}</Text>
      <Editable defaultValue={text} 
        onSubmit={() => updateText({postId, text})}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Text mt={4}>{text}</Text>
    </Box>
  );
};
