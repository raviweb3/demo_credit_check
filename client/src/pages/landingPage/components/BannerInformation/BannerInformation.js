import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Strip from "../../../../customComponents/Common/Strip/Strip";

class BannerInformation extends Component {
  render() {
    return (
      <Strip className="strip">
        <Row>
          <Col> textInComponent </Col>
        </Row>
      </Strip>
    );
  }
}

export default BannerInformation;
