import { useState } from "react";

import { Menu, MenuItem, Typography } from "@mui/material";
import {
  gridPageSizeSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

const SIZE_OPTIONS = [
  { id: "10", label: "10/page" },
  { id: "20", label: "20/page" },
  { id: "50", label: "50/page" },
  // { id: "-1", label: "All" },
];

export const CSize = () => {
  //#region Data
  const [anchorEl, setAnchorEl] = useState<null | HTMLSpanElement>(null);
  const open = !!anchorEl;

  const gridApiRef = useGridApiContext();
  const pageSize = useGridSelector(gridApiRef, gridPageSizeSelector);
  //#endregion

  //#region Event
  const onClose = () => setAnchorEl(null);

  const onOpen = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
    setAnchorEl(event.currentTarget);

  const onPageSizeChange = (newSize: number) => () => {
    gridApiRef.current.setPageSize(newSize);
    onClose();
  };
  //#endregion

  //#region Render
  return (
    <>
      <Typography
        fontWeight={500}
        fontFamily="var(--font-raleway)"
        padding="2px 8px"
        borderRadius="8px"
        border="2px solid rgb(120 0 187 / 20%)"
        onClick={onOpen}
        sx={{ userSelect: "none", cursor: "pointer" }}
      >
        {SIZE_OPTIONS.find((e) => e.id === pageSize.toString())?.label || "IDK"}
      </Typography>
      <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
        {SIZE_OPTIONS.map((opt) => (
          <MenuItem
            key={opt.id}
            selected={opt.id === pageSize.toString()}
            value={opt.id}
            onClick={onPageSizeChange(Number(opt.id))}
          >
            {opt.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
  //#endregion
};
