import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 9;
  padding: 0;
  margin: 0;
  box-shadow: ${({ theme }) => theme.shadow.normal};
  background-color: ${({ theme }) => theme.color.white};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.font.smallXX.size} 0;
`;

export const Brand = styled.div`
  h1 {
    font-weight: ${({ theme }) => theme.font.weight.light};
    font-size: ${({ theme }) => theme.font.medium.size};
    line-height: ${({ theme }) => theme.font.medium.lineHeight};
    color: ${({ theme }) => theme.color.pallete.primary};
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
