import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <base href="https://eighty88.github.io/MuscariWeb/"></base>
    <Component {...pageProps}/>
    <Header></Header>
    </>
  )
}

export default MyApp
