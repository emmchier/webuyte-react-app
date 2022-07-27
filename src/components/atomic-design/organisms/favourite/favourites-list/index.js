import React from 'react';

import Container from '../../../atoms/container';

import Section from '../../../atoms/section';
import ProductItem from '../../product/product-item';

const FavouriteList = ({ items }) => {
  return (
    <Section>
      <Container>
        <ul>
          {items.map((item) => (
            <ProductItem item={item} />
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default FavouriteList;
