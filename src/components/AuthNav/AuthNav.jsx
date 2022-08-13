import styles from './AuthNav.module.scss';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
export function AuthNav() {
  return (
    <ul className={styles.authNavList}>
      <Button
        variant="text"
        sx={{
          color: 'white',
          fontWeight: 600,
          border: 1,
          padding: '3px 8px',

          marginRight: 3,
        }}
        endIcon={<AssignmentIndOutlinedIcon />}
      >
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.authNavItem
          }
        >
          Register
        </NavLink>
      </Button>
      <Button
        sx={{
          color: 'white',
          fontWeight: 600,
          border: 1,
          padding: '3px 8px',
        }}
        variant="text"
        endIcon={<LoginOutlinedIcon />}
      >
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.authNavItem
          }
        >
          Log In
        </NavLink>
      </Button>
    </ul>
  );
}
