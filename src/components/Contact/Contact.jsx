import React from 'react';
import { Button, Li, NumberSpan, Span } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const Contact = ({ filteredContacts }) => {
  const dispatch = useDispatch();

  const onRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };

  return filteredContacts.map(({ id, name, number }) => (
    <Li key={id}>
      <Span>{name}:</Span>
      <NumberSpan>{number}</NumberSpan>
      <Button type="button" onClick={() => onRemoveContact(id)}>
        Delete
      </Button>
    </Li>
  ));
};

Contact.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
