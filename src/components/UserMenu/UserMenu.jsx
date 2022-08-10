import styles from './UserMenu.module.scss';
import { getUserName } from 'redux/auth/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';

export function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  return (
    <div className={styles.userMenuWrap}>
      <h2 className={styles.userMenuTitle}> Hello {userName} </h2>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Log Out
      </button>
    </div>
  );
}
