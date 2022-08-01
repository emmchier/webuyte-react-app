import React, { useContext, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Section from '../../components/atomic-design/atoms/section';
import DetailItem from '../../components/atomic-design/organisms/detail/detail-item';
import { MainContext } from '../../context';

const ProductDetailPage = () => {
  const { itemId } = useParams();
  const { getProduct, product, loadingProduct } = useContext(MainContext);

  useEffect(() => {
    getProduct(itemId);
  }, [itemId]);

  return <Section>{loadingProduct ? <h4>Cargando...</h4> : <DetailItem item={product} />}</Section>;
};

export default ProductDetailPage;
