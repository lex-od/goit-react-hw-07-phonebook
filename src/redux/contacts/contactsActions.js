import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

// const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

// const loadContacts = createAction('contacts/load');

export {
    addContactRequest,
    addContactSuccess,
    addContactError,
    // deleteContact,
    changeFilter,
    // loadContacts,
};
