import { Box, Flex, FormControl, Input } from '@chakra-ui/core';
import { Formik, Form, Field } from 'formik';
import { InputField } from '../components/InputField';

interface Values {
  title: string;
  text: string;
}

const createPost = (values: Values) => {
  console.log(values);
};

const Index = () => (
  <>
    <FormControl>
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={async (values: Values) => {
          createPost(values);
        }}
      >
        <Flex align='center'>
          <Box flex={1} mt={4} maxW='500px'>
            <Form>
              <InputField
                id='title'
                name='title'
                placeholder='insert title'
                label='First Name'
              />
              <InputField
                id='text'
                name='text'
                placeholder='type text here'
                label='Last Name'
              />
              <button type='submit'>Submit</button>
            </Form>
          </Box>
        </Flex>
      </Formik>
    </FormControl>
  </>
);

export default Index;
