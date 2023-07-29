import React from 'react';
import css from './PhonebookForm.module.css';

import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import PropTypes from 'prop-types';
import { FormError } from 'components/FormError/FormError';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';
import { toastConfig } from 'redux/data';

const schema = yup.object().shape({
  name: yup.string('no valid name').required('Required'),
  number: yup.number('no valid name').required('Required').positive().integer(),
});

export const PhonebookForm = ({ title }) => {
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const onAddContact = values => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInContacts) {
      toast.error(`${values.name} is already in contacts`, toastConfig);
      return;
    }

    const finalContact = {
      id: nanoid(5),
      ...values,
    };

    dispatch(addContact(finalContact));
  };

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <>
      <h2 className={css.title}>{title}</h2>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={css.formStyle}>
          <label className={css.label}>
            <span className={css.span}>Name</span>
            <Field
              className={css.input}
              type="text"
              name="name"
              autoComplete="true"
            />
            <FormError name="name" />
          </label>
          <label className={css.label}>
            <span className={css.span}>Number</span>
            <Field
              className={css.input}
              type="tel"
              name="number"
              autoComplete="true"
            />
            <FormError name="number" />
          </label>

          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

PhonebookForm.propTypes = {
  title: PropTypes.string.isRequired,
};
