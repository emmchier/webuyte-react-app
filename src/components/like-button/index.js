import React, { useState } from 'react';
import { LikeFullIcon, LikeStrokeIcon } from '../../ui/icons';
import Button from '../common/button';

const LikeButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <Button
      ariaLabel={hover === true ? 'like icon active' : 'like icon inactive'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      variant="icon"
    >
      {hover === true ? <LikeFullIcon /> : <LikeStrokeIcon />}
    </Button>
  );
};

export default LikeButton;
