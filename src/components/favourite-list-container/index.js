import React, { useContext, useEffect } from 'react';

import { FavouriteContext } from '../../context';
import Section from '../common/section';
import ItemList from '../item-list-container/item-list';

const FavouriteListContainer = () => {
  const { getFavourites, loadingFavourites, favouriteList } = useContext(FavouriteContext);

  useEffect(() => {
    getFavourites();
    console.log('favourites');
  }, []);

  return (
    <Section>
      {loadingFavourites ? <h4>Cargando...</h4> : <ItemList items={favouriteList} />}
    </Section>
  );
};

export default FavouriteListContainer;
