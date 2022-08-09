import styles from './AuthNav.module.scss';
export function AuthNav() {
  return (
    <ul className={styles.authNavList}>
      <li className={styles.authNavItem}>Register</li>
      <li className={styles.authNavItem}>Log In</li>
    </ul>
  );
}
