import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Home from './components/Homepage/Home';
import Products from './components/Products/Products';
import SignUp from './components/SignUp/SignUp';
import Services from './components/Srvcs/Services';
import Footer from './components/UI/Footer';
import Navbar from './components/UI/Navbar';


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/travel-website/home" exact component={Home} />
          <Route path="/travel-website/services" exact component={Services} />
          <Route path="/travel-website/products" exact component={Products} />
          <Route path="/travel-website/sign-up" exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
