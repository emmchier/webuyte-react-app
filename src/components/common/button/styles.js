import styled, { css } from "styled-components";

const colorStyles = (theme, color) =>
  ({
    primary: css`
      color: ${theme.color.pallete.primary};
      background-color: ${theme.color.pallete.primary};
      border: 1px solid ${theme.color.pallete.primary};
    `,
    secondary: css`
      color: ${theme.color.pallete.secondary};
      background-color: ${theme.color.pallete.secondary};
      border: 1px solid ${theme.color.pallete.secondary};
    `,
  }[color]);

const variantStyles = (theme, variant) =>
  ({
    contained: css`
      color: ${theme.color.white};
      &:hover {
        background-color: ${theme.color.pallete.primaryDark};
        border: 1px solid ${theme.color.pallete.primaryDark};
      }
      &:active {
        background-color: ${theme.color.pallete.primaryLight};
        border: 1px solid ${theme.color.pallete.primaryLight};
      }
      &:disabled {
        border: 1px solid ${theme.color.grey};
        background-color: ${theme.color.grey};
        color: ${theme.color.disabled};
      }

      @media only screen and (${theme.breakpoints.tablet}) {
        &:hover,
        &:active {
          background-color: ${theme.color.pallete.primary};
          border: 1px solid ${theme.color.pallete.primary};
        }
      }

      @media only screen and (${theme.breakpoints.mobile}) {
        &:hover,
        &:active {
          background-color: ${theme.color.pallete.primary};
          border: 1px solid ${theme.color.pallete.primary};
        }
      }
    `,
    outlined: css`
      background-color: transparent;
      &:hover {
        background-color: ${theme.color.pallete.hoverButton};
      }
      &:disabled {
        border: 1px solid ${theme.color.grey};
        background-color: transparent;
        color: ${theme.color.disabled};
      }

      @media only screen and (${theme.breakpoints.tablet}) {
        &:hover,
        &:active {
          border: 1px solid ${theme.color.pallete.primary};
          background-color: transparent;
          color: ${theme.color.pallete.primary};
        }
      }

      @media only screen and (${theme.breakpoints.mobile}) {
        &:hover,
        &:active {
          border: 1px solid ${theme.color.pallete.primary};
          background-color: transparent;
          color: ${theme.color.pallete.primary};
        }
      }
    `,
    text: css`
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0;
      &:hover {
        background-color: transparent;
        text-decoration: underline;
      }
      &:active {
        color: ${theme.color.pallete.primaryLight};
      }
      &:disabled {
        color: ${theme.color.disabled};
        text-decoration: none;
      }

      @media only screen and (${theme.breakpoints.tablet}) {
        &:hover,
        &:active {
          color: ${theme.color.pallete.primary};
          text-decoration: none;
        }
      }

      @media only screen and (${theme.breakpoints.mobile}) {
        &:hover,
        &:active {
          color: ${theme.color.pallete.primary};
          text-decoration: none;
        }
      }
    `,
    icon: css`
      background-color: transparent;
      border: 1px solid transparent;
      padding: ${theme.spacing.space8};
      &:active {
        color: ${theme.color.pallete.primaryLight};
      }
      &:disabled {
        color: ${theme.color.disabled};
        text-decoration: none;
      }
    `,
  }[variant]);

const ButtonContainer = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) =>
    `padding: ${theme.spacing.space10} ${theme.spacing.space15}`};
  border-radius: ${({ theme }) => theme.border.radius.main};
  font-size: ${({ theme }) => theme.font.size.primary};
  ${({ theme, color }) => colorStyles(theme, color)};
  ${({ theme, variant }) => variantStyles(theme, variant)};
  transition: ${({ theme }) => theme.transition.main};

  &:hover,
  &:active {
    transition: ${({ theme }) => theme.transition.main};
  }
  &:disabled {
    cursor: inherit;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    ${({ theme }) =>
      `padding: ${theme.spacing.space20} ${theme.spacing.space10}`};
    font-size: ${({ theme }) => theme.font.size.secondary};
  }
`;

export default ButtonContainer;
