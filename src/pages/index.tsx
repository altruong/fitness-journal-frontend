import { Box, Flex, FormControl, Input } from '@chakra-ui/core';
import { Formik, Form, Field } from 'formik';

interface Values {
  title: string;
  text: string;
}

const createPost = () => {
  console.log('Hello im here');
};

const Index = () => (
  <>
    <FormControl>
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={async (values: Values) => {
          createPost();
        }}
      >
        <Flex align='center'>
          <Box flex={1} mt={4} maxW='500px'>
            <Form>
              <label htmlFor='title'>First Name</label>
              <Input id='title' name='title' placeholder='insert title' />

              <label htmlFor='text'>Last Name</label>
              <Input id='text' name='text' placeholder='type text here' />

              <label htmlFor='email'>Email</label>
              <Input
                id='email'
                name='email'
                placeholder='john@acme.com'
                type='email'
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
