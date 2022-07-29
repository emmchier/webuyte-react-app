import React from 'react';

import { Content } from './styles';

const SkelletonField = ({ width, height, color, radius }) => (
  <Content width={width} height={height} color={color} radius={radius} />
);

export default SkelletonField;
