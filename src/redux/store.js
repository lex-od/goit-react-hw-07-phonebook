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
import contactsReducer from './contacts/contactsReducer';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
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

// 🙀 С createAsyncThunk() нет необходимости добавлять
// экшены в игнор: ошибка приходит "нормального" типа

// import {
//     loadContactsError,
//     addContactError,
//     deleteContactError,
// } from './contacts/contactsActions';

// const errorActions = [
//     loadContactsError.type,
//     addContactError.type,
//     deleteContactError.type,
// ];

// ...errorActions,
