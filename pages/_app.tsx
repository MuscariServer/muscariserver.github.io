import { motion } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <motion.div
    animate={{
      x: 0,
      opacity: 1
    }}
    initial={{
      opacity: 0
    }}
    exit={{
      opacity: 0
    }}
    transition={{
      duration: 0.2
    }}
  >
    <div>{typeof window === 'undefined' ? null : <Component {...pageProps} />}</div>
    </motion.div>
  )
}

export default MyApp
