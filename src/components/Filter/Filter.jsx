import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './Filter.module.scss';
import { changeFilter } from '../../redux/contacts/contactsActions';

const Filter = ({ value, dispChange }) => (
    <label>
        Найти контакты по имени
        <input
            className={css.label}
            type="text"
            name="filter"
            value={value}
            onChange={e => dispChange(e.target.value)}
        />
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    dispChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
    dispChange: value => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
