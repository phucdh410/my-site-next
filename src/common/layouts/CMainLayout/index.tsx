"use client";

import { PropsWithChildren, useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { SnackbarProvider } from "notistack";

import { CContextMenu, CNoti, CSmoothScrollbar } from "@/common/others";
import { ICContextMenuRef } from "@/common/others/CContextMenu/types";
import { ToggleSidebarButton } from "@/styled/layouts/drawer";

import { CHeader } from "./CHeader";
import { CSidebar } from "./CSidebar";

export const CMainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  //#region Data
  const contextRef = useRef<null | ICContextMenuRef>(null);

  const [open, setOpen] = useState<boolean>(true);
  //#endregion

  //#region Event
  const toggleSidebar = () => setOpen(!open);

  const onContextMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();

    contextRef.current?.updatePos(event.clientX, event.clientY);
  };
  //#endregion

  //#region Render
  return (
    <main onContextMenu={onContextMenu}>
      <Stack direction="row" flex={1} position="relative">
        <ToggleSidebarButton onClick={toggleSidebar} size="small" open={open}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </ToggleSidebarButton>

        <CSidebar open={open} />

        <Stack maxHeight="100vh" position="relative" flex={1} overflow="hidden">
          <CHeader />

          <CSmoothScrollbar>
            <Box
              flex={1}
              px={2}
              pt={2}
              overflow="auto"
              className="main-content-wrapper"
            >
              {children}
            </Box>
          </CSmoothScrollbar>
        </Stack>
      </Stack>

      <SnackbarProvider
        Components={{
          success: CNoti,
        }}
      />
      <CContextMenu ref={contextRef} />
    </main>
  );
  //#endregion
};
