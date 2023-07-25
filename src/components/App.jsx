import { useEffect, useState } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { TitleH2 } from './App.styled';
import { Filter } from './Filter/Filter';
export const App = () => {
  const [contacts, setContacts] = useState(addContactWithLocalStorage ?? []);
  
  function addContactWithLocalStorage() {
    return JSON.parse(localStorage.getItem('contacts'));
  }

  const [filterContacts, setFilterContacs] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onRemoveContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const onAddContact = contactData => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === contactData.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }

    const finalContact = {
      id: nanoid(5),
      ...contactData,
    };

    setContacts([...contacts, finalContact]);
  };

  const onChangeFilter = event => {
    setFilterContacs(event.target.value);
  };

  const onFilteredContacts = () => {
    const normalFilter = filterContacts.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  };

  const filteredContacts = onFilteredContacts();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingTop: 50,
      }}
    >
      <PhonebookForm
        title="Phonebook"
        onAddContact={onAddContact}
      ></PhonebookForm>
      <TitleH2>Contacts</TitleH2>

      {contacts.length > 0 && (
        <>
          <Filter value={filterContacts} onChangeFilter={onChangeFilter} />
          <ContactList
            onRemoveContact={onRemoveContact}
            filteredContacts={filteredContacts}
          />
        </>
      )}
    </div>
  );
};
