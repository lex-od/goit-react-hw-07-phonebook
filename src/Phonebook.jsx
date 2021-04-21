import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import css from './styles/Phonebook.module.scss';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { loadContacts } from './redux/contacts/contactsOperations';
import { contactsSelectors } from './redux/contacts';

const Phonebook = ({ isLoading, error }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadContacts());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="container">
            <h1 className={css.telBookTitle}>Телефонная книга</h1>
            <ContactForm />

            <h2 className={css.contactsTitle}>Контакты</h2>
            <Filter />

            {isLoading && (
                <Loader
                    type="ThreeDots"
                    color="#08d82b"
                    // height={50}
                    width={120}
                    timeout={0}
                    className={css.loader}
                />
            )}

            {error && (
                <p className={css.error}>
                    Что-то пошло не так! {error.name}: {error.message}
                </p>
            )}

            <ContactList />
        </div>
    );
};

Phonebook.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
};

const mapStateToProps = state => ({
    isLoading: contactsSelectors.getLoading(state),
    error: contactsSelectors.getError(state),
});

export default connect(mapStateToProps)(Phonebook);

// const mapDispatchToProps = dispatch => ({
//     dispLoadContacts: () => dispatch(loadContacts()),
// });
