import React, { Component } from "react";
import autoBind from "react-autobind";
import { Button, Col, FormGroup, Form, Row, Input } from "reactstrap";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import Strip from "../../customComponents/Common/Strip/Strip";
import LoginBanner from "./LoginBanner";
import Navigation from "../../customComponents/Common/Navigation/Navigation";

const localStorage = require("local-storage");

class LoginPage extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      phoneNumber: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: [event.target.value]
    });
  }
  signIn() {
    localStorage.set("jwt-login-token", "dummyToken");
    localStorage.set("userId", "ravi-kiran-123456784");
    localStorage.set("phoneNumber", this.state.phoneNumber);
    this.props.history.push("/credit-summary");
  }

  // TODO @RaviKiran Should use Login Mutation instead
  render() {
    return (
      <RenderPage
        className="render-page bg-img__container min-height-75"
        containerType="container-fulid"
      >
        <Strip className="strip strip--short bg-layer min-height-75">
          <Navigation />
          <Row>
            <Col xs={10} sm={10} md={10} lg={10} xl={10} className="m-auto">
              <Row>
                <Col
                  xs={8}
                  sm={8}
                  md={6}
                  lg={6}
                  xl={6}
                  className="pt-16px pb-16px"
                >
                  <p className="mb-0 p-large landing-page__description montserrat-bold ls-normal text-left">
                    Interested in instant credit for <br />
                    <font className="pl-16px">day today activities?</font>
                  </p>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <p className="mb-0 p-large internal-section__tittle title-white">
                        Some text talking about the Benifit of registering and
                        processing the authentication for Karma Credit chech
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="m-auto">
                  <Row className="justify-content-end">
                    <Col
                      xs={12}
                      sm={12}
                      md={9}
                      lg={9}
                      xl={9}
                      className="mt-24px"
                    >
                      <Form
                        ref={form => (this.form = form)}
                        onSubmit={event => {
                          event.preventDefault();
                          this.signIn();
                        }}
                        className="form__container"
                      >
                        <p className="p-large mb-0 internal-section__tittle pb-8px">
                          Login
                        </p>
                        <FormGroup>
                          <Input
                            type="phone"
                            name="phoneNumber"
                            placeholder="phonenumber"
                            className="form-control common-input"
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="form-control common-input"
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                        <Row>
                          <Col className="pt-8px pb-8px">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                class="custom-control-label input-label"
                                for="customCheck1"
                              >
                                <p className="p-medium mb-0px internal-section__title title-black roboto-light">
                                  Terms and conditions
                                </p>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <Row className="justify-content-center">
                          <Col
                            xs={5}
                            sm={5}
                            md={4}
                            lg={4}
                            xl={4}
                            className="text-center"
                          >
                            <Button
                              type="submit"
                              id="tst-login-btn"
                              className="btn-block custom-btn"
                            >
                              Submit
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Strip>
        <LoginBanner />
      </RenderPage>
    );
  }
}

export default LoginPage;
