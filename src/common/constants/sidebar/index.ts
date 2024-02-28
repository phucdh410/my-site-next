import { faAppStore, faProductHunt } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faComment,
  faFolderOpen,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBuildingColumns,
  faChartLine,
  faDumpster,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

import { ISidebar } from "@/types/sidebar";

export const SIDEBAR: ISidebar = [
  {
    id: "Overview",
    label: "Overview",
    children: [
      {
        id: "App",
        label: "App",
        path: "/app",
        icon: faAppStore,
        children: false,
      },
      {
        id: "E-commerce",
        label: "E-Commerce",
        path: "/e-commerce",
        icon: faDumpster,
        children: false,
      },
      {
        id: "Analytics",
        label: "Analytics",
        path: "/analytics",
        icon: faChartLine,
        children: false,
      },
      {
        id: "Banking",
        label: "Banking",
        path: "/banking",
        icon: faBuildingColumns,
        children: false,
      },
      {
        id: "Booking",
        label: "Booking",
        path: "/booking",
        icon: faPlane,
        children: false,
      },
      {
        id: "File",
        label: "File",
        path: "/file",
        icon: faFolderOpen,
        children: false,
      },
    ],
  },
  {
    id: "Management",
    label: "Management",
    children: [
      {
        id: "User",
        label: "User",
        path: "/user",
        icon: faUser,
        children: [
          { label: "Profile", path: "/profile" },
          { label: "Cards", path: "/cards" },
          { label: "List", path: "/list" },
          { label: "Create", path: "/create" },
        ],
      },
      {
        id: "Product",
        label: "Product",
        path: "/product",
        icon: faProductHunt,
        children: [
          { label: "Profile", path: "/profile" },
          { label: "Cards", path: "/cards" },
          { label: "List", path: "/list" },
          { label: "Create", path: "/create" },
        ],
      },
      {
        id: "Calendar",
        label: "Calendar",
        path: "/calendar",
        icon: faCalendarDays,
        children: false,
      },
    ],
  },
  {
    id: "Other Cases",
    label: "Other Cases",
    children: [
      {
        id: "Chat",
        label: "Chat",
        path: "/chat",
        icon: faComment,
        children: false,
      },
    ],
  },
];
