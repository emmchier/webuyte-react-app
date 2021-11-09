import React from "react";

import ItemListContainer from "../../components/cart/item-list-container";
import Container from "../../components/common/container";
import Heading1 from "../../components/common/headings/heading1";
import { Section } from "./styles";

const HomePage = () => {
  return (
    <Section>
      <Container>
        <Heading1>Hola!</Heading1>
        <ItemListContainer greeting="Aquí habrá una lista de productos..." />
      </Container>
    </Section>
  );
};

export default HomePage;
