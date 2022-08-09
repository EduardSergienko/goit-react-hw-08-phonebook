import { useState } from 'react';
import styles from './contactForm.module.scss';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContacts } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/store';
export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsItems = useSelector(getContacts);
  const dispatch = useDispatch();

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

    if (
      contactsItems.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContacts({ name, number }));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={styles.contactForm} onSubmit={onSubmiteForm}>
      <label>
        <p className={styles.contactForm__label}>Name</p>
        <input
          className={styles.contactForm__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputtype}
        />
      </label>
      <label>
        <p className={styles.contactForm__label}>Phone</p>
        <input
          className={styles.contactForm__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onInputtype}
        />
      </label>
      <button className={styles.contactForm__btn} type="submit">
        Add Contact
      </button>
    </form>
  );
}
