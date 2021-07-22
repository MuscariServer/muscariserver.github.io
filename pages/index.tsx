import styles from '~/styles/Home.module.css'
import Header from "../components/header"
import { HashRouter, Switch, Route } from 'react-router-dom';
import TopPage from '~/components/pages/top';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bgImage': Element;
    }
  }
}

const Home = () => {
  return (
    <>
      <HashRouter>
        <Header></Header>
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
