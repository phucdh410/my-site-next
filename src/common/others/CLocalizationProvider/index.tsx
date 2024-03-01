"use client";

import { PropsWithChildren } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);
dayjs.updateLocale("vi", {
  weekdaysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
});

export const CLocalizationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
};
