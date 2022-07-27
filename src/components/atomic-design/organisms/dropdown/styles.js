import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    &:hover {
      pointer-events: none !important;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  &:after {
    content: ".";
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
  display: none;
  ${({ show }) => (show ? `height: auto; display: inherit;` : "height: 0")};
  animation: ${({ fade }) =>
    fade ? "fadeIn .1s linear" : "fadeOut .1s linear"};
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

export const DropdownContent = styled.ul`
  color: ${({ theme }) => theme.color.pallete.primary};
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;

  li {
    font-size: ${({ theme }) => theme.font.small.size};
    ${({ theme }) => `padding: ${theme.spacing(3)} ${theme.spacing(6)}`};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
  }
`;
