import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
                  <img src={require("../../../image/header-logo.png")} />
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
    );
  }
}

export default Navigation;
