import Link from "next/link";
import { usePathname } from "next/navigation";

import { useMemo } from "react";

import { Box } from "@mui/material";

import { ISidebarSubItem } from "@/types/sidebar";

import {
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
} from "..";

export const CSubItem = ({
  parentSlug,
  data,
}: {
  parentSlug: string;
  data: ISidebarSubItem;
}) => {
  //#region Data
  const pathname = usePathname();

  const selected = useMemo(() => {
    return pathname.includes(parentSlug + data.path);
  }, [pathname, data, parentSlug]);
  //#endregion

  //#region Render
  return (
    <Link href={parentSlug + data.path} passHref>
      <StyledListItemButton selected={selected} LinkComponent={Link} divider>
        <StyledListItemIcon>
          <Box
            height={4}
            width={4}
            borderRadius="50%"
            sx={{ backgroundColor: "currentcolor", color: "currentcolor" }}
          ></Box>
        </StyledListItemIcon>
        <StyledListItemText>{data.label}</StyledListItemText>
      </StyledListItemButton>
    </Link>
  );
  //#endregion
};
