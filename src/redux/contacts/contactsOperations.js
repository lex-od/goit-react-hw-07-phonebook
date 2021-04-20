import axios from 'axios';
import {
    loadContactsRequest,
    loadContactsSuccess,
    loadContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './contactsActions';

axios.defaults.baseURL = 'http://localhost:4040';

const loadContacts = () => async dispatch => {
    dispatch(loadContactsRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(loadContactsSuccess(data));
    } catch (error) {
        dispatch(loadContactsError(error));
    }
};

const addContact = contact => async dispatch => {
    dispatch(addContactRequest());

    try {
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error));
    }
};

const deleteContact = id => async dispatch => {
    dispatch(deleteContactRequest());

    try {
        await axios.delete(`/contacts/${id}`);
        dispatch(deleteContactSuccess(id));
    } catch (error) {
        dispatch(deleteContactError(error));
    }
};

export { addContact, deleteContact, loadContacts };
