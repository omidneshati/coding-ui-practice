import { sidebarBtnType } from "../../types/types";

const SidebarBtn = ({ Icon, label }: sidebarBtnType) => {
  return (
    <a>
      <Icon />
      {label}
    </a>
  );
};

export default SidebarBtn;
