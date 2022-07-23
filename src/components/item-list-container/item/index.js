import React from 'react';

import { Link } from 'react-router-dom';
import { ReservaIcon } from '../../../ui/icons';
import Button from '../../common/button';
import Heading from '../../common/heading';
import Tag from '../../common/tag';
import Text from '../../common/text';
import LikeButton from '../../like-button';
import EmptyImg from './../../../assets/empty-img.svg';

import {
  Content,
  Image,
  ProductInfo,
  Title,
  ImageContainer,
  SecondaryInfo,
  TitlesContainer,
  HeaderInfo,
} from './styles';

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
    isFavourite,
  } = item;

  return (
    <Content>
      <ImageContainer>
        <Image src={pictureUrl ? pictureUrl : EmptyImg} alt={alt && alt} />
        <span>{isNew && <Tag title="Nuevo" />}</span>
        {isReserva && <ReservaIcon />}
      </ImageContainer>
      <ProductInfo>
        <HeaderInfo>
          <Text weight="semiBold">
            <span>$</span>
            {price && price}
          </Text>
          <LikeButton item={item} isFavourite={isFavourite} />
        </HeaderInfo>
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
        <Link to={`/item/${id}`}>
          <Button variant="outlined">Ver detalle</Button>
        </Link>
      </ProductInfo>
    </Content>
  );
};

export default Item;
