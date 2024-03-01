import { Box, Stack, Typography } from "@mui/material";

export const CHeader = () => {
  return (
    <Box p={3}>
      <Stack>
        <img src="/assets/mysite-logo.png" alt="My site logo" />
        <Typography>ĐHP-410</Typography>
      </Stack>
    </Box>
  );
};
