import React, { useContext, useEffect } from 'react';

import { useParams } from 'react-router';
import { MainContext } from '../../context';
import ProductList from '../../components/atomic-design/organisms/product/product-list';
import Section from '../../components/atomic-design/atoms/section';

const HomePage = () => {
  const { categoryId } = useParams();
  const { getProducts, products, loadingProducts } = useContext(MainContext);

  useEffect(() => {
    getProducts(categoryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log('productos');
  }, [categoryId]);

  return (
    <Section>{loadingProducts ? <h4>Cargando...</h4> : <ProductList items={products} />}</Section>
  );
};

export default HomePage;
