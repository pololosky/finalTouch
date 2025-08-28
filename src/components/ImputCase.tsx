import React from "react";

const ImputCase = ({
  children,
  width,
}: {
  children: React.ReactNode;
  width: string;
}) => {
  return (
    <div className={`flex justify-center ${width}`}>
      <div className={`flex flex-col gap-1 w-full items-center`}>{children}</div>
    </div>
  );
};

export default ImputCase;
