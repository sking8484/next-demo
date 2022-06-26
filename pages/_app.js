import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <div className = 'wrapper'>
    <div className = 'navBar'></div>
    <Component className='component' {...pageProps} />
    </div>
}