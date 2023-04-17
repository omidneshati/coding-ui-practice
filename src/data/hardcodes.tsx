import { sidebarBtnType } from "../types/types";

import { FiHome, FiMonitor, FiMoreHorizontal, FiInbox } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { BsBookmarkDash, BsSearch } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

export const GENERAL_NAV: sidebarBtnType[] = [
  { Icon: FiHome, Label: "market" },
  { Icon: RxDashboard, Label: "dashboard" },
  { Icon: FiMonitor, Label: "analytics" },
  { Icon: BsBookmarkDash, Label: "news" },
  { Icon: AiOutlineBarChart, Label: "reporting" },
  { Icon: BiWallet, Label: "wallet" },
  { Icon: FiMoreHorizontal, Label: "more" },
];

export const TOOLS: sidebarBtnType[] = [
  { Icon: BsSearch, Label: "Search" },
  { Icon: FiInbox, Label: "inbox" },
  { Icon: IoMdNotificationsOutline, Label: "notification" },
];
