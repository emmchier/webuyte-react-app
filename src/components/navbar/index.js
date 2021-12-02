import React from "react";
import { Link, NavLink } from "react-router-dom";
import { categories } from "../../domain/categoryList";
import { navList } from "../../domain/navigationList";
import Container from "../common/container";
import Dropdown from "../dropdown";
import CartWidget from "./cart-widget";
import NavItem from "./navItem";
import { Brand, Content, Header, Nav, NavList } from "./styles";

const Navbar = ({ counter }) => {
  return (
    <Header role="banner">
      <Container>
        <Content>
          <Link to="/">
            <Brand aria-label="link">WineByWine</Brand>
          </Link>
          <Nav>
            <NavList>
              {navList.map((item) => (
                <NavItem key={item.id}>
                  <NavLink to={item.to} aria-label="link">
                    {item.id !== "categorias" ? (
                      item.navItem
                    ) : (
                      <Dropdown categoryList={categories}>
                        {item.navItem}
                      </Dropdown>
                    )}
                  </NavLink>
                </NavItem>
              ))}
              <CartWidget count={counter} />
            </NavList>
          </Nav>
        </Content>
      </Container>
    </Header>
  );
};

export default Navbar;
