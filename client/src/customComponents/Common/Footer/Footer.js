import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Strip from "../Strip/Strip";

class Footer extends Component {
  render() {
    return (
      <Strip className="strip strip--short " containerType="container">
        <Row className="bg-sin-yellow">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pt-32px pb-32px">
            <h4 className="footer-text mb-0px">Footer Content</h4>
          </Col>
        </Row>
      </Strip>
    );
  }
}

export default Footer;
