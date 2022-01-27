import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>RN Links integration example</h1>

        <p className={styles.description}>
          For testing purposes of dev projects
        </p>

        <div className={styles.grid}>
          <a href='/app' className={styles.card}>
            <h3>Home&rarr;</h3>
          </a>

          <a href='/app/products' className={styles.card}>
            <h3>Products&rarr;</h3>
          </a>

          <a href='/cart' className={styles.card}>
            <h3>Cart&rarr;</h3>
          </a>

          <a href='/app/auth/login' className={styles.card}>
            <h3>Login&rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
