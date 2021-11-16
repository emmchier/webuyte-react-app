import React from "react";

import Container from "../../components/common/container";
import ItemListContainer from "../../components/item-list-container";
import { Section } from "./styles";

const HomePage = () => {
  return (
    <Section>
      <Container>
        <ItemListContainer />
      </Container>
    </Section>
  );
};

export default HomePage;
