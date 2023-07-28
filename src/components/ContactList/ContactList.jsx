import { Contact } from 'components/Contact/Contact';
import React from 'react';
import { Ul } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ filteredContacts }) => {
//  const contacts = useSelector(state => state.contacts.contacts);

//  const dispatch = useDispatch();



  return (
    <Ul>
      <Contact
        // onRemoveContact={onRemoveContact}
        filteredContacts={filteredContacts}
      />
    </Ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  // onRemoveContact: PropTypes.func.isRequired,
};
