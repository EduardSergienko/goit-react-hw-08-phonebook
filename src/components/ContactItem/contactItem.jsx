import PropTypes from 'prop-types';
import styles from './contactItem.module.scss';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading } from 'redux/store';
import { deleteContacts } from 'redux/contacts/contactsOperations';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
export const ContactItem = ({ name, number, itemId }) => {
  const [loading, setLoading] = useState(false);
  const stateIsLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!stateIsLoading) {
      setLoading(false);
    }
  }, [stateIsLoading]);
  const handleDeleteItem = id => {
    setLoading(true);
    dispatch(deleteContacts(id));
  };
  return (
    <li className={styles.contactList__item}>
      <p className={styles.contactList__name}> {name}: </p>
      <p className={styles.contactList__number}>{number}</p>
      <LoadingButton
        className={styles.contactList__btn}
        sx={{
          width: 100,
          fontSize: 11,
          fontWeight: 600,
          color: 'cornflowerblue',
        }}
        type="button"
        loading={loading}
        onClick={() => {
          handleDeleteItem(itemId);
        }}
        endIcon={<DeleteForeverOutlinedIcon />}
      >
        Delete
      </LoadingButton>
    </li>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
