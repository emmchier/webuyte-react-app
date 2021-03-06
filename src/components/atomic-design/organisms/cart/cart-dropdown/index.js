import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../../context';
import Button from '../../../atoms/button';
import { DropdownEmpty } from '../../dropdown/styles';
import CartDropdownList from '../cart-dropdown-list';
import { Content, Footer } from './styles';

const CartDropdown = ({ emptyMessage }) => {
  const { cartList, cartUnities, removeProductFromCart, isEmptyCart, setIsEmptyCart } =
    useContext(CartContext);

  useEffect(() => {
    cartList.length > 0 ? setIsEmptyCart(false) : setIsEmptyCart(true);
  }, [cartList.length]);

  return (
    <Content>
      {isEmptyCart === false ? (
        <>
          <CartDropdownList items={cartList} removeProductFromCart={removeProductFromCart} />
          <Footer>
            <Link to="/mi-carrito">
              <Button variant="contained" color="primary" ariaLabel="link al carrito">
                Ver carrito
              </Button>
            </Link>
            <Link to="/comprar-ahora">
              <Button color="secondary" ariaLabel="link a comprar ahora">
                Comprar ahora
              </Button>
            </Link>
          </Footer>
        </>
      ) : (
        <DropdownEmpty>{emptyMessage}</DropdownEmpty>
      )}
    </Content>
  );
};

export default CartDropdown;
