import styles from '~/styles/Home.module.css'
import Header from "../components/header"
import { HashRouter, Switch, Route } from 'react-router-dom';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bgImage': any;
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
            <Route exact path="/" component={() => <>Top!</>} />
          </Switch>
        </div>
      </HashRouter>
    </>
  )
}

export default Home
