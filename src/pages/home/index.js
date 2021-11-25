import React, { useState } from "react";

import Container from "../../components/common/container";
import ItemDetailContainer from "../../components/detail/item-detail-container";
import ItemListContainer from "../../components/item-list-container";
import { Section } from "./styles";

const HomePage = () => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [itemDetailData, setItemDetailData] = useState({});

  return (
    <Section>
      <Container>
        {isDetailVisible ? (
          <ItemDetailContainer
            isDetailVisible={isDetailVisible}
            setIsDetailVisible={setIsDetailVisible}
          />
        ) : (
          <ItemListContainer
            isDetailVisible={isDetailVisible}
            setIsDetailVisible={setIsDetailVisible}
          />
        )}
      </Container>
    </Section>
  );
};

export default HomePage;
