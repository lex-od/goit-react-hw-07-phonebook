import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const addContact = createAction('contacts/add', contact => ({
    payload: { id: uuid(), ...contact },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

const loadContacts = createAction('contacts/load');

const contactsActions = {
    addContact,
    deleteContact,
    changeFilter,
    loadContacts,
};
export default contactsActions;
