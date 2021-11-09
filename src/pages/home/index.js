import React from "react";

import ItemListContainer from "../../components/cart/item-list-container";
import Container from "../../components/common/container";
import Heading1 from "../../components/common/headings/heading1";
import { itemList } from "../../domain/navigationList";
import { Section } from "./styles";

const HomePage = ({ counterCart, setCounterCart }) => {
  return (
    <Section>
      <Container>
        <Heading1>Hola!</Heading1>
        <ItemListContainer
          itemList={itemList}
          counterCart={counterCart}
          setCounterCart={setCounterCart}
        />
      </Container>
    </Section>
  );
};

export default HomePage;
