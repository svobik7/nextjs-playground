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

        <div className={styles.gridWrapper}>
          <div className={[styles.grid, styles.gridBlue].join(' ')}>
            <p className={styles.description}>Universal links</p>

            <a href='/products' className={styles.card}>
              <h3>Products&rarr;</h3>
            </a>

            <a href='/products/denim-shirt' className={styles.card}>
              <h3>Products - Denim shirt&rarr;</h3>
            </a>

            <a href='/cart' className={styles.card}>
              <h3>Cart&rarr;</h3>
            </a>

            <a href='/auth/login' className={styles.card}>
              <h3>Login&rarr;</h3>
            </a>
          </div>

          <div className={[styles.grid, styles.gridRed].join(' ')}>
            <p className={styles.description}>Deep links</p>

            <a href='rnhw://products' className={styles.card}>
              <h3>Products&rarr;</h3>
            </a>

            <a href='rnhw://products/denim-shirt' className={styles.card}>
              <h3>Products - Denim shirt&rarr;</h3>
            </a>

            <a href='rnhw://cart' className={styles.card}>
              <h3>Cart&rarr;</h3>
            </a>

            <a href='rnhw://auth/login' className={styles.card}>
              <h3>Login&rarr;</h3>
            </a>
          </div>
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
