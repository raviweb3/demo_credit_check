import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Strip from "../../../../customComponents/Common/Strip/Strip";
import CardList from "../../../../customComponents/Common/CardList/CardList";

class BannerInformation extends Component {
  render() {
    return (
      <Strip className="strip strip--short ">
        <Row className="mt-32px mb-32px">
          <Col xs={12} sm={12} md={5} lg={5} xl={5} className="border">
            <h4 className="page__sub-title mb-0px padding-1rem">
              Some text talking about the Benefit of registering and Processing
              the authentication For Karma Credit check.
            </h4>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={{ offset: 1, size: 6 }}
            lg={{ offset: 1, size: 6 }}
            xl={{ offset: 1, size: 6 }}
           
          >
             {/* <img src={require('../../../../image/charts.jpg')} className=""/> */}
          </Col>
        </Row>
        <Row className="pb-32px pt-16px">
          <Col xs={12} sm={12} md={5} lg={5} xl={5}>
            <h4 className="page__sub-title mb-0px padding-1rem">
              Gain access to Instant credit and have a hassel free life...
            </h4>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={{ offset: 1, size: 6 }}
            lg={{ offset: 1, size: 6 }}
            xl={{ offset: 1, size: 6 }}
           
          >
           <CardList/>
          </Col>
        </Row>
      </Strip>
    );
  }
}

export default BannerInformation;
