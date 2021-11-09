import React from "react";
import { navList } from "../../domain/navigationList";
import Container from "../common/container";
import CartWidget from "./cart-widget";
import NavItem from "./navItem";
import { Brand, Content, Header, Nav, NavList } from "./styles";

const Navbar = ({ counter }) => {
  return (
    <Header role="banner">
      <Container>
        <Content>
          <Brand href="/" aria-label="link">
            WeBuyt
          </Brand>
          <Nav>
            <NavList>
              {navList.map((item) => (
                <NavItem key={item.id} className="navbar__list--item">
                  <a href={`/${item.to}`} aria-label="link">
                    {item.navItem}
                  </a>
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