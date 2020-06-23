import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function DynamicPage({ slug }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <div>DYNAMIC PAGE: {slug}</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: ['slug-1'] } }],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      slug: context.params.slug,
    },
  };
}
