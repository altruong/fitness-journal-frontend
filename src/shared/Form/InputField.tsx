import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field, useField } from 'formik';
import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
}

export const InputField: React.FC<InputFieldProps> = (props) => {
  const { label, name, ...rest } = props;

  // Field contains contents of the input field
  const [field, meta] = useField(props);
  const { error, touched } = meta;
  return (
    <FormControl isInvalid={error && touched}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} {...rest} {...field} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
