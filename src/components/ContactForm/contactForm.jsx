import { useState, useEffect } from 'react';
import styles from './contactForm.module.scss';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContacts } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/store';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { getIsLoading } from 'redux/store';
export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const contactsItems = useSelector(getContacts);
  const stateIsLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!stateIsLoading) {
      setLoading(false);
    }
  }, [stateIsLoading]);

  const onInputtype = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onSubmiteForm = e => {
    e.preventDefault();
    setLoading(true);
    if (
      contactsItems.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContacts({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.contactForm} onSubmit={onSubmiteForm}>
      <label>
        <TextField
          label="Name"
          variant="standard"
          className={styles.contactForm__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputtype}
          sx={{
            marginBottom: 5,
          }}
        />
      </label>
      <label>
        <TextField
          label="Phone"
          variant="standard"
          className={styles.contactForm__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onInputtype}
          sx={{
            marginBottom: 5,
          }}
        />
      </label>

      <LoadingButton
        sx={{
          width: 100,
          fontSize: 11,
          fontWeight: 600,
          color: 'cornflowerblue',
        }}
        className={styles.contactForm__btn}
        type="submit"
        loading={loading}
      >
        Add Contact
      </LoadingButton>
    </form>
  );
}
