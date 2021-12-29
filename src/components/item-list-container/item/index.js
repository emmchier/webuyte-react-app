import React from "react";

import { Link } from "react-router-dom";
import { ReservaIcon } from "../../../ui/icons";
import Heading from "../../common/heading";
import Tag from "../../common/tag";
import Text from "../../common/text";
import EmptyImg from "./../../../assets/empty-img.svg";

import {
  Content,
  Image,
  ProductInfo,
  Title,
  ImageContainer,
  SecondaryInfo,
  TitlesContainer,
} from "./styles";

const Item = ({ item }) => {
  const {
    id,
    pictureUrl,
    alt,
    title,
    cellar,
    variety,
    price,
    category,
    isNew,
    isReserva,
  } = item;

  return (
    <Link to={`/item/${id}`}>
      <Content>
        <ImageContainer>
          <Image src={pictureUrl ? pictureUrl : EmptyImg} alt={alt && alt} />
          <span>{isNew && <Tag title="Nuevo" />}</span>
          {isReserva && <ReservaIcon />}
        </ImageContainer>
        <ProductInfo>
          <Text weight="semiBold">{`$ ${price && price}`}</Text>
          <TitlesContainer>
            <Title>
              <Heading variant="h5">{title && title}</Heading>
            </Title>
            <Title>
              <Heading variant="h6">{cellar && cellar}</Heading>
            </Title>
          </TitlesContainer>
          <SecondaryInfo>
            <Text>{variety && variety}</Text>
            <Text cap="cap">{category && category.slice(0, -1)}</Text>
          </SecondaryInfo>
        </ProductInfo>
      </Content>
    </Link>
  );
};

export default Item;
