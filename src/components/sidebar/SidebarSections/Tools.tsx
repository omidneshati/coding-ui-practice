import { TOOLS } from "../../../data/hardcodes";
import SidebarBtn from "../SidebarBtn";

const Tools = () => {
  return (
    <ul className="flex flex-col">
      {TOOLS.map((item) => (
        <SidebarBtn key={item.label} Icon={item.Icon} label={item.label} />
      ))}
    </ul>
  );
};

export default Tools;
