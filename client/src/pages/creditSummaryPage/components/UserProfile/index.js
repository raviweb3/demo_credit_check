import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Col, Row } from 'reactstrap';
import CustomTokenButton from "../customTokenButton";

const localStorage = require('local-storage');

class UserProfile extends Component {
    constructor(props){
        super(props);

        this.state ={
            userId: localStorage.get("userId"),
            ...props.userProfile
        }
    }

    render(){
       const {avatarImage,firstName,  lastName, dateOfBirth, email, phone } = this.props.userProfile;
       return (
           <div>
               <Row>
                   <Col
                       xs={12}
                       sm={12}
                       md={12}
                       lg={12}
                       xl={12}

                   >
                       <text>{avatarImage}</text>
                   </Col>
               </Row>
               <Row>
                   <Col
                       xs={6}
                       sm={6}
                       md={6}
                       lg={6}
                       xl={6}
                   >
                       <text>FirstName</text>
                   </Col>
                   <Col
                       xs={6}
                       sm={6}
                       md={6}
                       lg={6}
                       xl={6}
                   >
                       <text>{firstName}</text>
                   </Col>
               </Row>
               <Row>
                   <Col
                       xs={6}
                       sm={6}
                       md={6}
                       lg={6}
                       xl={6}
                   >
                       <text>Last Name</text>
                   </Col>
                   <Col
                       xs={6}
                       sm={6}
                       md={6}
                       lg={6}
                       xl={6}
                   >
                       <text>{lastName}</text>
                   </Col>
               </Row>
               <Row>
                   <Col
                       xs={6}
                       sm={6}
                       md={6}
                       lg={6}
                       xl={6}
                   >
                       <text>dateOfBirth</text>
                   </Col>
                   <Col
                       xs={6}
                       sm={6}
                       md={6}
                       lg={6}
                       xl={6}
                   >
                       <text>{dateOfBirth}</text>
                   </Col>
               </Row>
               <Row>
                   <Col
                       xs={6}
                       sm={6}
                       md={6}
                       lg={6}
                       xl={6}
                   >
                       <text>Email</text>
                   </Col>
                   <Col
                       xs={6}
                       sm={6}
                       md={6}
                       lg={6}
                       xl={6}
                   >
                       <text>{email}</text>
                   </Col>
               </Row>
               <Row>
                   <Col
                       xs={6}
                       sm={6}
                       md={6}
                       lg={6}
                       xl={6}
                   >
                       <text>Phone</text>
                   </Col>
                   <Col
                       xs={6}
                       sm={6}
                       md={6}
                       lg={6}
                       xl={6}
                   >
                       <text>{phone}</text>
                   </Col>
               </Row>
               <CustomTokenButton history={this.props.history}/>
           </div>
       )
   }
}

UserProfile.propTypes = {
  userProfile: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default UserProfile;
