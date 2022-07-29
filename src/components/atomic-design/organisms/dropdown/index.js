import React, { useState } from 'react';

import Heading from '../../atoms/heading';

import { Container, Content, DropdownContent, DropdownItem, DropdownMenu, Header } from './styles';

const Dropdown = ({ item, title, children, showIt = false }) => {
  const [show, setShow] = useState(showIt);

  return (
    <Container
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
    >
      <DropdownItem>{item}</DropdownItem>
      <Content
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
      >
        <DropdownMenu show={show && show} fade={show} onMouseLeave={() => setShow(false)}>
          <DropdownContent>
            <Header>
              <Heading variant="h5">{title}</Heading>
            </Header>
            {children}
          </DropdownContent>
        </DropdownMenu>
      </Content>
    </Container>
  );
};

export default Dropdown;
