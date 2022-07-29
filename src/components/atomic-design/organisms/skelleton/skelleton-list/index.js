import React from 'react';

import Col from '../../../molecules/grid/col';
import Row from '../../../molecules/grid/row';

import ProductItem from '../../product/product-item';

const SkeletonList = ({ num, gap = 5, xs = 12, sm = 12, md = 4, lg = 3, xlg = 3 }) => (
  <Row gap={gap}>
    {[...new Array(num)].map((n, key) => (
      <Col xs={xs} sm={sm} md={md} lg={lg} xlg={xlg} key={key}>
        <ProductItem isSkeleton={true} />
      </Col>
    ))}
  </Row>
);

export default SkeletonList;
