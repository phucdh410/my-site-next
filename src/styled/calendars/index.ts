import { Checkbox, FormLabel, styled } from "@mui/material";

import { TEvents } from "@/types/calendar";

//#region Label
export const MCalendarFilterLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: "0.9rem",
  fontWeight: 600,
  fontFamily: "var(--font-public-sans)",
  textTransform: "capitalize",
}));
//#endregion

//#region Checkbox
interface IStyledCalendarFilterCheckbox {
  type?: TEvents;
}

export const MCalendarFilterCheckbox = styled(Checkbox, {
  shouldForwardProp: (prop) => prop !== "type",
})<IStyledCalendarFilterCheckbox>(({ theme, type }) => ({
  padding: "4px",
  borderRadius: "50%",
  "&.Mui-checked": {
    color: type ? theme.palette?.[`event_${type}`]?.main : "inherit",
    "&:not(.Mui-disabled) svg": {
      filter: "drop-shadow(0px 2px 4px rgb(46 38 61 / 0.16))",
    },
  },
}));
//#endregion
