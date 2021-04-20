import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    addContactError,
    addContactRequest,
    addContactSuccess,
    changeFilter,
} from './contactsActions';

const itemsReducer = createReducer([], {
    [addContactSuccess]: (state, { payload }) => [payload, ...state],

    // [contactsActions.deleteContact]: (state, { payload }) =>
    //     state.filter(({ id }) => id !== payload),
    // [contactsActions.loadContacts]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
});

const errorReducer = createReducer(null, {
    [addContactRequest]: () => null,
    [addContactError]: (_, { payload }) => payload,
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading: loadingReducer,
    error: errorReducer,
});
