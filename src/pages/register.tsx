import { Form, Formik } from 'formik';
import React from 'react';
import { Wrapper } from '../shared/Wrapper';
import * as Yup from 'yup';
import { FormikControl } from '../shared/Form/FormikControl';
import { Button } from '@chakra-ui/core';

interface registerProps {}

const register: React.FC<registerProps> = ({}) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Enter first name'),
    lastName: Yup.string().required('Enter last name'),
    username: Yup.string().required('Enter a username'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    // [Matching condition, Error message] Matching condition could either be the password or empty string
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Required'),
  });

  const onSubmit = async (values) => {
    console.log('Form data', values);
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
                label='First Name'
                name='firstName'
              />
              <FormikControl
                control='input'
                label='Last Name'
                name='lastName'
              />
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
              <Button mt={4} onSubmit={onSubmit}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};
export default register;
