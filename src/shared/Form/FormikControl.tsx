import React from 'react';
import { InputField } from './InputField';

type FormikControlProps = React.InputHTMLAttributes<HTMLInputElement> & {
  control: string;
  name: string;
  type?: string;
  label?: string;
};

export const FormikControl: React.FC<FormikControlProps> = ({
  control,
  ...props
}) => {
  switch (control) {
    case 'input':
      const { label, name, ...rest } = props;
      //console.log('rest', { ...rest });
      return <InputField name={name} label={label} {...rest} />;
    // case 'textarea':
    //   return <TextArea {...rest} />;
    // case 'select':
    //   return <Select {...rest} />;
    // case 'radio':
    //   return <RadioButton {...rest} />;
    // case 'checkbox':
    //   return <CheckBox {...rest} />;
    // case 'date':
    //   return <DatePicker {...rest} />;
    default:
      return null;
  }
};
