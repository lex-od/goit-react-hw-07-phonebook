import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const itemsReducer = createReducer([], {
    [contactsActions.addContactSuccess]: (state, { payload }) => [
        payload,
        ...state,
    ],

    [contactsActions.deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
    // [contactsActions.loadContacts]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
    [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});
export default contactsReducer;
