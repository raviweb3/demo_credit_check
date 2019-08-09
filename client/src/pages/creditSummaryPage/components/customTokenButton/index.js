import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Row, Col } from "reactstrap";
import autoBind from "react-autobind";
import axios from "axios";

const localStorage = require('local-storage');

class CustomTokenButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: false,
            userProfile: {}
        }
        autoBind(this);
    }

    componentDidMount() {
        const userProfileAsString = localStorage.get('user-profile');
        const userProfile = JSON.parse(userProfileAsString);

        if(userProfile){
          this.setState({ userProfile:{...userProfile}, isEnabled: true });
        }
    }

    handleClick = async () => {
        const { email, firstName, lastName, dateOfBirth, userId } = this.state.userProfile;

        const dob = dateOfBirth.substr(0, 10);

        const result = await axios.post(`https://damp-ridge-17926.herokuapp.com/routes/generateCustomToken`, { email, firstName, lastName, dateOfBirth:dob, userId });
        if (result) {
            if(result.data.token) {
                localStorage.set('jwt-custom-token', result.data.token);
                this.props.history.push('/credit-kudos-init');
            }
        }
    }

    render(){
        const { isEnabled } = this.state;
        return (
            <Row className="mt-32px mb-32px">
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                    <Button
                        disabled={!isEnabled}
                        id="tst-gen-custom-token"
                        onClick={this.handleClick}
                    >
                        Continue
                    </Button>
                </Col>
            </Row>
        )
    }
}

CustomTokenButton.propTypes = {
    history: PropTypes.object.isRequired,
};


export default CustomTokenButton;
