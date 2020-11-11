import { Form, Formik } from 'formik';
import React from 'react';
import { Wrapper } from '../shared/Wrapper';
import * as Yup from 'yup';
import { FormikControl } from '../shared/Form/FormikControl';
import { Button } from '@chakra-ui/core';
import { useLoginMutation } from '../generated/graphql';

const login: React.FC = () => {
  const [login] = useLoginMutation();

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async (values) => {
    console.log('Form data', values);
    const response = await login({ variables: values });
    console.log(response);
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control='input'
                type='email'
                label='Email'
                name='email'
              />
              <FormikControl
                control='input'
                type='password'
                label='Password'
                name='password'
              />
              <Button type='submit' mt={4} color='blue'>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};
export default login;