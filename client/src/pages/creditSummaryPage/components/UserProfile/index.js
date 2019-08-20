import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import CustomTokenButton from "../customTokenButton";
import Strip from "../../../../customComponents/Common/Strip/Strip";

const localStorage = require("local-storage");

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: localStorage.get("userId"),
      ...props.userProfile
    };
  }

  render() {
    const {
      avatarImage,
      firstName,
      lastName,
      dateOfBirth,
      email,
      phone
    } = this.props.userProfile;
    return (
      <Strip className="strip strip--short">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
            <h6 className="p-large mb-0px internal-section__title title-white montserrat-bold pt-20px pb-20px">
              Welcome {firstName} {lastName}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col
            xs={8}
            sm={8}
            md={7}
            lg={7}
            xl={7}
            className="pt-20px pb-20px m-auto bg-white br-sin-yellow"
          >
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Row className="justify-content-center">
                  <Col xs={10} sm={10} md={10} lg={10} xl={10} className="m-auto">
                    <img src={require("../../../../image/john.jpg")} />
                  </Col>
                </Row>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={8} lg={8} xl={8}
                className="pl-16px pr-16px pt-20px"
              >
                <Row>
                  <Col
                    xs={6}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={4}
                    className="pt-6px pb-6px"
                  >
                    <p className="internal-section__title mb-0px title-nobel-grey text-left roboto-light">
                      First Name
                    </p>
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={8}
                    lg={8}
                    xl={8}
                    className="pt-6px pb-6px"
                  >
                    <p className="p-large internal-section__title mb-0px title-black text-left roboto-light">
                      {firstName}
                    </p>
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={4}
                    className="pt-6px pb-6px"
                  >
                    <p className="internal-section__title mb-0px title-nobel-grey text-left roboto-light">
                      Last Name
                    </p>
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={8}
                    lg={8}
                    xl={8}
                    className="pt-6px pb-6px"
                  >
                    <p className="p-large internal-section__title mb-0px title-black text-left roboto-light">
                      {lastName}
                    </p>
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={4}
                    className="pt-6px pb-6px"
                  >
                    <p className="internal-section__title mb-0px title-nobel-grey text-left roboto-light">
                      Date Of Birth
                    </p>
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={8}
                    lg={8}
                    xl={8}
                    className="pt-6px pb-6px"
                  >
                    <p className="p-large internal-section__title mb-0px title-black text-left roboto-light">
                      {dateOfBirth}
                    </p>
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={4}
                    className="pt-6px pb-6px"
                  >
                    <p className="internal-section__title mb-0px title-nobel-grey text-left roboto-light">
                      Email
                    </p>
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={8}
                    lg={8}
                    xl={8}
                    className="pt-6px pb-6px"
                  >
                    <p className="p-large internal-section__title mb-0px title-black text-left roboto-light">
                      {email}
                    </p>
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={4}
                    className="pt-6px pb-6px"
                  >
                    <p className="internal-section__title mb-0px title-nobel-grey text-left roboto-light">
                      Phone
                    </p>
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={8}
                    lg={8}
                    xl={8}
                    className="pt-6px pb-6px"
                  >
                    <p className="p-large internal-section__title title-black text-left roboto-light">
                      {phone}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <CustomTokenButton history={this.props.history} />
      </Strip>
    );
  }
}

UserProfile.propTypes = {
  userProfile: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default UserProfile;
