import styled from "styled-components";

export const Content = styled.li`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.space20};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.main};
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 150px;
  overflow: hidden;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing.space20};
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
