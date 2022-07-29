import React from 'react';

import Col from '../../../molecules/grid/col';
import Row from '../../../molecules/grid/row';
import SkeletonList from '../../skelleton/skelleton-list';
import ProductItem from '../product-item';

const ProductList = ({ items }) => {
  return (
    <div className="animate__animated animate__fadeIn">
      {items.length > 0 ? (
        <Row gap={5}>
          {items.map((item) => (
            <Col key={item.id} xs={12} sm={3} md={3} lg={3} xlg={3}>
              <ProductItem
                id={item.id}
                pictureUrl={item.pictureUrl}
                alt={item.alt}
                title={item.title}
                cellar={item.cellar}
                variety={item.variety}
                price={item.price}
                category={item.category}
                isNew={item.isNew}
                isReserva={item.isReserva}
                isFavourite={item.isFavourite}
                isSkeleton={false}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <SkeletonList num={16} xs={12} sm={3} md={3} lg={3} xlg={3} />
      )}
    </div>
  );
};

export default ProductList;
