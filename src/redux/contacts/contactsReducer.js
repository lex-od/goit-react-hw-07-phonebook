import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
} from './contactsActions';

const itemsReducer = createReducer([], {
    [addContactSuccess]: (state, { payload }) => [payload, ...state],

    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
    // [contactsActions.loadContacts]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,

    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const errorReducer = createReducer(null, {
    [addContactRequest]: () => null,
    [addContactError]: (_, { payload }) => payload,

    [deleteContactRequest]: () => null,
    [deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading: loadingReducer,
    error: errorReducer,
});
