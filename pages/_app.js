import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <div className = 'wrapper'>
    <div className = 'navBar'>x</div>
    <Component className='component' {...pageProps} />
    </div>
}