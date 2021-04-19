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

// import actionTypes from './contactsTypes';

// const addContact = contact => ({
//     type: actionTypes.ADD_CONTACT,
//     payload: { id: uuid(), ...contact },
// });

// const deleteContact = id => ({
//     type: actionTypes.DELETE_CONTACT,
//     payload: id,
// });

// const changeFilter = value => ({
//     type: actionTypes.CHANGE_FILTER,
//     payload: value,
// });

// const loadContacts = contacts => ({
//     type: actionTypes.LOAD_CONTACTS,
//     payload: contacts,
// });
