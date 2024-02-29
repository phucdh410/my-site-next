"use client";

import { Box } from "@mui/material";

import { HEADER_HEIGHT } from "@/common/constants/layout-size";

import { CDrawer } from "../StyledComponent";

import { CNavigation } from "./CNavigation";

export const CSidebar = ({ open }: { open: boolean }) => {
  //#region Data
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <CDrawer variant="permanent" open={open}>
      <Box height={HEADER_HEIGHT}>Logo</Box>

      <CNavigation />
    </CDrawer>
  );
  //#endregion
};
