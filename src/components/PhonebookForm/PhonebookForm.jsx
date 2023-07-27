import React, { useState } from 'react';
import css from './PhonebookForm.module.css';

import { Formik, Form, Field } from 'formik';

import PropTypes from 'prop-types';

const initialValues = {
  name: '',
  number: '',
};

export const PhonebookForm = ({ title, onAddContact }) => {
  const [name, setName] = useState(initialValues.name);
  const [number, setNumber] = useState(initialValues.number);
  // const initialValues = {
  //   name: name,
  //   number: number,
  // };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (values, {resetForm}) => {
    // event.preventDefault();
    
    const contactData = {
      name,
      number,
    };
    console.log('contactData: ', contactData);
    
    console.log('values: ', values);

    onAddContact(contactData);

    // setName('');
    // setNumber('');
  };

  return (
    <>
      <h2 className={css.title}>{title}</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        onChange={handleInputChange}
      >
        <Form className={css.formStyle}>
          <label className={css.label}>
            <span className={css.span}>Name</span>
            <Field
              className={css.input}
              onChange={handleInputChange}
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              autoComplete="true"
              required
            />
          </label>
          <label className={css.label}>
            <span className={css.span}>Number</span>
            <Field
              className={css.input}
              onChange={handleInputChange}
              value={number}
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
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
  onAddContact: PropTypes.func.isRequired,
};
