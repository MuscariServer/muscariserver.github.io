import styles from '~/styles/Home.module.css'
import Header from "../components/header"
import { HashRouter, Switch, Route } from 'react-router-dom';
import TopPage from '~/components/pages/top';
import Sidebar from '~/components/sidebar';

const Home = () => {
  return (
    <>
      <HashRouter>
        <Sidebar></Sidebar>
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={TopPage} />
          </Switch>
        </div>
      </HashRouter>
    </>
  )
}

export default Home
