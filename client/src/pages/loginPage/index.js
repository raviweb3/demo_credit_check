import React, { Component } from "react";
import autoBind from "react-autobind";
import {Button, Col, FormGroup, Label, Row} from "reactstrap";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import Strip from "../../customComponents/Common/Strip/Strip";

const localStorage = require("local-storage");

class LoginPage extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  signIn() {
    localStorage.set("jwt-login-token", "dummyToken");
    localStorage.set("userId", "ravi-kiran-123456784");
    this.props.history.push("/credit-summary");
  }

  // TODO @RaviKiran Should use Login Mutation instead
  render() {
    return (
      <RenderPage className="render-page" containerType="container">
        <Strip className="strip strip--short ">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h3 className="mb-0px">
                Some text to encourage the user to come forward and login and
                grant access to Karma.......
              </h3>
            </Col>
          </Row>
        </Strip>
        <Strip className="strip strip--short ">
          <Row className="mt-32px mb-32px">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="pb-32px">
              credit card list
            </Col>
            <Col
                xs={12}
                sm={12}
                md={{ offset: 1, size: 5 }}
                lg={{ offset: 1, size: 5 }}
                xl={{ offset: 1, size: 5 }}
            >

            </Col>
          </Row>
        </Strip>
        <Strip className="strip strip--short ">
        <div>
          <div>
            <div className="Login">
              <Row>
                <Col xs={12} sm={6} md={5} lg={4}>
                  <h4 className="page-header">Log In</h4>
                  <form
                      ref={form => (this.form = form)}
                      onSubmit={event => {
                        event.preventDefault();
                        this.signIn();
                      }}
                  >
                    <FormGroup>
                      <Label>Phone Number</Label>
                      <input
                          type="phone"
                          name="phoneNumber"
                          className="form-control"
                          onChange={this.handlePhoneChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="clearfix">
                        <span className="pull-left">Password</span>
                      </Label>
                      <input
                          type="password"
                          name="password"
                          className="form-control"
                          onChange={this.handlePwdChange}
                      />
                    </FormGroup>
                    <Button type="submit" id="tst-login-btn">
                      Log In
                    </Button>
                  </form>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        </Strip>
      </RenderPage>
    );
  }
}

export default LoginPage;
