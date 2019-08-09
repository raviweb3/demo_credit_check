import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogoutPage extends Component {
    render() {
        return (
            <div>
                <p>You have successfully logged out of Credit Kudos Application</p>
                <Link className="pull-right" to="/">Return</Link>
            </div>
        )
    }
}

export default LogoutPage;
