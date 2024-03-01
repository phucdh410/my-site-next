"use client";

import { useCallback } from "react";

import { EventContentArg } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Box, Stack } from "@mui/material";
import classNames from "classnames";
import dayjs from "dayjs";

import { TEvents } from "@/types/calendar";

import "./styles.scss";

export interface IExtendedProps {
  type: TEvents;
}

const events = [
  {
    title: "Prepare documents",
    start: dayjs().set("date", 4).toDate(),
    type: "business",
  },
  {
    title: "Sport Tour Event",
    start: dayjs().set("date", 14).toDate(),
    type: "holiday",
  },
  {
    title: "Meeting with customers",
    start: dayjs().toDate(),
    end: dayjs().add(1, "day").toDate(),
    type: "personal",
  },
  {
    title: "Business something",
    start: dayjs().set("date", 8).toDate(),
    type: "business",
  },
  {
    title: "Playing",
    start: dayjs().toDate(),
    type: "family",
  },
  {
    title: "Personal something",
    start: dayjs().set("date", 19).toDate(),
    type: "personal",
  },
  {
    title: "Family play games",
    start: dayjs().set("date", 23).toDate(),
    end: dayjs().set("date", 23).add(2, "day").toDate(),
    type: "family",
  },
  {
    title: "Holiday something",
    start: dayjs().set("date", 30).toDate(),
    type: "holiday",
  },
];

export const MFullCalendar = () => {
  //#region Event
  const eventContent = useCallback((eventInfo: EventContentArg) => {
    const event = eventInfo.event;
    const extendedProps = event?.extendedProps as IExtendedProps;

    return (
      <p className={classNames("fullcalendar-event-text", extendedProps.type)}>
        {event.title}
      </p>
    );
  }, []);
  //#endregion

  //#region Render
  return (
    <Stack flex={1}>
      <Box className="fullcalendar-wrapper" p={2.5}>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin,
          ]}
          editable
          droppable
          initialView="dayGridMonth"
          events={events}
          eventContent={eventContent}
          dayHeaderClassNames="fullcalendar-header"
          dayCellClassNames="fullcalendar-day-cell"
          eventClassNames="fullcalendar-day-event"
          dayMaxEventRows={3}
          headerToolbar={{
            start: "prev,next title",
            center: "",
            end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
        />
      </Box>
    </Stack>
  );
  //#endregion
};
