import type { Theme } from "@mui/material";
import {
  CSSObject,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

import { SIDEBAR_FULL, SIDEBAR_MINI } from "@/common/constants/layout-size";

//#region Drawer
const styleIn = (theme: Theme): CSSObject => ({
  width: SIDEBAR_FULL,
  transition: theme.transitions.create(["width"], {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.enteringScreen,
  }),
});
const styleOut = (theme: Theme): CSSObject => ({
  width: SIDEBAR_MINI,
  transition: theme.transitions.create(["width"], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
});

export const CDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  ...(open ? { ...styleIn(theme) } : { ...styleOut(theme) }),

  ".MuiPaper-root.MuiDrawer-paper": {
    boxShadow: "2px 0 6px 2px rgb(0 0 0 / 6%)",
    borderRight: "none",

    ...(open ? { ...styleIn(theme) } : { ...styleOut(theme) }),
  },
}));
//#endregion

//#region Toggle Button
interface IStyledToggleButton {
  open?: boolean;
}

export const ToggleSidebarButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "open",
})<IStyledToggleButton>(
  ({ theme, open }): CSSObject => ({
    position: "absolute",
    top: 50,
    ".MuiSvgIcon-root": {
      width: 16,
      height: 16,
    },
    left: open ? SIDEBAR_FULL - 14 : SIDEBAR_MINI - 14, // Lấy width của icon button trên UI chia 2 => 8
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
    filter: "drop-shadow(0px 0px 2px rgb(0 0 0 / 18%))",
    "&:hover": {
      backgroundColor: "rgb(244 238 255)",
    },
    ...(open
      ? {
          transition: theme.transitions.create(["left", "background-color"], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }
      : {
          transition: theme.transitions.create(["left"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }),
  })
);
//#endregion

//#region Sidebar Item
export const CSidebarItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "divider",
})(({ theme, divider: sub }) => ({
  borderRadius: "8px",
  color: "rgb(99, 115, 129)",
  padding: "4px 8px 4px 12px",
  minHeight: sub ? 36 : 44,
  "&.Mui-selected": {
    color: theme.palette.sidebar_item_selected.main,
    backgroundColor: theme.palette.sidebar_item_background_selected.main,
    "&:hover": {
      backgroundColor: "rgba(0, 167, 111, 0.16)",
    },
    ".MuiListItemIcon-root": {
      color: "currentColor",
      "svg.sidebar-icon": {
        color: "currentColor",
      },
    },
    ".MuiListItemText-root .MuiTypography-root": {
      fontWeight: 600,
    },
  },
}));
export const CSidebarItemIcon = styled(ListItemIcon)(({ theme }) => ({
  marginRight: "16px",
  minWidth: "unset",
  flexShrink: 0,
  height: 24,
  width: 24,
  alignItems: "center",
  justifyContent: "center",
  ".sidebar-icon": {
    width: "100%",
  },
}));
export const CSidebarItemText = styled(ListItemText)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  ".MuiTypography-root": {
    fontFamily: "var(--font-public-sans)",
    fontSize: "0.875rem",
    fontWeight: 500,
    textTransform: "capitalize",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
//#endregion
