import React from 'react';

import { Container, Row, Col } from 'react-grid-system';
import EmptyList from '../../empty-list';
import Item from '../item';

import { List, Adjust } from './styles';

const ItemList = ({ items }) => {
  const emptyTitle = [
    'Ocurrió un error al cargar los productos.',
    <span>Porfavor volvé a recargar la web</span>,
  ];

  return (
    <Container component={Adjust} className="animate__animated animate__fadeIn">
      {items.length > 0 ? (
        <List>
          <Row gutterWidth={15}>
            {items.map((item) => (
              <Col key={item.id} xs={12} sm={4} md={3} lg={2}>
                <Item item={item} />
              </Col>
            ))}
          </Row>
        </List>
      ) : (
        <EmptyList title={emptyTitle} />
      )}
    </Container>
  );
};

export default ItemList;
