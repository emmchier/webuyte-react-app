import React from 'react';

import { Container, Row, Col } from 'react-grid-system';
import EmptyList from '../../../molecules/empty-list';
import ProductItem from '../product-item';

import { List, Adjust } from './styles';

const ProductList = ({ items }) => {
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
                <ProductItem item={item} />
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

export default ProductList;
