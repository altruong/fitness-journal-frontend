import { Form, Formik } from 'formik';
import React from 'react';
import { Wrapper } from '../shared/Wrapper';
import * as Yup from 'yup';
import { FormikControl } from '../shared/Form/FormikControl';

interface loginProps {}

const login: React.FC<loginProps> = ({}) => {
  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
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
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};
export default login;
