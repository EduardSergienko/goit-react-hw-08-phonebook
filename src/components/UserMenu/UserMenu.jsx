import styles from './UserMenu.module.scss';
import { getUserName } from 'redux/auth/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
export function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  return (
    <div className={styles.userMenuWrap}>
      <h2 className={styles.userMenuTitle}> Welcome {userName} </h2>
      <Button
        sx={{
          color: 'white',
          fontWeight: 600,
          border: 1,
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
