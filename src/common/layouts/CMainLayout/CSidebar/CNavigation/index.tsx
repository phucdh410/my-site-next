import { Stack } from "@mui/material";

import { SIDEBAR } from "@/common/constants/sidebar";

import { CGroup } from "./CGroup";

export const CNavigation = () => {
  //#region Render
  return (
    <Stack>
      {SIDEBAR.map((group, index) => (
        <CGroup key={group.id} data={group} />
      ))}
    </Stack>
  );
  //#endregion
};
