"use client";

import { useState } from "react";

import {
  AutoAwesomeTwoTone,
  BackupTwoTone,
  CameraTwoTone,
  NoAdultContentTwoTone,
} from "@mui/icons-material";
import { Box, IconButton, Paper, Stack } from "@mui/material";
import classNames from "classnames";

import "./styles.scss";

const MOCK = [
  { id: "1", name: "Magic", icon: <AutoAwesomeTwoTone /> },
  { id: "2", name: "Camera", icon: <CameraTwoTone /> },
  { id: "3", name: "Home", icon: <NoAdultContentTwoTone /> },
  { id: "4", name: "Cloud", icon: <BackupTwoTone /> },
  { id: "5", name: "Home", icon: <AutoAwesomeTwoTone /> },
];

export const MAppBar = () => {
  //#region Data
  const [active, setActive] = useState<string>("3");
  //#endregion

  //#region Event
  const onClick = (id: string) => () => {
    setActive(id);
  };
  //#endregion

  //#region Render
  return (
    <Stack mt={5}>
      <Box display="inline-flex" p={5}>
        <Paper
          sx={{
            backgroundImage:
              "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
          }}
        >
          <Stack
            className="appbar-nav"
            direction="row"
            alignItems="center"
            position="relative"
            mt={20}
          >
            <div
              className={classNames(
                `current-${active}`,
                "appbar-overlay left-side"
              )}
            ></div>
            <div
              className={classNames(
                `current-${active}`,
                "appbar-overlay right-side"
              )}
            ></div>
            <div
              className={classNames(
                `current-${active}`,
                "appbar-overlay center-side"
              )}
            ></div>

            {MOCK.map((nav) => (
              <IconButton
                key={nav.id}
                className={classNames(
                  nav.id === active && "active",
                  "appbar-item"
                )}
                color={nav.id === active ? "error" : "default"}
                onClick={onClick(nav.id)}
                disableRipple
              >
                {nav.icon}
              </IconButton>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
  //#endregion
};
