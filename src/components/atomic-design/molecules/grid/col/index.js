import React from 'react';

import { ColContent, GridCol } from './styles';

const Col = ({ children, xs = 12, sm = 12, md = 12, lg = 12, xlg = 12 }) => (
  <GridCol xs={xs} sm={sm} md={md} lg={lg} xlg={xlg}>
    <ColContent>{children}</ColContent>
  </GridCol>
);

export default Col;
