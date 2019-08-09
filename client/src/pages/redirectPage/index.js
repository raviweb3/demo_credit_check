import React, { Component } from 'react';
import {Link} from "react-router-dom";

class RedirectPage extends Component {
    render() {
        return (
            <div>
                <p>Redirect Page</p>
                <Link className="pull-right" to="/logout">Logout</Link>
            </div>
        )
    }
}

export default RedirectPage;
