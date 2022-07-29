import React from 'react';

import { GridList } from './styles';

const Row = ({ children, gap = 0 }) => <GridList gap={gap}>{children}</GridList>;

export default Row;
