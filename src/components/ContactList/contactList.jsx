import styles from 'components/ContactList/contactList.module.scss';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { ContactItem } from 'components/ContactItem/contactItem';
import { deleteContacts } from 'redux/contacts/contactsOperations';
import { getValue, getContacts } from '../../redux/store';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
export const ContactList = () => {
  const items = useSelector(getContacts);
  const filter = useSelector(getValue);
  const toLower = filter.toLowerCase();
  const filteredContactList = items.filter(contact =>
    contact.name.toLowerCase().includes(toLower)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {filteredContactList.length > 0 ? (
        <ul className={styles.contactList}>
          {filteredContactList.map(({ id, name, phone }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                number={phone}
                onDeleteBtnClick={() => dispatch(deleteContacts(id))}
              />
            );
          })}
        </ul>
      ) : (
        <h2 className={styles.appTitle}>Your contact list is empty...</h2>
      )}
    </>
  );
};
