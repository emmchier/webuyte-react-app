import React from 'react';

import DropdownItem from '../../dropdown/dropdown-item';

const CartDropdownList = ({ items, removeProductFromCart }) => {
  return (
    <ul>
      {items?.map((item) => (
        <DropdownItem
          key={item.id}
          image={item.pictureUrl}
          title={`Añadiste ${item.title} ${item.category} ${item.variety}`}
          description={item.quantity > 1 ? `${item.quantity} unidades` : `${item.quantity} unidad`}
          onClickAction={() => removeProductFromCart(item.id)}
          actionsFooter={false}
          ariaLabelDelete="Eliminar del carrito"
        />
      ))}
    </ul>
  );
};

export default CartDropdownList;
