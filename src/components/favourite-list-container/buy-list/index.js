import React from 'react';
import Container from '../../common/container';
import Section from '../../common/section';

const BuyItemList = ({ items }) => {
  return (
    <Section>
      <Container>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h4>{item.id} </h4>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default BuyItemList;
