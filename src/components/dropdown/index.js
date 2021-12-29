import React, { useState } from "react";

import { Link } from "react-router-dom";
import { categories } from "../../domain/categoryList";

import {
  Container,
  Content,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
} from "./styles";

const Dropdown = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <Container
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
    >
      <DropdownItem>{children}</DropdownItem>
      <Content
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
      >
        <DropdownMenu
          show={show && show}
          fade={show}
          onMouseLeave={() => setShow(false)}
        >
          <DropdownContent>
            {categories.map((category) => (
              <Link
                to={
                  category.categoryId !== "todas"
                    ? `/${category.categoryId}`
                    : "/"
                }
                key={category.categoryId}
              >
                <li>{category.categoryName}</li>
              </Link>
            ))}
          </DropdownContent>
        </DropdownMenu>
      </Content>
    </Container>
  );
};

export default Dropdown;
