import { GENERAL_NAV } from "../../../data/hardcodes";
import SidebarBtn from "../SidebarBtn";

const GeneralNav = () => {
  return (
    <>
      <span>General</span>
      <ul>
        {GENERAL_NAV.map((item) => (
          <li>
            <SidebarBtn key={item.label} Icon={item.Icon} label={item.label} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GeneralNav;
