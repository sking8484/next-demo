import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from './date';
export default function PostInfo(props) {
  var postInfo = props.allData.map(data => {
    return (
      <li className = {utilStyles.listItem} key = {data.id}>
        {data.title}
        <br />
        <Link href = {`/posts/${data.id}`}>
        <a>{data.id}</a>
        </Link>
        <br />
        <Date dateString = {data.date}/>
      </li>
    )
  })

  return (
    <section className = {`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className = {utilStyles.headingLg}>Blog</h2>
      <ul className = {utilStyles.list}>
        {postInfo}
      </ul>
    </section>

  )
}