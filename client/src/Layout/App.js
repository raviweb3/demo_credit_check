// eslint-disable import/first
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import LandingPage from '../pages/landingPage/LandingPage';
import LoginPage from '../pages/loginPage';
import LogoutPage from '../pages/logoutPage';
import CreditKudosInitPage from '../pages/creditKudoInitPage';
import CreditSummaryPage from '../pages/creditSummaryPage';
import RedirectPage from '../pages/redirectPage';


import myGlobalRefs from '../globals';
import './App.scss';


import apolloClient from '../getClient';
import Navigation from '../customComponents/Common/Navigation/Navigation';

// We get hold of Credit Kudos API Reference in Global level and use it.
myGlobalRefs.myCreditKudos = window.CK;

class App extends Component {
  render() {
    return (
        <ApolloProvider client={apolloClient}>
         <Router>
          <div className="container-fulid">
            <Navigation/>
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
