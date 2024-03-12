"use client";

import { forwardRef, useImperativeHandle, useState } from "react";

import { Divider, MenuItem, Zoom } from "@mui/material";

import { ContextMenu } from "./StyledComponent";
import { ICContextMenuRef, IContextPosition } from "./types";

export const CContextMenu = forwardRef<ICContextMenuRef, any>((props, ref) => {
  //#region Data
  const [contextPos, setContextPos] = useState<IContextPosition | null>(null);
  console.log("🚀 ~ CContextMenu ~ contextPos:", contextPos);
  //#endregion

  //#region Event
  const onClose = () => {
    setContextPos(null);
  };
  //#endregion

  useImperativeHandle(ref, () => ({
    updatePos: (x, y) => {
      setContextPos(contextPos === null ? { x, y } : null);

      setTimeout(() => {
        setContextPos({ x, y });
      }, 150);
    },
    clearPos: () => {
      setContextPos(null);
    },
  }));

  //#region Render
  return (
    <ContextMenu
      onClose={onClose}
      autoFocus={false}
      TransitionComponent={Zoom}
      anchorReference="anchorPosition"
      open={contextPos !== null}
      anchorPosition={
        contextPos !== null
          ? { top: contextPos.y, left: contextPos.x }
          : undefined
      }
    >
      <MenuItem onClick={onClose}>Copy</MenuItem>
      <MenuItem onClick={onClose}>Print</MenuItem>
      <Divider />
      <MenuItem onClick={onClose}>Highlight</MenuItem>
      <MenuItem onClick={onClose}>Email</MenuItem>
    </ContextMenu>
  );
  //#endregion
});
