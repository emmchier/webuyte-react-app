import React, { useContext, useEffect } from 'react';

import { FavouriteContext } from '../../../../../context';
import { LikeStrokeIcon } from '../../../../ui/icons';

const FavouriteItem = () => {
  const { favouriteList } = useContext(FavouriteContext);
  console.log(favouriteList);

  const changeIcon = () =>
    favouriteList.length > 0 ? <LikeStrokeIcon /> : <LikeStrokeIcon color="#ccc" />;

  useEffect(() => {
    changeIcon();
  }, [favouriteList.length]);

  return <>{changeIcon()}</>;
};

export default FavouriteItem;
