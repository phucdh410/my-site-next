import { createContext } from "react";

export const SidebarContext = createContext({
  groupOpen: "",
  setGroupOpen: (groupId: string) => {},
  childOpen: "",
  setChildOpen: (childId: string) => {},
});
