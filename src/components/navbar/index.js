import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { FavouriteContext } from '../../context';
import { navList } from '../../domain/navigationList';
import { LikeFullIcon, LikeStrokeIcon } from '../../ui/icons';
import Container from '../common/container';
import Heading from '../common/heading';
import Dropdown from '../dropdown';
import FavItem from '../fav-item';
import CartWidget from './cart-widget';
import NavItem from './navItem';

import { Brand, Content, Header, Nav, NavList } from './styles';

const Navbar = () => {
  const getNavLink = (id, item) => {
    switch (id) {
      case 'favoritos':
        return <FavItem />;
      case 'categorias':
        return <Dropdown>{item}</Dropdown>;
      case 'cart':
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
                  {item.isLink ? (
                    <NavLink to={item.to} aria-label="link">
                      {getNavLink(item.id, item.navItem)}
                    </NavLink>
                  ) : (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a>{getNavLink(item.id, item.navItem)}</a>
                  )}
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
