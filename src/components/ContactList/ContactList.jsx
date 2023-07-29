import { Contact } from 'components/Contact/Contact';
import React from 'react';
import { Ul } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilterValue);
  
  const onFilteredContacts = () => {
    const normalFilter = filterContacts.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  };

  const filteredContacts = onFilteredContacts();
  return (
    <Ul>
      <Contact filteredContacts={filteredContacts} />
    </Ul>
  );
};


