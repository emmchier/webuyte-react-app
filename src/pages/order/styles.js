import styled from "styled-components";

export const CloseOrderContent = styled.div`
  width: 100%;
  height: 35vh;
  background-color: #4aa259;
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.largeXX.size};
    line-height: ${({ theme }) => theme.font.largeXX.lineHeight};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const CloseOrderInfo = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.main};
  margin: auto;
  width: 50%;
  padding: ${({ theme }) => theme.spacing(10)};
  margin-top: ${({ theme }) => theme.spacing(10)};
  border-radius: ${({ theme }) => theme.border.radius.main};
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    font-size: ${({ theme }) => theme.font.medium.size};
  }
`;

export const ImgContainer = styled.div``;

export const Image = styled.img``;

export const TextContainer = styled.div``;
