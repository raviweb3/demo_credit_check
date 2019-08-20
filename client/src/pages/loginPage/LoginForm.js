import React, { Component } from "react";
import autoBind from "react-autobind";
import PropTypes from 'prop-types';
import { Button, Col, FormGroup, Form, Row, Input } from "reactstrap";

const localStorage = require("local-storage");

class LoginForm extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  

  signIn() {
    debugger;
    const {history} = this.props;
    localStorage.set("jwt-login-token", "dummyToken");
    localStorage.set("userId", "ravi-kiran-123456784");
    history.push("/credit-summary");
  }

  // TODO @RaviKiran Should use Login Mutation instead
  render() {
    return (
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
          <p className="p-large mb-0 internal-section__tittle pb-8px">Login</p>
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
              <Col xs={5} sm={5} md={4} lg={4} xl={4} className="text-center">
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
    );
  }
}
LoginForm.propTypes = {
  history: PropTypes.object.isRequired
}

export default LoginForm;
