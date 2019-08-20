import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import Strip from "../../customComponents/Common/Strip/Strip";

class LandingPage extends Component {
  render() {
    return (
      <RenderPage
        className="render-page bg-img__container"
        containerType="container-fulid"
      >
        <Strip className="strip strip--short bg-layer">
          <Row className="landing-page__container">
            <Col xs={10} sm={10} md={10} lg={10} xl={10} className="m-auto">
              <Row>
                <Col xs={6} sm={6} md={2} lg={2} xl={2} className="m-auto d-flex align-items-center justify-content-center">
                  <img src={require("../../image/logo.png")} className="logo"/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                  <h3 className="mb-0 h3-large landing-page__tittle pt-16px pb-16px">KARMA</h3>
                </Col>
                <Col xs={8} sm={8} md={7} lg={7} xl={7} className="m-auto">
                  <h5 className="mb-0 h5-medium landing-page__description">Interested in instant credit for your day today activities?</h5>
                </Col>
              </Row>
            </Col>
            <Col xs={11} sm={11} md={11} lg={11} xl={11} className="login-btn__container">
              <a  href="/login" id="tst-login-btn" className="custom-btn-sin-yellow">
                 Login
              </a>
            </Col>
          </Row>
        </Strip>
        {/* <BannerInformation/> */}
      </RenderPage>
    );
  }
}

export default LandingPage;
