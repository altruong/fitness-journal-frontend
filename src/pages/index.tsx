import { Formik, Form, Field } from 'formik';

interface Values {
  title: string;
  text: string;
}

const createPost = () => {

}

const Index = () => (
  <>
    <div> Hello world</div>
    <Formik 
    initialValues={{ title: '', text: '' }
    onSubmit={async (values: Values) => {
      createPost();
    }}>
      <Form>
        <label htmlFor='title'>First Name</label>
        <Field id='title' name='title' placeholder='insert title' />

        <label htmlFor='text'>Last Name</label>
        <Field id='text' name='text' placeholder='type text here' />

        <label htmlFor='email'>Email</label>
        <Field
          id='email'
          name='email'
          placeholder='john@acme.com'
          type='email'
        />

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  </>
);

export default Index;
