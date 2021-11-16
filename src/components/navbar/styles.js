import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  padding: 0;
  margin: 0;
  box-shadow: ${({ theme }) => theme.shadow.main};
  background-color: ${({ theme }) => theme.color.white};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.space8} 0;
`;

export const Brand = styled.a`
  font-weight: 800;
  font-size: ${({ theme }) => theme.font.size.primary};
  color: ${({ theme }) => theme.color.primary};

  &::active,
  &:focus {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
`;
