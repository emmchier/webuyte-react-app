import React from 'react';

import Container from '../../../atoms/container';
import Section from '../../../atoms/section';

const PromosList = ({ items }) => {
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

export default PromosList;
