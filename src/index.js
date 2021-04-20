import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize/modern-normalize.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles/global.scss';
import Phonebook from './Phonebook';
import {
    store,
    // persistor
} from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <Phonebook />
            {/* </PersistGate> */}
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
