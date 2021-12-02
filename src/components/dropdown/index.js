import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Content,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
} from "./styles";

const Dropdown = ({ children, categoryList }) => {
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
            {categoryList.map((item) => (
              <Link
                to={
                  item.categoryId !== "todas"
                    ? `/categoria/${item.categoryId}`
                    : "/"
                }
                key={item.categoryId}
              >
                <li>{item.categoryName}</li>
              </Link>
            ))}
          </DropdownContent>
        </DropdownMenu>
      </Content>
    </Container>
  );
};

export default Dropdown;
