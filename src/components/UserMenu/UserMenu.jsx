import styles from './UserMenu.module.scss';

export function UserMenu() {
  return (
    <div className={styles.userMenuWrap}>
      <h2 className={styles.userMenuTitle}>Hello</h2>
      <button type="button">Log Out</button>
    </div>
  );
}
