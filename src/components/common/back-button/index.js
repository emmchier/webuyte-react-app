import React from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router";
import Button from "../button";
import { Content } from "./styles";

const BackButton = ({ variant, ariaLabel, nav, isIcon, icon, title }) => {
  const navigate = useNavigate();

  return (
    <Content>
      <Button
        variant={variant}
        ariaLabel={ariaLabel}
        onClick={() => navigate(nav)}
      >
        {isIcon && <span className="material-icons">{icon}</span>}
        {title}
      </Button>
    </Content>
  );
};

BackButton.propTypes = {
  nav: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  ariaLabel: PropTypes.string,
  isIcon: PropTypes.bool,
  icon: PropTypes.string,
};

BackButton.defaultProps = {
  variant: "text",
  ariaLabel: "back button",
  isIcon: false,
  icon: "arrow_backward",
};

export default BackButton;
