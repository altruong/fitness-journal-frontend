import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Text,
} from '@chakra-ui/core';
import React, { useRef, useState } from 'react';
import { useUpdatePostMutation } from '../../generated/graphql';

interface FeatureProps extends React.InputHTMLAttributes<HTMLInputElement> {
  postId: string;
  title: string;
  text: string;
}

export const Feature: React.FC<FeatureProps> = ({
  postId,
  title,
  text,
  ...rest
}) => {
  const [updatePost] = useUpdatePostMutation();

  const updateTitle = async (value) => {
    //console.log(value);
    if (value !== title) {
      const response = await updatePost({
        variables: { id: postId, text: text, title: value },
      });
      console.log(response.data?.updatePost);
    }
  };

  const updateText = async (value) => {
    //console.log(value);
    if (value !== text) {
      const response = await updatePost({
        variables: { id: postId, text: value, title: title },
      });
      console.log(response.data?.updatePost);
    }
  };

  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Editable defaultValue={title} onSubmit={(value) => updateTitle(value)}>
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable defaultValue={text} onSubmit={(value) => updateText(value)}>
        <EditablePreview />
        <EditableInput />
      </Editable>
    </Box>
  );
};
