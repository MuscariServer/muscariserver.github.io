import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import { HashRouter, Route, Switch } from 'react-router-dom'
import TopPage from '../components/pages/top'
import Links from '../components/pages/links'
import Donate from '../components/pages/donate'
import Recruit from '../components/pages/recruit'
import Events from '../components/pages/events'
import Info from '../components/pages/info'
import JoinSelect from '../components/pages/join'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Muscari Server</title>
        <meta name="description" content="Muscariサーバー. Muscari Communityは、選りすぐりのMod、独自のレシピ、独自の仕様からなるのんびりとしたマイクライフを提供するサーバーです。" />
        <link rel="shortcut icon" href='https://muscari.f5.si/images/icon/favicon/favicon.ico' />
        <link rel="apple-touch-icon" href='https://muscari.f5.si/images/icon/apple/apple-icon.png' />
      </Head>
      <HashRouter>
        <Sidebar></Sidebar>
        <div style={{
          backgroundImage: `linear-gradient(transparent, 90% , white), url(images/background/skybees.png)`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          width: '100%',
          left: '40px',
          display: 'flex',
        }} className={styles.container}>
            <Switch>
              <Route path="/" exact component={TopPage} />
              <Route path="/join/:page" component={JoinSelect} />
              <Route path="/join" component={JoinSelect} />
              <Route path="/events" component={Events} />
              <Route path="/donate" component={Donate} />
              <Route path="/info" component={Info} />
              <Route path="/recruit" component={Recruit} />
              <Route path="/links" component={Links} />
            </Switch>
        </div>
      </HashRouter>
    </div>
  )
}
