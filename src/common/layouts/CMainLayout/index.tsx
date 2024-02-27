import { PropsWithChildren } from "react";

import { Box, Stack } from "@mui/material";

export const CMainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Stack direction="row" flex={1}>
        <Box width={280}>Sidebar</Box>
        <Stack width="100%">
          <Box height={80}>Header</Box>
          <Box flex={1}>{children}</Box>
        </Stack>
      </Stack>
    </main>
  );
};
