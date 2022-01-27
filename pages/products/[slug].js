import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

export default function ProductDetail() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>Product - {router.query.slug}</p>
        <p className={styles.description}>
          Open in app should be visible in top
        </p>
      </main>
    </div>
  );
}
