import React, { useState, useContext, useEffect } from 'react';

import { FavouriteContext } from '../../../../context';
import { LikeFullIcon, LikeStrokeIcon } from '../../../ui/icons';
import Button from '../button';
import { SkelletonLikeButton } from './styles';

const LikeButton = ({ item, isFavourite, isSkeleton = false }) => {
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
    <>
      {isSkeleton === false ? (
        <Button onClick={handleClick} ariaLabel="like icon active" variant="icon">
          {isActive === true ? <LikeFullIcon /> : <LikeStrokeIcon />}
        </Button>
      ) : (
        <SkelletonLikeButton>
          <LikeFullIcon color="#dddcdc" />
        </SkelletonLikeButton>
      )}
    </>
  );
};

export default LikeButton;
