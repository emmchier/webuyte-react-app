import styled from 'styled-components';

export const Content = styled.li`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.normal};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.border.radius.main};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  transition: ${({ theme }) => theme.transition.main};
  color: ${({ theme }) => theme.color.text.primary};

  &:hover {
    transition: ${({ theme }) => theme.transition.main};
    box-shadow: ${({ theme }) => theme.shadow.main};
  }

  p,
  h3 {
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 250px;
  position: relative;

  svg {
    position: absolute;
    right: 0;
  }

  span {
    position: absolute;
  }
`;

export const Image = styled.img`
  width: 100%;
  background-color: ${({ theme }) => theme.color.disabled};
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    flex-grow: 1;

    span {
      margin-right: 2px;
    }
  }

  button {
    padding: 0;
    margin-top: 0 !important;
    display: flex;
    justify-content: flex-end;
  }
`;

export const ProductInfo = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};

  button {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(4)};
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

export const SecondaryInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};

  p:nth-child(1) {
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }

  p {
    font-size: ${({ theme }) => theme.font.smallX.size};
    line-height: ${({ theme }) => theme.font.smallX.lineHeight};
  }
`;
