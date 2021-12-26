import React from "react";

import { Link, NavLink } from "react-router-dom";
import { navList } from "../../domain/navigationList";
import Container from "../common/container";
import Heading from "../common/heading";
import Dropdown from "../dropdown";
import CartWidget from "./cart-widget";
import NavItem from "./navItem";

import { Brand, Content, Header, Nav, NavList } from "./styles";

const Navbar = () => {
  const getNavLink = (id, item) => {
    switch (id) {
      case "categorias":
        return <Dropdown>{item}</Dropdown>;
      case "cart":
        return <CartWidget />;
      default:
        return item;
    }
  };
  return (
    <Header role="banner">
      <Container>
        <Content>
          <NavLink to="/">
            <Brand>
              <Heading variant="h1">Wine by Wine</Heading>
            </Brand>
          </NavLink>
          <Nav>
            <NavList>
              {navList.map((item) => (
                <NavItem key={item.id}>
                  <NavLink to={item.to} aria-label="link">
                    {getNavLink(item.id, item.navItem)}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </Nav>
        </Content>
      </Container>
    </Header>
  );
};

export default Navbar;
