import styled from 'styled-components';

export const Sidebar = styled.div`
  position: fixed;
  height: 100vh;
`;

export const SidebarList = styled.ul`
  padding-top: ${({ theme }) => theme.spacing(5)};
`;
