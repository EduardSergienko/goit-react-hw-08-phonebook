import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.homeWrap}>
      <h2 className={styles.homeTitle}>Welcome to Home</h2>
    </div>
  );
}