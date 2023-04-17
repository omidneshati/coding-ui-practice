import { GENERAL_NAV } from "../../../data/hardcodes";
import SidebarBtn from "../SidebarBtn";

const GeneralNav = () => {
  return (
    <>
      <span>General</span>
      <ul>
        {GENERAL_NAV.map((item) => (
          <li>
            <SidebarBtn key={item.Label} Icon={item.Icon} Label={item.Label} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GeneralNav;
