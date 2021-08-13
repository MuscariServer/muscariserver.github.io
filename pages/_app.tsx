import { AnimatePresence, motion } from 'framer-motion'
import '../styles/globals.css'
import '../styles/calendar.css'
import '../styles/tabs.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
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
    </AnimatePresence>
  )
}

export default MyApp
