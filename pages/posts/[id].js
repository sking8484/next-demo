import Layout from '../../components/layout'
import { getAllPostIds } from '../../lib/db-utils'
import { getPostById } from '../../lib/db-utils'
import Date from '../../components/date';

export async function getStaticProps({ params }) {
  let postData = await getPostById(params.id);
  return {
    props: {
      postData
    }
  }
}

export default function Post({postData}) {
  var returnVal = postData.map(v => (
      <Layout>
        {v.title}
        <br />
        {v.id}
        <br />
        <Date dateString = {v.date} />
        <br />
        {v.description}
      </Layout>
    )
  )
  return returnVal
}


export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback:false,
  }
}