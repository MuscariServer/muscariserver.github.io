import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/header"
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head><base href="https://eighty88.github.io/MuscariWeb/"/></Head>
    
    <Component {...pageProps}/>
    <Header></Header>
    </>
  )
}

export default MyApp
