import React, { useContext, useEffect } from 'react';
import { FavouriteContext } from '../../context';
import { LikeStrokeIcon } from '../../ui/icons';

const FavItem = () => {
  const { favouriteList } = useContext(FavouriteContext);
  console.log(favouriteList);

  const changeIcon = () =>
    favouriteList.length >= 1 ? <LikeStrokeIcon /> : <LikeStrokeIcon color="#ccc" />;

  useEffect(() => {
    changeIcon();
  }, []);

  return <>{changeIcon()}</>;
};

export default FavItem;
