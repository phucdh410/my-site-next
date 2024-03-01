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
        py={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <CSearchBar />
        <Stack direction="row">
          <Box maxWidth={70}>
            <img src="/assets/images/mysite.gif" alt="Funny gif" />
          </Box>
          <Box maxWidth={70}>
            <img src="/assets/images/mysite-2.gif" alt="Funny gif" />
          </Box>
        </Stack>
        <CToolbar />
      </Stack>
    </Box>
  );
};
