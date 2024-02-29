"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useMemo, useState } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
} from "@mui/material";
import classNames from "classnames";

import { ISidebarItem } from "@/types/sidebar";

import { CSubItem } from "./CSubItem";

import "./styles.scss";

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "divider",
})(({ theme, divider: sub }) => ({
  borderRadius: "8px",
  color: "rgb(99, 115, 129)",
  padding: "4px 8px 4px 12px",
  minHeight: sub ? 36 : 44,
  "&.Mui-selected": {
    color: theme.palette.sidebar_item_selected.main,
    backgroundColor: theme.palette.sidebar_item_background_selected.main,
    "&:hover": {
      backgroundColor: "rgba(0, 167, 111, 0.16)",
    },
    ".MuiListItemIcon-root": {
      color: "currentColor",
      "svg.sidebar-icon": {
        color: "currentColor",
      },
    },
    ".MuiListItemText-root .MuiTypography-root": {
      fontWeight: 600,
    },
  },
}));
export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  marginRight: "16px",
  minWidth: "unset",
  flexShrink: 0,
  height: 24,
  width: 24,
  alignItems: "center",
  justifyContent: "center",
  ".sidebar-icon": {
    width: "100%",
  },
}));
export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  ".MuiTypography-root": {
    fontFamily: "var(--font-public-sans)",
    fontSize: "0.875rem",
    fontWeight: 500,
    textTransform: "capitalize",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export const CItem = ({ data }: { data: ISidebarItem }) => {
  //#region Data
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(false);

  const selected = useMemo(() => {
    return pathname.includes(data.path);
  }, [data, pathname]);
  //#endregion

  //#region Event
  const onToggle = () => {
    setOpen((prev) => !prev);
  };
  //#endregion

  //#region Render
  return data.children ? (
    <>
      <StyledListItemButton
        onClick={onToggle}
        selected={selected}
        LinkComponent={Link}
        className="sidebar-collapse-item"
      >
        <StyledListItemIcon>{data.icon}</StyledListItemIcon>
        <StyledListItemText>{data.label}</StyledListItemText>
        <FontAwesomeIcon
          className={classNames(open && "open", "sidebar-collapse-item--icon")}
          size="xs"
          icon={faChevronDown}
        />
      </StyledListItemButton>

      <Collapse in={open}>
        <Stack gap={0.5}>
          {data.children.map((subItem, index) => (
            <CSubItem
              key={subItem.label + index + new Date()}
              parentSlug={data.path}
              data={subItem}
            />
          ))}
        </Stack>
      </Collapse>
    </>
  ) : (
    <Link href={data.path} passHref>
      <StyledListItemButton selected={selected} LinkComponent={Link}>
        <StyledListItemIcon>{data.icon}</StyledListItemIcon>
        <StyledListItemText>{data.label}</StyledListItemText>
      </StyledListItemButton>
    </Link>
  );
  //#endregion
};
