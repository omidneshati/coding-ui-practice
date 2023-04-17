import { TOOLS } from "../../../data/hardcodes";
import SidebarBtn from "../SidebarBtn";

const Tools = () => {
  return (
    <ul>
      {TOOLS.map((item) => (
        <li>
          <SidebarBtn key={item.label} Icon={item.Icon} label={item.label} />
        </li>
      ))}
    </ul>
  );
};

export default Tools;
