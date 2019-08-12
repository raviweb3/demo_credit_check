import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import Strip from "../../customComponents/Common/Strip/Strip";

class LogoutPage extends Component {
  render() {
    return (
      <RenderPage className="render-page" containerType="container">
        <Strip className="strip strip--short ">
          <Row className="mt-16px mb-16px">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="text-center pt-16px pb-16px"
            >
              <h5 className="mb-0px">
                You have successfully logged out of Credit Kudos Application
              </h5>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col
              xs={8}
              sm={8}
              md={4}
              lg={2}
              xl={2}
              className="text-center pt-32px pb-32px"
            >
              <Link className="pull-right" to="/">
                <Button className="custom-btn-sin-yellow btn-block">Return</Button>
              </Link>
            </Col>
          </Row>
        </Strip>
      </RenderPage>
    );
  }
}

export default LogoutPage;
