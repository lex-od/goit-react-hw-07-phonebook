import css from './styles/Phonebook.module.scss';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const Phonebook = () => (
    <div className="container">
        <h1 className={css.telBookTitle}>Телефонная книга</h1>
        <ContactForm />

        <h2 className={css.contactsTitle}>Контакты</h2>
        <Filter />
        <ContactList />
    </div>
);

export default Phonebook;

// 📌 Альтернативная реализация localStorage

// import { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import contactsActions from './redux/contacts/contactsActions';

// static propTypes = {
//     dispLoadContacts: PropTypes.func.isRequired,
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         }),
//     ).isRequired,
// };

// componentDidMount() {
//     const savedContacts = JSON.parse(localStorage.getItem('contacts'));
//     if (savedContacts) {
//         this.props.dispLoadContacts(savedContacts);
//     }
// }

// componentDidUpdate(prevProps) {
//     const { contacts } = this.props;

//     if (contacts !== prevProps.contacts) {
//         localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
// }

// const mapStateToProps = state => ({
//     contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//     dispLoadContacts: contacts =>
//         dispatch(contactsActions.loadContacts(contacts)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
