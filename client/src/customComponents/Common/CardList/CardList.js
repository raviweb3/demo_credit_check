import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CardListData from "./CardListData";

class CardList extends Component {
  render() {
    return (
      <Row>
        {CardListData
          ? CardListData.map(data => (
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className="pl-8px pr-8px pt-8px pr-8px">
                <img src={`${data.img}`} className="" />
              </Col>
            ))
          : null}
      </Row>
    );
  }
}

export default CardList;
