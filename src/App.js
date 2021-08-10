import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/UI/Navbar';


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
