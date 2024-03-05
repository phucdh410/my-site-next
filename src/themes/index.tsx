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
      _2xl: 1440,
      _3xl: 1600,
      _4xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "rgba(0, 167, 111, 0.16)",
      contrastText: "rgb(0, 167, 111)",
    },
    secondary: {
      main: "rgb(237, 228, 255)",
      contrastText: "rgb(140, 87, 255)",
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
    purple_bg: {
      main: "rgb(126, 78, 229)",
      contrastText: "#ffffff",
    },
    purple_light: {
      main: "rgb(140 87 255 / 0.16)",
      contrastText: "#ffffff",
    },
    purple_text: {
      main: "rgba(140, 87, 255, 1)",
      contrastText: "#ffffff",
    },
    event_all: {
      main: "rgb(138, 141, 147)",
      contrastText: "#ffffff",
    },
    event_personal: {
      main: "rgb(255, 76, 81)",
      contrastText: "#ffffff",
    },
    event_holiday: {
      main: "rgb(86, 202, 0)",
      contrastText: "#ffffff",
    },
    event_business: {
      main: "rgb(140, 87, 255)",
      contrastText: "#ffffff",
    },
    event_family: {
      main: "rgb(255, 180, 0)",
      contrastText: "#ffffff",
    },
    event_etc: {
      main: "rgb(22, 177, 255)",
      contrastText: "#ffffff",
    },
    icon: {
      main: "rgb(144 156 165)",
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
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.icon.main,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "icon",
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
    _2xl: true;
    _3xl: true;
    _4xl: true;
  }

  interface Palette {
    sidebar_group: Palette["primary"];
    sidebar_group_hover: Palette["primary"];
    sidebar_item: Palette["primary"];
    sidebar_item_selected: Palette["primary"];
    sidebar_item_background_selected: Palette["primary"];
    purple_bg: Palette["primary"];
    purple_light: Palette["primary"];
    purple_text: Palette["primary"];
    event_all: Palette["primary"];
    event_business: Palette["primary"];
    event_holiday: Palette["primary"];
    event_personal: Palette["primary"];
    event_family: Palette["primary"];
    event_etc: Palette["primary"];
    icon: Palette["primary"];
  }

  interface PaletteOptions {
    sidebar_group?: PaletteOptions["primary"];
    sidebar_group_hover?: PaletteOptions["primary"];
    sidebar_item?: PaletteOptions["primary"];
    sidebar_item_selected?: PaletteOptions["primary"];
    sidebar_item_background_selected?: PaletteOptions["primary"];
    purple_bg?: PaletteOptions["primary"];
    purple_light?: PaletteOptions["primary"];
    purple_text?: PaletteOptions["primary"];
    event_all?: PaletteOptions["primary"];
    event_business?: PaletteOptions["primary"];
    event_family?: PaletteOptions["primary"];
    event_holiday?: PaletteOptions["primary"];
    event_personal?: PaletteOptions["primary"];
    event_etc?: PaletteOptions["primary"];
    icon?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface ButtonPropsColorOverrides {
    sidebar_group: true;
    sidebar_group_hover: true;
    sidebar_item: true;
    sidebar_item_selected: true;
    sidebar_item_background_selected: true;
    purple_bg: true;
    purple_light: true;
    purple_text: true;
    event_all: true;
    event_business: true;
    event_family: true;
    event_holiday: true;
    event_personal: true;
    event_etc: true;
    icon: true;
  }
}
declare module "@mui/material/IconButton" {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface IconButtonPropsColorOverrides {
    sidebar_group: true;
    sidebar_group_hover: true;
    sidebar_item: true;
    sidebar_item_selected: true;
    sidebar_item_background_selected: true;
    purple_bg: true;
    purple_light: true;
    purple_text: true;
    event_all: true;
    event_business: true;
    event_family: true;
    event_holiday: true;
    event_personal: true;
    event_etc: true;
    icon: true;
  }
}
//#endregion

export default theme;
