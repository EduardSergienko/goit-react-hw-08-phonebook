import styles from 'components/Filter/filter.module.scss';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getValue, getContacts } from '../../redux/store';

export const Filter = () => {
  const value = useSelector(getValue);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  return (
    <>
      {contacts.length > 1 && (
        <label className={styles.label}>
          Find contacts by name
          <input
            className={styles.filter}
            onChange={e => dispatch(changeFilter(e.currentTarget.value))}
            type="text"
            value={value}
          />
        </label>
      )}
    </>
  );
};
