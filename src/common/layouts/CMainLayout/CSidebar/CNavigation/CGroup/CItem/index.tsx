"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useMemo, useState } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, Stack } from "@mui/material";
import classNames from "classnames";

import {
  CSidebarItem,
  CSidebarItemIcon,
  CSidebarItemText,
} from "@/common/layouts/CMainLayout/StyledComponent";
import { ISidebarItem } from "@/types/sidebar";

import { CSubItem } from "./CSubItem";

import "./styles.scss";

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
      <CSidebarItem
        onClick={onToggle}
        selected={selected}
        LinkComponent={Link}
        className="sidebar-collapse-item"
      >
        <CSidebarItemIcon>{data.icon}</CSidebarItemIcon>
        <CSidebarItemText>{data.label}</CSidebarItemText>
        <FontAwesomeIcon
          className={classNames(open && "open", "sidebar-collapse-item--icon")}
          size="xs"
          icon={faChevronDown}
        />
      </CSidebarItem>

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
      <CSidebarItem selected={selected} LinkComponent={Link}>
        <CSidebarItemIcon>{data.icon}</CSidebarItemIcon>
        <CSidebarItemText>{data.label}</CSidebarItemText>
      </CSidebarItem>
    </Link>
  );
  //#endregion
};
