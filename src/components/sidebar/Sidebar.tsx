import { FiToggleRight } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";

import SidebarBtn from "./SidebarBtn";
import GeneralNav from "./SidebarSections/GeneralNav";
import Logo from "./SidebarSections/Logo";
import Profile from "./SidebarSections/Profile";
import Tools from "./SidebarSections/Tools";

const Sidebar = () => {
  return (
    <aside className="w-80 min-h-screen bg-white rounded-r-[50px] text-[#666666] px-10 py-8 ">
      <Logo />
      <div className="mb-10" />
      <Tools />
      <div className="mb-10" />
      <label className="block pl-3 mb-5">General</label>
      <GeneralNav />
      <div className="mb-24" />
      <div className="mt-auto mb-12">
        <SidebarBtn Icon={FiToggleRight} label="help" />
        <SidebarBtn Icon={AiOutlineSetting} label="settings" />
      </div>
      <Profile />
    </aside>
  );
};

export default Sidebar;
