import React from "react";

import { Container, Row, Col } from "react-grid-system";
import Item from "../item";

import { List, Adjust } from "./styles";

const ItemList = ({ items }) => {
  return (
    <Container component={Adjust}>
      <List>
        <Row gutterWidth={15}>
          {items.map((item) => (
            <Col xs={12} sm={4} md={3} lg={2}>
              <Item key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </List>
    </Container>
  );
};

export default ItemList;
