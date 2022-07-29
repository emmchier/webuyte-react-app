import React from 'react';

import { SkelletonIcon } from '../../../../ui/icons';
import { Content } from './styles';

const SkelletonImage = () => (
  <Content>
    <span></span>
    <SkelletonIcon />
  </Content>
);

export default SkelletonImage;
