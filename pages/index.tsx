import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

export default function Home() {
  var id = Math.floor(Math.random() * 18) + 1;
  return (
    <HashRouter>
      <Sidebar></Sidebar>
      <div style={{ 
        backgroundImage: `linear-gradient(transparent, 90% , white), url(/images/background/` + id + `.png)`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        width: '100%',
      }} className={styles.container}>
          <Route path="/">
          </Route>
      </div>
    </HashRouter>
  )
}
