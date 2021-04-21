import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contacts/changeFilter');

export { changeFilter };

// 🙀 Вариант без createAsyncThunk()

// const loadContactsRequest = createAction('contacts/loadContactsRequest');
// const loadContactsSuccess = createAction('contacts/loadContactsSuccess');
// const loadContactsError = createAction('contacts/loadContactsError');

// const addContactRequest = createAction('contacts/addContactRequest');
// const addContactSuccess = createAction('contacts/addContactSuccess');
// const addContactError = createAction('contacts/addContactError');

// const deleteContactRequest = createAction('contacts/deleteContactRequest');
// const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
// const deleteContactError = createAction('contacts/deleteContactError');

// export {
//     loadContactsRequest,
//     loadContactsSuccess,
//     loadContactsError,
//     addContactRequest,
//     addContactSuccess,
//     addContactError,
//     deleteContactRequest,
//     deleteContactSuccess,
//     deleteContactError,
// };
