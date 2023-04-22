import { sidebarBtnType } from "../../types/types";

const SidebarBtn = ({ Icon, label }: sidebarBtnType) => {
  return (
    <a className="flex items-center h-[30px] gap-4 pl-3 rounded-md cursor-pointer hover:bg-gray-200 font-medium my-[5px] capitalize">
      <Icon width={16} hanging={16} className="" />
      <span className="text-[16px] flex items-center">{label}</span>
    </a>
  );
};

export default SidebarBtn;
