import { Container, Paper, Stack } from "@mui/material";

import { MFullCalendar } from "@/modules/calendar";

const CalendarPage = () => {
  return (
    <Container maxWidth="2xl">
      <Paper>
        <Stack direction="row" width="100%">
          <Stack width={280} flexShrink={0}>
            Calendar and filter
          </Stack>
          <Stack flex={1}>
            <MFullCalendar />
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default CalendarPage;
