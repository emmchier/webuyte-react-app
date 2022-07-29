import React from 'react';

import { NavLink } from 'react-router-dom';
import { navList } from '../../../../domain/navigationList';
import { NotificationIcon } from '../../../ui/icons';
import CartWidget from '../../atoms/cart-widget';
import Container from '../../atoms/container';
import Heading from '../../atoms/heading';
import CartDropdown from '../../organisms/cart/cart-dropdown';
import Dropdown from '../../organisms/dropdown';
import FavouriteItem from '../../organisms/favourite/favourite-item';
import NavItem from './navItem';

import { Brand, Content, Header, Nav, NavList } from './styles';

const Navbar = () => {
  const getNavLink = (id, item) => {
    switch (id) {
      case 'favoritos':
        return (
          <Dropdown title="Favoritos" item={<FavouriteItem />}>
            lililili
          </Dropdown>
        );
      case 'notificaciones':
        return (
          <Dropdown
            title="Notificaciones"
            emptyMessage="No hay notificaciones"
            item={<NotificationIcon />}
          >
            lelelelele
          </Dropdown>
        );
      case 'cart':
        return (
          <Dropdown title="Carrito" item={<CartWidget />}>
            <CartDropdown emptyMessage="Tu carrito está vacío" />
          </Dropdown>
        );
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
              {navList?.map((item) => (
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
