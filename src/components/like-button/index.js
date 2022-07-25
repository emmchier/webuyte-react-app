import React, { useState, useContext, useEffect } from 'react';
import { FavouriteContext } from '../../context';
import { LikeFullIcon, LikeStrokeIcon } from '../../ui/icons';
import Button from '../common/button';

const LikeButton = ({ item, isFavourite }) => {
  const [isActive, setIsActive] = useState(false);
  const { addFavourite } = useContext(FavouriteContext);

  useEffect(() => {
    if (isFavourite === false) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, []);

  const handleClick = () => {
    setIsActive(!isActive);
    // if (!isActive) {
    //   addFavourite(item);
    // } else {
    //   deleteFavourite(item.id);
    // }
    if (isFavourite === true) {
      addFavourite(item, false);
    } else {
      addFavourite(item, true);
    }
  };

  return (
    <Button onClick={handleClick} ariaLabel="like icon active" variant="icon">
      {isActive === true ? <LikeFullIcon /> : <LikeStrokeIcon />}
    </Button>
  );
};

export default LikeButton;
