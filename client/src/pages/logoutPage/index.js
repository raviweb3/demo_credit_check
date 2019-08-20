import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import Strip from "../../customComponents/Common/Strip/Strip";
import Navigation from "../../customComponents/Common/Navigation/Navigation";
import CardList from "../../customComponents/Common/CardList/CardList";

class LogoutPage extends Component {
  render() {
    return (
      <RenderPage
      className="render-page bg-img__container min-height-75"
      containerType="container-fulid"
     >
        <Strip className="strip strip--short bg-layer min-height-75">
        <Navigation />
          <Row className="pt-80px pb-48px">
            <Col
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              className="text-center pt-80px pb-16px m-auto"
            >
              <h5 className="internal-section__title title-white montserrat-bold">
                You have successfully logged out of Credit Kudos Application
              </h5>
              <div className="pt-30px">
              <Link className="pull-right" to="/">
                <Button className="custom-btn-sin-yellow">Return</Button>
              </Link>
              </div>
            </Col>
          </Row>
        </Strip>
        <Strip className="strip strip--short">
        <Row>
          <Col xs={11} sm={11} md={11} lg={11} xl={11} className="m-auto pt-30px pb-30px">
            <CardList />
          </Col>
        </Row>
      </Strip>
      </RenderPage>
    );
  }
}

export default LogoutPage;
