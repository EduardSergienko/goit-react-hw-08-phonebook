import styles from './AppBar.module.scss';
export function AppBar({ children }) {
  return <header className={styles.appBar}>{children}</header>;
}
