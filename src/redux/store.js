import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    // persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import {
    loadContactsError,
    addContactError,
    deleteContactError,
} from './contacts/contactsActions';
import contactsReducer from './contacts/contactsReducer';

const errorActions = [
    loadContactsError.type,
    addContactError.type,
    deleteContactError.type,
];

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,
                ...errorActions,
            ],
        },
    }),
];

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export {
    store,
    // persistor
};
