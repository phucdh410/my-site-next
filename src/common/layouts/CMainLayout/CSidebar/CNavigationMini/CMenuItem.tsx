import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  CSidebarItemIconMobile,
  CSidebarItemMobile,
  CSidebarItemTextMobile,
} from "@/styled/layouts/sidebar/mobile";
import { ISidebarItem } from "@/types/sidebar";

export const CMenuItem = ({ data }: { data: ISidebarItem }) => {
  //#region Data
  const pathname = usePathname();
  //#endregion

  //#region Render
  return (
    <CSidebarItemMobile
      key={data.id}
      selected={pathname.startsWith(data.path)}
      LinkComponent={Link}
      to={data.path}
    >
      <CSidebarItemIconMobile>{data.icon}</CSidebarItemIconMobile>
      <CSidebarItemTextMobile primary={data.label} />
    </CSidebarItemMobile>
  );
  //#endregion
};
