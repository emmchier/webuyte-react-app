// main theme

export const theme = {
  color: {
    pallete: {
      primary: "#6223EE",
      primaryDark: "#3b08aa",
      primaryLight: "#7e49f1",
      secondary: "#5b3bda",
      secondaryDark: "#0d0ca7",
      secondaryLight: "#9368ff",
      hoverButton: "#f3edff",
    },
    text: {
      primary: "#333333",
      secondary: "#858282",
    },
    disabled: "#E8E9EB",
    backgroundLight: "#9368ff21",
    grey: "#404040",
    white: "#FFFFFF",
    black: "#212121",
    overlay: "#00000069",
  },
  font: {
    size: {
      primary: "1.3em",
      secondary: "1em",
    },
  },
  spacing: {
    space8: "0.5em", // 8px
    space10: "0.625em", // 10px
    space15: "0.9375em", // 15px
    space20: "1.25em", // 20px
    space30: "1.875em", // 30px
    space80: "5em", // 80px
    space100: "6.25em", // 100px
  },
  shadow: {
    main: "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(76, 81, 191, 0.12), 0px 10px 20px rgba(76, 81, 191, 0.18);",
  },
  transition: {
    main: "0.1s ease-in-out",
  },
  border: {
    radius: {
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
