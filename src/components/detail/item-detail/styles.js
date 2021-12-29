import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PriceContainer = styled(Content)``;

export const ImgContainer = styled.div`
  overflow: hidden;
`;

export const ItemCountContainer = styled.div``;

export const HeaderDetail = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const HeaderInfo = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  p:nth-child(1),
  p:nth-child(3) {
    padding: 0 !important;
  }

  div:nth-child(4) {
    margin-left: ${({ theme }) => theme.spacing(4)};
    ${({ theme }) => `padding: ${theme.spacing(0)} ${theme.spacing(4)}`};
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

export const ItemDataContent = styled.div`
  overflow: hidden;
  margin-right: ${({ theme }) => theme.spacing(10)};

  div:nth-child(1) {
    margin-bottom: 0;
  }
`;

export const ItemBuyContent = styled.div`
  padding: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.border.radius.main};
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
`;

export const Title = styled.div`
  h5 {
    font-size: ${({ theme }) => theme.font.small.size};
    line-height: ${({ theme }) => theme.font.smallX.lineHeight};
  }
  h6 {
    font-size: 13px;
    line-height: ${({ theme }) => theme.font.smallXX.lineHeight};
    color: ${({ theme }) => theme.color.text.secondary};
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

export const FinishBtnContainer = styled.div`
  button {
    width: 100%;
  }
`;

export const Actions = styled.div``;

export const StockContainer = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  ${({ theme }) => `padding: ${theme.spacing(5)} ${theme.spacing(5)}`};
  border-radius: ${({ theme }) => theme.border.radius.main};
`;

export const Category = styled(StockContainer)`
  display: inline;
`;

export const List = styled.ul`
  margin: 0 !important;
`;

export const Adjust = styled.div`
  padding: 0 !important;
`;
