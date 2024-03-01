import { Box, Stack } from "@mui/material";

import { HEADER_HEIGHT } from "@/common/constants/layout-size";

import { CSearchBar } from "./CSearchBar";
import { CToolbar } from "./CToolbar";

export const CHeader = () => {
  return (
    <Box height={HEADER_HEIGHT} bgcolor="white">
      <Stack
        height="100%"
        direction="row"
        px={3}
        py={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <CSearchBar />
        <CToolbar />
      </Stack>
    </Box>
  );
};
