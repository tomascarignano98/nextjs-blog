import Head from "next/head";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <p>First Post</p>
    </Layout>
  );
}
