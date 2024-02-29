"use client";

import { PropsWithChildren, useState } from "react";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

import { HEADER_HEIGHT } from "@/common/constants/layout-size";
import { ToggleSidebarButton } from "@/styled-component/layouts";

import { CSidebar } from "./CSidebar";

export const CMainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  //#region Data
  const [open, setOpen] = useState<boolean>(true);
  //#endregion

  //#region Event
  const toggleSidebar = () => setOpen(!open);
  //#endregion

  //#region Render
  return (
    <main>
      <Stack direction="row" flex={1} position="relative">
        <ToggleSidebarButton onClick={toggleSidebar} size="small" open={open}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </ToggleSidebarButton>
        <CSidebar open={open} />
        <Stack flex={1}>
          <Box height={HEADER_HEIGHT}>Header</Box>
          <Box flex={1} px={2} pt={2}>
            {children}
          </Box>
        </Stack>
      </Stack>
    </main>
  );
  //#endregion
};
