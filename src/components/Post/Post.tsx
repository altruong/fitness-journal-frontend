import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Spacer,
} from '@chakra-ui/core';
import { CloseIcon } from '@chakra-ui/icons';
import React from 'react';
import { useUpdatePostMutation } from '../../generated/graphql';

interface PostProps extends React.InputHTMLAttributes<HTMLInputElement> {
  postId: string;
  title: string;
  text: string;
}

export const Post: React.FC<PostProps> = ({ postId, title, text, ...rest }) => {
  const [updatePost] = useUpdatePostMutation();

  const updateTitle = async (value) => {
    if (value !== title) {
      const response = await updatePost({
        variables: { id: postId, text: text, title: value },
      });
      console.log(response.data?.updatePost);
    }
  };

  const updateText = async (value) => {
    if (value !== text) {
      const response = await updatePost({
        variables: { id: postId, text: value, title: title },
      });
      console.log(response.data?.updatePost);
    }
  };

  const deletePost = async () => {
    console.log('Delete post');
  };

  const DeleteIcon: any = CloseIcon; // hack because library is broken

  return (
    <Flex p={5} shadow='md' borderWidth='1px' {...rest}>
      <Flex direction={'column'}>
        <Editable defaultValue={title} onSubmit={(value) => updateTitle(value)}>
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Editable defaultValue={text} onSubmit={(value) => updateText(value)}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Flex>
      <Spacer />
      <IconButton
        colorScheme='red'
        aria-label='Delete Post'
        variant='outline'
        size='sm'
        icon={<DeleteIcon />}
        onClick={() => deletePost()}
      />
    </Flex>
  );
};
