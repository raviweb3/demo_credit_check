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
              className="text-center"
            >
              <h5 className="mb-0px">
                You have successfully logged out of Credit Kudos Application
              </h5>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="text-center"
            >
              <Button>
                <Link className="pull-right" to="/">
                  Return
                </Link>
              </Button>
            </Col>
          </Row>
        </Strip>
      </RenderPage>
    );
  }
}

export default LogoutPage;
