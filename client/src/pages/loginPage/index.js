import React, { Component } from "react";
import autoBind from "react-autobind";
import { Button, Col, FormGroup, Form, Row, Input } from "reactstrap";
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
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pt-32px pb-32px">
              <h4 className="page__title mb-0px title-black text-left">
                Some text to encourage the user to come forward and login and
                grant access to Karma.......
              </h4>
            </Col>
          </Row>
        </Strip>
        <Strip className="strip strip--short ">
          <Row className="mt-32px mb-32px">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="pb-32px common-border">
               credit card list
            </Col>
            <Col
              xs={12}
              sm={12}
              md={{ offset: 1, size: 5 }}
              lg={{ offset: 1, size: 5 }}
              xl={{ offset: 1, size: 5 }}
            >
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="pt-16px pb-16px bg-sin-yellow text-center"
                >
                  <h4 className="mb-0px page__title">Login</h4>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="mt-24px bg-white-smoke"
                >
                  <Form
                     ref={form => (this.form = form)}
                     onSubmit={event => {
                       event.preventDefault();
                       this.signIn();
                    }}
                    className="form__container"
                  >
                    <FormGroup>
                      <Input
                        type="phone"
                        name="phoneNumber"
                        className="form-control common-input"
                        onChange={this.handlePhoneChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="password"
                        name="password"
                        className="form-control common-input"
                        onChange={this.handlePwdChange}
                      />
                    </FormGroup>
                    <Row>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className="text-center"
                      >
                        <Button type="submit" id="tst-login-btn">
                          Log In
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Strip>
      </RenderPage>
    );
  }
}

export default LoginPage;
