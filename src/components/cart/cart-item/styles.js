import styled from "styled-components";

export const Content = styled.li`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow.main};
  border-radius: ${({ theme }) => theme.border.radius.main};
  background-color: ${({ theme }) => theme.color.white};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  overflow: hidden;

  div:nth-child(1) {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    border-radius: ${({ theme }) => theme.border.radius.main};
    background-color: ${({ theme }) => theme.color.grey.light};
    color: ${({ theme }) => theme.color.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    font-size: ${({ theme }) => theme.font.large.size};
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export const GeneralInfo = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(10)};
`;

export const ProductImg = styled.img`
  height: 200px;
  padding: 0;
`;

export const InfoContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: ${({ theme }) => theme.color.text.secondary};
  }
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

export const Info = styled.div``;

export const Action = styled.div`
  margin: 0 !important;
`;
