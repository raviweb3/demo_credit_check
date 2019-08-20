// eslint-disable import/first
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import LandingPage from "../pages/landingPage/LandingPage";
import LoginPage from "../pages/loginPage";
import LogoutPage from "../pages/logoutPage";
import CreditKudosInitPage from "../pages/creditKudoInitPage";
import CreditSummaryPage from "../pages/creditSummaryPage";
import RedirectPage from "../pages/redirectPage";

import myGlobalRefs from "../globals";
import "./App.scss";

import apolloClient from "../getClient";


// We get hold of Credit Kudos API Reference in Global level and use it.
myGlobalRefs.myCreditKudos = window.CK;

class App extends Component {
  render() {
    const { props } = this;
    return (
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Switch>
            <div className="container-fulid">
              <Route path="/" exact component={LandingPage} {...props} />
              <Route path="/login" component={LoginPage} {...props} />
              <Route path="/logout" component={LogoutPage} {...props} />
              <Route
                path="/credit-summary"
                component={CreditSummaryPage}
                {...props}
              />
              <Route
                path="/credit-kudos-init"
                component={CreditKudosInitPage}
                {...props}
              />
              <Route path="/redirect-url" component={RedirectPage} {...props} />
            </div>
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
