import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Container from "../../components/common/container";
import ItemDetailContainer from "../../components/detail/item-detail-container";
import ItemListContainer from "../../components/item-list-container";
import { wineList } from "../../domain/wineDataList";
import { Section } from "./styles";

const HomePage = () => {
  const { id } = useParams();

  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [itemDetailData, setItemDetailData] = useState({});
  console.log(itemDetailData);

  const getItemById = () => {
    const item = wineList.find((item) => (item.id = id));
    console.log(item);
    setItemDetailData(item);
  };

  useEffect(() => {
    id && getItemById();
  }, []);

  return (
    <Section>
      <Container>
        {isDetailVisible ? (
          <ItemDetailContainer
            isDetailVisible={isDetailVisible}
            setIsDetailVisible={setIsDetailVisible}
            itemDetailData={itemDetailData}
          />
        ) : (
          <ItemListContainer
            list={wineList}
            isDetailVisible={isDetailVisible}
            setIsDetailVisible={setIsDetailVisible}
            itemId={id}
          />
        )}
      </Container>
    </Section>
  );
};

export default HomePage;
