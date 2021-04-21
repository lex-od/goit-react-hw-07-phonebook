import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './contactsActions';
import { addContact, deleteContact, loadContacts } from './contactsOperations';

const itemsReducer = createReducer([], {
    [loadContacts.fulfilled]: (_, { payload }) => payload,

    [addContact.fulfilled]: (state, { payload }) => [...state, payload],

    [deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
    [loadContacts.pending]: () => true,
    [loadContacts.fulfilled]: () => false,
    [loadContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
});

const errorReducer = createReducer(null, {
    [loadContacts.pending]: () => null,
    [loadContacts.rejected]: (_, { error }) => error,

    [addContact.pending]: () => null,
    [addContact.rejected]: (_, { error }) => error,

    [deleteContact.pending]: () => null,
    [deleteContact.rejected]: (_, { error }) => error,
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading: loadingReducer,
    error: errorReducer,
});

// 🙀 Вариант без createAsyncThunk

// import {
//     loadContactsRequest,
//     loadContactsSuccess,
//     loadContactsError,
//     addContactRequest,
//     addContactSuccess,
//     addContactError,
//     deleteContactRequest,
//     deleteContactSuccess,
//     deleteContactError,
// } from './contactsActions';

// const itemsReducer = createReducer([], {
//     [loadContactsSuccess]: (_, { payload }) => payload,

//     [addContactSuccess]: (state, { payload }) => [...state, payload],

//     [deleteContactSuccess]: (state, { payload }) =>
//         state.filter(({ id }) => id !== payload),
// });

// const loadingReducer = createReducer(false, {
//     [loadContactsRequest]: () => true,
//     [loadContactsSuccess]: () => false,
//     [loadContactsError]: () => false,

//     [addContactRequest]: () => true,
//     [addContactSuccess]: () => false,
//     [addContactError]: () => false,

//     [deleteContactRequest]: () => true,
//     [deleteContactSuccess]: () => false,
//     [deleteContactError]: () => false,
// });

// const errorReducer = createReducer(null, {
//     [loadContactsRequest]: () => null,
//     [loadContactsError]: (_, { payload }) => payload,

//     [addContactRequest]: () => null,
//     [addContactError]: (_, { payload }) => payload,

//     [deleteContactRequest]: () => null,
//     [deleteContactError]: (_, { payload }) => payload,
// });
