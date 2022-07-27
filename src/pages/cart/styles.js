import styled from "styled-components";

export const ContainerList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const CartContent = styled.div`
  margin: 0;

  hr {
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const TotalPrice = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-right: ${({ theme }) => theme.spacing(5)};

  span {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.color.text.primary};
  }
`;

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 0 ${({ theme }) => theme.spacing(5)};
    color: ${({ theme }) => theme.color.grey.dark};
  }

  button {
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const CartListContainer = styled.div``;

export const CartGeneralInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span:nth-child(2) {
    padding: 0 ${({ theme }) => theme.spacing(3)};
  }
`;

export const HeaderCartContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(5)} 0;
  display: flex;
  z-index: 9;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.grey.light};
`;

export const BuyDataContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(5)};

  button {
    width: 100%;
  }
`;

export const Adjust = styled.div`
  padding: 0 !important;
`;
