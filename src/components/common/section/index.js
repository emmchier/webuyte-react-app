import React from "react";
import { useNavigate } from "react-router";

import Button from "../button";
import Container from "../container";
import { Content, BackButton } from "./styles";

const Section = ({ children, isBackButton }) => {
  const navigate = useNavigate();

  return (
    <Content>
      {isBackButton && (
        <BackButton>
          <Button
            variant="text"
            ariaLabel="Volver al listado de productos"
            onClick={() => navigate(-1)}
          >
            <span className="material-icons">arrow_backward</span> Volver
          </Button>
        </BackButton>
      )}
      <Container>{children}</Container>
    </Content>
  );
};

export default Section;
