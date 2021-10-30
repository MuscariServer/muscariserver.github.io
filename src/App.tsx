import React from 'react';
import './App.css';

import { HashRouter, Route, Switch } from 'react-router-dom'
import Sidebar from "./sidebar";

import 'styles/calendar.css'
import 'styles/tabs.css'

import TopPage from './pages/top'
import Links from './pages/links'
import Donate from './pages/donate'
import Recruit from './pages/recruit'
import Events from './pages/events'
import Info from './pages/info'
import JoinPage from './pages/join'

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Sidebar />
          <div className="Container">
              <Switch>
                  <Route path="/" exact component={TopPage} />
                  <Route path="/join/:page" component={JoinPage} />
                  <Route path="/join" component={JoinPage} />
                  <Route path="/events" component={Events} />
                  <Route path="/donate" component={Donate} />
                  <Route path="/info" component={Info} />
                  <Route path="/recruit" component={Recruit} />
                  <Route path="/links" component={Links} />
              </Switch>
          </div>
      </HashRouter>
    </div>
  );
}

export default App;
