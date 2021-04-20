import axios from 'axios';
import contactsActions from './contactsActions';

const addContact = contact => async dispatch => {
    dispatch(contactsActions.addContactRequest);

    try {
        const { data } = await axios.post('/contacts', contact);
        dispatch(contactsActions.addContactSuccess(data));
    } catch (error) {
        dispatch(contactsActions.addContactError(error));
    }
};

const contactsOperations = { addContact };
export default contactsOperations;
