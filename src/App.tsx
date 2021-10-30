import React from 'react';
import './App.css';

import { HashRouter, Route, Switch } from 'react-router-dom'
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Sidebar />
          <div className="Container">

          </div>
      </HashRouter>
    </div>
  );
}

export default App;
