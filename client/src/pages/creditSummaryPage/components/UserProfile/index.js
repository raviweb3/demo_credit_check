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
            <h6 className="p-large mb-0px page__title title-black">Welcome {firstName} {lastName} </h6>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="pt-32px pb-32px"
          >
            <Row>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                {avatarImage}
              </Col>
              <Col
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className="br-sin-yellow pl-16px pr-16px pt-16px pb-16px"
              >
                <Row>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <p className="mb-0px">First Name</p>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <p className="mb-0px">{firstName}</p>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <p className="mb-0px">Last Name</p>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <p className="mb-0px">{lastName}</p>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <p className="mb-0px">Date Of Birth</p>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <p className="mb-0px">{dateOfBirth}</p>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <p className="mb-0px">Email</p>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <p className="mb-0px">{email}</p>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <p className="mb-0px">Phone</p>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <p className="mb-0px">{phone}</p>
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
