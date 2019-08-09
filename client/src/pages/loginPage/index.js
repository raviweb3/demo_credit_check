import React, { Component } from "react";
import autoBind from "react-autobind";
import LoginMutation from "./../../containers/LoginMutation";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";

const localStorage = require("local-storage");

class LoginPage extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  onSuccessfulLogin(data) {
    this.props.history.push("/credit-summary");
  }

  render() {
    return (
      <RenderPage className="render-page" containerType="container">
        <LoginMutation callBack={this.onSuccessfulLogin} />
      </RenderPage>
    );
  }
}

export default LoginPage;
