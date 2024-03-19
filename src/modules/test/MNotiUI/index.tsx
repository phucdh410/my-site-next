"use client";

import { Stack } from "@mui/material";
import { enqueueSnackbar } from "notistack";

export const MNotiUI = () => {
  return (
    <Stack mt={20} gap={3} direction="column">
      <button
        onClick={() =>
          enqueueSnackbar("Xin chào các bạn", { variant: "success" })
        }
      >
        Success
      </button>
      <button
        onClick={() =>
          enqueueSnackbar("Xin chào các bạn", { variant: "error" })
        }
      >
        Error
      </button>
    </Stack>
  );
};
