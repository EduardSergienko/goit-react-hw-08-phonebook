import styles from './AuthNav.module.scss';
import { NavLink } from 'react-router-dom';
export function AuthNav() {
  return (
    <ul className={styles.authNavList}>
      <NavLink to="/register" className={styles.authNavItem}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.authNavItem}>
        Log In
      </NavLink>
    </ul>
  );
}
