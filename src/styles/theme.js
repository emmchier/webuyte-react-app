// main theme

export const theme = {
  color: {
    pallete: {
      primary: "#AB044A",
      primaryDark: "#750023",
      primaryLight: "#E24B75",
      secondary: "#5b3bda",
      secondaryDark: "#0d0ca7",
      secondaryLight: "#9368ff",
    },
    text: {
      primary: "#383838",
      secondary: "#6F6C6C",
    },
    background: {
      main: "#EDEDED",
      light: "#FFEFF6",
    },
    grey: {
      light: "#EDEDED",
      dark: "#C3BEBE",
    },
    white: "#FFFFFF",
    black: "#212121",
    disabled: "#E8E9EB",
    overlay: "#00000069",
  },
  font: {
    family: "'Montserrat', sans-serif",
    largeXXX: {
      size: "3rem", // 48px
      lineHeight: "3.625rem", // 58
    },
    largeXX: {
      size: "2.5rem", // 40px
      lineHeight: "3.125rem", // 50px
    },
    largeX: {
      size: "2rem", // 32px
      lineHeight: "2.625rem", // 42px
    },
    large: {
      size: "1.5rem", // 24px
      lineHeight: "2.125rem", // 34px
    },
    medium: {
      size: "1.25rem", // 20px
      lineHeight: "1.875rem", // 30px
    },
    small: {
      size: "1rem", // 16px
      lineHeight: "1.625rem", // 26px
    },
    smallX: {
      size: "0.875rem", // 14px
      lineHeight: "1.5rem", // 24px
    },
    smallXX: {
      size: "0.625rem", // 10px
      lineHeight: "1.25rem", // 20px
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  spacing: (unity) => `${0.25 * unity}rem`,
  shadow: {
    main: "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(76, 81, 191, 0.12), 0px 10px 20px rgba(76, 81, 191, 0.18);",
    normal:
      "0 8px 17px 2px rgba(71, 69, 69, 0.023), 0 3px 14px 2px rgba(71, 69, 69, 0.023), 0 5px 5px -3px rgba(71, 69, 69, 0.023)",
  },
  transition: {
    main: "0.1s ease-in-out",
  },
  border: {
    radius: {
      small: "5px",
      main: "8px",
    },
  },
  breakpoints: {
    smallMobile: "max-width: 479px",
    mobile: "max-width: 767px",
    tablet: "max-width: 991px",
    tabletLandscape: "max-width: 1199px",
    desktop: "max-width: 1599px",
  },
};
