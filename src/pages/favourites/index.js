import React, { useContext, useEffect } from 'react';

import Section from '../../components/atomic-design/atoms/section';
import FavouriteList from '../../components/atomic-design/organisms/favourite/favourites-list';
import { FavouriteContext } from '../../context';

const FavouritesPage = () => {
  const { getFavourites, loadingFavourites, favouriteList } = useContext(FavouriteContext);

  useEffect(() => {
    getFavourites();
    console.log('favourites');
  }, [favouriteList.length]);

  return (
    <Section>
      {loadingFavourites ? <h4>Cargando...</h4> : <FavouriteList items={favouriteList} />}
    </Section>
  );
};

export default FavouritesPage;
