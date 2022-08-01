import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    &:hover {
      pointer-events: none !important;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  position: relative;

  &:after {
    content: '.';
    visibility: collapse;
  }
`;

export const DropdownItem = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: translateY(13px);

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: space-between;
    transform: translateY(0);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  display: none;
  ${({ show }) => (show ? `height: auto; display: inherit;` : 'height: 0')};
  animation: ${({ fade }) => (fade ? 'fadeIn .1s linear' : 'fadeOut .1s linear')};
  cursor: pointer;
  padding-left: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.border.radius.main};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.main};
  margin-top: ${({ theme }) => theme.spacing(6)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 80%;
    display: block;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const DropdownContent = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  width: 45vh;
  color: ${({ theme }) => theme.color.black};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadow.main};

  h5 {
    margin: ${({ theme }) => theme.spacing(3)};
  }
`;

export const DropdownEmpty = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.disabled};
  color: ${({ theme }) => theme.color.grey.dark};
`;
