import React from 'react';

import { Link } from 'react-router-dom';

import { ReservaIcon } from '../../../../ui/icons';
import Button from '../../../atoms/button';
import Heading from '../../../atoms/heading';
import LikeButton from '../../../atoms/like-button';
import Tag from '../../../atoms/tag';
import Text from '../../../atoms/text';
import EmptyImg from '../../../../../assets/empty-img.svg';

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

const ProductItem = ({ item }) => {
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
        <Link to={`/item/${id}`}>
          <Image src={pictureUrl ? pictureUrl : EmptyImg} alt={alt && alt} />
        </Link>
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

export default ProductItem;
