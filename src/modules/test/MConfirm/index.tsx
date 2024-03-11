"use client";

import { Button } from "@mui/material";

import { confirm } from "@/utils/confirm";

export const MConfirm = () => {
  return (
    <div>
      <Button
        variant="contained"
        onClick={async () => {
          if (await confirm({})) {
            console.log("Đã ok");
          } else {
            console.log("Từ chối");
          }
        }}
      >
        Click me
      </Button>
    </div>
  );
};
