import React, { useContext } from 'react';

import { Content, Counter } from './styles';
import { CartContext } from '../../../context';
import { GlassEmptyIcon, GlassFullIcon } from '../../../ui/icons';

const CartWidget = () => {
  const { cartUnities } = useContext(CartContext);

  return (
    <Content>
      {cartUnities > 0 ? (
        <>
          <GlassFullIcon />
          <Counter>{cartUnities}</Counter>
        </>
      ) : (
        <GlassEmptyIcon />
      )}
    </Content>
  );
};

export default CartWidget;
