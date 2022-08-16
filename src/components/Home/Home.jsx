import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.homeWrap}>
      <h2 className={styles.homeTitle}>
        Welcome to the best phonebook app ever
      </h2>
    </div>
  );
}
