// eslint-disable import/first
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import LandingPage from './pages/landingPage';
import LoginPage from './pages/loginPage';
import LogoutPage from './pages/logoutPage';
import CreditKudosInitPage from './pages/creditKudoInitPage';
import CreditSummaryPage from './pages/creditSummaryPage';
import RedirectPage from './pages/redirectPage';


import myGlobalRefs from './globals';
import './App.css';

import apolloClient from './getClient';

// We get hold of Credit Kudos API Reference in Global level and use it.
myGlobalRefs.myCreditKudos = window.CK;

class App extends Component {
  render() {
    return (
        <ApolloProvider client={apolloClient}>
          <Router>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Credit Kudos Dashboard</Link>
                <div className="collpase navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/credit-kudos-init" className="nav-link">credit-kudos</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <br/>
              <Route path="/" exact component={LandingPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/logout" component={LogoutPage} />
              <Route path="/credit-summary" component={CreditSummaryPage} />
              <Route path="/credit-kudos-init" component={CreditKudosInitPage} />
              <Route path="/redirect-url" component={RedirectPage} />
            </div>
          </Router>
        </ApolloProvider>
    );
  }
}


export default App;
