"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useRef, useState } from "react";

import { ChevronRight } from "@mui/icons-material";
import { Grow, ListItemButton, Popover, Stack } from "@mui/material";

import {
  CSidebarItemIconMobile,
  CSidebarItemMobile,
  CSidebarItemTextMobile,
} from "@/styled/layouts/sidebar/mobile";
import { ISidebarItem } from "@/types/sidebar";

export const CListMenu = ({ data }: { data: ISidebarItem }) => {
  //#region Data
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(false);

  const anchorRef = useRef<null | HTMLDivElement>(null);
  console.log("🚀 ~ CListMenu ~ anchorRef:", anchorRef.current);

  const isInMenu = useRef<boolean>(false);
  //#endregion

  //#region Event
  const onButtonEnter = () => {
    setOpen(true);
  };

  const onButtonLeave = () => {
    if (!isInMenu.current) {
      setOpen(false);
      anchorRef.current?.classList.remove("Mui-focusVisible");
    }
  };

  const onMenuEnter = () => {
    isInMenu.current = true;
  };

  const onMenuLeave = () => {
    isInMenu.current = false;
    setOpen(false);
    anchorRef.current?.classList.remove("Mui-focusVisible");
  };
  //#endregion

  //#region Render
  return (
    <CSidebarItemMobile
      ref={anchorRef}
      onMouseEnter={onButtonEnter}
      onMouseLeave={onButtonLeave}
      selected={pathname.startsWith(data.path)}
    >
      <CSidebarItemIconMobile>
        {data.icon}
        <ChevronRight className="chevron-icon" />
      </CSidebarItemIconMobile>
      <CSidebarItemTextMobile primary={data.label} />

      <Popover
        open={open}
        anchorEl={anchorRef.current}
        TransitionComponent={Grow}
        transformOrigin={{ horizontal: "left", vertical: "center" }}
        anchorOrigin={{ horizontal: "right", vertical: "center" }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "10px",
              boxShadow:
                "rgb(224 240 255 / 20%) -4px 3px 20px 2px, rgb(173 185 249 / 18%) 0px 0px 20px 4px",
            },
          },
        }}
        sx={{ pointerEvents: "none" }}
      >
        <Stack
          direction="column"
          onMouseEnter={onMenuEnter}
          onMouseLeave={onMenuLeave}
          minWidth={180}
          borderRadius="10px"
          p={0.75}
          sx={{
            pointerEvents: "auto",
            backdropFilter: "blur(20px)",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backgroundImage:
              "linear-gradient(to top right, #f3e7e9 0%, #fff 30%, #ecf3fff7 100%)",
          }}
        >
          {data.children &&
            data.children.map((item) => (
              <ListItemButton
                key={item.label + item.path}
                component={Link}
                // to={item.path}
                href={item.path}
                selected={pathname.startsWith(item.path)}
                sx={{
                  padding: "0 8px",
                  fontSize: 14,
                  fontWeight: 600,
                  minHeight: 34,
                  borderRadius: "6px",
                  justifyContent: "start",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  color: "#637381",
                  "&:hover": {
                    backgroundColor: "rgb(0 0 0 / 4%)",
                    boxShadow: "none",
                  },
                  "&.Mui-selected": {
                    color: "rgb(0, 167, 111)",
                    backgroundColor: "rgba(0, 167, 111, 0.08)",
                  },
                }}
              >
                {item.label}
              </ListItemButton>
            ))}
        </Stack>
      </Popover>
    </CSidebarItemMobile>
  );
  //#endregion
};
