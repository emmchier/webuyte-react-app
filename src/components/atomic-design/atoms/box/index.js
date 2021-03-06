import React from 'react';

import { Content } from './styles';

const Box = ({
  children,
  display = 'block',
  alignItems = 'start',
  justifyContent = 'start',
  flexDirection = 'row',
  width = 'auto',
  height = 'auto',
  margin = '0',
  padding = '0',
  translate = '',
  position,
}) => (
  <Content
    display={display}
    alignItems={alignItems}
    justifyContent={justifyContent}
    flexDirection={flexDirection}
    width={width}
    height={height}
    margin={margin}
    padding={padding}
    translate={translate}
    position={position}
  >
    {children}
  </Content>
);

export default Box;
