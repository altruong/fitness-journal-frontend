import { Box,Editable,EditableInput,EditablePreview,Input,Text } from '@chakra-ui/core';
import React, { useRef, useState } from 'react';
//import { Editable } from './Editable';

interface FeatureProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  text: string;
}

const submitText = (text) => {
  console.log(text)
}

export const Feature: React.FC<FeatureProps> = ({ title, text, ...rest }) => {

  // State for the input
  const [task, setTask] = useState("");
  const inputRef = useRef();

  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      {/* <Heading fontSize='xl'>{title}</Heading> */}
      <Editable defaultValue={text}>
        <EditablePreview />
        <EditableInput onSubmit={() => (submitText)} />
      </Editable>
      <Text mt={4}>{text}</Text>
    </Box>
  );
};
