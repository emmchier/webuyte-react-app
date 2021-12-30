import React from "react";

import { Link } from "react-router-dom";

import Button from "../button";

const LinkButton = ({
  variant = "contained",
  ariaLabel = "back button",
  to,
  title,
}) => (
  <Link to={to}>
    <Button variant={variant} ariaLabel={ariaLabel}>
      {title}
    </Button>
  </Link>
);

export default LinkButton;
