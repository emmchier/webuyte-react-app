import styled from "styled-components";

export const Content = styled.li`
  width: 100%;
  max-height: 300px;
  margin: 0;
  padding: 0;
  padding-top: 50px;
  display: flex;
  box-shadow: ${({ theme }) => theme.shadow.main};
`;

export const ProductImg = styled.img`
  height: 200px;
  padding: 0;
`;

export const InfoContent = styled.div`
  width: 75%;
  display: flex;
`;

export const Title = styled.h4`
  margin: 0;
  padding: 0;
`;

export const Price = styled.p`
  margin: 0;
  padding: 0;
`;

export const Quantity = styled.p`
  margin: 0;
  padding: 0;
`;

export const Info = styled.div`
  width: 70%;
`;

export const Action = styled.div`
  width: 30%;
`;
