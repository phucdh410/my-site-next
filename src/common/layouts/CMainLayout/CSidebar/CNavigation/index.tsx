import { Stack } from "@mui/material";

import { SIDEBAR } from "@/common/constants/sidebar";
import { CSmoothScrollbar } from "@/common/others";

import { CGroup } from "./CGroup";

export const CNavigation = () => {
  //#region Render
  return (
    <CSmoothScrollbar>
      <Stack overflow="auto">
        {SIDEBAR.map((group, index) => (
          <CGroup key={group.id} data={group} />
        ))}
      </Stack>
    </CSmoothScrollbar>
  );
  //#endregion
};
