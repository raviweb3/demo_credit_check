import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import { withRouter } from 'react-router-dom';
import UserProfileData from "../../containers/UserProfileData";
import UserProfile from "./components/UserProfile";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import Strip from "../../customComponents/Common/Strip/Strip";

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
      <RenderPage className="render-page bg-white" containerType="container">
        <Strip className="strip strip--short">
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="text-center pt-32px pb-16px"
            >
              <h5 className="mb-0px page__title title-black">
                Welcome to Credit Summary Page
              </h5>
            </Col>
          </Row>
        </Strip>
        <UserProfile userProfile={userProfile} history={this.props.history} />
        {/* <div>
          <p>Credit Access</p>
        </div> */}
      </RenderPage>
    );
  }
}

CreditSummaryPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(CreditSummaryPage);
