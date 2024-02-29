"use client";

import { useCallback } from "react";

import { EventContentArg } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Box } from "@mui/material";
import dayjs from "dayjs";

import "./styles.scss";

export interface IExtendedProps {
  type: "personal" | "business" | "family" | "holiday" | "etc";
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
    title: "Meeting",
    start: dayjs().toDate(),
    end: dayjs().add(1, "day").toDate(),
    type: "personal",
  },
  {
    title: "Playing",
    start: dayjs().toDate(),
    type: "family",
  },
];

export const MFullCalendar = () => {
  //#region Event
  const eventContent = useCallback((eventInfo: EventContentArg) => {
    const event = eventInfo.event;
    const extendedProps = event?.extendedProps as IExtendedProps;

    switch (extendedProps.type) {
      case "business":
        return <p>{extendedProps.type + " " + event.title}</p>;

      default:
        return <p>{extendedProps.type + " " + event.title}</p>;
    }
  }, []);
  //#endregion

  //#region Render
  return (
    <Box className="fullcalendar-wrapper">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        editable
        droppable
        initialView="dayGridMonth"
        events={events}
        eventContent={eventContent}
        dayHeaderClassNames="fullcalendar-header"
        dayCellClassNames="fullcalendar-day-cell"
        eventClassNames="fullcalendar-day-event"
        headerToolbar={{
          start: "prev,next title",
          center: "",
          end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
      />
    </Box>
  );
  //#endregion
};
