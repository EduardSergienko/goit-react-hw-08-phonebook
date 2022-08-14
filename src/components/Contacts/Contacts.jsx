import styles from './Contacts.module.scss';
import ContactForm from 'components/ContactForm/contactForm';
import { Filter } from 'components/Filter/filter';
import { ContactList } from 'components/ContactList/contactList';
import Container from '../Container/Container';
export default function Contacts() {
  return (
    <Container>
      <h1 className={styles.contactTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.contactTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
