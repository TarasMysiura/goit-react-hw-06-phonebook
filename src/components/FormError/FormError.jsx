import React from 'react';
import { ErrorText } from './FormError.styled';
import { ErrorMessage } from 'formik';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    ></ErrorMessage>
  );
};
