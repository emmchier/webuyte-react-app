import React, { useContext, useEffect } from 'react';
import { FavouriteContext } from '../../context';
import { LikeFullIcon, LikeStrokeIcon } from '../../ui/icons';

const FavItem = () => {
  const { favouriteList } = useContext(FavouriteContext);
  console.log(favouriteList);

  const changeIcon = () => (favouriteList.length <= 0 ? <LikeStrokeIcon /> : <LikeFullIcon />);

  useEffect(() => {
    changeIcon();
  }, []);

  return <>{changeIcon()}</>;
};

export default FavItem;
