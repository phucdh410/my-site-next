"use client";

import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

import { EVENT_TYPES } from "@/common/constants/options";
import {
  MCalendarFilterCheckbox,
  MCalendarFilterLabel,
} from "@/styled/calendars";
import { TEvents } from "@/types/calendar";

import "./styles.scss";

export const MSidebarCalendar = () => {
  return (
    <Stack width={280} flexShrink={0} divider={<Divider flexItem />}>
      <Box p={2.5}>
        <Button
          fullWidth
          startIcon={<Add />}
          sx={{
            textAlign: "center",
            color: "white",
            borderRadius: "8px",
            backgroundColor: (theme) => theme.palette.purple_text.main,
          }}
        >
          Add Event
        </Button>
      </Box>

      <Box>
        <DateCalendar
          className="sidebar-calendar"
          showDaysOutsideCurrentMonth
          disablePast
          dayOfWeekFormatter={(_day, weekday: Dayjs) =>
            `${weekday.format("dd")}`
          }
          views={["day"]}
          sx={{ maxWidth: "100%" }}
        />
      </Box>

      <Stack gap={0.5}>
        <Typography p={2.5} pb={1} fontWeight={500} fontSize={18}>
          Event Filters
        </Typography>
        {EVENT_TYPES.map((type) => (
          <FormControlLabel
            key={type}
            label={
              <MCalendarFilterLabel htmlFor={`sidebar-calendar-event-${type}`}>
                {type}
              </MCalendarFilterLabel>
            }
            control={
              <MCalendarFilterCheckbox
                id={`sidebar-calendar-event-${type}`}
                defaultChecked={true}
                type={type as TEvents}
              />
            }
            sx={{ marginInline: "14px", width: "fit-content" }}
          />
        ))}
      </Stack>
    </Stack>
  );
};
