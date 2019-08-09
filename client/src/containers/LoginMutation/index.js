import React from 'react';
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import {Button, Col, FormGroup, Label, Row} from "reactstrap";
import {login} from "../../graphQL/operations";

const localStorage = require('local-storage');

class LoginMutation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: "",
            password: ""
        };

        this.signIn = this.signIn.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
    }

    handlePhoneChange(event) {
        event.preventDefault();
        this.setState({
            phoneNumber: event.target.value,
        });
    }

    handlePwdChange(event) {
        event.preventDefault();
        this.setState({
            password: event.target.value,
        });
    }

    signIn(login) {
        const {phoneNumber, password} = this.state;
        try {
            login({
                variables: {
                    data: {
                        loginID: phoneNumber,
                        password
                    }
                }
            })
        } catch (err) {
            // TODO @saikumar - Show this message nicely to the user
            console.log(err);
        }
    }

    onLogin(data) {
        const {login} = data;
        const {token, user} = login;
        const {id} = user;

        localStorage.set('jwt-login-token', token);
        localStorage.set('userId', id);
        this.props.callBack({userId: id});
    }

    onError(error){
        console.log(error);
    }

    render() {
        const {phoneNumber, password} = this.state;
        // TODO @saikumar, @venkat
        // Phone Number validation
        // Password Validation
        // Button Validation
        return (
            <Mutation
                fetchPolicy={"no-cache"}
                onError={error => this.onError(error)}
                onCompleted={data => this.onLogin(data)}
                mutation={login}
            >
                {
                    (login, {loading}) => (
                        <div>
                            <div>
                                <div className="Login">
                                    <Row>
                                        <Col xs={12} sm={6} md={5} lg={4}>
                                            <h4 className="page-header">Log In</h4>
                                            <form ref={form => (this.form = form)} onSubmit={event => {
                                                event.preventDefault();
                                                this.signIn(login);
                                            }}>
                                                <FormGroup>
                                                    <Label>Phone Number</Label>
                                                    <input
                                                        type="phone"
                                                        name="phoneNumber"
                                                        className="form-control"
                                                        onChange={this.handlePhoneChange}
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="clearfix">
                                                        <span className="pull-left">Password</span>
                                                    </Label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        onChange={this.handlePwdChange}
                                                    />
                                                </FormGroup>
                                                <Button type="submit" id="tst-login-btn">Log In</Button>
                                            </form>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Mutation>
        )
    }
}


LoginMutation.propTypes = {
    callBack: PropTypes.func.isRequired
};


export default LoginMutation;
