import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import getAllData from '../lib/db-utils'
import PostInfo from '../components/PostInfo'
export async function getStaticProps() {
  let allData = await getAllData();
  return {
    props: {
      allData,
    }
  }
}

export default function Home({allData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <PostInfo allData = {allData}/>
    </Layout>
  )
}