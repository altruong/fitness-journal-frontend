import { Form, Formik } from 'formik';
import React from 'react';
import { Wrapper } from 'shared/Wrapper';
import * as Yup from 'yup';
import { FormikControl } from 'shared/Form/FormikControl';
import { Button } from '@chakra-ui/react';
import { useRegisterMutation } from 'generated/graphql';

const register: React.FC = () => {
  const [register] = useRegisterMutation();

  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
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
      .required('Type password again to confirm'),
  });

  const onSubmit = async (preValues) => {
    // Take out confirmPassword field
    const { confirmPassword, ...values } = preValues;
    console.log('Form data', values);
    const response = await register({
      variables: { input: values },
    });
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
          //console.log(formik);
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
              <FormikControl control='input' label='Username' name='username' />
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
              <FormikControl
                control='input'
                type='password'
                label='Confirm Password'
                name='confirmPassword'
              />
              <Button type='submit' mt={4}>
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
