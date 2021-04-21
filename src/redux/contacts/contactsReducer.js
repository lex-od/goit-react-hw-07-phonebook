import { createReducer, combineReducers } from '@reduxjs/toolkit';
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
    changeFilter,
} from './contactsActions';

const itemsReducer = createReducer([], {
    [loadContactsSuccess]: (_, { payload }) => payload,

    [addContactSuccess]: (state, { payload }) => [...state, payload],

    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
    [loadContactsRequest]: () => true,
    [loadContactsSuccess]: () => false,
    [loadContactsError]: () => false,

    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,

    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const errorReducer = createReducer(null, {
    [loadContactsRequest]: () => null,
    [loadContactsError]: (_, { payload }) => payload,

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
