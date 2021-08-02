import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import TopPage from '../components/pages/top'
import { motion } from 'framer-motion'
import Links from '../components/pages/links'
import Donate from '../components/pages/donate'
import Join from '../components/pages/join'
import Recruit from '../components/pages/recruit'
import Events from '../components/pages/events'
import Mods from '../components/pages/mods'
import Info from '../components/pages/info'

export default function Home() {
  var id = Math.floor(Math.random() * 23);
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
      <Head>
        <title>Muscari Server</title>
        <meta name="description" content="Muscariさーばー." />
        <link rel="shortcut icon" href='https://eighty88.github.io/MuscariWeb/images/icon/favicon/favicon.ico' />
        <link rel="apple-touch-icon" href='https://eighty88.github.io/MuscariWeb/images/icon/apple/apple-icon.png' />
      </Head>
      <HashRouter>
        <Sidebar></Sidebar>
        <div style={{
          backgroundImage: `linear-gradient(transparent, 90% , white), url(images/background/` + id + `.png)`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          width: '100%',
          left: '40px',
        }} className={styles.container}>
          <Switch>
            <Route path="/" exact component={TopPage} />
            <Route path="/mods" component={Mods} />
            <Route path="/join/:page" component={Join} />
            <Route path="/events" component={Events} />
            <Route path="/donate" component={Donate} />
            <Route path="/info" component={Info} />
            <Route path="/recruit" component={Recruit} />
            <Route path="/links" component={Links} />
          </Switch>
        </div>
      </HashRouter>
    </motion.div>
  )
}
