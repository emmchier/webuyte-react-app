import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import { Content } from './styles';

const BackButton = ({
  variant = 'text',
  ariaLabel = 'back button',
  nav,
  isIcon = false,
  icon = 'arrow_backward',
  title,
}) => {
  const navigate = useNavigate();

  return (
    <Content>
      <Button variant={variant} ariaLabel={ariaLabel} onClick={() => navigate(nav)}>
        {isIcon && <span className="material-icons">{icon}</span>}
        {title}
      </Button>
    </Content>
  );
};

export default BackButton;
