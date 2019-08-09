import React, { Component } from 'react';
import {Link} from "react-router-dom";
import autoBind from "react-autobind";
import myGlobalRefs from '../../globals';

const localStorage = require('local-storage');

const client_id="626b4603e66d74163d8a5ed0d82d0e5a1e67475fc724ad1d6284440b91369fbc";
const redirect_uri="https://damp-ridge-17926.herokuapp.com/redirect";

const selector="#credit_kudos_container";

class CreditKudosInitPage extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        const customer_token = localStorage.get('jwt-custom-token');
        const userId = localStorage.get('userId');

        myGlobalRefs.myCreditKudos.connect({
            client_id: client_id,
            redirect_uri: redirect_uri,
            customer_token: customer_token,
            selector: '#credit_kudos_container',
            state: {
                userId: userId,
            },
            debug: true
        })
            .then(function (params) {
                console.log(params);
                // your success handling code here\n"
            })
            .catch(function (params) {
                // your error handling code here\n"
                console.log("errors");
                console.log(params);
            });
    }

    render() {
        return (
            <div>
                <p>Credit Kudos!!</p>
                <div id="credit_kudos_container"></div>
                <Link className="pull-right" to="/logout">Logout</Link>
            </div>
        )
    }
}

export default CreditKudosInitPage;
