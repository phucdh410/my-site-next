"use client";

import { Button, Dialog, styled } from "@mui/material";

export const ConfirmDialog = styled(Dialog)(({ theme }) => ({
  ".MuiPaper-root.MuiDialog-paper": {
    borderRadius: "20px",
    boxShadow:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
  },
  ".MuiBackdrop-root.MuiModal-backdrop": {
    backgroundColor: "transparent",
    backdropFilter: "blur(3px)",
  },
}));

export const ConfirmButton = styled(Button)(({ theme }) => ({
  minWidth: 100,
  borderRadius: "12px",
  boxShadow: "none",
  textTransform: "none",
  fontFamily: "var(--font-montserrat)",
  fontWeight: 600,
  letterSpacing: "0.05em",
  "&.cancel-button": {
    color: "rgb(252, 84, 84)",
    borderColor: "rgb(252, 84, 84, 50%)",
    "&:hover": {
      backgroundColor: "rgb(252, 84, 84, 4%)",
      borderColor: "rgb(252, 84, 84)",
    },
  },
  "&.accept-button": {
    transition: theme.transitions.create(["background-image,box-shadow"], {
      duration: "250ms",
    }),
    transitionTimingFunction: theme.transitions.easing.sharp,
    background: "linear-gradient(45deg, #bcacf9, #9051ff)",
    boxShadow:
      "0px 2px 4px -1px rgba(146, 134, 255,0.2),0px 4px 5px 0px rgba(146, 134, 255,0.14),0px 1px 10px 0px rgba(146, 134, 255,0.12)",
    "&:hover": {
      background: "linear-gradient(45deg, #baa9fb, #7629ff)",
      boxShadow:
        "0px 2px 4px -1px rgba(119, 105, 247,0.2),0px 4px 5px 0px rgba(119, 105, 247,0.14),0px 1px 10px 0px rgba(119, 105, 247,0.12)",
    },
  },
}));
