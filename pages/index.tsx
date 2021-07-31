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

export default function Home() {
  var id = Math.floor(Math.random() * 17) + 1;
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
      <HashRouter>
        <Sidebar></Sidebar>
        <div style={{
          backgroundImage: `linear-gradient(transparent, 90% , white), url(images/background/` + id + `.png)`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          width: '100%',
        }} className={styles.container}>
          <Switch>
            <Route path="/" exact component={TopPage} />
            <Route path="/join" exact component={Join} />
            <Route path="/events" exact component={Events} />
            <Route path="/donate" exact component={Donate} />
            <Route path="/recruit" exact component={Recruit} />
            <Route path="/links" exact component={Links} />
          </Switch>
        </div>
      </HashRouter>
    </motion.div>
  )
}
