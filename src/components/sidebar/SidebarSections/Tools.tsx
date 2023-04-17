import { TOOLS } from "../../../data/hardcodes";
import SidebarBtn from "../SidebarBtn";

const Tools = () => {
  return (
    <ul>
      {TOOLS.map((item) => (
        <li>
          <SidebarBtn key={item.Label} Icon={item.Icon} Label={item.Label} />
        </li>
      ))}
    </ul>
  );
};

export default Tools;
