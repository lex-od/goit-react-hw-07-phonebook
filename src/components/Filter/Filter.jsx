import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './Filter.module.scss';
import { changeFilter } from '../../redux/contacts/contactsActions';
import { contactsSelectors } from '../../redux/contacts';

const Filter = ({ value, dispChange }) => (
    <label className={css.label}>
        Найти контакты по имени
        <input
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
    value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    dispChange: value => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
