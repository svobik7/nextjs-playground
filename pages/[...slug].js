import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Redirect() {
  const router = useRouter();
  const slugParam = router.query.slug;

  useEffect(() => {
    if (!slugParam) return;

    const slug = slugParam.filter((i) => i !== 'app').join('/');
    const target = `rnhw://${slug}`;

    window.location = target;
  }, [slugParam]);

  return <div>Redirecting...</div>;
}
