import React, { Component } from "react";
import autoBind from "react-autobind";
import LoginMutation from "./../../containers/LoginMutation";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import {Button, Col, FormGroup, Label, Row} from "reactstrap";

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
      </RenderPage>
    );
  }
}

export default LoginPage;
