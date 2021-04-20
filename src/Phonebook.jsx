import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './styles/Phonebook.module.scss';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { loadContacts } from './redux/contacts/contactsOperations';

const Phonebook = ({ dispLoadContacts }) => {
    useEffect(() => {
        dispLoadContacts();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="container">
            <h1 className={css.telBookTitle}>Телефонная книга</h1>
            <ContactForm />

            <h2 className={css.contactsTitle}>Контакты</h2>
            <Filter />
            <ContactList />
        </div>
    );
};

Phonebook.propTypes = {
    dispLoadContacts: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    dispLoadContacts: () => dispatch(loadContacts()),
});

export default connect(null, mapDispatchToProps)(Phonebook);
