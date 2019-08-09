import React, { Component } from 'react';
import PropTypes from "prop-types";
import UserProfileData from '../../containers/UserProfileData'
import UserProfile from './components/UserProfile';

const localStorage = require('local-storage');

class CreditSummaryPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            userId : localStorage.get("userId")
        }
    }

    render() {
        const { userId } = this.state;
        return (
            <div>
                <p>Welcome to CreditSummary Page</p>
                <div>
                    <p>Profile Details</p>
                    <UserProfileData
                        userId={userId}
                        render={({userProfile}) => {
                            return (
                                <UserProfile
                                    userProfile={userProfile}
                                    history={this.props.history}
                                />
                            );
                        }}
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
