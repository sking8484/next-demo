import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <div className = 'wrapper'>
    <Component className='component' {...pageProps} />
    </div>
}