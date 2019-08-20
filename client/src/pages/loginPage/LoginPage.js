import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { Row, Col } from "reactstrap";
import {Link } from "react-router-dom";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import Strip from "../../customComponents/Common/Strip/Strip";
import CardList from "../../customComponents/Common/CardList/CardList";
import LoginForm from "./LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <RenderPage
        className="render-page bg-img__container min-height-75"
        containerType="container-fulid"
      >
        <Strip className="strip strip--short bg-layer min-height-75">
          <Row className="br-bottom">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Row>
                <Col
                  xs={8}
                  sm={8}
                  md={8}
                  lg={10}
                  xl={10}
                  className="d-flex pt-8px pb-8px m-auto"
                >
                  <div className="header-logo">
                  <Link to="/">
                    <img src={require("../../image/header-logo.png")} />
                    </Link>
                  </div>
                  <div className="pl-48px">
                    <h3 className="mb-0 h3-large landing-page__tittle pt-16px pb-16px text-left">
                      KARMA
                    </h3>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={10} sm={10} md={10} lg={10} xl={10} className="m-auto">
              <Row>
                <Col
                  xs={8}
                  sm={8}
                  md={6}
                  lg={4}
                  xl={4}
                  className="pt-16px pb-16px"
                >
                  <p className="mb-0 p-large landing-page__description montserrat-bold ls-normal text-left">
                    Interested in instant credit for <br/><font className="pl-16px">day today activities?</font>
                  </p>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <p className="mb-0 p-large internal-section__tittle title-white">
                        Some text talking about the Benifit of registering and
                        processing the authentication for Karma Credit chech
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="m-auto">
                  <LoginForm />
                </Col>
              </Row>
            </Col>
          </Row>
        </Strip>
        <Strip className="strip strip--short">
          <Row>
            <Col xs={10} sm={10} md={10} lg={10} xl={10} className="m-auto">
              <p className="mb-0 p-large internal-section__tittle pt-12px pb-12px">
                Gain Acess to instant Credit and have a hassel free life...
              </p>
            </Col>
            <Col xs={11} sm={11} md={11} lg={11} xl={11} className="m-auto">
              <CardList />
            </Col>
          </Row>
        </Strip>
      </RenderPage>
    );
  }
};

LoginPage.propTypes = {
  history: PropTypes.object.isRequired
}
export default withRouter(LoginPage);
