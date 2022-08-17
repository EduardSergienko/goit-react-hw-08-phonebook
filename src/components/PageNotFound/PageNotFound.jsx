import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.scss';
export default function PageNotFound() {
  return (
    <div className={styles.pageNotFoundWrap}>
      <h2 className={styles.pageNotFoundTitle}>Sorry, Page Not Found</h2>
      <Link className={styles.goHomeLink} to="/">
        Go to Home
      </Link>
    </div>
  );
}
