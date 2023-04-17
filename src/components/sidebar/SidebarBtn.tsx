import { sidebarBtnType } from "../../types/types";

const SidebarBtn = ({ Icon, Label }: sidebarBtnType) => {
  return (
    <div>
      <Icon />
      <Label />
    </div>
  );
};

export default SidebarBtn;
