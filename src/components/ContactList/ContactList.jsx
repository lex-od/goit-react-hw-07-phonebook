import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './ContactList.module.scss';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts, dispItemBtnClick }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li className={css.contactItem} key={id}>
                <ContactItem
                    id={id}
                    name={name}
                    number={number}
                    onBtnClick={dispItemBtnClick}
                />
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const getFilteredContacts = (contacts, filter) => {
    const normFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normFilter),
    );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
    dispItemBtnClick: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
