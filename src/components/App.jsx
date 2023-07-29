import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactList } from './ContactList/ContactList';
import { TitleH2 } from './App.styled';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);

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
      <PhonebookForm title="Phonebook"></PhonebookForm>
      <TitleH2>Contacts</TitleH2>

      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      <ToastContainer />
    </div>
  );
};
