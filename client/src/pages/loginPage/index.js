import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Row, Col, FormGroup, Label, Button } from 'reactstrap';
import LoginMutation from './../../containers/LoginMutation';

const localStorage = require('local-storage');

class LoginPage extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    onSuccessfulLogin(data){
        this.props.history.push("/credit-summary");
    }

    render() {
        return (
            <div>
                <LoginMutation callBack={this.onSuccessfulLogin} />
            </div>
        )
    }
}

export default LoginPage;
