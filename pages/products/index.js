import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Products() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>Products</p>
        <p className={styles.description}>
          Open in app should be visible in top
        </p>
      </main>
    </div>
  );
}
