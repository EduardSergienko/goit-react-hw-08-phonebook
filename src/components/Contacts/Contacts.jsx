import styles from './Contacts.module.scss';
import ContactForm from 'components/ContactForm/contactForm';
import { Filter } from 'components/Filter/filter';
import { ContactList } from 'components/ContactList/contactList';

export function Contacts() {
  return (
    <div>
      <h1 className={styles.contactTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.contactTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
