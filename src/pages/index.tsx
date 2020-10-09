import { Box, Flex, FormControl, Input } from '@chakra-ui/core';
import { Formik, Form, Field } from 'formik';
import { InputField } from '../components/InputField';
import { PostForm } from '../components/PostForm';
import { useCreatePostMutation } from '../generated/graphql';

const Index = () => {
  return (
    <>
      <PostForm />
    </>
  );
};
export default Index;
