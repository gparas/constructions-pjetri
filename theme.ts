"use client";

import { colors, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.teal[700],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily:
      "ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
          [theme.breakpoints.up("sm")]: {
            maxWidth: 540,
          },
          [theme.breakpoints.up("md")]: {
            maxWidth: 720,
          },
          [theme.breakpoints.up("lg")]: {
            maxWidth: 960,
          },
          [theme.breakpoints.up("xl")]: {
            maxWidth: 1140,
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: ({ theme }) => ({
          fontSize: theme.typography.pxToRem(18),
        }),
        sizeSmall: ({ theme }) => ({
          fontSize: theme.typography.pxToRem(14),
        }),
        containedSizeLarge: {
          padding: ".75rem 1.5rem",
        },
      },
    },
  },
});

export default theme;
