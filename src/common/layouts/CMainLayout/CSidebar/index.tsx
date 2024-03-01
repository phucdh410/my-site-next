"use client";

import { Box, Stack, Typography } from "@mui/material";

import { HEADER_HEIGHT } from "@/common/constants/layout-size";
import { CDrawer } from "@/styled-component/layouts";

import { CNavigation } from "./CNavigation";

export const CSidebar = ({ open }: { open: boolean }) => {
  //#region Data
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <CDrawer variant="permanent" open={open}>
      <Box height={HEADER_HEIGHT} p={1}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Box
            position="relative"
            minWidth={85}
            sx={{ aspectRatio: "559/447" }}
          >
            <img
              src="/assets/images/mysite-logo.png"
              alt="My site logo"
              style={{
                position: "absolute",
                inset: 0,
              }}
            />
          </Box>
          <Typography fontSize="2.5rem" fontFamily="var(--font-honk)">
            ĐHP.410
          </Typography>
        </Stack>
      </Box>

      <CNavigation />
    </CDrawer>
  );
  //#endregion
};
