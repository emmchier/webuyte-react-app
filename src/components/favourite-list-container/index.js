import React, { useContext } from 'react';

import { CartContext } from '../../context';
import Section from '../common/section';
// import ItemList from '../item-list-container/item-list';

const FavouriteListContainer = () => {
  const { loading, favourites } = useContext(CartContext);
  console.log(favourites);

  // return <Section>{loading ? <h4>Cargando...</h4> : <ItemList items={favourites} />}</Section>;
  return <Section>{loading ? <h4>Cargando...</h4> : <h4>FAVORITOS</h4>}</Section>;
};

export default FavouriteListContainer;
