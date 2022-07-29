import React from 'react';

import { Content } from './styles';

const Skelleton = ({ children }) => (
  <Content>
    <span></span>
    <div>{children}</div>
  </Content>
);

export default Skelleton;
