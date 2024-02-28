import { PropsWithChildren } from "react";

import { Box, Stack } from "@mui/material";

import { HEADER_HEIGHT } from "@/common/constants/layout-size";

import { CSidebar } from "./CSidebar";

export const CMainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  //#region Data
  //#endregion

  //#region Event

  //#endregion

  //#region Render
  return (
    <main>
      <Stack direction="row" flex={1}>
        <CSidebar />
        <Stack width="100%">
          <Box height={HEADER_HEIGHT}>Header</Box>
          <Box flex={1}>{children}</Box>
        </Stack>
      </Stack>
    </main>
  );
  //#endregion
};
