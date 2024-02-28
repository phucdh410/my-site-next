import { CSSObject, Drawer, styled, Theme } from "@mui/material";

import { SIDEBAR_FULL, SIDEBAR_MINI } from "@/common/constants/layout-size";

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
    ...(open ? { ...styleIn(theme) } : { ...styleOut(theme) }),
  },
}));
