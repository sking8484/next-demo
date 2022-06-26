import '../styles/global.css'
import Script from 'next/script';
import Link from 'next/link'
import Head from 'next/head'
export default function App({ Component, pageProps }) {

  return <>
  <div className = 'wrapper'>
    <div className = 'navBar'>
      <Link href = '/graph/'>
        <a>Graph</a>
      </Link>
    </div>
    <Component className='component' {...pageProps} />
  </div>
  </>
}