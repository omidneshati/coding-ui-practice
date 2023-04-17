import { FiToggleRight } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";

import SidebarBtn from "./SidebarBtn";
import GeneralNav from "./SidebarSections/GeneralNav";
import Logo from "./SidebarSections/Logo";
import Profile from "./SidebarSections/Profile";
import Tools from "./SidebarSections/Tools";

const sidebar = () => {
  return (
    <aside className="uppercase">
      <Logo />
      <button className="">request</button>
      <Tools />
      <GeneralNav />
      <div>
        <SidebarBtn Icon={FiToggleRight} Label="help" />
        <SidebarBtn Icon={AiOutlineSetting} Label="settings" />
      </div>
      <Profile />
    </aside>
  );
};

export default sidebar;
