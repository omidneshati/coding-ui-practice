import { FC, ReactNode } from "react";

const FieldContainer: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={`${className} p-6 bg-white rounded-2xl`}>{children}</div>
  );
};

export default FieldContainer;
