import React from 'react';
import {
  Button,
  Form,
  Input,
  Label,
  Span,
  TitleH2,
} from './PhonebookForm.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

export const PhonebookForm = ({ title, onAddContact }) => {
  const { name, number } = useSelector((state) => state);
  const dispatch = useDispatch();


  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        dispatch({ type: 'name', paiload: value });
        break;
      case 'number':
        dispatch({ type: 'number', paiload: value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contactData = {
      name,
      number,
    };

    onAddContact(contactData);

    dispatch({ type: 'name', paiload: '' });
    dispatch({ type: 'number', paiload: '' });
  };

  return (
    <>
      <TitleH2>{title}</TitleH2>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Span>Name</Span>
          <Input
            onChange={handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            autoComplete="true"
            required
          />
        </Label>
        <Label>
          <Span>Number</Span>
          <Input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

PhonebookForm.propTypes = {
  title: PropTypes.string.isRequired,
  onAddContact: PropTypes.func.isRequired,
};
