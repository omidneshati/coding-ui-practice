import { GENERAL_NAV, MARKET_NAV } from "../../../data/hardcodes";
import SidebarBtn from "../SidebarBtn";

const GeneralNav = () => {
  return (
    <ul className="flex-col gap-4">
      <div className="bg-gray-200 rounded-md">
        <SidebarBtn Icon={MARKET_NAV.Icon} label={MARKET_NAV.label} />
      </div>
      {GENERAL_NAV.map((item, index) => (
        <SidebarBtn key={item.label} Icon={item.Icon} label={item.label} />
      ))}
    </ul>
  );
};

export default GeneralNav;
