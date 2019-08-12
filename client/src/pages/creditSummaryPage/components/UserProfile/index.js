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
              <Col xs={12} sm={12} md={5} lg={5} xl={5} className="bg-white-smoke">
               <Row className="justify-content-center">
                 <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img src={require('../../../../image/john.jpg')}/>
                 </Col>
               </Row>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={{ offset: 1, size: 6 }}
                lg={{ offset: 1, size: 6 }}
                xl={{ offset: 1, size: 6 }}
                className="br-sin-yellow pl-16px pr-16px pt-16px pb-16px"
              >
                <Row>
                  <Col xs={6} sm={6} md={4} lg={4} xl={4} className="pt-8px pb-8px">
                    <p className="page__title mb-0px title-dark-grey text-left">First Name</p>
                  </Col>
                  <Col xs={6} sm={6} md={8} lg={8} xl={8} className="pt-8px pb-8px">
                    <h6 className="page__title mb-0px title-black text-left">{firstName}</h6>
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} xl={4} className="pt-8px pb-8px">
                    <p className="page__title mb-0px title-dark-grey text-left">Last Name</p>
                  </Col>
                  <Col xs={6} sm={6} md={8} lg={8} xl={8} className="pt-8px pb-8px">
                    <h6 className="page__title mb-0px title-black text-left">{lastName}</h6>
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} xl={4} className="pt-8px pb-8px">
                    <p className="page__title mb-0px title-dark-grey text-left">Date Of Birth</p>
                  </Col>
                  <Col xs={6} sm={6} md={8} lg={8} xl={8} className="pt-8px pb-8px">
                    <h6 className="page__title mb-0px title-black text-left">{dateOfBirth}</h6>
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} xl={4} className="pt-8px pb-8px">
                    <p className="page__title mb-0px title-dark-grey text-left">Email</p>
                  </Col>
                  <Col xs={6} sm={6} md={8} lg={8} xl={8} className="pt-8px pb-8px">
                    <h6 className="page__title mb-0px title-black text-left">{email}</h6>
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} xl={4} className="pt-8px pb-8px">
                    <p className="page__title mb-0px title-dark-grey text-left">Phone</p>
                  </Col>
                  <Col xs={6} sm={6} md={8} lg={8} xl={8} className="pt-8px pb-8px">
                    <h6 className="page__title mb-0px title-black text-left">{phone}</h6>
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
