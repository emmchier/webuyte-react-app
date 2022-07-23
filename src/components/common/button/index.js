import React from 'react';

import ButtonContainer from './styles';

const Button = ({
  children,
  ariaLabel,
  variant = 'contained',
  color = 'primary',
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  return (
    <ButtonContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={ariaLabel}
      variant={variant}
      color={color}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
