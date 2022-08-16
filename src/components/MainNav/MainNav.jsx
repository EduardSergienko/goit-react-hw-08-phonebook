import styles from './MainNav.module.scss';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
export function MainNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <ul className={styles.mainNavList}>
      <Button variant="text">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.mainNavItem
          }
        >
          Home
        </NavLink>
      </Button>
      {isLoggedIn && (
        <Button variant="text">
          <NavLink
            to="contacts"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.mainNavItem
            }
          >
            Contacts
          </NavLink>
        </Button>
      )}
    </ul>
  );
}
