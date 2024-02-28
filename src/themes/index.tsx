"use client";
// import type {} from "@mui/x-data-grid/themeAugmentation"; //TODO bỏ comment nếu có sử dụng MUI-DataGrid
// import type {} from "@mui/x-date-pickers/themeAugmentation"; //TODO bỏ comment nếu có sử dụng MUI-X-Date-Pickers

import { Components, createTheme, Theme } from "@mui/material";

//#region Breakpoints & Palette & Typography
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1366,
      "2xl": 1536,
      "3xl": 1680,
      "4xl": 1920,
    },
  },
  palette: {
    primary: {
      main: "#124874",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#CF373D",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#FFC50C",
      contrastText: "#ffffff",
    },
    success: {
      main: "rgb(91, 228, 155)",
      contrastText: "#ffffff",
    },
    exampleCustomColor: {
      main: "#333333",
      contrastText: "#ffffff",
    },
    sidebar_group: {
      main: "rgb(145, 158, 171)",
      contrastText: "#ffffff",
    },
    sidebar_group_hover: {
      main: "rgb(33, 43, 54)",
      contrastText: "#ffffff",
    },
    sidebar_item: {
      main: "rgb(99, 115, 129)",
      contrastText: "#ffffff",
    },
    sidebar_item_selected: {
      main: "rgb(0, 167, 111)",
      contrastText: "#ffffff",
    },
    sidebar_item_background_selected: {
      main: "rgba(0, 167, 111, 0.08)",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "var(--font-montserrat)",
    fontSize: 14,
    htmlFontSize: 16,
    fontWeightRegular: 400,
  },
  components: {},
});
//#endregion

//#region Components
theme = createTheme(theme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  } as Components<Omit<Theme, "components">>,
});
//#endregion

//#region Declare
declare module "@mui/material/styles" {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    "2xl": true;
    "3xl": true;
    "4xl": true;
  }

  interface Palette {
    exampleCustomColor: Palette["primary"];
    sidebar_group: Palette["primary"];
    sidebar_group_hover: Palette["primary"];
    sidebar_item: Palette["primary"];
    sidebar_item_selected: Palette["primary"];
    sidebar_item_background_selected: Palette["primary"];
  }

  interface PaletteOptions {
    exampleCustomColor?: PaletteOptions["primary"];
    sidebar_group?: PaletteOptions["primary"];
    sidebar_group_hover?: PaletteOptions["primary"];
    sidebar_item?: PaletteOptions["primary"];
    sidebar_item_selected?: PaletteOptions["primary"];
    sidebar_item_background_selected?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface ButtonPropsColorOverrides {
    exampleCustomColor: true;
    sidebar_group: true;
    sidebar_group_hover: true;
    sidebar_item: true;
    sidebar_item_selected: true;
    sidebar_item_background_selected: true;
  }
}
declare module "@mui/material/IconButton" {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface IconButtonPropsColorOverrides {
    exampleCustomColor: true;
    sidebar_group: true;
    sidebar_group_hover: true;
    sidebar_item: true;
    sidebar_item_selected: true;
    sidebar_item_background_selected: true;
  }
}
//#endregion

export default theme;
