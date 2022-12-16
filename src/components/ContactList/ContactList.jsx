import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

import { ListUl, ListLi, BtnDelete } from './ContactList.styled';
import { MdOutlineContactPhone } from 'react-icons/md';

export const ContactList = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <ListUl>
      <ListLi key={id}>
        <MdOutlineContactPhone />
        {name}: {number}
        <BtnDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </BtnDelete>
      </ListLi>
    </ListUl>
  );
};
