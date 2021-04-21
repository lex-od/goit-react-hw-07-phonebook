import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './ContactList.module.scss';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import ContactItem from '../ContactItem';
import { contactsSelectors } from '../../redux/contacts';

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

const mapStateToProps = state => ({
    contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
    dispItemBtnClick: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
