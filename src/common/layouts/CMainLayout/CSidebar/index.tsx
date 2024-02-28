"use client";

import { useState } from "react";

import { KeyboardArrowLeft } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

import { HEADER_HEIGHT } from "@/common/constants/layout-size";

import { CDrawer } from "./CDrawer";
import { CNavigation } from "./CNavigation";

export const CSidebar = () => {
  //#region Data
  const [open, setOpen] = useState<boolean>(true);
  //#endregion

  //#region Event
  const onToggle = () => {
    setOpen((prev) => !prev);
  };
  //#endregion

  //#region Render
  return (
    <CDrawer variant="permanent" open={open}>
      <Box height={HEADER_HEIGHT}>Logo</Box>

      <CNavigation />

      <IconButton onClick={onToggle}>
        <KeyboardArrowLeft />
      </IconButton>
    </CDrawer>
  );
  //#endregion
};
