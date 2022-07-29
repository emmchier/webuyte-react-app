import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: ${({ theme }) => theme.shadow.main};
  /* position: absolute;
  bottom: 0; */
  padding: 30px;
`;
