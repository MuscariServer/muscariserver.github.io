import '../styles/globals.css'
import type { AppProps } from 'next/app'

declare namespace JSX {
  interface IntrinsicElements {
    'box-icon': { 
      type: string
      name: string
      color: string
      size: string 
      rotate: string 
      flip: string 
      border: string 
      animation: string
      pull: string }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <div>{typeof window === 'undefined' ? null : <Component {...pageProps} />}</div>
    </>
  )
}

export default MyApp
