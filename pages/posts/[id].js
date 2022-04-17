import Head from 'next/head';
import { getPostData, getPostsPaths } from '../../lib/posts';
import styles from '../../styles/utils.module.css';
import Layout from '../../components/Layout';
import Date from '../../components/Date';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsPaths();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}
