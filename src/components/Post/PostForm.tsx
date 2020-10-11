import { FormControl, Flex, Box } from '@chakra-ui/core';
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
  const [createPost] = useCreatePostMutation();

  return (
    <FormControl>
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={async (values: Values) => {
          console.log(values);
          const response = await createPost({ variables: values });
          if (response.errors) {
            console.log(response);
          }
        }}
      >
        <Flex mb={4} justify={'center'}>
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
              <button type='submit'>Submit</button>
            </Form>
          </Box>
        </Flex>
      </Formik>
    </FormControl>
  );
};
