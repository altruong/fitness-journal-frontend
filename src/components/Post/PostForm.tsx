import { FormControl, Flex, Box, Button } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import React from 'react';
import { useCreatePostMutation } from '../../generated/graphql';
import { InputField } from './InputField';

interface Values {
  title: string;
  text: string;
}

interface PostFormProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const PostForm: React.FC<PostFormProps> = ({ ...props }) => {
  const [createPost, { loading }] = useCreatePostMutation();

  return (
    <FormControl>
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={async (values: Values) => {
          console.log(values);
          const response = await createPost({
            variables: values,
            update: (cache) => {
              cache.evict({ fieldName: 'posts' }); //evicts entire post
            },
          });
          if (response.errors) {
            console.log(response);
          }
        }}
      >
        <Flex justify={'center'}>
          <Box mt={4} maxW='500px'>
            <Form>
              <InputField
                id='title'
                name='title'
                placeholder='insert title'
                label='Post Title'
              />
              <InputField
                id='text'
                name='text'
                placeholder='type text here'
                label='Post Text'
              />
              <Button
                isLoading={loading ? true : false}
                type='submit'
                colorScheme='teal'
                size='sm'
                p={4}
                m={2}
              >
                Submit
              </Button>
            </Form>
          </Box>
        </Flex>
      </Formik>
    </FormControl>
  );
};
