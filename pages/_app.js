import '../styles/globals.css'
import Header from './components/Header'
import MobileHeader from './components/MobileHeader'

function MyApp({ Component, pageProps }) {
  return <><Header></Header>
    <MobileHeader></MobileHeader>
    <Component {...pageProps} />

  </>
}

export default MyApp
