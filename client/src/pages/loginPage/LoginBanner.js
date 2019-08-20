import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Strip from "../../customComponents/Common/Strip/Strip";
import CardList from "../../customComponents/Common/CardList/CardList";

class LoginBanner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
    );
  }
}

export default LoginBanner;
