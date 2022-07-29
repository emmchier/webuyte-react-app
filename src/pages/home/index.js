import React, { useContext, useEffect } from 'react';

import { useParams } from 'react-router';
import { MainContext } from '../../context';
import ProductList from '../../components/atomic-design/organisms/product/product-list';
import Section from '../../components/atomic-design/atoms/section';
import Row from '../../components/atomic-design/molecules/grid/row';
import Col from '../../components/atomic-design/molecules/grid/col';
import { categories } from '../../domain/categoryList';
import { Link } from 'react-router-dom';
import { Sidebar, SidebarList } from './styles';
import Box from '../../components/atomic-design/atoms/box';

const HomePage = () => {
  const { categoryId } = useParams();
  const { getProducts, products, loadingProducts } = useContext(MainContext);

  useEffect(() => {
    getProducts(categoryId);
  }, [categoryId]);

  return (
    <Section>
      <Row>
        <Col xs={12} sm={2} md={2} lg={2} xlg={2}>
          <Sidebar>
            <SidebarList>
              {categories?.map((category) => (
                <Link
                  to={category.categoryId !== 'todas' ? `/${category.categoryId}` : '/'}
                  key={category.categoryId}
                >
                  <li>{category.categoryName}</li>
                </Link>
              ))}
            </SidebarList>
          </Sidebar>
        </Col>
        <Col xs={12} sm={10} md={10} lg={10} xlg={10}>
          <Box margin="-top:20px">
            <ProductList items={products} loading={loadingProducts} />
          </Box>
        </Col>
      </Row>
    </Section>
  );
};

export default HomePage;
