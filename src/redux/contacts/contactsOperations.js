import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
} from './contactsActions';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = contact => async dispatch => {
    dispatch(addContactRequest());

    try {
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error));
    }
};

export { addContact };
