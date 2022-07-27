import React from 'react';

import { Link } from 'react-router-dom';
import { EmptyListIcon } from '../../../ui/icons';
import Button from '../../atoms/button';
import Heading from '../../atoms/heading';
import Text from '../../atoms/text';

import { Content, EmptyContainer } from './styles';

const EmptyList = ({
  title = '',
  description = '',
  isButton = false,
  buttonTitle = '',
  to = '#!',
}) => {
  return (
    <EmptyContainer>
      <Content>
        <EmptyListIcon />
        <Heading variant="h5">{title}</Heading>
        {description !== '' && <Text>{description}</Text>}
        {isButton && (
          <Link to={to}>
            <Button ariaLabel="volver">{buttonTitle}</Button>
          </Link>
        )}
      </Content>
    </EmptyContainer>
  );
};

export default EmptyList;
