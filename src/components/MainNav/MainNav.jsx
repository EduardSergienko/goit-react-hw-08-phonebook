import styles from './MainNav.module.scss';

export function MainNav() {
  return (
    <ul className={styles.mainNavList}>
      <li className={styles.mainNavItem}>Home</li>
      <li className={styles.mainNavItem}>Contacts</li>
    </ul>
  );
}
