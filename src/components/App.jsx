import { useState } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactList } from './ContactList/ContactList';
import { TitleH2 } from './App.styled';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from 'redux/contactsReducer';

export const toastConfig = {
  position: 'top-center',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  style: {
    fontSize: '16px',
  },
};

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const [filterContacts, setFilterContacs] = useState('');

  const onChangeFilter = event => {
    setFilterContacs(event.target.value);
  };

  const onFilteredContacts = () => {
    const normalFilter = filterContacts.toLowerCase();

    // console.log('contacts: ', contacts);
    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(normalFilter)
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
        // onAddContact={onAddContact}
      ></PhonebookForm>
      <TitleH2>Contacts</TitleH2>

      {contacts.length > 0 && (
        <>
          <Filter value={filterContacts} onChangeFilter={onChangeFilter} />
          <ContactList
            // onRemoveContact={onRemoveContact}
            filteredContacts={filteredContacts}
          />
          <ToastContainer />
        </>
      )}
    </div>
  );
};
