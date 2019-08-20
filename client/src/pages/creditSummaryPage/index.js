import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import { withRouter } from 'react-router-dom';
import UserProfileData from "../../containers/UserProfileData";
import UserProfile from "./components/UserProfile";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import Strip from "../../customComponents/Common/Strip/Strip";
import Navigation from "../../customComponents/Common/Navigation/Navigation";
import CardList from "../../customComponents/Common/CardList/CardList";

const localStorage = require("local-storage");

// Constants for Demo
const email = "betha.ravikiran@gmail.com";
const firstName = "Ravi Kiran";
const lastName = "Betha";
const dateOfBirth = "20-12-1999";

class CreditSummaryPage extends Component {
  constructor(props) {
    super(props);
    const userId = localStorage.get("userId");

    const userProfile = {
      email,
      firstName,
      lastName,
      dateOfBirth,
      userId
    };

    this.state = {
      userId,
      userProfile
    };

    localStorage.set("user-profile", JSON.stringify(userProfile));
  }

  // TODO @RaviKiran Refer the previous version for Reading the data from Server
  // User UserProfileData container
  render() {
    const { userProfile } = this.state;
    return (
      <RenderPage
      className="render-page bg-img__container min-height-75"
      containerType="container-fulid"
     >
        <Strip className="strip strip--short bg-layer min-height-75">
          <Navigation />
          <Row>
            <Col
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              className="m-auto"
            >
             <UserProfile userProfile={userProfile} history={this.props.history} />
           </Col>
          </Row>
        </Strip>
        <Strip className="strip strip--short">
        <Row>
          <Col xs={11} sm={11} md={11} lg={11} xl={11} className="m-auto pt-32px pb-32px">
            <CardList />
          </Col>
        </Row>
      </Strip>
      </RenderPage>
    );
  }
}

CreditSummaryPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(CreditSummaryPage);
