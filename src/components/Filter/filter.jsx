import styles from 'components/Filter/filter.module.scss';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getValue, getContacts } from '../../redux/store';
import { TextField } from '@mui/material';

export const Filter = () => {
  const value = useSelector(getValue);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  return (
    <>
      {contacts.length > 1 && (
        <TextField
          label="Find contacts by name"
          type="text"
          variant="standard"
          value={value}
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
          sx={{
            margin: '0 auto',
            display: 'block',
            width: 200,
            marginBottom: 3,
            '& .MuiInputLabel-root': {
              left: 16,
            },
          }}
        />
      )}
    </>
  );
};
