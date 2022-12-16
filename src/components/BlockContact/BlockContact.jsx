import { ContactList } from '../ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactSlice';

export const BlockContact = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <>
      {filteredContacts.map(contact => {
        const { name, number, id } = contact;
        return <ContactList name={name} number={number} id={id} key={id} />;
      })}
    </>
  );
};
