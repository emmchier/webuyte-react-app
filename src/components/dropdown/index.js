import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

import {
  Container,
  Content,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
} from "./styles";

const Dropdown = ({ children }) => {
  const [show, setShow] = useState(false);
  const { categoryList } = useContext(CartContext);
  console.log(categoryList);

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
            {categoryList.map((category) => (
              <Link
                to={
                  category.categoryId !== "todas"
                    ? `/categoria/${category.categoryId}`
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
