import GeneralNav from "./SidebarSections/GeneralNav";
import Logo from "./SidebarSections/Logo";
import Profile from "./SidebarSections/Profile";
import Tools from "./SidebarSections/Tools";

const sidebar = () => {
  return (
    <aside>
      <Logo />
      <Tools />
      <GeneralNav />
      <Profile />
    </aside>
  );
};

export default sidebar;
