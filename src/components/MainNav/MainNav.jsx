import styles from './MainNav.module.scss';
import { NavLink } from 'react-router-dom';
export function MainNav() {
  return (
    <ul className={styles.mainNavList}>
      <NavLink to="/" className={styles.mainNavItem}>
        Home
      </NavLink>
      <NavLink to="contacts" className={styles.mainNavItem}>
        Contacts
      </NavLink>
    </ul>
  );
}
