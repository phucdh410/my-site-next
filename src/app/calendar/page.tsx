import { Container, Divider, Paper, Stack } from "@mui/material";

import { MFullCalendar, MSidebarCalendar } from "@/modules/calendar";

const CalendarPage = () => {
  return (
    <Container maxWidth="2xl">
      <Paper
        sx={{
          boxShadow: "0px 4px 10px rgb( 46 38 61 / 0.2)",
        }}
      >
        <Stack
          direction="row"
          width="100%"
          mb={10}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <MSidebarCalendar />
          <MFullCalendar />
        </Stack>
      </Paper>
    </Container>
  );
};

export default CalendarPage;
