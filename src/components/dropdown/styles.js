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
  transform: translateY(10px);

  /* svg {
    transform: translateY(2px);
    margin-left: ${({ theme }) => theme.spacing.smallest};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  } */

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: space-between;
    transform: translateY(0);

    /* button div {
      position: absolute;
      z-index: 9999;
      margin-right: ${({ theme }) => theme.spacing.medium};
    }

    &:hover {
      pointer-events: none !important;
    } */
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
  border-radius: ${({ theme }) => theme.spacing.space10};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.main};
  margin-top: 20px;

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
    font-size: ${({ theme }) => theme.font.size.secondary};
    ${({ theme }) =>
      `padding: ${theme.spacing.space20} ${theme.spacing.space30}`};

    &:hover {
      background-color: ${({ theme }) => theme.color.pallete.backgroundLight};
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
  }
`;
