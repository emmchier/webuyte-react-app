import React from 'react';
import { Content } from './styles';

const EllipsizedText = ({ children, width }) => <Content width={width}>{children}</Content>;

export default EllipsizedText;
