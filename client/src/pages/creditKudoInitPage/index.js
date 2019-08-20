import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import autoBind from "react-autobind";
import myGlobalRefs from "./../../globals";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import Strip from "../../customComponents/Common/Strip/Strip";
import Navigation from "../../customComponents/Common/Navigation/Navigation";
import CardList from "../../customComponents/Common/CardList/CardList";

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
      <RenderPage
        className="render-page bg-img__container min-height-75"
        containerType="container-fulid"
      >
        <Strip className="strip strip--short bg-layer min-height-75">
          <Navigation />
          <Row className="pt-80px pb-48px">
            <Col
              xs={10}
              sm={10}
              md={7}
              lg={6}
              xl={6}
              className="br-sin-yellow bg-white m-auto"
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
            <Col
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              className="m-auto text-center pt-30px pb-30px"
            >
              <div id="credit_kudos_container" />
            </Col>
            <Col
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              className="m-auto text-center"
            >
              <Link className="pull-right" to="/logout">
                <Button className="custom-btn-sin-yellow">logout</Button>
              </Link>
            </Col>
          </Row>
        </Strip>
        <Strip className="strip strip--short">
          <Row>
            <Col
              xs={11}
              sm={11}
              md={11}
              lg={11}
              xl={11}
              className="m-auto pt-30px pb-30px"
            >
              <CardList />
            </Col>
          </Row>
        </Strip>
      </RenderPage>
    );
  }
}

export default CreditKudosInitPage;
