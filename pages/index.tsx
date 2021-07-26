import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

export default function Home() {
  return (
    <HashRouter>
      <Sidebar></Sidebar>
      <Route path="/">
      </Route>
    </HashRouter>
  )
}
