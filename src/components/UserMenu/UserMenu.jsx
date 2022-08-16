import styles from './UserMenu.module.scss';
import { getUserEmail } from 'redux/auth/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
export function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  return (
    <div className={styles.userMenuWrap}>
      <h2 className={styles.userMenuTitle}> Welcome {userEmail} </h2>
      <Button
        sx={{
          color: 'white',
          fontWeight: 600,

          padding: '3px 8px',
          textTransform: 'none',
        }}
        variant="text"
        type="button"
        onClick={() => dispatch(logOutUser())}
        endIcon={<LogoutIcon />}
      >
        Log Out
      </Button>
    </div>
  );
}
