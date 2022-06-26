import '../styles/global.css'
import Link from 'next/link'
export default function App({ Component, pageProps }) {
  return <div className = 'wrapper'>
    <div className = 'navBar'>
      <Link href = '/posts/'>
        <a>Graph</a>
      </Link>
    </div>
    <Component className='component' {...pageProps} />
    </div>
}