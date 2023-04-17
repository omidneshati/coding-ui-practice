import { FiToggleRight } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";

import SidebarBtn from "./SidebarBtn";
import GeneralNav from "./SidebarSections/GeneralNav";
import Logo from "./SidebarSections/Logo";
import Profile from "./SidebarSections/Profile";
import Tools from "./SidebarSections/Tools";

const Sidebar = () => {
  return (
    <aside className="capitalize">
      <Logo />
      <button className="">request</button>
      <Tools />
      <GeneralNav />
      <div>
        <SidebarBtn Icon={FiToggleRight} label="help" />
        <SidebarBtn Icon={AiOutlineSetting} label="settings" />
      </div>
      <Profile />
    </aside>
  );
};

export default Sidebar;
