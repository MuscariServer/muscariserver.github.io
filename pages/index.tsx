import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

export default function Home() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <Route path="/">
      </Route>
    </BrowserRouter>
  )
}
