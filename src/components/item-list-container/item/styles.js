import styled from "styled-components";

export const Content = styled.li`
  max-width: 45%;
  width: 45%;
  display: inline-flex;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.main};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.border.radius.main};
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  width: 60%;
  img {
    height: 100%;
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.space20};

  button {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.space8};
  background-color: ${({ theme }) => theme.color.disabled};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.grey};
  margin: ${({ theme }) => theme.spacing.space5};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.grey};
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.color.grey};
  font-size: ${({ theme }) => theme.font.size.primary};
  font-weight: 600;
`;

export const ActionButtons = styled.div`
  width: 100%;

  button:nth-child(2) {
    margin-top: 20px;
  }
`;

export const StockContainer = styled.p`
  color: ${({ theme }) => theme.color.pallete.primary};
  background-color: ${({ theme }) => theme.color.pallete.hoverButton};
  ${({ theme }) =>
    `padding: ${theme.spacing.space10} ${theme.spacing.space10}`};
  border-radius: ${({ theme }) => theme.border.radius.main};
`;
