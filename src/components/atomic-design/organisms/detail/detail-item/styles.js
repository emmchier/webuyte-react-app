import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const PriceContainer = styled(Content)`
  align-items: flex-start;
`;

export const ImgContainer = styled.div`
  overflow: hidden;
`;

export const ItemCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  p {
    margin-right: ${({ theme }) => theme.spacing(4)};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }
`;

export const HeaderDetail = styled.div`
  background-color: ${({ theme }) => theme.color.grey.light};
  width: 100%;
  position: fixed;
  z-index: 9;
  padding: ${({ theme }) => theme.spacing(7)} 0;
`;

export const HeaderInfo = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  p:nth-child(1),
  p:nth-child(3) {
    padding: 0 !important;
  }

  div:nth-child(4) {
    margin-left: ${({ theme }) => theme.spacing(4)};
    ${({ theme }) => `padding: 0 ${theme.spacing(4)}`};
  }

  hr {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

export const HorizontalContent = styled(Content)`
  justify-content: flex-start;

  a,
  span {
    color: ${({ theme }) => theme.color.text.secondary};
  }

  span:nth-child(2) {
    margin: 0 ${({ theme }) => theme.spacing(3)};
  }
`;

export const Image = styled.img`
  width: 80%;
`;

export const ItemDataContainer = styled.div`
  button:nth-child(5) {
    margin-bottom: ${({ theme }) => theme.spacing(5)} !important;
    width: 100%;
  }
`;

export const MoreProductsContainer = styled.div`
  overflow: hidden;

  h4 {
    margin-top: ${({ theme }) => theme.spacing(20)};
  }

  div {
    ul {
      transform: translateY(-60px);
    }
  }
`;

export const ItemDataContent = styled.div`
  overflow: scroll;
  margin-right: ${({ theme }) => theme.spacing(10)};

  div:nth-child(1) {
    margin-bottom: 0;
  }
`;

export const ItemBuyContent = styled.div`
  padding: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.border.radius.main};
  position: fixed;
  margin-right: ${({ theme }) => theme.spacing(20)};

  h6 {
    font-size: ${({ theme }) => theme.font.small.size};
    margin-top: ${({ theme }) => theme.spacing(5)};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  svg {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  p:nth-child(1) {
    span {
      font-size: ${({ theme }) => theme.font.medium.size};
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }
  }

  p:nth-child(2) {
    font-size: ${({ theme }) => theme.font.smallX.size};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const ReservaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.font.medium.size};
    line-height: ${({ theme }) => theme.font.medium.lineHeight};
    color: ${({ theme }) => theme.color.pallete.primary};
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`;

export const TitlesContainer = styled.div`
  height: ${({ theme }) => theme.spacing(15)};
  margin-top: ${({ theme }) => theme.spacing(3)};
  padding: 0;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  h5 {
    font-size: ${({ theme }) => theme.font.large.size};
    line-height: ${({ theme }) => theme.font.large.lineHeight};
    color: ${({ theme }) => theme.color.text.primary};
  }

  h6 {
    font-size: ${({ theme }) => theme.font.medium.size};
    line-height: ${({ theme }) => theme.font.medium.lineHeight};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const PriceDetailContainer = styled.div`
  p {
    &:nth-child(1) {
      font-size: ${({ theme }) => theme.font.large.size};
      line-height: ${({ theme }) => theme.font.large.lineHeight};
    }

    &:nth-child(1),
    &:nth-child(3) {
      margin-top: ${({ theme }) => theme.spacing(5)};
    }
  }
  hr {
    margin: ${({ theme }) => theme.spacing(5)} 0;
  }
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.color.grey};
  font-size: ${({ theme }) => theme.font.medium.size};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const Description = styled.p``;

export const CancelBtnContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(5)};

  button {
    width: 100%;
    background-color: ${({ theme }) => theme.color.background.light};
    border: ${({ theme }) => theme.color.background.light};
    color: ${({ theme }) => theme.color.pallete.primary};

    &:hover {
      background-color: ${({ theme }) => theme.color.pallete.primaryLight};
      border: ${({ theme }) => theme.color.pallete.primaryLight};
      color: ${({ theme }) => theme.color.white};
    }
  }
`;

export const FinishBtnContainer = styled.div``;

export const Actions = styled.div`
  margin-top: ${({ theme }) => theme.spacing(5)};
  button {
    width: 100% !important;
    display: flex !important;
  }
`;

export const AddBtnContainer = styled.div`
  button {
    width: 100%;
  }
`;

export const StockContainer = styled.p`
  span {
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }
`;

export const Category = styled(StockContainer)`
  display: inline;
`;

export const List = styled.ul`
  margin: 0 !important;
`;

export const Adjust = styled.div`
  padding: 0 !important;
  margin-top: ${({ theme }) => theme.spacing(25)};
`;
