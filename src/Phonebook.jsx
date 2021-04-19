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
