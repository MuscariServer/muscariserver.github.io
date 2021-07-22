import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <div>{typeof window === 'undefined' ? null : <Component {...pageProps} />}</div>
    <Header></Header>
    </>
  )
}

export default MyApp
