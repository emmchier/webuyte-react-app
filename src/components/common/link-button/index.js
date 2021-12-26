import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "../button";

const LinkButton = ({ variant, ariaLabel, to, title }) => (
  <Link to={to}>
    <Button variant={variant} ariaLabel={ariaLabel}>
      {title}
    </Button>
  </Link>
);

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  ariaLabel: PropTypes.string,
};

LinkButton.defaultProps = {
  variant: "contained",
  ariaLabel: "back button",
};

export default LinkButton;
