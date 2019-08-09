import React, { Component } from 'react';
import PropTypes from "prop-types";
import UserProfileData from '../../containers/UserProfileData'
import UserProfile from './components/UserProfile';

const localStorage = require('local-storage');

// Constants for Demo
const email ="betha.ravikiran@gmail.com";
const firstName="Ravi Kiran";
const lastName="Betha";
const dateOfBirth="20-12-1999";


class CreditSummaryPage extends Component {
    constructor(props){
        super(props);
        const userId = localStorage.get("userId");
        this.state ={
            userId,
            userProfile:{
                email,
                firstName,
                lastName,
                dateOfBirth,
                userId
            }
        }
    }

    // TODO @RaviKiran Refer the previous version for Reading the data from Server
    // User UserProfileData container
    render() {
        const {userProfile} = this.state;
        return (
            <div>
                <p>Welcome to CreditSummary Page</p>
                <div>
                    <p>Profile Details</p>
                    <UserProfile
                        userProfile={userProfile}
                        history={this.props.history}
                    />
                </div>
                <div>
                    <p>Credit Access</p>
                </div>
            </div>
        )
    }
}


CreditSummaryPage.propTypes = {
    history: PropTypes.object.isRequired,
};


export default CreditSummaryPage;
