import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const itemsReducer = createReducer([], {
    [contactsActions.addContact]: (state, { payload }) => [payload, ...state],
    [contactsActions.deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
    [contactsActions.loadContacts]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
    [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});
export default contactsReducer;

// import actionTypes from './contactsTypes';

// const itemsReducer = (state = [], { type, payload }) => {
//     switch (type) {
//         case actionTypes.ADD_CONTACT:
//             return [payload, ...state];
//         case actionTypes.DELETE_CONTACT:
//             return state.filter(({ id }) => id !== payload);
//         case actionTypes.LOAD_CONTACTS:
//             return payload;
//         default:
//             return state;
//     }
// };

// const filterReducer = (state = '', { type, payload }) => {
//     switch (type) {
//         case actionTypes.CHANGE_FILTER:
//             return payload;
//         default:
//             return state;
//     }
// };
