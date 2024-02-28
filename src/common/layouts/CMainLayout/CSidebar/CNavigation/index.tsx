import { useState } from "react";

import { Stack } from "@mui/material";

import { SIDEBAR } from "@/common/constants/sidebar";

import { CGroup } from "./CGroup";
import { SidebarContext } from "./context";

export const CNavigation = () => {
  //#region Data
  const [groupOpen, setGroupOpen] = useState<string>("");
  const [childOpen, setChildOpen] = useState<string>("");
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Stack>
      <SidebarContext.Provider
        value={{ groupOpen, setGroupOpen, childOpen, setChildOpen }}
      >
        {SIDEBAR.map((group, index) => (
          <CGroup key={group.id} data={group} />
        ))}
      </SidebarContext.Provider>
    </Stack>
  );
  //#endregion
};
