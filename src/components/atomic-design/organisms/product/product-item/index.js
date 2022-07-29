import React from 'react';

import { Link } from 'react-router-dom';

import { EmptyListIcon, ReservaIcon } from '../../../../ui/icons';
import Button from '../../../atoms/button';
import Heading from '../../../atoms/heading';
import LikeButton from '../../../atoms/like-button';
import Tag from '../../../atoms/tag';
import Text from '../../../atoms/text';
import EmptyImg from '../../../../../assets/empty-img.svg';
import EllipsizedText from '../../../atoms/ellipsized-text';

import {
  Content,
  Image,
  ProductInfo,
  Title,
  ImageContainer,
  SecondaryInfo,
  TitlesContainer,
  HeaderInfo,
  OptionsContainer,
  EmptyContent,
} from './styles';
import SkelletonImage from '../../skelleton/skelleton-image';

const ProductItem = ({
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
  isSkeleton = false,
}) => {
  const item = {
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
  };

  return (
    <Content>
      {isSkeleton === false ? (
        <Link to={`/item/${id}`}>
          <ImageContainer>
            <SkelletonImage />
            <Image src={pictureUrl ? pictureUrl : EmptyImg} alt={alt && alt} />
            <OptionsContainer>
              <span>
                {isNew && <Tag title="Nuevo" />}
                {isReserva && <ReservaIcon />}
              </span>
            </OptionsContainer>
          </ImageContainer>
        </Link>
      ) : (
        <SkelletonImage />
      )}
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
            <EllipsizedText width={170}>
              <Heading variant="h5">{title && title}</Heading>
            </EllipsizedText>
          </Title>
          <Title>
            <EllipsizedText width={150}>
              <Heading variant="h6">{cellar && cellar}</Heading>
            </EllipsizedText>
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
