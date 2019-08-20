import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CardListData from "./CardListData";

class CardList extends Component {
  render() {
    return (
      <Row className="align-items-center">
        {CardListData
          ? CardListData.map(data => (
              <Col className="pl-12px pr-12px pt-8px pb-8px d-flex align-items-center justify-content-center">
                <img src={`${data.img}`} className={data.className} />
              </Col>
            ))
          : null}
      </Row>
    );
  }
}

export default CardList;
