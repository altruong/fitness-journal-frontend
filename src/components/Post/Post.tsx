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
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from '../../generated/graphql';

interface PostProps extends React.InputHTMLAttributes<HTMLInputElement> {
  postId: number;
  title: string;
  text: string;
}

export const Post: React.FC<PostProps> = ({ postId, title, text, ...rest }) => {
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const updateTitle = async (value) => {
    if (value !== title) {
      const response = await updatePost({
        variables: { id: postId, text: text, title: value },
        update: (cache) => {
          cache.evict({ fieldName: 'posts' }); //evicts entire post
        },
      });
      console.log(response.data?.updatePost);
    }
  };

  const updateText = async (value) => {
    if (value !== text) {
      const response = await updatePost({
        variables: { id: postId, text: value, title: title },
        update: (cache) => {
          cache.evict({ fieldName: 'posts' }); //evicts entire post
        },
      });
      console.log(response.data?.updatePost);
    }
  };

  const DeleteIcon: any = CloseIcon; // hack because library is broken

  return (
    <Flex p={5} shadow='base' borderWidth='1px' {...rest}>
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
        onClick={async () => {
          await deletePost({
            variables: { id: postId },
            update: (cache) => {
              cache.evict({ fieldName: 'posts' }); //evicts entire post
            },
          });
        }}
      />
    </Flex>
  );
};
