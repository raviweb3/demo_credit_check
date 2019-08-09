import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import autoBind from "react-autobind";
import myGlobalRefs from "./../../globals";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import Strip from "../../customComponents/Common/Strip/Strip";

const localStorage = require("local-storage");

const client_id =
  "626b4603e66d74163d8a5ed0d82d0e5a1e67475fc724ad1d6284440b91369fbc";
const redirect_uri =
  "https://damp-ridge-17926.herokuapp.com/callbacks/redirect";

const selector = "#credit_kudos_container";

class CreditKudosInitPage extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    const customer_token = localStorage.get("jwt-custom-token");
    const userId = localStorage.get("userId");

    myGlobalRefs.myCreditKudos
      .connect({
        client_id: client_id,
        redirect_uri: redirect_uri,
        customer_token: customer_token,
        selector: "#credit_kudos_container",
        state: {
          userId: userId
        },
        debug: true
      })
      .then(function(params) {
        console.log(params);
        // your success handling code here\n"
      })
      .catch(function(params) {
        // your error handling code here\n"
        console.log("errors");
        console.log(params);
      });
  }

  render() {
    return (
      <RenderPage className="render-page bg-white" containerType="container">
        <Strip className="strip strip--short ">
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="text-center pt-32px pb-16px"
            >
              <h3 className="mb-0px">Instruction</h3>
            </Col>
          </Row>
          <Row className="mt-32px mb-32px">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="br-sin-yellow"
            >
              <ul className="credit-kudo__instruction">
                <li>
                  You will be redirected to bank website for Authorization
                </li>
                <li>
                  You will be prompted with the list of Banks to select from.
                </li>
                <li>Select the bank of your salary account</li>
                <li>Dont exit in the middle</li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-16px mb-16px">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="text-center"
            >
              <div id="credit_kudos_container" />
            </Col>
          </Row>
          <Link className="pull-right" to="/logout">
            Logout
          </Link>
        </Strip>
      </RenderPage>
    );
  }
}

export default CreditKudosInitPage;
