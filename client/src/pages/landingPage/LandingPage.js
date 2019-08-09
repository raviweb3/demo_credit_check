import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import RenderPage from "../../customComponents/Common/RenderPage/RenderPage";
import Strip from "../../customComponents/Common/Strip/Strip";
import BannerInformation from "./components/BannerInformation/BannerInformation";

class LandingPage extends Component {
  render() {
    return (
      <RenderPage className="render-page" containerType="container">
        <Strip className="strip strip--short ">
          <Row className="bg-sin-yellow">
            <Col xs={12} sm={12} md={12} xl={12} lg={12} className="pb-48px pt-48px text-center">
              <h4 className="mb-0px page__title"> Interested in instant credit for your day today activities?</h4>
            </Col>
          </Row>
        </Strip>
        <BannerInformation/>
      </RenderPage>
    );
  }
}

export default LandingPage;
