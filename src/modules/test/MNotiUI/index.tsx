"use client";

import { Stack } from "@mui/material";

import { useNoti } from "@/utils/hooks/noti";

export const MNotiUI = () => {
  const { noti } = useNoti();
  return (
    <Stack mt={20} gap={3} direction="column">
      <button onClick={() => noti.success("Xin chào các bạn")}>Success</button>
      <button onClick={() => noti.error("Xin chào các bạn")}>Error</button>
    </Stack>
  );
};
