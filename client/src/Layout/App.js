// eslint-disable import/first
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import LandingPage from "../pages/landingPage/LandingPage";
import LoginPage from "../pages/loginPage/LoginPage";
import LogoutPage from "../pages/logoutPage";
import CreditKudosInitPage from "../pages/creditKudoInitPage";
import CreditSummaryPage from "../pages/creditSummaryPage";
import RedirectPage from "../pages/redirectPage";

import myGlobalRefs from "../globals";
import "./App.scss";

import apolloClient from "../getClient";
import Navigation from "../customComponents/Common/Navigation/Navigation";
import Footer from "../customComponents/Common/Footer/Footer";
import ScrollToTop from "./ScrollToTop";

// We get hold of Credit Kudos API Reference in Global level and use it.
myGlobalRefs.myCreditKudos = window.CK;

class App extends Component {
  render() {
    const { props, state } = this;
    return (
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Switch>
            <ScrollToTop>
              <Switch>
                <div className="container-fulid">
                  {/* <Navigation/> */}
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
                  <Route
                    path="/redirect-url"
                    component={RedirectPage}
                    {...props}
                  />
                </div>
              </Switch>
            </ScrollToTop>
          </Switch>
        </BrowserRouter>
        {/* <Footer/> */}
      </ApolloProvider>
    );
  }
}

export default App;
