import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface ISidebarSubItem
  extends Omit<ISidebarItem, "children" | "icon" | "id"> {}

export interface ISidebarItem {
  id: string;
  label: string;
  path: string;
  icon: IconDefinition;
  children: false | ISidebarSubItem[];
}

export interface IGroupSidebar {
  id: string;
  label: string;
  children: ISidebarItem[];
}

export interface ISidebar extends Array<IGroupSidebar> {}
