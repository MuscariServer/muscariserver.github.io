import styles from '~/styles/Home.module.css'
import { HashRouter, Switch, Route } from 'react-router-dom';
import styled from "styled-components";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bgImage': any;
    }
  }
}

const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        
      </Wrapper>
      <HashRouter>
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
